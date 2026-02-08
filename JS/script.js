// If you're reading this,
// you are looking at a website made with immense love.
// Stay happy. Always.

const yesBtn = document.getElementById("yesBtn");
let scale = 1;

const noBtn = document.getElementById("noBtn");
const message = document.getElementById("noMessage");


const lines = [
 "Think again 😄",
 "Are you sure?",
 "Wrong button!",
 "Last chance ❤️"
];

const popup = document.getElementById("popup");
const popupBody = document.getElementById("popup-body");
const closeBtn = document.querySelector(".close-btn");

const cards = document.querySelectorAll(".gift-card");

const bloom = document.getElementById("heartBloom");
const heartCount = window.innerWidth < 600 ? 40 : 200;

const song = document.getElementById("loveSong");

noBtn.addEventListener("click", ()=>{

    scale += 2;
    yesBtn.style.transform = `scale(${scale})`;
    
    if(scale>18){
        yesBtn.style.zIndex = 2;
        noBtn.style.zIndex = 1;
    }
    
    const x = Math.random()*80;
    const y = Math.random()*80;

    noBtn.style.position="absolute";
    noBtn.style.left = x+"%";
    noBtn.style.top = y+"%";

    message.innerText =
      lines[Math.floor(Math.random()*lines.length)];
});

tsParticles.load("tsparticles", {
  fullScreen: { enable: false },

  particles: {
    number: {
      value: window.innerWidth < 768 ? 12 : 20
    },

    color: {
        value: "#ff6b9a"
    },

    shape: {
      type: "char",
      character: {
        value: "❤",
        font: "Verdana",
        style: "",
        weight: "400"
      }
    },

    opacity: {
      value: 0.25
    },

    size: {
      value: { min: 8, max: 16 }
    },

    move: {
      enable: true,
      speed: 1,
      direction: "top",
      outModes: {
        default: "out"
      }
    }
  }
});

yesBtn.addEventListener("click", () => {
    document
        .getElementById("scene1")
        .classList.remove("active");

    document
        .getElementById("scene2")
        .classList.add("active");

    setTimeout(() => {

        document
            .getElementById("scene2")
            .classList.remove("active");

        document
            .getElementById("scene3")
            .classList.add("active");

    }, 30000);
});

cards.forEach((card, index)=>{

    card.addEventListener("click", ()=>{

        if(index === 0){

            startBloom();   // ⭐ MAGIC LINE
            return;         // stop popup from opening
        }

        // other cards → popup
        popup.classList.add("active");

        if(index === 1){
            popupBody.innerHTML =
            `<div class="memory-gallery">

            <button class="nav prev">‹</button>

            <img id="memoryImage" src="assets/memories/1.jpg">

            <button class="nav next">›</button>

        </div>

`;
}
        const images = [
            "assets/images/IMG_9215.jpg",
            "assets/images/WhatsApp Image 2026-02-08 at 7.41.59 PM.jpg",
            "assets/images/IMG_0881.jpg",
            "assets/images/IMG_4760.jpg",
            "assets/images/IMG_6300.jpg",
            "assets/images/IMG_7099.jpg",
            "assets/images/IMG_7763.jpg",
            "assets/images/IMG_8997.jpg",
            "assets/images/IMG_9807.jpg"
        ];


    let current = 0;

    setTimeout(()=>{

    const img = document.getElementById("memoryImage");

    document.querySelector(".next").onclick = ()=>{

    current = (current + 1) % images.length;
    img.style.opacity = 0;
img.src = images[current];

img.onload = () => {
    img.style.opacity = 1;
};

};

document.querySelector(".prev")
.onclick = ()=>{

    current = (current - 1 + images.length) % images.length;
    img.src = images[current];

};

},100);
        if(index === 2){

    popup.classList.add("active");

    popupBody.innerHTML = `

        <div class="song-ui">

            <h2>This one is for us…</h2>

            <button id="playBtn">Play ❤️</button>

        </div>

    `;

    setTimeout(()=>{

        const song = document.getElementById("loveSong");
        const btn = document.getElementById("playBtn");

        btn.addEventListener("click", ()=>{

            song.play();
            btn.innerText = "Playing… 🎵";

        });

    },100);
}

    });

});

closeBtn.addEventListener("click", ()=>{
    popup.classList.remove("active");
    song.pause();
    song.currentTime = 0;
});

function startBloom(){

    bloom.classList.add("active");

    for(let i=0;i<heartCount;i++){

        const heart = document.createElement("div");
        heart.classList.add("bloom-heart");
        heart.innerHTML = "❤";

        const x = (Math.random()-0.5)*600;
        const y = (Math.random()-0.5)*600;

        heart.style.left = `calc(50% + ${x}px)`;
        heart.style.top  = `calc(50% + ${y}px)`;

        heart.style.animationDelay = `${i*0.05}s`;

        bloom.appendChild(heart);
    }
}

document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        popup.classList.remove("active");
        bloom.classList.remove("active");

        // cleanup hearts (VERY important)
        document.querySelectorAll(".bloom-heart")
            .forEach(h => h.remove());
    }
    
    song.pause();
    song.currentTime = 0;
});

document.querySelectorAll(".note")
.forEach(note=>{

    note.addEventListener("click", ()=>{

        popup.classList.add("active");

        popupBody.innerHTML = `
            <p>${note.dataset.message}</p>
        `;

    });

});


