import RAF from 'raf'

export default {
  makePath,
  throttle
}

function makePath (text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')          // Replace spaces with -
    .replace(/[^\w-]+/g, '')       // Remove all non-word chars
    .replace(/--+/g, '-')          // Replace multiple - with single -
    .replace(/^-+/, '')            // Trim - from start of text
    .replace(/-+$/, '')            // Trim - from end of text
}

function throttle (func) {
  let running
  return (...args) => {
    if (running) return
    running = RAF(() => {
      func(...args)
      running = false
    })
  }
}
