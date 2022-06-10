import React, { Component, useState, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import axios from "axios";
import AlbumDetail from "./AlbumDetail";

const AlbumList = (props) => {
  const [photoset, setphotoset] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&user_id=137290658%40N08&format=json&nojsoncallback=1"
      )
      .then((response) => {
        response = response.data.photosets.photoset;
        setphotoset({ response });
        // console.log(response) //me los trae bien
      });
  }, []);

  const renderAlbums = () => {

    console.log(photoset)

    return Object.values(photoset.response).map((album) => 
    (
      <AlbumDetail
      navigation={props.navigation}
        key={album.id}
        title={album.title._content}
        albumId={album.id}
      />
    )
    )

 
  };

  // intente modificar a flatlist y se me rompio todo , nose por que
  return (
    <>
      {!photoset && <Text>loading...</Text>}
      {photoset && (
        <View>
          <ScrollView>{renderAlbums()}</ScrollView>
        </View>
      )}
    </>
  );
};

export default AlbumList;

