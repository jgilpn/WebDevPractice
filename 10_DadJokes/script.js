const URL = 'https://icanhazdadjoke.com'
const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

async function generateJoke() {
  const config = {
    headers: { Accept: 'application/json' },
  }

  // USING .THEN
  //   fetch(URL, config)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       jokeEl.innerHTML = data.joke
  //     })

  // USING ASYNC/AWAIT
  const res = await fetch(URL, config)
  const data = await res.json()

  jokeEl.innerHTML = data.joke
}

// Generate Joke on load
generateJoke()

// Add Click Event to Btn
jokeBtn.addEventListener('click', generateJoke)
