const users = [
  {
    name: "John Doe",
    email: "johndoe2006@gmail.com",
    password: "Password1",
  },
  {
    name: "Jane Smith",
    email: "janesmith2008@gmail.com",
    password: "Password2",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  const isLoginPage = window.location.pathname.includes("login.html");

  if (isLoginPage) {
    loginForm(form);
  } else {
    registerForm(form);
  }

  function showError(inputField, message) {
    const errorMsg = document.createElement("p");
    errorMsg.className = "error-message";
    errorMsg.textContent = message;
    inputField.parentElement.appendChild(errorMsg);
    inputField.classList.add("error");
  }

  function registerForm(form) {
    const inputs = form.querySelectorAll("form > div");

    function validatePassword(password) {
      const minLength = 8;
      const hasUppercase = /[A-Z]/.test(password);
      const hasSymbol = /[^a-zA-Z0-9]/.test(password);
      return password.length >= minLength && hasUppercase && hasSymbol;
    }

    inputs.forEach((div) => {
      const inputField = div.querySelector("input");
      inputField.addEventListener("keyup", function () {
        const existingError = div.querySelector(".error");
        const errorMsg = div.querySelector(".error-message");
        if (existingError) {
          inputField.classList.remove("error");
          errorMsg.remove();
        }
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let formIsValid = true;

      inputs.forEach((div) => {
        const inputField = div.querySelector("input");
        const errorMsg = div.querySelector(".error-message");
        if (errorMsg) {
          errorMsg.remove();
        }

        inputField.classList.remove("error");

        const value = inputField.value.trim();

        if (!value) {
          formIsValid = false;
          showError(inputField, "This field can't be empty");
          return;
        }

        if (inputField.id === "email") {
          const duplicateUser = users.filter((user) => user.email === value);
          if (duplicateUser.length > 0) {
            showError(inputField, "Email already exists");
            formIsValid = false;
            return;
          }
        }

        if (inputField.id === "password") {
          if (!validatePassword(value)) {
            showError(inputField, "Invalid password");
            formIsValid = false;
            return;
          }
        }

        if (inputField.id === "retype-password") {
          const passwordValue = form.querySelector("#password").value.trim();
          if (value !== passwordValue) {
            showError(inputField, "Passwords do not match");
            formIsValid = false;
            return;
          }
        }
      });

      if (!form.querySelector("input[type=checkbox]").checked) {
        formIsValid = false;
        return;
      }

      if (formIsValid) {
        users.push({
          name: form.querySelector("#name").value.trim(),
          email: form.querySelector("#email").value.trim(),
          password: form.querySelector("#password").value.trim(),
        });
        window.location.href = "login.html";
      }
    });
  }

  function loginForm(form) {
    const inputs = form.querySelectorAll("form > div");

    inputs.forEach((div) => {
      const inputField = div.querySelector("input");
      inputField.addEventListener("keyup", function () {
        const existingError = div.querySelector(".error");
        const errorMsg = div.querySelector(".error-message");
        if (existingError) {
          inputField.classList.remove("error");
          errorMsg.remove();
        }
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let formIsValid = true;

      inputs.forEach((div) => {
        const inputField = div.querySelector("input");
        const errorMsg = div.querySelector(".error-message");
        if (errorMsg) {
          errorMsg.remove();
        }

        inputField.classList.remove("error");

        const value = inputField.value.trim();

        if (!value) {
          formIsValid = false;
          showError(inputField, "This field can't be empty");
          return;
        }
      });

      if (formIsValid) {
        const email = form.querySelector("#email").value.trim();
        const password = form.querySelector("#password").value.trim();

        const userExists = users.find(
          (user) => user.email === email && user.password === password
        );

        if (userExists) {
          const popup = document.createElement("div");
          popup.className = "popup";
          popup.innerHTML = `
            <h2>Welcome, ${userExists.name}</h2>
            <p>Email: ${userExists.email}</p>
            <p>Password: ${userExists.password}</p>
            <button class="close-popup">Close</button>
          `;
          document.body.appendChild(popup);
          const closeButton = popup.querySelector(".close-popup");
          closeButton.addEventListener("click", function () {
            popup.remove();
          });
        } else {
          alert("Invalid username or password.");
        }
      }
    });
  }
});
