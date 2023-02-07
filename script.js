const root = document.documentElement;
 
document.addEventListener('mousemove', evt => {
    let x = evt.clientX / innerWidth;
    let y = evt.clientY / innerHeight;
 
    root.style.setProperty('--mouse-x', x);
    root.style.setProperty('--mouse-y', y);
});

const followers = document.querySelectorAll('.follower');

document.addEventListener('mousemove', (event) => {
  let x = event.clientX;
  let y = event.clientY;

  followers.forEach((follower) => {
    follower.style.top = y + "px";
    follower.style.left = x + "px";
  });
});
