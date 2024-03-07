import { StyleSheet, Text, View } from "react-native";

export default function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.detailsContainer, style]}>
      <Text style={[styles.details, textStyle]}>{duration}m</Text>
      <Text style={[styles.details, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.details, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  details: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
