<!doctype html>
<html lang="en" class="no-js">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <title>Campaign Manager</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <style type="text/css">
        [ng\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {
            display: none !important;
        }
        </style>

        <asset:stylesheet src="manager.css"/>
        <asset:stylesheet src="bootstrap/bootstrap.css"/>

        <asset:link rel="icon" href="favicon.ico" type="image/x-ico"/>

        <script type="text/javascript">
            window.contextPath = "${request.contextPath}";
        </script>
    </head>

    <body ng-app="worldManagerApp">
        <div class="col-md-12">
            <ul id="navigation">
                <li class="navigation"><a class="navigation" ui-sref="home">Home</a></li>
                <li class="navigation"><a class="navigation" ui-sref="campaigns">Campaigns</a></li>
                <li class="navigation"><a class="navigation" ui-sref="worlds">Worlds</a></li>
                <li class="navigation"><a class="navigation" ui-sref="about">About</a></li>
            </ul>
        </div>
        <br>
        <br>
        <br>
        <div ui-view></div>
        <asset:javascript src="/worldManager/bundle.js" />
    </body>
</html>
