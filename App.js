import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView,Text, TouchableOpacity, TouchableOpacityComponent, View, Platform, KeyboardAvoidingView, TextInput, Keyboard } from 'react-native';
import { useState } from 'react';
import Task from './components/Task';

export default function App() {

  const [task, setTask] = useState()
  const [tasks, setTasks] = useState([])
  const [showOverlay, setShowOverlay] = useState(false)

  const handleShowForm = () => {
    setShowOverlay(true)
  }
  const handleExitForm = () => {
    setShowOverlay(false)
    setTask('')
  }

  const handleAddForm = () => {
    setShowOverlay(false)
    Keyboard.dismiss()
    if(task == "") return
    setTasks([...tasks, task])
    setTask('')
  }

  const handleChangeText = (text) => {
    setTask(text)
  }

  const handleDeleteTask = (index) => {
    let copyTask = [...tasks]
    copyTask.splice(index, 1)
    setTasks(copyTask)
  }
  return (
    <View style={styles.container}>
      {showOverlay && (<View style={styles.addOverlay}>
        <View style={styles.addForm}>
          <TextInput style={styles.taskInput} placeholder="What's todays new task" value={task} onChangeText={handleChangeText}></TextInput>
          <View style={styles.addOptions}>
            <TouchableOpacity onPress={handleAddForm}><Text style={styles.check}>✓</Text></TouchableOpacity>
            <TouchableOpacity onPress={handleExitForm}><Text style={styles.exit}>X</Text></TouchableOpacity>
          </View>
        </View>
      </View>)}
      <View style={styles.header}>
          <Text style={styles.sectionTitle}>Today's Tasks</Text>
          <TouchableOpacity  onPress={handleShowForm}><Text style={styles.addbtn}>+</Text></TouchableOpacity>
      </View>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>

          <View style={styles.itemsWrapper}>
            {tasks.map((task, index) => (
              <Task text={task} key={index} handleDeleteTask={() => handleDeleteTask(index)}/>
            ))}
          </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  header: {
    flexDirection: "row",
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "space-between"
  },
  addbtn: {
    fontWeight: "bold",
    fontSize: 32,
    marginRight: 20
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 32,
  },
  itemsWrapper: {
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 20,
    alignItems: "center",
    marginTop: 20,
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 30,
  },
  addTask: {
    width: "100%",
    height: "auto",
    position: "absolute",
    bottom: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  textInput: {
    fontSize: 20,
  },
  addOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 9999,
    justifyContent: "center",
    alignItems: "center",
  },
  addForm: {
    padding: 10,
    backgroundColor: "#eee",
    height: 200,
    width: 300,
    borderRadius: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  taskInput: {
    fontSize: 20,
  },
  addOptions: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  check: {
    fontSize: 25,
    backgroundColor: "#0a0",
    padding: 5,
    color: "#fff",
    borderRadius: 5
    },
  exit: {
    fontSize: 25,
    backgroundColor: "#a00",
    padding: 5,
    color: "#fff",
    borderRadius: 5
  }

});
