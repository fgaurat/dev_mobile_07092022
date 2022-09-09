import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


export default function App() {

  const ROOT_URL="https://api.airtable.com/v0/appAb9tGrOrm5FOcj"
  const REACT_APP_TODOS_URL=`${ROOT_URL}/todos`
  const REACT_APP_TODOS_URL_VIEW_ALL = `${REACT_APP_TODOS_URL}?view=All`
  const REACT_APP_AIRTABLE_KEY="keyThj04G6YsO2Z9g"

  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch(REACT_APP_TODOS_URL_VIEW_ALL + "&maxRecords=200", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + REACT_APP_AIRTABLE_KEY
      }
    })
      .then(response => response.json())
      .then(data => {
        const todos = data.records.map(record => ({
          recordId: record.id,
          id: record.fields.id,
          title: record.fields.title,
          completed: record.fields.completed ? true : false
        }))
        console.log(todos)
        setTodos(todos)
      })

  }, [])

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );


  return (
      <SafeAreaView style={styles.container}>
      
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'lightblue',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
  },
});
