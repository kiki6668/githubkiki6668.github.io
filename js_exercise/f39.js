var d1=new Date('2019/6/21')
var d2=new Date(d1)
d2.setFullYear(d2.getFullYear()+3)
var d3=new Date(d2)
d3.setMonth(d3.getMonth()-1)
var day=d3.getDay()
if(day===6){
    d3.setDate(d3.getDate()-1)
}else if(day===0){
    d3.setDate(d3.getDate()-2)
}
console.log('入职时间：'+d1.toLocaleDateString())
console.log('到期时间：'+d2.toLocaleDateString())
console.log('续签时间：'+d3.toLocaleDateString())
//console.log(day)
//方方是个大傻包，每天被我凶，每天照顾我，每天都很爱我 ，我会一直陪着大傻方。