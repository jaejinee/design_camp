document.addEventListener("DOMContentLoaded", () => {
  const copyButton = document.getElementById("copyButton");
  const copyContent = document.querySelector(".text");

  function copyDisplayedText() {
    const displayedText = Array.from(shufflingTexts).find(
      (text) => text.style.opacity === "1"
    );
    if (displayedText) {
      copyTextToClipboard(displayedText.textContent);
    }
  }

  function copyTextToClipboard(text) {
    const tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = text;
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
});
