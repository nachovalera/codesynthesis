import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import Fonts from '../../../constants/Fonts'
import Colors from '../../../constants/Colors'

const FlexContainer = styled.View`
    flex: 1;
    justifyContent: center;
    alignItems: center;
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
    justifyContent: center;
    alignItems: center;
    flex: 1;
    backgroundColor: ${({ color }) => color};
`

export default class LoginScreen extends Component {
    state = {}

    render() {
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
                        <Button color="green">
                            <Text style={Fonts.loginButton}>Sign In!</Text>
                        </Button>
                        <Button color="blue">
                            <Text style={Fonts.loginButton}>Sign Up!</Text>
                        </Button>
                    </LoginButtons>
                </FlexContainer>
            </FlexContainer>
        )
    }
}