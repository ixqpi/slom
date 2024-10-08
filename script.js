// الدالة لتسجيل الدخول
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // تحقق من صحة البيانات
    if (username === "ixqpi" && password === "ssa12") {
        window.location.href = "main.html"; // تحويل إلى الصفحة الرئيسية
    } else {
        document.getElementById("error-message").innerText = "اسم المستخدم أو كلمة المرور غير صحيحة";
    }
}

// عرض الصفحة الرئيسية
function showHome() {
    console.log("تم الانتقال إلى الصفحة الرئيسية");
    // هنا يمكنك إضافة منطق الانتقال إلى صفحة Home
}

// عرض الإشعارات
function showNotifications() {
    console.log("تم الانتقال إلى صفحة الإشعارات");
    // هنا يمكنك إضافة منطق الإشعارات
}

// عرض الرسائل
function showMessages() {
    console.log("تم الانتقال إلى صفحة الرسائل");
    // هنا يمكنك إضافة منطق الرسائل
}

// عرض تفاصيل الزائر
function showVisitorDetails() {
    alert("عرض تفاصيل الزائر بالكامل");
}