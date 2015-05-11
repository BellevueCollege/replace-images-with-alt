<?php
/**
 * Plugin Name: Replace All Images with Alt Text
 * Plugin URI: https://github.com/BellevueCollege/replace-images-with-alt/
 * Description: Enqueues jQuery to replace all images with their alt text. Designed to raise awareness for Global Accessibility Awareness Day 2015.
 * 0.0.1
 * Author: Bellevue College Information Technology Services
 * Author URI: http://www.bellevuecollege.edu
 * License:
 */

defined( 'ABSPATH' ) or die( 'No script kiddies please!' );


function image_replacement() {
	wp_enqueue_style(
		'replace-images-style',
		plugins_url( '/css/replace.css', __FILE__ )
	);
	wp_enqueue_script(
		'replace-images-script',
		plugins_url( '/js/replace.js', __FILE__ ),
		array( 'jquery' )
	);
}

add_action( 'wp_enqueue_scripts', 'image_replacement' );