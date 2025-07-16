import { COLOR_SCHEMES, Theme, ThemeName } from "@/constants/theme";
import {
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import getStyles from "./styles";

type Task = {
  title: string;
  completed: boolean;
};

export default function HomeScreen() {
  const [theme, setTheme] = useState<ThemeName>("light");
  const colors: Theme = COLOR_SCHEMES[theme];
  const styles = getStyles(colors);

  const [text, setText] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([
    { title: "Play RDR2", completed: false },
    { title: "Code React-Native", completed: false },
  ]);

  function addTask() {
    console.log("triggered");
    if (!text.trim()) return;
    setTasks([...tasks, { title: text, completed: false }]);
    setText("");
  }
  function removeTask(index: number) {
    if (tasks.length == 0) return;
    setTasks(tasks.filter((task, i) => i !== index));
  }

  function checkTask(index: number) {
    setTasks((prev) =>
      prev.map((task, i) =>
        i == index ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task"
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
                    style={[
                      styles.listText,
                      item.completed && {
                        textDecorationLine: "line-through",
                        color: colors.completed,
                      },
                    ]}
                  >
                    {item.title}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => removeTask(index)}>
                  <SimpleLineIcons name="close" size={24} color={colors.text} />
                </TouchableOpacity>
              </View>
            );
          }}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
}
