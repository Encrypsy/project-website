let minNum = document.getElementById('batasMinimal').value
let maxNum = document.getElementById('batasMaximum').value
let judulInput = document.getElementById('judul-input')
const submit = document.getElementById('maxmin-btn')

submit.onclick = function() {
    if(minNum === null || maxNum === null || (minNum && maxNum) === null) {
        document.getElementById('judul-minmax').textContent = `Tolong banget dua2 nya diisi`
        return
    }

    let jawaban = document.getElementById(`value-input`).value
    let display = document.getElementById('display-value')

    minNum = Number(minNum)
    maxNum = Number(maxNum)

    TebakAngka(minNum, maxNum)
    
    function TebakAngka(min, max) {
        let checkpoint = 0
        let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
        
        while (checkpoint == 0) {
            
            judulInput.textContent = `Masukkan angka tebakanmu (${min} - ${max})`

            // let inputNum = Number(window.prompt(`Masukkan angka tebakkan mu (${min} - ${max}): `))
            
            if (jawaban === randomNum) {
                display.textContent = `YEYY BENER jawabannya ${randomNum}`
                checkpoint = 1
            } else {
                if (jawaban > randomNum) {
                    display.textContent = `LU KELEBIHAN, coba lagi mek`
                    // window.alert(`LU KELEBIHAN, coba lagi mek`)
                } else if (jawaban < randomNum) {
                    display.textContent = `MASIH KURANG, coba lagi mek`
                    // window.alert(`MASIH KURANG, coba lagi mek`)
                }
            }
        }
    }
}

// TebakAngka(1, 5)



