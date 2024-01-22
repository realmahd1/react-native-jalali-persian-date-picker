import { MONTHS } from '../utils';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import type { TMonthSelector } from './types';

const MonthSelector = ({
                         onMonthChange,
                         month,
                         year,
                         selectedEachMonthStyle,
                         selectedEachMonthTextStyle,
                         minYear,
                         minMonth,
                         maxYear,
                         maxMonth,
                         eachMonthStyle,
                         eachMonthTextStyle,
                       }: TMonthSelector) => {
  const selectMonth = (month: number) => () => onMonthChange(month);

  const isDisabled = (index: number) => {
    if (year == minYear && year == maxYear) {
      return index < minMonth || index > maxMonth;
    }

    if (year == minYear) {
      return index < minMonth;
    }

    if (year == maxYear) {
      return index > maxMonth;
    }

    return false;
  };
  const renderMonth = ({ item, index }: { item: string; index: number; }) => (
    <TouchableOpacity key={item}
               style={isDisabled(index + 1) ? [eachMonthStyle, { transform: [{ rotateY: '180deg' }] }] : month === index + 1 ? [selectedEachMonthStyle, { transform: [{ rotateY: '180deg' }] }] : [eachMonthStyle, { transform: [{ rotateY: '180deg' }] }]}
               disabled={isDisabled(index + 1)} onPress={selectMonth(index + 1)}>
      <Text
        style={isDisabled(index + 1) ? {
          color: 'gray',
          fontSize: 16,
        } : month === index + 1 ? selectedEachMonthTextStyle : eachMonthTextStyle}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      style={{
        width: '95%',
        alignSelf: 'center',
        marginBottom: '3%',
        transform: [{ rotateY: '180deg' }],
      }}
      data={MONTHS}
      renderItem={renderMonth}
      keyExtractor={item => `${item}`}
      numColumns={3}
      removeClippedSubviews
      maxToRenderPerBatch={32}
      initialNumToRender={32}
      windowSize={48}
      getItemLayout={(_, index) => ({
        length: 60,
        offset: 60 * index,
        index,
      })}
    />
  );
};

export default MonthSelector;
