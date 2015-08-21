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
$url = 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/item?itemListData=consumed&' . http_build_query($fields);

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

  //var_dump($value['consumed']);

  if(array_key_exists("consumed", $value)){
    echo '<li class="item" id="'.$value['id'] .'" data-item-name="'.$value['name'] .'" data-consumed="'.$value['consumed'] .'" data-counter= 0><img src="http://ddragon.leagueoflegends.com/cdn/5.16.1/img/item/'.$value['id'] .'.png "></li>';
  }
  else{
   echo '<li class="item" id="'.$value['id'] .'" data-item-name="'.$value['name'] .'" ><img src="http://ddragon.leagueoflegends.com/cdn/5.16.1/img/item/'.$value['id'] .'.png "></li>';
  }
}



 ?>
