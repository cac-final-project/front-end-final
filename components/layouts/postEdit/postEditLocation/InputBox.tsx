import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const SearchIcon = require("@/assets/images/write/location/SearchSmall.png");
const CloseIcon = require("@/assets/images/write/location/Close.png");

interface InputBoxProps {
  searchword: string;
  onSearchwordChange: (newSearchword: string) => void;
  handleDelete: () => void;
}

const InputBox: React.FC<InputBoxProps> = ({
  searchword,
  onSearchwordChange,
  handleDelete,
}) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.leftContent}>
            <Image source={SearchIcon} style={styles.icon} />
            <TextInput
              value={searchword}
              onChangeText={onSearchwordChange}
              style={styles.inputText}
              placeholder="Search"
              numberOfLines={1}
            />
          </View>
          {searchword !== "" && (
            <TouchableOpacity
              onPress={handleDelete}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Image source={CloseIcon} style={styles.closeIcon} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 40,
    padding: 8,
    backgroundColor: "white",
    borderRadius: 8,
    borderColor: "#0069A4",
    borderWidth: 2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputText: {
    color: "#171717",
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
    marginRight: 40,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  closeIcon: {
    marginLeft: -16,
  },
});

export default InputBox;
