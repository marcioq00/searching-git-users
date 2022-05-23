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
        </p>
        <img src="img/icons8-location-48.png" class="githubAccount" alt="location logo">${data.location}`;

        document.querySelector('.repoInformation').innerHTML = 
        `
        <div class="repos">
            <p>
                <span class="informationCount">Repository</span> <br>
                <span class="repositoryCount">${data.public_repos}</span>
            </p>
        </div>
        <div class="repos">
            <p>
                <span class="informationCount">Followers</span> <br>
                <span class="repositoryCount">${data.followers}</span>
            </p>
        </div>
        <div class="repos">
            <p>
                <span class="informationCount">Following </span> <br>
                <span class="repositoryCount">${data.following}</span>
            </p>
        `;
        document.querySelector('.socialDevBox').innerHTML = 
        `<img src="img/icons8-twitter-48.png" alt="twitter logo">${data.twitter_username}
        <img src="img/icons8-company-48.png" alt="comapny logo">${data.company}
        <img src="img/icons8-website-48.png" alt="website logo">${data.blog}`;
    });
};
btn.addEventListener("click", searchDev);


/* <a target="_blank" href="https://icons8.com/icon/1349/website">Website</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */