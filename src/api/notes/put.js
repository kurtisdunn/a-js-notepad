import assign from 'object-assign';
import fetch from '../../utils/fetch';

export default function (id, delta) {
  return fetch(`notes/${id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(delta)
  }).then(r => r);
}
