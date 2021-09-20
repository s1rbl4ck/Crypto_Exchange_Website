// AOS
AOS.init();

// function dayMode() {
//     // Set Day Mode in LocalStorage
//     localStorage.setItem("mode", "day");
//     localStorage.setItem("textColor", "#333");
//     // Use The Mode
//     if (localStorage.getItem("textColor") != null) {
//         textColor = localStorage.getItem("textColor");
//     }
//     $(".mode__page").html('<i class="fas fa-sun"></i>');
//     $(".cur__item td").animate({ color: textColor });;
//     $(".mode__page").addClass("day__mode");
//     $(".mode__page").removeClass("night__mode");
//     $("body").addClass("day");
//     $("body").removeClass("night");
// }

// function nightMode() {
//     // Set Night Mode in LocalStorage
//     localStorage.setItem("mode", "night");
//     localStorage.setItem("textColor", "#fff");
//     // Use The Mode
//     if (localStorage.getItem("textColor") != null) {
//         textColor = localStorage.getItem("textColor");
//     }
//     $(".mode__page").html('<i class="fas fa-moon"></i>');
//     $(".cur__item td").animate({ color: textColor });;
//     $(".mode__page").removeClass("day__mode");
//     $(".mode__page").addClass("night__mode");
//     $("body").addClass("night");
//     $("body").removeClass("day");
// }

// // Check System DarkMode
// if (localStorage.getItem("textColor") == null) {
//     let darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

//     if (darkMode) {
//         nightMode()
//     } else {
//         dayMode()
//     }
// }
// // Check day & night Mode
// if (localStorage.getItem("mode") == "day") {
//     dayMode()
// } else {
//     nightMode()
// }

// // day & night Mode
// $(".mode__page").click(function() {
//     if ($(".mode__page").hasClass("day__mode")) {
//         nightMode()
//     } else {
//         dayMode()
//     }
// });

// if(localStorage.getItem("email") != '') {
//     $(".emailFastRegister").val(localStorage.getItem("email"))
// }

$(".fastRegister").click(function() {
    var url = $(this).attr('url');
    var email = $(".fastRegisterEmail").val();
    localStorage.setItem("email", email)
    window.location.href = url;
});

// Rule Check
function rules__check() {
    var checkboxInput = document.querySelector(".special-checkbox input");

    if (checkboxInput.checked == true) {
        $(".register__button").removeClass("not_accepted");
        $(".register__button").removeAttr("disabled");
    } else {
        $(".register__button").addClass("not_accepted");
        $(".register__button").attr("disabled", "disabled");
    }
}

$(".special-checkbox input").click(function() {
    rules__check();
})

// navbar toggle
$(".nav__toggler").click(function() {
    $(".toggle__navbar").addClass("open__navbar");
});

$(".nav__toggler__close").click(function() {
    $(".toggle__navbar").removeClass("open__navbar");
});

// blog forward
$(".tizer__items-forward").click(function() {
    $("html, body").animate({ scrollTop: $('#blog').offset().top }, 1000);
});

// About background
function greyScale() {
    $(".sub__header").toggleClass("greyScale");
}
greyScale();
setInterval(greyScale, 3000);

// Faq
$(".question__box").click(function() {
    var plus_icon = $(this).find(".plus__icon svg");
    var answer = $(this).find(".answer");
    var AllAnswer = $(".question__box").find(".answer");
    if (plus_icon.hasClass("fa-plus")) {
        plus_icon.removeClass("fa-plus");
        plus_icon.addClass("fa-minus");
        answer.slideToggle();
    } else {
        plus_icon.addClass("fa-plus");
        plus_icon.removeClass("fa-minus");
        answer.slideToggle();
    }
});

// Auth
var inputs = document.querySelectorAll(".input__div input");

function focusInput() {
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

if ($(".input__div input#email").val() !== '') {
    $(".input__div input#email").parent().parent().addClass("focus");
}

function blurInput() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove('focus');
    }
}

function hoverInput() {
    let parent = $(this).parent();
    parent.find("input").focus();
}

$(".input__div input").each(function() {
    $(this).focus(focusInput);
    $(this).blur(blurInput);
});

$(".input__div h5").each(function() {
    $(this).click(hoverInput);
});

// Toast Message
function toastMessage(textMessage = 'موفق', classType = 'success', textHeading = 'ورود') {
    if ($(".alert-message").length) {
        $.toast({
            text: textMessage, // Text that is to be shown in the toast
            heading: textHeading, // Optional heading to be shown on the toast
            icon: classType, // Type of toast icon
            showHideTransition: 'slide', // fade, slide or plain
            allowToastClose: true, // Boolean value true or false
            hideAfter: 4000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
            stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
            position: 'bottom-right', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
            textAlign: 'center', // Text alignment i.e. left, right or center
            loader: false
        });
    }
}

function alertMessage(textMessage = 'موفق', classType = 'success', textHeading = 'با موفقیت انجام شد') {
    $.toast({
        text: textMessage, // Text that is to be shown in the toast
        heading: textHeading, // Optional heading to be shown on the toast
        icon: classType, // Type of toast icon
        showHideTransition: 'slide', // fade, slide or plain
        allowToastClose: true, // Boolean value true or false
        hideAfter: 6000, // false to make it sticky or number representing the miliseconds as time after which toast needs to be hidden
        stack: 5, // false if there should be only one toast at a time or a number representing the maximum number of toasts to be shown at a time
        position: 'bottom-right', // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values
        textAlign: 'center', // Text alignment i.e. left, right or center
        loader: false
    });
}

$(document).ready(function() {
    var textMessage = $(".alert-message").text();
    var classType = $(".alert-message").attr("classType");
    var textHeading = $(".alert-message").attr("heading");

    toastMessage(textMessage, classType, textHeading);
});

// Apps
$(".barcode__show").click(function() {
    var barcodeContainer = $(".app__download-barcode");
    if (barcodeContainer.hasClass("open")) {
        barcodeContainer.slideToggle();
    } else {
        barcodeContainer.slideToggle();
    }
});

// Copy Function
function copyText(elem = $("#copyText"), textMessage = "لینک دعوت با موفقیت کپی شد", classType = "success", textHeading = "لینک دعوت") {
    var copyText = elem;
    copyText.select();
    document.execCommand("copy");
    // Alert
    alertMessage(textMessage, classType, textHeading);
}

$(".copyButton").click(function() {
    // Select Text
    var range = document.createRange();
    var selection = window.getSelection();
    range.selectNodeContents(document.querySelector($(this).attr("data-elem")));
    selection.removeAllRanges();
    selection.addRange(range);
    // Show Message
    var elemToCopy = $($(this).attr("data-elem"));
    var deposittextMessage = $(this).attr("data-text");
    var depositclassType = $(this).attr("data-type");
    var textHeading = $(this).attr("data-head");
    copyText(elemToCopy, deposittextMessage, depositclassType, textHeading);
});

$(".order__code").click(function() {
    var elemToCopy = $(this);
    var deposittextMessage = $(this).attr('data-text');
    var depositclassType = $(this).attr('data-type');
    var textHeading = $(this).attr('data-head');
    copyText(elemToCopy, deposittextMessage, depositclassType, textHeading);
});
// Box Toggler
$(".box__toggler").click(function() {
    var toggler = $(this).attr("toggler");
    if($(toggler).hasClass("open")) {
        $(toggler).slideUp();
        $(toggler).removeClass("open");
    } else {
        $(".box__toggle").slideUp(200);
        $(".box__toggle").removeClass("open");
        setTimeout(() => {
            $(toggler).slideDown();
            $(toggler).toggleClass("open");
        }, 200);
    }
});

// Transaction
$(".all-select").click(function() {
    var allAmount = $(this).attr("allAmount");
    var fee = $(".withdraw__amount .fee").attr('data-fee');
    console.log(fee);
    console.log(allAmount);
    $(".amountWithdraw").val(formatNumber(allAmount - fee));
    alertMessage(textMessage = "کل موجودی انتخاب شد", classType = 'success', textHeading = "موجودی");
});

// Verify

// table scroller
const slider = document.querySelector('.table-responsive');
let isDown = false;
let startX;
let scrollLeft;
$('.table-responsive').each(function() {
    $(this).mousedown(function(e) {
        $(this).css('cursor', 'grabbing');
        isDown = true;
        $(this).addClass('active');
        startX = e.pageX - $(this).offset().left;
        scrollLeft = $(this).scrollLeft();
    });
    $(this).mouseleave(function() {
        isDown = false;
        $(this).removeClass('active');
    });
    $(this).mouseup(function() {
        $(this).css('cursor', 'inherit');
        isDown = false;
        $(this).removeClass('active');
    });
    $(this).mousemove(function(e) {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - $(this).offset().left;
        const walk = (x - startX) * 3; //scroll-fast
        $(this).scrollLeft(scrollLeft - walk);
    });
});



$(".logout__icon").click(function() {
    // Sweet Alert
    $(document).ready(function() {
        Swal.fire({
            title: 'میخواهید خارج بشید؟',
            text: "شما دارید از پنل خارج میشید",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'خروج',
            cancelButtonText: 'لغو'
        }).then((result) => {
            if (result.isConfirmed) {
                $('#logout').submit();
            Swal.fire(
                'خروج',
                'شما از پنل کاربری خارج شدید',
                'success'
            )
            }
        });
    });
});



// $('.table-responsive').on('mousedown', function(e) {
//     isDown = true;
//     slider.classList.add('active');
//     startX = e.pageX - slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
// })
// $('.table-responsive').on('mouseleave', function() {
//     isDown = false;
//     slider.classList.remove('active');
// })
// $('.table-responsive').on('mouseup', function() {
//     isDown = false;
//   slider.classList.remove('active');
// })
// $('.table-responsive').on('mousemove', function(e) {
//     if(!isDown) return;
//     e.preventDefault();
//     const x = e.pageX - slider.offsetLeft;
//     const walk = (x - startX) * 3; //scroll-fast
//     slider.scrollLeft = scrollLeft - walk;
// })


// currency Format
$("input[data-type='currency']").on({
    keyup: function() {
      formatCurrency($(this));
    },
    blur: function() { 
      formatCurrency($(this), "blur");
    }
});


function formatNumber(n) {
  // format number 1234567 to 1,234,567
  return n.toString().replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}


function formatCurrency(input, blur) {
  // appends $ to value, validates decimal side
  // and puts cursor back in right position.
  
  // get input value
  var input_val = input.val();
  
  // don't validate empty input
  if (input_val === "") { return; }
  
  // original length
  var original_len = input_val.length;

  // initial caret position 
  var caret_pos = input.prop("selectionStart");
    
  // check for decimal
  if (input_val.indexOf(".") >= 0) {
    // join number by .
    input_val = formatNumber(input_val);
    input_val = input_val;

  } else {
    // no decimal entered
    // add commas to number
    // remove all non-digits
    input_val = formatNumber(input_val);
    input_val = input_val;
  }
  
  // send updated string to input
  input.val(input_val);

  // put caret back in the right position
  var updated_len = input_val.length;
  caret_pos = updated_len - original_len + caret_pos;
  input[0].setSelectionRange(caret_pos, caret_pos);
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validatePhoneNumber(number) {
    var re = /^09[0-9]{9}$/;
    return re.test(number)
}

// Fullscreen Exchange picture
$(".exchange__img").click(function() {
    $(this).addClass("fullscreen__item");
    $('body').css('overflow', 'hidden');
});

$(".showmore__popover").hover(function() {
    $(this).popover('toggle')
});

$(".exchange__select-items li").click(function() {
    var exchangeType = $(this).attr("type");
    $(".exchange__select-items li").removeClass("active");
    $(this).addClass("active");
});

// Custom Select
$(".custom__select").each(function() {
  var classes = $(this).attr("class"),
    id = $(this).attr("id"),
    name = $(this).attr("name");
  var template =  '<div class="' + classes + '">';
      template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
      template += '<div class="custom-options">';
      $(this).find("option").each(function() {
        template += '<span class="custom-option" data-long="'+$(this).attr('data-long')+'" data-short="'+$(this).attr('data-short')+'" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
      });
  template += '</div></div>';
  
  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".custom-option:first-of-type").hover(function() {
  $(this).parents(".custom-options").addClass("option-hover");
}, function() {
  $(this).parents(".custom-options").removeClass("option-hover");
});

$(".custom-select-trigger").on("click", function() {
  $('html').one('click',function() {
    $(".custom__select").removeClass("opened");
  });
  $(this).parents(".custom__select").toggleClass("opened");
  event.stopPropagation();
});

$(".custom-option").on("click", function() {
  $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom__select").removeClass("opened");
  $(this).parents(".custom__select").find(".custom-select-trigger").text($(this).text());
});

$(".city__select .custom-select-trigger").click(function() {
    if($(this).parent().find('.custom-options').html() == '') {
        alertMessage('لطفا ابتدا استان را انتخاب کنید', 'error', 'مشکلی رخ داده')
    }
});

$(document).on('change', ".province__select",function() {
    var province = $(this).val();
    var token = $("meta[name='csrf-token']").attr('content');
    $.ajax({
        url: '/dashboard/cities/'+province,
        method: 'POST',
        data: {'_token':token},
        success: function(data) {
            $(".city__select").removeAttr('disabled');
            $("select.city__select").html('');
            for(var i = 0;i < data.length;i++) {
                $("select.city__select").append('<option value="'+data[i].id+'">'+data[i].name+'</option>');
            }
        }
    });
});

// Check inputs
function EmptyCheck() {
    inputsError = '';
    selectsError = '';
    $(".modal-content input[type='number']").each(function() {
        var value = $(this).val();
        var placeholder = $(this).attr("placeholder");
        if(value == '') {
            inputsError = 'لطفا ورودی '+placeholder+' را وارد کنید';
        }
    });
    if(inputsError != '') {
        alertMessage(textMessage = inputsError, classType = 'error', textHeading = "ورودی ها");
    } 
    $(".modal-content select").each(function() {
        var value = $(this).find("option:selected").text();
        var placeholder = $(this).attr("placeholder");
        if(value == '') {
            selectsError = 'لطفا '+placeholder+' را انتخاب کنید';
        }
    });
    if(selectsError != '') {
        alertMessage(textMessage = selectsError, classType = 'error', textHeading = "لیست ها");
    }
    if(inputsError || selectsError != '') {
        return false;
    } else {
        return true;
    }
}

$(document).on('click', '.data__next', function(e) {
    if($(this).text() == "ثبت") {
        if($(".choose__price input[name='price']").val() == '' || $(".choose__price input[name='price']").val() == ' ') {
            alertMessage('فیلد قیمت الزامی است!', 'error', 'فیلد قیمت');
        }
    }
    e.preventDefault();
    operation = EmptyCheck();
    if(operation != false) {
        var stepsCount = $(".steps").length;
        var dataStep = $(this).attr('data-step');
        var dataPrevious = parseInt(dataStep) - 1;
        var formName = $(this).attr("form-name")
        $(".data__previous").attr('data-step', dataPrevious);
        $(".operation__progressbar li:nth-child("+dataStep+")").addClass('active');
        $(".operation__progressbar li:nth-child("+dataPrevious+")").find('.passed__tick').fadeIn();
        if($(this).attr('data-to-do') == "submit") {
            $(formName).submit();
            $(".operation__progressbar li:nth-child("+dataStep+")").find('.passed__tick').fadeIn();
        }
        if(stepsCount == dataStep) {
            $(".data__next").text("ثبت");
            $(this).attr('data-to-do', "submit"); 
        }
        $(".data__previous").show();
        $(".step__"+dataPrevious).hide();
        $(".step__"+dataStep).show();
    }
});

$("#choosePrice").click(function() {
    if($("#choosePrice").is(":checked")) {
        $(".choose__price").show();
    } else {
        $(".choose__price").hide();
    }
});

$("#autoPrice").click(function() {
    if($("#autoPrice").is(":checked")) {
        $(".auto__price").show();
    } else {
        $(".auto__price").hide();
    }
});

$(document).on('click', '.data__previous', function(e) {
    e.preventDefault();
    var nextButton = $(".data__next");
    var dataStep = $(this).attr('data-step');
    var dataPrevious = parseInt(dataStep) + 1;
    $(".operation__progressbar li:nth-child("+dataPrevious+")").removeClass('active');
    if(nextButton.text() != "بعدی") {
        nextButton.text("بعدی");
        $(".data__next").removeAttr('data-to-do');
        $(".operation__progressbar li:nth-child("+dataStep+")").find('.passed__tick').fadeOut();
    }
    $(".data__previous").hide();
    $(".step__"+dataPrevious).hide();
    $(".step__"+dataStep).show();
});

$(document).on('click' , '.currency__select .custom-option',function() {
    var currency = $(this).attr("data-short");
    var currencyName = $(this).attr("data-long");
    $(".set__price").html('<div class="spinner-grow text-warning spinner-custom" role="status"> <span class="sr-only">Loading...</span> </div>');
    currencyPrice(currency, currencyName);
});

function setPrice(usdt, IRTCurrency, currencyName) {
    if(IRTCurrency != '') {
        $(".choose__price input[name='price']").val(formatNumber(IRTCurrency.toFixed(0)))
        $(".set__price").text(formatNumber(IRTCurrency.toFixed(0)));
        $(".set__price").attr('data-price', IRTCurrency.toFixed(0));
        $(".set__currencyName").text(currencyName);
    } else {
        $(".choose__price input[name='price']").val(formatNumber(usdt))
        $(".set__price").text(formatNumber(usdt));
        $(".set__price").attr('data-price', usdt);
        $(".set__currencyName").text(currencyName);
    }
}

$(".choose__price input").keyup(function() {
    var price = $('.get__price').text().split(',');
    price = parseInt(price[0] + price[1]);
    var userPrice = $(this).val().split(',');
    userPrice = parseInt(userPrice[0] + userPrice[1]);
    var result = ((userPrice - price) / price * 100).toFixed(2);
    if(result < 0) {
        $(".set__ent").text("کمتر")
    } else {
        $(".set__ent").text("بیشتر")
    }
    $(".set__percent").text(result+"%");
});

// Get Price
function currencyPrice(currency, currencyName) {
    var data = '';
    var IRTCurrency = '';
    currency = currency+'USDT'
    var token = $("meta[name='csrf-token']").attr('content');
    $.ajax({
        url: 'currencyPrice',
        method: 'POST',
        data: {'_token':token},
        success: function(data) {
            data = JSON.parse(data);
            $.ajax({
                url: '/usdt',
                method: 'GET',
                success: function(usdt) {
                    usdt = usdt.split(',');
                    usdt = parseInt(usdt[0] + usdt[1]);
                    if(currency != 'USDTUSDT') {
                        data = data.data.ticker[currency].last;
                        IRTCurrency = data * usdt;
                    }
                    setPrice(usdt, IRTCurrency, currencyName)
                }
            });
        }
    });
}

// Countup Timer
function countUp() {
    var days = document.querySelector("#clockdiv .days");
    var hours = document.querySelector("#clockdiv .hours");
    var minutes = document.querySelector("#clockdiv .minutes");
    var seconds = document.querySelector("#clockdiv .seconds");
    var timestamp = Date.parse($('#clockdiv').attr('data-timestamp'));
    var now = Date.parse(Date());
    var t = now - timestamp;
    
    seconds.innerHTML = pad(Math.floor((t / 1000) % 60));
    minutes.innerHTML = pad(Math.floor((t / 1000 / 60) % 60));
    hours.innerHTML = pad(Math.floor((t / (1000 * 60 * 60)) % 24));
    days.innerHTML = pad(Math.floor(t / (1000 * 60 * 60 * 24)));

    function pad(val) {
        var valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        } else {
            return valString;
        }
    }
}

// countDown
function CountDown(time) {
    let i = time;

    let a = setInterval(() => {

        if(i < 10) {
            document.querySelector('.countDown').textContent = `0${i}`;
        } else {
            document.querySelector('.countDown').textContent = `${i}`;
        }

        i--;

        if(i < 0) {
            resetSendCode();
            clearInterval(a);
        }

    }, 1000);
}

function resetSendCode() {
    var token = $("meta[name='csrf-token']").attr('content');
    $.ajax({
        url: '/dashboard/resetCode',
        method: "POST",
        data: {'_token':token}
    })
    $(".sendCode").fadeIn();
    $(".sendCode").removeClass('d-none');
    $(".countDown").parent().hide();
    localStorage.setItem("counter", 0);
}

function sendTwoFactorCode() {
    var url = $(".sendCode").attr('data-url');
    var time = $(".sendCode").attr('data-time');
    var token = $("meta[name='csrf-token']").attr('content');
    $(".sendCode").text('در حال ارسال کد...');
    $.ajax({
        url: url,
        method: "POST",
        data: {'_token':token},
        success: function(data) {
            if(data.status == false) {
                alertMessage('لطفا بعد از '+time+' ثانیه مجددا تلاش کنید', 'error', 'کد ارسال نشد');
            } else {
                alertMessage('کد تایید به ایمیل شما ارسال شد', 'success', 'کد تایید');
                time = data.time;
            }
            CountDown(time);
            $(".sendCode").text('ارسال مجدد کد');
            $(".sendCode").hide();
            $(".countDown").parent().fadeIn();
        }
    });
}

$(".sendCode").click(function() {
    var type = $(this).attr('data-type');
    $(this).text('در حال ارسال کد...')
    if(type == 'number') {
        sendNumberCode()
    } else {
        sendTwoFactorCode()
    }    
});

function sendNumberCode() {
    var url = $(".send__code-number").attr('data-url');
    var number = $("input[name='number']").val();
    var time = $(".sendCode").attr('data-time');
    var token = $("meta[name='csrf-token']").attr('content');
    if(number == null || number == '' || number == ' ') {
        alertMessage('لطفا فیلد شماره را وارد کنید', 'error', 'کد ارسال نشد');
    } else {
        if(!validatePhoneNumber(number)) {
            alertMessage('لطفا شماره خود را درست وارد نمایید', 'error', 'شماره اشتباه است');
        } else {
            $(".sendCode").show();
            $(".sendCode").text('در حال ارسال کد...')
            $.ajax({
                url: url,
                method: "POST",
                data: {'_token':token},
                success: function(data) {
                    if(data.status == false) {
                        alertMessage('لطفا بعد از '+time+' ثانیه مجددا تلاش کنید', 'error', 'کد ارسال نشد');
                    } else {
                        alertMessage('کد تایید به شماره شما ارسال شد', 'success', 'کد تایید');
                        time = data.time;
                    }
                    CountDown(time);
                    $(".sendCode").hide();
                    $(".sendCode").text('ارسال کد مجدد')
                    $(".countDown").parent().fadeIn();
                    $(".countDown").parent().fadeIn();
                }
            });
            $(".code__input").removeClass('d-none');
            $(".send__code-number").hide();
            $(".submit__number").attr('type', 'submit')
            $(".submit__number").removeClass('d-none');
        }
    }
}
$(".send__code-number").click(function() {
    sendNumberCode();
});

function TimeStampCountDown(expire, min) {
    // TimeStap Count Down
    // Set the date we're counting down to
    var countDownDate = new Date(expire).getTime();
    // Update the count down every 1 second
    var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (minutes < 0 && seconds < 0 || min < minutes) {
        $(".cancel__offer").removeAttr('disabled');
        $(".cancel__offer").removeClass('disabled');
        minutes = 0;
        seconds = 0;
        clearInterval(x);
    }
    // Output the result in an element
    document.querySelector(".TSMinute span").innerHTML = minutes;
    document.querySelector(".TSSecond span").innerHTML = seconds;

    // If the count down is over, do somthing
    if (minutes == 0 && seconds == 0) {
        $(".cancel__offer").removeAttr('disabled');
        $(".cancel__offer").removeClass('disabled');
        clearInterval(x);
    }
}, 1000);
}

function setCurrency() {
    if($(".currency__name").attr("data-cur") == 'USDT') {
        $.ajax({
            url: '/usdt',
            method: 'GET',
            success: function(usdt) {
                if(usdt.length < 7 || usdt.length == 0) {
                    $('.currency__price').text(usdt);
                } else {
                    alertMessage('قیمت ارز دریافت نشد!', 'error', 'قیمت ارز')
                }
            }
        });
    }
}

function getCoinsFilter() {
    var exchange_coin = [];
    $(".selectMultiple em").each(function(){
        exchange_coin.push($(this).attr("shortName"));
    });
    return exchange_coin
        
}

function getFilter() {
    var filter = "";
    $(".exchange__coinfilter select.custom__select").each(function() {
        filter = $(this).find("option:selected").val();
    });
    return filter; 
}

function getSearch() {
    var search = $(".exchange__coin .search__input").val();
    return search;
}

function addLoading(element) {
    element.html('<div class="alert alert-info text-center col-12 mb-0 p-3" role="alert">درحال جستجو <div class="spinner-grow text-success spinner-custom" role="status"> <span class="sr-only">Loading...</span> </div></div>')
}

$(".exchange__coin .search__input").on('keyup', function() {
    var search_val = getSearch();
    var exchange_coin = getCoinsFilter();
    var filter = getFilter();
    if($(this).attr('data-search') == 'offers') {
        addLoading($(".exchange__offers"));
        updateOffersTable(search_val, filter)
    } else {
        addLoading($(".exchange__orders"));
        updateOrders(search_val, exchange_coin, filter);
    }
});

$(document).on("click", ".selectMultiple ul li", function() {
    addLoading($(".exchange__orders"));
    var search_val = getSearch();
    var filter = getFilter();
    setTimeout(() => {
        var exchange_coin = getCoinsFilter(); 
        updateOrders(search_val, exchange_coin, filter); 
    }, 100);
});

$(document).on("click", ".selectMultiple > div a", function() {
    addLoading($(".exchange__orders"));
    var search_val = getSearch();
    var filter = getFilter();
    setTimeout(() => {
        var exchange_coin = getCoinsFilter(); 
        updateOrders(search_val, exchange_coin, filter); 
    }, 1100);
});

$(document).on('click', '.exchange__coinfilter .custom__select', function() {
    var search_val = getSearch();
    var exchange_coin = getCoinsFilter();
    var filter = getFilter();
    if($(this).parent().find('select').attr('data-filter') == 'offers') {
        addLoading($(".exchange__offers"));
        updateOffersTable(search_val, filter)
    } else {
        addLoading($(".exchange__orders"));
        updateOrders(search_val, exchange_coin, filter);
    }
});

// Get Orders
function updateOrders(search_val, exchange_coin, filter) {
    var token = $("meta[name='csrf-token']").attr('content');
    $.ajax({
        url: 'P2P/ajax/orders',
        method: 'POST',
        data: {'_token':token, search_val:search_val, exchange_coin:exchange_coin, filter:filter},
        success: function(data) {
            if(data == '' || data == ' ' || data == null) {
                $(".exchange__orders").html('<div class="alert alert-danger text-center col-12 mb-0 p-3" role="alert">موردی پیدا نشد</div></div>');
            } else {
                $(".exchange__orders").html(data);
            }
        }
    });
}
// Get Offers
function updateOffersTable(search_val, filter) {
    var token = $("meta[name='csrf-token']").attr('content');
    $.ajax({
        url: 'ajax/offers',
        method: 'POST',
        data: {'_token':token, search_val:search_val, filter:filter},
        success: function(data) {
            if(data == '' || data == ' ' || data == null) {
                $(".exchange__offers").html('<div class="alert alert-danger text-center col-12 mb-0 p-3" role="alert">موردی پیدا نشد</div></div>');
            } else {
                $(".exchange__offers").html(data);
            }
        }
    });
}

$(document).on('click', '.button__loading', function() {
    $(this).parent().parent().parent().parent().parent().before('<div class="load-bar"> <div class="bar"></div> <div class="bar"></div> <div class="bar"></div> </div>');
});

// payamount
$(".currency__amount").keyup(function() {
    var amount = $(this).val();
    var fee = $(".order__fee").attr('data-fee');
    var price = $(".order__fee").attr('data-price');
    if(amount > 0) {
        $(".payamount").text(formatNumber((amount * price + parseInt(fee)).toFixed(0)))
    } else {
        $(".payamount").text(0)
    }
});

// Cancel Order
$(document).on('click', '.cancel__order', function(){
    var token = $("meta[name='csrf-token']").attr('content');
    var id = $(this).attr('data-id');
    var thisElements = $(this).parent().parent().parent().parent().parent().parent();
    Swal.fire({
        title: 'آیا میخواهید پیشنهاد فروش را لغو کنید؟',
        text: "لغو پیشنهاد فروش",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'بله',
        cancelButtonText: 'خیر'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: 'ajax/orderCancel/'+id,
                type: 'DELETE',
                data: {'_token':token},
                success: function(data) {
                    if(data == '' || data == ' ' || data == null || data == 'error') {
                        alertMessage('پیشنهاد فروش لغو نشد', 'error', 'پیشنهاد فروش');
                    } else {
                        thisElements.find(".exchange__order-2-2-1-4-2-2").html('<span class="badge badge--danger p-1"> لغو شده </span>');
                        thisElements.find(".exchange__order-2-2-1-5-1").html('<span class="badge badge--danger p-2"> معامله بسته شد </span>');
                        thisElements.find(".exchange__order-2-2-1-6").html('');
                        thisElements.find('.load-bar').hide();
                        alertMessage('پیشنهاد فروش با موفقیت لغو شد', 'success', 'پیشنهاد فروش');
                    }
                }
            });
        Swal.fire(
            'لغو شد',
            'پیشنهاد فروش شما لغو شد',
            'success'
        )
        } else {
            thisElements.find('.load-bar').hide();
        }
    });
});

// update offers list
function updateOffers(elem) {
    $(".offers__show").prepend('<div class="load-bar"> <div class="bar"></div> <div class="bar"></div> <div class="bar"></div> </div>');
    var token = $("meta[name='csrf-token']").attr('content');
    var id = elem.attr('data-id');
    $(".show__offers.refresh").attr('data-id', id);
    $(".show__offers.refresh").removeAttr('disabled');
    $.ajax({
        url: 'ajax/offers/'+id,
        method: 'POST',
        data: {'_token':token},
        success: function(data) {
            if(data == '' || data == ' ' || data == null || data == 'error') {
                alertMessage('مشکلی در عملیات رخ داده!', 'error', 'عملیات');
            } else {
                $(".offers__show").html(data);
            }
        }
    });
}
// show offers
$(".show__offers.refresh").click(function() {
    $(this).attr('disabled', 'disabled');
});

$(".show__offers").click(function() {
    $(".offers__show").html('');
    updateOffers($(this));
});

// sell
$(document).on("click", ".offer__operation", function() {
    var operation = $(this).attr('data-operation');
    var url = $(this).attr('data-url');
    var token = $("meta[name='csrf-token']").attr('content');
    if(operation == 'sell') {
        $.ajax({
            url: url,
            method: "POST",
            data: {'_token':token},
            success: function(data) {
                if(data.status == true) {
                    alertMessage('معامله با کاربر '+data.user+' تایید شد', 'success', 'تایید معامله');
                    updateOffers($(".show__offers.refresh"));
                } else {
                    alertMessage('معامله با کاربر تایید نشد', 'error', 'معامله');
                }
            }
        });
    } else {
        
    }
});

// check status
function checkTradeStatus(url) {
    var token = $("meta[name='csrf-token']").attr('content');
    $.ajax({
        url: url,
        method: "POST",
        data: {'_token':token},
        success: function(data) {
            if(data.interval == 1) {
                clearInterval(statusInterval)
            }
            if(data.url != null) {
                $(".confirm__check").removeClass("disabled")
                $(".confirm__check").removeAttr("disabled")
                $(".confirm__check").attr("href", $(".confirm__check").attr('data-url'))
                alertMessage(data.message, 'success', data.heading);
                setTimeout(() => {
                    window.location.href = data.url;
                }, 2000);
            }
        }
    });
}
// check status
function cancelOffer(url) {
    var token = $("meta[name='csrf-token']").attr('content');
    $.ajax({
        url: url,
        method: "POST",
        data: {'_token':token},
        success: function(data) {
            alertMessage(data.message, data.class, data.heading);
            setTimeout(() => {
                location.reload();
            }, 2500);
        }
    });
}

$(".cancel__offer").click(function() {
    var url = $(this).attr('data-url');
    cancelOffer(url)
});

function getDollor(elemSet, price) {
    elemSet.html('<div class="spinner-grow text-warning" role="status"> <span class="sr-only">Loading...</span> </div>');
    var token = $("meta[name='csrf-token']").attr('content');
    $.ajax({
        url: '/dollarprice',
        method: "POST",
        data: {'_token':token},
        success: function(data) {
            data = JSON.parse(data);
            if(data.ok == true) {
                var dollorprice = data.list[0].price / 10;
                if(price != '' && price != null && price != ' ') {
                    setDollorPrice(dollorprice, elemSet, price);
                }
            }
        }
    });
}
function dollorFormat(num)
{
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
}

function setDollorPrice(dollorprice, elem, price) {
    elem.text(dollorFormat((price / dollorprice).toFixed(2)));
}

// profile edit
$(document).on('click', ".edit__userinfo", function() {
    var type = $(this).attr('data-type');
    var elem = $(this).parent().parent();
    var olddata = elem.find('.input__edit').text().replace(/\s/g, '');
    var inputedit = elem.find('.input__edit');
    var name = elem.find('td:nth-child(2)').text();
    inputedit.html('<div class="d-flex"><input name="" class="customSecond__input form-control ml-2" data-name="'+name+'" placeholder="'+name+' جدید را وارد کنید" value="'+olddata+'"><button class="btn btn-outline-primary submit__edit" data-type="'+type+'">ثبت</button><button class="btn btn-outline-danger mr-2 cancel__edit" data-replace="'+olddata+'">لغو</button></div>')
});
$(document).on('click', '.cancel__edit', function() {
    var replace = $(this).attr('data-replace');
    var elem = $(this).parent().parent();
    elem.text(replace);
});

$(document).on('click', ".submit__edit",function() {
    var thisElem = $(this);
    var type = $(this).attr('data-type');
    var elem = $(this).parent().parent();
    var val = elem.find('input').val();
    var name = elem.find('input').attr('data-name');
    var token = $("meta[name='csrf-token']").attr('content');
    if(val.length < 4) {
        alertMessage(name+' باید بیشتر از 4 کاراکتر باشد', 'error', name);
    } else if(type == 'email' && !validateEmail(val)) {
        alertMessage('لطفا یک ایمیل معتبر را وارد کنید', 'error', 'ایمیل');
    } else if(type == 'number' && !validatePhoneNumber(val)) {
        alertMessage('لطفا یک شماره تلفن معتبر را وارد کنید', 'error', 'شماره تلفن');
    } else {
        thisElem.html('<div class="spinner-border text-warning" role="status"> <span class="sr-only">Loading...</span> </div>');
        $.ajax({
            url: '/dashboard/profile/update',
            method: 'PUT',
            data: {'_token':token, 'type':type,'value':val},
            success: function(data) {
                if(data.class == 'success') {
                    elem.text(val);
                }
                thisElem.html('ثبت');
                alertMessage(data.message, data.class, data.heading);
            },
            error: function(data){
                code = data.status;
                //get the status code
                if (code == 422) {
                    thisElem.html('ثبت');
                    alertMessage(' مشکلی رخ داده لطفا بعدا تلاش کنید', 'error', 'مشکلی رخ داده');
                }
                if (code == 405) {
                    thisElem.html('ثبت');
                    alertMessage('لطفا ابتدا مراحل احراز هویت را تکمیل کنید', 'error', 'احراز هویت');
                }
            },
        });
    }
});

function readNotifications(notif, elem) {
    var token = $("meta[name='csrf-token']").attr('content');
    $.ajax({
        url: '/dashboard/notifications/read',
        method: 'POST',
        data:{'_token':token,'notif':notif},
        success: function(data) {
            if(data == true) {
                if(notif == null) {
                    $(".custom__table-tr").removeClass('notread');
                    $(".dropdown__notifications .counts").text('0');
                    $(".dropdown__notifications-list").html('<div class="alert alert-warning p-3 m-0"> هیچ اعلانی دریافت نشده </div>');
                    alertMessage('همه اعلان ها خوانده شدند', 'success', 'اعلان ها')
                } else {
                    counts = $(".dropdown__notifications .counts:first-child").text();
                    if(counts <= 1) {
                        $(".dropdown__notifications-list").html('<div class="alert alert-warning p-3 m-0"> هیچ اعلانی دریافت نشده </div>');
                    } else {
                        alertMessage('اعلان خوانده شد', 'success', 'اعلان')
                    }
                    if(elem.hasClass('read__notification-list')) {
                        $(elem.remove());
                        $(document).find(".read__notification[data-id='"+notif+"']").removeClass('notread');
                        $(".dropdown__notifications .counts").text(parseInt(counts) - 1)
                    } else if(elem.hasClass('notread')) {
                        $(document).find(".read__notification-list[data-id='"+notif+"']").remove();
                        elem.removeClass('notread');
                        $(".dropdown__notifications .counts").text(parseInt(counts) - 1)
                    } else {
                        alertMessage('اعلان قبلا خوانده شده', 'error', 'اعلان خوانده نشد')
                    }
                }
            } else {
                alertMessage('اعلان قبلا خوانده شده', 'error', 'اعلان خوانده نشد')
            }
        }
    });
}
// read notifications
$(".read__notifications").on('click', function() {
    readNotifications(null);
});
// read one notifications
$(".read__notification").on('click', function() {
    var id = $(this).attr('data-id');
    readNotifications(id, $(this));
});
// read dropdown notification
$(".read__notification-list").on('click', function() {
    var id = $(this).attr('data-id');
    readNotifications(id, $(this));
});

// Cancel ticket
$(document).on('click', '.cancel__ticket', function() {
    var url = $(this).attr('data-url');
    var token = $("meta[name='csrf-token']").attr('content');
    var ticketStatus = $(this).parent().parent().parent().find('.ticket__status span');
    Swal.fire({
        title: 'میخواهید تیکت را ببندید؟',
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'بله',
        cancelButtonText: 'خیر'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: url,
                method: 'PUT',
                data:{'_token':token},
                success: function(data) {
                    console.log(data);
                    alertMessage(data.message, data.class,data.heading);
                    if(data.class == 'success') {
                        ticketStatus.removeClass('badge-warning');
                        ticketStatus.addClass('badge-danger');
                        ticketStatus.text('بسته شده');
                    }
                }
            })
        }
    });
});

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})