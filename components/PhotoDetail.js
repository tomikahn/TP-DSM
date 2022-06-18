import React from "react";
import { Text, View, Image, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";
import { Icon } from "react-native-elements";

const PhotoDetail = ({ title, imageUrl }) => {
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle,
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: imageUrl }} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
        </View>
        <Icon style={styles.icon} name="image" color="#c1c1c1" size="20" />

      </CardSection>

      <CardSection>
        <Image style={imageStyle} source={{ uri: imageUrl }} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(imageUrl)}>

          <Text>See Now  </Text>
          
        </Button>

        
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
  headerTextStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  thumbnailStyle: {
    margin: 5,
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 85,
    height: 200,
    width: 200,
    borderRadius: 10,
  },
  icon:{
    textAlign: 'center',
    flex:0,
    marginTop: 2,
    marginBottom:0,

    // padding:0,
    // display: 'flex',
    // flexDirection:'column',
    // alignItems:'center'
  }
};

export default PhotoDetail;
