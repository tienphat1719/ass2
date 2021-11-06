DROP DATABASE IF EXISTS HOSPITAL;
CREATE DATABASE HOSPITAL;
USE HOSPITAL;

CREATE TABLE IF NOT EXISTS EMPLOYEE
(
	Ecode			INT 			UNIQUE	AUTO_INCREMENT,
    E_fname 		VARCHAR(255),
    E_lname 		VARCHAR(255),
    E_dob			DATE,
    E_address		VARCHAR(255),
    E_gender		CHAR(1),
    E_phone			VARCHAR(20),
    Start_date		DATE,
    Related_name	VARCHAR(255),
    Degree_year		INT,
    Department_code	INT,
    CONSTRAINT PRIMARY KEY (Ecode)
)AUTO_INCREMENT = 1000;

CREATE TABLE IF NOT EXISTS NURSE
(
	Encode		INT,
    CONSTRAINT PRIMARY KEY	(Encode)
);

CREATE TABLE IF NOT EXISTS DOCTOR
(
	Edcode		INT,
    CONSTRAINT PRIMARY KEY (Edcode)
);

CREATE TABLE IF NOT EXISTS DEPARTMENT
(
	Depart_code		INT		UNIQUE	AUTO_INCREMENT,
    Title			VARCHAR(256),
    Dean_code		INT,
    CONSTRAINT PRIMARY KEY (Depart_code)
)AUTO_INCREMENT = 1;

CREATE TABLE IF NOT EXISTS PATIENT
(
	P_Type			CHAR(2),
	Pcode			INT				UNIQUE	AUTO_INCREMENT,
    P_fname 		VARCHAR(255),
    P_lname 		VARCHAR(255),
    P_dob			DATE,
    P_gender		CHAR(1),
    P_phone			VARCHAR(20),
	CONSTRAINT PRIMARY KEY (Pcode)
)AUTO_INCREMENT = 1000000;

CREATE TABLE IF NOT EXISTS OUTPATIENT
(
	Pocode			INT,
    CONSTRAINT PRIMARY KEY (Pocode)
);

CREATE TABLE IF NOT EXISTS EXAMINATION
(
	Pocode			INT,
    O_fee			FLOAT,
    O_diagnosis		VARCHAR(255),
    Exam_date		DATE,
    Next_exam_date	DATE,
    Doc_code		INT,
    CONSTRAINT PRIMARY KEY	(Pocode, Exam_date, Next_exam_date)
);

CREATE TABLE IF NOT EXISTS INPATIENT
(
	Picode				INT,
	Date_of_admission	DATE,
    Sickroom			VARCHAR(10),
    Date_of_discharge	DATE,
    I_fee				FLOAT,
    Nurse_code			INT,
    Doc_code			INT,
    CONSTRAINT PRIMARY KEY (Picode)
);

CREATE TABLE IF NOT EXISTS TREATMENT
(
	Picode			INT,
    T_start_date	DATE,
    T_end_date		DATE,
    Result			VARCHAR(255),
    CONSTRAINT PRIMARY KEY (Picode,T_start_date,T_end_date)
);

CREATE TABLE IF NOT EXISTS MEDICATION
(
	Mcode			INT 			UNIQUE	AUTO_INCREMENT,
    M_name			VARCHAR(255),
    Expiration_date	DATE,
    Effect			VARCHAR(255),
    M_price			FLOAT,
    CONSTRAINT PRIMARY KEY	(Mcode)
)AUTO_INCREMENT = 2000;

CREATE TABLE IF NOT EXISTS IMPORTED_MED
(
	Medcode			INT,
    Import_price	FLOAT,
    Quantity		INT,
    Import_date		DATE,
    CONSTRAINT PRIMARY KEY (Medcode)
);

CREATE TABLE IF NOT EXISTS PROVIDER
(
	Prcode			INT 			UNIQUE	AUTO_INCREMENT,
    Pr_name			VARCHAR(255),
    Pr_address		VARCHAR(255),
    Pr_phone		VARCHAR(20),
    CONSTRAINT PRIMARY KEY	(Prcode)
)AUTO_INCREMENT = 101;

CREATE TABLE IF NOT EXISTS PROVIDE
(
	Procode			INT,
    Medprocode		INT,
    CONSTRAINT PRIMARY KEY (Procode, Medprocode)
);

CREATE TABLE IF NOT EXISTS T_CONTAIN
(
	Pincode			INT,
    Medincode		INT,
    CONSTRAINT PRIMARY KEY (Pincode, Medincode)
);

CREATE TABLE IF NOT EXISTS E_CONTAIN
(
	Poutcode		INT,
    Medoutcode		INT,
    CONSTRAINT PRIMARY KEY (Poutcode, Medoutcode)
);

CREATE TABLE IF NOT EXISTS USER_TABLE
(
	id				VARCHAR(255)	UNIQUE,
    password		VARCHAR(255),
    userType		VARCHAR(10),
    PRIMARY KEY (id)
);