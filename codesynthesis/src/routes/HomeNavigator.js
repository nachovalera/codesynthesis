import { TabNavigator } from 'react-navigation'
import Colors from '../../constants/Colors'
import { HomeScreen, NotificationsScreen, ProfileScreen } from '../screens'
import React from 'react'
import Touchable from '@appandflow/touchable'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'

const AddButton = styled(Touchable)`
    marginRight: 10;
`

const NavbarDefaultStyle = {
    backgroundColor: Colors.greenLight
}

export default TabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            headerStyle: NavbarDefaultStyle,
            headerRight: (
                <AddButton feedback="opacity" onPress={() => navigation.navigate('CreateMeetup')}>
                    <MaterialIcons name="add-circle" size={30} color="#fff"/>
                </AddButton>
            ),
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome name="home" size={25} color={tintColor} />
            )
        })
    },
    Notifications: {
        screen: NotificationsScreen,
        navigationOptions: {
            headerStyle: NavbarDefaultStyle,
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcons name="notifications" size={25} color={tintColor} />
            )
        }
    },
    ProfileScreen: {
        screen: ProfileScreen,
        navigationOptions: {
            headerStyle: NavbarDefaultStyle,
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcons name="account-circle" size={25} color={tintColor} />
            )
        }
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