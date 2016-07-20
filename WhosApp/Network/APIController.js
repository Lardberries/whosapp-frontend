'use strict';

const URL = 'http://whosapp.eastus.cloudapp.azure.com:3000'

export const getChats = (id) => {
  return fetch('https://whosapp.matt.how/chat/', {
    method: 'GET',
    headers: {
      'x-access-token': id,
    },
  })
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson.result)
    return responseJson.result;
  })
  .catch((error) => {
    console.error(error);
  });
};
