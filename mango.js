// On file input change 
const input = document.getElementById("imageInput");
input.addEventListener("change", previewFile);

function previewFile() {

  // Display image  
  const img = document.getElementById("previewImage");
  // ...existing img preview code

  // Display text
  const text = document.getElementById("imageText");
  text.innerText = "Preview Text";
  
  // Show preview container
  const preview = document.getElementById("preview");
  preview.style.display = "block";

}