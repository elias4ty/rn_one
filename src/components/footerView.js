import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export default class BottomView extends Component {
	render() {
		return (
			<View style={styles.main}>
				<View>
                	<Image source={require('../assets/images/one.png')} style={{width:16,height:16}}/>
					<Text>ONE</Text>
				</View>
				<View>
                	<Image source={require('../assets/images/all.png')} style={{width:16,height:16}}/>
					<Text>ALL</Text>
				</View>
				<View>
                	<Image source={require('../assets/images/me.png')} style={{width:16,height:16}}/>
					<Text>ME</Text>
				</View>								
			</View>
		)
	}
}

const styles = StyleSheet.create({
	main : {
		flexDirection:'row',
		justifyContent: 'space-between',
		height:149,
		paddingHorizontal:40,
		backgroundColor:'#ffffff',
		borderTopWidth:1,
		borderColor:'#dbdbdb',
	}
})