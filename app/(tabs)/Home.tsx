import { View, Text, StyleSheet, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/BeatCrossLogo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Image
        source = {require('@/assets/images/SubTitle.png')}
        style={styles.subtitle}
        resizeMode="contain"
      />
      <Text style={styles.text}></Text>
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
    marginBottom: -70,
  },
  subtitle: {
    width: 300,
    height: 100,
    marginTop: -70,
  },
});