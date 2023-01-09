var s = 'XVIII';

var romanToInt = function(s) {
    var pairings = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
    var answer = 0;
    for(i=0; i<s.length; i++){
        if(pairings[s[i]] < pairings[s[i+1]]){
            answer -= pairings[s[i]];
        } else {
            answer += pairings[s[i]];
        }
    }
    return answer
};


console.log(romanToInt(s));