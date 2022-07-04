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

let checkNull = (twitter) => {};

let searchDev = () => {
  let userLogin = document.querySelector("#user-login").value;
  const url = `https://api.github.com/users/${userLogin}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      document.querySelector(
        ".image-box"
      ).innerHTML = `<img src="${data.avatar_url}" alt="Avatar ${data.name}">`;

      document.querySelector(".user-name").innerHTML = `${data.name}`;
      document.querySelector(".user-login").innerHTML = `${data.login}`;
      document.querySelector(".bio-information").innerHTML = `${data.bio}`;
      let linkToGithub = githubURL + `${data.login}`;
      let twiterName = `${data.twitter_username}`;

      const tab = data;
      document
        .querySelector("#github-profile")
        .setAttribute("href", linkToGithub);
      document.querySelector(".company").innerHTML = `${data.company}`;
      document.querySelector(".location").innerHTML = `${data.location}`;
      const schowek = [];

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
      document.querySelector(".twitter_username").innerHTML = "Twitter";

      for (const [test, capital] of Object.entries(tab)) {
        let saveName = test;

        if (capital == null) {
          //schowek.push(test);
          console.log(`#${CSS.escape(saveName)}`);
          document.querySelector(`.${CSS.escape(saveName)}`).innerHTML =
            "Not available";
        }
        if (test == "blog" && capital == "") {
          document.querySelector(".blog").innerHTML = "Not available";
        }
        if (test == "bio" && capital == null) {
          document.querySelector(".bio-information").innerHTML =
            "This profile has no bio";
        }
      }
    });
};

btn.addEventListener("click", searchDev);
