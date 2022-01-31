$(function () {


    $('#btnInput').click(function () {
        let data = {
            name: $("[data-role='name']").val(),
            adress: $("[data-role='adress']").val(),
            phone: $("[data-role='phone']").val(),
            isVip: $("[data-role='isVip']").prop("checked"),
        }
        $.post("/creating-client", {
            data
        }, function () {
            // console.log(Object.values(data));
            $('#Sends').append(Object.entries(data))
        })
    });

    $('#btnFindAll').click(function () {
        $.ajax({
            url: '/find-allClients',
            type: 'GET',
            success: function (result) {
                console.log(result);
                document.getElementById("getClient").textContent = JSON.stringify(result, undefined, 2);
            }
        });
    })

    $('#btnFindByid').click(function () {
        let clientName = $('[data-role="findById"]').val()
        $.ajax({
            url: '/clients/:id',
            method: 'PATCH',
            data: {
                _id: clientName
            },
            success: function (result) {
                console.log(result);
                document.getElementById("getClient").textContent = JSON.stringify(result, undefined, 2);
            }
        });
    })
})