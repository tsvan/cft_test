import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Nav from '../components/Nav';
import User from '../components/User';
import {getUsersList} from '../actions/userAction';

export default function UsersScreen({navigation}) {
  const [users, setUsers] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [maxPages, setMaxPages] = React.useState(1);

  React.useEffect(() => {
    if (page <= maxPages) {
      getUsersList(getUsers, page);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  function getUsers(data, pages) {
    let tmp = [...users, ...data];
    setUsers(tmp);
    setMaxPages(pages);
  }

  function getNext() {
    let nextPage = page + 1;
    setPage(nextPage);
  }

  return (
    <View style={styles.container}>
      <Nav navigation={navigation} />
      <View style={styles.usersContainer}>
        {users && users.length > 0 ? (
          <FlatList
            data={users}
            keyExtractor={item => item.id}
            renderItem={({item}) => <User key={item.id} userData={item} />}
            onEndReached={getNext}
          />
        ) : (
          <Text>Пользователи не найдены</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  usersContainer: {
    flex: 1,
    flexGrow: 1,
  },
});
