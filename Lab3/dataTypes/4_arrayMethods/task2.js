function filterRange(l_b, r_b){
    return arr.filter(item => (l_b <= item && item <= r_b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)