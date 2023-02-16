const followers = document.querySelectorAll(".follower");

/* 
                              ...:~!~^:.       
                           ..^^^^~^:^!77!^^.    
                         .::::::^???GBG?^^!PY:  
                         ^!::::::^7Y5J?!^^^7PG^ 
                       .:77!!J7^!!!^^^^~~!~7GP.
                       ::^755GP~:~?Y!:::~~7~~YG?
                      .:~~?JY~^!!^!Y?^^7?^:^J#7
                       .:^~~^^~!:::^~^JJ7!^!YP.
                       .~^!!?YJ!???~!7??PY!JY5.
                        .^!!7PG?Y577YJ!!Y5YY?: 
                          :^!77!7J7!777J?J?^   
                            .:^7J7?!7!!~:.     

*/

followers.forEach(follower => {
  follower.style.position = "absolute";
  follower.style.left = "0px";
  follower.style.top = "0px";
});

document.addEventListener("mousemove", (evt) => {
  let x = evt.clientX;
  let y = evt.clientY;
  
  
  
  
  /* 
        ...:~!~^:.       
    ..^^^^~^:^!77!^^.    
  .::::::^???GBG?^^!PY:  
  ^!::::::^7Y5J?!^^^7PG^ 
 .:77!!J7^!!!^^^^~~!~7GP.
::^755GP~:~?Y!:::~~7~~YG?
.:~~?JY~^!!^!Y?^^7?^:^J#7
 .:^~~^^~!:::^~^JJ7!^!YP.
 .~^!!?YJ!???~!7??PY!JY5.
  .^!!7PG?Y577YJ!!Y5YY?: 
    :^!77!7J7!777J?J?^   
      .:^7J7?!7!!~:.     
  */

  
  
  followers.forEach((follower, index) => {
    let delay = index * 200; // increase delay for each image
    setTimeout(() => {
      follower.style.left = x + "px";
      follower.style.top = y + "px";
    }, delay);
  });
});

/* 
                                                 ...:~!~^:.       
                                              ..^^^^~^:^!77!^^.    
                                             .::::::^???GBG?^^!PY:  
                                             ^!::::::^7Y5J?!^^^7PG^ 
                                            .:77!!J7^!!!^^^^~~!~7GP.
                                           ::^755GP~:~?Y!:::~~7~~YG?
                                           .:~~?JY~^!!^!Y?^^7?^:^J#7
                                            .:^~~^^~!:::^~^JJ7!^!YP.
                                           .~^!!?YJ!???~!7??PY!JY5.
                                             .^!!7PG?Y577YJ!!Y5YY?: 
                                              :^!77!7J7!777J?J?^   
                                                .:^7J7?!7!!~:.     

*/

