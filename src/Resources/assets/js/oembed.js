/*!
 * oembed.js v0.0.1
 * https://github.com/GetOlympus/olympus-dionysos-field-oembed
 *
 * This plugin displays oEmbed canvas.
 *
 * Example of JS:
 *      $('.oembed').dionysosOembed({
 *          url: '.input-url',              // node element which contains url input
 *          height: '.input-height',        // node element which contains height input
 *          width: '.input-width',          // node element which contains width input
 *          html: '.input-html',            // node element which contains html input
 *          canvas: '.canvas',              // node element which contains oEmbed canvas
 *          removebutton: '.remove-button', // node element which contains remove button
 *      });
 *
 * Example of HTML:
 *      <div class="oembed">
 *          <input type="hidden" name="ctm" value="" />
 *
 *          <input type="url" name="ctm[url]" value="" class="oembed-url" placeholder="Enter URL" />
 *          <input type="hidden" name="ctm[height]" value="" class="oembed-height" />
 *          <input type="hidden" name="ctm[width]" value="" class="oembed-width" />
 *          <input type="hidden" name="ctm[html]" value="" class="oembed-html" />
 *
 *          <div class="canvas"></div>
 *
 *          <a href="#" class="remove-button">Clear oEmbed</a>
 *      </div>
 *
 * Copyright 2016 Achraf Chouk
 * Achraf Chouk (https://github.com/crewstyle)
 */

(function ($){
    "use strict";

    /**
     * Constructor
     * @param {nodeElement} $el
     * @param {array}       options
     */
    var Oembed = function ($el,options){
        // vars
        var _this = this;

        _this.$el = $el;
        _this.options = options;

        // update elements list
        _this.$url = _this.$el.find(_this.options.url);
        _this.$height = _this.$el.find(_this.options.height);
        _this.$width = _this.$el.find(_this.options.width);
        _this.$html = _this.$el.find(_this.options.html);
        _this.$canvas = _this.$el.find(_this.options.canvas);
        _this.$removebutton = _this.$el.find(_this.options.removebutton);

        // bind events
        _this.$removebutton.on('click', $.proxy(_this.clear_inputs, _this));
        _this.$url.on('keyup', $.proxy(_this.update_canvas, _this));
    };

    /**
     * @type {nodeElement}
     */
    Oembed.prototype.$canvas = null;

    /**
     * @type {nodeElement}
     */
    Oembed.prototype.$el = null;

    /**
     * @type {nodeElement}
     */
    Oembed.prototype.$height = null;

    /**
     * @type {nodeElement}
     */
    Oembed.prototype.$html = null;

    /**
     * @type {array}
     */
    Oembed.prototype.options = null;

    /**
     * @type {nodeElement}
     */
    Oembed.prototype.$removebutton = null;

    /**
     * @type {nodeElement}
     */
    Oembed.prototype.$url = null;

    /**
     * @type {nodeElement}
     */
    Oembed.prototype.$width = null;

    /**
     * Clears all inputs and canvas
     * @param {event} e
     */
    Oembed.prototype.clear_inputs = function (e){
        e.preventDefault();
        var _this = this;

        // remove all
        _this.$url.val('');
        _this.$height.val('');
        _this.$width.val('');
        _this.$html.val('');
        _this.$canvas.html('');

        // update canvas css
        _this.$canvas.addClass('empty');

        // focus on url
        _this.$url.focus();
    };

    /**
     * Depending on $url, update canvas after ajax call
     * @param {event} e
     */
    Oembed.prototype.update_canvas = function (e){
        e.preventDefault();
        var _this = this;

        // vars
        var _url = _this.$url.val();

        if ('' === _url) {
            return;
        }

        if ('http' !== _url.substr(0,4)) {
            _url = 'https://'+_url;
        }

        // make the AJAX request
        $.ajax(ajaxurl, {
            type: 'POST',
            dataType: 'json',
            data: {
                post_ID: 0,
                type: 'embed',
                shortcode: '[embed]'+_url+'[/embed]',
                maxwidth: 768,
                action: 'parse-embed'
            }
        }).done(function (x){
            // no results
            if (!x.success) {
                _this.$canvas.html(x.data.message);
            }

            // display data
            _this.$canvas.html(x.data.body);
            _this.$canvas.removeClass('empty');

            // update inputs
            _this.$height.val(x.data.attr.height);
            _this.$width.val(x.data.attr.width);
            _this.$html.val(x.data.body);
        }).fail(function (){
            _this.$canvas.html('');
            _this.$canvas.addClass('empty');
        });
    };

    var methods = {
        init: function (options){
            if (!this.length) {
                return false;
            }

            var settings = {
                url: '.input-url',
                height: '.input-height',
                width: '.input-width',
                html: '.input-html',
                canvas: '.canvas',
                removebutton: '.remove-button',
            };

            return this.each(function (){
                if (options) {
                    $.extend(settings, options);
                }

                new Oembed($(this), settings);
            });
        }
    };

    $.fn.dionysosOembed = function (method){
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        }
        else {
            $.error('Method '+method+' does not exist on dionysosOembed');
            return false;
        }
    };
})(window.jQuery);
