import { setFabricId } from "./transiantState.js"

export const fabricsOptions = async() => {
     document.addEventListener("change",handleFabricChange)
    const getData = await fetch("http://localhost:3000/fabrics")
    const fabrics= await getData.json()

     let optionsHTML = "<select id='fabric'><option>Pick a Fabric</option>"

     const divStringArray = fabrics.map(
        (fabric) => {
            return `<option value='${fabric.id}'>${fabric.fabric}
            </option>
                    `
    }
)
optionsHTML += divStringArray.join("")
optionsHTML +='</select>'

return optionsHTML
}

const handleFabricChange= (changeEvent) =>{
    if(changeEvent.target.id ==="fabric"){
        const convertToNumber =parseInt(changeEvent.target.value)
        setFabricId(convertToNumber)
    }
}