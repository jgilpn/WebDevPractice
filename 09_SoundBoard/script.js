const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

for (let sound of sounds) {
  const btn = document.createElement('button')
  btn.classList.add('btn')
  btn.innerText = sound

  btn.addEventListener('click', () => {
    stopSongs()
    document.getElementById(sound).play()
  })

  document.getElementById('buttons').appendChild(btn)
}

function stopSongs() {
  for (let sound of sounds) {
    const song = document.getElementById(sound)
    song.pause()
    song.currentTime = 0
  }
}
