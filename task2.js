// Form Validation
function validateForm() {
  const name = document.forms["contactForm"]["name"].value.trim();
  const email = document.forms["contactForm"]["email"].value.trim();
  const message = document.forms["contactForm"]["message"].value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return false;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email.");
    return false;
  }

  alert("Message sent successfully!");
  return true;
}

// To-Do List
function addTask() {
  const task = document.getElementById("taskInput").value.trim();
  if (task === "") {
    alert("Enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `${task} <button onclick="this.parentElement.remove()">X</button>`;
  document.getElementById("taskList").appendChild(li);
  document.getElementById("taskInput").value = "";
}

// Image Gallery
function addImage() {
  const url = document.getElementById("imgUrl").value.trim();
  if (!url.match(/\.(jpeg|jpg|gif|png)$/)) {
    alert("Enter a valid image URL (jpg, png, gif)");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `<img src="${url}" alt="User Image"> <button onclick="this.parentElement.remove()">Remove</button>`;
  document.getElementById("galleryList").appendChild(li);
  document.getElementById("imgUrl").value = "";
}
