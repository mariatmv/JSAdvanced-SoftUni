import {html} from '../../node_modules/lit-html/lit-html.js'
import {getDetails, editCar} from '/src/api/data.js'

const editTemplate = (car, onSubmit) => html`
 <section id="edit-listing">
            <div class="container">

                <form @submit=${onSubmit} id="edit-form">
                    <h1>Edit Car Listing</h1>
                    <p>Please fill in this form to edit an listing.</p>
                    <hr>

                    <p>Car Brand</p>
                    <input type="text" placeholder="Enter Car Brand" name="brand" .value=${car.brand}>

                    <p>Car Model</p>
                    <input type="text" placeholder="Enter Car Model" name="model" .value=${car.model}>

                    <p>Description</p>
                    <input type="text" placeholder="Enter Description" name="description" .value=${car.description}>

                    <p>Car Year</p>
                    <input type="number" placeholder="Enter Car Year" name="year" .value=${car.year}>

                    <p>Car Image</p>
                    <input type="text" placeholder="Enter Car Image" name="imageUrl" .value=${car.imageUrl}>

                    <p>Car Price</p>
                    <input type="number" placeholder="Enter Car Price" name="price" .value=${car.price}>

                    <hr>
                    <input type="submit" class="registerbtn" value="Edit Listing">
                </form>
            </div>
        </section>
`

export async function editPage(ctx) {
    const carId = ctx.params.id;
    const car = await getDetails(carId);
    ctx.render(editTemplate(car, onSubmit))

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const brand = formData.get('brand');
        const model = formData.get('model');
        const description = formData.get('description');
        let year = formData.get('year');
        year = Number(year);
        const imageUrl = formData.get('imageUrl');
        let price = formData.get('price');
        price = Number(price);

        if (year < 0) {
            return alert('Year must be a positive number');
        }
        if (price < 0) {
            return alert('Price must be a positive number');
        }
        if (!brand || ! model || ! description || ! year || ! imageUrl || ! price) {
            return alert('All fields are required')
        }

        await editCar(carId, {brand, model, description, year, imageUrl, price});
        ctx.page.redirect('/details/' + carId);
    }
}