import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import Colors from '../../../constants/Colors'
import { MaterialIcons } from '@expo/vector-icons'
import styles from './styles/CreateMeetupScreen'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import DateTimePicker from 'react-native-modal-datetime-picker'
import moment from 'moment'

class CreateMeetupScreen extends Component {
    static navigationOptions = {
        title: 'Create Meetup',
        header: ({ goBack }) => {
            const style = { backgroundColor: Colors.greenBase }
            const titleStyle = { color: Colors.white }
            const left = (
                <TouchableOpacity style={styles.iconClose} onPress={() => goBack()}>
                    <MaterialIcons name="close" size={30} color={Colors.white}/>
                </TouchableOpacity>
            )
            return { style, titleStyle, left }
        }
    }

    state = {
        isDateTimePickerVisible: false,
        date: moment()
    }

    _handleDateTimePicker = () => this.setState({ isDateTimePickerVisible: false }) 

    _handleDatePicked = date => {
        this.setState({date}) 
        this._handleDateTimePicker()
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })

    _checkTitle() {
        if(this.state.date > moment()){
            return moment(this.state.date).format('MMMM Do YYYY, h:mm:ss a ')
        } else {
            return 'Pick a date'
        }
    }

    render() {
        return (
            <View style={styles.root}>
                <View style={styles.container}>
                    <View style={styles.item}>
                        <FormLabel fontFamily="workSans">Title</FormLabel>
                        <FormInput selectionColor={Colors.greenBase}/>
                    </View>
                    <View style={styles.item}>
                        <FormLabel fontFamily="workSans">Description</FormLabel>
                        <FormInput multiline selectionColor={Colors.greenBase}/>
                    </View>
                    <View style={styles.item}>
                        <Button onPress={ this._showDateTimePicker } title={ this._checkTitle() } raised fontFamily="workSans"/>
                    </View>
                    <View style={styles.buttonCreate}>
                        <Button title="Create Meetup" raised backgroundColor={Colors.greenDark} fontFamily="workSans"/>
                    </View>
                </View>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._handleDateTimePicker }
                    mode="datetime"
                />
            </View>
        )
    }
}

export default CreateMeetupScreen