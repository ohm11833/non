function changeHouse(videoPath, arUrl, element) {
    
    // 1. ส่วนจัดการวิดีโอ: ลบทิ้ง (เพราะใน HTML ไม่มี video tag แล้ว)
    // เราปล่อย parameter 'videoPath' ไว้เฉยๆ ไม่ต้องทำอะไรกับมัน

    // 2. เปลี่ยนลิงก์ปุ่ม AR
    let arBtn = document.getElementById('ar-link');
    if (arBtn) {
        arBtn.href = arUrl;
    }

    // 3. เปลี่ยนสีกรอบ (Active State)
    // ลบ class active ออกจากทุกการ์ด
    let cards = document.querySelectorAll('.house-card');
    cards.forEach(card => card.classList.remove('active'));
    
    // ใส่ class active ให้การ์ดที่ถูกกด
    element.classList.add('active');
}