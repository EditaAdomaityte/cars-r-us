



const render = async() => {
    const colorsHTML = await \
    const fabricsHTML = await  sizeOptions()
    const packagesHTML = await styleOptions()
    const wheelsHTML = await styleOptions()
    const buttonHTML = saveOrders()
    const generatedList =await Orders()

    const composedHTML = `
        <h1>Cars R Us</h1></h1>

        <article class="choices">
            <section class="choices__colors options">
                <h2>Colors</h2>
                ${colorsHTML}
            </section>

            <section class="choices__fabrics options">
                <h2>Fabrics</h2>
                ${fabricsHTML}
            </section>

            <section class="choices__Packages options">
                <h2>Packages</h2>
                ${packagesHTML}
            </section>

            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${wheelsHTML}
            </section>

        </article>

        <article class="order">
        ${buttonHTML}

        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${generatedList}

        </article>
    `

    container.innerHTML = composedHTML
}

render()

document.addEventListener("newOrderCreated", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})
