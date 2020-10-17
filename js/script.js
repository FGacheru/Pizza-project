// $ (document).ready (function(){
    function Pizza(type,size,crust,toping)

    this.type = type;
    this.size = size;
    this.crust = crust;
    this.toping = toping;



// });
$("form#newPizza").submit(function(click){
event.preventDefault()
var type = $("#type").val();
var size = $("#size").val();
var crust = $("#crust").val();
var toping = $("#toping").val();

var Pizza = new Pizza (type, size, crust, toping);

});