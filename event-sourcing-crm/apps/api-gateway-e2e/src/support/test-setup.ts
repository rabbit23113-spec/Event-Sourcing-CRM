/* eslint-disable */
import axios from 'axios';

module.exports = async function () {
  // Configure axios for tests to use.
  const host = "localhost";
  const port = "13050";
  axios.defaults.baseURL = `http://${host}:${port}`;
};
