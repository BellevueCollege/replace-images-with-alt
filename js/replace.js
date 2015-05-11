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

	// add styles (added here via jQuery to make adding and removing this code simpler)
	jQuery('head').append(
		"<style>.gaadimage { padding:.25em; } .carousel .gaadimage { min-height:300px; text-align:center; padding: 1em; }</style>"
	)

	//call function
	jQuery('img').each(function() {
		swapAlt(jQuery(this));
	})
});