const App = (function () {
  const State = {
    screenName: "",
    password: "",
  };

  this.reset = () => {
    this.render();
    this.setEvents();
  };

  this.setState = (name, value) => {
    State[name] =
      name === "screenName" ? value.toUpperCase().replaceAll(" ", "_") : value;
    this.reset();
  };

  this.render = () => {
    const app = document.getElementById("app");
    app.innerHTML = view();
    return App;
  };

  this.view = () => {
    return `
    <form id="form"">
        <div>
            <label>Enter Screen Name:</label>
            <input type="text" maxlength="16" name="screenName" value="${State.screenName}">
        </div>
        <div>
            <label>Enter Password:</label>
            <input type="password" maxlength="8" placeholder="1 cap, 1 lower, 1 #, 1 char" name="password" value="${State.password}">
        </div>
        <button id="submit_button" type="submit">Submit</button>
    </form>

    `;
  };

  this.setEvents = () => {
    document
      .getElementById("form")
      .addEventListener("change", (e) =>
        setState(e.target.name, e.target.value)
      );

    document.getElementById("form").addEventListener("submit", (e) => {
      e.preventDefault();
      logSubmit();
    });
  };

  this.logSubmit = () => {
    if (State.screenName === "") {
      return alert("Must Enter a Screen Name");
    }
    const pwRegEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!pwRegEx.test(State.password)) {
      this.setState("password", "");
      return alert(
        "Password must be 8 characters long and contain:\n1) 1 uppercase letter\n2) 1 lowercase letter\n3) 1 number\n4) 1 special character"
      );
    }
    this.reset();
    const returnMsg = `Screen Name: ${State.screenName}\n\nPassword: ${State.password}\n\nWrite down this information and keep it in a safe spot.`;
    alert(returnMsg);
  };
  return { render, setEvents, logSubmit };
})();
App.render().setEvents();
