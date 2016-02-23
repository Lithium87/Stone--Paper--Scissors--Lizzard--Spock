/**
 * Created by 8 on 1.2.2016 ã..
 */
function choice(source)
{
    var compChoice = document.createElement("img");
    compChoice.src = source;
    compChoice.width = "400";
    compChoice.height = "400";
    document.getElementById("images").appendChild(compChoice);
}
