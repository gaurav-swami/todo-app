import { COLOR_SCHEMES, Theme, ThemeName } from "@/constants/theme";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import getStyles from "./styles";

import { SafeAreaView } from "react-native-safe-area-context";

type Task = {
  title: string;
  completed: boolean;
};

export default function HomeScreen() {
  console.log("done");
  const [theme, setTheme] = useState<ThemeName>("dark");
  const colors: Theme = COLOR_SCHEMES[theme];
  const styles = getStyles(colors);

  const [text, setText] = useState<string>("");
  const loadTasksFromStorage = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@tasks");
      if (jsonValue != null) {
        setTasks(JSON.parse(jsonValue));
      }
    } catch (err) {
      console.log("error fetching the tasks");
    }
  };

  const saveTasksToStorage = async (tasksToSave: Task[]) => {
    try {
      const jsonValue = JSON.stringify(tasksToSave);
      await AsyncStorage.setItem("@tasks", jsonValue);
    } catch (err) {
      console.log("error saving tasks");
    }
  };

  useEffect(() => {
    loadTasksFromStorage();
  }, []);

  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask() {
    console.log("triggered");
    if (!text.trim()) return;
    const updatedTasks = [...tasks, { title: text, completed: false }];
    setTasks(updatedTasks);
    saveTasksToStorage(updatedTasks);
    setText("");
  }
  function removeTask(index: number) {
    if (tasks.length == 0) return;
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
    saveTasksToStorage(updatedTasks);
  }
  function clearTasks() {
    setTasks([]);
    saveTasksToStorage([]);
  }
  function checkTask(index: number) {
    const updatedTasks = tasks.map((task, i) =>
      i == index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    saveTasksToStorage(updatedTasks);
  }

  return (
    // <ImageBackground source={require("../assets/images/bgimage.jpg")} style = {{flex: 1}} resizeMode="stretch">
    // {/* <View style = {styles.overlay}> */}
    <SafeAreaView style={styles.container}>
      <View style={styles.navBar}>
        <Text style={styles.navText}>To-Do List</Text>
        <TouchableOpacity onPress={clearTasks}>
          <MaterialIcons
            name="delete-outline"
            style={styles.delIcon}
            color="#000"
            size={24}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inner}>
        <TextInput
          style={styles.input}
          placeholder="What needs to be done?"
          placeholderTextColor={colors.border}
          value={text}
          onChangeText={setText}
          returnKeyType="done"
          onSubmitEditing={addTask}
        />

        <TouchableOpacity style={styles.btn} onPress={addTask}>
          <Text style={styles.btnText}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listView}>
        <FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.list}>
                <View style={styles.checkTitle}>
                  <TouchableOpacity
                    onPress={() => checkTask(index)}
                    style={styles.checkIcon}
                  >
                    {item.completed ? (
                      <Ionicons
                        name="checkmark-circle"
                        size={28}
                        color={colors.primary}
                      />
                    ) : (
                      <MaterialCommunityIcons
                        name="checkbox-blank-circle-outline"
                        color={colors.text}
                        size={28}
                      />
                    )}
                  </TouchableOpacity>
                  <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={[
                      styles.listText,
                      item.completed && {
                        textDecorationLine: "line-through",
                        fontStyle: "italic",

                        color: colors.completed,
                      },
                    ]}
                  >
                    {item.title}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => removeTask(index)} style={{paddingLeft: 10}}>
                  <SimpleLineIcons name="close" size={24} color= {colors.primary} />
                </TouchableOpacity>
              </View>
            );
          }}
        ></FlatList>
      </View>
    </SafeAreaView>
    //   </View>
    // </ImageBackground>
  );
}
