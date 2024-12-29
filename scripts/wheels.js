import { setWheelId } from "./transiantState.js"

export const wheelOptions = async() => {
     document.addEventListener("change",handleWheelChange)
    const getData = await fetch("http://localhost:3000/wheels")
    const wheels= await getData.json()

     let optionsHTML = "<select id='wheel'><option>Pick Wheels</option>"

     const divStringArray = wheels.map(
        (wheel) => {
            return `<option value='${wheel.id}'>${wheel.kind}
            </option>
                    `
    }
)
optionsHTML += divStringArray.join("")
optionsHTML +='</select>'

return optionsHTML
}
const handleWheelChange= (changeEvent) =>{
    if(changeEvent.target.id ==="wheel"){
        const convertToNumber =parseInt(changeEvent.target.value)
        setWheelId(convertToNumber)
    }
}