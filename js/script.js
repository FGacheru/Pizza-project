//  $ (document).ready (function(){
// function Pizza(types, size, crust, toping) {

//     this.types = types;
//     this.size = size;
//     this.crust = crust;
//     this.toping = toping;
// }
// var newOrder = [];
// var amount = 0;


//  });
// $("form#proceed").submit(function (event) {
//     event.preventDefault()
//     var types = $("#types").val();
//     var size = $("#size").val();
//     var crust = $("#crust").val();
//     var toping = $("#toping").val();

//     var pizza = new Pizza(types, size, crust, toping);
//     newOrder.push(pizza)

//     $("#types").val("");
//     $("#size").val("");
//     $("#crust").val("");
//     $("#toping").val("");
//     console.log(newOrder)

//     $("#myOrder").append(

//     )



//     Pizza.prototype.priceList = function () {
//         if (this.types === cheese && size === large && crust === St.Louis)
//             return (1200)
//         else if (types === cheese && size === medium && crust === stLouis) {
//             return (1000)
//         } else if (types === cheese && size === small && crust === stLouis) {
//             return (850)
//         } else if (types === cheese && size === large && crust === neapolitan) {
//             return (1150)
//         } else if (types === cheese && size === medium && crust === neapolitan) {
//             return (950)
//         } else if (types === cheese && size === small && crust === neapolitan) {
//             return (800)
//         } else if (types === cheese && size === large && crust === newYork) {
//             return (1200)
//         } else if (types === cheese && size === medium && crust === newYork) {
//             return (950)
//         } else if (types === cheese && size === small && crust === newYork) {
//             return (850)
//         } else if (types === cheese && size === large && crust === stuffedCrust) {
//             return (1150)
//         } else if (types === cheese && size === medium && crust === stuffedCrust) {
//             return (900)
//         } else if (types === cheese && size === small && crust === stuffedCrust) {
//             return (750)
//         } else if (types === veggie && size === large && crust === St.Louis) {
//             return (1150)
//         } else if (types === veggie && size === medium && crust === stLouis) {
//             return (900)
//         } else if (types === veggie && size === small && crust === stLouis) {
//             return (750)
//         } else if (types === veggie && size === large && crust === neapolitan) {
//             return (1000)
//         } else if (types === veggie && size === medium && crust === neapolitan) {
//             return (800)
//         } else if (types === veggie && size === small && crust === neapolitan) {
//             return (650)
//         } else if (types === veggie && size === large && crust === newYork) {
//             return (1200)
//         } else if (types === veggie && size === medium && crust === newYork) {
//             return (1000)
//         } else if (types === veggie && size === small && crust === newYork) {
//             return (850)
//         } else if (types === veggie && size === large && crust === stuffedCrust) {
//             return (1100)
//         } else if (types === veggie && size === medium && crust === stuffedCrust) {
//             return (850)
//         } else if (types === veggie && size === small && crust === stuffedCrust) {
//             return (600)
//         } else if (types === meat && size === large && crust === St.Louis) {
//             return (1000)
//         } else if (types === meat && size === medium && crust === stLouis) {
//             return (800)
//         } else if (types === meat && size === small && crust === stLouis) {
//             return (600)
//         } else if (types === meat && size === large && crust === neapolitan) {
//             return (950)
//         } else if (types === meat && size === medium && crust === neapolitan) {
//             return (750)
//         } else if (types === meat && size === small && crust === neapolitan) {
//             return (550)
//         } else if (types === meat && size === large && crust === newYork) {
//             return (1200)
//         } else if (types === meat && size === medium && crust === newYork) {
//             return (100)
//         } else if (types === meat && size === small && crust === newYork) {
//             return (850)
//         } else if (types === meat && size === large && crust === stuffedCrust) {
//             return (1150)
//         } else if (types === meat && size === medium && crust === stuffedCrust) {
//             return (950)
//         } else if (types === meat && size === small && crust === stuffedCrust) {
//             return (750)
//         }


//         $("#proceed").click(function () {


//         });
//     };
//     Pizza.prototype.total = function () {

//     }
//     amount =
// });




$(Document).ready(function () {
    function Pizaa(types, crust, toping, size) {
        this.types = types
        this.crust = crust;
        this.toping = toping;
        this.size = size;
        var newOrder = [];
        var total = [0];
    };

    $("form#proceed").submit(function (event) {
        event.preventDefault();
        var types = $("#types").val();
        var crust = $("#crust").val();
        var toping = $("#toping").val();
        var size = $("#size").val();
        var pizza = new Pizaa(types, crust, toping, size)

        newOrder.push(pizza)
        $("#types").val("")
        $("#crust").val("");
        $("#toping").val("");
        $("#size").val("");
        console.log(newOrder)
    });



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
        }else
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
        }else
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

    Pizza.prototype.typePrize = function(){
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
        }else
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


  Pizaa.prototype.totalPrice = function () {
        return this.topingPrice() + this.sizePrize() + this.typePrize()
    }
    total = newOrder.totalPrice();

});