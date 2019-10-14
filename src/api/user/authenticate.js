import assign from 'object-assign';
import cookie from 'js-cookie';
import fetch from '../../utils/fetch';

export default function (data) {
  return fetch('/login', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}
