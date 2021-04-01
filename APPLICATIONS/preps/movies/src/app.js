import page from '../node_modules/page/page.mjs';
import {render} from "../node_modules/lit-html/lit-html.js";
import {logout} from '/src/api/data.js'

import {homePage} from "./views/home.js";
import {loginPage} from "./views/login.js";
import {registerPage} from "./views/register.js";

const main = document.querySelector('main');
document.getElementById('logoutBtn').addEventListener('click', async function f() {
    await logout();
    setUserNav();
    page.redirect('/');
})

setUserNav();
page('/', decorateContext, homePage)
page('/login', decorateContext, loginPage)
page('/register', decorateContext, registerPage)
page.start();


function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    const email = sessionStorage.getItem('email');
    if (email != null) {
        document.querySelector('.user > a').textContent = `Welcome, ${email}`
        Array.from(document.querySelectorAll('.guest')).map(x => x.style.display = 'none')
        Array.from(document.querySelectorAll('.user')).map(x => x.style.display = '')
    } else {
        Array.from(document.querySelectorAll('.guest')).map(x => x.style.display = '')
        Array.from(document.querySelectorAll('.user')).map(x => x.style.display = 'none')
    }
}