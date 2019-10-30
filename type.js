

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

  window.addEventListener("keydown", playSound);
  const btns = document.getElementsByClassName("key");
  for (let i = 0; i < btns.length; i++);
});

// credit taken from:
//1. add new event listener window, i used window. so i am accessing the whole page
//2. create the event being the 'keydown' element, play sound being the result
//3. then we choose which key will be the trigger through the '=, "key" is trigger which will be all keys as i have created a class in html
//4. then to adjust the time for the function, being 0 seconds 

//In order to actually add the music to the page, I had to create a document event listener
//similar to the window, we had the function which is play sound
//we then add what will happen if keys are pressed (keycode) which will be audio, linked as data-key in html.
//I also added a div class called playing, which will be triggered through the click
//similar to the window evetn listener, we have to add a time this function will last for which needs to match our window event listener
//
//https://keycode.info/
//https://www.youtube.com/watch?v=5-koI06rmcA&t=109s
//https://learn.framevr.io/project5/part2