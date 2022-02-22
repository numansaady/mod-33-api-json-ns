// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

function loadData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => console.log(data));
}
// Fetch data from server using function
function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUsers(data));
}

// After fetching data display it on UI
function displayUsers(data) {
  const ul = document.getElementById("users");
  for (const user of data) {
    const li = document.createElement("li");
    li.innerText = `User Name is: ${user.name} and his email is:  ${user.email}`;
    ul.appendChild(li);
  }
}

// Quiz Module 33
{
  const stuInfo = JSON.stringify({ name: "James", roll: 3 });
  console.log(stuInfo.name);

  const premikas = { name: "keka ferdousi", cars: { brand: "toyota" } };
  const { brand } = premikas.cars;
  console.log(brand);

  const info = { data: [{ language: "Javascript", library: "React" }] };
  console.log(info.data[0].library);
}
