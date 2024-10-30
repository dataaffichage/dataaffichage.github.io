 var date = new Date();
    var heure = date.getHours();
        if (0 <= heure && heure <= 9) {
            var zeroheure = 0
        }
        else {
            var zeroheure = ""
        };
        var secondes = date.getSeconds();
        if (0 <= secondes && secondes <= 9) {
            var zerosecondes = 0
        }
        else {
            var zerosecondes = ""
        };
        var time = zeroheure + date.getHours() + ":" + date.getMinutes() + ":" + zerosecondes + date.getSeconds();
        var jour = date.getDate();
        if (0 <= jour && jour <= 9) {
            var zerojour = 0
        }
        else {
            var zerojour = ""
        };
        var mois = date.getMonth() + 1;
        if (0 <= mois && mois <= 9) {
            var zeromois = 0
        }
        else {
            var zeromois = ""
        };
        var datejour = zerojour + date.getDate () + "/" + zeromois + mois + "/" + date.getFullYear();
        var minutes = date.getMinutes();

        if (0 <= minutes && minutes <= 9) {
            var zerominutes = 0
        }
        else {
            var zerominutes = ""
        };

        var min = zerominutes + date.getMinutes ();
        var sec = zerosecondes + date.getSeconds();