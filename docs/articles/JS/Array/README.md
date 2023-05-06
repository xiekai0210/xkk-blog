# 数组

## ES6扩展
### Array.from()
>  Array.from(arrayLike, mapFn), 从可迭代或类数组对象创建一个新的浅拷贝的数组实例。
```javascript
console.log(Array.from('foo')); // Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x)); // Array [2, 4, 6]
```
```javascript
// 类似数组
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

// ES5 的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

// ES6 的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
```
- 返回值：`一个新的数组实例`

### Array.of()
>  通过可变数量的参数创建一个新的 Array 实例，而不考虑参数的数量或类型。
```javascript
Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]
```
- 返回值：`一个新的数组实例`

### Array.prototype.fill()
>  fill(value, start, end), 用一个固定值填充一个数组中从起始索引（默认为 0）到终止索引（默认为 array.length）内的全部元素。它返回修改后的数组。
```javascript
const array1 = [1, 2, 3, 4];

console.log(array1.fill(0, 2, 4)); // Array [1, 2, 0, 0]
console.log(array1.fill(5, 1)); // Array [1, 5, 5, 5]
console.log(array1.fill(6)); // Array [6, 6, 6, 6]
```
- 返回值：`经 value 填充修改后的数组。`


### Array.prototype.entries()|keys()|values()
>  entries()，keys()和values()——用于遍历数组。它们都返回一个遍历器对象,可以用for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。
```javascript
for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"
```
- 返回值：`一个新的可迭代迭代器对象`


## 数组遍历

### for
```javascript
const colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

### forEach
```javascript
const colors = ['red', 'green', 'blue'];
colors.forEach((element, index, array) => console.log(`element=${element}; index=${index}; array=${array};`));
// element=red; index=0; array=red,green,blue;
// element=green; index=1; array=red,green,blue;
// element=blue; index=2; array=red,green,blue;
```
- 返回值：`undefined`

- `forEach() 不会改变源数组，但是，作为 callbackFn 的函数可以更改数组`

### for...of
> for...of语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句
```javascript
let iterable = [10, 20, 30];

for (let value of iterable) {
    value += 1;
    console.log(value);
}
// 11
// 21
// 31
```
- 返回值：-


### map()
>  返回由每个数组元素上执行 callback 的返回值所组成的新数组
```javascript
const a1 = ['a', 'b', 'c'];
const a2 = a1.map((element, index, array) => item.toUpperCase());
console.log(a2); // ['A', 'B', 'C']
```
- 返回值：`一个新数组，每个元素都是回调函数的返回值`

### filter()
>  返回一个新数组，其中包含 callback 返回 true 的元素。
```javascript
const a1 = ['a', 10, 'b', 20, 'c', 30];
const a2 = a1.filter((element, index, array) => typeof element === 'number');
console.log(a2); // [10, 20, 30]
```
- 返回值：`返回给定数组的一部分的【浅拷贝】，其中只包括通过提供的函数实现的测试的元素。如果没有元素通过测试，则返回一个空数组`

### find()
>  返回 callback 返回 true 的第一个元素。
```javascript
const a1 = ['a', 10, 'b', 20, 'c', 30];
const i = a1.find((item) => typeof item === 'number');
console.log(i); // 10
```
- 返回值：`数组中第一个满足所提供测试函数的元素的值，否则返回 undefined`

### findIndex()
>  返回 callback 返回 true 的第一个元素的[索引]。
```javascript
const a1 = ['a', 10, 'b', 20, 'c', 30];
const i = a1.findIndex((item) => typeof item === 'number');
console.log(i); // 1
```
- 返回值：`数组中第一个满足测试条件的元素的索引。否则返回 -1`

### reduce()
>  对数组中的每个值执行 callback(accumulator, currentValue, currentIndex, Array)，目的是将列表中的元素减少到单个值。reduce 函数返回 callback 函数返回的最终值。如果指定了 initialValue，则调用 callback，并将 initialValue 作为第一个参数值，将数组中第一个元素的值作为第二个参数值。
```javascript
const a = [10, 20, 30];
const total = a.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(total); // 60
```
- 返回值：`使用“reducer”回调函数遍历整个数组后的结果。`


## 数组方法

### concat()
>  连接两个或多个数组并返回一个新的数组
```javascript
let myArray = ['1', '2', '3'];
myArray = myArray.concat('a', 'b', 'c'); // myArray 现在是 ["1", "2", "3", "a", "b", "c"]
```

### join()
>  将数组中的所有元素连接成一个字符串
```javascript
const myArray = ['Wind', 'Rain', 'Fire'];
const list = myArray.join(' - '); // list 现在是 "Wind - Rain - Fire"
```

### push()
>  在数组末尾添加一个或多个元素，并返回数组操作后的 length
```javascript
const myArray = ['1', '2'];
myArray.push('3'); // myArray 现在是 ["1", "2", "3"]
```
- 返回值：`数组的长度`

### pop()
>  从数组移出最后一个元素，并返回该元素
```javascript
const myArray = ['1', '2', '3'];
const last = myArray.pop(); // myArray 现在是 ["1", "2"]，last 为 "3"
```
- 返回值：`移出的元素`

### shift()
>  从数组移出第一个元素，并返回该元素
```javascript
const myArray = ['1', '2', '3'];
const first = myArray.shift(); // myArray 现在是 ["2", "3"]，first 为 "1"
```
- 返回值：`移出的元素`

### unshift()
>  在数组开头添加一个或多个元素，并返回数组的新长度
```javascript
const myArray = ['1', '2', '3'];
myArray.unshift('4', '5'); // myArray 变成了 ["4", "5", "1", "2", "3"]
```
- 返回值：`数组的长度`

