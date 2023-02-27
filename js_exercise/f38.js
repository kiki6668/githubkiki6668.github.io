var ff=['A','B','C','D','E','F','G','H','I','J','K','L'
,'M','N','O','P','Q','0','1','2','3','4','5','6','7','8','9']
var fff=[]
for(var i=0;i<4;i++){
    var num=Math.floor(Math.random()*26)
fff.push(ff[num])
}
console.log(fff)