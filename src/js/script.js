let user_icon = document.querySelector('.user-header__icon');
user_icon.addEventListener("click", function (e) {
    let user_menu = document.querySelector('.user-header__menu');
    user_menu.classList.toggle('_active');
});


// Menu
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
// function menu_close() {
//     let iconMenu = document.querySelector(".icon-menu");
//     let body = document.querySelector(".menu__body");
//     iconMenu.classList.remove("_active");
//     body.classList.remove("_active");
// }

// ==========

document.documentElement.addEventListener("click", function (e) {
    if (!e.target.closest('.user-header')) {
        let user_menu = document.querySelector('.user-header__menu');
        user_menu.classList.remove('_active');
    }
});

//  Перенос блока region в бургер ===========================

start();
window.addEventListener('resize', start);

function start() {
    if (document.documentElement.clientWidth < 767.98) {
        let menuList = document.querySelector('.menu__list');
        let region = document.querySelector('.actions-header__region');
        menuList.after(region);
    } else {
        let headerActions = document.querySelector('.actions-header__user');
        let region = document.querySelector('.actions-header__region');
        headerActions.before(region);
    }
}

// =========================================================



//  Подмена картинки из HTML b CSS =========================
function ibg() {

    let ibg = document.querySelectorAll("._ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

// ===========================================================