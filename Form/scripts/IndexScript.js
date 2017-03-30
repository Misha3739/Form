$(document).ready(function () {

    $("#symbolBtn").click(function () {
        var i = Math.floor((Math.random() * symbols.length));
        var randomSymbol = symbols[i].code;
        $("#textId")[0].value += strip(randomSymbol);
    });


    $("input.table-input").change(function () {
        if (this.id.toLowerCase().includes('price') || this.id.toLowerCase().includes('amount')) {
            var parent = this.parentElement;
            var id = parent.id.substr(parent.id.indexOf('_') + 1);
            var priceCtrl = $("#price_" + id).find('.table-input');
            var amountCtrl = $("#amount_" + id).find('.table-input');
            var price = priceCtrl[0].value;
            var amount = amountCtrl[0].value;
            $("#total_" + id).html(price * amount);
        }
        console.log("Input changed:" + this.value);
    });
});


var symbols = [
{ code: "&#176", id: 176 },
{ code: "&#186", id: 186 },
{ code: "&#185", id: 185 },
{ code: "&#178", id: 178 },
{ code: "&#179", id: 179 },
{ code: "&#8308", id: 2074 },
{ code: "&#8309", id: 2075 },
{ code: "&#8310", id: 2076 },
{ code: "&#8311", id: 2077 },
{ code: "&#8312", id: 2078 },
{ code: "&#8313", id: 2079 },
];


function strip(html) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
}