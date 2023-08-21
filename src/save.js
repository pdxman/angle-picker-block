import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({attributes} ) {
	
	const { angleValue } = attributes; 
	
	return (

	

		<p { ...useBlockProps.save() }>
			{ 'Angle Picker Block – hello from the saved content!' }
				<div style={{
					transform: `rotate(${angleValue}deg)`
				}}>
					<InnerBlocks.Content />
				</div>
		</p>
	);
}
