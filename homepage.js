let video = document.querySelectorAll(".vid");
console.log(video);
  for(let i=0;i<video.length;i++)
  {
    video[i].addEventListener("mouseover", function () {
      video[i].play();
      
    });
    let pause = document.querySelectorAll(".vid");
    pause[i].addEventListener("mouseout", function () {
      pause[i].pause();
    });
  }