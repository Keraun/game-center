/* ==========================================================
 * index.js v20151208
 * ==========================================================
 * Copyright wulingyang
 *
 * 首页
 * ========================================================== */

(function($, window, undefined) {

  var tap = 'touchstart';

  var ui = {
    $slider: $('#slider'),
    $slider_item: $('#slider .pic-group li'),
    $slider_pagination: $('#pagination'),
    $nav: $('#nav'),
    $search: $('#search'),
    $input_search: $('.input-search')
  };

  var v_plugin = {};
  v_plugin.list = new Vue({
    el: '#template',
    data: oPageConfig
  });

  var _cur_title = '推荐';

  var oPage = {
    init: function() {
      this.view();
      this.listen();
    },
    view: function() {
      var self = this;

      if (ui.$slider_item.length > 1) {
        window.mySwiper = new Swiper('.swiper-container', {
          loop: true,
          grabCursor: true,
          paginationClickable: true,
          autoplay: 3000,
          autoResize: true,
          resizeReInit: true,
          onSlideChangeEnd: function(swiper) {
            ui.$slider_pagination.find('li.active').removeClass('active');
            ui.$slider_pagination.find('li').eq(swiper.activeLoopIndex).addClass('active');
          },
          onSlideChangeStart: function(swiper) {
            ui.$slider_item.find('.swiper-slide').eq(swiper.activeIndex).css('display', 'block')
          },
        });
      }
    },
    listen: function() {
      var self = this;
      ui.$nav.on(tap, 'li', function(e) {
        _cur_title = $(this).data('key')
        v_plugin.list.$data.title = _cur_title;
      });
      ui.$input_search.focus(function() {
        ui.$search.toggleClass('intput-search-active');
      });
      ui.$input_search.blur(function() {
        ui.$search.toggleClass('intput-search-active');
      });
      v_plugin.list.$watch('search', function(new_num, old_num) {
        var title = '';
        if (!!new_num) {
          title = '搜索:' + new_num;
        } else {
          title = _cur_title;
        }
        v_plugin.list.$data.title = title;
        if ($('#recommend .item').length > 0) {
          v_plugin.list.$data.isNull = false;
        } else {
          v_plugin.list.$data.isNull = true;
        }
      });
    }
  }

  $(function() {
    oPage.init();
  });

})(Zepto, window)