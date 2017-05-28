import { StackNavigator } from 'react-navigation'
import HomeNavigator from './HomeNavigator'
import { CreateMeetupScreen } from '../screens'
import Colors from '../../constants/Colors'
import { MaterialIcons } from '@expo/vector-icons'
import Touchable from '@appandflow/touchable'
import styled from 'styled-components/native'
import React from 'react'

const CloseButton = styled(Touchable)`
    marginLeft: 10;
`

export default StackNavigator({
    Home: { screen: HomeNavigator },
    CreateMeetup: {
        screen: CreateMeetupScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Create a meetup',
            headerStyle: {
                backgroundColor: Colors.greenBase
            },
            headerTitleStyle: {
                color: Colors.white
            },
            headerLeft: (
                <CloseButton feedback="opacity" onPress={() => navigation.goBack()}>
                    <MaterialIcons name="close" color="#fff" size={30}/>
                </CloseButton>
            )
        })
    }
}, {
    mode: 'modal'
})