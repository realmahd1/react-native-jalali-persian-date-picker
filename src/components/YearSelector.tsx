import React from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { getYears, toPersian } from '../utils';
import type { TYearSelector } from './types';

const YearSelector = ({
                        year,
                        onYearChange,
                        eachYearStyle,
                        selectedEachYearStyle,
                        eachYearTextStyle,
                        selectedEachYearTextStyle,
                        minYear,
                        maxYear,
                      }: TYearSelector) => {
  const selectYear = (year: number) => () => onYearChange(year);
  const renderYear = ({ item }: { item: number }) => (
    <TouchableOpacity key={item}
                      style={item === year ? selectedEachYearStyle : eachYearStyle}
                      onPress={selectYear(item)}>
      <Text style={item === year ? selectedEachYearTextStyle : eachYearTextStyle}>{toPersian(String(item))}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      style={{
        minWidth: '95%',
        alignSelf: 'center',
        marginBottom: '3%',
      }}
      data={getYears(minYear, maxYear)}
      renderItem={renderYear}
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
export default YearSelector;
