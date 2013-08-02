<?php ?>
<!DOCTYPE html>
<html>
  <head>
    <title>KDL Metadata Guidelines</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet" media="screen">
    <link href="css/md_web_style.css" rel="stylesheet" media="all">
  </head>
  <body data-spy="scroll" data-target="#sidenav">

    <div class="container">
        <div class="row">

            <div id="sidenav" class="col-lg-3  affix">

                    <ul class="nav sidenav">
                    </ul>

            </div>
            
            <div class="col-lg-9 col-offset-3">

            <?php     
                include_once 'php-markdown-lib/Markdown.php';
                include_once 'php-markdown-lib/MarkdownExtra.php';
                use \Michelf\Markdown;
                use \Michelf\MarkdownExtra;
                $out = nl2br(file_get_contents('md_guidelines.md'));
                $out = MarkdownExtra::defaultTransform($out);
                echo $out;
            ?>

            </div>
        </div>
    </div>

    <!-- JavaScript plugins (requires jQuery) -->
    <script src="js/jquery-1.10.2.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>

    <!-- Optionally enable responsive features in IE8 -->
    <script src="js/respond.min.js"></script>
    <script src="js/main.js"></script>
    <script type="text/javascript">  $('#sidenav').scrollspy(); </script>
  </body>
</html>
