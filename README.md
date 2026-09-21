# Maenam Villa Hotel — Modern Redesign

โปรเจกต์เว็บใหม่แบบ Vite + Vanilla JS/CSS สำหรับ Maenam Villa Hotel โดยยึดข้อมูลจากเว็บไซต์เดิมที่เข้าถึงได้ ณ วันที่ 22 ก.ย. 2026

## สิ่งที่นำมาจากเว็บเดิม
- ชื่อ: MAENAM VILLA HOTEL
- tagline: “สงบ เงียบ เป็นส่วนตัว บนชายหาดเเม่น้ำ สมุย”
- ประเภทห้อง: Beach Front Bangalo, Bangalo, Sea View, Standard, Balcony, Single
- ข้อมูลติดต่อและที่อยู่
- รายการแหล่งท่องเที่ยว 16 จุดจากหน้าเกาะสมุย

## รูปภาพ
ระบบ runtime นี้ไม่สามารถดาวน์โหลด binary image จากเว็บไซต์ต้นทางมาเก็บในโปรเจกต์ได้โดยตรง จึงวาง image slots ใน `src/styles.css` ไว้ให้แทนด้วย asset จริงจากเว็บไซต์ต้นทางก่อน deploy โดยหน้าเว็บต้นทางที่มีภาพ ได้แก่ `about.html` และ `journey.html`.

## Run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
