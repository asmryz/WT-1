console.log(`first Function`)

fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(json => console.log(`second Function, ${json.name}`))

console.log(`third Function`)