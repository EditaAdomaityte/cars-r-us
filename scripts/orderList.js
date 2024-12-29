export const Orders = async () => {
    const fetchOrders = await fetch ("http://localhost:3000/orders?_expand=color&_expand=fabric&_expand=package&_expand=wheel")
    const orders = await fetchOrders.json()

    let ordersHTML = orders.map(
        (order) => {
            const orderPrice= order.color.price+order.fabric.price+order.package.price+order.wheel.price
            return `<div>
                ${order.color.color} car with ${order.wheel.kind} wheels, ${order.fabric.fabric} interior and ${order.package.package}  for a total cost of ${orderPrice} $
            </div>`
        }
    ).join('');
    return ordersHTML


}