import axios from 'axios';
import {Endpoints} from './Endpoints';

export function GetMaker(fullpath) {
  console.log(fullpath);
  return axios
    .get(fullpath)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      if (err.response) {
        console.log(err.response);
        return err.response;
      }
    });
}

export function PostMaker(data, fullpath) {
  var form_data = new FormData();
  for (var key in data) {
    form_data.append(key, data[key]);
  }
  console.log(fullpath, data);
  var requestOptions = {
    method: 'POST',
    body: form_data,
    redirect: 'follow',
  };

  return fetch(fullpath, requestOptions)
    .then(response => response.json())
    .then(result => result)
    .catch(error => console.log('error', error));
}
