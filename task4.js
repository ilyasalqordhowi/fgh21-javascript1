//jawaban a menggubah data menggunakan spread operator
{
 const nama = {nama:"M.Ilyas Nazhif Azhar Al Qordhowi",unsername:"ilyas"}
 const email = {email:"ilyasalqordhowi@gmail.com"};
 const hobby = {hobby:"berenang,photography,bermain game"}
 const biodata = {...nama,...email,...hobby}
 console.log(biodata)
}
const streetCity = {
    street: "jalan gondang tani",
    city: "Sragen"
};

// Mengambil nilai sebelum destructuring
const street = streetCity.street;
const city = streetCity.city;

console.log(street); // Output: jalan gondang tani
console.log(city);   // Output: Sragen

// Mengambil nilai setelah destructuring
const { street: newStreet, city: newCity } = streetCity;

console.log(newStreet); // Output: jalan gondang tani
console.log(newCity);   // Output: Sragen 
   let data = {
    id: 1,
  address: {
    suite: "Apt. 555",
    zipcode: "92998-3874"
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org"
};
