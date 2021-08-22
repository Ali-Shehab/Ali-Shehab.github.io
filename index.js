const pages = {
    'Home': 'index.html',
    'Posts': 'posts.html',
    'Contact': 'contact.html'
};


const removeCaret = () => $("#cur").removeClass("logo__cursor");

$("#pageIn").change(function (e) {
    e.preventDefault();
    $("#cur").removeClass("logo__cursor");
    const to = e.target.value;
    window.location.href = pages[to];
});

$("#contact").submit(async e => {
    e.preventDefault();
    const email = $("#email").val(), message = $("#message").val();

    $("#submit b").html("Sending");
    $("#submit").attr("disabled", true);

    await $.ajax({
        type: "POST",
        url: "https://contact-ali-shehab.herokuapp.com/",
        data: { email: email, message: message },
        statusCode: {
            400: () => {
                alert("NO Ok");
                $("#submit b").html("Submit");
                $("#submit").attr("disabled", false);
            },
            200: () => {
                alert("ok");
                $("#email").val("");
                $("#message").val("");
                $("#submit b").html("Submit");
                $("#submit").attr("disabled", false);
            }
        }
    });
});