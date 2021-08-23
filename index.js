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
                $("#res").html("<b class='text-danger'>An error occured, Please try again !</b>");
                $("#submit b").html("Submit");
                $("#submit").attr("disabled", false);
            },
            200: () => {
                $("#res").html("<b style='color:white'>Thank you for contacting me !</b>");
                $("#email").val("");
                $("#message").val("");
                $("#submit b").html("Submit");
                $("#submit").attr("disabled", false);
            }
        }
    });
});
