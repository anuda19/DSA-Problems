let check = (p1, p2, left, right) =>{
    if(p1 == null && p2 == null){
        return 1;
    }
    if(p1 != null && p2 != null){
        if(p1.val == p2.val && check(p1.left, p2.left) && check(p1.right,p2.right)){
            return 1;
        }
    }
    return 0;
}

check(p1, p2, left, right);