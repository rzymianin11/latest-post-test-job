<?php

    $featured_post_id = intval( $attributes['featuredPostId'] ?? 0 );
    $title = esc_html( $attributes['title'] ?? 'Najnowsze wpisy' );
    $subtitle = esc_html( $attributes['subtitle'] ?? 'Lorem ipsum dolor sit amit...' );
    $count = intval( $attributes['numberOfPosts'] ?? 3 );
    $order = in_array( strtoupper( $attributes['order'] ?? '' ), [ 'ASC', 'DESC' ] ) ? strtoupper( $attributes['order'] ) : 'DESC';
    $button_text = esc_html( $attributes['buttonText'] ?? 'View all posts' );
    $button_url  = esc_url( $attributes['buttonUrl'] ?? '/blog' );

    $query = new WP_Query([
        'post_type'      => 'post',
        'posts_per_page' => $count,
        'order'          => $order,
        'orderby'        => 'date',
        'post__not_in'   => $featured_post_id ? [ $featured_post_id ] : [],
    ]);

    echo '<div class="brantt-latest-posts-block wrapper">';
        echo '<div class="container">';
            echo '<div class="row">';

                echo '<div style="margin-bottom: 10px;">';
                echo '<a class="btn btn-inline view-more" href="' . $button_url . '"><span>' . $button_text . '</span> <i class="i i-arrow-right"></i></a>';
                echo '</div>';

                echo '<h3>' . $title . '</h3>';
                echo '<h4 class="h1">' . $subtitle . '</h4>';

    // Featured post (wyróżniony wpis)
    if ( $featured_post_id ) {
        $featured_post = get_post( $featured_post_id );
        if ( $featured_post && $featured_post->post_status === 'publish' ) {
            echo '<div class="featured-post" style="margin-bottom: 20px; padding: 10px; border: 2px solid #0073aa; display: flex; gap: 15px;">';

            if ( has_post_thumbnail( $featured_post_id ) ) {
                echo '<div class="featured-post-thumbnail" style="flex-shrink: 0;">';
                echo get_the_post_thumbnail( $featured_post_id, 'medium', [ 'style' => 'border-radius: 6px; max-width: 150px; height: auto;' ] );
                echo '</div>';
            }

            echo '<div class="featured-post-content">';
            echo '<h4 style="margin-top:0;"><a href="' . esc_url( get_permalink( $featured_post ) ) . '">' . esc_html( get_the_title( $featured_post ) ) . '</a></h4>';
            echo '<p>' . esc_html( get_the_excerpt( $featured_post ) ) . '</p>';
            echo '</div>';

            echo '</div>';
        }
    }

    // Lista najnowszych postów (bez featured)
    if ( $query->have_posts() ) {
        echo '<ul>';
        while ( $query->have_posts() ) {
            $query->the_post();
            echo '<li><a href="' . esc_url( get_permalink() ) . '">' . esc_html( get_the_title() ) . '</a></li>';
        }
        echo '</ul>';
    } else {
        echo '<p>Brak wpisów.</p>';
    }
               echo '</div>';
            echo '</div>';
    echo '</div>';