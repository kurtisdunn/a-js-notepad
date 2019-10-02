import assign from 'object-assign';
import fetch from '../../utils/fetch';

export default function (data) {
  console.log(data);
  return fetch('/notes', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(r => r);
}
