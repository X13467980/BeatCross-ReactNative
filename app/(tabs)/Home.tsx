import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/BeatCrossLogo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Image
        source={require('@/assets/images/SubTitle.png')}
        style={styles.subtitle}
        resizeMode="contain"
      />
      <TouchableOpacity style={styles.authButton} onPress={() => router.push('/login')}>
        <Text style={styles.authText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.authButton} onPress={() => router.push('/register')}>
        <Text style={styles.authText}>Register</Text>
      </TouchableOpacity>
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
  logo: {
    width: 350,
    height: 350,
    marginTop: -150,
    marginBottom: -80,
  },
  subtitle: {
    width: 300,
    height: 100,
    marginTop: -70,
    marginBottom: -20,
  },
  authButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    width: 200,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  authText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});