
var str = [2, 1, 5, 4, 3];
var length=str.length
for (i = 0; i < length - 1; i++) {

    for (j = 0; j < length - 1; j++) {
        if (str[j] > str[j + 1]) {
            var ff = str[j]
            str[j] = str[j + 1]
            str[j + 1] = ff
        }
    }
}console.log(str)