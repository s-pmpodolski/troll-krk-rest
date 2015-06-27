

(function($) {
////////////////////////////////////////////////////////////////////////////////

  var  fuCover  = function(obje) {
    var curWinWidth  = $(window).width();
    var curWinHeight = $(window).height();
    $(obje).width( curWinWidth);
    $(obje).height( curWinHeight);
  };
  var cover=$.fn.cover = function (){
    var _self = this;
    fuCover(_self);

    $( window ).resize(function() {
      fuCover(_self);
    });

  };

})(jQuery);
