const submitBtn = document.getElementById('submit')
const displayResult = document.getElementById('display-angka')
const displayText = document.getElementById('dadu-text')
const gambardadu = document.getElementById('dadu-gambar')

submitBtn.onclick = function() {
    let jumlahDadu = document.getElementById('jumlahdadu-input').value
    
    if (jumlahDadu.trim() === "" || isNaN(jumlahDadu) || jumlahDadu == 0 || jumlahDadu < 0) {
        gambardadu.textContent = ""
        displayResult.innerHTML = `
            <style>
                img {
                    border-radius: 5px;
                }
            </style>
            <img src="../images/meme.jpg" width="150">
        `
        return
    } else if (jumlahDadu > 2) {
        gambardadu.textContent = ""
        displayResult.innerHTML = `
             <style>
                img {
                    border-radius: 5px;
                    margin-top: 7px;
                }

                .anakkucay {
                    display: flex;
                    justify-content: center;
                }
            </style>

            <h4>udah woy cuman bisa sampe 2</h4>
            <div class='anakkucay'>
                <img src="../images/anakkucay.jpg" width="150">
            </div>
        `
    }
    
    jumlahDadu = Number(jumlahDadu)
    let randomNum = Math.floor(Math.random() * (6 - 1 + 1)) + 1

    if (jumlahDadu === 1) {
        for(let i = 0; i < 6; i++){
            if (randomNum === (i+1)) {
                displayResult.textContent = `Angka: ${(i+1)}`
                gambardadu.innerHTML = ` <img src="../images/Dadu-${(i+1)}.png" width="100px" alt="">`

                clear()
                break
            }
        }
        
    } else if (jumlahDadu === 2) {
        for(let i = 0; i < 6; i++){
            if (randomNum === (i+1)) {
                randomNum1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1
                displayResult.textContent = `Angka: ${(i+1)}, ${(randomNum1)}`
                gambardadu.innerHTML = `
                 <img src="../images/Dadu-${(i+1)}.png" width="100px" alt="">
                 <img src="../images/Dadu-${(randomNum1)}.png" width="100px" alt="">
                `
                clear()
                break
            }
        }
    }
}