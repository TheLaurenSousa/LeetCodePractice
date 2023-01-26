var detectCycle = function(head) {
    var runner = head;
    var tracker = [];
    while(runner){
        tracker.push(runner);
        if(tracker.includes(runner.next)){
            return runner.next;
        }
        runner=runner.next;
    }
    return null
};

var detectCycle = function(head) {
    let set = new Set();
    function cycle(node) {
        if (set.has(node)) return node;
        if (!node) return null;
        set.add(node);
        return cycle(node.next);
    }
    return cycle(head);
};