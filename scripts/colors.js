import { setColorId } from "./transiantState.js"


export const colorOptions = async() => {
     document.addEventListener("change",handleColorChange)
    const getData = await fetch("http://localhost:3000/colors")
    const colors= await getData.json()

     let optionsHTML = "<select id='color'><option>Pick a Paint</option>"

     const divStringArray = colors.map(
        (color) => {
            return `<option value='${color.id}'>${color.color}
            </option>
                    `
    }
)
optionsHTML += divStringArray.join("")
optionsHTML +='</select>'

return optionsHTML
}

const handleColorChange = (changeEvent) => {
    if(changeEvent.target.id === "color"){
        const convertToNumber =parseInt(changeEvent.target.value)
        setColorId(convertToNumber)
    }
}

