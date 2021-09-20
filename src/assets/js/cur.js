// Carousel
// $('.main-carousel').flickity({
//     // options
//     contain: true,
//     freeScroll: true,
//     pageDots: false,
//     autoPlay: true,
//     autoPlay: 2000
// });


// Price Format
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

function getData(coinName, elementId, cardId, data, usdt) {
    // Variables
    var elem = '';
    var coin = '';
    var lastPrice = '';
    var irrCoinPrice = '';
    var coinPrice = '';
    var buyPrice = '';
    var sellPrice = '';
    var changePct = '';
    var textColor = 'black';
    // Convert Data to Json
    data = JSON.parse(data);
    // Get Data and Element
    // get table element
    elem = document.querySelector(elementId);
    coin = elem.getAttribute("coin");
    lastPrice = $(elementId).find(".table__sell").text();
    // set Change Percent 24 Hour
    changePct = data[coinName].change_24h;
    // set coin price
    coinPrice = data[coinName].quotes.USD.price;
    irrCoinPrice = coinPrice * usdt;
    // sell Price
    sellPrice = irrCoinPrice;
    // check Price
    if (lastPrice != buyPrice) {
        // change sell Color
        $(elementId).find(".table__sell").animate({ color: "#3ab669", });
        // change sell data
        $(elementId).find(".table__sell").html(formatNumber(sellPrice.toFixed(0)));
        $(elementId).find(".table__changepct span").html(changePct.toFixed(2));
        if (changePct < 0) {
            $(elementId).find(".table__changepct").addClass("text--danger");
            $(elementId).find(".table__changepct").removeClass("text--success");
        } else {
            $(elementId).find(".table__changepct").addClass("text--success");
            $(elementId).find(".table__changepct").removeClass("text--danger");
        }
        // edit card element
        $(cardId).find(".currency__price span").html(coinPrice.toFixed(2));
        // return back the colors
        $(elementId).find(".table__sell").animate({ color: textColor });
    }
}

function updateData() {
    data = '';
    $.ajax({
        url: '/coins',
        method: 'GET',
        success: function(data) {
            data = data;
            $.ajax({
                url: '/usdt',
                method: 'GET',
                success: function(usdt) {
                    usdt = usdt.split(',');
                    usdt = parseInt(usdt[0] + usdt[1]);
                    $(".cur__item").each(function() {
                        var coinName = $(this).attr('coin');
                        getData(coinName, "#table__" + coinName, "#card__" + coinName, data, usdt);
                        $(".paper__loading").removeClass("show");
                    });
                }
            });
        },
        complete: function() {
            setTimeout(updateData, 9000);
        }
    });
}
$(document).ready(function() {
    $(".paper__loading").ready(function() {
        $(".paper__loading").addClass("show")
    });
    updateData();
});