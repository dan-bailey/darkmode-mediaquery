//Function to the css rule
function checkMode(){
    if ($(".detectorClass").css("color") == "black" ){
        // your dark mode code here
        $("#modePara").text("Dark mode?");
    } else {
        // probably light mode
        $("#modePara").text("Light mode?");
    }
}