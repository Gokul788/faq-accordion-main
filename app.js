const addBox = document.querySelector('.faq-add-box');
const faqList = document.querySelector('.faq-list');

document.querySelectorAll('.add').forEach((icon) => {
  icon.addEventListener('click', function () {
    const faqItem = icon.parentNode;
    console.log(faqItem)
    const isInAddBox = faqItem.parentNode.classList.contains('faq-add-box');
  console.log(faqItem.parentNode.classList.contains('faq-item'))
    if (!isInAddBox) {
      // Move to Add Box
      addBox.appendChild(faqItem);
      this.src = './assets/images/icon-minus.svg'; // Change to minus
    } else {
      // Move back to FAQ list
      faqList.appendChild(faqItem);
      this.src = './assets/images/icon-plus.svg'; // Change to plus
    }
  });
});
