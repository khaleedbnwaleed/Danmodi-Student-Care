-- Seed data for Danmodi Students Care Portal
-- Run this after creating the schema

USE danmodi_portal;

-- Insert Jigawa State LGAs
INSERT INTO lgas (name) VALUES
('Auyo'), ('Babura'), ('Biriniwa'), ('Birnin Kudu'), ('Buji'), ('Dutse'),
('Gagarawa'), ('Garki'), ('Gumel'), ('Guri'), ('Gwaram'), ('Gwiwa'),
('Hadejia'), ('Jahun'), ('Kafin Hausa'), ('Kaugama'), ('Kazaure'),
('Kiri Kasama'), ('Kiyawa'), ('Maigatari'), ('Malam Madori'), ('Miga'),
('Ringim'), ('Roni'), ('Sule Tankarkar'), ('Taura'), ('Yankwashi');

-- Insert study fields
INSERT INTO study_fields (name, is_priority, description) VALUES
('Medicine', TRUE, 'Medical and health sciences programs'),
('Engineering', TRUE, 'All engineering disciplines'),
('Agriculture', TRUE, 'Agricultural sciences and related fields'),
('Nursing', TRUE, 'Nursing and midwifery programs'),
('Pharmacy', TRUE, 'Pharmaceutical sciences'),
('Law', FALSE, 'Legal studies and jurisprudence'),
('Education', FALSE, 'Teaching and educational sciences'),
('Computer Science', FALSE, 'Computing and information technology'),
('Business Administration', FALSE, 'Business and management studies'),
('Economics', FALSE, 'Economic sciences'),
('Political Science', FALSE, 'Political and social sciences'),
('Mass Communication', FALSE, 'Media and communication studies'),
('Psychology', FALSE, 'Psychological sciences'),
('Sociology', FALSE, 'Social sciences'),
('Chemistry', FALSE, 'Chemical sciences'),
('Physics', FALSE, 'Physical sciences'),
('Mathematics', FALSE, 'Mathematical sciences'),
('Biology', FALSE, 'Biological sciences'),
('English', FALSE, 'English language and literature'),
('Arabic', FALSE, 'Arabic language and Islamic studies'),
('Islamic Studies', FALSE, 'Islamic theology and studies'),
('Other', FALSE, 'Other fields of study');

-- Insert major institutions
INSERT INTO institutions (name, type, location) VALUES
('Ahmadu Bello University', 'university', 'Zaria, Kaduna State'),
('University of Maiduguri', 'university', 'Maiduguri, Borno State'),
('Bayero University Kano', 'university', 'Kano, Kano State'),
('Federal University of Technology Minna', 'university', 'Minna, Niger State'),
('University of Abuja', 'university', 'Abuja, FCT'),
('Federal University Dutse', 'university', 'Dutse, Jigawa State'),
('Jigawa State University', 'university', 'Kafin Hausa, Jigawa State'),
('Federal University Gashua', 'university', 'Gashua, Yobe State'),
('University of Jos', 'university', 'Jos, Plateau State'),
('Federal University Lafia', 'university', 'Lafia, Nasarawa State'),
('Kaduna State University', 'university', 'Kaduna, Kaduna State'),
('Kano University of Science and Technology', 'university', 'Wudil, Kano State'),
('Federal Polytechnic Damaturu', 'polytechnic', 'Damaturu, Yobe State'),
('Hussaini Adamu Federal Polytechnic', 'polytechnic', 'Kazaure, Jigawa State'),
('Federal College of Education Kano', 'college', 'Kano, Kano State');

-- Insert demo users with hashed passwords
-- Password for all demo accounts is their respective password (admin123, coord123, student123)
INSERT INTO users (first_name, last_name, email, phone, password_hash, role, lga, account_type, status, email_verified) VALUES
('Senior Special', 'Assistant', 'admin@danmodi.gov.ng', '+2348012345678', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin', 'Dutse', 'admin', 'active', TRUE),
('Program', 'Coordinator', 'coordinator@danmodi.gov.ng', '+2348012345679', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'coordinator', 'Dutse', 'coordinator', 'active', TRUE),
('Aisha', 'Mohammed', 'student@example.com', '+2348012345680', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'student', 'Dutse', 'student', 'active', TRUE),
('Ibrahim', 'Sani', 'ibrahim.sani@example.com', '+2348012345681', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'student', 'Hadejia', 'student', 'active', TRUE),
('Fatima', 'Usman', 'fatima.usman@example.com', '+2348012345682', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'applicant', 'Ringim', 'applicant', 'active', TRUE);

-- Insert sample applications
INSERT INTO applications (
    user_id, application_number, middle_name, date_of_birth, gender, address, ward, lga_id,
    education_level, current_institution_id, course_of_study, year_of_study, cgpa,
    previous_qualification, graduation_year, father_name, father_occupation, father_income_range,
    mother_name, mother_occupation, mother_income_range, family_size,
    study_field_id, preferred_institution_id, personal_statement, why_deserve_scholarship,
    career_goals, status, submitted_at
) VALUES
(3, 'DSC2024001', 'Khadija', '2002-05-15', 'female', 'No. 12 Ahmadu Bello Way, Dutse', 'Dutse Central', 6,
 'undergraduate', 1, 'Medicine and Surgery', '3', '4.2', 'WAEC', 2020,
 'Mohammed Abubakar', 'Farmer', '0-30000', 'Hauwa Mohammed', 'Trader', '0-30000', 8,
 1, 1, 'I am a dedicated student from a rural background...', 'I deserve this scholarship because...', 
 'I plan to become a doctor and serve my community...', 'approved', '2024-01-15 10:30:00'),

(4, 'DSC2024002', 'Abdullahi', '2001-08-22', 'male', 'Hadejia Township', 'Hadejia Central', 13,
 'undergraduate', 3, 'Civil Engineering', '2', '3.8', 'WAEC', 2019,
 'Sani Ibrahim', 'Civil Servant', '30000-50000', 'Zainab Sani', 'Housewife', '0-30000', 6,
 2, 3, 'Engineering has always been my passion...', 'Coming from a modest family...', 
 'I want to contribute to infrastructure development...', 'approved', '2024-01-20 14:15:00'),

(5, 'DSC2024003', 'Amina', '2003-03-10', 'female', 'Ringim Local Government', 'Ringim Central', 23,
 'undergraduate', 6, 'Agricultural Science', '1', '4.0', 'WAEC', 2021,
 'Usman Fatima', 'Farmer', '0-30000', 'Maryam Usman', 'Farmer', '0-30000', 10,
 3, 6, 'Agriculture is the backbone of our economy...', 'As the first child in my family...', 
 'I aim to modernize farming practices...', 'under_review', '2024-02-01 09:45:00');

-- Insert sample scholarships
INSERT INTO scholarships (application_id, user_id, scholarship_type, amount_annual, duration_years, start_date, end_date, status) VALUES
(1, 3, 'full', 450000.00, 4, '2024-01-01', '2027-12-31', 'active'),
(2, 4, 'full', 380000.00, 4, '2024-01-01', '2027-12-31', 'active');

-- Insert sample payments
INSERT INTO payments (scholarship_id, user_id, amount, payment_type, payment_method, reference_number, academic_session, semester, status, payment_date) VALUES
(1, 3, 75000.00, 'stipend', 'Bank Transfer', 'DSC2024001001', '2023/2024', 'First', 'completed', '2024-01-15'),
(1, 3, 75000.00, 'stipend', 'Bank Transfer', 'DSC2024001002', '2023/2024', 'Second', 'completed', '2024-02-15'),
(2, 4, 65000.00, 'stipend', 'Bank Transfer', 'DSC2024002001', '2023/2024', 'First', 'completed', '2024-01-15'),
(2, 4, 65000.00, 'stipend', 'Bank Transfer', 'DSC2024002002', '2023/2024', 'Second', 'completed', '2024-02-15');

-- Insert sample notifications
INSERT INTO notifications (user_id, title, message, type) VALUES
(3, 'Scholarship Renewal Approved', 'Your scholarship has been renewed for the 2024/2025 academic year.', 'success'),
(3, 'Monthly Stipend Disbursed', '₦75,000 has been credited to your account for February 2024.', 'info'),
(3, 'Academic Report Due', 'Please submit your semester academic report by March 15th, 2024.', 'warning'),
(4, 'Payment Processed', 'Your monthly stipend of ₦65,000 has been processed.', 'success'),
(4, 'Mentorship Session Scheduled', 'Your next mentorship session is scheduled for next week.', 'info'),
(5, 'Application Under Review', 'Your scholarship application is currently being reviewed by our team.', 'info');

-- Insert system settings
INSERT INTO settings (setting_key, setting_value, description) VALUES
('app_name', 'Danmodi Students Care Portal', 'Application name'),
('app_version', '1.0.0', 'Current application version'),
('max_file_upload_size', '5242880', 'Maximum file upload size in bytes (5MB)'),
('allowed_file_types', 'pdf,jpg,jpeg,png', 'Allowed file types for document upload'),
('application_deadline', '2024-12-31', 'Application deadline for current academic year'),
('scholarship_amount_undergraduate', '400000', 'Default annual scholarship amount for undergraduate'),
('scholarship_amount_postgraduate', '500000', 'Default annual scholarship amount for postgraduate'),
('contact_email', 'info@danmodistudentscare.com.ng', 'Official contact email'),
('contact_phone', '+234-xxx-xxx-xxxx', 'Official contact phone number');

-- Insert sample activity logs
INSERT INTO activity_logs (user_id, action, description, ip_address) VALUES
(1, 'login', 'Admin user logged in', '127.0.0.1'),
(2, 'login', 'Coordinator user logged in', '127.0.0.1'),
(3, 'login', 'Student user logged in', '127.0.0.1'),
(3, 'application_submit', 'Student submitted scholarship application', '127.0.0.1'),
(1, 'application_approve', 'Admin approved scholarship application DSC2024001', '127.0.0.1');
