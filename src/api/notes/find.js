import assign from 'object-assign';
import fetch from '../../utils/fetch';

export default function (str) {
  return fetch(`notes/search/${str}`, {
    method: 'get',
  }).then(r => r);
}
