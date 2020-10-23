//If there are more than one
console.log('loaded js');
const tabItems = document.querySelectorAll('.tab-item');
console.log(tabItems);
const tabContentItems = document.querySelectorAll('.tab-content-item');
console.log(tabContentItems);

// Select tab content item
function selectItem(e) {
  console.log('called select item', this);
  // Remove all show and border classes
  removeBorder();
  removeShow();
  // Add border to current tab item
  this.classList.add('tab-border');
  // Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // Add show class
  tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removeBorder() {
  tabItems.forEach((item) => {
    item.classList.remove('tab-border');
  });
}

// Remove show class from all content items
function removeShow() {
  tabContentItems.forEach((item) => {
    item.classList.remove('show');
  });
}

// Listen for tab item click
tabItems.forEach((item) => {
  item.addEventListener('click', selectItem);
});

var acc = document.getElementsByClassName('accordion');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}
