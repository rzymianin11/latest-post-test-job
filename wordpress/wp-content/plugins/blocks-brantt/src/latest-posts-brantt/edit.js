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
                <h2>{title}</h2>
				<h3 class="h1">{subtitle}</h3>
				<p>{__('Wyróżniony wpis ID:', 'brantt_blocks')} {featuredPostId}</p>
                <p>{__('Liczba postów do wyświetlenia:', 'brantt_blocks')} {numberOfPosts}</p>
				<p>{__('Kolejność:', 'brantt_blocks')} {order}</p>
            </div>
        </>
    );
}
