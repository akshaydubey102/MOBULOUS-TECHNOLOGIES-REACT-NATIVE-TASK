
import React from 'react';
import { Tabs } from 'react-native-collapsible-tab-view';
import Header from './Header';
import PostsGrid from './PostsGrid';
import VideosGrid from './VideosGrid';
import TaggedGrid from './TaggedGrid';
import About from './About';
import { StyleSheet } from 'react-native';

const InstagramProfileScreen = () => {
  const renderHeader = () => <Header />;

  return (
    <Tabs.Container renderHeader={renderHeader}>
      <Tabs.Tab name="Posts" label="Posts">
        <Tabs.ScrollView>
            <PostsGrid />
        </Tabs.ScrollView>
      </Tabs.Tab>
      <Tabs.Tab name="Videos" label="Videos">
        <Tabs.ScrollView>
            <VideosGrid />
        </Tabs.ScrollView>
      </Tabs.Tab>
      <Tabs.Tab name="Tagged" label="Tagged">
        <Tabs.ScrollView>
            <TaggedGrid />
        </Tabs.ScrollView>
      </Tabs.Tab>
      <Tabs.Tab name="About" label="About">
        <Tabs.ScrollView>
          <About />
        </Tabs.ScrollView>
      </Tabs.Tab>
    </Tabs.Container>
  );
};

export default InstagramProfileScreen;
