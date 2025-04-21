import { View, Text, StyleSheet, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/BeatCrossLogo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.text}>BeatCross</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1E26', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 20,
  }
});