function formValid(){

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email == "" || password == "") {
      alert("Both fields are required.");
      return false;
    } 
    else {
       true;
    }
  };
formValid();