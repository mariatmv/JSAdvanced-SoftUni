import {html} from '../../node_modules/lit-html/lit-html.js';
import {getDetails, deleteArticle} from "/src/api/data.js";

const detailsTemplate = (article, isOwner, onDelete) => html`
        <section id="details-page" class="content details">
            <h1>${article.title}</h1>

            <div class="details-content">
                <strong>Published in category ${article.category}</strong>
                <p>${article.content}</p>
                
                ${isOwner ? html`<div class="buttons">
                    <a @click=${onDelete} href="javascript:void(0)" class="btn delete">Delete</a>
                    <a href="/edit/${article._id}" class="btn edit">Edit</a>
                </div>` : html`<a href="/" class="btn edit">Back</a>`}
            </div>
        </section>
`

export async function detailsPage(ctx) {
    const articleId = ctx.params.id;
    const article = await getDetails(articleId);
    const ownerId = article._ownerId;
    const userId = sessionStorage.getItem('userId');
    const isOwner = ownerId === userId;

    ctx.render(detailsTemplate(article, isOwner, onDelete))

    async function onDelete() {
        let confirmed = confirm('Are you sure you want to delete this article?')
        if (confirmed) {
            await deleteArticle(articleId);
            ctx.page.redirect('/')
        }
    }
}