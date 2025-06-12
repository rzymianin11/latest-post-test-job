import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, RangeControl, SelectControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { title, subtitle, numberOfPosts, order, buttonText, buttonUrl, featuredPostId } = attributes;

	const posts = useSelect( (select) => {
		return select('core').getEntityRecords('postType', 'post', { per_page: 20 });
	}, []);

	const postOptions = [
		{ label: __('— Brak wyróżnionego wpisu —', 'brantt_blocks'), value: 0 },
	];

 	if (posts) {
		posts.forEach(post => {
		postOptions.push({ label: post.title.rendered || `(ID: ${post.id})`, value: post.id });
		});
	}

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Ustawienia bloku', 'brantt_blocks')}>
					<TextControl
					label={__('Tekst przycisku', 'brantt_blocks')}
					value={attributes.buttonText}
					onChange={(value) => setAttributes({ buttonText: value })}
					/>

					<TextControl
					label={__('Link URL przycisku', 'brantt_blocks')}
					value={attributes.buttonUrl}
					onChange={(value) => setAttributes({ buttonUrl: value })}
					/>
                    <TextControl
                        label={__('Tytuł', 'brantt_blocks')}
                        value={title}
                        onChange={(value) => setAttributes({ title: value })}
                    />
                    <TextControl
                        label={__('Podtytuł', 'brantt_blocks')}
                        value={subtitle}
                        onChange={(value) => setAttributes({ subtitle: value })}
                    />
					<SelectControl
						label={__('Wyróżniony wpis', 'brantt_blocks')}
						value={featuredPostId}
						options={postOptions}
						onChange={(value) => setAttributes({ featuredPostId: Number(value) })}
					/>
                    <RangeControl
                        label={__('Liczba postów', 'brantt_blocks')}
                        value={numberOfPosts}
                        onChange={(value) => setAttributes({ numberOfPosts: value })}
                        min={1}
                        max={3}
                    />
                    <SelectControl
                        label={__('Kolejność postów', 'brantt_blocks')}
                        value={order}
                        options={[
                            { label: __('Malejąco (najnowsze pierwsze)', 'brantt_blocks'), value: 'DESC' },
                            { label: __('Rosnąco (najstarsze pierwsze)', 'brantt_blocks'), value: 'ASC' },
                        ]}
                        onChange={(value) => setAttributes({ order: value })}
                    />
                </PanelBody>
            </InspectorControls>

            <div { ...useBlockProps() }>
                <div className={'brantt-latest-posts-block'}>
                    <div className={'wrapper'}>
                    <div className={'row header align-items-start'}>
                        <div className={'col d-flex flex-column titles'}>
                            <h3>Latest posts</h3>
                            <h4 className="h1">Lorem ipsum dolor sit amit…</h4>
                        </div>
                        <div className={'col-auto ml-auto'}><a className={'btn btn-inline view-more'} href="/blog"><span>View all posts</span> <i className={'i i-arrow-right'}></i></a></div>
                    </div>
                    <div className={'brantt-latest-posts-content'}>
                        <div className={'row'}>
                            <div className={'featured-post'}>
                            <div className={'featured-post-thumbnail'}><img fetchpriority="high" decoding="async" width="300" height="223" src="http://localhost/wp-content/uploads/2025/06/fernando-brasil-XM_2oqcbpIQ-unsplash-2@2x-300x223.png" className={'attachment-medium size-medium wp-post-image'} alt="" srcset="http://localhost/wp-content/uploads/2025/06/fernando-brasil-XM_2oqcbpIQ-unsplash-2@2x-300x223.png 300w, http://localhost/wp-content/uploads/2025/06/fernando-brasil-XM_2oqcbpIQ-unsplash-2@2x.png 738w" sizes="(max-width: 300px) 100vw, 300px"/></div>
                            <div className={'featured-post-content'}>
                                <div className={'featured_mark'}><i className={'i i-star'}></i>Featured post</div>
                                <h4 className={'post_title'}><a href="http://localhost/career-changer-guide/">CAREER CHANGER GUIDE</a></h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus, justo sed rutrum vulputate.</p>
                            </div>
                            </div>
                        </div>
                        <div className={'recent_posts_wrapper'}>
                            <ul className="recent_posts row">
                            <li className="col-lg-4 col-sm-12">
                                <div className={'bg'}>
                                    <div className={'post-thumbnail'}><img decoding="async" width="350" height="217" src="http://localhost/wp-content/uploads/2025/06/guilherme-stecanella-_dH-oQF9w-Y-unsplash-1.png" className={'attachment- size- wp-post-image'} alt="" medium="" srcset="http://localhost/wp-content/uploads/2025/06/guilherme-stecanella-_dH-oQF9w-Y-unsplash-1.png 350w, http://localhost/wp-content/uploads/2025/06/guilherme-stecanella-_dH-oQF9w-Y-unsplash-1-300x186.png 300w" sizes="(max-width: 350px) 100vw, 350px"/></div>
                                    <div className={'post-content'}>
                                        <h3>Lorem ipsum�dolor sit amet</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus, justo sed rutrum vulputate.</p>
                                        <a className={'btn-readmore'} href="http://localhost/lorem-ipsum-dolor-sit-amet-3/">Read more</a>
                                    </div>
                                </div>
                            </li>
                            <li className="col-lg-4 col-sm-12">
                                <div className={'bg'}>
                                    <div className={'post-thumbnail'}><img decoding="async" width="350" height="217" src="http://localhost/wp-content/uploads/2025/06/eye-for-ebony-vYpbBtkDhNE-unsplash-1.png" className={'attachment- size- wp-post-image'} alt="" medium="" srcset="http://localhost/wp-content/uploads/2025/06/eye-for-ebony-vYpbBtkDhNE-unsplash-1.png 350w, http://localhost/wp-content/uploads/2025/06/eye-for-ebony-vYpbBtkDhNE-unsplash-1-300x186.png 300w" sizes="(max-width: 350px) 100vw, 350px"/></div>
                                    <div className={'post-content'}>
                                        <h3>Lorem ipsum�dolor sit amet</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus, justo sed rutrum vulputate</p>
                                        <a className={'btn-readmore'} href="http://localhost/lorem-ipsum-dolor-sit-amet-2/">Read more</a>
                                    </div>
                                </div>
                            </li>
                            <li className="col-lg-4 col-sm-12">
                                <div className={'bg'}>
                                    <div className={'post-thumbnail'}><img loading="lazy" decoding="async" width="350" height="217" src="http://localhost/wp-content/uploads/2025/06/vinicius-wiesehofer-UOavP_Z38lE-unsplash-1.png" className={'attachment- size- wp-post-image'} alt="" medium="" srcset="http://localhost/wp-content/uploads/2025/06/vinicius-wiesehofer-UOavP_Z38lE-unsplash-1.png 350w, http://localhost/wp-content/uploads/2025/06/vinicius-wiesehofer-UOavP_Z38lE-unsplash-1-300x186.png 300w" sizes="auto, (max-width: 350px) 100vw, 350px"/></div>
                                    <div className={'post-content'}>
                                        <h3>Lorem ipsum�dolor sit amet</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus, justo sed rutrum vulputate.</p>
                                        <a className={'btn-readmore'} href="http://localhost/lorem-ipsum-dolor-sit-amet/">Read more</a>
                                    </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}
