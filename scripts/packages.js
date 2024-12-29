import { setPackageId } from "./transiantState.js"


export const packagesOptions = async() => {
    document.addEventListener("change",handlePackageChange)
    const getData = await fetch("http://localhost:3000/packages")
    const packages= await getData.json()

     let optionsHTML = "<select id='package'><option>Pick a Package</option>"

     const divStringArray = packages.map(
        (option) => {
            return `<option value='${option.id}'>${option.package}
            </option>
                    `
    }
)
optionsHTML += divStringArray.join("")
optionsHTML +='</select>'

return optionsHTML
}


const handlePackageChange= (changeEvent) =>{
    if(changeEvent.target.id === 'package'){
        const convertToNumber =parseInt(changeEvent.target.value)
        setPackageId(convertToNumber)
    }
}