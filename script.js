// ================= اسکرول نرم =================

var links = document.querySelectorAll("a[href^='#']");

for (var i = 0; i < links.length; i++) {

    links[i].addEventListener("click", function(event) {

        var target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}


// ================= سال فوتر =================

var footer =
    document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        "© " +
        new Date().getFullYear() +
        " کدنویسی آسان | تمامی حقوق محفوظ است.";

}
// ================= ارسال پیام =================

function sendMessage(event) {

    event.preventDefault();

    var name =
        document.getElementById("name").value;

    var result =
        document.getElementById("message-result");


    result.innerHTML =
        "✅ ممنون " +
        name +
        "! پیام شما با موفقیت ثبت شد.";

    document.getElementById("name").value = "";

    document.getElementById("email").value = "";

    document.getElementById("message").value = "";

}