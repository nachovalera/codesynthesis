import { TabNavigator } from 'react-navigation'
import { HomeScreen, NotificationsScreen, ProfileScreen } from '../screens'

export default TabNavigator({
    Home: {
        screen: HomeScreen
    },
    Notifications: {
        screen: NotificationsScreen
    },
    Profile: {
        screen: ProfileScreen
    }
})