var s = "   fly me   to   the moon  " ;

var lengthOfLastWord = function(s) {
    var output = 0;
    if(s[s.length-1] === " "){
        var end = s.length-2;
    } else{
        var end = s.length-1;
    }
    for(i=end; i >= 0; i--){
        if(s[i] != " "){
            output++;
        } else if (s[i] === " " && output >= 1){
            return output;
        }
    }
    return output;
};

console.log(lengthOfLastWord(s));