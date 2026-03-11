function Day(){

    var num = document.getElementById("day").value;
    var day;

    switch(Number(num)){

        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;

        default:
            day = "Invalid number";

    }

    document.getElementById("result").innerHTML = "Day is: " + day;

}