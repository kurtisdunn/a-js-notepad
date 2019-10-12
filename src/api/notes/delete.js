import assign from 'object-assign';
import fetch from '../../utils/fetch';

export default function (id, delta) {
  return fetch(`notes/${id}`, {
    method: 'delete'
  }).then(r => r);
}
