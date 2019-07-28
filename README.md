# Find average number from Vlad Sazon🕵🏽 

**Small.** 315 bytes (minified and gzipped). No dependencies.

**Demo**: https://codesandbox.io/s/throbbing-dawn-uj7gq

**Perfomance test**: `for..of loop` vs `for loop` vs `reduce` library implementations comparison: https://codepen.io/Vladik/pen/ZgLEOQ?editors=1010

## Installation

```sh
npm install find-average-number-from-vlad-sazon
```
or

```sh
yarn add find-average-number-from-vlad-sazon
```

## Example

```js
import { findAverageNumber } from 'find-average-number-from-vlad-sazon'

const array = [1,2,3,4,5]
findAverageNumber(array) // 3

const array = []
findAverageNumber(array) // Error: Empty array

const array = [null,,undefined,NaN]
findAverageNumber(array) // Error: Array must be consisted from numbers. For example: [1,2,3]

const array = [{}]
findAverageNumber(array) // Error: Array must be consisted from numbers. For example: [1,2,3]

const arr = [1,2,[3,4]]
findAverageNumber(array) // Error: Array must be consisted from numbers. For example: [1,2,3]
```
