import Expo, { Components } from 'expo'
import React from 'react'
import { Provider } from 'react-redux'
import EStyleSheet from 'react-native-extended-stylesheet'
import Colors from './constants/Colors'
import Root from './src/Root'
import { cachedFonts } from './helpers'
import store from './src/redux/store'

EStyleSheet.build(Colors)

class App extends React.Component {
	state = {
		fontLoaded: false
	}

	componentDidMount() {
		this._loadAssetsAsync()
	}

	async _loadAssetsAsync() {
		const fontAssets = cachedFonts([
			{
				workSans: require('./assets/fonts/WorkSans-Regular.ttf')
			},
			{
				workSansBold: require('./assets/fonts/WorkSans-Bold.ttf')
			},
			{
				workSansLight: require('./assets/fonts/WorkSans-Light.ttf')
			},
			{
				workSansMed: require('./assets/fonts/WorkSans-Medium.ttf')
			}
		])
		await Promise.all(fontAssets)
		this.setState({ fontLoaded: true })
	}

	render() {
		if (!this.state.fontLoaded){
			return <Components.AppLoading />
		}
    	return (
			<Provider store={store}>
				<Root />
			</Provider>
		)
	}
}

Expo.registerRootComponent(App)
