import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { AuthHeader } from '@/components/auth/AuthHeader';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function Login() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <AuthHeader 
        title="ARENA"
        subtitle="Your Sports, Your Way"
      />

      <View style={styles.form}>
        <Input
          placeholder="Email or Phone"
          keyboardType="email-address"
        />
        <Input
          placeholder="Password"
          secureTextEntry
        />

        <Link href="/forgot-password" style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </Link>

        <Button>Login</Button>

        <Text style={styles.orText}>or continue with</Text>

        <View style={styles.socialButtons}>
          {/* Social buttons */}
        </View>

        <Link href="/register" asChild>
          <Button variant="outline">Create an account</Button>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0F2C',
  },
  contentContainer: {
    flexGrow: 1,
  },
  form: {
    padding: 20,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  orText: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
});