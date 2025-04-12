import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Star, MapPin } from 'lucide-react-native';

const VENUES = [
  {
    id: '1',
    name: 'Downtown Sports Center',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
    rating: 4.8,
    location: 'Downtown, City Center',
    distance: '1.2 km',
  },
  {
    id: '2',
    name: 'Elite Sports Club',
    image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800',
    rating: 4.5,
    location: 'Westside District',
    distance: '2.5 km',
  },
  {
    id: '3',
    name: 'Arena Sports Complex',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800',
    rating: 4.9,
    location: 'North District',
    distance: '3.1 km',
  },
];

export default function VenuesScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Venues</Text>
        <TouchableOpacity onPress={() => router.push('/profile')}>
          <Image
            source={{ uri: 'https://i.imgur.com/6kX7Zs6.png' }}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.venuesList}>
        {VENUES.map((venue) => (
          <TouchableOpacity
            key={venue.id}
            style={styles.venueCard}
            onPress={() => router.push(`/venue/${venue.id}`)}>
            <Image source={{ uri: venue.image }} style={styles.venueImage} />
            <View style={styles.venueInfo}>
              <Text style={styles.venueName}>{venue.name}</Text>
              <View style={styles.ratingContainer}>
                <Star size={16} color="#FFD700" fill="#FFD700" />
                <Text style={styles.rating}>{venue.rating}</Text>
              </View>
              <View style={styles.locationContainer}>
                <MapPin size={16} color="#FFFFFF" />
                <Text style={styles.location}>{venue.location}</Text>
                <Text style={styles.distance}>{venue.distance}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0F2C',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  venuesList: {
    flex: 1,
  },
  venueCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
  },
  venueImage: {
    width: '100%',
    height: 200,
  },
  venueInfo: {
    padding: 15,
  },
  venueName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  rating: {
    color: '#FFFFFF',
    marginLeft: 5,
    fontSize: 14,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    color: '#FFFFFF',
    marginLeft: 5,
    fontSize: 14,
    opacity: 0.8,
  },
  distance: {
    color: '#FFFFFF',
    marginLeft: 'auto',
    fontSize: 14,
    opacity: 0.8,
  },
});