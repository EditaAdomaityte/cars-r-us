

export const metalOptions = async() => {
    document.addEventListener("change",handleMetalChange)
    const getData = await fetch("http://localhost:8088/metals")
    const metals= await getData.json()

     let optionsHTML = ""

     const divStringArray = metals.map(
        (metal) => {
            return `<div>
            <input type='radio' name='color' value='${metal.id}' /> ${metal.metal}
            </div>`
    }
)
optionsHTML += divStringArray.join("")

return optionsHTML
}

