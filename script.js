//VARIABLES

    //time
    var hour = moment().hours();
    var currentTime = parseInt($(this).attr("id"));

    //save button
    var saveBtn = $(".saveBtn");
    
    
    


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

    //Click Time Block to Enter Event - via <text area> in HTML

    //saveBtn - Click Save Button to Save Time Block Event (Text is saved in local storage)

    saveBtn.on("click", function(){

        //information to be stored
        var time = $(this).siblings(".hour").text();
        var eventDescription =$(this).siblings(".description").val();

        //save time and event into local storage
        localStorage.setItem(time, eventDescription);

    })

  

    //storeEvent Function - Refresh Page and Saved Events are Still Displayed 
    function storeEvent() {

        $(".hour").each(function(){
            var currentTime = $(this).text();
            var savedEvent = localStorage.getItem(currentTime);

            //show value if saved event found
            if (savedEvent !== null) {
                $(this).siblings(".description").val(savedEvent);
            }
        })

    }

//ACTIONS

    //Color Blocks
    colorCode();

    //Event Loacal Store
    storeEvent();