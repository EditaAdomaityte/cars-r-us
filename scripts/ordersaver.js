import { SaveOrderEntry } from "./transiantState.js"



export const orderButton = () => {
    document.addEventListener("click", handleOrderClick)
    return "<button id='saveOrder'>PlaceOrder</button>"
}

const handleOrderClick = (clickEvent) =>{
    if(clickEvent.target.id ==="saveOrder"){
        SaveOrderEntry
    }
}