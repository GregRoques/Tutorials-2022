const loginAsNacheauxBtn = document.getElementById("login-nacheaux");
const loginAsCallieBtn = document.getElementById("login-callie");
const loginAsMidnightBtn = document.getElementById("login-midnight");
const adminBtn = document.getElementById("admin");
const deleteBtn = document.getElementById("delete");
const responsesDiv = document.getElementById("responses");

let csrfToken;

loginAsNacheauxBtn.addEventListener("click", () => {
  login("Lil' Nacheaux");
});

loginAsCallieBtn.addEventListener("click", () => {
  login("Callie");
});

loginAsMidnightBtn.addEventListener("click", () => {
  login("Midnight");
});

adminBtn.addEventListener("click", () => {
  fetch("http://localhost:3000/adminData", {
    credentials: "include", // makes sure cookies are passed w/ request
  })
    .then((res) => {
      res.text();
    })
    .then((data) => (responsesDiv.textContent = data));
});

deleteBtn.addEventListener("click", () => {
  fetch("http://localhost:3000/delete-user", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ csrfToken }),
  })
    .then((res) => {
      res.text();
    })
    .then((data) => (responsesDiv.textContent = data));
});

function login(username) {
  fetch("http://localhost:3000/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username }),
  })
    .then((res) => res.json())
    .then((data) => {
      csrfToken = data.csrfToken;
      responsesDiv.textContent = data.message;
    });
}
