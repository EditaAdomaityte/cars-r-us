export const fabricsOptions = async() => {
    // document.addEventListener("change",handleColorChange)
    const getData = await fetch("http://localhost:3000/fabrics")
    const fabrics= await getData.json()

     let optionsHTML = "<select><option>Pick a Fabric</option>"

     const divStringArray = fabrics.map(
        (fabric) => {
            return `<option id='fabric' value='${fabric.id}'>${fabric.fabric}
            </option>
                    `
    }
)
optionsHTML += divStringArray.join("")
optionsHTML +='</select>'

return optionsHTML
}
