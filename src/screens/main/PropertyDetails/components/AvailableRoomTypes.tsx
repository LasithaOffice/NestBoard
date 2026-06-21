import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Typography from '../../../../components/ui/Typography';

const ACCENT = '#FF6A39';

export interface RoomType {
  id: string;
  name: string;
  tag: string; // "AC" | "Non-AC"
  pricePerSeat: number;
  seatsFree: number;
  fillPercentage: number;
}

interface RoomCardProps {
  room: RoomType;
  onViewRooms: (id: string) => void;
}

const RoomCard = ({ room, onViewRooms }: RoomCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Typography variant="h3">{room.name}</Typography>
        <View style={styles.tag}>
          <Typography variant="badge">{room.tag}</Typography>
        </View>
      </View>

      <Typography variant="subtitle">
        LKR {room.pricePerSeat.toLocaleString()} / seat / month
      </Typography>

      <View style={styles.progressRow}>
        <Typography variant="caption">{room.seatsFree} seats free</Typography>
        <Typography variant="caption">{room.fillPercentage}% filled</Typography>
      </View>

      <View style={styles.track}>
        <View style={[styles.fill, { width: `${room.fillPercentage}%` }]} />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => onViewRooms(room.id)}>
        <Typography variant="button">View Rooms  ›</Typography>
      </TouchableOpacity>
    </View>
  );
};

interface AvailableRoomTypesProps {
  rooms: RoomType[];
  onViewRooms: (id: string) => void;
}

const AvailableRoomTypes = ({ rooms, onViewRooms }: AvailableRoomTypesProps) => {
  return (
    <View>
      <Typography variant="h2" style={styles.sectionTitle}>
        Available Room Types
      </Typography>

      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} onViewRooms={onViewRooms} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    marginBottom: 12,
  },
  card: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  tag: {
    backgroundColor: '#FFE9E0',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  track: {
    height: 6,
    borderRadius: 3,
    backgroundColor: '#F0F0F0',
    marginTop: 6,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    backgroundColor: ACCENT,
    borderRadius: 3,
  },
  button: {
    marginTop: 16,
    backgroundColor: ACCENT,
    borderRadius: 28,
    paddingVertical: 14,
    alignItems: 'center',
  },
});

export default AvailableRoomTypes;

// ---------------------------------------------------------------
// Example usage matching the screenshot:
//
// <AvailableRoomTypes
//   rooms={[
//     { id: '1', name: '5-Seat AC Room', tag: 'AC', pricePerSeat: 18000, seatsFree: 12, fillPercentage: 60 },
//     { id: '2', name: '4-Seat Non-AC Room', tag: 'Non-AC', pricePerSeat: 12000, seatsFree: 8, fillPercentage: 50 },
//   ]}
//   onViewRooms={(id) => console.log('view rooms for', id)}
// />
