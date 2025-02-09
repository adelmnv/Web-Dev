function checkSpam(str) {
    let lower = str.toLowerCase();
    return lower.includes('viagra') || lower.includes('xxx');
}
  
alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );