var x = -121;

var isPalindrome = function(x) {
    var output = true;
    x=x.toString();
    var i = 0;
    var j = x.length-1;
    while(i < j){
        if (x[i] !== x[j]){
            output = false;
        }
        i+=1;
        j-=1;
    }
    return output;
};

console.log(isPalindrome(x));