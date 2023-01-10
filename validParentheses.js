var s = "()[(])){}";

var isValid = function(s) {
    var pairs = {
        '(':')',
        '{':'}',
        '[':']'
    }
    if(s.length%2 === 1){
        return false
    }
    if(s[0] === ")" || s[0] === "}" || s[0] === "]"){
        return false
    }
    if (s[s.length-1] === "(" || s[s.length-1] == "{" || s[s.length-1] == "["){
        return false
    }
    var checker = [];
    for(var i =0; i<s.length; i++){
        if (s[i] === "(" || s[i] ==="{" || s[i] === "["){
            checker.push(s[i]);
        } else if (pairs[checker.pop()] !== s[i]){
            console.log(pairs[checker.pop()])
            return false
        }
    }
    return checker.length === 0;
};

console.log(isValid(s));