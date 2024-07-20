const map = new Map();


map.set('key1', 'value1');
map.set('key2', 'value2');
map.set('key3', 'value3');

console.log(map.get('key1'));

console.log(map.has('key2'));

console.log(map.size);

map.delete('key3');

console.log(map.size);

map.clear();

console.log(map.size);

const map2 = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
  ['key3', 'value3']
]);

console.log(map2.get('key1'));


