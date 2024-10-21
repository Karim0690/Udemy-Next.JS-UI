const inputField = document.getElementById('grid-first-name');
const charCount = document.getElementById('charCount');
const maxChars = 60;

export default inputField.addEventListener('input', function () {
  const currentLength = this.value.length;
  const remainingChars = maxChars - currentLength;
  charCount.textContent = remainingChars;

  if (remainingChars < 0) {
    this.value = this.value.slice(0, maxChars);
  }
});