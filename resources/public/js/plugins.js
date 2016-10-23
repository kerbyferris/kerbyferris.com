// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
//

$(document).ready(function(){

  $(".top-bar").each(function() {
    $(this).append("<div class='top-left'></div>");
    $(this).append("<div class='top-right'></div>");
  });

  // WORK page

  $("#work ul li.basic_box").click(function() {
    $(this).next(".box").children().slideToggle();
  });

  // Connectors

  function lineDraw(linkToElem, linkFromElem){
    var linkTo = linkToElem;
    var linkFrom = linkFromElem;

    //linkTo.css("background-color", "green");

    var linkToWidth = linkTo.outerWidth();
    var linkToOffset = linkTo.offset();

    var linkFromOffset = linkFrom.offset();

    var line1 = $("div#connectors > svg > line.first");
    var line2 = $("div#connectors > svg > line.second");

    var x1 = linkFromOffset.left + 5;
    var l1x2 = linkToOffset.left + 2;
    var l2x2 = linkToOffset.left + linkToWidth - 2;

    line1.attr("x1", x1);
    line1.attr("y1", 0);
    line1.attr("x2", l1x2);
    line1.attr("y2", 75);

    line2.attr("x1", x1);
    line2.attr("y1", 0);
    line2.attr("x2", l2x2);
    line2.attr("y2", 75);
  }

  // sounds open by default
  //lineDraw($("div#sounds p.basic_box"), $("a#sounds_link img"));

  //$("#sounds_link").click(function() {
  //  lineDraw($("div#sounds p.basic_box"), $("a#sounds_link img"));
  //});
  //$("#work_link").click(function() {
  //  lineDraw($("div#work li.basic_box"), $("a#work_link img"));
  //});
  //$("#bio_link").click(function() {
  //  lineDraw($("div#bio_image div.text"), $("a#bio_link img"));
  //});
  //$("#contact_link").click(function() {
  //  lineDraw($("div#contact ul li span.basic_box"), $("a#contact_link img"));
  //});

});
