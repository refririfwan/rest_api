<?php
$data = file_get_contents('coba.json');
// return json as array assoc
$mahasiswa = json_decode($data, true);
// var_dump($mahasiswa);
echo $mahasiswa[0]['pembimbing']['pembimbing1'];
