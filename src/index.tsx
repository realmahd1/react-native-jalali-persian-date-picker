import React, { PureComponent } from 'react';
import { Platform, UIManager, View } from 'react-native';
import Calendar from './components/Calendar';
import { DEFAULT_PROPS } from './props';
import type { TProps } from './types';
class DatePicker extends PureComponent<TProps> {
  static defaultProps = DEFAULT_PROPS;

  constructor(props:TProps) {
    super(props);

    let year = 0;
    let month = 0;
    let date = '';

    if (props.selectedDate && props.dateSeparator) {
      const selectedDate = props.selectedDate as string;
      const dateSeparator = props.dateSeparator as string;

      const dateComponents:string[] = selectedDate.split(dateSeparator);
      if (dateComponents.length >= 2) {
        year = parseInt(dateComponents[0] as string);
        month = parseInt(dateComponents[1] as string);
      }
      date = selectedDate;
    }
    this.state = {
      year,
      month,
      date,
      mode: 'calendar',
    };


    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }

  }

  renderContent() {
    return (
      <>
        {this.renderCalendar()}
      </>
    );
  }

  renderCalendar() {
    const { year, month, date } = this.state as { year: number; month: number; date: string; };
    const {
      dateSeparator,
      minDate,
      maxDate,
      onDateChange,
      dayStyle,
      selectedDayStyle,
      selectedDayColor,
      dayTextStyle,
      selectedDayTextColor,
      dayTextColor,
      disabledTextColor,
    } = this.props;
    const onChange = (date: string) => onDateChange(date);

    return (
      <Calendar
        year={year}
        month={month}
        selectedDate={date}
        onDateChange={(date: string) => {
          this.setState({ date });
          onChange(date);
        }}
        dateSeparator={dateSeparator as string}
        minDate={minDate as string}
        maxDate={maxDate as string}
        dayStyle={dayStyle}
        selectedDayStyle={selectedDayStyle}
        selectedDayColor={selectedDayColor}
        dayTextStyle={dayTextStyle}
        selectedDayTextColor={selectedDayTextColor}
        dayTextColor={dayTextColor}
        disabledTextColor={disabledTextColor}
      />
    );
  }

  render() {
    const { style } = this.props;
    return (
      <View style={style}>
        {this.renderContent()}
      </View>
    );
  }
}

export default DatePicker;
