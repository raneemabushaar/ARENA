import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { Lock } from 'lucide-react-native';

export default function ForgotPassword() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.closeButton}
        onPress={() => router.back()}>
        <Text style={styles.closeButtonText}>×</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Lock size={40} color="#FFFFFF" />
        </View>

        <Text style={styles.title}>Forgot{'\n'}Password?</Text>
        <Text style={styles.subtitle}>
          No worries, we'll send you reset instructions
        </Text>

        <View style={styles.form}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#666"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TouchableOpacity style={styles.resetButton}>
            <Text style={styles.resetButtonText}>Reset Password</Text>
          </TouchableOpacity>

          <Link href="/login" asChild>
            <TouchableOpacity style={styles.backButton}>
              <Text style={styles.backButtonText}>Back to Login</Text>
            </TouchableOpacity>
          </Link>
        </View>
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
  closeButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '300',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
    lineHeight: 40,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.8,
    marginBottom: 30,
  },
  form: {
    marginTop: 20,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    color: '#FFFFFF',
    fontSize: 16,
  },
  resetButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  resetButtonText: {
    color: '#0A0F2C',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});