/**
    WARNING | ACHTUNG | POZOR | УВАГА
    ---------------------------------
    This spaghetty writen for demo purposes only. Please use MVC JavasScript
    frameworks instead of this way. Good example - AngularJS.
    Thank you and let the Force be with you.
*/

function login () {
    var email    = $("#email").val(),
        password = $("#password").val();

    if (password.length > 0 && email.length > 0) {
        $("body").removeClass("no-access");
        localStorage.setItem("tincan-email",    email);
        localStorage.setItem("tincan-password", password);
    } else {
        alert ("email or password can not be empty");
    }
}

function logout () {
    localStorage.clear();
    $("body").addClass("no-access");
}

(function(){

    // side menu init
    $(".menu-toggler").sidr();

    if (typeof(Storage) !== "undefined") {
        var email    = localStorage.getItem("tincan-email"),
            password = localStorage.getItem("tincan-password");

        // unauthorized user
        if (email === null || password === null) {
            $("body").addClass("no-access");
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
