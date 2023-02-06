var s = "ab#c";
var t = "ad#c";

var backspaceCompare = function(s, t) {
    var first = [];
    var second = [];

    for(var i=0; i<s.length; i++){
        if(s[i] != "#"){
            first.push(s[i]);
        } else{
            first.pop();
        }
    }
    for(var j=0; j<t.length; j++){
        if(t[j] != "#"){
            second.push(t[j]);
        } else{
            second.pop();
        }
    }
    return first.toString() === second.toString()
};

console.log(backspaceCompare(s,t));