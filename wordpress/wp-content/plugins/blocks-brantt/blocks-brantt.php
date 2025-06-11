<?php
/**
 * Plugin Name:       Brantt__ Blocks
 * Description:       Show latest post block
 * Version:           0.1.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            brantt__
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       brantt_blocks
 *
 * @package Brantt
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

//require_once __DIR__ . '/build/latest-posts-brantt/render.php';

function brantt_latest_posts_brantt_block_init() {
    if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
        wp_register_block_types_from_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
        return;
    } elseif ( function_exists( 'wp_register_block_metadata_collection' ) ) {
        wp_register_block_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
        return;
    } else {
        $manifest_data = require __DIR__ . '/build/blocks-manifest.php';
        foreach ( array_keys( $manifest_data ) as $block_type ) {
            register_block_type( __DIR__ . "/build/{$block_type}" );
        }
    }
}
add_action( 'init', 'brantt_latest_posts_brantt_block_init' );
