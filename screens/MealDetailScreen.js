import { Text, View } from "react-native";

export default function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>Meal detail Screen - {mealId}</Text>
    </View>
  );
}
