const body = document.querySelector('body')
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

// Click Hamburger to Show Nav Buttons
open.addEventListener('click', () => {
  body.style.overflowY = 'hidden'
  container.classList.add('show-nav')
})

// Close Menu
close.addEventListener('click', () => {
  body.style.overflowY = 'visible'
  container.classList.remove('show-nav')
})
