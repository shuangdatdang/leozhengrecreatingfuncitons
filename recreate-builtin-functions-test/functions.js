function includes(item,array){
    let l = array.length;
    for(i = 0; i < l; i++){
        if (item == array[i]){
            return true;
        }
    }
    return false;
}
function indexOf(item,array){
    let l = array.length;
    for(i = 0; i < l; i++){
        if (item == array[i]){
            return i;
        }
    }
    return -1;
}
function reverse(array){
    let revlist = [];
    let l = array.length;
    for(i = l-1; i >= 0; i--){
       revlist.push(array[i])
    }
    return revlist;
}
function slice(start,stop,array){
    let slicelist = [];
    for(i = start; i < stop; i++){
       slicelist.push(array[i]);
    }
    return slicelist;
}
function concat(array1,array2){
    let mergelist = [];
    let len1 = array1.length;
    let len2 = array2.length;
    for(i = 0; i < len1; i++){
       mergelist.push(array1[i])
    }
    for(i = 0; i < len2; i++){
        mergelist.push(array2[i])
     }
    return mergelist;
}
function join(sep,array){
    let l = array.length;
    let joinedstring = "";
    for(i = 0;i < l; i++){
        if(i < l-1){
            joinedstring += array[i] + sep;
        }else if(i = l-1){
            joinedstring += array[i];
        }
    }
    return joinedstring;
}
function max(array){
    let l = array.length;
    let max = array[0]
    for(i = 0; i < l; i++){
        if (max < array[i]){
            max = array[i];
        }
    }
    return max;
}