<?php

    if ($_POST["username"] === "" || $_POST["password"] === "") {
        header("Location: login.php");
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>yeay berhasil login</h1>
    <br>
    <?php
        $datas = [
            $_POST["username"], 
            $_POST["password"]
        ];
    ?>

    <ul>
        <?php foreach($datas as $data):?>
            <li>
                <?php echo $data?>
            </li>
        <?php endforeach;?>
    </ul>
</body>
</html>