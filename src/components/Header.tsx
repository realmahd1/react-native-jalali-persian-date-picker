import React, { memo } from 'react';
import { View, TouchableOpacity, Text, Image, type ImageSourcePropType } from 'react-native';
import { MONTHS, toPersian } from '../utils';
import type { THeader } from './types';

const Header = memo(
  ({
     mode,
     containerStyle,
     changeModeTo,
     yearMonthTextStyle,
     iconContainerStyle,
     backIcon,
     backIconStyle,
     year,
     month,
     nextIcon,
     nextIconStyle,
     decreaseYear,
     increaseYear,
     decreaseMonth,
     increaseMonth,
     minYear,
     maxYear,
     minMonth,
     maxMonth,
     yearMonthBoxStyle,
     isShowMonthLabel,
   }: THeader) => {
    const renderIcon = (icon: ImageSourcePropType | undefined, isBack = false) => {
      if (mode === 'year') {
        return null;
      }

      const disabled = () => {
        if (mode === 'month') {
          return isBack ? year <= minYear : year >= maxYear;
        }
        return isBack
          ? year === minYear && month <= minMonth
          : year === maxYear && month >= maxMonth;
      };

      const onBackIconPress = () => {
        if (mode === 'month') {
          return decreaseYear();
        }
        decreaseMonth();
      };

      const onNextIconPress = () => {
        if (mode === 'month') {
          return increaseYear();
        }
        increaseMonth();
      };

      return (
        <TouchableOpacity
          style={[
            {
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              opacity: disabled() ? 0.5 : 1,
            },
            isBack
              ? { position: 'absolute', left: 5 }
              : { position: 'absolute', right: 5 },
            iconContainerStyle,
          ]}
          disabled={disabled()}
          onPress={isBack ? onBackIconPress : onNextIconPress}
        >
          <Image source={icon} style={isBack ? backIconStyle : nextIconStyle} />
        </TouchableOpacity>
      );
    };


    const renderTitle = () => {
      if (mode === 'calendar') {
        return (
          <Text style={yearMonthTextStyle}>
            {`${isShowMonthLabel ? MONTHS[month] : toPersian(String(month))}، ${toPersian(String(year))}`}
          </Text>
        );
      }

      return <Text style={yearMonthTextStyle}>{toPersian(String(year))}</Text>;
    };

    const onYearMonthPress = () => {
      if (mode === 'calendar') {
        return changeModeTo('month');
      }

      return changeModeTo(mode === 'year' ? 'month' : 'year');
    };

    return (
      <View
        style={[
          {
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'stretch',
          },
          containerStyle,
        ]}
      >
        {renderIcon(backIcon, true)}

        <TouchableOpacity
          style={yearMonthBoxStyle}
          onPress={onYearMonthPress}
        >
          {renderTitle()}
        </TouchableOpacity>

        {renderIcon(nextIcon)}
      </View>
    );
  },
);

export default Header;
