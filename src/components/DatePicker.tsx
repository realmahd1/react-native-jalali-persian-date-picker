import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import Calendar from './Calendar';
import React, { useState } from 'react';
import type { TDatePickerProps } from '../types';

export default function DatePicker({ datePickerModalStyle, datePickerDismissIconColor, ...props }: TDatePickerProps) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onDismiss={() => setModalVisible(!modalVisible)}
        onRequestClose={() =>
          setModalVisible(!modalVisible)
        }>
        <View style={styles.centeredView}>
          <View style={[styles.modalView, datePickerModalStyle]}>
            <Pressable style={{ position: 'absolute', top: 10, right: 15 }} onPress={() => setModalVisible(false)}>
              <Image style={{ width: 20, height: 20, tintColor: datePickerDismissIconColor }}
                     source={{ uri: 'https://img.icons8.com/external-tal-revivo-filled-tal-revivo/48/external-close-cross-symbol-for-discontinued-and-invalid-basic-filled-tal-revivo.png' }} />
            </Pressable>

            <Calendar {...props} />
          </View>
        </View>
      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}>
        <Text>Show Modal</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    width: '100%',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
