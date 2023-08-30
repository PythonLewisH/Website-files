// const testimonials = document.querySelectorAll(".testimonial");
// const arrows = document.querySelectorAll(".arrow");
// let current = 0;

// function reset() {
//   for (let i = 0; i < testimonials.length; i++) {
//     testimonials[i].classList.remove("active");
//   }
// }

// function startSlide() {
//   reset();
//   testimonials[0].classList.add("active");
// }

// function slideLeft() {
//     reset();
//     current--;
//     if (current < 0) {
//       current = testimonials.length - 1;
//     }
//     testimonials[current].classList.add("active");
//   }

// function slideRight() {
//     reset();
//     current++;
//     if (current === testimonials.length) {
//       current = 0;
//     }
//     testimonials[current].classList.add("active");
//   }

// let slideInterval = setInterval(slideRight, 5000);


// // Left arrow click
// arrows[0].addEventListener("click", function() {
//     clearInterval(slideInterval);
//     if (current === 0) {
//       current = testimonials.length;
//     }
//     slideLeft();
//   });

// // Right arrow click
// arrows[1].addEventListener("click", function() {
//     clearInterval(slideInterval);
//     if (current === testimonials.length - 1) {
//       current = -1;
//     }
//     slideRight();
//   });
  
// startSlide();

document.cookie = "cookie_name=cookie_value;path=/;SameSite=None;expires=Tue, 01 Jan 2030 00:00:00 UTC;";


// // Creates a new div called lightbox with an id of lightbox and appends it to the body of the doc
// const lightbox = document.createElement('div')
// lightbox.id = 'lightbox'
// document.body.appendChild(lightbox)

// // finds all the .gallery-img elements and adds a click listener, if element is clicked the .active class is added to the lightbox. It also then adds the image and close button to the lightbox
// const close = document.querySelector('.close')
// const images = document.querySelectorAll('.gallery-img')
// images.forEach(image => {
//   image.addEventListener('click', e => {
//     lightbox.classList.add('active')
//     const img = document.createElement('img')
//     img.src = image.src
//     img.classList.add("main-image")
//     const btn = document.createElement('img')
//     btn.src = close.src
//     btn.classList.add("close-image")
//     while (lightbox.firstChild) {
//       lightbox.removeChild(lightbox.firstChild)
//     }
//     lightbox.appendChild(img)
//     lightbox.appendChild(btn)

//     btn.addEventListener('click', e => {
//       lightbox.classList.remove('active')
//     })
//   })
// })

// // if somewhere outside the image is clicked, the actice class is removed.
// close.addEventListener('click', e => {
//   if (e.target !== e.currentTarget) return
//   lightbox.classList.remove('active')

// })


