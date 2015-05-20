/*
	GAAD Script
	Replace all images with their alt text
*/

// Function to swap image with alt text
function swapAlt (elem) {
	var alttext = elem.attr("alt");
	var altformat = '<div class="bg-info gaadimage">Image: '+alttext+'</div>'; //markup for added text
	elem.hide().after(altformat);
}

jQuery(document).ready(function(){

	//call function
	jQuery('img').each(function() {
		swapAlt(jQuery(this));
	})
});
