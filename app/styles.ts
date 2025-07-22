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
      borderTopLeftRadius: 13,
      borderBottomLeftRadius: 13,
      marginBottom: 8,
      color: colors.text,
      backgroundColor: colors.inputBg,
    },
    btn: {
      marginBottom: 8,
      height: 48,
      justifyContent: "center",
      borderTopRightRadius: 13,
      borderBottomRightRadius: 13,
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
    checkTitle: {
      flexDirection: "row",
      alignItems: "center",
      flex: 1,
    },
    listText: {
      fontSize: 18,
      color: colors.text,
      flexShrink: 1,
      maxWidth: "100%",
      flexWrap: "wrap",
    },
    listView: {
      flex: 1,
      width: "100%",
    },
    list: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 18,
      borderRadius: 13,
      width: "100%",
      borderWidth: 1,
      paddingHorizontal: 16,
      borderColor: colors.border,
      paddingVertical: 10,
   
      marginVertical: 8,
      backgroundColor: colors.inputBg,
    },

    checkIcon: {
      paddingRight: 10,
    },
    navText: {
      color: colors.text,
      fontSize: 22,
    },
    navBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      paddingHorizontal: 16,
      marginBottom: 23,
    },
    delIcon: {
      color: "#f68623",
      fontSize: 28,
    },
  });

export default getStyles;
