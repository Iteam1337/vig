$('#affix-nav').on('activate.bs.scrollspy', function (e) {
			var $section = $($(this).find('.active').find('a').attr('href')),
				classes = $section.get(0).className,
				regex = /cbg|wbg|bbg/i;

				if (classes.match(regex)) {
					$('#affix-nav').removeClass('wbg, cbg, bbg').addClass(classes.match(regex)[0]);
				} else {
					$('#affix-nav').removeClass('wbg, cbg, bbg');
				}
			})