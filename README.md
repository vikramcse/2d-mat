# 2d-mat
Create multidimensional matrix with superpower


## Install

```sh
$ npm install --save 2d-mat
```

## Example

```js
var Matrix = require('2d-mat');

var mat = new Matrix([1, 2], [3, 4]);

console.log(mat.indexAt(0, 1));
// -> 1

console.log(mat.set(0, 1, 100));
// -> [[100, 2], [3, 4]]

console.log(mat.transpose());
// -> [[1, 3], [2, 4]]

console.log(mat.size());
// -> [2, 2]

console.log(mat.createEmpty(2, 2));
// -> [[undefined, undefined], [undefined, undefined]]

console.log(mat.diagonal());
// -> [1, 4]

mat.print();
// - > [[1, 2],
//      [3, 4]]
```



## API
`var Matrix = require('2d-mat');`

### new Matrix([list, ...]);
`This will create a matrix object`

#### list

Type: `array`

Accepts sequence of array where each array is length of row and the size of the array is length columns.

### The returned matrix is 0 indexed.

## License MIT

&copy; 2016 vikram. MIT License
