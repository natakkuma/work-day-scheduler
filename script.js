//VARIABLES

    //time
    var hour = moment().hours();
    var currentTime = parseInt($(this).attr("id"));

    //store information
    


//FUNCTION

    //Function - Display Current Day at Top
    $("#currentDay").text(moment().format('dddd, MMMM Do, YYYY'));

    // colorCode Function - Color-code Time Blocks based on Past, Present, Future
    function colorCode() {

        $(".time-block").each(function() {

            //if conditions - past, present, future
            //PRESENT
            if ( currentTime === hour) {
                $(this).addClass("present");
            }
            //FUTURE
            else if (currentTime < hour) {
                $(this).addClass("future");
            }
            //PAST
            else {
                $(this).addClass("past");
            }

        })


    };

    //Click Time Block to Enter Event

    //Click Save Button to Save Time Block (Text is saved in local storage)

    //Refresh Page and Saved Events are Still Displayed 

//ACTIONS

    //Color Blocks
    colorCode();