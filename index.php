<?php ?>
<!DOCTYPE html>
<html>
  <head>
    <title>KDL Metadata Guidelines</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet" media="screen">
  </head>
  <body>

    <div class="col-lg-8 col-offset-2">

    <?php     
    include_once 'Michelf/Markdown.php';
    include_once 'Michelf/MarkdownExtra.php';
    use \Michelf\Markdown;
    use \Michelf\MarkdownExtra;
    $out = nl2br(file_get_contents('md_guidelines.md'));
    $out = MarkdownExtra::defaultTransform($out);
    echo $out;
    ?>

    </div>
    <!-- JavaScript plugins (requires jQuery) -->
    <script src="http://code.jquery.com/jquery.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>

    <!-- Optionally enable responsive features in IE8 -->
    <script src="js/respond.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
