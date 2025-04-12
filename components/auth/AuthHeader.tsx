import { View, Text, Image, StyleSheet } from 'react-native';

interface AuthHeaderProps {
  title: string;
  subtitle?: string;
  showLogo?: boolean;
}

export function AuthHeader({ title, subtitle, showLogo = true }: AuthHeaderProps) {
  return (
    <View style={styles.header}>
      <Image 
        source={{ uri: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800' }}
        style={styles.headerImage}
      />
      <View style={styles.overlay}>
        {showLogo && (
          <Image 
            source={{ uri: 'https://i.imgur.com/XyLwHXo.png' }}
            style={styles.logo}
          />
        )}
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 300,
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(10, 15, 44, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#FFFFFF',
    opacity: 0.8,
  },
});