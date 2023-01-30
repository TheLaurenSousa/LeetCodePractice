var isValidBST = function(root, lower=Number.MAX_NUMBER, upper=Number.MAX_NUMBER) {
    if(!root) return true;
    if(root.val <= lower || root.val >= upper) return false;
    return isValidBST(root.right, root.val, upper) && isValidBST(root.left, lower, root.val);
};