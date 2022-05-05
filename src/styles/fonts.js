import * as Font from 'expo-font';

export default {
    async loadFonts(){
        await Font.loadAsync({
            'exoBold': require('../../assets/fonts/exo/Exo-Bold.ttf'),
            'exo': require('../../assets/fonts/exo/Exo-Regular.ttf'),
            'exoSemiBold': require('../../assets/fonts/exo/Exo-SemiBold.ttf'),
            'exoLight': require('../../assets/fonts/exo/Exo-Light.ttf'),
            'frontageBold': require('../../assets/fonts/frontage/Frontage-Bold.otf'),
            'frontage': require('../../assets/fonts/frontage/Frontage-Regular.otf'),
        })
        
    }
}