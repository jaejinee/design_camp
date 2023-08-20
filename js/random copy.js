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

  shuffleInterval = setInterval(shuffleTexts, 60);

  shuffledTexts.forEach((text) => {
    text.addEventListener("click", () => {
      if (isShuffling) {
        clearInterval(shuffleInterval);
        isShuffling = false;
      } else {
        shuffleInterval = setInterval(shuffleTexts, 60);
        isShuffling = true;
      }
    });
  });
}

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
