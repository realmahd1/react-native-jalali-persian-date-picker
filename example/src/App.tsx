import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import DatePicker from 'react-native-jalali-persian-date-picker';
import { useState } from 'react';

export default function App() {
  const [value, setValue] = useState<string | undefined>();
  console.log(value);
  return (
    <View style={styles.container}>
      <DatePicker value={value} isShowSelectTime={true} onChange={(date) => setValue(date)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
