(function () {
    $(document).ready(function () {

        $('#userList').DataTable()
        $('#starline_games').DataTable();
        $('#allTransactionTable').DataTable();
        $('#inTransactionTable').DataTable();
        $('#outTransactionTable').DataTable();
        $('#user_fund_deposit').DataTable();
        $('#withdrawTable').DataTable();
        $('#bidHistoryTable').DataTable();
        $('#winsHistory').DataTable();
        $('#gameNameList').DataTable({
            "ordering": false
        });
        $('#withdrawReqList').DataTable();
        $('#main_game_result_history').DataTable();
        $('#autoDepositHistory').DataTable({

        });

        $("#datatable").DataTable(), $("#datatable-buttons").DataTable({
            lengthChange: !1,
            buttons: ["copy", "excel", "pdf", "colvis"]
        }).buttons().container().appendTo("#datatable-buttons_wrapper .col-md-6:eq(0)"), $(".dataTables_length select").addClass("form-select form-select-sm");
    });
})();