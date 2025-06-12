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
        'post_status' => 'publish',
        'post__not_in'   => $featured_post_id ? [ $featured_post_id ] : [],
    ]);

    
echo '<div class="brantt-latest-posts-block">';
    echo '<div class="wrapper">';
        echo '<div class="row header align-items-start">';
            echo '<div class="col d-flex flex-column titles">';
                echo '<h3>' . $title . '</h3>';
                echo '<h4 class="h1">' . $subtitle . '</h4>';
            echo '</div>';

            echo '<div class="col-auto ml-auto">';
                echo '<a class="btn btn-inline view-more" href="' . $button_url . '"><span>' . $button_text . '</span> <i class="i i-arrow-right"></i></a>';
            echo '</div>';
        echo '</div>';

        echo '<div class="brantt-latest-posts-content">';
            echo '<div class="row">';
                if ( $featured_post_id ) {
                    $featured_post = get_post( $featured_post_id );
                    if ( $featured_post && $featured_post->post_status === 'publish' ) {
                        echo '<div class="featured-post">';
                            if ( has_post_thumbnail( $featured_post_id ) ) {
                                echo '<div class="featured-post-thumbnail">';
                                echo get_the_post_thumbnail( $featured_post_id, 'medium' );
                                echo '</div>';
                            }

                            echo '<div class="featured-post-content">';
                                echo '<div class="featured_mark"><i class="i i-star"></i>' . __('Featured post', 'brantt_blocks') .'</div>';
                                    echo '<h4 class="post_title"><a href="' . esc_url( get_permalink( $featured_post ) ) . '">' . esc_html( get_the_title( $featured_post ) ) . '</a></h4>';
                                    echo '<p>' . esc_html( get_the_excerpt( $featured_post ) ) . '</p>';
                                echo '</div>';
                            echo '</div>';
                    }
                }
            echo '</div>';
            echo '<div class="recent_posts_wrapper">';
            if ( $query->have_posts() ) {
                echo '<ul class="recent_posts row">';
                while ( $query->have_posts() ) {
                    $query->the_post();
                    echo '<li class="col-lg-4 col-sm-12"><div class="bg">';
                            if ( has_post_thumbnail() ) {
                                echo '<div class="post-thumbnail">';
                                the_post_thumbnail(null, 'medium' );
                                echo '</div>';
                            }   
                            echo '<div class="post-content">';
                                echo '<h3>' . esc_html( get_the_title() ) . '</h3>';
                                echo '<p>' . esc_html( get_the_excerpt() ) . '</p>';
                                echo '<a class="btn-readmore" href="' . esc_url( get_permalink() ) . '">' . __( 'Read more', 'brantt_blocks' ) . '</a>';
                            echo '</div>';
                    echo '</div></li>';
                }
                echo '</ul>';
            } else {
                echo '<p>Brak wpisów.</p>';
            }
                echo '</div>';
        echo '</div>';
    echo '</div>';
echo '</div>';