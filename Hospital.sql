DROP DATABASE IF EXISTS HOSPITAL;
CREATE DATABASE HOSPITAL;
USE HOSPITAL;

create table employee(
	E_code 			int 			not null,
    E_lname			varchar(10)		not null,
   --  E_fname 		varchar(15)	 	not null,
--     E_dob			date,
--     E_address		varchar(50),
--     E_gender		char			not null,
--     E_phone			varchar(12)		not null,
--     Start_date		date			not null,
--     Related_name	varchar(10)		not null,
--     Degree_year		date			not null,
--     
--     D_code			int				not null,
    
    primary key(E_code)
);

create table nurse(
	E_code			int 			not null,
    
    primary key(E_code),
    foreign key(E_code) references employee(E_code)
);

create table doctor(
	E_code 			int 			not null,
    
    primary key(E_code),
    foreign key(E_code) references employee(E_code)
);

create table department(
	D_code			int				not null,
    Title			varchar(20)		not null,
	Dean_code		int,
    
    primary key(D_code),
    foreign key(Dean_code) references doctor(E_code)
);

-- alter table employee
-- 	add foreign key(D_code) references department(D_code);

create table patient(
	P_code			int				not null,
    P_lname			varchar(10)		not null,
--     P_fname			varchar(15)		not null,
--     P_dob			date,
--     P_gender		char			not null,
--     P_phone			varchar(12)		not null,
    
    primary key(P_code)
);

create table outpatient(
	P_code			int				not null,
    
    primary key(P_code),
    foreign key(P_code) references patient(P_code)
);

create table inpatient(
	P_code			int				not null,
    Date_admission	date			not null,
    Sickroom		int				not null,
    Date_discharge	date,
    P_fee			int,
    
    Nurse_code		int,
    Doc_code		int,
    foreign key(Nurse_code) references nurse(E_code),
    foreign key(Doc_code) references doctor(E_code),
    
    primary key(P_code),
    foreign key(P_code) references patient(P_code)
);

create table medication(
	M_code			int				not null,
    M_name			varchar(20)		not null,
    M_ex_date		date			not null,
    M_effect		varchar(45)		not null,
    M_price			int				not null,
    
    primary key(M_code)
);

create table provider(
	Pr_code			int 			not null,
    Pr_name			varchar(20)		not null,
    Pr_add			varchar(50)		not null,
    Pr_phone		varchar(12)		not null,
    
    primary key(Pr_code)
);

create table provide(
	Pr_code			int,
    M_code			int,
    
	primary key(Pr_code, M_code),
    foreign key(Pr_code) references provider(Pr_code),
    foreign key(M_code) references	medication(M_code)
);

create table treatment(
	P_code 			int				not null,
    Sdate			date			not null,
    Edate			date,
    Result			varchar(45),
    
    primary key(P_code),
    foreign key(P_code) references inpatient(P_code)
);

create table t_contain(
	P_code			int,
    M_code			int,
    
	primary key(P_code, M_code),
    foreign key(P_code) references inpatient(P_code),
    foreign key(M_code) references	medication(M_code)
);

create table examintaion(
	P_code 			int				not null,
    P_fee			int,
    P_diagnosis		varchar(45),
    Exam_date		date			not null,
    Next_exam_date	date,
    
    Doc_code		int,
    foreign key(Doc_code) references doctor(E_code),
    
    primary key(P_code),
    foreign key(P_code) references outpatient(P_code)
);

create table e_contain(
	P_code			int,
    M_code			int,
    
	primary key(P_code, M_code),
    foreign key(P_code) references outpatient(P_code),
    foreign key(M_code) references	medication(M_code)
);

create table imported_med(
	M_code			int				not null,
    Im_price		int				not null,
    Im_quantity		int				not null,
    Imported_date	date			not null,
    
    primary key(M_code),
    foreign key(M_code) references medication(M_code)
);


