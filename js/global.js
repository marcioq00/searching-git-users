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
    var popup = document.getElementById("myPopup");
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
//test
let searchDev = () => {
  let userLogin = document.querySelector("#user_login").value;
  const url = `https://api.github.com/users/${userLogin}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      document.querySelector(
        ".imageBox"
      ).innerHTML = `<img src="${data.avatar_url}" alt="Avatar ${data.name}">`;

      document.querySelector(".userName").innerHTML = `${data.name}`;
      document.querySelector(".userLogin").innerHTML = `${data.login}`;
      document.querySelector(".bioInformation").innerHTML = `${data.bio}`;
      let linkToGithub = githubURL + `${data.login}`;

      document
        .querySelector("#githubProfile")
        .setAttribute("href", linkToGithub);

      document.querySelector("#repos").innerHTML = `${data.public_repos}`;
      document.querySelector("#followers").innerHTML = ` ${data.followers}`;
      document.querySelector("#following").innerHTML = `${data.following}`;

      document.querySelector(".companyName").innerHTML = `${data.company}`;
      let websiteURL = `${data.blog}`;

      function changeHref() {
        document.getElementById("strona").setAttribute("href", websiteURL);
        document.querySelector(".web").innerHTML = websiteURL;
      }
      changeHref();
      let twitts = `${data.twitter_username}`;
      document
        .getElementById("twitts")
        .setAttribute("href", twitterURL + twitts);

      document.querySelector(".location-text").innerHTML = `${data.location}`;
    });
};

btn.addEventListener("click", searchDev);
