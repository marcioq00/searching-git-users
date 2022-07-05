const btn = document.querySelector("button");
const githubURL = "https://github.com/";
const twitterURL = "https://twitter.com/";

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

let changeHref = (websiteURL) => {
  document.getElementById("web").setAttribute("href", websiteURL);
  document.querySelector(".blog").innerHTML = websiteURL;
};

let changeTwitter = (twitts) => {
  document.getElementById("twitts").setAttribute("href", twitterURL + twitts);
  document.querySelector(".twitter_username").innerHTML = "Twitter";
};

let searchDev = () => {
  const userLogin = document.querySelector("#user-login").value;
  const url = `https://api.github.com/users/${userLogin}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const linkToGithub = githubURL + `${data.login}`;
      const websiteURL = `${data.blog}`;
      const twitts = `${data.twitter_username}`;
      const dataFromGithub = data;

      document.querySelector(
        ".image-box"
      ).innerHTML = `<img src="${data.avatar_url}" alt="Avatar ${data.name}">`;

      document.querySelector(".user-name").innerHTML = `${data.name}`;
      document.querySelector(".user-login").innerHTML = `${data.login}`;
      document.querySelector(".bio-information").innerHTML = `${data.bio}`;
      document
        .querySelector("#github-profile")
        .setAttribute("href", linkToGithub);

      document.querySelector(".company").innerHTML = `${data.company}`;
      document.querySelector(".location").innerHTML = `${data.location}`;
      document.querySelector("#repos").innerHTML = `${data.public_repos}`;
      document.querySelector("#followers").innerHTML = ` ${data.followers}`;
      document.querySelector("#following").innerHTML = `${data.following}`;

      changeHref(websiteURL);
      changeTwitter(twitts);

      for (const [index, value] of Object.entries(dataFromGithub)) {
        let saveName = index;
        if (value == null) {
          document.querySelector(`.${CSS.escape(saveName)}`).innerHTML =
            "Not available";
        }
        if (index == "blog" && value == "") {
          document.querySelector(".blog").innerHTML = "Not available";
        }
        if (index == "bio" && value == null) {
          document.querySelector(".bio-information").innerHTML =
            "This profile has no bio";
        }
      }
    });
};

btn.addEventListener("click", searchDev);
