import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, InnerBlocks  } from '@wordpress/block-editor';
import { TexTControl, AnglePickerControl} from '@wordpress/components';
import './editor.scss';


export default function Edit({attributes, setAttributes}) {
	const { inputValue, angleValue } = attributes; 

	function handleInput(newValue){
		setAttributes({
			inputValue: newValue
		})
		console.log(inputValue)
	}

	function handleAngleChange(newAngle){
		setAttributes({
			angleValue: newAngle
		})
	}

	const squareStyle = {
		background: "red",
		padding: "1em",
		width: "5em",
		height: "5em",
		textAlign: "center",
	}

	return (
		<div {...useBlockProps}>
			<InspectorControls>
				<AnglePickerControl 
					value={ angleValue } 
					onChange={ handleAngleChange } 
				/>
			</InspectorControls>
			<p { ...useBlockProps() }>
				{ __(
					'Angle Picker Block – hello from the editor!',
					'angle-picker-block'
				) }
				<h2>Angle Value: {angleValue}</h2>
				<div style={{
					width: "8em",
					height: "8em",
					textAlign: "center",
					transform: `rotate(${angleValue}deg)`
				}}>
					<InnerBlocks />
				</div>
			</p>
		</div>
		
	);
}
