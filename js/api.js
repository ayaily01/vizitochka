const astana = document.getElementById("astana")
const kyoto = document.getElementById("kyoto")
const rome = document.getElementById("rome")

async function Api () {
    const respons_astana = await fetch ('https://api.open-meteo.com/v1/forecast?latitude=54.8667&longitude=69.15&current=temperature_2m&hourly=temperature_2m')
    const respons_kyoto = await fetch ('https://api.open-meteo.com/v1/forecast?latitude=35.0211&longitude=135.7538&current=temperature_2m&hourly=temperature_2m')
    const respons_rome = await fetch ('https://api.open-meteo.com/v1/forecast?latitude=47.6062&longitude=-122.3321&current=temperature_2m&hourly=temperature_2m')
    const data_astana = await respons_astana.json()
    const data_kyoto = await respons_kyoto.json()
    const data_rome = await respons_rome.json()
    return [data_astana, data_kyoto, data_rome]
}

async function output () {
    try {
        let out = await Api()
        console.log(out)
        astana.textContent = `Air Temperature: ${out [0].current.temperature_2m} \u00B0C `
        kyoto.textContent = `Air Temperature: ${out [1].current.temperature_2m} \u00B0C `
        rome.textContent = `Air Temperature: ${out [2].current.temperature_2m} \u00B0C `
    }
    catch (error) {
        console.log(error)
    }
    finally {
        setTimeout(output,10000)
    }
}

output()