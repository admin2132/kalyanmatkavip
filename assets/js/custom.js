$(document).ready(function () {
    $.get('/api/markets/games-list', function (returnedData) {
        $('#games-name').select2({
            placeholder: 'Select Game Name', data: returnedData
        });

        $('#game_name_winning_report').select2({
            placeholder: 'Select Game Name', data: returnedData
        });
        $('#bid_details_game_name').select2({
            placeholder: 'Select Game Name', data: returnedData
        });

        $('#win_history_game_name').select2({
            placeholder: 'Select Game Name', data: returnedData
        });


    }).fail(function () {
        console.log("error");
    });


    $.get('/api/markets/games-list', function (returnedData) {
        $('#bid_game_name').select2({
            placeholder: 'Select Game Name', data: returnedData
        });
        $('#game_name_winning_report').select2({
            placeholder: 'Select Game Name', data: returnedData
        });
    }).fail(function () {
        console.log("error");
    });

    $.get('/api/user/list', function (returnedData) {
        $('#user').select2({
            placeholder: 'Select User', data: returnedData
        });
    }).fail(function () {
        console.log("error");
    });

    $('#result_panel').select2();
    $('#starline_game').select2();


});

function showMe(i) {
    let value = i;
    sum = 0;

    while (value) {
        sum += value % 10;
        value = Math.floor(value / 10);
    }
    document.getElementById('result_digit').value = String(sum).substr(-1);

}
