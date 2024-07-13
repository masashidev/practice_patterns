const uploadedTextFile = new File(['Hello, World!'], 'test.txt', { type: 'text/plain' });

const reader = new FileReader();

reader.onload = (event) => {
  console.log(event.target.result);
}

reader.readAsText(uploadedTextFile);

//ask for the file through form in browser
const fileInput = document.createElement('input');
fileInput.type = 'file';
document.body.appendChild(fileInput);

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = (event) => {
    console.log(event.target.result);
  }
  reader.readAsText(file);
})

// get all html document from other file
const html = document.documentElement.outerHTML;
