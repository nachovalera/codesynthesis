import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import Colors from '../../../constants/Colors'
import { MaterialIcons } from '@expo/vector-icons'
import styles from './styles/CreateMeetupScreen'
import DateTimePicker from 'react-native-modal-datetime-picker'
import moment from 'moment'
import { CreateMeetupForm } from './components'
import { connect } from 'react-redux'
import { createMeetup } from './actions'
import { LoadingScreen } from '../../commons'

@connect(
    state => ({
        meetup: state.createMeetup,
    }),
    { createMeetup }
)
export default class CreateMeetupScreen extends Component {
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

    _checkIfButtonSubmitDisabled() {
        const { date } = this.state
        if(date > moment()){
            return false
        } else {
            return true
        }
    }

    _createMeetup = async values => {
        await this.props.createMeetup(values)
        this.props.navigation.goBack()
    }

    render() {
        const { meetup } = this.props
        if (meetup.isLoading){
            return (
                <View style={styles.root}>
                    <LoadingScreen />
                </View>
            )
        } else if (meetup.error.on) {
            return (
                <View style={styles.root}>
                    <Text>{meetup.error.message}</Text>
                </View>
            )
        }
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
