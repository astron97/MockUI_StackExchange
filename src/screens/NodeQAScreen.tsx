import * as React from 'react';
import {
  Alert,
  FlatList,
  Linking,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import GenericService from '../api/GenericService';

const NodeQA = () => {
  const [pageNumber, setPageNumber] = React.useState(1);
  const [questionsArray, setQuestionsArray] = React.useState([]);
  const [listLoading, setListLoading] = React.useState(true);

  const renderFlatlistItems = ({item}: any) => {
    return (
      <View style={[{flex: 1, padding: 5, borderRadius: 5}]}>
        <Text>{item?.title}</Text>
        <Text
          style={[{color: 'blue'}]}
          onPress={() => {
            Linking.openURL(item?.link);
          }}>
          {item?.link}
        </Text>
      </View>
    );
  };
  React.useEffect(() => {
    GenericService.get(
      `page=${pageNumber}&pagesize=10&order=desc&sort=hot&tagged=nodejs&filter=default&site=stackoverflow&run=true`,
      (err: any, data: any) => {
        if (err) {
          console.log('error react screen', err);
          Alert.alert(err.toString());
        } else {
          if (pageNumber > 1) {
            if (data?.has_more) {
              let newArray: [] = data?.items;
              setQuestionsArray(oldArray => [...oldArray, ...newArray]);
            } else {
              Alert.alert('No more items !');
            }
          } else {
            let newArray: [] = data?.items;
            setQuestionsArray(oldArray => [...oldArray, ...newArray]);
          }
          setListLoading(false);
        }
      },
    );
  }, [pageNumber]);
  return (
    <View style={[{flex: 1}]}>
      <Text style={[{fontSize: 25}]}>Node Q/A</Text>
      <FlatList
        data={questionsArray}
        renderItem={renderFlatlistItems}
        onEndReachedThreshold={0.7}
        onEndReached={({distanceFromEnd}) => {
          if (distanceFromEnd < 0) {
            return;
          } else {
            setListLoading(true);
            setPageNumber(pageNumber + 1);
          }
        }}
        ListEmptyComponent={() => {
          return (
            <View
              style={[
                {flex: 1, justifyContent: 'center', alignItems: 'center'},
              ]}>
              <Text style={[{color: 'red', fontSize: 25}]}>No data</Text>
              <ActivityIndicator size="large" animating={listLoading} />
            </View>
          );
        }}
      />
    </View>
  );
};

export {NodeQA};
