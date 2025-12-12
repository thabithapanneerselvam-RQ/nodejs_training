function outer(){
let count = 0;
return{
increment(){
count++;
return count;
},
decrement(){
count--;
return count;
},
getValue(){
return count;
}
}
}
const counter = outer();
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.increment())
