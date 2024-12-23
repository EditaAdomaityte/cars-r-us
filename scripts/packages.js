export const packagesOptions = async() => {
    // document.addEventListener("change",handlePackageChange)
    const getData = await fetch("http://localhost:3000/packages")
    const packages= await getData.json()

     let optionsHTML = "<select><option>Pick a Package</option>"

     const divStringArray = packages.map(
        (option) => {
            return `<option id='package' value='${option.id}'>${option.package}
            </option>
                    `
    }
)
optionsHTML += divStringArray.join("")
optionsHTML +='</select>'

return optionsHTML
}
