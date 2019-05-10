/*
https://developer.mozilla.org/en-US/docs/Web/Events
https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
*/

/*var b1 = document.getElementsByTagName("button")[0];

b1.addEventListener("mouseenter",function () {
    console.log("mouse entered !")
})*/

var button = document.getElementById("enter");
var ul=document.getElementsByTagName("ul")[0];
var input=document.getElementById("user-input");
var listItems=document.getElementsByTagName("li");
addEventonItems();


function inputLength()
{
    if(input.value.length>0)
        return true;
}

function createListElement()
{
    var li = document.createElement("li");
    li.append(document.createTextNode(input.value));
    ul.append(li);
    input.value='';
}
button.addEventListener("click",function () {

    if(inputLength())
    {
        createListElement();
    }
});

input.addEventListener("keypress",function(e)
{
    if(inputLength() && e.which===13)
    {
        createListElement();
    }
});

function addEventonItems() {
    for(var i=0;i<listItems.length;i++)
    {
        listItems[i].addEventListener("click",done);
    }
}

function done()
{
    this.classList.toggle("done");
}