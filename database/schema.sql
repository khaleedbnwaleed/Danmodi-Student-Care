-- Danmodi Students Care Portal Database Schema
-- Run this script to create the database structure

CREATE DATABASE IF NOT EXISTS danmodi_portal CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE danmodi_portal;

-- Users table for authentication
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('admin', 'coordinator', 'student', 'applicant', 'parent') DEFAULT 'applicant',
    lga VARCHAR(50),
    account_type VARCHAR(20),
    status ENUM('active', 'inactive', 'pending', 'suspended') DEFAULT 'active',
    email_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- LGAs (Local Government Areas) reference table
CREATE TABLE lgas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    state VARCHAR(50) DEFAULT 'Jigawa',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Study fields reference table
CREATE TABLE study_fields (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    is_priority BOOLEAN DEFAULT FALSE,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Institutions reference table
CREATE TABLE institutions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    type ENUM('university', 'polytechnic', 'college', 'other') DEFAULT 'university',
    location VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Scholarship applications
CREATE TABLE applications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    application_number VARCHAR(50) UNIQUE,
    
    -- Personal Information
    middle_name VARCHAR(100),
    date_of_birth DATE,
    gender ENUM('male', 'female'),
    address TEXT,
    ward VARCHAR(100),
    lga_id INT,
    
    -- Academic Information
    education_level ENUM('undergraduate', 'masters', 'phd', 'medical'),
    current_institution_id INT,
    course_of_study VARCHAR(255),
    year_of_study VARCHAR(20),
    cgpa VARCHAR(10),
    previous_qualification VARCHAR(100),
    graduation_year YEAR,
    
    -- Family Information
    father_name VARCHAR(255),
    father_occupation VARCHAR(100),
    father_income_range VARCHAR(50),
    mother_name VARCHAR(255),
    mother_occupation VARCHAR(100),
    mother_income_range VARCHAR(50),
    family_size INT,
    guardian_name VARCHAR(255),
    guardian_phone VARCHAR(20),
    
    -- Program Selection
    study_field_id INT,
    preferred_institution_id INT,
    alternative_institution_id INT,
    
    -- Special Circumstances
    has_disability BOOLEAN DEFAULT FALSE,
    disability_type VARCHAR(255),
    is_woman_in_health BOOLEAN DEFAULT FALSE,
    is_extremely_poor BOOLEAN DEFAULT FALSE,
    
    -- Essays
    personal_statement TEXT,
    why_deserve_scholarship TEXT,
    career_goals TEXT,
    
    -- Application Status
    status ENUM('draft', 'submitted', 'under_review', 'approved', 'rejected', 'pending_documents') DEFAULT 'draft',
    submitted_at TIMESTAMP NULL,
    reviewed_at TIMESTAMP NULL,
    reviewed_by INT NULL,
    review_notes TEXT,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (lga_id) REFERENCES lgas(id),
    FOREIGN KEY (current_institution_id) REFERENCES institutions(id),
    FOREIGN KEY (study_field_id) REFERENCES study_fields(id),
    FOREIGN KEY (preferred_institution_id) REFERENCES institutions(id),
    FOREIGN KEY (alternative_institution_id) REFERENCES institutions(id),
    FOREIGN KEY (reviewed_by) REFERENCES users(id)
);

-- Application documents
CREATE TABLE application_documents (
    id INT PRIMARY KEY AUTO_INCREMENT,
    application_id INT NOT NULL,
    document_type ENUM('olevel_result', 'jamb_result', 'transcript', 'birth_certificate', 'indigene_certificate', 'passport_photo', 'medical_certificate', 'other'),
    file_name VARCHAR(255) NOT NULL,
    file_path VARCHAR(500) NOT NULL,
    file_size INT,
    mime_type VARCHAR(100),
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (application_id) REFERENCES applications(id) ON DELETE CASCADE
);

-- Scholarships awarded
CREATE TABLE scholarships (
    id INT PRIMARY KEY AUTO_INCREMENT,
    application_id INT NOT NULL,
    user_id INT NOT NULL,
    scholarship_type ENUM('full', 'partial', 'special_quota'),
    amount_annual DECIMAL(12,2),
    duration_years INT DEFAULT 4,
    start_date DATE,
    end_date DATE,
    status ENUM('active', 'completed', 'suspended', 'terminated') DEFAULT 'active',
    
    -- Payment tracking
    total_disbursed DECIMAL(12,2) DEFAULT 0,
    last_payment_date DATE,
    next_payment_date DATE,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (application_id) REFERENCES applications(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Payment records
CREATE TABLE payments (
    id INT PRIMARY KEY AUTO_INCREMENT,
    scholarship_id INT NOT NULL,
    user_id INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    payment_type ENUM('tuition', 'stipend', 'books', 'accommodation', 'other'),
    payment_method VARCHAR(50),
    reference_number VARCHAR(100),
    academic_session VARCHAR(20),
    semester VARCHAR(20),
    status ENUM('pending', 'completed', 'failed', 'cancelled') DEFAULT 'pending',
    payment_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (scholarship_id) REFERENCES scholarships(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Academic reports from students
CREATE TABLE academic_reports (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    scholarship_id INT NOT NULL,
    academic_session VARCHAR(20),
    semester VARCHAR(20),
    cgpa DECIMAL(3,2),
    courses_registered INT,
    courses_passed INT,
    report_file_path VARCHAR(500),
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    verified_at TIMESTAMP NULL,
    verified_by INT NULL,
    
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (scholarship_id) REFERENCES scholarships(id),
    FOREIGN KEY (verified_by) REFERENCES users(id)
);

-- System notifications
CREATE TABLE notifications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    type ENUM('info', 'success', 'warning', 'error') DEFAULT 'info',
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- System settings
CREATE TABLE settings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    setting_key VARCHAR(100) UNIQUE NOT NULL,
    setting_value TEXT,
    description TEXT,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Activity logs
CREATE TABLE activity_logs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    action VARCHAR(100) NOT NULL,
    description TEXT,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- Create indexes for better performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_applications_status ON applications(status);
CREATE INDEX idx_applications_user_id ON applications(user_id);
CREATE INDEX idx_scholarships_status ON scholarships(status);
CREATE INDEX idx_payments_status ON payments(status);
CREATE INDEX idx_notifications_user_id ON notifications(user_id);
CREATE INDEX idx_activity_logs_user_id ON activity_logs(user_id);
