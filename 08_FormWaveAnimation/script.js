const labels = document.querySelectorAll('.form-control label')

for (let label of labels) {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (char, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${char}</span>`
    )
    .join('')
}
