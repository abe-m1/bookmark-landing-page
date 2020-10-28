const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function selectItem(e) {
  removeBorder();
  removeShow();
  this.classList.add('tab-border');
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add('show');
}

function removeBorder() {
  tabItems.forEach((item) => {
    item.classList.remove('tab-border');
  });
}

function removeShow() {
  tabContentItems.forEach((item) => {
    item.classList.remove('show');
  });
}

tabItems.forEach((item) => {
  item.addEventListener('click', selectItem);
});

var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
  let propName = `svg-icon-${i}`;
  let arrowContainer = acc[i].children[0];
  acc[i].addEventListener('click', function () {
    var arrow = document.getElementById(propName);
    this.classList.toggle('active');

    var panel = this.nextElementSibling;
    console.log(arrowContainer);
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
      arrow.style.stroke = 'hsl(231, 69%, 60%)';
      // arrowContainer.style.transform = 'rotate(-180deg)';
      arrowContainer.classList.remove('accordian-active');
    } else {
      panel.style.display = 'block';

      arrow.style.stroke = 'hsl(0, 94%, 66%)';
      console.log(arrowContainer);

      arrowContainer.classList.add('accordian-active');
    }
  });
}

const submitButton = document.querySelector('#button-submit');
const input = document.querySelector('#input');
const errorMessage = document.querySelector('.error-message');
const errorCircle = document.querySelector('.error-circle');
const inputContainer = document.querySelector('.input-container');
const form = document.querySelector('#form');

function validate(e) {
  e.preventDefault();
  const regEx = /^.+@\w+\.\w+$/;
  console.log(input.value);
  if (regEx.test(String(input.value).toLowerCase())) {
    console.log('valid');
    errorCircle.style.display = 'none';
    input.classList.remove('form-error');
    errorMessage.style.display = 'none';
    inputContainer.classList.remove('box-error');
  } else {
    errorCircle.style.display = 'block';
    errorMessage.style.display = 'block';
    input.classList.add('form-error');
    inputContainer.classList.add('box-error');
  }
}

submitButton.addEventListener('click', validate);

const navButton = document.querySelector('#nav-button');
navButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('click', navButton.children[0].style);
  navButton.children[0].classList.toggle('hide');
  // navButton.children[1].classList.toggle('show');

  document.querySelector('.nav-container').classList.toggle('show');
});
