import { FlatList, StyleSheet } from "react-native";
import CategoryGridTile from "../components/CategoryGrisTile";
import { CATEGORIES } from "../data/data";

export default function CategoriesScreen({ navigation }) {
  function pressHandler() {
    navigation.navigate("MealsOverview");
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={(itemData) => (
        <CategoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={pressHandler}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});
