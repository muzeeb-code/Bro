<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $language = $_POST['language'];
    // Example: Save to session or database
    session_start();
    $_SESSION['preferred_language'] = $language;
    echo "Language preference saved: " . htmlspecialchars($language);
}
?>
