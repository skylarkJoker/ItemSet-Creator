<?php require 'key.php'; ?>

<?php

// set HTTP header
$headers = array(
    'Content-Type: application/json',
);

// query string
$fields = array(
    'api_key' => $key
);
$url = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/item?' . http_build_query($fields);

// Open connection
$ch = curl_init();

// Set the url, number of GET vars, GET data
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, false);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true );

curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

// Execute request
$result = curl_exec($ch);

// Close connection
curl_close($ch);

// get the result and parse to JSON
$result_arr = json_decode($result, true);
$data = $result_arr['data'];
ksort($data);

foreach ($data as $key => $value) {  // echo $value['id']."\t";

  // var_dump($value['id']);
  echo '<li id="'.$value['id'] .'" class="item"><img src="http://ddragon.leagueoflegends.com/cdn/5.15.1/img/item/'.$value['id'] .'.png "></li>';

}



 ?>
