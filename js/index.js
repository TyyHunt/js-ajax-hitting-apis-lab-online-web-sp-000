// your code here

function getRepositories() {
  const username = document.getElementById('username').value;
  const uri = 'https://api.github.com' + '/users/' + name + '/repos';
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', displayRepositories);
  xhr.open('GET', uri)
  xhr.send()
}

 function displayRepositories() {
   const repos = JSON.parse(this.responseText);
 	const repoList = `<ul>${repos
 		.map(r => {
 			const dataUsername = 'data-username="' + r.owner.login + '"';
 	        const dataRepoName = 'data-repo="' + r.username + '"';
 	        return `
 	        	<li>${r.name}
 	        	<a href="${r.html_url}">${r.html_url}</a><br>
 	        	<a href="#" ${dataRepoName} ${dataUsername} onclick="getCommits(this)">Get Commits</a><br>
 	        	<a href="#" ${dataRepoName} ${dataUsername} onclick="getBranches(this)">Get Branches</a><br>
 	        	</li>`}
 			).join('')}</ul>`;
 		document.getElementById('repositories').innerHTML = repoList;
 }
