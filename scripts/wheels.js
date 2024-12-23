export const wheelOptions = async() => {
    // document.addEventListener("change",handleColorChange)
    const getData = await fetch("http://localhost:3000/wheels")
    const wheels= await getData.json()

     let optionsHTML = "<select><option>Pick Wheels</option>"

     const divStringArray = wheels.map(
        (wheel) => {
            return `<option id='wheel' value='${wheel.id}'>${wheel.kind}
            </option>
                    `
    }
)
optionsHTML += divStringArray.join("")
optionsHTML +='</select>'

return optionsHTML
}
