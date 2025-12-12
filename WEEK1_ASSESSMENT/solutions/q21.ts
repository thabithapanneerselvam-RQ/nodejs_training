class Person{
private age: number;

constructor(age: number){
    this.age = age
}
public getAge(): number{
    return this.age
}
}
const p = new Person(25)
console.log(p.getAge())
