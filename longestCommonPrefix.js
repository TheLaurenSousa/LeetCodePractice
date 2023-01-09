var strs = ["flower", "flow", "flight"];

var longestCommonPrefix = function(strs) {
    var output = strs[0];
    var minLength = strs[0].length;
    for(i=0; i<strs.length; i++){
        if(minLength > strs[i].length){
            minLength = strs[i].length;
            output = strs[i];
        }
    }
    for (j=0; j<strs.length; j++){
        for(k=0; k<minLength; k++){
            if(strs[j][k] !== output[k]){
                output = output.slice(0, k);
            }
        }
    }
    return output;
};

console.log(longestCommonPrefix(strs));