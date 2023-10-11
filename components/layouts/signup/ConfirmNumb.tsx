import React, { useRef } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Colors } from "@/constants/Colors";

interface ConfirmNumbProps {
  phoneNo: string;
  confirmNo: string;
  setConfirmNo: (value: string) => void;
}

const ConfirmNumb: React.FC<ConfirmNumbProps> = ({
  phoneNo,
  confirmNo,
  setConfirmNo,
}) => {
  const refs = Array(6)
    .fill(0)
    .map(() => useRef<TextInput>(null));

  const handleTextChange = (text: string, index: number) => {
    const newConfirmNo = `${confirmNo.slice(0, index)}${text}${confirmNo.slice(
      index + 1
    )}`;
    setConfirmNo(newConfirmNo);

    if (text.length === 1 && index < 5) {
      refs[index + 1].current?.focus();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        Enter the code we’ve sent to +1{phoneNo}.
      </Text>
      <View style={styles.inputContainer}>
        {refs.map((ref, index) => (
          <TextInput
            key={index}
            ref={ref}
            style={styles.input}
            keyboardType="numeric"
            onChangeText={(text) => handleTextChange(text, index)}
            value={confirmNo[index] || ""}
            maxLength={1}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
    paddingTop: 36,
    paddingHorizontal: 24,
  },

  titleText: {
    color: Colors.black,
    fontSize: 14,
    fontFamily: "PlusJakartaSans-Regular",
    letterSpacing: 0.42,
  },
  inputContainer: {
    flexDirection: "row",
    width: 200,
    marginTop: 16,
    justifyContent: "space-between",
  },
  input: {
    textAlign: "center",
    fontSize: 15,
    fontFamily: "PlusJakartaSans-Regular",
    fontWeight: "400",
    lineHeight: 22.6,
    letterSpacing: 0.15,
    width: 50,
    height: 50,
    backgroundColor: "#F1F1F1",
    borderRadius: 16,
    padding: 16,
    marginRight: 8,
  },
});

export default ConfirmNumb;
