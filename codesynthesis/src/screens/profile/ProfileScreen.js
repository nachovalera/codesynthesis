import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import Colors from '../../../constants/Colors'

class ProfileScreen extends Component {
    
    static navigationOptions = {
        header: {
            style: {
                backgroundColor: Colors.white
            }
        },
        tabBar: {
            icon: ({ tintColor }) => (
                <FontAwesome name="user" size={25} color={tintColor} />
            )
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>Profile</Text>
            </View>
        )
    }
}

export default ProfileScreen