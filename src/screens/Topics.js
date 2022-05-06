import { FontDisplay } from 'expo-font'
import React, { PureComponent } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, 
  Image, FlatList, ActivityIndicator } from 'react-native'

export default class Topics extends PureComponent {
    constructor(props) {
      super(props)
      this.state = {
        items: []
      }
    }

    componentDidMount(){
      this.getDataFromAPI()
    }
    getDataFromAPI = async () => {
      const endpoint = 'https://jsonplaceholder.typicode.com/photos?_limit=20'
      const res = await fetch(endpoint)
      const data = await res.json()
      this.setState({items: data})
    } 
  _renderItem = ({item}) => {
    let {cardText, card, cardImage} = styles
    return (
      <TouchableOpacity style={card}>
        <Image style={cardImage} source={require('../../assets/img/economia.jpg')}/>  
        <Text style={cardText}>Economia</Text>                                                            
    </TouchableOpacity>
    ) 
  }
  render() {
    let {container, loader} = styles
    let{items} = this.state
    if (items.length === 0){
    return (
        <View style={loader}>
       
            <ActivityIndicator size={"large"}/>
        </View>
    )}
    return (
     <FlatList
      style={container}
      data={items}
      keyExtractor={(index) => index.toString()}
      numColumns ={2}
      renderItem={this._renderItem}
     />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 97,
    marginRight: 29
  },
  cardText: {
    fontSize: 10,
    marginLeft: 11,
    color: '#ffffff',
    fontFamily: 'Frontage',
    marginTop: 8,
    marginBottom: 8
  },
  card: {
    backgroundColor: '#8E51FF',
    marginBottom: 12,
    marginLeft: 29,
    width: 160,
    height: 119,
    shadowColor: '#000000',
    shadowOpacity: '25%',
    borderBottomEndRadius: 4,
    borderBottomLeftRadius: 4,
    shadowOffset: {
      width: 0,
      height: 5,
      blur: 10,
    }
  },
  cardImage:{
    width: 160,
    height: 93,
    resizeMode: 'cover'
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})