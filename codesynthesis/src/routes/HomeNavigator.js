import { TabNavigator } from 'react-navigation'
import Colors from '../../constants/Colors'
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
},  {
    swipeEnabled: true,
    animationEnabled: false,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
        inactiveTintColor: Colors.greenDark,
        indicatorStyle: { backgroundColor: Colors.greenLight },
        activeTintColor: Colors.greenLight,
        pressColor: Colors.greenLight,
        style: {
            backgroundColor: Colors.white
        }
    }
})