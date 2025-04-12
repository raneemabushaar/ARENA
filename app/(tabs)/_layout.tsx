import { Tabs } from 'expo-router';
import { Grid2x2 as Grid, Store, Calendar } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0A0F2C',
          borderTopColor: '#1A1F3C',
        },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#666',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Sports',
          tabBarIcon: ({ color, size }) => (
            <Grid size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="venues"
        options={{
          title: 'Venues',
          tabBarIcon: ({ color, size }) => (
            <Store size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          title: 'Bookings',
          tabBarIcon: ({ color, size }) => (
            <Calendar size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}