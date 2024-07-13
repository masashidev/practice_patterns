const object = {
  name: 'name',
  age: 20,
  email: 'email',
  password: 'password',
}
const cache = {};

for (let key in object) {
  console.log(key, object[key]);
  if (object.hasOwnProperty(key)) {
    console.log('hasOwnProperty', key, object[key]);
  }
}

if (input in cache) {
  console.log('cache hit');
}

