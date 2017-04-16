import EstyleSheet from 'react-native-extended-stylesheet'

const styles = EstyleSheet.create({
    root: {
        flex: 1
    },
    titleContainer: {
        flex: 0.1,
        paddingHorizontal: '2.5%',
        paddingVertical: '2.5%'
    },
    title: {
        color: '#fff',
        fontSize: 25,
        fontFamily: 'workSans'
    },
    contentContainer: {
        flex: 1
    },
    meetupCard: {
        height: 200,
        width: 175,
        marginHorizontal: '1,5%',
        backgroundColor: '$greenLight'
    },
    meetupCardTopContainer: {
        flex: 1,
        position: 'relative'
    },
    meetupCardTitle: {
        position: 'absolute',
        color: '$white',
        top: '2%',
        left: '2.5%',
        fontFamily: 'workSansBold'
    },
    meetupCardBottomContainer: {
        flex: 0.4,
        backgroundColor: '$white',
        justifyContent: 'center',
        paddingHorizontal: '2.5%'
    },
    meetupCardMetaName: {
        fontSize: 15,
        fontFamily: 'workSans'
    },
    meetupCardMetaDate: {
        fontSize: 13,
        fontFamily: 'workSansLight'
    }
})

export default styles;