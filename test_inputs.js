const app = document.getElementById('app');

const necessaryInput = {
  name: 'string',
  age: 'number',
  email: 'email',
  password: 'string',
  active: 'boolean',
}

function createForm() {
  const form = document.createElement('form');
  form.id = 'form';
  app.appendChild(form);
  for(const key in necessaryInput) {
    const input = document.createElement('input');
    input.id = key;
    input.name = key;
    input.placeholder = key;

    if(necessaryInput[key] === 'number') {
      input.type = 'number';
    } else if(necessaryInput[key] === 'boolean') {
      input.type = 'checkbox';
    } else if(necessaryInput[key] === 'string') {
      input.type = 'text';
    } else if(necessaryInput[key] === 'email') {
      input.type = 'email';
    }

    form.appendChild(input);
  }
}

const initialize = () => {
  createForm();
}

document.addEventListener('DOMContentLoaded', () =>{
  initialize();
  // scanValues();
});

function getInputValues() {
  const form = document.getElementById('form');
  const inputs = form.querySelectorAll('input');
  const values = {};
  inputs.forEach((input) => {
    values[input.id] = input.type === 'checkbox' ? input.checked : input.value;
  });
  return values;
}

function validateInputs(values) {
  for(const key in necessaryInput) {
    if(values[key] === '') {
      console.log(`error: ${key} ${values[key]}`)
      return false;
    }

    switch(necessaryInput[key]) {
      case 'string':
        if(typeof values[key] !== 'string') {
          console.log(`error: ${key} ${values[key]}`)
          return false;
        }
        break;
      case 'number':
        if(isNaN(values[key])) {
          console.log(`error: ${key} ${values[key]}`)
          return false;
        }
        break;
      case 'boolean':
        if(typeof values[key] !== 'boolean') {
          console.log(`error: ${key} ${values[key]}`)
          return false;
        }
        break;
      case 'email':
        if(!values[key].includes('@')) {
          console.log(`error: ${key} ${values[key]}`)
          return false;
        }
        break;
    }
  }
  return true;

}

function scanValues() {
  const intervalID = setInterval(() => {
    const values = getInputValues();
    console.log(values);
    const isValid = validateInputs(values);
    console.log(isValid);
  }, 2000);
}
