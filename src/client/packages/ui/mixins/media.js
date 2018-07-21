import { css } from 'styled-components'
import { keys } from 'ramda'

export const breakpoints = {
	mobile: 0,
	tablet: 768,
	computer: 992,
	largeMonitor: 1200,
	widescreenMonitor: 1920,
}
const devices = keys(breakpoints)

const media = devices.reduce((acc, label, i) => {
	if (devices.length === i + 1) {
		acc[label] = (...args) => css`
			@media only screen and (min-width: ${breakpoints[label]}px) {
				${css(...args)};
			}
		`
	} else {
		const nextLabel = devices[i + 1]
		acc[label] = (...args) => css`
			@media only screen and (min-width: ${breakpoints[label]}px) and (max-width: ${breakpoints[nextLabel]}px) {
				${css(...args)};
			}
		`
	}

	return acc
}, {})

export default media
