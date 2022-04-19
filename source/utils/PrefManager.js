import AsyncStorage from '@react-native-async-storage/async-storage'
import Light from "../assets/themes/light.json"

const ACTIVE_THEME = "@General:Theme"

export default class PrefManager {

    async setTheme(theme) {
        try {
            await AsyncStorage.setItem(ACTIVE_THEME, JSON.stringify(theme))
        } catch (error) {
            console.log(error)
        }
    }

    async getTheme(onLoaded) {
        try {
            const theme = await AsyncStorage.getItem(ACTIVE_THEME)
            const mTheme = theme ? JSON.parse(theme) : Light
            onLoaded(mTheme)
        } catch (error) {
            console.log(error)
            onLoaded(Light)
        }
    }

}