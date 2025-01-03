
const state = {
    "id": 0,
    "colorId": 0,
    "fabricId": 0,
    "packageId": 0,
    "wheelId": 0
}

export const setColorId = (chosenColor) =>{
    state.colorId = chosenColor
    console.log(state)
}

export const setFabricId = (chosenFabric) =>{
    state.fabricId = chosenFabric
    console.log(state)
}

export const setPackageId = (chosenPackage) =>{
    state.packageId = chosenPackage
    console.log(state)
}
export const setWheelId = (chosenWheel) =>{
    state.wheelId = chosenWheel
    console.log(state)
}


export const SaveOrderEntry = async() =>{
    const sendOrders= {
        method: "POST",
        headers: {
            "Content-Type": "application/json"},
        body: JSON.stringify(state)
        }
    const response =await fetch ("http://localhost:3000/orders",sendOrders)
    const customEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(customEvent)
    }
