import {html} from '../../node_modules/lit-html/lit-html.js';
import {getDetails, deleteMeme} from '/src/api/data.js';

const detailsTemplate = (meme, isOwner, onDelete) => html`
 <section id="meme-details">
            <h1>Meme Title: ${meme.title}

            </h1>
            <div class="meme-details">
                <div class="meme-img">
                    <img alt="meme-alt" src=${meme.imageUrl}>
                </div>
                <div class="meme-description">
                    <h2>Meme Description</h2>
                    <p>${meme.description}</p>
                    ${isOwner ? html`
                    <a class="button warning" href="/edit/${meme._id}">Edit</a>
                    <button @click=${onDelete} class="button danger">Delete</button>` : ''}                 
                </div>
            </div>
        </section>
`

export async function detailsPage(ctx) {
    const memeId = ctx.params.id;
    const currentUserId = sessionStorage.getItem('userId');
    const meme = await getDetails(memeId);
    const isOwner = currentUserId === meme._ownerId;
    console.log(currentUserId, meme._ownerId)
    ctx.render(detailsTemplate(meme, isOwner, onDelete));
    
    async function onDelete() {
        const isConfirmed = confirm('Are you sure you want to delete this meme?');
        if (isConfirmed) {
            await deleteMeme(memeId);
            ctx.page.redirect('/catalog');
        }
    }
}