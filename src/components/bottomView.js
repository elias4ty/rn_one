import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default class BottomView extends Component {
	render() {
		return (
			<View style={styles.main}>
                <Image source={require('../assets/images/next.png')} style={{width:150,height:150}}/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	main : {
		flexDirection:'row',
		flex:1,
		alignItems:'center',
		justifyContent: 'center',
		height:300,
		backgroundColor:'rgba(239,236,237,1.0)'
	}
});