import React from "react"
import { Text, View, StyleSheet } from "react-native"

export default function Header(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 50,
        width: "100%",
        backgroundColor: "grey",
        justifyContent: "center",    
    },
    
    title: {
        fontSize: 30
    }
})