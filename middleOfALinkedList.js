var middleNode = function(head) {
    var runner = head;
    var endSearcher = head;
    while(endSearcher && endSearcher.next){
        runner = runner.next;
        endSearcher = endSearcher.next.next;
    }
    return runner;
};