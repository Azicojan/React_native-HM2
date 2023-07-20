

import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from 'react-native';

  

const App = () => {
  const [gallery, setGallery] = useState([
    {
      id: 1,
      name: 'Image 1',
      link: require('./assets/a_girl_in_the_mountains.jpg'),
    },
    {
      id: 2,
      name: 'Image 2',
      link: require('./assets/air_balloons.jpg'),
    },
    {
      id: 3,
      name: 'Image 3',
      link: require('./assets/boats_on_a_lake.jpg'),
    },
    {
      id: 4,
      name: 'Image 4',
      link: require('./assets/local_waterfall.jpg'),
    },
    {
      id: 5,
      name: 'Image 5',
      link: require('./assets/Venice.jpg'),
    },
    {
      id: 6,
      name: 'Image 6',
      link: require('./assets/yellow_van.jpg'),
    }
    // Add other images here
  ]);

  const [newImageName, setNewImageName] = useState('');
  const [newImageLink, setNewImageLink] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Add functions for adding and deleting images here

  const addImage = () => {
    if (!newImageName || !newImageLink || newImageName.trim() === '' || newImageLink.trim() === '') {
      console.log('Error: Please provide a name and link for the image.');
      Alert.alert('Error', 'Please provide a name and link for the image.');
    } else {
      setLoading(true);
      
  
      const newImage = {
        id: gallery.length + 1,
        name: newImageName,
        link: newImageLink.trim(), // Use require for the new image link
      };

       
       
      
      // Simulate a delay of ten seconds before adding the image
      setTimeout(() => {
        setGallery([...gallery, newImage]);
        setLoading(false);
        setNewImageName('');
        setNewImageLink('');
        console.log(gallery)
      }, 10000);

      
    }
  };
  

  const deleteImage = (id) => {
    const updatedGallery = gallery.filter((image) => image.id !== id);
    setGallery(updatedGallery);
  };


    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {gallery.map((image) => (
      <TouchableOpacity
            key={image.id}
            style={styles.imageCard}
            onLongPress={() => deleteImage(image.id)} // Add this line to handle the deletion
          >
       <ImageBackground
         source={{uri: image.link}}
         style={styles.imageBackground}
         imageStyle={styles.image}
          >
         <Text style={styles.imageName}>{image.name}</Text>
       </ImageBackground>
     </TouchableOpacity>
))}

        </ScrollView>

        <View style={styles.addImageForm}>
        <TextInput
          style={styles.input}
          placeholder="Image Name"
          value={newImageName}
          onChangeText={(text) => setNewImageName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Image Link"
          value={newImageLink}
          onChangeText={(text) => setNewImageLink(text)}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={addImage}
          disabled={loading}
        >
          <Text style={styles.buttonText}>Add Image</Text>
        </TouchableOpacity>
        {loading && <ActivityIndicator style={styles.loading} />}
        
      
      </View>



      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    scrollViewContainer: {
      paddingVertical: 20,
      paddingHorizontal: 10,
    },
    imageCard: {
      marginBottom: 20,
      borderRadius: 10,
      overflow: 'hidden',
    },
    imageBackground: {
      width: '100%',
      height: 200,
      justifyContent: 'flex-end',
    },
    image: {
      borderRadius: 10,
    },
    imageName: {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      color: '#fff',
      padding: 8,
      fontSize: 16,
    },
    addImageForm: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderTopWidth: 1,
      borderTopColor: '#ccc',
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    addButton: {
      backgroundColor: 'blue',
      paddingVertical: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
    },
    loading: {
      marginTop: 10,
    }
  });
  
  export default App;
  
