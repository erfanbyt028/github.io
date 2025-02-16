function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

window.onscroll = debounce(function () {
    const navbar = document.getElementById('navbar');
    const offset = window.pageYOffset;

    navbar.classList.toggle("sticky", offset > 0);
}, 100); // 100ms delay
// ----------------


const text = "I'm a web developer!";
let index = 0;
let isDeleting = false;

function type() {
    const typingElement = document.getElementById('typing_txt');

    if (!isDeleting && index < text.length) {
        // حالت تایپ
        typingElement.textContent += text.charAt(index);
        index++;
    } else if (isDeleting && index > 0) {
        // حالت پاک کردن
        typingElement.textContent = text.substring(0, index - 1);
        index--;
    } else {
        // تغییر حالت بین تایپ و پاک کردن
        isDeleting = !isDeleting;
    }

    setTimeout(type, isDeleting ? 100 : 170); // تاخیر کمتر برای پاک کردن
}

window.onload = () => {
    document.getElementById('typing_txt').textContent = ''; // پاک کردن متن قبل از شروع
    type();
};


// circle

document.querySelectorAll(".circleProgress").forEach(element => {
    let p = element.getAttribute("progressPercent");
    element.style.background = "conic-gradient(var(--acnt) "+p+"%, var(--track) "+p+"%)";
   });

// 



// ---------- download CV

function downloadCV() {
    // مسیر فایل رزومه (CV)
    const fileUrl = './assets/resume/Erfan-bayat-cv.pdf'; // مسیر فایل رزومه خود را وارد کنید
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Erfan_Bayat_CV.pdf'; // نام فایل پس از دانلود
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}




// function showContent(contentID)
// {
//     var contents= document.getElementsByClassName('content');
    
//     for (var i =0 ; i<contents.length ; i++)
//     {
//         contents[i].style.display='none'
//     }
//     document.getElementById('contentID').style.display='block';
// }


// const buttons = document.querySelectorAll('.sb_li');
// const contents = document.querySelectorAll('.card');

// buttons.forEach(button => {
//     button.addEventListener('click',function()
//     {
//         const target_id = this.getAttribute('data-target');
//         contents.forEach(content => {
//             content.classList.add('hidden;')
//         });
//         const targetContent = document.getElementById(target_id);
//         targetContent.classList.remove('hidden')
//     })
// })






function showContent(contentId) {
    // مخفی کردن تمامی محتواها
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        if (content.classList.contains('active')) {
            content.classList.remove('active');
            content.addEventListener('transitionend', () => {
                if (!content.classList.contains('active')) {
                    content.style.display = 'none'; // محتوا را مخفی کن
                }
            }, { once: true });
        }
    });

    // نمایش محتوای مشخص شده
    const selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.style.display = 'block'; // محتوا را نمایش بده
        requestAnimationFrame(() => {
            selectedContent.classList.add('active');
        });
    }
}