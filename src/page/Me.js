import React,{ Component } from 'react';
import { View, Image, ImageBackground } from 'react-native';

export default class Me extends Component {
    render() {
        return (
            <View>
                <View>
                    <Image source={require('../assets/images/setting.png')} style={{width:16,height:16}}/>
                    <Image source={require('../assets/images/msg.png')} style={{width:16,height:16}}/>
                </View>
                <ImageBackground source={require('../assets/images/sea.jpg')} style={{width:'100%',height:500}}>
                    <Image source={require('../assets/images/me.png')} style={{width:60,height:60}} resizeMode={'stretch'}></Image>
                    <Text>elias</Text>
                    <View>
                        <ImageBackground source={require('../assets/images/sundown.jpg')} style={{width:200,height:160}}>
                            <View>
                                <Image source={require('../assets/images/write.png')} style={{width:12,height:12}}></Image>
                                <Text>制作小记</Text>
                            </View>
                        </ImageBackground>
                        <Text>爱的终结者是顺境，而不是逆境。</Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}