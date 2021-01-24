document.write('\
    <!--Bootstrap css file-->\
    <link rel="stylesheet" href="./css/bootstrap.min.css">\
    <!--custom css-->\
        <link rel="stylesheet" type="text/css" href="./css/grid.css">\
    <link rel="stylesheet" href="./css/style.css">\
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" color>\
        <div class="container-fluid">\
          <a class="navbar-brand">Vyvy-vi</a>\
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\
            <span class="navbar-toggler-icon"></span>\
          </button>\
          <div class="collapse navbar-collapse" id="navbarSupportedContent">\
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">\
              <li class="nav-item">\
                <a class="nav-link active" aria-current="page" href="./index.html">Home |</a>\
              </li>\
              <li class="nav-item">\
                <a class="nav-link" href="./projects.html">Projects |</a>\
              </li>\
              <li class="nav-item">\
                <a class="nav-link" href="./socials.html">Socials |</a>\
              </li>\
            </ul>\
          </div>\
        </div>\
      </nav>\
      <div class="trail">\
        <div class="pointer pointer1"></div>\
        <div class="pointer pointer2"></div>\
        <div class="pointer pointer3"></div>\
        <div class="pointer pointer4"></div>\
        <div class="pointer pointer5"></div>\
      </div>\
      <script src="https://code.jquery.com/jquery-3.3.1.js"></script>\
      <script type="text/javascript">\
        $(document).mousemove(function(e){$(".pointer").css({left:e.pageX, top:e.pageY});})\
      </script>\
');

/*               <li class="nav-item">\
<a class="nav-link" href="./contact.html">Contact |</a>\
</li>\
*/