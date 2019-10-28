


document.addEventListener("DOMContentLoaded", () => {
  function playSound(e, clicked) {
    if (!e.keyCode) e.keyCode = clicked;
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); 
    if (!audio) return; 
    key.classList.add("playing"); 
    audio.currentTime = 0; 
    audio.play(); 
    setTimeout(() => key.classList.remove("playing"), 150); 
  }

  function handleClick(e) {
    const btn = e.target.tagName === "DIV" ? e.target : e.target.parentElement;
    playSound(e, btn.getAttribute("data-key"));
  }

  window.addEventListener("keydown", playSound);
  const btns = document.getElementsByClassName("key");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", handleClick);
  }
});