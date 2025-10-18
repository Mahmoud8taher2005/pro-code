// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    // 1. استدعاء مكتبة AOS لتفعيل الحركة عند التمرير
    
    AOS.init({
        // خيارات متقدمة للتحكم في سلوك الحركة:
        
        // تشغيل الحركة مرة واحدة فقط عند ظهور العنصر
        once: true,      
        
        // مدة الحركة الافتراضية (1200ms = 1.2 ثانية)
        duration: 1200,  
        
        // نوع التباطؤ (Ease) للحركة
        easing: 'ease-in-out', 
        
        // الأوفست (المسافة بالبكسل من قاع الشاشة قبل بدء الحركة)
        offset: 100 
    });
});
// ... (كود AOS.init() في الأعلى) ...

// دالة تحديث شريط التقدم
function updateProgressBar() {
    // 1. حساب مدى تمرير المستخدم
    const scrollPosition = document.documentElement.scrollTop;
    
    // 2. حساب إجمالي ارتفاع الصفحة القابل للتمرير
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // 3. حساب نسبة التقدم (0 إلى 100)
    const progress = (scrollPosition / totalHeight) * 100;
    
    // 4. تطبيق النسبة على عرض الشريط
    document.getElementById('progress-bar').style.width = progress + '%';
}

// إضافة مُستمع الحدث (Event Listener) للتمرير
window.addEventListener('scroll', updateProgressBar);
// يمكنك أيضاً استدعاؤها مرة واحدة عند التحميل
updateProgressBar();