import colours from "@utils/colours";
import { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface Props {}

const heading = "Feather";
const subHeading = "Connect with like minded";

const WelcomeHeader: FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/128/6655/6655045.png",
        }}
        style={styles.image}
        resizeMode="contain"
        resizeMethod="resize"
      />
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.subHeading}>{subHeading}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: { width: 250, height: 250 },
  heading: {
    fontWeight: "600",
    fontSize: 20,
    textAlign: "center",
    letterSpacing: 1,
    marginBottom: 5,
    color: colours.primary,
  },
  subHeading: {
    fontSize: 12,
    textAlign: "center",
    lineHeight: 14,
    color: colours.primary,
  },
});

export default WelcomeHeader;
