import { collection, getDocs } from 'firebase/firestore/lite';
import { Button, SizableText, Tabs, Text, VisuallyHidden, XStack, YStack } from 'tamagui';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';

import { db } from '../support/firebase';
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'react-native-svg';
import { TimerPickerModal } from 'react-native-timer-picker';

const Tab = createMaterialBottomTabNavigator();

export default function ProfileScreen() {
  const [showPicker, setShowPicker] = useState(false);
  const [timePicked, setTimePicked] = useState();
  const [data, setData] = useState([{"id": 1, "avgTime": 45, "responses": 20}]);

  const fakeData = data;
  const calcAvg = (hours:number, minutes:number, avg: number, responses:number) => {
    const totalTime = hours*60 + minutes;
    const newAvg = Math.ceil((avg*responses +totalTime)/(responses+1));
    fakeData[0].avgTime = newAvg;
    fakeData[0].responses = responses+1;
    setData(fakeData); 
  }

    return (
      <View style={{backgroundColor: "#FFFFFF", alignItems: "center", justifyContent: "center"}}>
               <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setShowPicker(true)}>
            <View style={{alignItems: "center"}}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => setShowPicker(true)}>
                    <View style={{marginTop: 30}}>
                        <Text
                            style={{paddingVertical: 10,
                            paddingHorizontal: 18,
                            borderWidth: 1,
                            borderRadius: 18,
                            fontSize: 10,
                            overflow: "hidden",
                            borderColor: "#8C8C8C",
                            color: "#8C8C8C"
                            }}>
                            Log Time
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
        <VisuallyHidden></VisuallyHidden>
        <TimerPickerModal
            visible={showPicker}
            setIsVisible={setShowPicker}           
            hideSeconds
            hourLabel="hr"
            minuteLabel="min"
            secondLabel="sec"
            LinearGradient={LinearGradient}
            styles={{
              pickerItem: {
                fontSize: 30,
              },
              pickerLabel: {
                fontSize: 20,
                right: -30,
              },
              pickerLabelContainer: {
                width: 60,
              },
              pickerItemContainer: {
                width: 120,
              },
            }}
            onConfirm={(timePicked) => {
              setShowPicker(false);
              calcAvg(timePicked.hours, timePicked.minutes, fakeData[0].avgTime, fakeData[0].responses)
            } }
            onCancel={() => setShowPicker(false)}            
            />
      </View>
    );
}