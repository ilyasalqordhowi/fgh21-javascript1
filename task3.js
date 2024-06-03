const printSegitiga = 6

if(typeof printSegitiga === "number"){
for(let numAwal = printSegitiga; numAwal > 0; numAwal--){
  let text = ""
  for(let i=1; i <= numAwal; i++){
    text =text + i 
  }
  console.log(text)
}
}else{
console.log("Data harus number")
}
