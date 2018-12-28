import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export default class BottomView extends Component {
	render() {
		return (
			<View style={styles.main}>
				<View style={styles.item}>
                	<Image source={require('../assets/images/one.png')} style={{width:18,height:18}}/>
					<Text style={{fontSize:12}}>ONE</Text>
				</View>
				<View style={styles.item}>
                	<Image source={require('../assets/images/all.png')} style={{width:18,height:18}}/>
					<Text style={{fontSize:12}}>ALL</Text>
				</View>
				<View style={styles.item}>
                	<Image source={require('../assets/images/me.png')} style={{width:18,height:18}}/>
					<Text style={{fontSize:12}}>ME</Text>
				</View>								
			</View>
		)
	}
}

const styles = StyleSheet.create({
	main : {
		position:'absolute',
		bottom:0,
		flexDirection:'row',
		justifyContent: 'space-between',
		height:40,
		paddingHorizontal:40,
		backgroundColor:'#ffffff',
		borderTopWidth:1,
		borderColor:'#dbdbdb',
		alignItems:'center',
		width:'100%'
	},
	item: {
		alignItems:'center',
	}
})