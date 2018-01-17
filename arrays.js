var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  return [element,...array]
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndofArray(array, element) {
  return (...array, element)
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
function accessElementinArray(array, index) {
  return array[index]
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return arr
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return arr
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length-1)
}