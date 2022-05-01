const readMore = document.querySelector('.read-more');
const feedbackText = document.querySelector('.feedback-text');
const backBtn = document.querySelector('.back-button');


readMore.addEventListener('click', function () {
    feedbackText.style.zIndex = '3';
    feedbackText.style.background = '#ffffff';
});

backBtn.addEventListener('click', function () {
    feedbackText.style.zIndex = '1';
    feedbackText.style.background = 'radial-gradient(68.31% 68.31% at 50% 50%, #6FACFD 0%, #075ACA 100%, #FFFFFF)';
});


/*------------------------------burger-menu---------------------------------- */

function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}

/*------------------------------footer-social-------------------------------- */

const footerSocial = document.querySelector('.footer-social');
const footerSocialList = document.querySelector('.footer-social-list');

footerSocial.addEventListener('click', function () {
    footerSocialList.style.opacity = '1';
});
