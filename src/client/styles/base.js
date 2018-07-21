import styledNormalize from 'styled-normalize'
import { css } from 'styled-components'

export const base = {
	backgroundColor: '#f4f4f4',
	borderColor: '#ddd',
	color: '#333',
	fontSize: '14px',
	pageMinWidth: '320px',
	fontFamily: `'Helvetica Neue', Arial, Helvetica, Sans-serif`,
	lineHeight: '18px',
	link: {
		color: '',
	},
}

const baseStyles = css`
	${styledNormalize}
	html,
	body {
		min-height: 100%;
		height: 100%;
		font-size: ${base.fontSize};
	}
	
	body {
		padding: 0;
		margin: 0;
		background-color: ${base.backgroundColor};
		color: ${base.color};
		line-height: ${base.lineHeight};
		font-family: ${base.fontFamily};
		font-smoothing: antialised;
		overflow-x: hidden;
		min-width: ${base.pageMinWidth};
	}
	
	body * {
		box-sizing: border-box;
	}

	a {
		color: ${base.link.color};
		text-decoration: 'underline';

		&:hover {
			text-decoration: none;
		}
	}
	
	fieldset {
		border: none;
		padding: 0;
		margin: 0;
	}
	
	#react-app {
		width: 100%;
		height: 100%;
	}

	
	/* IE10 and under support for hidden attribute */
	*[hidden] {
		display: none;
	}
`

export default baseStyles
