const array = [1,2,3,4];

let hasDuplicate = false;

for(let i = 0; i< array.length; i++){
    for(let j = i+1; j< array.length; j++)
    {
        if(array[i] === array[j]){
            hasDuplicate= true;
            break;
        }
    }
    if(hasDuplicate){
        break;
    }
}

console.log(hasDuplicate)