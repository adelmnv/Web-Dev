let object = {};

function A() { 
    return object; 
}
function B() { 
    return object; 
}

alert( new A() == new B() ); // true