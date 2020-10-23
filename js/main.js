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
