import { FlatList, StyleSheet } from "react-native";
import CategoryGridTile from "../components/CategoryGrisTile";
import { CATEGORIES } from "../data/data";

export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    //------------second way to navigate using navigation prop.
    function pressHandler() {
      navigation.navigate("MealsOverview", { categoryId: itemData.item.id });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={renderCategoryItem}
    />
  );
}

const styles = StyleSheet.create({});
