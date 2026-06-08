
import React, { useState, useRef, useCallback } from 'react';
import { FlatList, ViewToken, StyleSheet } from 'react-native';
import { YOUTUBE_FEED } from '../../constants/data';
import FeedItem from './FeedItem';

const YouTubeFeedScreen = () => {
  const [viewing, setViewing] = useState<string | null>(null);

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
      if (viewableItems.length > 0) {
        // We only want one video to play at a time.
        // We can pick the first viewable item.
        const firstViewable = viewableItems[0];
        if(firstViewable.isViewable && firstViewable.item.id !== viewing) {
            setViewing(firstViewable.item.id);
        }
      }
    }
  ).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 30, // Trigger when 30% of the item is visible
  }).current;

  const renderItem = useCallback(
    ({ item }: { item: typeof YOUTUBE_FEED[0] }) => (
      <FeedItem item={item} isViewing={viewing === item.id} />
    ),
    [viewing]
  );

  return (
    <FlatList
      data={YOUTUBE_FEED}
      style={styles.container}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
      // Performance Optimizations
      windowSize={5}
      removeClippedSubviews={true}
      initialNumToRender={5}
      maxToRenderPerBatch={5}
      updateCellsBatchingPeriod={50}
    />
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})

export default YouTubeFeedScreen;
