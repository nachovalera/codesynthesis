import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import Colors from '../../../constants/Colors'
import { MaterialIcons } from '@expo/vector-icons'
import styles from './styles/CreateMeetupScreen'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import DateTimePicker from 'react-native-modal-datetime-picker'
import moment from 'moment'
import { MeetupApi } from '../../../constants/api'
import { CreateMeetupForm } from './components'

const meetupApi = new MeetupApi()

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
        date: moment(),
        title: '',
        description: ''
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

    _checkIfButtonSubmitDisabled() {
        const { title, description, date } = this.state
        if(title.length > 4 && description.length > 4 && date > moment()){
            return false
        } else {
            return true
        }
    } 

    _changeTitle = title => this.setState({ title })

    _changeDescription = description => this.setState({ description  })

    _createMeetup = async () => {
        const { title, description, date } = this.state

        const res = await meetupApi.createGroupMeetups({
            title,
            description,
            date
        })

        console.log(res)
    }

    render() {
        return (
            <View style={styles.root}>
                <CreateMeetupForm 
                    createMeetup={this._createMeetup}
                    showDateTimePicker={this._showDateTimePicker}
                    checkTitle={this._checkTitle()}
                />
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._handleDateTimePicker}
                    mode="datetime"
                />
            </View>
        )
    }
}

export default CreateMeetupScreen