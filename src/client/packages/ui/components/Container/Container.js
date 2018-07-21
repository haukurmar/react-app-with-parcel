import React from 'react'
import { media, breakpoints } from '../../mixins'
import styled from 'styled-components'

const mobileWidth = 'auto'
const tabletWidth = `${breakpoints.tablet - 20}px`
const computerWidth = `${breakpoints.computer - 32}px` // comes down to 960px
const largeMonitorWidth = `${breakpoints.largeMonitor - 30}px`
const wideMonitorWidth = `${breakpoints.widescreenMonitor - 140}px`

const StyledContainer = styled.div`
	display: block;
	max-width: 100%;
	margin: 0 auto;
	&&& {
		${media.mobile`
			width: ${mobileWidth};
		`};

		${media.tablet`
			width: ${tabletWidth};
		`};

		${media.computer`
			width: ${computerWidth};
		`};

		${media.largeMonitor`
			width: ${largeMonitorWidth};
		`};

		${media.widescreenMonitor`
			width: ${wideMonitorWidth};
		`};
	}
`

const Container = ({ children }) => <StyledContainer>{children}</StyledContainer>

export default Container
