const CtoF = document.getElementById('celcius-farenheit')
const CtoK = document.getElementById('celcius-kelvin')
const CtoR = document.getElementById('celcius-reamur')
const FtoC = document.getElementById('farenheit-celcius')
const FtoK = document.getElementById('farenheit-kelvin')
const FtoR = document.getElementById('farenheit-reamur')
const KtoC = document.getElementById('kelvin-celcius')
const KtoF = document.getElementById('kelvin-farenheit')
const KtoR = document.getElementById('kelvin-reamur')
const RtoC = document.getElementById('reamur-celcius')
const RtoF = document.getElementById('reamur-farenheit')
const RtoK = document.getElementById('reamur-kelvin')

const SubmitBtn = document.getElementById('submit')
const DisplayHasil = document.getElementById('hasil')

let konversi;

SubmitBtn.onclick = function () {
    let SuhuInput = document.getElementById('input').value

    if (SuhuInput.trim() === '' || isNaN(SuhuInput)) {
        DisplayHasil.textContent = `yang bener aje lu`
        return;
    }

    let Suhu = Number(SuhuInput)

    if (CtoF.checked || CtoK.checked || CtoR.checked) { // CELCIUS
        if (CtoF.checked) {
            konversi = ((Suhu * (9 / 5)) + 32)
            DisplayHasil.textContent = `${konversi}°F`
        } else if (CtoK.checked) {
            konversi = Suhu + 273
            DisplayHasil.textContent = `${konversi} K`
        } else {
            konversi = (Suhu * 4) / 5
            DisplayHasil.textContent = `${konversi}°R`
        }
    } else if (FtoC.checked || FtoK.checked || FtoR.checked) {
        if (FtoC.checked) {
            konversi = Math.round(((Suhu - 32) * 5) / 9)
            DisplayHasil.textContent = `${konversi}°C`
        } else if (FtoK.checked) {
            konversi = Math.round(((Suhu - 32) * 5) / 9 + 273)
            DisplayHasil.textContent = `${konversi} K`
        } else {
            konversi = Math.round(((Suhu - 32) * 4) / 9)
            DisplayHasil.textContent = `${konversi}°R`
        }
    } else if (RtoC.checked || RtoK.checked || RtoF.checked) {
        if (RtoC.checked) {
            konversi = (Suhu * 5) / 4
            DisplayHasil.textContent = `${konversi}°C`
        } else if (RtoK.checked) {
            konversi = (Suhu * 5) / 4 + 273
            DisplayHasil.textContent = `${konversi} K`
        } else {
            konversi = (Suhu * 9) / 4 + 32
            DisplayHasil.textContent = `${konversi}°F`
        }
    } else if (KtoC.checked || KtoR.checked || KtoF.checked) {
        if (KtoC.checked) {
            konversi = Suhu - 273
            DisplayHasil.textContent = `${konversi}°C`
        } else if (KtoR.checked) {
            konversi = ((Suhu - 273) * 4) / 5
            DisplayHasil.textContent = `${konversi}°R`
        } else {
            konversi = ((Suhu - 273) * 9) / 5 + 32
            DisplayHasil.textContent = `${konversi}°F`
        }
    }
} 