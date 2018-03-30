$(document).ready(function(){
    $(function() {
        $( "#vacationStart, #vacationEnd" ).datepicker();
    });
    $('#submitBtn').click(function(){
        console.log('click submitted')
        var vacationStart = $('#vacationStart').val();
        var vacationEnd = $('#vacationEnd').val();
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var formArr = [vacationStart, vacationEnd, firstName, lastName];
        var formComplete = false;
        console.log(formArr);
        for(var i=0; i < formArr.length; i++) {
            if(formArr[i] === ''){
                $('#wrapper').prepend('<div id="formIncomplete" title="Error"><p>All form boxes need to be completed.</p></div>');
                $(function(){
                    $("#formIncomplete").dialog();
                })
                break;
            }else{
                formComplete = true;
            }
        }
        if(formComplete === true) {
            console.log('form complete')
            $('#wrapper').prepend('<div id="formComplete" title="Complete"><p>Thanks '+firstName+'! Your cruise leave on '+vacationStart+' and returns on '+vacationEnd+'!</p></div>');
            $(function(){
                $("#formComplete").dialog();
            })
        }
        return false;
    })
})