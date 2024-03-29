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
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes, isSelected } ) {

	const { final, title } = attributes;

	return (
		<div { ...useBlockProps() }>
			{ isSelected &&
				<>
					<RichText
						tagName="div"
						value={ title }
						onChange={ ( title ) => setAttributes( { title } ) }
						placeholder={ __( 'Title', 'better-blocks' ) }
					/>
					<NumberControl
						isShiftStepEnabled={ true }
						label={ __( 'Value', 'better-blocks' ) }
						onChange={ ( final ) => setAttributes( { final } ) }
						shiftStep={ 10 }
						value={ final }
					/>
				</>
			}
			{ ! isSelected &&
				<>
					<label for={ title }>{ title }:</label>
					<progress id={ title } max="100" value={ final }>{ final }%</progress>
				</>
			}
		</div>
	);
}
