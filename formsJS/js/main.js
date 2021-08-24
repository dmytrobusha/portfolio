document.addEventListener("DOMContentLoaded", function () {
  const form1 = document.getElementById("form1");
  form1.addEventListener("submit", checkForm1);
  const form2 = document.getElementById("form2");
  form2.addEventListener("submit", checkForm2);

  username.onblur = function () {
    if (/^(admin|user|test)$/gmi.test(username.value)) {
      usernameMsg1.style.display = "block";
    }
    if (!/^(?=.{4,20}$)[a-z0-9]*([-_]*[a-z0-9]*)*$/gmi.test(username.value)) {
      usernameMsg2.style.display = "block";
    }
  };
  email.onblur = function () {
    if (!/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email.value)) {
      emailMsg.style.display = "block";
    }
  };
  password.onblur = function () {
    if (!/^\S{6,30}$/gmi.test(password.value)) {
      passwordMsg.style.display = "block";
    }
  }
  repeat.onblur = function () {
    if (password.value != repeat.value) {
      repeatMsg.style.display = "block";
    }
  }
  fullname.onblur = function () {
    if (!/^(?=.{4,20}$)[a-z]+([- ]*[a-z]*)\S$/gmi.test(fullname.value)) {
      fullnameMsg1.style.display = "block";
      fullnameMsg2.style.display = "block";
    }
  }
  date.onblur = function () {
    let dateValue = date.value;
    let dateSplit = dateValue.split("-");
    if (Number(dateSplit[0]) <= 1899) {
      dateMsg.style.display = "block";
    }
  }

  async function checkForm1(e) {
    e.preventDefault();

    if (/^(admin|user|test)$/gmi.test(username.value)) {
      alert("Username ‘admin’ or ‘user’ or ‘test’ is not allowed");
      usernameMsg1.style.display = "block";
      username.focus();
      return false;
    } else {
      usernameMsg1.style.display = "none";
    }
    if (!/^(?=.{4,20}$)[a-z0-9]*([-_]*[a-z0-9]*)*$/gmi.test(username.value)) {
      alert("Username is incorrect:\n- length from 4 to 20\n- your username can consist symbols like:  _ -");
      usernameMsg2.style.display = "block";
      username.focus();
      return false;
    } else {
      usernameMsg2.style.display = "none";
    }
    if (!/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email.value)) {
      alert("email is incorrect");
      emailMsg.style.display = "block";
      email.focus();
      return false;
    } else {
      emailMsg.style.display = "none";
    }
    if (!/^\S{6,30}$/gmi.test(password.value)) {
      alert("Password has no 6 symbols and space");
      passwordMsg.style.display = "block";
      password.focus();
      return false;
    } else {
      passwordMsg.style.display = "none";
    }
    if (password.value != repeat.value) {
      alert('The passwords must match');
      repeatMsg.style.display = "block";
      repeat.focus();
      return false;
    } else {
      repeatMsg.style.display = "none";
    }

    usernameRes.innerHTML = username.value;
    emailRes.innerHTML = email.value;
    function numStars(length) {
      let stars = "";
      for (let index = 0; index < length; index++) {
        stars += "*";
      }
      return stars;
    }
    function pasSefety(pas) {
      let res = "";
      if (/^\d+$/gmi.test(pas) || /^[A-Z]+$/gm.test(pas) || /^[a-z]+$/gm.test(pas)) {
        res = "Very easy";
      }
      if ((/\d/gm.test(pas) && /[A-Z]/gm.test(pas)) || (/\d/gm.test(pas) && /[a-z]/gm.test(pas))) {
        res = "Easy";
      }
      if (/\d/gm.test(pas) && /[A-Z]/gm.test(pas) && /[a-z]/gm.test(pas)) {
        res = "Normal";
      }
      if (/\d/gm.test(pas) && /[A-Z]/gm.test(pas) && /[a-z]/gm.test(pas) && /[\!\"\#\$\%\&\'\(\)\*\+\,\\\-\.\/\:\;\<\=\>\?\@\[\]\^\_\`\{\|\}]/gm.test(pas)) {
        res = "Hard";
      }
      if (res == "") {
        res = "false";
      }
      return res;
    }
    passwordRes.innerHTML = numStars(password.value.length) + " (" + pasSefety(password.value) + ")";
  }

  async function checkForm2(e) {
    e.preventDefault();

    if (!/^(?=.{4,20}$)[a-z]+([- ]*[a-z]*)\S$/gmi.test(fullname.value)) {
      alert("Full name may only contain letters, spaces, and dashes.\nFull name is incorrect: length from 2 to 50");
      fullnameMsg1.style.display = "block";
      fullnameMsg2.style.display = "block";
      fullname.focus();
      return false;
    } else {
      fullnameMsg1.style.display = "none";
      fullnameMsg2.style.display = "none";
    }
    if ((avatar.value == "")) {
      alert("Avatar is required");
      avatarMsg.style.display = "block";
      avatar.focus();
      return false;
    } else {
      avatarMsg.style.display = "none";
    }
    let dateValue = date.value;
    let dateSplit = dateValue.split("-");
    if (Number(dateSplit[0]) <= 1899) {
      alert("Min birthday is 01/01/1900");
      dateMsg.style.display = "block";
      date.focus();
      return false;
    } else {
      dateMsg.style.display = "none";
    }
    if (!gender1.checked && !gender2.checked) {
      alert("Gender is required");
      genderMsg.style.display = "block";
      return false;
    } else {
      genderMsg.style.display = "none";
    }

    fullnameRes.innerHTML = fullname.value;
    let avatarValue = avatar.value;
    let avatarSplit = avatarValue.split("\\");
    let avatarLastIndex = avatarSplit.length - 1;
    avatarRes.innerHTML = avatarSplit[avatarLastIndex];
    dateRes.innerHTML = date.value;
    (gender1.checked) ? genderRes.innerHTML = "Male" : genderRes.innerHTML = "Female";
    (subscribe.checked) ? subscribeRes.innerHTML = "Yes" : subscribeRes.innerHTML = "No";
  }
});