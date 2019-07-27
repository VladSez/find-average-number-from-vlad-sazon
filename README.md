# Find average number from Vlad Sazon🕵🏽 

**Small.** 315 bytes (minified and gzipped). No dependencies.

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
# Example https://codesandbox.io/s/throbbing-dawn-uj7gq
