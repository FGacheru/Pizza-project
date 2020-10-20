const prices = {
  flavour: {
    veggie: 800,
    meat: 750,
    cheese: 700,
  },
  size: {
    large: 200,
    medium: 150,
    small: 100,
  },
  crust: {
    new_york: 100,
    st_louis: 100,
    neapolitan: 70,
    stuffed_crust: 150,
  },
  topping: {
    extra_cheese: 100,
    black_olives: 120,
    green_pepper: 150,
  },
};
const nameMapper = {
  extra_cheese: "Extra Cheese",
  black_olives: "Black Olives",
  green_pepper: "Green Pepper",
  new_york: "New York",
  st_louis: "St. Louis",
  neapolitan: "Neapolitan",
  stuffed_crust: "Stuffed Crust",
  veggie: "Veggie",
  meat: "Meat",
  cheese: "Cheese",
  small: "Small",
  large: "Large",
  medium: "Medium",
};
$(document).ready(function () {
  function Pizza(flavour, crust, topping, size, price) {
    this.flavour = flavour;
    this.crust = crust;
    this.topping = topping;
    this.size = size;
    this.price = price;
  }
  // var totalAmount = 0;
  var newOrder = [];

  $("#proceed").submit(function (event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const flavour = form.get("ytype");
    const crust = form.get("crust");
    const topping = form.get("topping");
    const size = form.get("size");
    const pizzaPrice =
      prices.flavour[flavour] +
      prices.crust[crust] +
      prices.topping[topping] +
      prices.size[size];
    const newPizza = new Pizza(flavour, crust, topping, size, pizzaPrice);
    $("#ytype").val("")
    $("#crust").val("")
    $("#topping").val("")
    $("#size").val("")


    newOrder.push(newPizza);
    const data = `
   <tr>
    <td>${nameMapper[newPizza.flavour]}</td>
    <td>${nameMapper[newPizza.topping]}</td>
    <td>${nameMapper[newPizza.crust]}</td>
    <td>${nameMapper[newPizza.size]}</td>
    <td>${newPizza.price}</td>   
   </tr>`;
    $("#order-summary").append(data);
    totalAmount = newOrder.reduce((pv, cv) => pv + cv.price, 0);
    console.log(totalAmount)
    $("#finalAmount").empty();
    $("#finalAmount").append(totalAmount);
    $(".finalAmount").show();
  });
  $("#proceed").click(function () {
    $(".checkout-options").show();
    $("#checkout-form").show();
  });

  $("#checkout-form").submit(function (event) {
    event.preventDefault();
    var name = $("#name").val();
    var deliveryOption = $("#delivery-option").val();
    customerName = name;
    $("#name").val("");
    $("#delivery-option").val("");
    $(".checkout-options").hide();
    // $("#proceed").hide();
    $("#finalAmount").empty();
    if (deliveryOption === "deliver") {
      $(".location").show();
      $(".delivery-cost").show();
      $("#finalAmount").empty();
      $("#delivery-amount").append(300);
      totalAmount += 300;
      $("#finalAmount").empty();
      // $("#finalAmount").empty();
      $("#finalAmount").append(totalAmount);
      $(".finalAmount").show();

      // $("#finalAmount").append(totalAmount);
    } else {
      alert(
        customerName +
          ": Your total bill is Ksh. " +
          totalAmount +
          ". Your order will be ready for collection in the next one hours"
      );
    }
  });

  $("#location-form").submit(function (event) {
    event.preventDefault();
    var estateEntered = $("#estate").val();
    var houseNumberEntered = $("#house-number").val();
    estate = estateEntered;
    houseNumber = houseNumberEntered;
    $("#proceed").show();
    $(".location").hide();
    $("#finalAmount").empty();
    $("#finalAmount").append(totalAmount);
    $(".finalAmount").show();
    alert(
      customerName +
        ": Your total bill is Ksh. " +
        totalAmount +
        ". Your order will be delivered to " +
        estate +
        ", " +
        houseNumber +
        " in the next one hour"
    );
  });
  $("#contacts").submit(function (event) {
    event.preventDefault();
    var name1 = $("#form1").val();
    var email1 = $("#form2").val();
    var message1 = $("#form3").val();
    alert(
      "Hello! " +
        name1 +
        "," +
        " We have received your message. Thank you for reaching out to us. "
    );
  });
});
