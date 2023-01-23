


// Creates a new div called lightbox with an id of lightbox and appends it to the body of the doc
const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

// finds all the .gallery-img elements and adds a click listener, if element is clicked the .active class is added to the lightbox. It also then adds the image and close button to the lightbox
const close = document.querySelector('.close')
const images = document.querySelectorAll('.gallery-img')
images.forEach(image => {

  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    img.classList.add("main-image")
    const btn = document.createElement('img')
    btn.src = close.src
    btn.classList.add("close-image")
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
    lightbox.appendChild(btn)

    btn.addEventListener('click', e => {
      lightbox.classList.remove('active')
    })
  })
})

// if somewhere outside the image is clicked, the actice class is removed.
close.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')

})


