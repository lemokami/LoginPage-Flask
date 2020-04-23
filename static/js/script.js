console.log("loaded");

function emval(email) {
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return false;
  }
  return true;
}

function passval(passwd) {
  if (passwd === "") return false;
  return true;
}

document.querySelector("#login").onsubmit = logcheck;

function logcheck() {
  console.log("phase2");

  const email = document.querySelector(".email-box").value;

  const passwd = document.querySelector(".p-box").value;
  if (!emval(email) && !passval(passwd)) {
    document
      .querySelector(".email")
      .style.setProperty("--err-mess", "'*please enter an email to log in!'");

    document
      .querySelector(".passwd")
      .style.setProperty("--err-mess2", "'*please enter a password'");
    return false;
  } else if (!emval(email)) {
    document
      .querySelector(".email")
      .style.setProperty("--err-mess", "'*please enter an email to log in!'");
    document.querySelector(".passwd").style.setProperty("--err-mess2", "' '");
    return false;
  } else if (!passval(passwd)) {
    document
      .querySelector(".passwd")
      .style.setProperty("--err-mess2", "'*please enter a password'");
    document.querySelector(".email").style.setProperty("--err-mess", "' '");
    return false;
  } else {
    document.querySelector(".email").style.setProperty("--err-mess", "' '");
    document.querySelector(".passwd").style.setProperty("--err-mess2", "' '");
    return true;
  }
}
