function fiboLoop(num){
  let a = 1, b = 1, temp;
  const arr =[];
  
  while (num > 0){
    temp = a;
    a = a + b;
    b = temp;
    if (b < 4000000)
      arr.push(b)
    else return []
    num--;
  }
 
  return arr;
 }
 function evenSum(arr) {
   let sum = 0
   arr.forEach(item => {
     if (item%2 === 0) sum += item;
   })
   return sum;
 }
 
