let user_icon = document.querySelector('.user-header__icon');
user_icon.addEventListener("click", function (e) {
    let user_menu = document.querySelector('.user-header__menu');
    user_menu.classList.toggle('_active');
});


// ================== Menu ========================== >>
let iconMenu = document.querySelector(".icon-menu");

if (iconMenu != null) {

    // let delay = 500;
    let body = document.querySelector(".menu__body");


    iconMenu.addEventListener("click", (e) => {


        if (!body.classList.contains('_wait')) {


            // body_lock(delay);
            iconMenu.classList.toggle("_active");
            body.classList.toggle("_active");
        }
    });
}

// ==========

document.documentElement.addEventListener("click", function (e) {
    if (!e.target.closest('.user-header')) {
        let user_menu = document.querySelector('.user-header__menu');
        user_menu.classList.remove('_active');
    }
});

// << ===========================================================

//  ======== Перенос блока в другое место ======================== >>

// start();
// window.addEventListener('resize', start);

// function start() {
//     if (document.documentElement.clientWidth < 767.98) {

//         //  ===== Перенос блока region в бургер ============== >>
//         let menuList = document.querySelector('.menu__list');
//         let region = document.querySelector('.actions-header__region');
//         menuList.after(region);
//         //  << ===== Перенос блока region в бургер ==============

//         //  ===== Перенос блока footer__info в footer__contact ============== >>
//         let footerColumn = document.querySelector('.footer__contact');
//         let footerInfo = document.querySelector('.footer__info');
//         footerColumn.after(footerInfo);
//         //  << ===== Перенос блока footer__info в footer__contact ==============

//     } else {

//         //  ===== Перенос блока region в header ============== >>
//         let headerActions = document.querySelector('.actions-header__user');
//         let region = document.querySelector('.actions-header__region');
//         headerActions.before(region);
//         //  << ===== Перенос блока region в header ==============

//         //  ===== Перенос блока footer__info в footer__logo ============== >>
//         let footerLogo = document.querySelector('.footer__logo');
//         let footerInfo = document.querySelector('.footer__info');
//         footerLogo.after(footerInfo);
//         //  << ===== Перенос блока footer__info в footer__logo ==============

//     }
// }

//  << ======== Перенос блока в другое место ========================



//  ======= Подмена картинки background из HTML в CSS ============ >>
function ibg() {

    let ibg = document.querySelectorAll("._ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

//  << ======= Подмена картинки background из HTML в CSS ============ 

// =========================== smoothScroll ========================== >>

let link = document.querySelectorAll('._goto-block');
if (link) {
    let blocks = [];
    for (let index = 0; index < link.length; index++) {
        let el = link[index];
        let block_name = el.getAttribute('href').replace('#', '');
        if (block_name != '' && !~blocks.indexOf(block_name)) {
            blocks.push(block_name);
        }


        el.addEventListener('click', function (e) {
            let target_block_class = el.getAttribute('href').replace('#', '');
            let target_block = document.querySelector('.' + target_block_class);


            window.scroll({
                left: 0,
                top: target_block.offsetTop - 75,
                behavior: 'smooth'
            })
        })
    }
}

// << =========================== smoothScroll ==========================
