// your code here

function getRepositories() {
  const username = document.getElementById('username').value;
  const uri = 'https://api.github.com' + '/users/' + name + '/repos';
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', displayRepositories);
  xhr.open('GET', uri)
  xhr.send()
}
