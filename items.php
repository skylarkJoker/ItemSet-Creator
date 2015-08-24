<?php
include('php-riot-api.php');
include('FileSystemCache.php');


$Cache = new riotapi('na', new FileSystemCache('cache/'));
//$r = $test->getSummonerByName($summoner_name);
//$r = $test->getSummoner($summoner_id);
//$r = $test->getSummoner($summoner_id,'masteries');
//$r = $test->getSummoner($summoner_id,'runes');
//$r = $test->getSummoner($summoner_id,'name');
//$r = $test->getStats($summoner_id);
//$r = $test->getStats($summoner_id,'ranked');
//$r = $test->getTeam($summoner_id);
//$r = $test->getLeague($summoner_id);
//$r = $test->getGame($summoner_id);
//$r = $test->getChampion();
$call  = 'item?';

try {
    $r = $Cache->getStatic($call);
    echo($r);
} catch(Exception $e) {
    echo "Error: " . $e->getMessage();
};

?>
