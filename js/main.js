function tablica (num) {
    
    if(num[0] > 10) {
        num[0] = 5;
    }

    if (num[1] > 10) {
        num[1] = 5;
    }

    if (num[2] > 10) {
        num[2] = 5;
    }
    
return num;
}

console.log(tablica([32,7,13]));
