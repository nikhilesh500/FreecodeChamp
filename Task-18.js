/**************************************************** Javascript Memory Allocation **********************************************/
const num = 42; // Primitive data type (number)
const obj = { name: 'John' }; // Object

function foo() {
  const localVar = 'Hello'; // Stored in the stack
  const dynamicObj = new Array(1000); // Stored in the heap
}

/**************************************************** Memory Leaks **********************************************/
function createData() {
  const data = new Array(10000); // Memory allocated for data
  // Forgot to release data
}
createData();

/**************************************************** Memory Optimization Techniques **********************************************/

/** Managing References **/

obj = null; // Release the reference to obj


/** Object Pools **/

const objectPool = [];
function createObject() {
  if (objectPool.length > 0) {
    return objectPool.pop(); // Reuse existing object from the pool
  }
  return { data: '...' }; // Create a new object
}
function releaseObject(obj) {
  objectPool.push(obj); // Add the object back to the pool
}


/**************************************************** Best Practices for Memory Optimization **********************************************/

/** Minimize Global Variables **/

const myApp = (function() {
  const internalData = '...'; // Encapsulate in a module or function scope
})();


/** Proper Event Listener Management **/

function openModal() {
  console.log('Modal opened');
}

function closeModal() {
  console.log('Modal closed');
}


// Event Listeners
document.getElementById('openModalBtn').addEventListener('click', openModal);
document.getElementById('closeModalBtn').addEventListener('click', closeModal);

function removeModalListeners() {
  document.getElementById('openModalBtn').removeEventListener('click', openModal);
  document.getElementById('closeModalBtn').removeEventListener('click', closeModal);
}

function handleModalClose() {
  removeModalListeners();
}

function removeModalFromDOM() {
  removeModalListeners();
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    handleModalClose();
  }
});


/**************************************************** Allocation via value intilization **********************************************/
const n = 123; // allocates memory for a number
const s = "azerty"; // allocates memory for a string

const o = {
  a: 1,
  b: null,
}; // allocates memory for an object and contained values

// (like object) allocates memory for the array and contained values
const a = [1, null, "abra"];

function f(a) {
  return a + 2;
} // allocates a function (which is a callable object)

// function expressions also allocate an object
someElement.addEventListener(
  "click",
  () => {
    someElement.style.backgroundColor = "blue";
  },
  false,
);

/**************************************************** Allocation via function calls **********************************************/

const d = new Date(); // allocates a Date object

const e = document.createElement("div"); // allocates a DOM element

const s2 = s.substr(0, 3); // s2 is a new string
// Since strings are immutable values,
// JavaScript may decide to not allocate memory,
// but just store the [0, 3] range.

const a1 = ["ouais ouais", "nan nan"];
const a2 = ["generation", "nan nan"];
const a3 = a1.concat(a2);
// new array with 4 elements being
// the concatenation of a and a2 elements.

