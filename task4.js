let data = {
  id: 1,
  name:"m.ilyas nazhif azhar al qordhowi",
  username:"ilyas",
  email:"ilyasalqordhowi@gmail.com",
  address: {
    street:"gondang tani",
    city:"sragen",
    suite: "Apt. 555",
    zipcode: "92998-3874"
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org"
};

//jawaban a menggubah data menggunakan spread operator
{
  let nama = {nama:"M.Ilyas Nazhif Azhar Al Qordhowi",unsername:"ilyas"}
  let email = {email:"ilyasalqordhowi@gmail.com"};
  let hobby = {hobby:"berenang,photography,bermain game"}
  let biodata = {...nama,...email,...hobby}
  console.log(biodata)
 }
 //jawaban b
 let { address: { street, city } } = data;

console.log(street); // Output: "gondang tani"
console.log(city);   // Output: "sragen"
