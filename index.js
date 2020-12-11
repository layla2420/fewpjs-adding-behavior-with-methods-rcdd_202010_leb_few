class Cat {
  constructor(name,sex){
    this.name=name
    this.sex=sex
  }
  speak(){
    console.log(`${name} says meow!`)
  }
}

class Dog {
  constructor(name,sex){
    this.name=name
    this.sex=sex
  }
  speak(){
    console.log(`${name} says woof!`)
  }
}

class Bird {
  constructor(name,sex){
    this.name=name
    this.sex=sex
  }
  speak(){
    if(this.sex===male){
    console.log(`It's me! ${name}, the parrot!`)
  }
  if(this.sax!==male){
    console.log(`${name} says squawk!`)
  }
}
}
