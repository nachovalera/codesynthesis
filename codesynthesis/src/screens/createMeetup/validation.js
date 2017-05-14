export const createMeetupValidations = values => {
    const errors = {}
    const needsLonger = 'needs to be longer '
    const requiredFields = ['title', 'description']
    requiredFields.forEach(field => {
        if (!values[field]){
            errors[field] = 'required'
        }
    })
    if(values.title && values.title.length < 5) {
        errors.title = needsLonger
    }
    if(values.description && values.description.length < 5){
        errors.description = needsLonger
    }
    return errors
}