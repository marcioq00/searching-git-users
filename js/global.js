let btn = document.querySelector("button");
let githubURL = 'https://github.com/';
let searchDev = () => {
  const loginName = document.getElementById("userLogin").value;
  const url = `https://api.github.com/users/${loginName}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {

        document.querySelector('.imageBox').innerHTML = `<img src="${data.avatar_url}">`;
        document.querySelector('.bioInformationBox').innerHTML = 
        `<p class="userName">${data.name}</p> 
        <span class="userLogin">${data.login}</span> 
        <p class="bioInformation"> ${data.bio}</p>
        <p>
            <a target="_blank" class="reference" href="${githubURL + data.login}"><img src="img/GitHub-Mark-32px.png" class="githubAccount">Github profile</a>
        </p>`;

        document.querySelector('.repoInformation').innerHTML = 
        `
        <div class="repos">
            <p>
                Repository <br>${data.public_repos}
            </p>
        </div>
        <div class="repos">Followers <br>${data.followers}</div>
        <div class="repos">Following <br>${data.following}</div>
        `;

        document.querySelector('.aboutDevBox').innerHTML = `${data.email}&nbsp;${data.location}`;
        document.querySelector('.socialDevBox').innerHTML = `${data.twitter_username}&nbsp;${data.company}&nbsp;${data.blog}`;
    });
};
btn.addEventListener("click", searchDev);
