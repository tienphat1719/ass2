INSERT INTO EMPLOYEE(Ecode, E_fname,E_lname, E_dob, E_address, E_gender, E_phone, Start_date, Related_name, Degree_year, Department_code) 
	VALUES 	(1,'Alex','Dough','1990-10-25','123 NTMK','M','0987654321','2017-02-11','Cardiac Nurse',5,'1');
INSERT INTO EMPLOYEE(Ecode, E_fname,E_lname, E_dob, E_address, E_gender, E_phone, Start_date, Related_name, Degree_year, Department_code) 
	VALUES	(2,'Boris','John','1980-06-18','26 CMTT','M','08629753284','2018-05-01','Surgeon',12,'2');
INSERT INTO EMPLOYEE(Ecode, E_fname,E_lname, E_dob, E_address, E_gender, E_phone, Start_date, Related_name, Degree_year, Department_code) 
	VALUES	(3,'Cali','Minsky','1995-09-11','12 NDC','F','03648216875','2020-03-18','Care Nurse',2,'3');
INSERT INTO EMPLOYEE(Ecode, E_fname,E_lname, E_dob, E_address, E_gender, E_phone, Start_date, Related_name, Degree_year, Department_code) 
	VALUES	(4,'Dane','Tamer','1994-06-18','25 LDC','M','06954872634','2020-06-03','Care Nurse',3,'3');
INSERT INTO EMPLOYEE(Ecode, E_fname,E_lname, E_dob, E_address, E_gender, E_phone, Start_date, Related_name, Degree_year, Department_code) 
	VALUES	(5,'Eden','Walson','1992-03-04','284 THD','F','0264873246','2015-10-05','Surgeon',5,'4');
INSERT INTO EMPLOYEE(Ecode, E_fname,E_lname, E_dob, E_address, E_gender, E_phone, Start_date, Related_name, Degree_year, Department_code) 
	VALUES 	(6,'Nguyen Van','A','1985-04-18','291 NVC','M','0618452387','2012-12-09','Psychiatrist',13,'1');
INSERT INTO EMPLOYEE(Ecode, E_fname,E_lname, E_dob, E_address, E_gender, E_phone, Start_date, Related_name, Degree_year, Department_code) 
	VALUES	(7,'Tran Nguyen Nhu', 'Hoa', '1997-11-03','112 XVNT','F','03698745210','2020-01-06','Psychiatrist',1,'4');
--     
-- INSERT INTO NURSE(Encode)
-- 	VALUES	(1),(3),(4);
--     
-- INSERT INTO DOCTOR(Edcode)
-- 	VALUES	(2),(5),(6),(7);
--     
-- INSERT INTO DEPARTMENT(Depart_code,title,Dean_code) VALUES 	(1,'Metallica',2);
-- INSERT INTO DEPARTMENT(Depart_code,title,Dean_code) VALUES	(2,'The Ocean',5);
-- INSERT INTO DEPARTMENT(Depart_code,title,Dean_code) VALUES  (3,'Van Canto',6);
-- INSERT INTO DEPARTMENT(Depart_code,title,Dean_code) VALUES  (4, 'Dream Theater',7);
-- INSERT INTO DEPARTMENT(Depart_code,title,Dean_code) VALUES  (5,'Tiara',NULL);

INSERT INTO PATIENT (P_fname,P_lname,P_dob,P_gender,P_phone)	VALUES ('1The Great','Escape','2010-06-12','M','03654984235');
INSERT INTO PATIENT (P_fname,P_lname,P_dob,P_gender,P_phone)	VALUES ('2Mercy','Falls','2002-04-8','M','01242743775');
INSERT INTO PATIENT (P_fname,P_lname,P_dob,P_gender,P_phone)	VALUES ('3Master of','Puppets','1968-07-25','M','02742747545');
INSERT INTO PATIENT (P_fname,P_lname,P_dob,P_gender,P_phone)	VALUES ('4Justice for','All','1990-12-2','M','4423453727');
INSERT INTO PATIENT (P_fname,P_lname,P_dob,P_gender,P_phone)	VALUES ('5Helio','Centric','1973-11-4','M','14041243753');
INSERT INTO PATIENT (P_fname,P_lname,P_dob,P_gender,P_phone)	VALUES ('6The','Unforgiving','2002-08-16','M','7527575637');
INSERT INTO PATIENT (P_fname,P_lname,P_dob,P_gender,P_phone)	VALUES ('7Individual Thought ','Patterns','1963-01-01','M','45324171237');
INSERT INTO PATIENT (P_fname,P_lname,P_dob,P_gender,P_phone)	VALUES ('8Human','Enter','1888-02-17','M','37537421437');
    
-- INSERT INTO INPATIENT(Picode,Date_of_admission,Date_of_discharge,I_fee,Nurse_code,Doc_code)
-- 	VALUES (1,'2021-6-12',NULL,100.0,1,6);
-- INSERT INTO INPATIENT(Picode,Date_of_admission,Date_of_discharge,I_fee,Nurse_code,Doc_code)
-- 	VALUES (2,'2021-2-10','2021-6-25',200.0,3,6);
-- INSERT INTO INPATIENT(Picode,Date_of_admission,Date_of_discharge,I_fee,Nurse_code,Doc_code)
-- 	VALUES (3,'2020-1-17','2021-8-13',300.0,4,5);
-- INSERT INTO INPATIENT(Picode,Date_of_admission,Date_of_discharge,I_fee,Nurse_code,Doc_code)
-- 	VALUES (4,'2019-8-12','2021-12-16',400.0,1,2);
--     
INSERT INTO OUTPATIENT(Pocode)	VALUES (5),(6),(7),(8);

INSERT INTO MEDICATION(Mcode, M_name, Expiration_date, Effect, M_price)
	VALUES	(1,'Paracetamol','2023-3-10',NULL, 112.0);
INSERT INTO MEDICATION(Mcode, M_name, Expiration_date, Effect, M_price)
	VALUES	(2,'Hoat huyet nhat nhat','2023-02-06',NULL, 24.0);
INSERT INTO MEDICATION(Mcode, M_name, Expiration_date, Effect, M_price)
	VALUES	(3,'Bioacimin','2023-2-10',NULL, 88.0);
INSERT INTO MEDICATION(Mcode, M_name, Expiration_date, Effect, M_price)
	VALUES	(4,'Losartan ','2022-10-15','treating hypertension', 116.0);
INSERT INTO MEDICATION(Mcode, M_name, Expiration_date, Effect, M_price)
	VALUES	(5,'Metformin ','2022-12-25','type 2 diabetes', 201.5);
INSERT INTO MEDICATION(Mcode, M_name, Expiration_date, Effect, M_price)
	VALUES	(6,'Albuterol','2022-11-13','treating asthma', 302.5);

-- INSERT INTO PROVIDER(Prcode,Pr_name,Pr_address,Pr_phone)
-- 	VALUES (1,'Sanofi','2 MTB', '2621984823');
-- INSERT INTO PROVIDER(Prcode,Pr_name,Pr_address,Pr_phone)
-- 	VALUES (2,'Repligen','142 NKKN', '7465743428');
-- INSERT INTO PROVIDER(Prcode,Pr_name,Pr_address,Pr_phone)
-- 	VALUES (3,'Servier','369 QTB', '543572131');
-- INSERT INTO PROVIDER(Prcode,Pr_name,Pr_address,Pr_phone)
-- 	VALUES (4,'Shionogi','25 HCCC', '375678342');
--     
-- INSERT INTO PROVIDE(Procode, Medprocode)
-- 	VALUES (1,1),(1,2),(2,3),(3,4),(3,5),(4,6);

-- INSERT INTO IMPORTED_MED(Medcode,Import_price,Quantity,Import_date)
-- 	VALUES (4,80.0,100,'2021-10-15');
-- INSERT INTO IMPORTED_MED(Medcode,Import_price,Quantity,Import_date)
-- 	VALUES (5,150.0,100,'2021-12-25');
-- INSERT INTO IMPORTED_MED(Medcode,Import_price,Quantity,Import_date)
-- 	VALUES (6,240.0,100,'2021-11-13');

-- INSERT INTO TREATMENT(Picode,T_start_date,T_end_date,Result)
-- 	VALUES (1,'2021-6-12','2021-7-12',NULL);
-- INSERT INTO TREATMENT(Picode,T_start_date,T_end_date,Result)
-- 	VALUES (1,'2021-7-13','2021-8-12',NULL);
-- INSERT INTO TREATMENT(Picode,T_start_date,T_end_date,Result)
-- 	VALUES (2,'2021-2-10','2021-5-10',NULL);
-- INSERT INTO TREATMENT(Picode,T_start_date,T_end_date,Result)
-- 	VALUES (3,'2020-1-17','2020-4-17',NULL);
-- INSERT INTO TREATMENT(Picode,T_start_date,T_end_date,Result)
-- 	VALUES (3,'2020-4-17','2020-9-17',NULL);
-- INSERT INTO TREATMENT(Picode,T_start_date,T_end_date,Result)
-- 	VALUES (4,'2019-8-12','2020-8-12',NULL);
-- INSERT INTO TREATMENT(Picode,T_start_date,T_end_date,Result)
-- 	VALUES (4,'2020-8-12','2021-8-12',NULL);
--     
-- INSERT INTO T_CONTAIN(Pincode,Medincode) VALUES (1,1),(1,2),(1,3),(2,2),(3,4),(3,5),(4,6);

INSERT INTO EXAMINATION(Pocode,O_fee,O_diagnosis,Exam_date,Next_exam_date,Doc_code)
	VALUES (5, 20.0, NULL,'2021-5-1','2021-5-2', 6);
INSERT INTO EXAMINATION(Pocode,O_fee,O_diagnosis,Exam_date,Next_exam_date,Doc_code)
	VALUES (5, 15.0, NULL,'2021-5-3','2021-5-4', 6);
INSERT INTO EXAMINATION(Pocode,O_fee,O_diagnosis,Exam_date,Next_exam_date,Doc_code)
	VALUES (6, 13.0, NULL,'2021-5-5','2021-5-6', 6);
INSERT INTO EXAMINATION(Pocode,O_fee,O_diagnosis,Exam_date,Next_exam_date,Doc_code)
	VALUES (6, 25.0, NULL,'2021-5-7','2021-5-8', 5);
INSERT INTO EXAMINATION(Pocode,O_fee,O_diagnosis,Exam_date,Next_exam_date,Doc_code)
	VALUES (7, 29.0, NULL,'2021-5-9','2021-5-10', 2);
INSERT INTO EXAMINATION(Pocode,O_fee,O_diagnosis,Exam_date,Next_exam_date,Doc_code)
	VALUES (8, 16.0, NULL,'2021-5-11','2021-5-12', 7);
--     
-- INSERT INTO E_CONTAIN(Poutcode,Medoutcode) VALUES (5,1),(5,3),(6,2),(7,3),(8,3),(8,6);

INSERT INTO USER VALUES ('admin', 'admin', 1);
    
