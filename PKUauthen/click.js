function click(){
    document.getElementById("logon_button").click();
}

function passwd(){
    var bt = document.getElementById("password")
    bt.style="-webkit-text-security:disc"
    bt.type=""
    bt.click()
}

passwd()

window.onload = function(){
    t=setTimeout("click()",1500);
};
