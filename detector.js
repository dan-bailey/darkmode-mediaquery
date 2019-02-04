//Function to the css rule
function checkMode(){
    if ($(".detectorClass").css("float") == "right" ){
        // your dark mode code here
        $("#modePara").text("Dark mode!");
    } else {
        // your light mode code goes here
        $("#modePara").text("Light mode!");
    }
}