var str="hOW ARe yoU"
var ff=str.split(' ')
for(var i=0;i<ff.length;i++){
var first=ff[i].substr(0,1).toUpperCase()
var other=ff[i].substr(1).toLowerCase()
ff[i]=first+other
}
console.log(ff.join(' '))