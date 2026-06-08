
import React from 'react';
import { FlatList, StyleSheet, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import { TAGGED_POSTS } from '../../constants/data';

const numColumns = 3;
const { width } = Dimensions.get('window');
const itemSize = (width - 2) / numColumns;

const TaggedGrid = () => {
  return (
    <FlatList
      data={TAGGED_POSTS}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      renderItem={({ item }) => (
        <FastImage
          style={styles.item}
          source={{
            uri: item.imageUrl,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
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
  },
});

export default TaggedGrid;
