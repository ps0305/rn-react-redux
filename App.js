import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import ProductList from "./containers/ProductList";
import { Provider } from "react-redux";
import store from "./store";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import ProductDetail from "./component/ProductDetail";
import { FontAwesome } from "@expo/vector-icons";

export class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <View>
        <Button
          title="Go to detail"
          onPress={() =>
            this.props.navigation.navigate("Detail", { productId: 999 })
          }
        />
      </View>
    );
  }
}

// <Provider store={store}>
//         <View style={styles.container}>
//           <ProductList />
//         </View>
//       </Provider>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const stack1 = createStackNavigator(
  {
    Main: App,
    Detail: ProductDetail
  },
  {
    navigationOptions: {
      headerTitle: "Product Manager",
      headerStyle: {
        backgroundColor: "grey"
      },
      headerTintColor: "yellow"
    }
  }
);

const AppNavigator = createBottomTabNavigator(
  {
    List1: stack1,
    List2: stack1,
    List3: stack1,
    List4: stack1
  },
  {
    navigationOptions: {
      tabBarIcon: <FontAwesome name="list-ul" size={25} color="red" />
    }
  }
);

export default AppNavigator;
