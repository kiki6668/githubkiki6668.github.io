var ff={
    age:21,
    age:24,
    age:19,
    age:18,
    age:22
}
var sum=0
var str=0
for(var key in ff){
    sum+=ff[key]
    str++
}
console.log(sum/str)