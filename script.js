function previewImage(event) {
  const img = document.getElementById("imagePreview");
  img.src = URL.createObjectURL(event.target.files[0]);
  img.style.display = "block";
}

function previewAudio(event) {
  const audio = document.getElementById("audioPreview");
  audio.src = URL.createObjectURL(event.target.files[0]);
  audio.style.display = "block";
}

function previewVideo(event) {
  const video = document.getElementById("videoPreview");
  video.src = URL.createObjectURL(event.target.files[0]);
  video.style.display = "block";
}
