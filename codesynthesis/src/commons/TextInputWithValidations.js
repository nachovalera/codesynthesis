import React from 'react'
import { FormInput, FormLabel, FormValidationMessage } from 'react-native-elements'
import { View } from 'react-native'
import Colors from '../../constants/Colors'

const TextInputWithValidations = ({
    input,
    containerStyle,
    label,
    meta: { touched, error },
    ...custom
}) => (
    <View style={containerStyle}>
        <FormLabel fontFamily="workSans" labelStyle={{ color: Colors.greenDark }}>
            {label}
        </FormLabel>
        <FormInput
            {...input}
            {...custom}
        />
        {error && touched &&
            <FormValidationMessage fontFamily="workSans" labelStyle={{ color: Colors.red }}>
                {error}
            </FormValidationMessage>
        }
    </View>
)

export default TextInputWithValidations