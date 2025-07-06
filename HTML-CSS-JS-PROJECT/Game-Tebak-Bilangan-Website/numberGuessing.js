const min = 1
const max = 5

function TebakAngka(min, max) {
    let checkpoint = 0
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

    while (checkpoint == 0) {
        let inputNum = Number(window.prompt(`Masukkan angka tebakkan mu (${min} - ${max}): `))
        
        if (inputNum === randomNum) {
            window.alert(`YEYY BENER jawabannya ${randomNum}`)
            checkpoint = 1
        } else {
            if (inputNum > randomNum) {
                window.alert(`LU KELEBIHAN, coba lagi mek`)
            } else if (inputNum < randomNum) {
                window.alert(`MASIH KURANG, coba lagi mek`)
            }
        }
    }
}

TebakAngka(1, 5)



