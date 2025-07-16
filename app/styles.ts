import { StyleSheet } from "react-native";
import { Theme } from "../constants/theme";

const getStyles = (colors: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      alignItems: "center",
      backgroundColor: colors.background,
    },
    inner: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    input: {
      flex: 1,
      fontSize: 18,
      borderWidth: 1,
      paddingHorizontal: 16,
      borderColor: colors.border,
      paddingVertical: 10,
      height: 48,
      borderTopLeftRadius: 99,
      borderBottomLeftRadius: 99,
      marginBottom: 8,
      color: colors.text,
      backgroundColor: colors.inputBg,
    },
    btn: {
      marginBottom: 8,
      height: 48,
      justifyContent: "center",
      borderTopRightRadius: 99,
      borderBottomRightRadius: 99,
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderWidth: 1,
      borderColor: colors.primary,
      backgroundColor: colors.primary,
      color: colors.primary,
    },
    btnText: {
      fontSize: 18,
      color: colors.inputBg,
    },
    listText: {
      fontSize: 18,
      color: colors.text,
    },
    listView: {
      flex: 1,
      width: "100%",
    },
    list: {
      flexDirection: "row",
      justifyContent: "space-between",
      fontSize: 18,
      borderRadius: 99,
      width: "100%",
      borderWidth: 1,
      paddingHorizontal: 16,
      borderColor: colors.border,
      paddingVertical: 10,
      height: 48,
      marginVertical: 8,
      backgroundColor: colors.inputBg,
    },
    checkTitle: {
      flexDirection: "row",
      alignItems: "center",
    },
    checkIcon: {
      paddingRight: 10,
    },
  });

export default getStyles;
