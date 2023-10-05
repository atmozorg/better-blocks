/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( { attributes } ) {

	const { layout, imageUrl } = attributes;

	const blockProps = useBlockProps.save({
		"data-layout": layout
	});
	
	return (
		<div { ...blockProps }>
			<img className="wp-block-better-blocks-call-to-action__image" src={ imageUrl }/>
			<div className="wp-block-better-blocks-call-to-action__body">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}