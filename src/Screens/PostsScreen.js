import {View, Text, StyleSheet} from 'react-native'

export const PostScreen = ({route}) => {
    console.log(route)
    return (
        <View style={styles.container}>
            <Text>PostScreen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})