import React, { useState, useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import axios from "axios";
import PhotoDetail from "./PhotoDetail";

const PhotoList = (props) => {
  const [photos, setPhotos] = useState(null);

  const getPhotos = async () => {
    const response = await axios.get(
      `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=${props.route.params.albumId}&user_id=137290658%40N08&format=json&nojsoncallback=1`
    );
    setPhotos(response.data.photoset.photo);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  const renderPhotos = ({ item }) => {
    return (
      <PhotoDetail
        key={item.title}
        title={item.title}
        imageUrl={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}
      />
    );
  };


  return (
    <>
      <View style={{ flex: 1 }}>
        <FlatList
          data={photos}
          renderItem={renderPhotos}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  );
};

export default PhotoList;
