const faqContainer = document.getElementById('faq-container');

const container = document.createElement('div');
container.classList.add('container-fluid', 'd-flex', 'justify-content-center', 'align-items-center', 'break-line');

const innerContainer = document.createElement('div');
innerContainer.classList.add('container', 'mt-5', 'mb-5', 'w-100');

const row = document.createElement('div');
row.classList.add('row');

// Add FAQ heading
const faqHeading = document.createElement('div');
faqHeading.classList.add('col-xl-12', 'col-lg-12', 'col-md-12', 'col-sm-12', 'mt-5', 'mb-5', 'text-center');
const faqTitle = document.createElement('h1');
faqTitle.classList.add('text-white', 'font-weight-bold');
faqTitle.innerText = 'Frequently Asked Questions';
faqHeading.appendChild(faqTitle);
row.appendChild(faqHeading);

// Add FAQ buttons
const faqButtons = [
  {
    question: 'What is Netflix?',
    iconClass: 'bi bi-plus-lg',
  },
  {
    question: 'How much does Netflix cost?',
    iconClass: 'bi bi-plus-lg',
  },
  {
    question: 'Where can I watch?',
    iconClass: 'bi bi-plus-lg',
  },
  {
    question: 'How do I cancel?',
    iconClass: 'bi bi-plus-lg',
  },
  {
    question: 'What can I watch on Netflix?',
    iconClass: 'bi bi-plus-lg',
  },
  {
    question: 'Is Netflix good for kids?',
    iconClass: 'bi bi-plus-lg',
  },
];

faqButtons.forEach((buttonData) => {
  const dropdown = createDropdownButton(buttonData.question, buttonData.iconClass);
  row.appendChild(dropdown);
});

innerContainer.appendChild(row);
container.appendChild(innerContainer);
faqContainer.appendChild(container);

// Function to create a FAQ dropdown button
function createDropdownButton(question, iconClass) {
  const dropdown = document.createElement('div');
  dropdown.classList.add('dropdown', 'w-100', 'mt-1', 'mb-1');
  dropdown.style.height = '95px';

  const button = document.createElement('button');
  button.type = 'button';
  button.classList.add('btn', 'btn-danger', 'w-100', 'h-100');
  button.style.backgroundColor = 'rgb(73, 70, 70)';
  button.style.border = 'none';
  button.style.borderRadius = '0px';

  const buttonContent = document.createElement('div');
  buttonContent.classList.add('d-flex', 'justify-content-between');

  const questionTitle = document.createElement('h1');
  questionTitle.style.fontSize = 'x-large';
  questionTitle.innerText = question;

  const icon = document.createElement('samp');
  icon.innerHTML = '<i class="' + iconClass + ' icon-large"></i>';

  buttonContent.appendChild(questionTitle);
  buttonContent.appendChild(icon);
  button.appendChild(buttonContent);

  dropdown.appendChild(button);

  return dropdown;
}
