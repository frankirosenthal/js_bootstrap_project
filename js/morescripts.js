let photo1 = document.querySelector('#moussaka');

photo1.onmouseenter = (e) => {
  e.target.classList.remove('rotate-right');
  e.target.classList.add('rotate-left');
};
photo1.onmouseleave = (e) => {
  e.target.classList.add('rotate-right');
  e.target.classList.remove('rotate-left');
};
// code adapted and credited to https://jsfiddle.net/macloo/z6mq5x2c/

let photo2 = document.querySelector('#risotto');

photo2.onmouseenter = (e) => {
  e.target.classList.remove('rotate-left');
  e.target.classList.add('rotate-right');
};
photo2.onmouseleave = (e) => {
   e.target.classList.add('rotate-left');
   e.target.classList.remove('rotate-right');
};
// code adapted and credited to https://jsfiddle.net/macloo/z6mq5x2c/


let photo3 = document.querySelector('#breakfast');

photo3.onclick = () => {
  if(photo3.getAttribute('src') === 'images/santorinibreakfast.jpg') {
    photo3.setAttribute('src', 'images/stairs.jpg');
  } else {
    photo3.setAttribute('src', 'images/santorinibreakfast.jpg');
  }
};

let photo4 = document.querySelector('#seafood');

photo4.onclick = () => {
  if(photo4.getAttribute('src') === 'images/crablegs.jpg') {
    photo4.setAttribute('src', 'images/mykonos.jpg');
  } else {
    photo4.setAttribute('src', 'images/crablegs.jpg');
  }
};
