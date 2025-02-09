function multiplyNumeric(menu) {
    for (let key in menu) {
        if(typeof obj[key] == 'number'){
            menu.key *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
  
multiplyNumeric(menu);
