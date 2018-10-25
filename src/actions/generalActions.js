import * as types from './actionTypes'

function url() {
  return 'www.url.com'
}

export function receiveGeneral(json) {
  return { type: types.RECEIVE_GENERAL, general: json.general }
}

export function fetchGeneral() {
  return dispatch => {
    return fetch(url(), {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'x-api-key': apiKey,
        Accept: 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => dispatch(receiveGeneral(json)))
  }
}
