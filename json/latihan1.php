<?php
// $mahasiswa = [
//     [
//         "nama" => "Refri",
//         "nim" => "1551",
//         "email" => "refri@student.com"
//     ],
//     [
//         "nama" => "Rifwan",
//         "nim" => "5115",
//         "email" => "rifwan@student.com"
//     ],
//     [
//         "nama" => "Daharmi",
//         "nim" => "1515",
//         "email" => "daharmi@student.com"
//     ]
// ];

$dbh = new PDO('mysql:host=localhost;dbname=phpdasar', 'root', '');
$db = $dbh->prepare('SELECT * FROM mahasiswa');
$db->execute();
$mahasiswa = $db->fetchALL(PDO::FETCH_ASSOC);
$data = json_encode($mahasiswa);

echo $data;
