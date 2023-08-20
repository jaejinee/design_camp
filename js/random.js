function getRandomUniqueIndex(length, usedIndexes) {
  const availableIndexes = Array.from({ length }, (_, i) => i).filter(
    (index) => !usedIndexes.includes(index)
  );

  if (availableIndexes.length === 0) {
    // All indexes have been used, reset usedIndexes and start over
    usedIndexes.length = 0;
    return getRandomUniqueIndex(length, usedIndexes);
  }

  const randomIndex = Math.floor(Math.random() * availableIndexes.length);
  const uniqueIndex = availableIndexes[randomIndex];
  usedIndexes.push(uniqueIndex);

  return uniqueIndex;
}

function setupShuffle(texts) {
  const shuffledTexts = Array.from(document.querySelectorAll(texts));
  let shuffleInterval;
  let isShuffling = true;
  let usedIndexes = [];

  function shuffleTexts() {
    shuffledTexts.forEach((text) => {
      text.style.opacity = 0;
    });

    const randomIndex = getRandomUniqueIndex(shuffledTexts.length, usedIndexes);
    shuffledTexts[randomIndex].style.opacity = 1;
  }

  shuffleInterval = setInterval(shuffleTexts, 100);

  shuffledTexts.forEach((text) => {
    const eventName = isMobileDevice() ? "touchstart" : "click";

    text.addEventListener(eventName, () => {
      if (isShuffling) {
        clearInterval(shuffleInterval);
        isShuffling = false;
      } else {
        shuffleInterval = setInterval(shuffleTexts, 100);
        isShuffling = true;
      }
    });
  });

  function isMobileDevice() {
    return (
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1
    );
  }
}
//
const copyButton = document.getElementById("copyButton");
copyButton.addEventListener("click", () => {
  const visibleTexts = document.querySelectorAll(".text[style='opacity: 1;']");
  const combinedText = Array.from(visibleTexts)
    .map((t) => t.textContent)
    .join("\n");
  copyTextToClipboard(combinedText);
});
document.body.appendChild(copyButton);

// Function to copy text content to clipboard
function copyTextToClipboard(text) {
  const tempInput = document.createElement("textarea");
  document.body.appendChild(tempInput);
  tempInput.value = text;
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
}

//
const currentPage = window.location.pathname.split("/").pop(); // Get the current page filename
if (currentPage === "p1-b.html") {
  setupShuffle(".text1");
  setupShuffle(".text2");
  setupShuffle(".text3");
  setupShuffle(".text4");
} else if (currentPage === "p1-c.html") {
  setupShuffle(".text1");
  setupShuffle(".text2");
  setupShuffle(".text3");
} else if (currentPage === "p2-b.html") {
  setupShuffle(".text1");
  setupShuffle(".text2");
}
