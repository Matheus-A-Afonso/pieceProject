import { Component } from "react"
import {Text, View,Image,Button,StyleSheet,TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
class Login extends Component {
    
    render(){   
        return (
            <LinearGradient
            // Background Linear Gradient
            colors={['#8E51FF','#10509E']}
            style={{flex:1}}
            >
                <View style={{padding: 36,justifyContent:'space-around',alignItems:'center',flex:1}}>
                    <Image source={require('../../assets/logo/logo.png')} style={{width:140,height:149,resizeMode:'contain'}}></Image>
                    
                    <View style={{alignItems:'center'}}>
                        <Text style={{fontSize: 24,color:'#fff',fontFamily:'exo'}}>Entre</Text>
                        <View style={{flexDirection:'row',paddingTop:20,width:140,justifyContent:'space-between'}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Topics')}>
                        <View style={styles.buttonBorder}>
                                <Image  style={styles.button} source={require('../../assets/icons/google.png')}></Image>
                            </View>
                        </TouchableOpacity>
                            <View style={styles.buttonBorder}>
                                <Image  style={styles.button} source={require('../../assets/icons/facebook.png')}></Image>
                            </View>
                            
                        </View>
                    </View>
                </View>
            </LinearGradient>
        )
    }
}
const styles = StyleSheet.create({
    button:{
        width: 24,
        height: 24,
        resizeMode: 'contain'
    },
    buttonBorder: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 9999
    }
})
export default Login