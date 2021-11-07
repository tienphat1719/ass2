HƯỚNG DẪN SỬ DỤNG

1. Drop tất cả user DB 
2. Chạy DB_Hospital.sql để tạo database cùng với các bảng tưong ứng
3. Chạy hospital_data.sql để tạo data
4. Kết nối các relationship + constraint bằng hospital_constraint.sql

Chỉnh sửa
EXAMINATION: thêm PRIMARY KEY cho Exam_date và Next_exam_date
TREATMENT: thêm PRIMARY KEY cho T_start_date và T_end_date

Nhận xét:
- SQL này có cách design không giống trong sách vì Constraint của Foreign Key, nên độ consistent
 sẽ khá là tệ và cần phải cập nhật khi có thay đổi mới
- Lượng data thêm vào khá là ít vì... dạ lần đầu em làm nên bị mấy cái khác hành, không dám thêm
data

Note:
- Những key quan trọng (vd EMPLOYEE, PATIENT, v.v) đều là Key NOT NULL UNIQUE và AUTO_INCREMENT
 nhưng để giữ consistency khi add data thì khi thêm data mới nên thêm những key đó vô
- Nguyên nhân thêm PRIMARY KEY: để tránh bị tình trạng duplicate PRIMARY KEY (nếu chỉ 1 key dễ 
bị lặp trong những table mà sử dụng nhiều lần 1 PRIMARY KEY, vd TREATMENT hay EXAMINATION)
