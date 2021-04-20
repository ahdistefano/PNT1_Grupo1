$(document).ready(function () {
    if (sessionStorage.getItem('#FirstTime') !== 'true') {
        $('#FirstTime').modal('show');
        sessionStorage.setItem('#FirstTime', 'true');
    }
});