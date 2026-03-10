const container = document.getElementById("text-container");
const line = document.getElementById("glow-line");
const phrases = ["Web Devoloper", "Video Editor", "Digital Marketer"];
let phraseIndex = 0;

function createText(text) {
  container.innerHTML = "";
  text.split("").forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.className = "char";
    container.appendChild(span);

    setTimeout(() => {
      span.classList.add("visible");
    }, i * 50);
  });

  line.style.width = "200px";
}

function removeText() {
  const chars = document.querySelectorAll(".char");
  chars.forEach((span, i) => {
    setTimeout(() => {
      span.classList.remove("visible");
      span.classList.add("out");
    }, i * 30);
  });

  line.style.width = "0px";
}

function cycle() {
  createText(phrases[phraseIndex]);

  setTimeout(() => {
    removeText();
    phraseIndex = (phraseIndex + 1) % phrases.length;

    setTimeout(cycle, 1000);
  }, 3500);
}

window.onload = () => {
  cycle();
};