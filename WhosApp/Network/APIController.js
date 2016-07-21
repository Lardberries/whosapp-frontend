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
    return responseJson.result;
  })
  .catch((error) => {
    console.error(error);
  });
}

export const sendMessage = (authToken, messageID, content) => {
  return fetch(BASE_URL+'/chat/'+messageID+'/message/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': authToken,
    },
    body: JSON.stringify({
      content: content,
    })
  })
  .then((response) => response.json())
  .then((responseJson) => {
    return responseJson.success;
  })
  .catch((error) => {
    console.error(error);
  });
}
