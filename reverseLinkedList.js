var reverseList = function(head){
    var runner = head;
    var chaser = null;
    while(runner){
        var temp = runner.next;
        runner.next = chaser;
        chaser = runner;
        runner = temp;
    }
    return chaser;
}