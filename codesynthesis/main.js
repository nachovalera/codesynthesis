import Expo, { Components } from 'expo';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet'
import Colors from './constants/Colors'
import Root from './src/Root'
import { cachedFonts } from './helpers'

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
    	return <Root />
	}
}

Expo.registerRootComponent(App);
