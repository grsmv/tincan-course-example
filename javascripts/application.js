/**
    WARNING | ACHTUNG | POZOR | УВАГА
    ---------------------------------
    This spaghetty written for demo purposes only. Please use MVC JavasScript
    frameworks instead of this way. Good example - AngularJS.
*/

window.tincan = tincanInit(); // Douglas Crockford, sorry

function login () {
    var email    = $("#email").val(),
        name     = $("#name").val(),
        password = $("#password").val();

    if (password.length > 0 && email.length > 0 && name.length > 0) {
        $("body").removeClass("no-access");
        localStorage.setItem("tincan-email",    email);
        localStorage.setItem("tincan-name",     name);
        localStorage.setItem("tincan-password", password);

        window.tincan = tincanInit();
    } else {
        alert ("email, name or password can not be empty");
    }
}

function logout () {
    localStorage.clear();
    $("body").addClass("no-access");
    window.tincan = {};
}

function tincanInit () {
    var key = "1e45dbda-67c8-43ae-5583-5a5af7ee37c7";

    return new TinCan ({
        recordStores: [{
            endpoint: "http://localhost:8000/" + key,
            username: localStorage.getItem("tincan-email"),
            password: localStorage.getItem("tincan-password")
        }]
    });
}


(function(){

    // side menu init
    $(".menu-toggler").sidr();

    if (/display-sharing-statistics/.test(window.location.hash)) {
        $("body").addClass("highlighted");
    }

    // user state checking
    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem("tincan-email")    === null ||
            localStorage.getItem("tincan-password") === null ||
            localStorage.getItem("tincan-name")     === null) {
            $("body").addClass("no-access");
        } else {

            // ------------ activity description -------------

            tincan.sendStatement({
                actor: {
                    mbox: localStorage.getItem("tincan-email"),
                    name: localStorage.getItem("tincan-name")
                },
                verb: {
                    id: "http://adlnet.gov/expapi/verbs/attempted",
                    display: {
                        "en-US": "attempted"
                    }
                },
                object: {
                    id: "http://course.tincanlrs.net",
                    objectType: "Activity",
                    definition: {
                        name: {
                            "en-US": "Section opening"
                        },
                        description: {
                            "en-US": window.location.toString()
                        }
                    }
                }
            });

            // ------------ activity description -------------

            // initializing scroll depth tracking
            $.scrollDepth();
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
