function ArrayForm(name,age) {
    this.name = name
    this.age = age 
}
var array = []
var array1 = new ArrayForm("mausam",55)
var array2 = new ArrayForm("mausam",15)

array.push(array1)
array.push(array2)

console.log(array.sort((a,b) => {
    return a.age-b.age
}));