'use strict';

// const { DataTypes } = require('sequelize/types');
const {User} = require ('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    //  * Add seed commands here.
    //  *
    //  * Example:
    //  await queryInterface.bulkInsert('Users', [{
    //   first_name: 'Johny Doe',
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    //   }], {});
    
//    let title = "mr";
//    let first_name = "firstName";
//    let last_name = "lastName";
//    let street = "street";
//    let city = "city";
//    let state = "state";
//    let postcode = "post_code";
//    let email = "email";
//    let phone = "phone"
//    let dob = Date.now();
//    User.create({
//     title: title,
//     first_name: first_name,
//     last_name: last_name,
//     street: street,
//     city: city,
//     state: state,
//     postcode: postcode,
//     email: email,
//     phone: phone,
//     dob: dob,
//     created_at: Date.now(),
//     updated_at: Date.now(),
// })

let joinArray = []
const users = require('../users.json').results
const usersTwo = require('../users2.json').results
users.forEach((user) => {
  joinArray.push({
    first_name: user['name']['first'],
    last_name: user['name']['last'],
    street: `${user['location']['street']['number']} ${user['location']['street']['name']}`,
    city: user['location']['city'],
    state: user['location']['state'],
    country: user['location']['country'],
    postcode: user['location']['postcode'],
    email: user['email'],
    phone: user['phone'],
    dob: user['dob']['date'],
    sex: user['gender'],
    image_url: user['picture']['large'],
    createdAt: new Date(),
    updatedAt: new Date(),
  })
});

usersTwo.forEach((user) => {
  joinArray.push({
    first_name: user['name']['first'],
    last_name: user['name']['last'],
    street: `${user['location']['street']['number']} ${user['location']['street']['name']}`,
    city: user['location']['city'],
    state: user['location']['state'],
    country: user['location']['country'],
    postcode: user['location']['postcode'],
    email: user['email'],
    phone: user['phone'],
    dob: user['dob']['date'],
    sex: user['gender'],
    image_url: user['picture']['large'],
    createdAt: new Date(),
    updatedAt: new Date(),
  })
})



return queryInterface.bulkInsert('Users', joinArray)


  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
