import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  onPress?: () => void;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', onPress, children }: ButtonProps) {
  return (
    <TouchableOpacity 
      style={[
        styles.button,
        variant === 'secondary' && styles.secondaryButton,
        variant === 'outline' && styles.outlineButton,
      ]} 
      onPress={onPress}>
      <Text style={[
        styles.buttonText,
        (variant === 'secondary' || variant === 'outline') && styles.secondaryButtonText
      ]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  secondaryButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  buttonText: {
    color: '#0A0F2C',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButtonText: {
    color: '#FFFFFF',
  },
});