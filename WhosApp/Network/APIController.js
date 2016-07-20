'use strict';

const URL = 'https://whosapp.matt.how'

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

export const getChatMessages = (authToken, messageID) => {
  return fetch(URL+'/chat/'+messageID+'/messages/', {
    method: 'GET',
    headers: {
      'x-access-token': authToken,
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
