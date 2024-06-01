const printSegitiga = 6;

for(let i= printSegitiga; i > 0; i--){
    let line ='';
    for(let num = 1; num <= i; num++){
        line += num;
    }
    console.log(line);
}