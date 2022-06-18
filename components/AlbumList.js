import React, { Component, useState, useEffect } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import axios from "axios";
import AlbumDetail from "./AlbumDetail";

const AlbumList = (props) => {
  const [photoset, setPhotoset] = useState(null);

  const getAlbums = async () => {
    const response = await axios.get(
      "https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&user_id=137290658%40N08&format=json&nojsoncallback=1"
    );
    setPhotoset(response.data.photosets.photoset);
  };

  useEffect(() => {
    getAlbums();
  }, []);

  const renderAlbums = ({ item }) => {
    return (
      <AlbumDetail style={styles.bigBlue}
        navigation={props.navigation}
        key={item.id}
        title={item.title._content}
        albumId={item.id}
      />
    );
  };

  return (
    <>
      {!photoset && <Text>loading...</Text>}
      {photoset && (
        <View>
          <FlatList 
            data={photoset}
            renderItem={renderAlbums}
            keyExtractor={(item) => item.id}
          />
        </View>
      )}
    </>
  );
};


const styles = {
  container: {
    marginTop: 10
  },
  button: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 60,
  },
  red: {
    color: 'red',
  },
};

export default AlbumList;
