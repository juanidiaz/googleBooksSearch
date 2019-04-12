const db = require("../models");
var axios = require("axios");

// Defining methods for the apiController
module.exports = {
  //     findByQuery: (query) => {
  //     return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  //   },

  // findByQuery: (query) => {
  //     return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
  //         .then( (response) => {
  //             return response.data
  //         })
  //   },

  // findByQuery: (query) => {
  //     return new Promise((resolve, reject) => {
  //         axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
  //             .then((response) => {
  //                 resolve(response.data)
  //             })
  //             .catch(err => reject(err))
  //     })
  // },

  findByQuery: async (query) => {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    return response.data
  },
};