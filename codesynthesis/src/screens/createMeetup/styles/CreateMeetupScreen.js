import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center'
    },
    container: {
        flex: 1,
        width: '95%'
    },
    item: {
        marginVertical: '2%'
    },
    buttonCreate: {
        position: 'absolute',
        right: 0,
        left: 0,
        bottom: '4%'
    },
    iconClose: {
        marginLeft: '3%'
    }
})

export default styles