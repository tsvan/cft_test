import axios from 'axios';
const HOST = 'https://gorest.co.in/public/v1/';

export function getUsersList(callback, page) {
  const url = HOST + 'users?page=' + page;
  axios
    .get(url)
    .then(response => {
      if (response.data.data) {
        callback(response.data.data, response.data.meta.pagination.pages);
      }
    })
    .catch(error => {
      console.log(error);
    });
}

export function saveUserData(data, callback) {
  const url = HOST + 'users';
  const token =
    'c782549aa2a32c67afb920df492d28788da9ff0c084e1dd0b0b7367785092147';
  const config = {
    headers: {Authorization: `Bearer ${token}`},
  };
  axios
    .post(url, data, config)
    .then(response => {
      callback(true);
    })
    .catch(error => {
      console.log(error);
      callback(false);
    });
}
