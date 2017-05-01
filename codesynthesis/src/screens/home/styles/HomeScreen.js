import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '$greenBase'
    },
    topContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomContainer: {
        flex: 1
    },
    iconAdd: {
        marginRight: '3%'
    }
})

export default styles