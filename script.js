const followers = document.querySelectorAll(".follower");

followers.forEach(follower => {
  follower.style.position = "absolute";
  follower.style.left = "0px";
  follower.style.top = "0px";
});

document.addEventListener("mousemove", (evt) => {
  let x = evt.clientX;
  let y = evt.clientY;

  followers.forEach((follower, index) => {
    let delay = index * 100; // increase delay for each image
    setTimeout(() => {
      follower.style.left = x + "px";
      follower.style.top = y + "px";
    }, delay);
  });
});

