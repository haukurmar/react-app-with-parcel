import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Container } from '../../../packages/ui'

const AppHeaderStyled = styled.div`
	height: 84px;
	background: #ccc;
	overflow: hidden;
`

const AppHeader = props => {
	return (
		<AppHeaderStyled>
			<Container>
				<h1>App Header</h1>
			</Container>
		</AppHeaderStyled>
	)
}

export default AppHeader
