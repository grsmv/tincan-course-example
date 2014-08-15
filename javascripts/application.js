/**
    This spaghetty written for demo purposes only. Please use MVC JavasScript
    frameworks instead of this way. Good example - AngularJS.
*/

function login () {
    var email = $("#email").val(),
        name  = $("#name").val();

    if (email.length > 0 && name.length > 0) {
        $("body").removeClass("no-access");
        localStorage.setItem("tincan-email", (_tincan.settings.auth.email = email));
        localStorage.setItem("tincan-name", (_tincan.settings.auth.name = name));
    }

    window.location.reload();
}

function logout () {
    localStorage.removeItem("tincan-email");
    localStorage.removeItem("tincan-name");
    $("body").addClass("no-access");
}

(function(){

    // side menu init
    $(".menu-toggler").sidr();

    // user state checking
    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem("tincan-email") === null ||
            localStorage.getItem("tincan-name")  === null) {
            $("body").addClass("no-access");
        } else {

            // auth init
            _tincan.settings.auth.name = localStorage.getItem("tincan-name");
            _tincan.settings.auth.email = localStorage.getItem("tincan-email");
        }
    } else {
        alert("Please, use modern browser");
    }

    // logging-in actions
    $("#cmon").submit(function () {
        login();
        return false;
    });

    $(".log-out").click(function () {
        logout();
    });
})();
