import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import { responsiveFontSize } from "react-native-responsive-dimensions";

const HeaderButtons = ({ changeToUsers, navigation }) => {
  const openAllPeoples = () => {
    navigation.navigate("AllPeople");
  };

  const AddContacts = () => {
    navigation.navigate("AddContacts");
  };

  return (
    <View style={styles.headerLeftContainer}>
      <TouchableOpacity
        onPress={changeToUsers ? openAllPeoples : console.log("")}
        style={[styles.button, { marginRight: 20 }]}
      >
        {!changeToUsers ? (
          <Ionicons name="ios-camera" size={responsiveFontSize(3)} />
        ) : (
          <MaterialIcons
            name="perm-contact-calendar"
            style={{ paddingHorizontal: 5 }}
            size={responsiveFontSize(2.5)}
            color="black"
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={changeToUsers ? AddContacts : console.log("")}
        style={styles.button}
      >
        {!changeToUsers ? (
          <Ionicons name="md-create-outline" size={responsiveFontSize(3)} />
        ) : (
          <FontAwesome5
            name="user-plus"
            size={responsiveFontSize(2)}
            color="black"
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default HeaderButtons;

const styles = StyleSheet.create({
  headerLeftContainer: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "rgba(211,211,211,0.2)",
    borderRadius: 200,
    padding: 5,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 35,
    height: 35,
  },
});
