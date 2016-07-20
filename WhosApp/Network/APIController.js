'use strict';

const URL = 'http://whosapp.eastus.cloudapp.azure.com:3000'

export const getChats = (id) => {
  return fetch('https://whosapp.matt.how/chat/', {
    method: 'GET',
    headers: {
      'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfYnNvbnR5cGUiOiJPYmplY3RJRCIsImlkIjoiV8KPwq5IwpXDpVx1MDAxZMKawq_CkU3DvyIsImlhdCI6MTQ2OTAzNDA1NywiZXhwIjoxNDY5MTIwNDU3fQ.kO28x_KaEm0Dn5CTDYvwbuqtEeOmiopssUjYbrkUeZQ',
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
