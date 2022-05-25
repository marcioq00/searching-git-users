const btn = document.querySelector("button");
let githubURL = 'https://github.com/';
let twitterURL = 'https://twitter.com/';


const regExpForInput = new RegExp(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i);

let checkInput = () => {
    let userLogin = document.querySelector('#userLogin').value;
    console.log(typeof(userLogin));
  
        if(regExpForInput.test(userLogin) == true){
            console.log("Correct username");
        } else {
            console.log("Bad characters or the input value is empty");
        }  

};

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
        `;
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
        `<div class="socialDevBoxParagraph">
            <img src="img/icons8-company-48.png" alt="comapny logo" class="socialDevBoxIcon">${data.company}
        </div>
        <div class="socialDevBoxParagraph2">
            <a href="${data.blog}" class="referenceSite" target="_blank">
                <img src="img/icons8-website-48.png" alt="website logo" class="socialDevBoxIcon">${data.blog}
            </a>
        </div>
        <div class="twitter">
            <a href="${twitterURL + data.twitter_username}" target="_blank" class="referenceSite">
                <img src="img/icons8-twitter-48.png" alt="twitter logo" class="socialDevBoxIcon">Twitter
            </a>
        </div>
        <div class="location">
            <img src="img/icons8-location-48.png" class="socialDevBoxIcon" alt="location logo">${data.location}
        </div>`;
        checkInput();
    });
};

btn.addEventListener("click", searchDev);
