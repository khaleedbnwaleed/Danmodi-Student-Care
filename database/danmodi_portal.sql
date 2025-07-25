-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 26, 2025 at 12:52 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `danmodi_portal`
--

-- --------------------------------------------------------

--
-- Table structure for table `academic_reports`
--

CREATE TABLE `academic_reports` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `scholarship_id` int(11) NOT NULL,
  `academic_session` varchar(20) DEFAULT NULL,
  `semester` varchar(20) DEFAULT NULL,
  `cgpa` decimal(3,2) DEFAULT NULL,
  `courses_registered` int(11) DEFAULT NULL,
  `courses_passed` int(11) DEFAULT NULL,
  `report_file_path` varchar(500) DEFAULT NULL,
  `submitted_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `verified_at` timestamp NULL DEFAULT NULL,
  `verified_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `activity_logs`
--

CREATE TABLE `activity_logs` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `action` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `activity_logs`
--

INSERT INTO `activity_logs` (`id`, `user_id`, `action`, `description`, `ip_address`, `user_agent`, `created_at`) VALUES
(1, 1, 'login', 'Admin user logged in', '127.0.0.1', NULL, '2025-07-19 18:29:51'),
(2, 2, 'login', 'Coordinator user logged in', '127.0.0.1', NULL, '2025-07-19 18:29:51'),
(3, 3, 'login', 'Student user logged in', '127.0.0.1', NULL, '2025-07-19 18:29:51'),
(4, 3, 'application_submit', 'Student submitted scholarship application', '127.0.0.1', NULL, '2025-07-19 18:29:51'),
(5, 1, 'application_approve', 'Admin approved scholarship application DSC2024001', '127.0.0.1', NULL, '2025-07-19 18:29:51'),
(6, 6, 'register', 'New user account created', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36', '2025-07-19 23:32:32'),
(7, 6, 'login', 'User logged in successfully', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36', '2025-07-19 23:33:14'),
(8, 7, 'register', 'New user account created', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36', '2025-07-25 16:56:09'),
(9, 7, 'logout', 'User logged out', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36', '2025-07-25 16:58:36'),
(10, 8, 'register', 'New user account created', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36', '2025-07-25 17:00:51'),
(11, 8, 'login', 'User logged in successfully', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36', '2025-07-25 17:01:15'),
(12, 9, 'register', 'New user account created', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36', '2025-07-25 17:12:17'),
(13, 10, 'register', 'New user account created', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36', '2025-07-25 17:15:27'),
(14, 11, 'register', 'New user account created', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36', '2025-07-25 17:15:54'),
(15, 11, 'logout', 'User logged out', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36', '2025-07-25 17:16:34'),
(16, 11, 'login', 'User logged in successfully', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36', '2025-07-25 17:16:48'),
(17, 11, 'login', 'User logged in successfully', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36', '2025-07-25 17:30:17'),
(18, 11, 'login', 'User logged in successfully', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36', '2025-07-25 17:31:30'),
(19, 12, 'register', 'New user account created', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36', '2025-07-25 21:34:32'),
(20, 12, 'login', 'User logged in successfully', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36', '2025-07-25 21:40:13'),
(21, 13, 'register', 'New user account created', '::1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36', '2025-07-25 22:09:37');

-- --------------------------------------------------------

--
-- Table structure for table `applications`
--

CREATE TABLE `applications` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `application_number` varchar(50) DEFAULT NULL,
  `middle_name` varchar(100) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `gender` enum('male','female') DEFAULT NULL,
  `address` text DEFAULT NULL,
  `ward` varchar(100) DEFAULT NULL,
  `lga_id` int(11) DEFAULT NULL,
  `education_level` enum('undergraduate','masters','phd','medical') DEFAULT NULL,
  `current_institution_id` int(11) DEFAULT NULL,
  `course_of_study` varchar(255) DEFAULT NULL,
  `year_of_study` varchar(20) DEFAULT NULL,
  `cgpa` varchar(10) DEFAULT NULL,
  `previous_qualification` varchar(100) DEFAULT NULL,
  `graduation_year` year(4) DEFAULT NULL,
  `father_name` varchar(255) DEFAULT NULL,
  `father_occupation` varchar(100) DEFAULT NULL,
  `father_income_range` varchar(50) DEFAULT NULL,
  `mother_name` varchar(255) DEFAULT NULL,
  `mother_occupation` varchar(100) DEFAULT NULL,
  `mother_income_range` varchar(50) DEFAULT NULL,
  `family_size` int(11) DEFAULT NULL,
  `guardian_name` varchar(255) DEFAULT NULL,
  `guardian_phone` varchar(20) DEFAULT NULL,
  `study_field_id` int(11) DEFAULT NULL,
  `preferred_institution_id` int(11) DEFAULT NULL,
  `alternative_institution_id` int(11) DEFAULT NULL,
  `has_disability` tinyint(1) DEFAULT 0,
  `disability_type` varchar(255) DEFAULT NULL,
  `is_woman_in_health` tinyint(1) DEFAULT 0,
  `is_extremely_poor` tinyint(1) DEFAULT 0,
  `personal_statement` text DEFAULT NULL,
  `why_deserve_scholarship` text DEFAULT NULL,
  `career_goals` text DEFAULT NULL,
  `status` enum('draft','submitted','under_review','approved','rejected','pending_documents') DEFAULT 'draft',
  `submitted_at` timestamp NULL DEFAULT NULL,
  `reviewed_at` timestamp NULL DEFAULT NULL,
  `reviewed_by` int(11) DEFAULT NULL,
  `review_notes` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `applications`
--

INSERT INTO `applications` (`id`, `user_id`, `application_number`, `middle_name`, `date_of_birth`, `gender`, `address`, `ward`, `lga_id`, `education_level`, `current_institution_id`, `course_of_study`, `year_of_study`, `cgpa`, `previous_qualification`, `graduation_year`, `father_name`, `father_occupation`, `father_income_range`, `mother_name`, `mother_occupation`, `mother_income_range`, `family_size`, `guardian_name`, `guardian_phone`, `study_field_id`, `preferred_institution_id`, `alternative_institution_id`, `has_disability`, `disability_type`, `is_woman_in_health`, `is_extremely_poor`, `personal_statement`, `why_deserve_scholarship`, `career_goals`, `status`, `submitted_at`, `reviewed_at`, `reviewed_by`, `review_notes`, `created_at`, `updated_at`) VALUES
(1, 3, 'DSC2024001', 'Khadija', '2002-05-15', 'female', 'No. 12 Ahmadu Bello Way, Dutse', 'Dutse Central', 6, 'undergraduate', 1, 'Medicine and Surgery', '3', '4.2', 'WAEC', '2020', 'Mohammed Abubakar', 'Farmer', '0-30000', 'Hauwa Mohammed', 'Trader', '0-30000', 8, NULL, NULL, 1, 1, NULL, 0, NULL, 0, 0, 'I am a dedicated student from a rural background...', 'I deserve this scholarship because...', 'I plan to become a doctor and serve my community...', 'approved', '2024-01-15 09:30:00', NULL, NULL, NULL, '2025-07-19 18:29:50', '2025-07-19 18:29:50'),
(2, 4, 'DSC2024002', 'Abdullahi', '2001-08-22', 'male', 'Hadejia Township', 'Hadejia Central', 13, 'undergraduate', 3, 'Civil Engineering', '2', '3.8', 'WAEC', '2019', 'Sani Ibrahim', 'Civil Servant', '30000-50000', 'Zainab Sani', 'Housewife', '0-30000', 6, NULL, NULL, 2, 3, NULL, 0, NULL, 0, 0, 'Engineering has always been my passion...', 'Coming from a modest family...', 'I want to contribute to infrastructure development...', 'approved', '2024-01-20 13:15:00', NULL, NULL, NULL, '2025-07-19 18:29:50', '2025-07-19 18:29:50'),
(3, 5, 'DSC2024003', 'Amina', '2003-03-10', 'female', 'Ringim Local Government', 'Ringim Central', 23, 'undergraduate', 6, 'Agricultural Science', '1', '4.0', 'WAEC', '2021', 'Usman Fatima', 'Farmer', '0-30000', 'Maryam Usman', 'Farmer', '0-30000', 10, NULL, NULL, 3, 6, NULL, 0, NULL, 0, 0, 'Agriculture is the backbone of our economy...', 'As the first child in my family...', 'I aim to modernize farming practices...', 'under_review', '2024-02-01 08:45:00', NULL, NULL, NULL, '2025-07-19 18:29:50', '2025-07-19 18:29:50');

-- --------------------------------------------------------

--
-- Table structure for table `application_documents`
--

CREATE TABLE `application_documents` (
  `id` int(11) NOT NULL,
  `application_id` int(11) NOT NULL,
  `document_type` enum('olevel_result','jamb_result','transcript','birth_certificate','indigene_certificate','passport_photo','medical_certificate','other') DEFAULT NULL,
  `file_name` varchar(255) NOT NULL,
  `file_path` varchar(500) NOT NULL,
  `file_size` int(11) DEFAULT NULL,
  `mime_type` varchar(100) DEFAULT NULL,
  `uploaded_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `institutions`
--

CREATE TABLE `institutions` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` enum('university','polytechnic','college','other') DEFAULT 'university',
  `location` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `institutions`
--

INSERT INTO `institutions` (`id`, `name`, `type`, `location`, `created_at`) VALUES
(1, 'Ahmadu Bello University', 'university', 'Zaria, Kaduna State', '2025-07-19 18:29:50'),
(2, 'University of Maiduguri', 'university', 'Maiduguri, Borno State', '2025-07-19 18:29:50'),
(3, 'Bayero University Kano', 'university', 'Kano, Kano State', '2025-07-19 18:29:50'),
(4, 'Federal University of Technology Minna', 'university', 'Minna, Niger State', '2025-07-19 18:29:50'),
(5, 'University of Abuja', 'university', 'Abuja, FCT', '2025-07-19 18:29:50'),
(6, 'Federal University Dutse', 'university', 'Dutse, Jigawa State', '2025-07-19 18:29:50'),
(7, 'Jigawa State University', 'university', 'Kafin Hausa, Jigawa State', '2025-07-19 18:29:50'),
(8, 'Federal University Gashua', 'university', 'Gashua, Yobe State', '2025-07-19 18:29:50'),
(9, 'University of Jos', 'university', 'Jos, Plateau State', '2025-07-19 18:29:50'),
(10, 'Federal University Lafia', 'university', 'Lafia, Nasarawa State', '2025-07-19 18:29:50'),
(11, 'Kaduna State University', 'university', 'Kaduna, Kaduna State', '2025-07-19 18:29:50'),
(12, 'Kano University of Science and Technology', 'university', 'Wudil, Kano State', '2025-07-19 18:29:50'),
(13, 'Federal Polytechnic Damaturu', 'polytechnic', 'Damaturu, Yobe State', '2025-07-19 18:29:50'),
(14, 'Hussaini Adamu Federal Polytechnic', 'polytechnic', 'Kazaure, Jigawa State', '2025-07-19 18:29:50'),
(15, 'Federal College of Education Kano', 'college', 'Kano, Kano State', '2025-07-19 18:29:50');

-- --------------------------------------------------------

--
-- Table structure for table `lgas`
--

CREATE TABLE `lgas` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `state` varchar(50) DEFAULT 'Jigawa',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `lgas`
--

INSERT INTO `lgas` (`id`, `name`, `state`, `created_at`) VALUES
(1, 'Auyo', 'Jigawa', '2025-07-19 18:29:50'),
(2, 'Babura', 'Jigawa', '2025-07-19 18:29:50'),
(3, 'Biriniwa', 'Jigawa', '2025-07-19 18:29:50'),
(4, 'Birnin Kudu', 'Jigawa', '2025-07-19 18:29:50'),
(5, 'Buji', 'Jigawa', '2025-07-19 18:29:50'),
(6, 'Dutse', 'Jigawa', '2025-07-19 18:29:50'),
(7, 'Gagarawa', 'Jigawa', '2025-07-19 18:29:50'),
(8, 'Garki', 'Jigawa', '2025-07-19 18:29:50'),
(9, 'Gumel', 'Jigawa', '2025-07-19 18:29:50'),
(10, 'Guri', 'Jigawa', '2025-07-19 18:29:50'),
(11, 'Gwaram', 'Jigawa', '2025-07-19 18:29:50'),
(12, 'Gwiwa', 'Jigawa', '2025-07-19 18:29:50'),
(13, 'Hadejia', 'Jigawa', '2025-07-19 18:29:50'),
(14, 'Jahun', 'Jigawa', '2025-07-19 18:29:50'),
(15, 'Kafin Hausa', 'Jigawa', '2025-07-19 18:29:50'),
(16, 'Kaugama', 'Jigawa', '2025-07-19 18:29:50'),
(17, 'Kazaure', 'Jigawa', '2025-07-19 18:29:50'),
(18, 'Kiri Kasama', 'Jigawa', '2025-07-19 18:29:50'),
(19, 'Kiyawa', 'Jigawa', '2025-07-19 18:29:50'),
(20, 'Maigatari', 'Jigawa', '2025-07-19 18:29:50'),
(21, 'Malam Madori', 'Jigawa', '2025-07-19 18:29:50'),
(22, 'Miga', 'Jigawa', '2025-07-19 18:29:50'),
(23, 'Ringim', 'Jigawa', '2025-07-19 18:29:50'),
(24, 'Roni', 'Jigawa', '2025-07-19 18:29:50'),
(25, 'Sule Tankarkar', 'Jigawa', '2025-07-19 18:29:50'),
(26, 'Taura', 'Jigawa', '2025-07-19 18:29:50'),
(27, 'Yankwashi', 'Jigawa', '2025-07-19 18:29:50');

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `type` enum('info','success','warning','error') DEFAULT 'info',
  `is_read` tinyint(1) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`id`, `user_id`, `title`, `message`, `type`, `is_read`, `created_at`) VALUES
(1, 3, 'Scholarship Renewal Approved', 'Your scholarship has been renewed for the 2024/2025 academic year.', 'success', 0, '2025-07-19 18:29:50'),
(2, 3, 'Monthly Stipend Disbursed', '₦75,000 has been credited to your account for February 2024.', 'info', 0, '2025-07-19 18:29:50'),
(3, 3, 'Academic Report Due', 'Please submit your semester academic report by March 15th, 2024.', 'warning', 0, '2025-07-19 18:29:50'),
(4, 4, 'Payment Processed', 'Your monthly stipend of ₦65,000 has been processed.', 'success', 0, '2025-07-19 18:29:50'),
(5, 4, 'Mentorship Session Scheduled', 'Your next mentorship session is scheduled for next week.', 'info', 0, '2025-07-19 18:29:50'),
(6, 5, 'Application Under Review', 'Your scholarship application is currently being reviewed by our team.', 'info', 0, '2025-07-19 18:29:50'),
(7, 6, 'Welcome to Danmodi Students Care!', 'Your account has been created successfully. You can now apply for scholarships and track your applications.', 'info', 0, '2025-07-19 23:32:32'),
(8, 7, 'Welcome to Danmodi Students Care!', 'Your account has been created successfully. You can now apply for scholarships and track your applications.', 'info', 0, '2025-07-25 16:56:09'),
(9, 8, 'Welcome to Danmodi Students Care!', 'Your account has been created successfully. You can now apply for scholarships and track your applications.', 'info', 0, '2025-07-25 17:00:51'),
(10, 9, 'Welcome to Danmodi Students Care!', 'Your account has been created successfully. You can now apply for scholarships and track your applications.', 'info', 0, '2025-07-25 17:12:17'),
(11, 10, 'Welcome to Danmodi Students Care!', 'Your account has been created successfully. You can now apply for scholarships and track your applications.', 'info', 0, '2025-07-25 17:15:27'),
(12, 11, 'Welcome to Danmodi Students Care!', 'Your account has been created successfully. You can now apply for scholarships and track your applications.', 'info', 0, '2025-07-25 17:15:54'),
(13, 12, 'Welcome to Danmodi Students Care!', 'Your account has been created successfully. You can now apply for scholarships and track your applications.', 'info', 0, '2025-07-25 21:34:32'),
(14, 13, 'Welcome to Danmodi Students Care!', 'Your account has been created successfully. You can now apply for scholarships and track your applications.', 'info', 0, '2025-07-25 22:09:37');

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `scholarship_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `payment_type` enum('tuition','stipend','books','accommodation','other') DEFAULT NULL,
  `payment_method` varchar(50) DEFAULT NULL,
  `reference_number` varchar(100) DEFAULT NULL,
  `academic_session` varchar(20) DEFAULT NULL,
  `semester` varchar(20) DEFAULT NULL,
  `status` enum('pending','completed','failed','cancelled') DEFAULT 'pending',
  `payment_date` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `scholarship_id`, `user_id`, `amount`, `payment_type`, `payment_method`, `reference_number`, `academic_session`, `semester`, `status`, `payment_date`, `created_at`) VALUES
(1, 1, 3, 75000.00, 'stipend', 'Bank Transfer', 'DSC2024001001', '2023/2024', 'First', 'completed', '2024-01-15', '2025-07-19 18:29:50'),
(2, 1, 3, 75000.00, 'stipend', 'Bank Transfer', 'DSC2024001002', '2023/2024', 'Second', 'completed', '2024-02-15', '2025-07-19 18:29:50'),
(3, 2, 4, 65000.00, 'stipend', 'Bank Transfer', 'DSC2024002001', '2023/2024', 'First', 'completed', '2024-01-15', '2025-07-19 18:29:50'),
(4, 2, 4, 65000.00, 'stipend', 'Bank Transfer', 'DSC2024002002', '2023/2024', 'Second', 'completed', '2024-02-15', '2025-07-19 18:29:50');

-- --------------------------------------------------------

--
-- Table structure for table `scholarships`
--

CREATE TABLE `scholarships` (
  `id` int(11) NOT NULL,
  `application_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `scholarship_type` enum('full','partial','special_quota') DEFAULT NULL,
  `amount_annual` decimal(12,2) DEFAULT NULL,
  `duration_years` int(11) DEFAULT 4,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `status` enum('active','completed','suspended','terminated') DEFAULT 'active',
  `total_disbursed` decimal(12,2) DEFAULT 0.00,
  `last_payment_date` date DEFAULT NULL,
  `next_payment_date` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `scholarships`
--

INSERT INTO `scholarships` (`id`, `application_id`, `user_id`, `scholarship_type`, `amount_annual`, `duration_years`, `start_date`, `end_date`, `status`, `total_disbursed`, `last_payment_date`, `next_payment_date`, `created_at`, `updated_at`) VALUES
(1, 1, 3, 'full', 450000.00, 4, '2024-01-01', '2027-12-31', 'active', 0.00, NULL, NULL, '2025-07-19 18:29:50', '2025-07-19 18:29:50'),
(2, 2, 4, 'full', 380000.00, 4, '2024-01-01', '2027-12-31', 'active', 0.00, NULL, NULL, '2025-07-19 18:29:50', '2025-07-19 18:29:50');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int(11) NOT NULL,
  `setting_key` varchar(100) NOT NULL,
  `setting_value` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `setting_key`, `setting_value`, `description`, `updated_at`) VALUES
(1, 'app_name', 'Danmodi Students Care Portal', 'Application name', '2025-07-19 18:29:51'),
(2, 'app_version', '1.0.0', 'Current application version', '2025-07-19 18:29:51'),
(3, 'max_file_upload_size', '5242880', 'Maximum file upload size in bytes (5MB)', '2025-07-19 18:29:51'),
(4, 'allowed_file_types', 'pdf,jpg,jpeg,png', 'Allowed file types for document upload', '2025-07-19 18:29:51'),
(5, 'application_deadline', '2024-12-31', 'Application deadline for current academic year', '2025-07-19 18:29:51'),
(6, 'scholarship_amount_undergraduate', '400000', 'Default annual scholarship amount for undergraduate', '2025-07-19 18:29:51'),
(7, 'scholarship_amount_postgraduate', '500000', 'Default annual scholarship amount for postgraduate', '2025-07-19 18:29:51'),
(8, 'contact_email', 'info@danmodistudentscare.com.ng', 'Official contact email', '2025-07-19 18:29:51'),
(9, 'contact_phone', '+234-xxx-xxx-xxxx', 'Official contact phone number', '2025-07-19 18:29:51');

-- --------------------------------------------------------

--
-- Table structure for table `study_fields`
--

CREATE TABLE `study_fields` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `is_priority` tinyint(1) DEFAULT 0,
  `description` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `study_fields`
--

INSERT INTO `study_fields` (`id`, `name`, `is_priority`, `description`, `created_at`) VALUES
(1, 'Medicine', 1, 'Medical and health sciences programs', '2025-07-19 18:29:50'),
(2, 'Engineering', 1, 'All engineering disciplines', '2025-07-19 18:29:50'),
(3, 'Agriculture', 1, 'Agricultural sciences and related fields', '2025-07-19 18:29:50'),
(4, 'Nursing', 1, 'Nursing and midwifery programs', '2025-07-19 18:29:50'),
(5, 'Pharmacy', 1, 'Pharmaceutical sciences', '2025-07-19 18:29:50'),
(6, 'Law', 0, 'Legal studies and jurisprudence', '2025-07-19 18:29:50'),
(7, 'Education', 0, 'Teaching and educational sciences', '2025-07-19 18:29:50'),
(8, 'Computer Science', 0, 'Computing and information technology', '2025-07-19 18:29:50'),
(9, 'Business Administration', 0, 'Business and management studies', '2025-07-19 18:29:50'),
(10, 'Economics', 0, 'Economic sciences', '2025-07-19 18:29:50'),
(11, 'Political Science', 0, 'Political and social sciences', '2025-07-19 18:29:50'),
(12, 'Mass Communication', 0, 'Media and communication studies', '2025-07-19 18:29:50'),
(13, 'Psychology', 0, 'Psychological sciences', '2025-07-19 18:29:50'),
(14, 'Sociology', 0, 'Social sciences', '2025-07-19 18:29:50'),
(15, 'Chemistry', 0, 'Chemical sciences', '2025-07-19 18:29:50'),
(16, 'Physics', 0, 'Physical sciences', '2025-07-19 18:29:50'),
(17, 'Mathematics', 0, 'Mathematical sciences', '2025-07-19 18:29:50'),
(18, 'Biology', 0, 'Biological sciences', '2025-07-19 18:29:50'),
(19, 'English', 0, 'English language and literature', '2025-07-19 18:29:50'),
(20, 'Arabic', 0, 'Arabic language and Islamic studies', '2025-07-19 18:29:50'),
(21, 'Islamic Studies', 0, 'Islamic theology and studies', '2025-07-19 18:29:50'),
(22, 'Other', 0, 'Other fields of study', '2025-07-19 18:29:50');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `password_hash` varchar(255) NOT NULL,
  `role` enum('admin','coordinator','student','applicant','parent') DEFAULT 'applicant',
  `lga` varchar(50) DEFAULT NULL,
  `account_type` varchar(20) DEFAULT NULL,
  `status` enum('active','inactive','pending','suspended') DEFAULT 'active',
  `email_verified` tinyint(1) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `phone`, `password_hash`, `role`, `lga`, `account_type`, `status`, `email_verified`, `created_at`, `updated_at`) VALUES
(1, 'Senior Special', 'Assistant', 'admin@danmodi.gov.ng', '+2348012345678', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin', 'Dutse', 'admin', 'active', 1, '2025-07-19 18:29:50', '2025-07-19 18:29:50'),
(2, 'Program', 'Coordinator', 'coordinator@danmodi.gov.ng', '+2348012345679', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'coordinator', 'Dutse', 'coordinator', 'active', 1, '2025-07-19 18:29:50', '2025-07-19 18:29:50'),
(3, 'Aisha', 'Mohammed', 'student@example.com', '+2348012345680', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'student', 'Dutse', 'student', 'active', 1, '2025-07-19 18:29:50', '2025-07-19 18:29:50'),
(4, 'Ibrahim', 'Sani', 'ibrahim.sani@example.com', '+2348012345681', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'student', 'Hadejia', 'student', 'active', 1, '2025-07-19 18:29:50', '2025-07-19 18:29:50'),
(5, 'Fatima', 'Usman', 'fatima.usman@example.com', '+2348012345682', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'applicant', 'Ringim', 'applicant', 'active', 1, '2025-07-19 18:29:50', '2025-07-19 18:29:50'),
(6, 'Khalid Aj', 'Abdullahi', 'cyberwalied@gmail.com', '+2348169525295', '$2y$10$HKlyptJNY74kFpDc3rZ.deDnmuMSPbUgh/Mbr4hqPyxH/hyylKY3W', 'applicant', 'Garki', 'applicant', 'active', 0, '2025-07-19 23:32:32', '2025-07-19 23:32:32'),
(7, 'Khalid', 'Abdullahi', 'khadijasagirnayaya@gmail.com', '+2348125760552', '$2y$10$1uycsRhM5KHka9D4w2d0fu2epZS2KL8KDR2LwJLuQtl5eRyL1LLSm', 'student', 'Jahun', 'student', 'active', 0, '2025-07-25 16:56:09', '2025-07-25 16:56:09'),
(8, 'Khalid', 'Abdullahi', 'khaleedbnwaleed@outlook.com', '+2348125760552', '$2y$10$b/2tXCvhuUZiD0V2yVS5C.VeTqTCRACB.Ft1MI9SdwVTP5Aodk1um', 'applicant', 'Gwaram', 'applicant', 'active', 0, '2025-07-25 17:00:51', '2025-07-25 17:00:51'),
(9, 'Khalid', 'Abdullahi', 'aaa@gmail.com', '+2348125760552', '$2y$10$l/aEGL6rkbSfbk0GQJALouoxOYUgjW8p45SbbCs76Xc5D7WZaa6wq', 'applicant', 'Kafin Hausa', 'applicant', 'active', 0, '2025-07-25 17:12:17', '2025-07-25 17:12:17'),
(10, 'Khalid', 'Abdullahi', 'bb@gmail.com', '+2348125760552', '$2y$10$PwVpBrZlNH.JmIwx4X4eXO5ib2qnqtezpMLQQghZL8AElb7IT3X4G', 'applicant', 'Guri', 'parent', 'active', 0, '2025-07-25 17:15:27', '2025-07-25 17:15:27'),
(11, 'Khalid', 'Abdullahi', 'bbc@gmail.com', '+2348125760552', '$2y$10$KAVnuZX2Hpu4Oz41yjVQ8..wjSxo8jZXl6YxnDhMCqc0Wrsgwp3rK', 'student', 'Guri', 'student', 'active', 0, '2025-07-25 17:15:54', '2025-07-25 17:15:54'),
(12, 'Khalid', 'Abdullahi', 'aak@gmail.com', '+2348125760552', '$2y$10$Uh1S11V2WxleQ/EAHOOC7uAcG7NuyVyObMIJUS565.vb35JugKhpC', 'student', 'Kaugama', 'student', 'active', 0, '2025-07-25 21:34:32', '2025-07-25 21:34:32'),
(13, 'Khalid', 'Abdullahi', 'kk@gmail.com', '+2348125760552', '$2y$10$Ju6YBrxHd9Tzu8xWy2EOfeCI3NG6LRcptvJ4eJHx27WM3Fxm/XhTi', 'applicant', 'Garki', 'applicant', 'active', 0, '2025-07-25 22:09:37', '2025-07-25 22:09:37');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `academic_reports`
--
ALTER TABLE `academic_reports`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `scholarship_id` (`scholarship_id`),
  ADD KEY `verified_by` (`verified_by`);

--
-- Indexes for table `activity_logs`
--
ALTER TABLE `activity_logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_activity_logs_user_id` (`user_id`);

--
-- Indexes for table `applications`
--
ALTER TABLE `applications`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `application_number` (`application_number`),
  ADD KEY `lga_id` (`lga_id`),
  ADD KEY `current_institution_id` (`current_institution_id`),
  ADD KEY `study_field_id` (`study_field_id`),
  ADD KEY `preferred_institution_id` (`preferred_institution_id`),
  ADD KEY `alternative_institution_id` (`alternative_institution_id`),
  ADD KEY `reviewed_by` (`reviewed_by`),
  ADD KEY `idx_applications_status` (`status`),
  ADD KEY `idx_applications_user_id` (`user_id`);

--
-- Indexes for table `application_documents`
--
ALTER TABLE `application_documents`
  ADD PRIMARY KEY (`id`),
  ADD KEY `application_id` (`application_id`);

--
-- Indexes for table `institutions`
--
ALTER TABLE `institutions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lgas`
--
ALTER TABLE `lgas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_notifications_user_id` (`user_id`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `scholarship_id` (`scholarship_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `idx_payments_status` (`status`);

--
-- Indexes for table `scholarships`
--
ALTER TABLE `scholarships`
  ADD PRIMARY KEY (`id`),
  ADD KEY `application_id` (`application_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `idx_scholarships_status` (`status`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `setting_key` (`setting_key`);

--
-- Indexes for table `study_fields`
--
ALTER TABLE `study_fields`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `idx_users_email` (`email`),
  ADD KEY `idx_users_role` (`role`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `academic_reports`
--
ALTER TABLE `academic_reports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `activity_logs`
--
ALTER TABLE `activity_logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `applications`
--
ALTER TABLE `applications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `application_documents`
--
ALTER TABLE `application_documents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `institutions`
--
ALTER TABLE `institutions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `lgas`
--
ALTER TABLE `lgas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `scholarships`
--
ALTER TABLE `scholarships`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `study_fields`
--
ALTER TABLE `study_fields`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `academic_reports`
--
ALTER TABLE `academic_reports`
  ADD CONSTRAINT `academic_reports_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `academic_reports_ibfk_2` FOREIGN KEY (`scholarship_id`) REFERENCES `scholarships` (`id`),
  ADD CONSTRAINT `academic_reports_ibfk_3` FOREIGN KEY (`verified_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `activity_logs`
--
ALTER TABLE `activity_logs`
  ADD CONSTRAINT `activity_logs_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `applications`
--
ALTER TABLE `applications`
  ADD CONSTRAINT `applications_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `applications_ibfk_2` FOREIGN KEY (`lga_id`) REFERENCES `lgas` (`id`),
  ADD CONSTRAINT `applications_ibfk_3` FOREIGN KEY (`current_institution_id`) REFERENCES `institutions` (`id`),
  ADD CONSTRAINT `applications_ibfk_4` FOREIGN KEY (`study_field_id`) REFERENCES `study_fields` (`id`),
  ADD CONSTRAINT `applications_ibfk_5` FOREIGN KEY (`preferred_institution_id`) REFERENCES `institutions` (`id`),
  ADD CONSTRAINT `applications_ibfk_6` FOREIGN KEY (`alternative_institution_id`) REFERENCES `institutions` (`id`),
  ADD CONSTRAINT `applications_ibfk_7` FOREIGN KEY (`reviewed_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `application_documents`
--
ALTER TABLE `application_documents`
  ADD CONSTRAINT `application_documents_ibfk_1` FOREIGN KEY (`application_id`) REFERENCES `applications` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `payments`
--
ALTER TABLE `payments`
  ADD CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`scholarship_id`) REFERENCES `scholarships` (`id`),
  ADD CONSTRAINT `payments_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `scholarships`
--
ALTER TABLE `scholarships`
  ADD CONSTRAINT `scholarships_ibfk_1` FOREIGN KEY (`application_id`) REFERENCES `applications` (`id`),
  ADD CONSTRAINT `scholarships_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
