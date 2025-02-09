function unique(arr) {
    let res = [];
    for (let str of arr) {
      if (!res.includes(str)) {
        res.push(str);
      }
    }
  
    return res;
}
  
let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
alert( unique(strings) );