import page from '../node_modules/page/page.mjs'
import {render} from '../node_modules/lit-html/lit-html.js'
import {createPage} from '../views/create.js';
import {dashboardPage} from '../views/dashboard.js';
import {detailsPage} from '../views/details.js';
import {editPage} from '../views/edit.js';
import {loginPage} from '../views/login.js';
import { myPage} from '../views/myFurniture.js';
import {registerPage} from '../views/register.js';
import {logout} from "./api/data.js";


const main = document.querySelector('.container');

page('/', renderMiddleware, dashboardPage);
page('/dashboard', renderMiddleware, dashboardPage);
page('/details/:id', renderMiddleware, detailsPage);
page('/create', renderMiddleware, createPage);
page('/edit/:id', renderMiddleware, editPage);
page('/register', renderMiddleware, registerPage);
page('/login', renderMiddleware, loginPage);
page('/my-furniture', renderMiddleware, myPage);

setUserNav();
page.start();


document.getElementById('logoutBtn').addEventListener('click', async function () {
    await logout();
    setUserNav();
    page.redirect('/');
})

function renderMiddleware(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;
    next();
}

function setUserNav() {
    const userId = sessionStorage.getItem('userId');
    if (userId != null) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('guest').style.display = 'inline-block';
        document.getElementById('user').style.display = 'none';
    }
}