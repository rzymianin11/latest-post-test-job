<?php
// This file is generated. Do not modify it manually.
return array(
	'latest-posts-brantt' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'brantt/latest-posts-brantt',
		'version' => '0.1.0',
		'title' => 'Latest posts (brantt__)',
		'category' => 'brantt_blocks',
		'icon' => 'smiley',
		'description' => 'Show latest post block',
		'render' => 'render.php',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'brantt_blocks',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Latest posts'
			),
			'subtitle' => array(
				'type' => 'string',
				'default' => 'Lorem ipsum dolor sit amit...'
			),
			'buttonText' => array(
				'type' => 'string',
				'default' => 'View all posts'
			),
			'buttonUrl' => array(
				'type' => 'string',
				'default' => '/blog'
			),
			'featuredPostId' => array(
				'type' => 'number',
				'default' => 0
			),
			'numberOfPosts' => array(
				'type' => 'number',
				'default' => 3
			),
			'order' => array(
				'type' => 'string',
				'default' => 'DESC'
			)
		)
	)
);
