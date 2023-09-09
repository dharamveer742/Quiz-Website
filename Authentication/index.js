let userlink = document.getElementById("userlink");
      let signoutlink = document.getElementById("signoutlink");
      //let header = document.getElementById("hh");
      var currentuser = null;

      function getUsername() {
        let keepLoggedIn = localStorage.getItem("keepLoggedIn");
        if (keepLoggedIn == "yes") {
          currentuser = JSON.parse(localStorage.getItem("user"));
        } else {
          currentuser = JSON.parse(sessionStorage.getItem("user"));
        }
      }
      function signOut() {
        sessionStorage.removeItem("user");
        localStorage.removeItem("user");
        localStorage.removeItem("keepLoggedIn");
        window.location = "index.html";
      }

      // window loads

      window.onload = function () {
        getUsername();
        if (currentuser == null) {
          userlink.innerText = "Sign up";
          userlink.href = "./Authentication/register.html";

          signoutlink.innerText = "Login";
          signoutlink.href = "./Authentication/login.html";
        } else {
          userlink.innerText = currentuser.username;
          userlink.href = "#";
          
          signoutlink.innerText = "Sign out";
          signoutlink.href = "javascript:signOut()";
        }
      };