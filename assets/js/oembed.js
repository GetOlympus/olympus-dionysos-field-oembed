!function(o){"use strict";function n(t,e){var n=this;n.$el=t,n.options=e,n.$url=n.$el.find(n.options.url),n.$height=n.$el.find(n.options.height),n.$width=n.$el.find(n.options.width),n.$html=n.$el.find(n.options.html),n.$canvas=n.$el.find(n.options.canvas),n.$removebutton=n.$el.find(n.options.removebutton),n.$removebutton.on("click",o.proxy(n.clear_inputs,n)),n.$url.on("keyup",o.proxy(n.update_canvas,n))}n.prototype.$canvas=null,n.prototype.$el=null,n.prototype.$height=null,n.prototype.$html=null,n.prototype.options=null,n.prototype.$removebutton=null,n.prototype.$url=null,n.prototype.$width=null,n.prototype.clear_inputs=function(t){t.preventDefault();var e=this;e.$url.val(""),e.$height.val(""),e.$width.val(""),e.$html.val(""),e.$canvas.html(""),e.$url.focus()},n.prototype.update_canvas=function(t){t.preventDefault();var e=this,n=e.$url.val();""!==n&&("http"!==n.substr(0,4)&&(n="https://"+n),o.ajax(ajaxurl,{type:"POST",dataType:"json",data:{post_ID:0,type:"embed",shortcode:"[embed]"+n+"[/embed]",maxwidth:1156,action:"parse-embed"}}).done(function(t){t.success||e.$canvas.html(t.data.message),e.$canvas.html(t.data.body),e.$height.val(t.data.attributes.height),e.$width.val(t.data.attributes.width),e.$html.val(t.data.attributes.html)}).fail(function(){e.$canvas.html("")}))};var e={init:function(t){if(!this.length)return!1;var e={url:".input-url",height:".input-height",width:".input-width",html:".input-html",canvas:".canvas",removebutton:".remove-button"};return this.each(function(){t&&o.extend(e,t),new n(o(this),e)})}};o.fn.dionysosOembed=function(t){return e[t]?e[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?(o.error("Method "+t+" does not exist on dionysosOembed"),!1):e.init.apply(this,arguments)}}(window.jQuery);