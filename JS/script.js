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



