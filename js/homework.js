function loadComments() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((data) => displayComments(data));
}
// loadComments();
function displayComments(comments) {
  console.log(comments);
  const commentContainer = document.getElementById("comments");
  for (const comment of comments) {
    const div = document.createElement("div");
    div.classList.add("comment");
    div.innerHTML = `
      <h3><strong>Name is:</strong> ${comment.name}</h3>
      <p><strong>Email is:</strong> ${comment.email}</p>
      <p><strong>Description:</strong> ${comment.body}</p>
      `;
    commentContainer.appendChild(div);
  }
}

function loadPhotos() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((data) => displayPhotos(data));
}

loadPhotos();
function displayPhotos(photos) {
  const photoContainer = document.getElementById("photos");
  for (const photo of photos) {
    const photoBox = document.createElement("div");
    photoBox.classList.add("photo");
    photoBox.innerHTML = `
    <h3>${photo.title}</h3>    
    <a href="${photo.url}"><img src="${photo.thumbnailUrl}"/></a>
        `;
    photoContainer.appendChild(photoBox);
  }
}
