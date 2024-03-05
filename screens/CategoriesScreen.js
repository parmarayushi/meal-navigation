import { FlatList, StyleSheet } from "react-native";
import CategoryGridTile from "../components/CategoryGrisTile";
import { CATEGORIES } from "../data/data";

export default function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <CategoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});
