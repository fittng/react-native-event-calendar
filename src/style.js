// @flow
import { StyleSheet } from 'react-native'

const calendarHeight = 2400
// const eventPaddingLeft = 4
const leftMargin = 50 - 1

export default function styleConstructor (
  theme = {}
) {
  let style = {
    container: {
      flex: 1,
      fontFamily: "Poppins-Regular",
      backgroundColor: '#ffff',
      ...theme.container
    },
    contentStyle: {
      fontFamily: "Poppins-Regular",
      backgroundColor: '#ffff',
      height: calendarHeight + 10
    },
    header: {
      paddingHorizontal: 30,
      height: 50,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: '#E6E8F0',
      backgroundColor: '#F5F5F6',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      ...theme.header
    },
    headerText: {
      fontFamily: "Poppins-Bold",
      fontSize: 16
    },
    arrow: {
      width: 15,
      height: 15,
      resizeMode: 'contain'
    },
    event: {
      position: 'absolute',
      backgroundColor: '#F0F4FF',
      opacity: 0.8,
      borderColor: '#DDE5FD',
      borderWidth: 1,
      borderRadius: 5,
      paddingLeft: 4,
      minHeight: 25,
      flex: 1,
      paddingTop: 5,
      paddingBottom: 0,
      paddingLeft: 20,
      flexDirection: 'column',
      alignItems: 'flex-start',
      overflow: 'hidden',
      ...theme.event
    },
    eventTitle: {
      fontFamily: "Poppins-Bold",
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: 16,
      // minHeight: 15,
      ...theme.eventTitle
    },
    eventSummary: {
      fontFamily: "Poppins-Regular",
      color: '#ffffff',
      fontSize: 16,
      flexWrap: 'wrap',
      ...theme.eventSummary
    },
    eventTimes: {
      fontFamily: "Poppins-Regular",
      // marginTop: 3,
      fontSize: 16,
      // fontWeight: 'bold',
      color: '#ffffff',
      flexWrap: 'wrap',
      ...theme.eventTimes
    },
    line: {
      height: 1,
      position: 'absolute',
      left: leftMargin,
      backgroundColor: 'rgb(216,216,216)',
      ...theme.line
    },
    lineNow: {
      height: 1,
      position: 'absolute',
      left: leftMargin,
      backgroundColor: 'transparent',
      ...theme.line
    },
    timeLabel: {
      position: 'absolute',
      left: 15,
      color: 'rgb(170,170,170)',
      fontSize: 10,
      fontFamily: 'Poppins-Bold',
      fontWeight: 'bold',
      ...theme.timeLabel
    }
  }
  return StyleSheet.create(style)
}
