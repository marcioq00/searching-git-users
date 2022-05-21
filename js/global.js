const repos = document.getElementById("repos");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
// const created = document.getElementById('created');
const location1 = document.getElementById("lokation");
const bio = document.getElementById("bio");
const twitter_username = document.getElementById("twitter_username");
const company = document.getElementById("company");
const blog = document.getElementById("blog");

let btn = document.querySelector("button");

let getRandomCat = () => {
  const loginName = document.getElementById("userLogin").value;
  const url = `https://api.github.com/users/${loginName}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {

        document.querySelector('.imageBox').innerHTML = `<img src="${data.avatar_url}">`;
        document.querySelector('#userName').innerHTML = `${data.name} <br> ${data.login} <br> <br> ${data.bio}`;
        document.querySelector('.repoInformation').innerHTML = `${data.public_repos}&nbsp;${data.followers}&nbsp;${data.following}`;
        document.querySelector('.aboutDevBox').innerHTML = `${data.email}&nbsp;${data.location}`;
        document.querySelector('.socialDevBox').innerHTML = `${data.twitter_username}&nbsp;${data.company}&nbsp;${data.blog}`;
     
    // created.innerHTML = `<div$ class="repos">Stworzony: ${data.created_at}</div>`
    });
};
btn.addEventListener("click", getRandomCat);



/*
    async function loadIntoTable(url, table) {
    const tableHead = table.querySelector("thead");
    const tableBody = table.querySelector("tbody");
    const response = await fetch(url);
    const { login, name, public_repos, followers, following, created_at, location, bio, twitter_username, company, blog,  avatar_url } = await response.json();
    const locationText = "Not Available";
    

  
    
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


}*/
