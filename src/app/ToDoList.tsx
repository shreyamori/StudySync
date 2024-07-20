import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, ListRenderItem } from 'react-native';
import { Button, SizableText, Tabs, Text, XStack, YStack } from 'tamagui';


type ToDoItem = {
  id: string;
  title: string;
  date: string;
  completed: boolean;
};

const data: ToDoItem[] = [
  { id: '1', title: 'Go to Gym', date: '2 Days ago', completed: false },
  { id: '2', title: 'Clean Room', date: '1 Days ago', completed: false },
  { id: '3', title: 'Pay Rent', date: '12 Days ago', completed: true },
];

const ToDoList: React.FC = () => {
  const renderItem: ListRenderItem<ToDoItem> = ({ item }) => (
    <View style={[styles.itemContainer, item.completed ? styles.completedItem : styles.incompleteItem]}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View>
        <Text  style={{fontFamily: 'Arial Rounded MT bold', left: 130, top: 50}} alignContent = "center" fontSize={18}  color = "#000000">
          To-Do List
        </Text>
      </View>
      <Text  style={{fontFamily: 'Arial Rounded MT bold', left: 10, top: 80}} alignContent = "center" fontSize={18}  color = "#000000">
          Incomplete: 
      </Text>
      <FlatList
        style={{left: 10, top: 90, width: 340, height: 70}}
        data={data.filter(item => !item.completed)}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Text  style={{fontFamily: 'Arial Rounded MT bold', left: 10, top: 5}} alignContent = "center" fontSize={18}  color = "#000000">
          Complete: 
      </Text>
      <FlatList
        style={{left: 10, top: 20, width: 340, height: 70}}
        data={data.filter(item => item.completed)}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  completedItem: {
    backgroundColor: '#FFF5E1',
  },
  incompleteItem: {
    backgroundColor: '#FFE4E1',
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: '#C4C4C4',
  },
});

export default ToDoList;
