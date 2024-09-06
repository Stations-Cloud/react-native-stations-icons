import { Text, View } from "react-native"
import { General } from "react-native-stations-icons"

const HomeScreen = () => {
    return (
        <View style={{ marginTop: 150, display: 'flex', alignSelf: 'center' }}>
            <Text>Teste</Text>
            <General name='activity' size={310} color="#f3f" />
        </View>
    )
}

export default HomeScreen