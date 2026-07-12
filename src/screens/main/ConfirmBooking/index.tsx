import { View, Text } from 'react-native'
import React, { useMemo, useState } from 'react'
import ConfirmScreenHeader from './components/Header'
import Typography from '../../../components/ui/Typography'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import RegularButton from '../../../components/ui/RegularButton'
import { Lock } from 'lucide-react-native'
import { BookingAPI } from '../../../api/bookings'
import { Colors } from '../../../constant/colors'

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

  const formatNumberIntoCurrency = (number: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'LKR',
      maximumFractionDigits: 0,
    }).format(number);
  }

  return (
    <View style={{
      backgroundColor: Colors.WHITE,
      padding: 16,
      flex: 1,
      gap: 16
    }}>
      <ConfirmScreenHeader />
      <View style={
        {
          padding: 20,
          elevation: 1,
          borderRadius: 16,
          backgroundColor: Colors.WHITE,
          gap: 24,
          marginBottom: 8
        }
      }>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Typography variant='body' color={Colors.TEXT_GRAY}>{"Property"}</Typography>
          <Typography variant='h3'>{currentProperty?.title}</Typography>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Typography variant='body' color={Colors.TEXT_GRAY}>{"Room"}</Typography>
          <Typography variant='h3'>{roomName}</Typography>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Typography variant='body' color={Colors.TEXT_GRAY}>{"Seat"}</Typography>
          <Typography variant='h3'>{seatIndex}</Typography>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Typography variant='body' color={Colors.TEXT_GRAY}>{"Property"}</Typography>
          <Typography variant='h3'>{currentProperty?.title}</Typography>
        </View>
        <View style={{ height: 0.5, backgroundColor: Colors.BORDER_GRAY }}></View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Typography variant='body' color={Colors.TEXT_GRAY}>{"Price\nBreakdown"}</Typography>
          <Typography variant='body' color={Colors.TEXT_GRAY}>{
            formatNumberIntoCurrency(parseFloat(pricePerSeat + "")) + " x " + duration + "\nmonths"
          }</Typography>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Typography variant='h1'>{"Total"}</Typography>
          <Typography variant='h1'>{formatNumberIntoCurrency(parseFloat(total))}</Typography>
        </View>
      </View>
      <RegularButton Icon={<Lock color={'white'} />} loading={booking} onPress={bookNow} text={'Pay LKR ' + total} />
      <Typography variant='caption' style={{ textAlign: 'center' }}>Full payment is required upfront for the entire</Typography>
    </View>
  )
}

export default ConfirmBooking