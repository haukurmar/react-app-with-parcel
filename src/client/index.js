import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from 'styled-components'
import { injectGlobal } from 'styled-components'
import { baseStyles, theme } from './styles'

const MOUNT_NODE = document.getElementById('react-app')

// eslint-disable-next-line
injectGlobal`${baseStyles}`

const render = () => {
	ReactDOM.render(
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>,
		MOUNT_NODE,
	)
}

render()

if (module.hot) {
	module.hot.dispose(function() {
		// module is about to be replaced
	})
	module.hot.accept(function() {
		// module or one of its dependencies was just updated
	})
}
