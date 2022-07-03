const btn = document.querySelector("button");
let githubURL = "https://github.com/";
let twitterURL = "https://twitter.com/";

let createPopupError = () => {
  const popup = document.getElementById("myPopup");
  popup.classList.remove("hidden");
  popup.classList.toggle("show");
};

let checkInput = (field) => {
  const reg = new RegExp(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i);
  return reg.test(field.value);
};

let markFieldAsError = (field, show) => {
  if (show) {
    field.classList.add("field-error");
    const submit = document.querySelector("button");
    createPopupError();
    document.querySelector("button").classList.remove("btn-active");
    submit.disabled = true;
  } else {
    const popup = document.getElementById("myPopup");
    popup.classList.add("hidden");
    document.querySelector("button").classList.add("btn-active");
    const submit = document.querySelector("button");
    field.classList.remove("field-error");
    submit.disabled = false;
  }
};
const inputs = document.querySelectorAll("[required]");

for (const el of inputs) {
  el.addEventListener("input", (e) =>
    markFieldAsError(e.target, !checkInput(e.target))
  );
}

let checkNull = (twitter) => {
  if (twitter == "null") {
    // document.querySelector("#twitts").innerHTML =
    //   "This profile has no twitter account";
  } else {
    //console.log("masz twitera");
  }
};
// company blog location email hireable bio twitter_username
// blog jest ""
let searchDev = () => {
  let userLogin = document.querySelector("#user-login").value;
  const url = `https://api.github.com/users/${userLogin}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      document.querySelector(
        ".image-box"
      ).innerHTML = `<img src="${data.avatar_url}" alt="Avatar ${data.name}">`;
      //console.table(data);
      document.querySelector(".user-name").innerHTML = `${data.name}`;
      document.querySelector(".user-login").innerHTML = `${data.login}`;
      document.querySelector(".bio-information").innerHTML = `${data.bio}`;
      let linkToGithub = githubURL + `${data.login}`;
      let twiterName = `${data.twitter_username}`;
      checkNull(twiterName);
      const tab = data;
      document
        .querySelector("#github-profile")
        .setAttribute("href", linkToGithub);
      console.log(typeof data);
      // for (let test of Object.keys(tab)) {
      //   let capital = tab[test];
      //   console.log(test, capital);
      // }
      document.querySelector(".company").innerHTML = `${data.company}`;
      document.querySelector(".location").innerHTML = `${data.location}`;
      const schowek = [];

      // console.log(schowek);

      document.querySelector("#repos").innerHTML = `${data.public_repos}`;
      document.querySelector("#followers").innerHTML = ` ${data.followers}`;
      document.querySelector("#following").innerHTML = `${data.following}`;

      let websiteURL = `${data.blog}`;

      function changeHref() {
        document.getElementById("strona").setAttribute("href", websiteURL);
        document.querySelector(".blog").innerHTML = websiteURL;
      }
      changeHref();
      let twitts = `${data.twitter_username}`;
      document
        .getElementById("twitts")
        .setAttribute("href", twitterURL + twitts);
      for (const [test, capital] of Object.entries(tab)) {
        if (capital == null) {
          schowek.push(test);
          let saveName = test;
          console.log(`#${CSS.escape(saveName)}`);

          document.querySelector(`.${CSS.escape(saveName)}`).innerHTML =
            "Not available";
        }
      }
      if (data.blog == "") {
        console.log("nie posiada");
        document.querySelector(".blog").innerHTML = "Not available";
        console.log(typeof data.blog);
      } else {
        console.log("Posiada strone");
      }
    });
};

btn.addEventListener("click", searchDev);
