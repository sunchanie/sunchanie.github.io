const wrapper= document.querySelector(".wrapper");
const question= document.querySelector(".question");
const img= document.querySelector("img");
const yesBtn= document.querySelector("yes-btn");
const noBtn= document.querySelector("no-btn");

yesBtn.addEventListener("clik", () => {
  question.innerHTML = "Aaaaa, aku juga suka kamu!";
  img.scr="love u.jpg";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect= noBtn.getBoundingClientRect();
  const maxX= window.innerwidth - noBtnRect.width;
  const maxY= window.innerHeight - noBtnRect.height;
  
  const randomX=Math.floor(Math.random() * maxX);
  const randomY=Math.floor(Math.random() * maxY);
  
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}