import { colorOptions } from "./colors.js"
import { fabricsOptions } from "./fabrics.js"
import { packagesOptions } from "./packages.js"
import { wheelOptions } from "./wheels.js"




const render = async() => {
    const colorsHTML = await colorOptions()
    const fabricsHTML = await  fabricsOptions()
    const packagesHTML = await packagesOptions()
    const wheelsHTML = await wheelOptions()
    // const buttonHTML = saveOrders()
    // const generatedList =await Orders()

    const composedHTML = `
        <h1>Cars R Us: Personal Car Builder</h1></h1>

        <article class="choices">
            <section class="colorsOptions">
                <h2>Paints</h2>
                ${colorsHTML}
            </section>
            <section class="choices__fabrics options">
                 <h2>Fabrics</h2>
                 ${fabricsHTML}
             </section>
            <section class="choices__packages options">
                <h2>Packages</h2>
                ${packagesHTML}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${wheelsHTML}
            </section>

        </article>
    `

    container.innerHTML = composedHTML
}

render()

// document.addEventListener("newOrderCreated", event => {
//     console.log("State of data has changed. Regenerating HTML...")
//     render()
// })

//         </article>

//         <article class="order">
//         ${buttonHTML}

//         </article>

//         <article class="customOrders">
//             <h2>Custom Jewelry Orders</h2>
//             ${generatedList}