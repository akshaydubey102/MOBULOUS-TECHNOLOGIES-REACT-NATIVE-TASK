
import React, { useState } from 'react';
import { View, StyleSheet, ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import Video from 'react-native-video';
import FastImage from 'react-native-fast-image';
import useNetworkStatus from '../hooks/useNetworkStatus';

interface VideoPlayerProps {
  uri: string;
  thumbnailUri: string;
  isPaused: boolean;
}

const VideoPlayer = ({ uri, thumbnailUri, isPaused }: VideoPlayerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const netInfo = useNetworkStatus();

  const isPoorConnection = netInfo?.details?.cellularGeneration === '2g' || netInfo?.details?.cellularGeneration === '3g';

  if (isPoorConnection) {
    return <FastImage source={{ uri: thumbnailUri }} style={styles.video} />;
  }

  return (
    <View style={styles.container}>
      <Video
        source={{ uri }}
        style={styles.video}
        paused={isPaused}
        resizeMode="cover"
        onLoadStart={() => setIsLoading(true)}
        onLoad={() => setIsLoading(false)}
        onError={(e) => console.log('video error', e)}
        repeat
        muted={isMuted}
      />
      {isLoading && <ActivityIndicator style={styles.loader} size="large" color="#FFF" />}
      <TouchableOpacity style={styles.muteButton} onPress={() => setIsMuted(!isMuted)}>
        <Text style={styles.muteText}>{isMuted ? 'Unmute' : 'Mute'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 250,
    backgroundColor: 'black',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  loader: {
    ...StyleSheet.absoluteFillObject,
  },
  muteButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 8,
    borderRadius: 5,
  },
  muteText: {
    color: 'white',
  },
});

export default VideoPlayer;
