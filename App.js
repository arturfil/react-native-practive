import React from 'react';
import { StyleSheet, View } from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput'
import PlaceList from './src/components/PlaceList/PlaceList'
import PlaceDeatil from './src/components/PlaceDetail/PlaceDetail'

export default class App extends React.Component {
  state = {
    places: [],
    selectedPlace: null
  }

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  }

  onModalClosdedHandler = () => {
    this.setState({
      selectedPlace: null
    })
  }

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(), 
          name: placeName,
          image: {
            uri: "https://media-cdn.tripadvisor.com/media/photo-s/0d/9f/de/6b/encantada-tulum.jpg"
          }
        })
      }
    })
  }

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
      selectedPlace: prevState.places.find(place => {
        return place.key === key;
      })
      }
    })
  }

  render() {
    
    return (
      
      <View style={styles.container}>
        <PlaceDeatil selectedPlace={this.state.selectedPlace} onItemDeleted={this.placeDeletedHandler} onModalClosed={this.onModalClosdedHandler}/>
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList 
          places={this.state.places} 
          onItemSelected={this.placeSelectedHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
