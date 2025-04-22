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
        source = {require('@/assets/images/SubTitle.png')}
        style={styles.subtitle}
        resizeMode="contain"
      />
      <TouchableOpacity style = {styles.loginButton} onPress={() => router.push('/login')}>
        <Text style={styles.logintext}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.registerButton} onPress={() => router.push('/register')}>
        <Text style={styles.logintext}>Register</Text>
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
  text: {
    color: 'white',
    fontSize: 20,
  },
  logo: {
    width: 300,
    height: 300,
    marginTop: -150,
    marginBottom: -70,
  },
  subtitle: {
    width: 300,
    height: 100,
    marginTop: -70,
  },
  loginButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  logintext: {
    color: '000000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  registerButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  registertext: {
    color: '000000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});