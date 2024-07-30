addPrefix
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив и строковой префикс. Эта функция должна возвращать новый массив, в котором к каждому элементу исходного массива добавляется переданный префикс.
Функция предназначена для работы со строковыми элементами. После префикса должен добавляться пробел.
import addPrefix from './arrays.js';
const names = ['john', 'smith', 'karl'];
const newNames = addPrefix(names, 'Mr');
console.log(newNames);
// => ['Mr john', 'Mr smith', 'Mr karl'];
console.log(names); // Старый массив не меняется!
// => ['john', 'smith', 'karl'];
_____________________________________________________________________________________________________________________________________________________________
  arrays.js
Реализуйте и экспортируйте функцию swap(), которая меняет местами первый и последний элемент массива. Если массив содержит меньше двух элементов, то он возвращается как есть:

import { swap } from '../arrays';

swap([]); // []
swap([1]); // [1]
swap([1, 2]); // [2, 1]
swap(['one', 'two', 'three']); // ['three', 'two', 'one']
Подсказки
Чтобы поменять местами значения, нужно использовать дополнительную переменную
_____________________________________________________________________________________________________________________________
arrays.js
Реализуйте и экспортируйте функцию reverse(), которая принимает на вход массив и располагает элементы исходного массива в обратном порядке. Функция должна мутировать переданный в нее массив. Новый массив из нее возвращать не надо.

import { reverse } from './arrays';

const names = ['john', 'smith', 'karl'];

reverse(names);
console.log(names); // => ['karl', 'smith', 'john']

reverse(names);
console.log(names); // => ['john', 'smith', 'karl']
Решение этой задачи подразумевает самостоятельную реализацию функции без использования встроенного метода reverse().

Подсказки
Для решения этой задачи, проще всего брать и менять местами элементы стоящие на зеркальных местах: первый и последний, второй и предпоследний и так далее до середины.
