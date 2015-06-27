

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

/*
 * jQuery Easing v1.3.2 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Open source under the BSD License.
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * https://raw.github.com/gdsmith/jquery-easing/master/LICENSE
 */

// t: current time, b: begInnIng value, c: change In value, d: duration
(function($){$.easing['jswing'] = $.easing['swing'];

  $.extend( $.easing,
    {
      def: 'easeOutQuad',
      swing: function (x, t, b, c, d) {
        //alert($.easing.default);
        return $.easing[$.easing.def](x, t, b, c, d);
      },
      easeInQuad: function (x, t, b, c, d) {
        return c*(t/=d)*t + b;
      },
      easeOutQuad: function (x, t, b, c, d) {
        return -c *(t/=d)*(t-2) + b;
      },
      easeInOutQuad: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t + b;
        return -c/2 * ((--t)*(t-2) - 1) + b;
      },
      easeInCubic: function (x, t, b, c, d) {
        return c*(t/=d)*t*t + b;
      },
      easeOutCubic: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t + 1) + b;
      },
      easeInOutCubic: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
      },
      easeInQuart: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t + b;
      },
      easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
      },
      easeInOutQuart: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
      },
      easeInQuint: function (x, t, b, c, d) {
        return c*(t/=d)*t*t*t*t + b;
      },
      easeOutQuint: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t*t*t + 1) + b;
      },
      easeInOutQuint: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
        return c/2*((t-=2)*t*t*t*t + 2) + b;
      },
      easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
      },
      easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t/d * (Math.PI/2)) + b;
      },
      easeInOutSine: function (x, t, b, c, d) {
        return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
      },
      easeInExpo: function (x, t, b, c, d) {
        return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
      },
      easeOutExpo: function (x, t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
      },
      easeInOutExpo: function (x, t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
      },
      easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
      },
      easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
      },
      easeInOutCirc: function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
        return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
      },
      easeInElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
      },
      easeOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
      },
      easeInOutElastic: function (x, t, b, c, d) {
        var s=1.70158;var p=0;var a=c;
        if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
        if (a < Math.abs(c)) { a=c; var s=p/4; }
        else var s = p/(2*Math.PI) * Math.asin (c/a);
        if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
      },
      easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*(t/=d)*t*((s+1)*t - s) + b;
      },
      easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
      },
      easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
      },
      easeInBounce: function (x, t, b, c, d) {
        return c - $.easing.easeOutBounce (x, d-t, 0, c, d) + b;
      },
      easeOutBounce: function (x, t, b, c, d) {
        if ((t/=d) < (1/2.75)) {
          return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
          return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
        } else if (t < (2.5/2.75)) {
          return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
        } else {
          return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
        }
      },
      easeInOutBounce: function (x, t, b, c, d) {
        if (t < d/2) return $.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
        return $.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
      }
    });})(jQuery);
z

/*!
 * jQuery scrollify
 * Version 0.1.7
 *
 * Requires:
 * - jQuery 1.6 or higher
 *
 * https://github.com/lukehaas/Scrollify
 *
 * Copyright 2015, Luke Haas
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
(function ($,window,document,undefined) {
  "use strict";
  var heights = [],
    names = [],
    elements = [],
    index = 0,
    currentHash = window.location.hash,
    hasLocation = false,
    timeoutId,
    timeoutId2,
    top = $(window).scrollTop(),
    scrollable = false,
    settings = {
      //section should be an identifier that is the same for each section
      section: "section",
      sectionName: "section-name",
      easing: "easeOutExpo",
      scrollSpeed: 1100,
      offset : 0,
      scrollbars: true,
      axis:"y",
      target:"html,body",
      //touchExceptions:"a",
      before:function() {},
      after:function() {}
    };
  $.scrollify = function(options) {

    function animateScroll(index) {

      if(names[index]) {
        settings.before(index,elements);
        if(settings.sectionName) {
          window.location.hash = names[index];
        }

        $(settings.target).stop().animate({
          scrollTop: heights[index]
        }, settings.scrollSpeed,settings.easing);

        $(settings.target).promise().done(function(){settings.after(index,elements);});
      }
    }
    var manualScroll = {
      handleMousedown:function() {
        scrollable = false;
      },
      handleMouseup:function() {
        scrollable = true;
      },
      handleScroll:function() {

        if(timeoutId){
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(function(){
          top = $(window).scrollTop();
          if(scrollable===false) {
            return false;
          }
          scrollable = false;

          var i =1,
            max = heights.length,
            closest = 0,
            prev = Math.abs(heights[0] - top),
            diff;
          for(;i<max;i++) {
            diff = Math.abs(heights[i] - top);

            if(diff < prev) {
              prev = diff;
              closest = i;
            }
          }
          index = closest;
          animateScroll(closest);
        }, 200);
      },
      wheelHandler:function(e,delta) {

        e.preventDefault();

        delta = delta || -e.originalEvent.detail / 3 || e.originalEvent.wheelDelta / 120;

        clearTimeout(timeoutId);

        timeoutId = setTimeout(function(){

          //if(!(index==heights.length-1 && ((index-delta) % (heights.length)==0))) {
          //index = (index-delta) % (heights.length);
          //}

          if(delta<0) {
            if(index<heights.length-1) {
              index++;
            }
          } else if(delta>0) {
            if(index>0) {
              index--;
            }
          }
          if(index>=0) {
            animateScroll(index);
          } else {
            index = 0;
          }
        },50);
      },
      keyHandler:function(e) {
        e.preventDefault();
        if(e.keyCode==38) {
          if(index>0) {
            index--;
          }
          animateScroll(index);
        } else if(e.keyCode==40) {
          if(index<heights.length-1) {
            index++;
          }
          animateScroll(index);
        }
      },
      init:function() {
        if(settings.scrollbars) {
          $(window).bind('mousedown', manualScroll.handleMousedown);
          $(window).bind('mouseup', manualScroll.handleMouseup);
          $(window).bind('scroll', manualScroll.handleScroll);
        } else {
          $("body").css({"overflow":"hidden"});
        }

        $(document).bind('DOMMouseScroll mousewheel',manualScroll.wheelHandler);
        $(document).bind('keyup', manualScroll.keyHandler);
      }
    };

    var swipeScroll = {
      touches : {
        "touchstart": {"y":-1},
        "touchmove" : {"y":-1},
        "touchend"  : false,
        "direction" : "undetermined"
      },
      options:{
        "distance" : 30,
        "timeGap" : 800,
        "timeStamp" : new Date().getTime()
      },
      touchHandler: function(event) {
        var touch;
        if (typeof event !== 'undefined'){
          //if($(event.target).parents(settings.touchExceptions).length<1 && $(event.target).is(settings.touchExceptions)===false) {
          //event.preventDefault();
          //}
          if (typeof event.touches !== 'undefined') {
            touch = event.touches[0];
            switch (event.type) {
              case 'touchstart':
                swipeScroll.touches.touchstart.y = touch.pageY;
                swipeScroll.touches.touchmove.y = -1;

                swipeScroll.options.timeStamp = new Date().getTime();
                swipeScroll.touches.touchend = false;
              case 'touchmove':
                swipeScroll.touches.touchmove.y = touch.pageY;
                if(swipeScroll.touches.touchstart.y!==swipeScroll.touches.touchmove.y) {
                  event.preventDefault();
                  if((swipeScroll.options.timeStamp+swipeScroll.options.timeGap)<(new Date().getTime()) && swipeScroll.touches.touchend == false) {

                    swipeScroll.touches.touchend = true;
                    if (swipeScroll.touches.touchstart.y > -1) {

                      if(Math.abs(swipeScroll.touches.touchmove.y-swipeScroll.touches.touchstart.y)>swipeScroll.options.distance) {
                        if(swipeScroll.touches.touchstart.y < swipeScroll.touches.touchmove.y) {
                          if(index>0) {
                            index--;
                          }
                          animateScroll(index);
                        } else {
                          if(index<heights.length-1) {
                            index++;
                          }
                          animateScroll(index);
                        }
                      }
                    }
                  }
                }
                break;
              case 'touchend':
                if(swipeScroll.touches[event.type]===false) {
                  swipeScroll.touches[event.type] = true;
                  if (swipeScroll.touches.touchstart.y > -1 && swipeScroll.touches.touchmove.y > -1) {

                    if(Math.abs(swipeScroll.touches.touchmove.y-swipeScroll.touches.touchstart.y)>swipeScroll.options.distance) {
                      if(swipeScroll.touches.touchstart.y < swipeScroll.touches.touchmove.y) {
                        if(index>0) {
                          index--;
                        }
                        animateScroll(index);
                      } else {
                        if(index<heights.length-1) {
                          index++;
                        }
                        animateScroll(index);
                      }
                    }
                    swipeScroll.touches.touchstart.y = -1;
                  }
                }
              default:
                break;
            }
          }
        }
      },
      init: function() {
        if (document.addEventListener) {
          document.addEventListener('touchstart', swipeScroll.touchHandler, false);
          document.addEventListener('touchmove', swipeScroll.touchHandler, false);
          document.addEventListener('touchend', swipeScroll.touchHandler, false);
        }
      }
    };
    if(typeof options === 'string') {
      var z = names.length;
      for(;z>=0;z--) {
        if(typeof arguments[1] === 'string') {
          if (names[z]==arguments[1]) {
            index = z;
            animateScroll(z);
          }
        } else {
          if(z===arguments[1]) {
            index = z;
            animateScroll(z);
          }
        }


      }
    } else {
      settings = $.extend(settings, options);

      calculatePositions(false);


      if(hasLocation===false && settings.sectionName) {
        window.location.hash = names[0];
      } else {
        animateScroll(index);
      }

      manualScroll.init();
      swipeScroll.init();
    }

    $(window).resize(function() {
      clearTimeout(timeoutId2);
      timeoutId2 = setTimeout(function() {
        calculatePositions(true);
      },50);
    });

    function calculatePositions(resize) {

      $(settings.section).each(function(i){
        if(i>0) {
          heights[i] = $(this).offset().top + settings.offset;
        } else {
          heights[i] = $(this).offset().top;
        }
        if(settings.sectionName && $(this).data(settings.sectionName)) {
          names[i] = "#" + $(this).data(settings.sectionName).replace(/ /g,"-");
        } else {
          names[i] = "#" + (i + 1);
        }


        elements[i] = $(this);

        if(window.location.hash===names[i]) {
          index = i;
          hasLocation = true;

        }
      });

      if(true===resize) {
        animateScroll(index);
      }


    }
  };

}(jQuery,this,document));
