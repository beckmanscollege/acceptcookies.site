const root = document.documentElement;
 
document.addEventListener('mousemove', evt => {
    let x = evt.clientX / innerWidth;
    let y = evt.clientY / innerHeight;
 
    root.style.setProperty('--mouse-x', x);
    root.style.setProperty('--mouse-y', y);
});



const followers = document.querySelectorAll(".follower");

document.addEventListener("mousemove", (evt) => {
  let x = evt.clientX;
  let y = evt.clientY;
  
  followers.forEach(follower => {
    follower.style.left = x + "px";
    follower.style.top = y + "px";
  });
});
