var connect = function(root) {
    var runner = root;
    while(root && root.left){
        var temp = root;
        while(temp){
            temp.left.next = temp.right;
            temp.right.next = temp.next ? temp.next.left : null;
            temp = temp.next;
        }
        root = root.left;
    }
    return runner;
};