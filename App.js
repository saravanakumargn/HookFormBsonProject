/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';

import {UUID} from 'bson';

import {useForm} from 'react-hook-form';

const App = () => {
  const {getValues} = useForm<FieldValues>({
    defaultValues: {
      _id: new UUID(), // Error
      _idString: new UUID().toString(), // Working. No Error
      fullName: 'name',
      contactNo: '',
    },
  });

  useEffect(() => {
    console.log('_id type : ', typeof getValues('_id'));
    // console.log('_id : ', getValues('_id').toString()); // Error:= TypeError: undefined is not an object (evaluating 'buffer.toString')
    console.log('_id : ', getValues('_id'));
    console.log('new UUID() : ', new UUID());
    console.log('_idString : ', getValues('_idString'));
    console.log('fullName : ', getValues('fullName'));
  }, [getValues]);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>test</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
