const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", () => {
  // Очищення значення від пробілів по краях
  const trimmedValue = input.value.trim();

  // Якщо значення порожнє або містить лише пробіли, підставляємо "Anonymous"
  output.textContent = trimmedValue ? trimmedValue : "Anonymous";
});
