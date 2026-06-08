
import React from 'react';
import { FlatList, StyleSheet, Dimensions, View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import { VIDEOS } from '../../constants/data';

const numColumns = 3;
const { width } = Dimensions.get('window');
const itemSize = (width - 2) / numColumns;

const VideosGrid = () => {
  return (
    <FlatList
      data={VIDEOS}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      renderItem={({ item }) => (
        <View style={styles.item}>
            <FastImage
                style={styles.thumbnail}
                source={{
                    uri: item.thumbnailUrl,
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
            />
            {/* You could add a play icon here */}
        </View>
      )}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  item: {
    width: itemSize,
    height: itemSize,
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  }
});

export default VideosGrid;
