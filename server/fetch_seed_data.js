const fs = require('fs')
const axios = require('axios');




axios.get('https://randomuser.me/api/?results=5000')
  .then(function (response) {
    // handle success
    const content = JSON.stringify(response.data)
    fs.writeFile('./users.json', content, 'utf8', (err) => {
  if (err) {
    return console.log(err)
  }
  console.log('file saved')
})
    console.log(response.data["picture"]);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
  });


  axios.get('https://randomuser.me/api/?results=5000')
  .then(function (response) {
    // handle success
    const content = JSON.stringify(response.data)
    fs.writeFile('./users2.json', content, 'utf8', (err) => {
  if (err) {
    return console.log(err)
  }
  console.log('file saved')
})
    console.log(response.data["picture"]);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
  });