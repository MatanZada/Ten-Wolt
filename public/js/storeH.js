$(function () {

    $('#btnStore').click(function () {
        let data = {
            name: $('[data-role="name"]').val(),
            adress: $('[data-role="address"]').val(),
            phone: $("[data-role='phone']").val(),
        }
        $.post("/creating-store", {
            data
        }, function () {
            // console.log(Object.values(data));
            $('#dataStore').append(Object.entries(data))
        })
    });

    $('#btnFindAll').click(function () {
        $.ajax({
            url: '/find-allStore',
            type: 'GET',
            success: function (result) {
                console.log(result);
                document.getElementById("getStore").textContent = JSON.stringify(result, undefined, 2);
            }
        });
    })

    $('#btnFindName').click(function () {
        let storeName = $('data-role="findById"').val()
        $.ajax({
            url: '/store/:name',
            method: 'PATCH',
            data: {
                name: storeName
            },
            success: function (result) {
                console.log(result);
                document.getElementById("findByName").textContent = JSON.stringify(result, undefined, 2);
            }
        });
    })
})