
import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import VideoPlayer from '../../components/VideoPlayer';

interface FeedItemProps {
  item: {
    id: string;
    username: string;
    avatar: string;
    image: string;
    video: string;
    description: string;
  };
  isViewing: boolean;
}

const FeedItem = ({ item, isViewing }: FeedItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FastImage source={{ uri: item.avatar }} style={styles.avatar} />
        <Text style={styles.username}>{item.username}</Text>
      </View>
      <VideoPlayer
        uri={item.video}
        thumbnailUri={item.image}
        isPaused={!isViewing}
      />
      <View style={styles.footer}>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAEA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    padding: 12,
  },
  description: {
    fontSize: 14,
  },
});

export default memo(FeedItem);
