<?php 
    try 
    {
        $bdd = new PDO('mysql:host=http://78.115.223.153/;dbname=mylevel;charset=utf8', 'ewanprnt','0');
    }catch(PDOException $e)
    {
        die('Erreur : '.$e->getMessage());
    }