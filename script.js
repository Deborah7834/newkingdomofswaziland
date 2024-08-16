var array;

// Describe this function...
function display() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_img1 = document.getElementById('img1');
  element_img1.setAttribute("src", array[0]);
}

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}


array = ['https://forestersarms.co.za/img/swaziland/6.jpg', 'https://forestersarms.co.za/img/activities/1.jpg', 'https://forestersarms.co.za/img/hotel-ac/4.jpg', 'https://forestersarms.co.za/img/gal-2.jpg', 'https://forestersarms.co.za/img/gallery-banner-1.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU5svPND81MaXR5QypYWb1xBWo6LpQrMl2-w&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKNt756kj_QokT-pCl189cxI4-6kBfbnNpIw&s', 'https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/102DA/production/_100966266_gettyimages-119267435dikingswives.jpg.webp'];
display();


document.getElementById('next').addEventListener('click', (event) => {
  array.push(array.shift());
  display();

});

document.getElementById('previous').addEventListener('click', (event) => {
  array.unshift(array.pop());
  display();

});

document.getElementById('send_button').addEventListener('click', (event) => {
  let element_display_comment = document.getElementById('display_comment');
  element_display_comment.innerText = document.getElementById('comment').value;
  let element_display_name = document.getElementById('display_name');
  element_display_name.innerText = document.getElementById('name_comment').value;
  let element_comment_from = document.getElementById('comment_from');
  element_comment_from.innerText = 'Comment From ';

});
