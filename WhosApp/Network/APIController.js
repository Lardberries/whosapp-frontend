'use strict';

const BASE_URL = 'https://whosapp.matt.how';

export const getChatThreads = (authToken) => {
  return fetch(BASE_URL + '/chat/', {
    method: 'GET',
    headers: {
      'x-access-token': authToken,
    },
  })
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson.result);
    return responseJson.result;
  })
  .catch((error) => {
    console.error(error);
  });
}

export const getChatMessages = (authToken, messageID) => {
  return fetch(BASE_URL+'/chat/'+messageID+'/messages/', {
    method: 'GET',
    headers: {
      'x-access-token': authToken,
    },
  })
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson.result);
    return responseJson.result;
  })
  .catch((error) => {
    console.error(error);
  });
}
