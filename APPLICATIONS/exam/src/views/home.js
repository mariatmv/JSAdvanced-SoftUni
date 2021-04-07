import {html} from '../../node_modules/lit-html/lit-html.js';
import {getRecentArticles} from '/src/api/data.js';

const homeTemplate = (jsArticles, pythonArticles, csharpArticles, javaArticles) => html`
<section id="home-page" class="content">
            <h1>Recent Articles</h1>
            <section class="recent js">
                <h2>JavaScript</h2>
                ${jsArticles.length === 0 ? html`<h3 class="no-articles">No articles yet</h3>` : jsArticles.map(articleTemplate)}
            </section>
            <section class="recent csharp">
                <h2>C#</h2>
                ${csharpArticles.length === 0 ? html`<h3 class="no-articles">No articles yet</h3>` : csharpArticles.map(articleTemplate)}
            </section>
            <section class="recent java">
                <h2>Java</h2>
                ${javaArticles.length === 0 ? html`<h3 class="no-articles">No articles yet</h3>` : javaArticles.map(articleTemplate)}
            </section>
            <section class="recent python">
                <h2>Python</h2>
                ${pythonArticles.length === 0 ? html`<h3 class="no-articles">No articles yet</h3>` : pythonArticles.map(articleTemplate)}
            </section>
        </section>
`

const articleTemplate = (article) => html`
<article>
                    <h3>${article.title}</h3>
                    <p>${article.content}</p>
                    <a href="details/${article._id}" class="btn details-btn">Details</a>
                </article>
`

export async function homePage(ctx) {
    let articles = await getRecentArticles();
    let jsArticles = articles.filter(x => x.category === 'JavaScript')
    let pythonArticles = articles.filter(x => x.category === 'Python')
    let csharpArticles = articles.filter(x => x.category === 'C#')
    let javaArticles = articles.filter(x => x.category === 'Java')
    ctx.render(homeTemplate(jsArticles, pythonArticles, csharpArticles, javaArticles));
}