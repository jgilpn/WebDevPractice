const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

for (let sound of sounds) {
  const btn = document.createElement('button')
  btn.classList.add('btn')

  btn.innerText = sound

  document.getElementById('buttons').appendChild(btn)
}
