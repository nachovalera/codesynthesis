import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Colors from '../../../constants/Colors'
import { Button, Icon } from 'native-base'

class CreateMeetupScreen extends Component {
    static navigationOptions = {
        title: 'Create Meetup',
        header: ({ goBack }) => {
            const style = { backgroundColor: Colors.greenBase }
            const titleStyle = { color: Colors.white }
            const left = (
                <Button transparent onPress={() => goBack()}>
                    <Icon name="md-close" style={{ fontSize: 30, color: Colors.white }}/>
                </Button>
            )
            return { style, titleStyle, left }
        }
    }
    render() {
        return (
            <View>
                <Text>Formulario Crear</Text>
            </View>
        )
    }
}

export default CreateMeetupScreen