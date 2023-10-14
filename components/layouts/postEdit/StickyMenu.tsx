import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";

const ImagePickIcon = require("@/assets/images/write/ImagePick.png");

interface StickMenuProps {
  pickImage: () => void;
}

const StickyMenu: React.FC<StickMenuProps> = ({ pickImage }) => {
  return (
    <View style={styles.stickyMenu}>
      <TouchableOpacity onPress={pickImage}>
        <Image source={ImagePickIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  stickyMenu: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: Colors.signupBoxBorder,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
});

export default StickyMenu;
