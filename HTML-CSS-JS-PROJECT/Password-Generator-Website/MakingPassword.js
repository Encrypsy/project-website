const char8_btn = document.getElementById('i8char-btn')
const char12_btn = document.getElementById('i12char-btn')
const char16_btn = document.getElementById('i16char-btn')
const char32_btn = document.getElementById('i32char-btn')

const btn_bg_clicked = document.getElementsByClassName('button')

const include_HurufBesar = document.getElementById('include-hurufbesar').checked
const include_HurufKecil = document.getElementById('include-hurufkecil').checked
const include_Angka = document.getElementById('include-angka').checked
const include_Simbol = document.getElementById('include-simbol').checked

const submit_btn = document.getElementById('submit-btn')
const displayText = document.getElementById('display-text')

submit_btn.onclick = function () {

    function generatePassword(length = 0, uppercase = false, lowercase = false, angka = false, simbol = false) {

        let uppercases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let lowercases = 'abcdefghijklmnopqrstuvwxyz'
        let angkas = '0123456789'
        let simbols = '!@#$%^&*()?'

        let allowedChars = ""
        let password = ""

        allowedChars += uppercase ? uppercases : ''
        allowedChars += lowercase ? lowercases : ''
        allowedChars += angka ? angkas : ''
        allowedChars += simbol ? simbols : ''

        if (length < 8) {
            console.log(`[ Minimal ada 8 karakter ]`)
            return
        }

        if (length < 8 && allowedChars.length === 0)

            if (allowedChars.length === 0) {
                console.log('[ Minimal ada satu karakter lah boy ]')
                return
            }

        for (let i = 0; i < length; i++) {
            let randomIndex = Math.floor(Math.random() * allowedChars.length)
            password += allowedChars[randomIndex]
        }

        console.log(password)
    }


    let characters = 0
    let Masukkin_HurufBesar = false
    let Masukkin_HurufKecil = false
    let Masukkin_Angka = false
    let Masukkin_Simbol = false

    if ((char8_btn.checked || char12_btn.checked || char16_btn.checked || char32_btn.checked) && (include_HurufBesar || include_HurufKecil|| include_Angka|| include_Simbol)) {

        if (char8_btn.checked || char12_btn.checked || char16_btn.checked || char32_btn.checked) {
            if (char8_btn.checked) {
                characters = 8
            } else if (char12_btn.checked) {
                characters = 12
            } else if (char16_btn.checked) {
                characters = 16
            } else {
                characters = 32
            }
        }

        if (include_HurufBesar|| include_HurufKecil|| include_Angka|| include_Simbol) {

            let allowed = [Masukkin_HurufBesar, Masukkin_HurufKecil, Masukkin_Angka, Masukkin_Simbol]
            for (let i of allowed) {
                if (allowed[i].checked) {
                    allowed[i] = true
                }
            }

        }

        let passwordBaru = generatePassword(characters, Masukkin_HurufBesar, Masukkin_HurufKecil, Masukkin_Angka, Masukkin_Simbol)

        displayText.classList.add('duarjadi')
        displayText.textContent = passwordBaru
    } else {
        displayText.textContent = 'murka banget gua'
        console.log('hi')
        return
    }


}


