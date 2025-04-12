import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Calendar, Clock, MapPin } from 'lucide-react-native';

const BOOKINGS = [
  {
    id: '1',
    sport: 'Football',
    venue: 'Downtown Sports Center',
    date: 'Today',
    time: '18:00 - 19:00',
    status: 'upcoming',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
  },
  {
    id: '2',
    sport: 'Basketball',
    venue: 'Elite Sports Club',
    date: 'Tomorrow',
    time: '20:00 - 21:00',
    status: 'upcoming',
    image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800',
  },
  {
    id: '3',
    sport: 'Tennis',
    venue: 'Arena Sports Complex',
    date: '12 Mar 2024',
    time: '15:00 - 16:00',
    status: 'completed',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800',
  },
];

export default function BookingsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Bookings</Text>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://i.imgur.com/6kX7Zs6.png' }}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.bookingsList}>
        {BOOKINGS.map((booking) => (
          <View
            key={booking.id}
            style={[
              styles.bookingCard,
              booking.status === 'completed' && styles.completedCard,
            ]}>
            <Image source={{ uri: booking.image }} style={styles.venueImage} />
            <View style={styles.bookingInfo}>
              <View style={styles.sportBadge}>
                <Text style={styles.sportText}>{booking.sport}</Text>
              </View>
              <Text style={styles.venueName}>{booking.venue}</Text>
              
              <View style={styles.detailsContainer}>
                <View style={styles.detailRow}>
                  <Calendar size={16} color="#FFFFFF" />
                  <Text style={styles.detailText}>{booking.date}</Text>
                </View>
                <View style={styles.detailRow}>
                  <Clock size={16} color="#FFFFFF" />
                  <Text style={styles.detailText}>{booking.time}</Text>
                </View>
                <View style={styles.detailRow}>
                  <MapPin size={16} color="#FFFFFF" />
                  <Text style={styles.detailText}>View Location</Text>
                </View>
              </View>

              <TouchableOpacity 
                style={[
                  styles.actionButton,
                  booking.status === 'completed' && styles.rateButton,
                ]}>
                <Text style={styles.actionButtonText}>
                  {booking.status === 'completed' ? 'Rate Venue' : 'Cancel Booking'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
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
  bookingsList: {
    flex: 1,
  },
  bookingCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
  },
  completedCard: {
    opacity: 0.7,
  },
  venueImage: {
    width: '100%',
    height: 150,
  },
  bookingInfo: {
    padding: 15,
  },
  sportBadge: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  sportText: {
    color: '#0A0F2C',
    fontWeight: 'bold',
    fontSize: 12,
  },
  venueName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
  },
  detailsContainer: {
    marginBottom: 15,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailText: {
    color: '#FFFFFF',
    marginLeft: 8,
    fontSize: 14,
  },
  actionButton: {
    backgroundColor: '#FF4444',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
  },
  rateButton: {
    backgroundColor: '#4CAF50',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});