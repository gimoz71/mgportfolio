/*
 * LazyCrossFade - jQuery Plugin
 * v0.1
 * Copyright (c) 2010 Stefan Hueg - http://www.codengine.de
 */

jQuery.fn.fadeSimple = function(imgs, userargs) {
	var defs = {
		start_index: 1,
		duration: 2000,
		delay: 2000,
		easing: 'linear'
	}
	var args = jQuery.extend({}, defs, userargs);
	var images = imgs;

	if (images.length <= 1)
	{
		return this;
	}

	for (var i = 0; i < images.length; i++)
	{
		if (typeof images[i] == "string")
		{
			images[i] = {src: images[i]};
		}
	}

	this.css('position', 'relative');

	if (args.start_index > images.length)
	{
		cur_index = 1;
	} else {
		if (args.start_index == (images.length - 1))
		{
			cur_index = 0;
		} else {
			var cur_index = args.start_index + 1;
		}
	}

	var step = 1;

	var fade_img_1 = $('<img />').load(function(){
		$(this).unbind();
		loop();
	}).attr('src', images[args.start_index].src).attr('id', 'fadeSimple_1').css({left: 0, top: 0, position: 'absolute'}).appendTo(this);

	var fade_img_2 = $('<img />').load(function(){
     	$(this).data('loaded', true).unbind();
	}).attr('src', images[cur_index].src).attr('id', 'fadeSimple_2').css({left: 0, top: 0, position: 'absolute'}).hide().appendTo(this);

	function load_img(el, src)
	{
		el.data('loaded', false).load(function(){
			$(this).data('loaded', true);
		}).attr('src', src);
	}

	function cross_anim(src, dst)
	{
		if (typeof images[cur_index].onAnim == "function")
		{
			images[cur_index].onAnim(this);
		}
		src.fadeOut(args.duration, args.easing);
		dst.fadeIn(args.duration, args.easing, function(){
			if (typeof images[cur_index].callback == "function")
			{
				images[cur_index].callback(this);
			}

			if (cur_index >= images.length - 1)
			{
				cur_index = 0;
			} else {
				cur_index++;
			}

			load_img(src, images[cur_index].src);

			loop();
		});
	}

	function check_status(src, dst)
	{
		if (dst.data('loaded') == true)
		{
			cross_anim(src, dst);
		} else {
			dst.bind('load', function(){
				$(this).unbind();
				cross_anim(src, dst);
			});
		}
	}

	function loop()
	{
		setTimeout(function(){
			if (step == 1)
			{
				step = 2;
				check_status(fade_img_1, fade_img_2);
			} else {
				step = 1;
				check_status(fade_img_2, fade_img_1);
			}
		}, args.delay);
	}

	return this;
}