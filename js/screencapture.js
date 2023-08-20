document.addEventListener("DOMContentLoaded", () => {
  const captureButton = document.getElementById("captureButton");
  const captureArea = document.getElementById("captureArea");

  captureButton.addEventListener("click", () => {
    html2canvas(captureArea).then((canvas) => {
      // Convert canvas data to blob
      canvas.toBlob((blob) => {
        // Create a blob URL
        const blobUrl = URL.createObjectURL(blob);

        // Create a download link
        const downloadLink = document.createElement("a");
        downloadLink.href = blobUrl;
        downloadLink.download = "screenshot.png";
        downloadLink.click();

        // Clean up the blob URL
        URL.revokeObjectURL(blobUrl);
      }, "image/png");
    });
  });
});
