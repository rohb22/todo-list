import react from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Task(props) {
    return (
        <View style={styles.item}>
            <Text style={styles.task}>{props.text}</Text>
            <TouchableOpacity onPress={props.handleDeleteTask}>
            < Text style={styles.circle}></Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#ddd",
        minHeight: 50,
        width: "100%",
        padding: 20,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      circle: {
        backgroundColor: "#fff",
        borderRadius: 100,
        height: 20,
        width: 20,
        borderColor: "#000",
        borderWidth: 2,
      },
      task: {
        maxwidth: 80,
      },
})