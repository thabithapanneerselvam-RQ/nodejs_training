function simple(name: string, age?:number):string{
if(age){
return `${name},${age}`
}
return name;
}
console.log(simple("thabi"));
