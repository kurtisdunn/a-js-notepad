import assign from 'object-assign';
import fetch from '../../utils/fetch';

export default function (data) {
  return fetch('/notes', {
    method: 'get'
  }).then(r => r);
}
