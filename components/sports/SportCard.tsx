import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { Sport } from '@/types';

interface SportCardProps {
  sport: Sport;
  onPress?: () => void;
}

export function SportCard({ sport, onPress }: SportCardProps) {
  return (
    <TouchableOpacity
      style={styles.sportCard}
      onPress={onPress}>
      <Image source={{ uri: sport.image }} style={styles.sportImage} />
      <View style={styles.sportInfo}>
        <Image source={{ uri: sport.icon }} style={styles.sportIcon} />
        <Text style={styles.sportName}>{sport.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  sportCard: {
    width: '46%',
    marginHorizontal: '2%',
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  sportImage: {
    width: '100%',
    height: 120,
  },
  sportInfo: {
    padding: 15,
    alignItems: 'center',
  },
  sportIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  sportName: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
});