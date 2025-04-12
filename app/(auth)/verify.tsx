import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Verify() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Let's Verify{'\n'}your account</Text>
        
        <Text style={styles.subtitle}>Two Factor{'\n'}Authentication</Text>
        
        <Text style={styles.description}>
          You have received an e-mail which contains a code
        </Text>

        <Text style={styles.email}>raneemabushaar@hotmail.com</Text>

        <View style={styles.codeContainer}>
          <TextInput
            style={styles.codeInput}
            maxLength={1}
            keyboardType="number-pad"
          />
          <TextInput
            style={styles.codeInput}
            maxLength={1}
            keyboardType="number-pad"
          />
          <TextInput
            style={styles.codeInput}
            maxLength={1}
            keyboardType="number-pad"
          />
          <TextInput
            style={styles.codeInput}
            maxLength={1}
            keyboardType="number-pad"
          />
          <TextInput
            style={styles.codeInput}
            maxLength={1}
            keyboardType="number-pad"
          />
        </View>

        <View style={styles.actions}>
          <TouchableOpacity>
            <Text style={styles.resendText}>Resend a code</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.changeEmailText}>change your email?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.verifyButton}
          onPress={() => router.push('/(tabs)')}>
          <Text style={styles.verifyButtonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0F2C',
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 40,
    lineHeight: 40,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
    lineHeight: 32,
  },
  description: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.8,
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 30,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  codeInput: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    color: '#FFFFFF',
    fontSize: 24,
    textAlign: 'center',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  resendText: {
    color: '#FFFFFF',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  changeEmailText: {
    color: '#FFFFFF',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  verifyButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  verifyButtonText: {
    color: '#0A0F2C',
    fontSize: 16,
    fontWeight: 'bold',
  },
});