import { View, Text } from 'react-native'
import React, { useMemo, useState } from 'react'
import ConfirmScreenHeader from './components/Header'
import Typography from '../../../components/ui/Typography'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import RegularButton from '../../../components/ui/RegularButton'
import { Lock } from 'lucide-react-native'
import { BookingAPI } from '../../../api/bookings'

const ConfirmBooking = () => {

  const currentProperty = useSelector((state: RootState) => state.property.currentProperty);
  const roomId = useSelector((state: RootState) => state.booking.data?.roomId);
  const data = useSelector((state: RootState) => state.booking.data);
  const roomName = useSelector((state: RootState) => state.booking.data?.roomName);
  const seatIndex = useSelector((state: RootState) => state.booking.data?.seatIndex);
  const pricePerSeat = useSelector((state: RootState) => state.booking.data?.pricePerSeat);

  const [date, setDate] = useState("2026-07")
  const [duration, setDuration] = useState(4)

  console.log(data)

  const total = useMemo(() => (parseFloat(pricePerSeat + "") * duration).toFixed(2), [pricePerSeat, duration])

  const [booking, setBooking] = useState(false);

  const bookNow = async () => {
    setBooking(true);
    console.log(roomId)
    console.log(seatIndex)
    if (roomId && seatIndex) {
      await BookingAPI.bookProperty(roomId, seatIndex, date, duration, total)
      setBooking(false);
    }
  }

  return (
    <View>
      <ConfirmScreenHeader />
      <Typography variant='h3'>{"Property - " + currentProperty?.title}</Typography>
      <Typography variant='h3'>{"Room - " + roomName}</Typography>
      <Typography variant='h3'>{"Seat - " + seatIndex}</Typography>
      <Typography variant='h3'>{"Price - " + (total)}</Typography>
      <RegularButton Icon={<Lock />} loading={booking} onPress={bookNow} text={'Pay LKR ' + total} />
    </View>
  )
}

export default ConfirmBooking