var removeNthFromEnd = function(head, n) {
    var runner = head;
    var chaser = head;
    for(var i=0; i<n; i++){
        runner = runner.next;
    }
    if(!runner){
        return head.next;
    }
    while(runner && runner.next){
        runner = runner.next;
        chaser = chaser.next;
    }
    chaser.next = chaser.next.next;
    return head;
};