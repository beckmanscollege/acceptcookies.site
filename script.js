const root = document.documentElement;

const followers = document.querySelectorAll(".follower");

document.addEventListener("mousemove", (evt) => {
  let x = evt.clientX;
  let y = evt.clientY;

  let x2 = evt.clientX / innerWidth;
  let y2 = evt.clientY / innerHeight;

  root.style.setProperty("--mouse-x", x2);
  root.style.setProperty("--mouse-y", y2);
  
  followers.forEach((follower) => {
    follower.style.left = x + "px";
    follower.style.top = y + "px";
  });
});
