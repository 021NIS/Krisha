import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Image, Text, FlatList, TouchableOpacity,AppRegistry } from 'react-native';


const houses = [
  {
    city: 'almaty',
    title: 'Ауезова 165',
    price: '20 000 000 тг',
    description: 'Прекрасный дом',
  },
  {
    city: 'almaty',
    title: 'Жамбыла 159',
    price: '30 000 000 тг',
    description: 'Магазин рядом',
  },
  {
    city: 'almaty',
    title: 'Дом в Алматы',
    price: '10 000 000 тг',
    description: 'Отличное КСК',
  }
];


class App extends Component {

  onPressItem = index => {
    console.log('Pressed row: ', index);
    // TODO: Перенаправить в новый компонент
  };

  keyExtractor = (item, index) => index;

  renderItems = () => {
    return houses.map((item) => {
        return (
         <TouchableOpacity>
          <View style={styles.rowContainer}>
            <Image
              style={styles.thumb}
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' }}
              resizeMode="contain"
            />
            <View style={styles.textContainer}>
              <Text style={styles.price}>ascsd</Text>
              <Text style={styles.title} numberOfLines={1}>
                ascd
              </Text>
            </View>
          </View>
      </TouchableOpacity>
      )
    })
  }
  
  
  render() {
    return (
       <View>
        {this.renderItems()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
   thumb: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  textContainer: {
    flex: 1,
    marginTop: 10
  },
  price: {
//     fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
//     fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  }
});

AppRegistry.registerComponent('App', () => App)
