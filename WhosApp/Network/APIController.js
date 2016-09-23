'use strict';

const BASE_URL = 'http://localhost:3000';

export const getChatThreads = (authToken) => {
  return fetch(BASE_URL+'/chat/', {
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

export const login = (username, password) => {
  console.log(username);
  console.log(password);
  return fetch(BASE_URL+'/user/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
    })
  })
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    return responseJson;
  })
  .catch((error) => {
    console.error(error);
  });
}

export const register = (username, password, name, phone) => {
  console.log(username);
  console.log(password);
  console.log(name);
  console.log(phone);
  return fetch(BASE_URL+'/user/register/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
      name: name,
      phone: phone,
    })
  })
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    return responseJson;
  })
  .catch((error) => {
    console.error(error);
  });
}
