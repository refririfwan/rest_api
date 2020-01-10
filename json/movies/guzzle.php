<?php
require 'vendor/autoload.php';

use GuzzleHttp\Client;

$client = new  Client();

$response = $client->request('get', 'http://omdbapi.com', [
    'query' => [
        'apikey' => '5d49748b',
        's' => 'x-men'
    ]
]);
$result = json_decode($response->getBody()->getContents(), true);

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Movie</title>
</head>

<body>
    <?php foreach ($result['Search'] as $m) : ?>
        <ul>
            <li>Title : <?= $m['Title'] ?></li>
            <li>Year : <?= $m['Year'] ?> </li>
            <li>
                <img src="<?= $m['Poster'] ?>" width="80">
            </li>
        </ul>
    <?php endforeach ?>
</body>

</html>