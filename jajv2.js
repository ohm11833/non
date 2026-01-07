function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    if (weight > 0 && height > 0) {
        var heightMeters = height / 100;
        var bmi = weight / (heightMeters * heightMeters);
        var finalBmi = bmi.toFixed(2);
        
        document.getElementById('bmi_result').value = finalBmi;

        var status = "";
        if (bmi < 18.5) {
            status = "น้ำหนักน้อย / ผอม";
        } else if (bmi >= 18.5 && bmi <= 22.9) {
            status = "ปกติ (สุขภาพดี)";
        } else if (bmi >= 23.0 && bmi <= 24.9) {
            status = "ท้วม / เริ่มอ้วน";
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            status = "อ้วน / โรคอ้วนระดับ 1";
        } else {
            status = "อ้วนมาก / โรคอ้วนระดับ 2";
        }
        document.getElementById('bmi_status').value = status;
    } else {
        alert("กรอกน้ำหนักและส่วนสูงเป็นตัวเลข");
    }
}

function clearData() {
    document.getElementById('weight').value = "";
    document.getElementById('height').value = "";
    document.getElementById('bmi_result').value = "";
    document.getElementById('bmi_status').value = "";
}