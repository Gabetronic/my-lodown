'use strict';

const { every } = require("lodash");

/* Library Documentation for Underpants includes: 

    * concept def of func.  
    * def. of what params will do --- use @param [{<data type>}] [<paramName>]: [description]
    * def. of what a func param will do --- use @param [{<func name>}] [<what the func does, i.e. action, callback, test, modify>]: [description]
    * what return state. will do --- use @returns [{type}]: [description]
    * function itself w/ no comments -- use function declaration syntax!
    * module export line ==>   module.exports.<func name> = <func name>;
*/

/**
 * identity: Takes in one value, in order to return the value, unchanged.
 * 
 * @param {Value} value: The value that will be returned.
 * @returns {Value} value: Will return the value parameter.
 */
function identity(value){ 
    return value;
}
module.exports.identity = identity;


/**
 * typeOf: Takes one value, and determines its data type.  Returns the type's name in a string.
 * 
 * @param {Value} value: The value to be tested.
 * @returns {String}: Returns a string value that represents the name of the value's data type.
 */
function typeOf(value){
    if(typeof value === "string"){
        return "string";
    }else if(Array.isArray(value) === true){
        return "array";
    }else if(Object.prototype.toString.call(value) === "[object Object]"){
        return "object";
    }else if(typeof value === "undefined"){
        return "undefined";
    }else if(typeof value === "number"){
        return "number";
    }else if(typeof value === "boolean"){
        return "boolean";
    }else if(Object.prototype.toString.call(value) === "[object Null]"){
        return "null";
    }else{
        return "function";
    }
}
module.exports.typeOf = typeOf;


/**
 *first: Designed to return an empty array, the first element, or a number of elements from the beginning of an array. 
 The number of elements returned depends on the number parameter.
 
 @param {Number} number: The number of array elements to be returned.
 @param {Array} array: The array that provides the source of the items to be returned.
 @returns {Array}: An array of elements, or an empty array.
 */
function first(array, number){
    if(Array.isArray(array) === false || number < 0){
        return [];
    }else if(typeof number !== "number" || Number.isNaN(number) === true){
        return array[0];
    }else if(!number > array.length){
        return array;
    }else{
        return array.slice(0, number);
    }
}
module.exports.first = first;


/**
 * last: Designed to return an empty array, an array's last element, or a number of elements from the end of an array.
 * 
 * @param {Array} array: The array that provides the source of the items to be returned.
 * @param {Number} number: The number of array elements to be returned.
 * @returns {Array}:  An array of elements, or an empty array.
 */
 function last(array, number){
    if(Array.isArray(array) === false || number < 0){
        return [];
    }else if(typeof number !== "number" || Number.isNaN(number) === true){
        return array[array.length - 1];
    }else if(number > array.length){
        return array;
    }else{
       return array.slice(-number);
    }
}
module.exports.last = last;

/**
 * indexOf: Designed to iterate through an array, and return the first occurrence of the given value.
 * 
 * @param {Array} array: the array to be iterated over.
 * @param {Value} value: the value that matches the first instance of itself in the array.
 * @returns {Number}: an indexed number of the array parameter, or -1.
 */

function indexOf(array, value){
    let newArr = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
        newArr.push(i);
        return i;
        }
    }
    return -1;
}
module.exports.indexOf = indexOf;


/**
 * contains: Determines in an array contains a certain value.
 * 
 * @param {Array} array: the array that will be tested.
 * @param {Value} value: the value that the test will search for.
 * @returns {Boolean}: the boolean value of whether or not the array passed the test.
 */

function contains(array, value){
    return array.includes(value) ? true : false;  
}
module.exports.contains = contains;


/**
 * each: Designed to iterate over a collection in order to call a function on each value in the collection.
 * 
 * @param {Array or Object} collection: The collection to be iterated over.
 * @param {Function} callback: The function to be applied to each value in the collection.
 */
 function each(collection, callback){
    if(Array.isArray(collection) === true){
        for(let i = 0; i < collection.length; i++){
            callback(collection[i], i, collection);
        }
    }else{
        for(let key in collection){
            callback(collection[key], key, collection);
        }
    }
};
module.exports.each = each;


/**
 * unique: Iterates over an array in order to identify and remove any duplicates.  Returns a non-mutated version of the array 
 * with all duplicates removed.
 * @param {Array} array: The array to be iterated over.
 * @returns {Array}: A copy of the array parameter, with all duplicate elements removed.
 */
function unique(array) {
    let outputArr = [];
    for (let i = 0; i < array.length; i++) {
      if(outputArr.indexOf(array[i]) === -1){
        outputArr.push(array[i]);
      }
    }
    return outputArr;
}
module.exports.unique = unique;


/**
 * filter: Invokes the test function on each array element in order to return a new array filled with the 
 * elements that passed the test.
 * 
 * @param {Array} array: The array to be iterated over.
 * @param {Function} test: The function responsible for testing whether each iteration returns true or false.
 * @returns {Array}: A new array holding all array iterations that returned true.
 */
function filter(array, test) {
    let newArray = [];
    for(let i = 0; i < array.length; i++){
      if(test(array[i], i, array) === true){
        newArray.push(array[i]);
      }
    }
    return newArray;
}
module.exports.filter = filter;


/**
 * reject:  Invokes the test function on each array element in order to return a new array filled with the 
 * elements that failed the test.
 * 
 * @param {Array} array: The array to be iterated over.
 * @param {Function} test: The function responsible for testing whether each iteration returns true or false.
 * @returns {Array}: A new array holding all array iterations that returned false.
 */
function reject(array, test){
    let output = [];
    for(let i = 0; i < array.length; i++){
      if(test(array[i], i, array) === false){
        output.push(array[i]);
      }
    }
    return output;
}
module.exports.reject = reject;


/**
 * partition: Invokes a function on each array iteration in order to divide and then return all elements into 
 * two arrays nested in a larger array.
 * @param {Array} array: The array to be iterated over.
 * @param {Function} test: Tests each iteration in order to determine which are either true or false.
 * @returns {Array}: A nested array holding all truthy iterations in one element, and all falsey iteration in the other element.
 */
function partition(array, test){
    let output = [];
    let arr = [];
    let arr2 = [];
    let callResult;
    for(let i = 0; i < array.length; i++){
        callResult = test(array[i], i, array);
        if(callResult === true){ 
            arr.push(array[i]);
        }else if(callResult === false){
            arr2.push(array[i]);
        }
    }
    output.push(arr, arr2);
    return output;
}
module.exports.partition = partition;


/**
 * map: Iterates over a collection in order to invoke a function on each iteration.  The result of this function call will be 
 * returned in a new array.
 * 
 * @param {Array or Object} collection: The collection to be iterated over.
 * @param {Function} callback:  acts upon each iteration to push it, transformed, to the new array.
 * @returns {Array}: filled with the array parameter's elements, transformed in some way by the callback function.
 */
function map(collection, callback){
    let output = [];
    if(Array.isArray(collection) === true){
      for(let i = 0; i < collection.length; i++){
        output.push(callback(collection[i], i, collection));
      }
    }else{
      for(let key in collection){
        output.push(callback(collection[key], key, collection));
      }
    }
    return output;
  }
module.exports.map = map;


/**
 * pluck: Designed to return an array containing the values paired to certain keys inside of an array of objects.
 * 
 * @param {Array} arrayOfObjs:  The array to iterate over.
 * @param {Value} prop: The value matching the array's values.
 * */    
function pluck(arrayOfObjs, prop){
    let result;
    result = _.map(arrayOfObjs, function(object){ 
        return object[prop];
    }); 
    return result;
}
module.exports.pluck = pluck;


/**
 * every: Designed to test the collection with Boolean logic, and return true if every element passes, and vice versa. 
 * @param {Array or Object} collection: The collection to be iterated over.
 * @param {Function} test: Tests whether each collection iteration is true or false.
 * @returns {Boolean}: the boolean value that corresponds with the results of invoking the function on each collection element.
 */
function every(collection, test){
    if(test === undefined){
        if(Array.isArray(collection) === true){
            for(let i = 0; i < collection.length; i++){
                if(collection[i] === false){
                    return false;
                }
            }
      }else{
            for(let key in collection){
                if(collection[i] === false){
                    return false;
                }
            }
        }
    }else{
        if(Array.isArray(collection) === true){
            for(let i = 0; i < collection.length; i++){
                if(test(collection[i], i, collection) === false){
                    return false;
                }
            }
      }else{
            for(let key in collection){
                if(test(collection[key], key, collection) === false){
                    return false;
                }
            }
        }
    }
    return true;
}
module.exports.every = every;


/**
 * some: Designed to test the collection with Boolean logic, and return true if at least one element passes, and vice versa. 
 * @param {Array or Object} collection: The collection to be iterated over.
 * @param {Function} test: Tests whether each collection iteration is true or false.
 * @returns {Boolean}: the boolean value that corresponds with the results of invoking the function on each collection element.
 */
function some(collection, test){
    if(typeof test === "function"){
      if(collection instanceof Object){
        for(var key in collection){
          if(test(collection[key], key, collection) === true){
            return true;
          }
        }
      }else{
        for(var i = 0; i < collection.length; i++){
          if(test(collection[i], i, collection) === true){
            return true;
          }
        }
      }
    }
    if(test === undefined){
      if(collection instanceof Object){
        for(var i in collection) {
          if(collection[i] == true){
            return true;
          }
        }
      }else{
        for(var i = 0; i < collection.length; i++){
          if(collection[i] == true){
            return true;
          }
        }
      }
    }
    return false;
  }
  module.exports.some = some;  


/**
 * reduce: Designed to take in a starting point and add the result of invoking a callback function on each element 
 * of an array, to the previous result value.  Once the loop finishes, reduce() will return the final accumulated result.
 * @param {Array} array: The array to be iterated over.
 * @param {Function} callback: The function call used on each iteration.
 * @param {Value} seed: An optional starting value used to determine where the array iterations will begin. 
 * @returns {Value}: The value obtained after reducing the result of each function call on the array's elements.
 */
function reduce(array, callback, seed){
    let result;
    if(seed === undefined){
        result = array[0];
        for(let i = 1; i < array.length; i++){
            result = callback(result, array[i], i, array);
        }
    }else{
        result = seed;
        for(let i = 0; i < array.length; i++){
            result = callback(result, array[i], i, array);
        }
    }
    return result;
}
module.exports.reduce = reduce;


/**
 * extend: Intends to return the result of copying the properties of every object parameter into the first object provided.
 * @param {Object} targetObject: The object intended to hold all other properties from other object parameters.
 * @param {Objects} ...objects: The unknown number of objects ment to pass their properties to the target object parameter.
 * @returns {Object}: A copy of the target object, transformed.
 */
function extend(targetObject, ...objects){
    let copy = Object.assign(targetObject, ...objects);
    return copy;
}
module.exports.extend = extend;
  