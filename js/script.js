

// $(document).ready(function () {
//     function Pizaa(ytypes, crust, toping, size) {
//         this.ytypes = ytypes
//         this.crust = crust;
//         this.toping = toping;
//         this.size = size;

       
//     };
//     var newOrder = [];
//     var total = 0;

//     $("#proceed").submit(function (event) {
//         event.preventDefault();
//         var ytypes = $("input#ytypes").val();
//         var crust = $("input#crust").val();
//         var toping = $("input#toping").val();
//         var size = $("input#size").val();
//         var pizza = new Pizaa(ytypes, crust, toping, size)

//         newOrder.push(pizza)
//         console.log(newOrder)
//         $("input#ytypes").val("")
//         $("input#crust").val("");
//         $("input#toping").val("");
//         $("input#size").val("");
//     });



//     Pizaa.prototype.topingPrice = function () {
//         if (this.crust === "stLouis") {
//             if (this.topping === "extraCheese") {
//                 return 150
//             } else
//             if (this.topping === "blackOlives") {
//                 return 200
//             } else if (this.topping === "greenPeppers") {
//                 return 250
//             } else {
//                 return 300
//             }
//         } else
//         if (this.crust === "neapolitan") {
//             if (this.topping === "extraCheese") {
//                 return 150
//             } else
//             if (this.topping === "blackOlives") {
//                 return 200
//             } else if (this.topping === "greenPeppers") {
//                 return 250
//             } else {
//                 return 300
//             }
//         } else
//         if (this.crust === "newYork") {
//             if (this.topping === "extraCheese") {
//                 return 150
//             } else
//             if (this.topping === "blackOlives") {
//                 return 200
//             } else if (this.topping === "greenPeppers") {
//                 return 250
//             } else {
//                 return 300
//             }
//         } else
//         if (this.crust === "stuffedCrust") {
//             if (this.topping === "extraCheese") {
//                 return 150
//             } else
//             if (this.topping === "blackOlives") {
//                 return 200
//             } else if (this.topping === "greenPeppers") {
//                 return 250
//             } else {
//                 return 300
//             }
//         }

//     }

//     Pizaa.prototype.sizePrize = function () {
//         if (this.crust === "stLouis") {
//             if (this.size === "large") {
//                 return 150
//             } else
//             if (this.size === "medium") {
//                 return 200
//             } else if (this.size === "small") {
//                 return 250
//             } else {
//                 return 300
//             }
//         } else
//         if (this.crust === "neapolitan") {
//             if (this.size === "large") {
//                 return 150
//             } else
//             if (this.size === "medium") {
//                 return 200
//             } else if (this.size === "small") {
//                 return 250
//             } else {
//                 return 300
//             }
//         } else
//         if (this.crust === "newYork") {
//             if (this.size === "large") {
//                 return 150
//             } else
//             if (this.size === "medium") {
//                 return 200
//             } else if (this.size === "small") {
//                 return 250
//             } else {
//                 return 300
//             }
//         } else
//         if (this.crust === "stuffedCrust") {
//             if (this.size === "large") {
//                 return 150
//             } else
//             if (this.size === "medium") {
//                 return 200
//             } else if (this.size === "small") {
//                 return 250
//             } else {
//                 return 300
//             }
//         }

//     }

//     Pizaa.prototype.typePrize = function () {
//         if (this.crust === "stLouis") {
//             if (this.size === "cheese") {
//                 return 150
//             } else
//             if (this.size === "veggie") {
//                 return 200
//             } else if (this.size === "meat") {
//                 return 250
//             } else {
//                 return 300
//             }
//         } else
//         if (this.crust === "neapolitan") {
//             if (this.size === "cheese") {
//                 return 150
//             } else
//             if (this.size === "veggie") {
//                 return 200
//             } else if (this.size === "meat") {
//                 return 250
//             } else {
//                 return 300
//             }
//         } else
//         if (this.crust === "newYork") {
//             if (this.size === "cheese") {
//                 return 150
//             } else
//             if (this.size === "veggie") {
//                 return 200
//             } else if (this.size === "meat") {
//                 return 250
//             } else {
//                 return 300
//             }
//         } else
//         if (this.crust === "stuffedCrust") {
//             if (this.size === "cheese") {
//                 return 150
//             } else
//             if (this.size === "veggie") {
//                 return 200
//             } else if (this.size === "meat") {
//                 return 250
//             } else {
//                 return 300
//             }
//         }

//     }


//     Pizaa.prototype.totalPrice = function () {
//         return this.topingPrice() + this.sizePrize() + this.typePrize()
        
//     }
//     total = newOrder.totalPrice();

// });



$(document).ready(function () {
    function Pizza(ytype, crust, topping, size) {
        this.ytypes = ytype;
        this.crust = crust;
        this.topping = topping;
        this.size = size;
    }
    var totalAmount = 0;
    var newOrder = [];


    $("#proceed").submit(function (event) {
        event.preventDefault();
        var ytype = $("#ytype").val();
        var crust = $("#crust").val();
        var size = $("#size").val();
        var topping = $("#topping").val();
        var newPizza = new Pizza(ytype,crust,topping,size);
        newOrder.push(newPizza);
        
        $("#ytype").val("");
        $("#crust").val("");
        $("#size").val("");
        $("#topping").val("");


    Pizza.prototype.toppingPrize = function () {
        Pizaa.prototype.topingPrice = function () {
            if (this.crust === "stLouis") {
                if (this.topping === "extraCheese") {
                    return 150
                } else
                if (this.topping === "blackOlives") {
                    return 200
                } else if (this.topping === "greenPeppers") {
                    return 250
                } else {
                    return 300
                }
            } else
            if (this.crust === "neapolitan") {
                if (this.topping === "extraCheese") {
                    return 150
                } else
                if (this.topping === "blackOlives") {
                    return 200
                } else if (this.topping === "greenPeppers") {
                    return 250
                } else {
                    return 300
                }
            } else
            if (this.crust === "newYork") {
                if (this.topping === "extraCheese") {
                    return 150
                } else
                if (this.topping === "blackOlives") {
                    return 200
                } else if (this.topping === "greenPeppers") {
                    return 250
                } else {
                    return 300
                }
            } else
            if (this.crust === "stuffedCrust") {
                if (this.topping === "extraCheese") {
                    return 150
                } else
                if (this.topping === "blackOlives") {
                    return 200
                } else if (this.topping === "greenPeppers") {
                    return 250
                } else {
                    return 300
                }
            }
    
        }
    
        Pizaa.prototype.sizePrize = function () {
            if (this.crust === "stLouis") {
                if (this.size === "large") {
                    return 150
                } else
                if (this.size === "medium") {
                    return 200
                } else if (this.size === "small") {
                    return 250
                } else {
                    return 300
                }
            } else
            if (this.crust === "neapolitan") {
                if (this.size === "large") {
                    return 150
                } else
                if (this.size === "medium") {
                    return 200
                } else if (this.size === "small") {
                    return 250
                } else {
                    return 300
                }
            } else
            if (this.crust === "newYork") {
                if (this.size === "large") {
                    return 150
                } else
                if (this.size === "medium") {
                    return 200
                } else if (this.size === "small") {
                    return 250
                } else {
                    return 300
                }
            } else
            if (this.crust === "stuffedCrust") {
                if (this.size === "large") {
                    return 150
                } else
                if (this.size === "medium") {
                    return 200
                } else if (this.size === "small") {
                    return 250
                } else {
                    return 300
                }
            }
    
        }
    
        Pizaa.prototype.typePrize = function () {
            if (this.crust === "stLouis") {
                if (this.size === "cheese") {
                    return 150
                } else
                if (this.size === "veggie") {
                    return 200
                } else if (this.size === "meat") {
                    return 250
                } else {
                    return 300
                }
            } else
            if (this.crust === "neapolitan") {
                if (this.size === "cheese") {
                    return 150
                } else
                if (this.size === "veggie") {
                    return 200
                } else if (this.size === "meat") {
                    return 250
                } else {
                    return 300
                }
            } else
            if (this.crust === "newYork") {
                if (this.size === "cheese") {
                    return 150
                } else
                if (this.size === "veggie") {
                    return 200
                } else if (this.size === "meat") {
                    return 250
                } else {
                    return 300
                }
            } else
            if (this.crust === "stuffedCrust") {
                if (this.size === "cheese") {
                    return 150
                } else
                if (this.size === "veggie") {
                    return 200
                } else if (this.size === "meat") {
                    return 250
                } else {
                    return 300
                }
            }
        }
        }
    
        Pizaa.prototype.totalPrice = function () {
            return this.toppingPrize() + this.sizePrize() + this.typePrize()
    }
    

    


        for (let i = 0; i < newOrder.length; i++) {
            totalAmount += newOrder[i].pizzaPrice();
        }
        $("#proceed").append(
            "<tr>" +
            '<th scope="row">' +
            newPizza.type +
            " - " +
            newPizza.size +
            "  @ " +
            newPizza.typePrize() +
            "</th>" +
            "<td>" +
            newPizza.toppings +
            " @ " +
            newPizza.toppingPrize() +
            "</td>" +
            "<td>" +
            newPizza.crust +
            " @ " +
            newPizza.crustPrize() +
            "</td>" +
            "<td>" +
            newPizza.totalPrice() +
            "</td>" +
            "</tr>"
        );
        $("#proceed").append("");
        if (newOrder.length > 0) {
            $("#form-title").empty();
            $("#form-title").append("Add Another Order");
        }

        $("#finalAmount").fadeIn();
        $("#proceed").fadeIn();
        $("#orders-div").fadeIn();

        $("#finalAmount").empty();
        $("#finalAmount").append(totalAmount);
        $(".finalAmount").show();
    });
    $("#checkout").click(function () {
        $(".checkout-options").show();
    });

    $("#checkout-form").submit(function (event) {
        event.preventDefault();
        var name = $("#name").val();
        var deliveryOption = $("#delivery-option").val();
        customerName = name;
        $("#name").val("");
        $("#delivery-option").val("");
        $(".checkout-options").hide();
        $("#checkout").hide();
        $("#finalAmount").empty();
        if (deliveryOption === "deliver") {
            $(".location").show();
            $(".delivery-cost").show();
            $("#finalAmount").empty();
            $("#delivery-amount").append(300);
            totalAmount += 300;
            $("#finalAmount").empty();
            $("#finalAmount").empty();
        $("#finalAmount").append(totalAmount);
        $(".finalAmount").show();

            $("#finalAmount").append(totalAmount);
        } else {
            alert(customerName + ": Your total bill is Ksh. " + totalAmount + ". Your order will be ready for collection in the next one hours");
        }
    });

    $("#location-form").submit(function (event) {
        event.preventDefault();
        var estateEntered = $("#estate").val();
        var houseNumberEntered = $("#house-number").val();
        estate = estateEntered;
        houseNumber = houseNumberEntered;
        $("#checkout").hide();
        $(".location").hide();
        $("#finalAmount").empty();
        $("#finalAmount").append(totalAmount);
        $(".finalAmount").show();
        alert(customerName + ": Your total bill is Ksh. " + totalAmount + ". Your order will be delivered to " + estate + ", " + houseNumber + " in the next one hours");
    });
    $("#contacts").submit(function (event) {
        event.preventDefault();
        var name1 = $("#form1").val();
        var email1 = $("#form2").val();
        var message1 = $("#form3").val();
        alert("Hello! " + name1 + "," + " We have received your message. Thank you for reaching out to us. ");

    });
    
 });