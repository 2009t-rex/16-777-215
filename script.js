let kolorBG = 0;
let kolorTxtR = 0;
let kolorTxtG = 0;
let kolorTxtB = 0;
const kTekstu = document.getElementById("kTekstu");
const kTla = document.getElementById("kTla");
const resetK = document.getElementById("reset")
let obecnieJestes = 0;

function zmienKolory() {
    document.body.style.background = `#${kolorBG.toString(16).padStart(6,0)}`
    kTla.textContent = `#${kolorBG.toString(16).padStart(6,0)}`;
    kolorBG++;
    document.body.style.color = `#${kolorTxtR.toString(16).padStart(2,0)}${kolorTxtG.toString(16).padStart(2,0)}${kolorTxtB.toString(16).padStart(2,0)}`;
    kTekstu.textContent = `#${kolorTxtR.toString(16).padStart(2,0)}${kolorTxtG.toString(16).padStart(2,0)}${kolorTxtB.toString(16).padStart(2,0)}`;
    kolorTxtR++
    if(kolorTxtR > 255){
        kolorTxtG++
        kolorTxtR = 0;
    }
    if(kolorTxtG > 255){
        kolorTxtB++;
        kolorTxtG =0;
    }
}
zmienKolory();
setInterval(zmienKolory, 1)

window.addEventListener("unload", () => {
    localStorage.setItem("kolorBG", kolorBG)
    localStorage.setItem("kolorTxtR", kolorTxtR)
    localStorage.setItem("kolorTxtG", kolorTxtG)
    localStorage.setItem("kolorTxtB", kolorTxtB)
    localStorage.setItem("obecnieJestes", obecnieJestes)
})
window.addEventListener("load", () =>{
    kolorBG = localStorage.getItem("kolorBG")
    kolorTxtR = localStorage.getItem("kolorTxtR")
    kolorTxtG = localStorage.getItem("kolorTxtG")
    kolorTxtB = localStorage.getItem("kolorTxtB")
    obecnieJestes = localStorage.getItem("obecnieJestes")
    let random = Math.floor(Math.random() * 20);
    if(random == 3 || random == 5 || random == 8 || random == 15){
        audio.src = "Robimy.mp3"
    }
    else{
        audio.src = "How lovely.mp3"
    }
})



function aktuZegar() {
    const d = new Date()
    const godz = d.getHours().toString().padStart(2, 0);
    const minuta = d.getMinutes().toString().padStart(2, 0);
    const sekunda = d.getSeconds().toString().padStart(2, 0);
    const czasString =`${godz}:${minuta}:${sekunda}`;
    document.getElementById("obecnaGodzina").textContent = czasString
    document.getElementById("obecnyPobyt").textContent = obecnieJestes
    obecnieJestes++;
}
aktuZegar();
setInterval(aktuZegar, 1000)


const media = window.matchMedia("(max-width: 1000px")

window.addEventListener("visibilitychange", () => {
    const tytul = document.getElementById("webTitle")
    const ikonaStrony = document.getElementById("webIcon")
    const audio = document.getElementById("audio");
    if (document.hidden){
        if(!media.matches){
            audio.play()
            // Pls let me have this song. I think is copyrighted
            audio.volume = 0.5;            
        }
        tytul.textContent = "A co z odliczaniem?"
        ikonaStrony.href = "https://raw.githubusercontent.com/2009t-rex/Obrazy/refs/heads/main/DoomIcon/DoomRano.webp"
    }
    else{
        audio.volume = 1.0;
        audio.pause()
        tytul.textContent = "16 777 216"
        ikonaStrony.href = "https://raw.githubusercontent.com/2009t-rex/Obrazy/refs/heads/main/DoomIcon/DoomCB.webp"
    }
})
resetK.addEventListener("click", () => {
    kolorBG = 0;
    kolorTxtR = 0;
    kolorTxtG = 0;
    kolorTxtB = 0;
    obecnieJestes = 0;
})
