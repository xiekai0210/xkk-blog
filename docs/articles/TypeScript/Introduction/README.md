# TypeScript入门
## 什么是TypeScript?
### 简介

TypeScript 是添加了{类型系统}的JavaScript，适用于任何规模的项目。

TypeScript 是一门静态类型*(编译时就会确定每个变量的类型)*、弱类型*(允许隐式类型转换)*的语言。



### TypeScript 发展历史

- 2012-10：微软发布了 TypeScript 第一个版本（0.8），此前已经在微软内部开发了两年。
- 2014-04：TypeScript 发布了 1.0 版本。
- 2014-10：Angular 发布了 2.0 版本，它是一个基于 TypeScript 开发的前端框架。
- 2015-01：ts-loader 发布，webpack 可以编译 TypeScript 文件了。
- 2015-04：微软发布了 Visual Studio Code，它内置了对 TypeScript 语言的支持，它自身也是用 TypeScript 开发的。
- 2016-05：`@types/react` 发布，TypeScript 可以开发 React 应用了。
- 2016-05：`@types/node` 发布，TypeScript 可以开发 Node.js 应用了。
- 2016-09：TypeScript 发布了 2.0 版本。
- 2018-06：TypeScript 发布了 3.0 版本。
- 2019-02：TypeScript 宣布由官方团队来维护 typescript-eslint，以支持在 TypeScript 文件中运行 ESLint 检查。
- 2020-05：Deno 发布了 1.0 版本，它是一个 JavaScript 和 TypeScript 运行时。
- 2020-08：TypeScript 发布了 4.0 版本。
- 2020-09：Vue 发布了 3.0 版本，官方支持 TypeScript。

## 类型系统

### 原始数据类型

- **布尔值**

```typescript
let vb1: boolean = true
```

- **数值**

```typescript
let vb2: number = 1
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
```

编译结果：

```javascript
var vb2 = 1;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
```

其中，ES6中二进制和八进制表示法，会被编译为十进制的数字。

- **字符串**

```typescript
let vb3: string = 'xk'
// 模板字符串
let vb: string = `name is ${vb3} !`
```

编译结果：

```javascript
var vb3 = 'xk';
// 模板字符串
var vb = "name is " + vb3 + " !";
```

- **undefined**

```typescript
let vb4: undefined = undefined
```

- **null**

```typescript
let vb5: null = null
```

- **void**

空值只能被赋值为undefined或null。

空值void与undefined、null的区别是，后者是所有类型的“子类型”，可以赋值给其它类型，空值void则不能。

```typescript
let vb: void = undefined
let vbnum: number = vb
// error TS2322: Type 'void' is not assignable to type 'number'.
```

### 任意值、联合类型

任意值可以被赋值为其它各种类型，没有显示声明变量类型时，默认是任意类型。

```typescript
let vb: any = '123';
vb = 123;
```

编译结果：

```javascript
var vb = '123';
vb = 123;
```



联合类型使用 `|` 分隔每个类型，允许被赋值为其中的某一类型，其它类型报错。

```typescript
let vb: string | number
vb = 10
```

```typescript
vb = false
// error TS2322: Type 'boolean' is not assignable to type 'string | number'.
```

### 对象类型

在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。

```typescript
interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25
};
```

上面的例子中，我们定义了一个接口 `Person`，接着定义了一个变量 `tom`，它的类型是 `Person`。这样，我们就约束了 `tom` 的形状必须和接口 `Person` 一致，其中的属性不能多也不能少。



**可选属性**

当我们对接口定义的某些属性是可选的时候，可以使用`X?`的方式定义可选属性。

```typescript
interface Person {
    name: string;
    age?: number;
}

let tom: Person = {
    name: 'Tom'
};
```

**任意属性**

当我们希望接口中可以允许有任意属性的时候，可以使用 `[propName: string]` 定义了任意属性取 `string` 类型的值。

```typescript
interface Person {
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person = {
    name: 'Tom',
    gender: 'male'
};
```

一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集。

```typescript
interface Person {
  name: string;
  age?: number;
  [propName: string]: string;
}

let tom: Person = {
  name: 'Tom',
  age: 25,
  gender: 'male'
};
// error TS2322: Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.
  Property 'age' is incompatible with index signature.
    Type 'number' is not assignable to type 'string'.
```

一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型。

```typescript
interface Person {
    name: string;
    age?: number;
    [propName: string]: string | number;
}

let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};
```

**只读属性**

有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 `readonly` 定义只读属性。

```typescript
interface Person {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

let tom: Person = {
  id: 89757,
  name: 'Tom',
  gender: 'male'
};

tom.id = 9527;
// error TS2540: Cannot assign to 'id' because it is a read-only property.
```

### 数组类型

在 TypeScript 中，数组类型有多种定义方式，比较灵活。

**`类型[]`表示法**

```typescript
let fibonacci: number[] = [1, 1, 2, 3, 5];
```

如果不想限制数组内数据的类型，可以使用`any[]`

```typescript
let list: any[] = ['1', 1, true];
```

**数组泛型**

```typescript
let fibonacci: Array<number> = [1, 1, 2, 3, 5];
```

**接口形式定义数组形状**

```typescript
interface NumberArray {
    [index: number]: number;
}
let fibonacci: NumberArray = [1, 1, 2, 3, 5];
```



### 函数类型

在 JavaScript 中，有两种常见的定义函数的方式——函数声明（Function Declaration）和函数表达式（Function Expression）。

```javascript
// 函数声明（Function Declaration）
function sum(x, y) {
    return x + y;
}

// 函数表达式（Function Expression）
let mySum = function (x, y) {
    return x + y;
};
```

在typescript中会对函数的入参和返回值都进行类型约束：

**函数声明**

```typescript
// 函数声明
function sum(x: number, y: number): number {
    return x + y;
}
```

**函数表达式**

```typescript
// 函数表达式
let mySum = function (x: number, y: number): number {
    return x + y;
};
```

这样的写法只是对右侧的匿名函数进行了类型定义，而左侧的`mysum`是通过赋值操作进行类型推断出来的，如果要手动给`mysum`加类型定义可以这样写：

```typescript
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};
```

这里TypeScript 中的`=>`和ES6中的`=>`有区别

在 TypeScript 的类型定义中，`=>` 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。

**接口形式定义函数形状**

```typescript
interface sum {
  (x: number, y:number) : number
}
let mysum: sum
mysum = function (x: number, y:number): number {
  return x + y
}
```

**可选参数、默认参数**

用TypeScript定义的函数，参数个数是固定的，如果要实现可选参数、默认参数可以这样写：

```typescript
function sum(x: number, y?: number, z:number = 1): number {
  return x + y + z;
}
```

需要注意的是，可选参数后面不允许出现必选参数。

### 泛型

泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

**定义函数时**

```typescript
function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray<string>(3, 'x'); // ['x', 'x', 'x']
```

我们在函数名后添加了 `<T>`，其中 `T` 用来指代任意输入的类型，在后面的输入 `value: T` 和输出 `Array<T>` 中即可使用了。接着在调用的时候，可以指定它具体的类型为 `string`。当然，也可以不手动指定，而让类型推论自动推算出来。

**定义接口时**

```typescript
interface CreateArrayFunc {
    <T>(length: number, value: T): Array<T>;
}

let createArray: CreateArrayFunc;
createArray = function<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']
```

同时也可以把泛型的定义提到接口名上：

```typescript
interface CreateArrayFunc<T> {
    (length: number, value: T): Array<T>;
}

let createArray: CreateArrayFunc<any>;
createArray = function<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']
```

注意，此时在使用泛型接口的时候，需要定义泛型的类型>

**泛型约束**

```typescript
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
```

使用`extends` 约束了泛型 `T` 必须符合接口 `Lengthwise` 的形状，也就是必须包含 `length` 属性。

此时如果调用 `loggingIdentity` 的时候，传入的 `arg` 不包含 `length`，那么在编译阶段就会报错了。

## 断言

类型断言（Type Assertion）可以用来手动指定一个值的类型。

### **语法**

```
1、值 as 类型（推荐）
2、<类型>值（不推荐）
```

### **用途**

**1、将一个联合类型断言为其中一个类型。**

当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型中共有的属性或方法，而有时候，我们确实需要在还不确定类型的时候就访问其中一个类型特有的属性或方法，比如：

```typescript
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function isFish(animal: Cat | Fish) {
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}
// index.ts:11:23 - error TS2339: Property 'swim' does not exist on type 'Cat | Fish'.
//   Property 'swim' does not exist on type 'Cat'.
```

上面的例子中，获取 `animal.swim` 的时候会报错。

此时可以使用类型断言，将 `animal` 断言成 `Fish`：

```typescript
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function isFish(animal: Cat | Fish) {
    if (typeof (animal as Fish).swim === 'function') {
        return true;
    }
    return false;
}
```

这样就可以解决访问 `animal.swim` 时报错的问题了。

需要注意的是，类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误。

**2、将一个父类断言为具体的子类**

```typescript
interface ApiError extends Error {
    code: number;
}
interface HttpError extends Error {
    statusCode: number;
}

function isApiError(error: Error) {
    if (typeof (error as ApiError).code === 'number') {
        return true;
    }
    return false;
}
```

**3、将任何一个类型断言为`any`**

```typescript
window.foo = 1;

// index.ts:1:8 - error TS2339: Property 'foo' does not exist on type 'Window & typeof globalThis'.
```

上面的例子中，我们需要将 `window` 上添加一个属性 `foo`，但 TypeScript 编译时会报错，提示我们 `window` 上不存在 `foo` 属性。

此时我们可以使用 `as any` 临时将 `window` 断言为 `any` 类型：

```typescript
(window as any).foo = 1;
```

在 `any` 类型的变量上，访问任何属性都是允许的。

需要注意的是，将一个变量断言为 `any` 可以说是解决 TypeScript 中类型问题的最后一个手段。

**4、将`any`断言为一个具体的类型**

平常在优化代码或者修改别人代码时，可以将一些不明确的any类型断言为具体的类型，提供代码的可阅读性和可维护性。

## 声明文件

### 用途

当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。

**声明语句**

假如我们想使用第三方库 jQuery，一种常见的方式是在 html 中通过 `<script>` 标签引入 jQuery，然后就可以使用全局变量 `$` 或 `jQuery` 了。

在 ts 中，编译器并不知道 `$` 或 `jQuery` 是什么东西

```typescript
jQuery('#foo');
// ERROR: Cannot find name 'jQuery'.
```

这时，我们需要使用 `declare var` 来定义它的类型

```typescript
declare var jQuery: (selector: string) => any;

jQuery('#foo');
```

上例中，`declare var` 并没有真的定义一个变量，只是定义了全局变量 `jQuery` 的类型，仅仅会用于编译时的检查，在编译结果中会被删除。它编译结果是:

```javascript
jQuery('#foo');
```

**声明文件**

通常我们会把声明语句放到一个单独的文件（`jQuery.d.ts`）中，这就是声明文件。

```typescript
// src/jQuery.d.ts

declare var jQuery: (selector: string) => any;
```

```typescript
// src/index.ts

jQuery('#foo');
```

声明文件必需以 `.d.ts` 为后缀。

一般来说，ts 会解析项目中所有的 `*.ts` 文件，当然也包含以 `.d.ts` 结尾的文件。所以当我们将 `jQuery.d.ts` 放到项目中时，其他所有 `*.ts` 文件就都可以获得 `jQuery` 的类型定义了。

**第三方声明文件**

当然，jQuery 的声明文件不需要我们定义了，社区已经帮我们定义好了，我们可以直接下载下来使用，但是更推荐的是使用 `@types` 统一管理第三方库的声明文件。

`@types` 的使用方式很简单，直接用 npm 安装对应的声明模块即可，以 jQuery 举例：

```javascript
npm install @types/jquery --save-dev
```

## 参考

[TypeScript入门教程](https://ts.xcatliu.com/)

