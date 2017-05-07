import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import Colors from '../../../constants/Colors'
import { MaterialIcons } from '@expo/vector-icons'
import styles from './styles/CreateMeetupScreen'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import DateTimePicker from 'react-native-modal-datetime-picker'
import moment from 'moment'
import { MeetupApi } from '../../../constants/api'

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
                <View style={styles.container}>
                    <View style={styles.item}>
                        <FormLabel fontFamily="workSans">Title</FormLabel>
                        <FormInput
                            onChangeText={this._changeTitle}
                            value={this.state.title}
                            selectionColor={Colors.greenBase}
                        />
                    </View>
                    <View style={styles.item}>
                        <FormLabel fontFamily="workSans">Description</FormLabel>
                        <FormInput
                            onChangeText={this._changeDescription}
                            value={this.state.description}
                            multiline selectionColor={Colors.greenBase}
                        />
                    </View>
                    <View style={styles.item}>
                        <Button onPress={ this._showDateTimePicker } title={ this._checkTitle() } raised fontFamily="workSans"/>
                    </View>
                    <View style={styles.buttonCreate}>
                        <Button
                            title="Create Meetup"
                            raised
                            backgroundColor={Colors.greenDark}
                            fontFamily="workSans"
                            disabled={this._checkIfButtonSubmitDisabled()}
                            onPress={this._createMeetup}
                        />
                    </View>
                </View>
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