class ProjectA{
name: string;
constructor(name: string){
this.name = name;
}
description(){
    console.log(`this is property A of ${this.name}`)
}
}

class ProjectB extends ProjectA{
description(){
console.log(`this is project B of ${this.name}`)
}
}

const obj = new ProjectA("thabi");
obj.description() 
const obj1 = new ProjectB("lav")
obj1.description() 
