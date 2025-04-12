import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { Sport } from '@/types';

interface EventCardProps {
  sport: Sport;
  date: string;
  onPress?: () => void;
}

export function EventCard({ sport, date, onPress }: EventCardProps) {
  return (
    <TouchableOpacity style={styles.eventCard} onPress={onPress}>
      <Image source={{ uri: sport.image }} style={styles.eventImage} />
      <View style={styles.eventInfo}>
        <Text style={styles.eventName}>{sport.name} Tournament</Text>
        <Text style={styles.eventDate}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  eventCard: {
    width: 280,
    marginRight: 15,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  eventImage: {
    width: '100%',
    height: 160,
  },
  eventInfo: {
    padding: 15,
  },
  eventName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  eventDate: {
    color: '#FFFFFF',
    opacity: 0.7,
    fontSize: 14,
  },
});