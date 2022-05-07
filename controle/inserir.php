<?php
header('Content-Type: application/json');

$name = $_POST['name'];
$comment = $_POST['comment'];

$pdo = new PDO('mysql:host=localhost; dbname=bd-comment;', 'root', '');
$stmt = $pdo->prepare("INSERT INTO comments (name, comment) VALUES (:a, :b)");
$stmt->bindValue(':a', $name);
$stmt->bindValue(':b', $comment);
$stmt->execute();

if ($stmt->rowCount() >= 1) {
    echo json_encode('Comentário salvo com sucesso!');
} else {
    echo json_encode('Falha ao salvar o comentário');
}

// * A melhor forma de interagir php com javascript é com o json, sendo assim, transformamos as mensagens em json