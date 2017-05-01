import { Font } from 'expo'

export const cachedFonts = fonts => fonts.map(font => Font.loadAsync(font))

export const fontAssets = cachedFonts([
    {
		workSans: require('../assets/fonts/WorkSans-Regular.ttf')
	},
	{
		workSansBold: require('../assets/fonts/WorkSans-Bold.ttf')
	},
	{
		workSansLight: require('../assets/fonts/WorkSans-Light.ttf')
	},
	{
		workSansMed: require('../assets/fonts/WorkSans-Medium.ttf')
	}
])