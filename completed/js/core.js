var formObject = {
	isEmpty : function(thisValue) {
		"use strict";
		return (thisValue === '' || typeof thisValue === 'undefined') ? true : false;
	},
	wrapHint : function(thisMessage) {
		"use strict";
		return '<span class="info">' + thisMessage + '</span>';
	},
	hint : function(thisIdentity) {
		"use strict";
		$('form').on('focusin focusout', thisIdentity, function(e) {
			var thisTitle = $(this).attr('title');
			var thisName = $(this).attr('name');
			var thisWidth = $(this).outerWidth();
			if (!formObject.isEmpty(thisTitle) && $('.hint_' + thisName).length > 0) {
				switch(e.type) {
					case 'focusin':
					if ($('.hint_' + thisName).find('.info').length === 0) {
						thisTitle = formObject.wrapHint(thisTitle);
						$('.hint_' + thisName).append($(thisTitle).css('left', thisWidth + 'px'));
					}
					break;
					default:
					$('.hint_' + thisName).find('.info').remove();
				}
			}
		});
	},
	focus : function(thisIdentity) {
		"use strict";
		if ($(thisIdentity).length > 0) {
			$(thisIdentity).focus();
		}
	}
};
$(function() {
	formObject.hint('.hint');
	formObject.focus('.focus');
});