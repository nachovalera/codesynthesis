import React, { Component } from 'react'
import { View, Text  } from 'react-native'
import { connect } from 'react-redux'
import { LoadingScreen } from '../../commons'
import { MyMeetupsList } from './components'
import styles from './styles/HomeScreen'
import { fetchMyMeetups } from './actions'

@connect(
    state => ({
        myMeetups: state.home.myMeetups
    }),  
    { fetchMyMeetups }
)
class HomeScreen extends Component {

    componentDidMount() {
        this.props.fetchMyMeetups()
    }
    
    render() {
        const {
            myMeetups: {
                isFetched,
                data,
                error
            }
        } = this.props
        if (!isFetched) {
            return <LoadingScreen />
        } else if(error.on) {
            return (
                <View>
                    <Text>{error.message}</Text>
                </View>
            )
        }
        return (
            <View style={styles.root}>
                <View style={styles.topContainer}>
                    <Text>Codesynthesis</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <MyMeetupsList meetups={data}/>
                </View>
            </View>
        )
    }
}

export default HomeScreen