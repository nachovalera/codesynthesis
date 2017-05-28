import React, { Component } from 'react'
import { Text, View, Alert } from 'react-native'
import styled from 'styled-components/native'
import Fonts from '../../../constants/Fonts'
import Colors from '../../../constants/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Facebook, Google } from 'expo'
import fbConfig from '../../../constants/fbConfig'
import googleConfig from '../../../constants/googleConfig'
import { connect } from 'react-redux'
import { login } from './actions'
import { LoadingScreen } from '../../commons'

const FlexContainer = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center;
    alignSelf: stretch;
`

const DeveloperWord = styled.Text`
    color: ${Colors.greenBase};
    fontFamily: workSansBold;
    fontSize: 20;
`

const LoginButtons = styled.View`
    flex: 0.2;
    flexDirection: row;
`

const Button = styled.TouchableOpacity`
    justifyContent: space-around;
    alignItems: center;
    flex: 1;
    backgroundColor: ${({ color }) => color};
    flexDirection: row;
    paddingHorizontal: 10;
`
@connect(state => ({ isLoading: state.user.isLoading }), { login })
export default class LoginScreen extends Component {
    state = {}

    _onLoginPress = name => {
        if (name === 'facebook'){
            this._logInWithFacebook()
        } else {
            this._logInWithGoogle()
        }
    }

    async _logInWithFacebook(){
        const { type, token } = await Facebook.logInWithReadPermissionsAsync(fbConfig.APP_ID, {
            permissions: ['public_profile', 'email']
        })

        if (type === 'success') {
            const resp = await fetch(`https://graph.facebook.com/me?access_token=${token}`)
            Alert.alert('Logged In!', `Hi ${(await resp.json()).name}`)
            this.props.login(token, 'facebook')
        } else {
            throw new Error('Sorry, somwthing went wrong')
        }
    }

    async _logInWithGoogle() {
        try {
            const result = await Google.logInAsync({
                iosClientId: googleConfig.CLIENT_ID_IOS,
                scopes: ['profile', 'email']
            })
            if(result.type === 'success'){
                this.props.login(result.accessToken, 'google')
            } else {
                return { cancelled: true }
            }
        } catch (e) {
            throw e
        }
    }

    render() {
        if (this.props.isLoading){
            return <LoadingScreen color={Colors.greenLight}/>
        }
        return (
            <FlexContainer>
                <FlexContainer>
                    <Text style={Fonts.loginBigTitle}>Codesynthesis Meetups</Text>
                </FlexContainer>
                <FlexContainer>
                    <FlexContainer>
                        <FlexContainer>
                            <Text style={Fonts.loginSubTitle}>Hello World!</Text>
                        </FlexContainer>
                        <FlexContainer>
                            <Text style={Fonts.loginText}>Discover meetups with <DeveloperWord>developers</DeveloperWord> like you</Text>
                        </FlexContainer>
                    </FlexContainer>
                    <LoginButtons>
                        <Button color={Colors.GoogleGreen} onPress={() => this._onLoginPress('google')}>
                            <Text style={Fonts.loginButton}>Connect with</Text>
                            <MaterialCommunityIcons name="google" size={30} color={Colors.white} />
                        </Button>
                        <Button color={Colors.FacebookBlue} onPress={() => this._onLoginPress('facebook')}>
                            <Text style={Fonts.loginButton}>Connect with</Text>
                            <MaterialCommunityIcons name="facebook" size={30} color={Colors.white} />
                        </Button>
                    </LoginButtons>
                </FlexContainer>
            </FlexContainer>
        )
    }
}