import React from 'react'
import { View } from 'react-native'
import { Field, reduxForm } from 'redux-form'
import { Button } from 'react-native-elements'
import { TextInputWithValidations } from '../../../commons'
import Colors from '../../../../constants/Colors'
import styles from './styles/CreateMeetupForm'
import { createMeetupValidations } from '../validation'

const CreateMeetupForm = ({
    createMeetup,
    checkTitle,
    showDateTimePicker
}) => (
    <View style={styles.container}>
        <Field
            component = { TextInputWithValidations }
            name="title"
            label="Title"
            containerStyle = { styles.item }
            selectionColor = { Colors.greenLight }
        />
        <Field
            component = { TextInputWithValidations }
            name="description"
            label="Description"
            containerStyle = { styles.item }
            selectionColor = { Colors.greenLight }
            multiline
        />
        <View style={styles.item}>
            <Button
                fontFamily="workSans"
                raised
                title={checkTitle}
                onPress={showDateTimePicker}
            />
        </View>
        <View style={styles.buttonCreate}>
             <Button
                title="Create Meetup"
                raised
                backgroundColor={Colors.greenDark}
                fontFamily="workSans"
                onSubmit={createMeetup}
            />
        </View>
    </View>
)

export default reduxForm({
    form: 'createMeetup',
    validate: createMeetupValidations
})(CreateMeetupForm)