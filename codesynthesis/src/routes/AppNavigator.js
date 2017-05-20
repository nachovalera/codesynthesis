import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'
import Navigator from './Navigator'
import { LoginScreen } from '../screens'

@connect(
    state => ({
        navigation: state.navigation,
        user: state.user
    })
)
export default class AppNavigator extends Component {
    state = {}
    render() {
        const navigation = addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.navigation
        })

        if(this.props.user.logged) {
            return <Navigator navigation={navigation} />
        }

        return <LoginScreen />
    }
}

export const router = Navigator.router