var prices = [2,1,2,1,0,1,2];

var maxProfit = function(prices) {
    if(prices.length <= 1){
        return 0;
    }
    var low = 0;
    var high = 1;
    var max = 0;
    while(low<prices.length){
        if(prices[low]<prices[high]){
            var profit = prices[high] - prices[low]
            max = Math.max(max, profit);
        } else {
            low = high;
        }
        high++;
    }
    return max;
};

console.log(maxProfit(prices));