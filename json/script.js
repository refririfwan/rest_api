// let mahasiswa = {
//     nama: "Refri",
//     nim: "1551",
//     email: "refri@student.com"
// }

// console.log(mahasiswa);
// console.log(JSON.stringify(mahasiswa));

// using vanila js
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         let mahasiswa = JSON.parse(this.responseText);
//         console.log(mahasiswa);

//     }
// }
// xhr.open('get', 'coba.json', true);
// xhr.send();

// using jquery
$.getJSON('coba.json', function (data) {
    console.log(data);
});