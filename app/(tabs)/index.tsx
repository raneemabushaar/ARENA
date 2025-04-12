import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { SportCard } from '@/components/sports/SportCard';
import { EventCard } from '@/components/sports/EventCard';
import { SPORTS } from '@/constants/sports';

export default function SportsScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ARENA</Text>
        <TouchableOpacity onPress={() => router.push('/profile')}>
          <Image
            source={{ uri: 'https://i.imgur.com/6kX7Zs6.png' }}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>Pick your sport</Text>

      <View style={styles.grid}>
        {SPORTS.map((sport) => (
          <SportCard
            key={sport.id}
            sport={sport}
            onPress={() =>
              router.push({
                pathname: '/sport/[id]',
                params: { id: sport.id },
              })
            }
          />
        ))}
      </View>

      <View style={styles.featuredSection}>
        <Text style={styles.featuredTitle}>Featured Events</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.eventsScroll}>
          {SPORTS.slice(0, 3).map((sport) => (
            <EventCard
              key={sport.id}
              sport={sport}
              date="March 15, 2024"
              onPress={() =>
                router.push({
                  pathname: '/event/[id]',
                  params: { id: sport.id },
                })
              }
            />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0F2C',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
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
  subtitle: {
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
  },
  featuredSection: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 40,
  },
  featuredTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
  },
  eventsScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
});
