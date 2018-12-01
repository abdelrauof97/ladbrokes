
<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
<script>
  $.get("https://ipinfo.io", function(response) {
      country = response.country;
      region = response.region;
     if(country=="AU"){
       if (region == "Queensland" || region == "Northern Territory" || region == "Tasmania") {
         $(".section").first().show();
       } else {
         $(".section:nth-child(3)").show();
       }
       $(".section").last().show();
     } else {
       window.location.replace("https://www.thesportssurveys.com");
   }
  }, "jsonp");
</script>
