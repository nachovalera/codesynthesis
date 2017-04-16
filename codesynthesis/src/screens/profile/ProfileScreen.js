import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

class ProfileScreen extends Component {
    
    static navigationOptions = {
        tabBar: {
            icon: () => (
                <FontAwesome name="user" size={25} />
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