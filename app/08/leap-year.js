var leapYear = function(a){
  if(Number.isInteger(a)){
    if (a % 400 ==0 && a > 0){
      return true
    }
    if (a % 4 == 0 && a % 100 !== 0){
      return true
    }
  }
  return false
}
