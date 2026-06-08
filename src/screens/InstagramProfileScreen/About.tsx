
import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { USER_DATA } from '../../constants/data';

const About = () => {
  const { contact } = USER_DATA;

  const InfoRow = ({ label, value, isLink }: { label: string; value: string; isLink?: boolean }) => (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text
        style={[styles.value, isLink && styles.link]}
        onPress={() => isLink && Linking.openURL(`mailto:${value}`)}
      >
        {value}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <InfoRow label="Email" value={contact.email} isLink />
      <InfoRow label="Phone" value={contact.phone} />
      <InfoRow label="Website" value={contact.website} isLink />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    width: 80,
  },
  value: {
    fontSize: 16,
    flex: 1,
  },
  link: {
    color: '#00376b',
    textDecorationLine: 'underline',
  },
});

export default About;
