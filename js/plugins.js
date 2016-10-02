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

  var sounds_link = $("#sounds_link");
  var cv_link = $("#cv_link");
  var bio_link = $("#bio_link");
  var contact_link = $("#contact_link");
  var sounds_div = $("div#sounds");
  var cv_div = $("div#cv");
  var bio_div = $("div#bio");
  var contact_div = $("div#contact");
  var sounds_line = $("line#sounds");
  var cv_line = $("line#cv");
  var bio_line = $("line#bio");
  var contact_line = $("line#contact");
  var top_bars = $(".top-bar");

  top_bars.each(function() {
    $(this).append("<div class='top-left'></div>");
    $(this).append("<div class='top-right'></div>");
  });

  function nav_actions(link, div, line) {
    $("a.current").each(function() {
      if($(this).attr('id')!= div.attr('id')) {
        $(this).removeClass("current");
      }
    });
    $("div.current").each(function() {
      if($(this).attr('id')!= div.attr('id')) {
        $(this).removeClass("current");
        $(this).hide();
      }
    });
    $("line.current").each(function() {
      if($(this).attr('id')!= line.attr('id')) {
        $(this).attr("class", "");
        $(this).hide();
      }
    });
    div.addClass("current");
    link.addClass("current");
    line.attr("class", "current");
    div.fadeIn("slow");
    //line.fadeIn("slow");
  }

  //sounds_link.click(function(){
  //  nav_actions(sounds_link, sounds_div, sounds_line);
  //});
  //cv_link.click(function(){
  //  nav_actions(cv_link, cv_div, cv_line);
  //});
  //bio_link.click(function(){
  //  nav_actions(bio_link, bio_div, bio_line);
  //});
  //contact_link.click(function(){
  //  nav_actions(contact_link, contact_div, contact_line);
  //});

  // CV page

  //$("#cv ul li.basic_box").click(function() {
  //  $(this).toggleClass("open");
  //  $(this).next(".box").children().slideToggle();
  //});

  // Connectors

  function lineDraw(linkToElem, linkFromElem){
    var linkTo = linkToElem;
    var linkFrom = linkFromElem;

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

  };

  // sounds open by default
  //lineDraw($("div#sounds > p.basic_box"), $("a#sounds_link img"));

  //sounds_link.click(function() {
  //  lineDraw($("div#sounds > p.basic_box"), $("a#sounds_link img"));
  //});
  //cv_link.click(function() {
  //  lineDraw($("div#cv li.basic_box"), $("a#cv_link img"));
  //});
  //bio_link.click(function() {
  //  lineDraw($("div#bio_image > div.text"), $("a#bio_link img"));
  //});
  //contact_link.click(function() {
  //  lineDraw($("div#contact > ul > li > span.basic_box"), $("a#contact_link img"));
  //});

});
