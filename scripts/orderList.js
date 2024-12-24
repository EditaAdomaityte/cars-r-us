export const Orders = async () => {
    const fetchOrders = await fetch ("http://localhost:3000/orders?_expand=color&_expand=fabric&_expand=option&_expand=wheel")
    const orders = await fetchOrders.json()

    let ordersHTML = orders.map(
        (order) => {
            const orderPrice= order.color.price+order.fabric.price+order.option.price+order.wheel.price
            return `div>
                ${order.color.color} with ${order.wheel.kind}, ${order.fabric.fabric} and ${order.option.package} Package for a total cost of ${orderPrice}
            </div>`
        }
    ).join('');
    return ordersHTML


}