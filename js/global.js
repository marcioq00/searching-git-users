const avatar = document.getElementById("avatar_url");
const login = document.getElementById("login");
const name1 = document.getElementById("name");
const repos = document.getElementById("repos");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
// const created = document.getElementById('created');
const location1 = document.getElementById("lokation");
const bio = document.getElementById("bio");
const twitter_username = document.getElementById("twitter_username");
const company = document.getElementById("company");
const blog = document.getElementById("blog");



let getRandomCat = () => {
  const a = document.getElementById("user_name1").value;
  const url = `https://api.github.com/users/${a}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.avatar_url != null) {
        avatar.innerHTML = `<img src="${data.avatar_url}">`;
      } else {
        avatar.innerHTML = "Nie ma";
      }
      avatar.innerHTML = `<img src="${data.avatar_url}">`;
      login.innerHTML = `<div class="login">${data.login}</div>`;
      name1.innerHTML = `<div class="name">${data.name}</div>`;
      repos.innerHTML = `<div$ class="repos">Repozytorium: ${data.public_repos}</div>`;
      followers.innerHTML = `<div$ class="repos">Followers: ${data.followers}</div>`;
      following.innerHTML = `<div$ class="repos">Following: ${data.following}</div>`;
      // created.innerHTML = `<div$ class="repos">Stworzony: ${data.created_at}</div>`
      location1.innerHTML = `<div$ class="lokation">Lokacja: ${data.location}</div>`;
      bio.innerHTML = `<div$ class="bio">Bio: ${data.bio}</div>`;
      if (data.twitter_username != null) {
        twitter_username.innerHTML = `<div$ class="twitter_username">twitter_username: ${data.twitter_username}</div>`;
      } else {
        twitter_username.innerHTML = `<div$ class="twitter_username">Twitter: Nie ma</div>`;
      }
      company.innerHTML = `<div$ class="company">company: ${data.company}</div>`;
      blog.innerHTML = `<div$ class="blog">blog: ${data.blog}</div>`;
    });
};
search_btn.addEventListener("click", getRandomCat);
/*

    const map = new Map();
            map.set(login, data.login);
            map.set(name1, data.name);
            map.set(company, data.company);
            map.set(repos, data.public_repos);
            map.set(company, data.followers);
            map.set(company, data.company);
            map.set(company, data.company);
            map.set(company, data.company);
            for(const key of map.values()) {
                console.log(key);
                if(key != null){
                   console.log(key);
                  document.querySelector(".login1").innerHTML= `<div class="login">${key}</div>`;
                var div = document.createElement('div');
                div.innerHTML = `<div class="login1">${key}</div>`
                document.body.appendChild(div);
                   document.getElementById('login').textContent = key;
                    continue;
                } else {
                    var div = document.createElement('div');
                div.innerHTML = `<div class="login1">Not available</div>`
                document.body.appendChild(div);
                    console.log("nie");
                    continue;
                }
            }

    */

/*const map = new Map();
    map.set(login, data.login);
    for(const key of map.values()) {
        if(key != null){
            console.log("działa");
        } else {
            console.log("nie");
        }
    }*/

/*
    async function loadIntoTable(url, table) {
    const tableHead = table.querySelector("thead");
    const tableBody = table.querySelector("tbody");
    const response = await fetch(url);
    const { login, name, public_repos, followers, following, created_at, location, bio, twitter_username, company, blog,  avatar_url } = await response.json();
    const locationText = "Not Available";
    

    document.getElementById('login').innerHTML = "Login: " + login;
    document.getElementById('name').innerHTML = "Imię: " + name;
    document.getElementById('repos').innerHTML = "Repos: " + public_repos;
    document.getElementById('followers').innerHTML = "Followers: " + followers;
    document.getElementById('following').innerHTML = "Following: " + following;
    document.getElementById('created').innerHTML = "Stworzony: " + created_at;
    if(!(location == null)) {
        document.getElementById('lokation').innerHTML = "Lokacja: " + location;
    } else { 
        document.getElementById('lokation').innerHTML = "Lokacja: " + locationText;
    }
    document.getElementById('bio').innerHTML = "Bio: " + bio;
    document.getElementById('twitter_username').innerHTML = "twitter_username: " + twitter_username;
    document.getElementById('company').innerHTML = "company: " + company;
    document.getElementById('blog').innerHTML = "blog: " + blog;
    document.getElementById('avatar_url').innerHTML = "avatar_url: " + `img src="${avatar_url}">`;
    `<img src="${data.avatar_url}">`
    document.write("Imię: " + name+ " ");
    document.write("Repos: " + public_repos+ " ");
    document.write("Followers: " + followers+ " ");
    document.write("Following: " + following+ " ");
    document.write("Stworzony: " + created_at+ " ");
    document.write("Stworzony: " + location + " ");
    document.write("Avatar: " + avatar_url);
    console.log(data);

    
    tableHead.innerHTML = "<tr></tr>";
    tableBody.innerHTML = "";

    for(const headerText of login) {
        const headerElement = document.createElement("th");

        headerElement.textContent = headerText;
        tableHead.querySelector("tr").appendChild(headerElement);
    }
    for(const headerText of name) {
        const headerElement = document.createElement("th");

        headerElement.textContent = headerText;
        tableHead.querySelector("tr").appendChild(headerElement);
    }
    for(const headerText of created_at) {
        const headerElement = document.createElement("th");

        headerElement.textContent = headerText;
        tableHead.querySelector("tr").appendChild(headerElement);
    }
    
    for(const headerText of created_at) {
        const rowElement = document.createElement("tr");

    for(const cellText of created_at) {
        const cellElement = document.createElement("td");

        cellElement.textContent = cellText;
        rowElement.appendChild(cellElement);
    }
  }




}
function test() {
const searchBar = document.getElementById("user_name").value;
console.log(searchBar);
loadIntoTable(`https://api.github.com/users/${searchBar}`, document.querySelector("table"));
}

    
    
    */
