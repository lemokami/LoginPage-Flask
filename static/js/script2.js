console.log("script2 loaded");

function emval(email) {
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return false;
  }
  return true;
}

function passval(passwd) {
  if (passwd.length < 7) return false;
  return true;
}

document.querySelector("#signup").onsubmit = signcheck;

function logcheck() {
  const email = document.querySelector(".email-box").value;

  const passwd = document.querySelector(".p-box").value;
  if (!emval(email) && !passval(passwd)) {
    document
      .querySelector(".email")
      .style.setProperty("--err-mess", "'*please enter an email to log in!'");

    document
      .querySelector(".passwd")
      .style.setProperty(
        "--err-mess2",
        "'*please enter a password of min length 7'"
      );
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
      .style.setProperty(
        "--err-mess2",
        "'*please enter a password of min length 7'"
      );
    document.querySelector(".email").style.setProperty("--err-mess", "' '");
    return false;
  } else {
    document.querySelector(".email").style.setProperty("--err-mess", "' '");
    document.querySelector(".passwd").style.setProperty("--err-mess2", "' '");
    return true;
  }
}

function signcheck() {
  const passwd = document.querySelector(".p-box").value;
  const pass2 = document.querySelector(".confirm").value;
  const pcheck = logcheck();

  if (pcheck) {
    if (!pass2 === "") {
      document
        .querySelector(".con-pass")
        .style.setProperty("--err-mess3", "' '");
      document
        .querySelector(".con-pass")
        .style.setProperty("--err-mess3", "'This should be filled'");
      return false;
    } else if (passwd !== pass2) {
      document
        .querySelector(".passwd")
        .style.setProperty("--err-mess2", "'*Not Same!'");
      document
        .querySelector(".con-pass")
        .style.setProperty("--err-mess3", "'*Not Same!'");
      return false;
    } else {
      document.querySelector(".passwd").style.setProperty("--err-mess2", "' '");
      document
        .querySelector(".con-pass")
        .style.setProperty("--err-mess3", "' '");
      return true;
    }
  } else {
    return false;
  }
}
