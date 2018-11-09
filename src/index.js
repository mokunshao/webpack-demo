import _ from 'lodash';
import './style.scss';
import Icon from './icon.png';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  const array = [1, 2, 3].map((n) => n + 1);
  let span =document.createElement('span');
  span.innerText = array;
  element.appendChild(span);

  return element;
}

document.body.appendChild(component());

