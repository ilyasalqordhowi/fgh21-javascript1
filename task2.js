const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;
{
if (typeof mtk === 'number',mtk >= 0,mtk <= 100){
    console.log("nilai mtk adalah:" + mtk)
}else{
    console.log("Eror: nilai tidak sesuai")
}
    if(typeof bahasaIndonesia === 'number',bahasaIndonesia >= 0,bahasaIndonesia <= 100){
        console.log("nilai bahasa indonesia adalah:" + bahasaIndonesia)
}else{
    console.log("Eror: nilai tidak sesuai")
}  
    if(typeof bahasaInggris === 'number',bahasaInggris >= 0,bahasaInggris <= 100){
        console.log("nilai bahasa inggris adalah:" + bahasaInggris)
}else{
    console.log("Eror: nilai tidak sesuai")
}
    if(typeof ipa === 'number',ipa >= 0 ,ipa <= 100)  {
            console.log("nilai mtk adalah:" + ipa)
 }else{
        console.log("Eror: nilai tidak sesuai")
    
 }

}
    const total = mtk + bahasaIndonesia + bahasaInggris + ipa;
    const rataRAtaNilai = total / 4;
    let grade;

    if (rataRAtaNilai >= 90,rataRAtaNilai <= 100) {
        grade = 'A';
    } if (rataRAtaNilai >= 80,rataRAtaNilai <= 89) {
        grade = 'B';
    } else if (rataRAtaNilai >= 70,rataRAtaNilai <= 79) {
        grade = 'C';
    } else if (rataRAtaNilai >= 60,rataRAtaNilai <= 69) {
        grade = 'D';
    } else {
        grade = 'E';
    }


    console.log("Rata-rata = " + rataRAtaNilai);
    console.log("Grade = " + grade);
