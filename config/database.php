<?php
// Database configuration and connection class

class Database {
    private $host = 'localhost';
    private $db_name = 'danmodi_portal';
    private $username = 'root';
    private $password = '';
    private $conn;
    
    public function __construct() {
        $this->connect();
    }
    
    private function connect() {
        try {
            $this->conn = new PDO(
                "mysql:host=" . $this->host . ";dbname=" . $this->db_name . ";charset=utf8mb4",
                $this->username,
                $this->password,
                [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                    PDO::ATTR_EMULATE_PREPARES => false
                ]
            );
        } catch(PDOException $e) {
            die("Connection failed: " . $e->getMessage());
        }
    }
    
    public function getConnection() {
        return $this->conn;
    }
    
    // Helper method to execute queries
    public function query($sql, $params = []) {
        try {
            $stmt = $this->conn->prepare($sql);
            $stmt->execute($params);
            return $stmt;
        } catch(PDOException $e) {
            error_log("Database query error: " . $e->getMessage());
            return false;
        }
    }
    
    // Get single record
    public function fetch($sql, $params = []) {
        $stmt = $this->query($sql, $params);
        return $stmt ? $stmt->fetch() : false;
    }
    
    // Get multiple records
    public function fetchAll($sql, $params = []) {
        $stmt = $this->query($sql, $params);
        return $stmt ? $stmt->fetchAll() : [];
    }
    
    // Insert record and return last insert ID
    public function insert($sql, $params = []) {
        $stmt = $this->query($sql, $params);
        return $stmt ? $this->conn->lastInsertId() : false;
    }
    
    // Update/Delete records and return affected rows
    public function execute($sql, $params = []) {
        $stmt = $this->query($sql, $params);
        return $stmt ? $stmt->rowCount() : false;
    }
    
    // Begin transaction
    public function beginTransaction() {
        return $this->conn->beginTransaction();
    }
    
    // Commit transaction
    public function commit() {
        return $this->conn->commit();
    }
    
    // Rollback transaction
    public function rollback() {
        return $this->conn->rollback();
    }
}

// Global database instance
$db = new Database();

// Helper functions for common database operations
function getUser($email) {
    global $db;
    return $db->fetch("SELECT * FROM users WHERE email = ?", [$email]);
}

function getUserById($id) {
    global $db;
    return $db->fetch("SELECT * FROM users WHERE id = ?", [$id]);
}

function createUser($data) {
    global $db;
    $sql = "INSERT INTO users (first_name, last_name, email, phone, password_hash, role, lga, account_type) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    return $db->insert($sql, [
        $data['first_name'],
        $data['last_name'], 
        $data['email'],
        $data['phone'],
        $data['password_hash'],
        $data['role'],
        $data['lga'],
        $data['account_type']
    ]);
}

function getAllLGAs() {
    global $db;
    return $db->fetchAll("SELECT * FROM lgas ORDER BY name");
}

function getAllStudyFields() {
    global $db;
    return $db->fetchAll("SELECT * FROM study_fields ORDER BY is_priority DESC, name");
}

function getAllInstitutions() {
    global $db;
    return $db->fetchAll("SELECT * FROM institutions ORDER BY name");
}

function getUserApplications($userId) {
    global $db;
    return $db->fetchAll("
        SELECT a.*, l.name as lga_name, sf.name as study_field_name, i.name as institution_name
        FROM applications a
        LEFT JOIN lgas l ON a.lga_id = l.id
        LEFT JOIN study_fields sf ON a.study_field_id = sf.id
        LEFT JOIN institutions i ON a.preferred_institution_id = i.id
        WHERE a.user_id = ?
        ORDER BY a.created_at DESC
    ", [$userId]);
}

function getApplicationStats() {
    global $db;
    $stats = [];
    
    $stats['total_applications'] = $db->fetch("SELECT COUNT(*) as count FROM applications")['count'];
    $stats['approved_applications'] = $db->fetch("SELECT COUNT(*) as count FROM applications WHERE status = 'approved'")['count'];
    $stats['pending_applications'] = $db->fetch("SELECT COUNT(*) as count FROM applications WHERE status IN ('submitted', 'under_review')")['count'];
    $stats['total_users'] = $db->fetch("SELECT COUNT(*) as count FROM users")['count'];
    $stats['active_scholarships'] = $db->fetch("SELECT COUNT(*) as count FROM scholarships WHERE status = 'active'")['count'];
    $stats['total_disbursed'] = $db->fetch("SELECT SUM(amount) as total FROM payments WHERE status = 'completed'")['total'] ?? 0;
    
    return $stats;
}

function logActivity($userId, $action, $description, $ipAddress = null) {
    global $db;
    $ipAddress = $ipAddress ?? $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $userAgent = $_SERVER['HTTP_USER_AGENT'] ?? '';
    
    return $db->insert("
        INSERT INTO activity_logs (user_id, action, description, ip_address, user_agent) 
        VALUES (?, ?, ?, ?, ?)
    ", [$userId, $action, $description, $ipAddress, $userAgent]);
}

function createNotification($userId, $title, $message, $type = 'info') {
    global $db;
    return $db->insert("
        INSERT INTO notifications (user_id, title, message, type) 
        VALUES (?, ?, ?, ?)
    ", [$userId, $title, $message, $type]);
}

function getUserNotifications($userId, $limit = 10) {
    global $db;
    return $db->fetchAll("
        SELECT * FROM notifications 
        WHERE user_id = ? 
        ORDER BY created_at DESC 
        LIMIT ?
    ", [$userId, $limit]);
}
?>
