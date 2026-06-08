
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';
import { USER_DATA } from '../../constants/data';

const Header = () => {
  const { name, username, bio, profileImage, posts, followers, following } = USER_DATA;

  const Stat = ({ label, value }: { label: string; value: number }) => (
    <View style={styles.stat}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.profileRow}>
        <FastImage
          style={styles.profileImage}
          source={{
            uri: profileImage,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={styles.statsRow}>
          <Stat value={posts} label="Posts" />
          <Stat value={followers} label="Followers" />
          <Stat value={following} label="Following" />
        </View>
      </View>
      <View style={styles.bioContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.username}>@{username}</Text>
        <Text style={styles.bio}>{bio}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFF',
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  statsRow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: 'gray',
  },
  bioContainer: {
    marginTop: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 4,
  },
  bio: {
    fontSize: 14,
  },
});

export default Header;
