<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>
        <H1>hello world</H1>
    </body>

</html>

<?php

word_count("merry had a little lamb little lam little la");

function word_count($text, $sort = 'k')
{
    $cloud = array();

    $words = str_word_count($text, 1);

    foreach ($words as $word) {

        $cloud[$word] = substr_count($text, $word);
    }

    echo $cloud;
    return $cloud;
}