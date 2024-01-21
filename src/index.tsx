import React, { PureComponent } from 'react';
import { Platform, UIManager, View } from 'react-native';
import { DEFAULT_PROPS } from './props';
import type { TProps } from './types';
import Calendar from './components/Calendar';
import Weekdays from './components/Weekdays';
import Header from './components/Header';

type TState = {
  year: number;
  month: number;
  date: string;
  mode: string;
};

class DatePicker extends PureComponent<TProps, TState> {
  static defaultProps = DEFAULT_PROPS;

  constructor(props: TProps) {
    super(props);

    let year = 0;
    let month = 0;
    let date = '';

    if (props.selectedDate && props.dateSeparator) {
      const selectedDate = props.selectedDate as string;
      const dateSeparator = props.dateSeparator as string;

      const dateComponents: string[] = selectedDate.split(dateSeparator);
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
    const { mode } = this.state;

    switch (mode) {
      case 'calendar':
        return (
          <>
            {this.renderWeekdays()}
            {this.renderCalendar()}
          </>
        );
      default :
        return (
          <></>
        );

    }
  }

  renderWeekdays() {
    const {
      weekdaysContainerStyle,
      weekdayStyle,
      weekdayTextStyle,
    } = this.props;

    return (
      <Weekdays
        weekdaysContainerStyle={weekdaysContainerStyle}
        weekdayStyle={weekdayStyle}
        weekdayTextStyle={weekdayTextStyle}
      />
    );
  }

  renderHeader() {
    const { year, month, mode } = this.state;
    const {
      showMonthLabel,
      dateSeparator,
      headerContainerStyle,
      yearMonthTextStyle,
      iconContainerStyle,
      backIcon,
      backIconStyle,
      nextIcon,
      nextIconStyle,
      yearMonthBoxStyle,
      minDate,
      maxDate,
    } = this.props;

    const changeModeTo = (mode: string) => this.setState({ mode });

    const changeYear = (increase: boolean) => () =>
      this.setState(state => ({
        year: increase ? state.year + 1 : state.year - 1,
        month: 1,
      }));

    const changeMonth = (increase: boolean) => () =>
      this.setState((prevState) => {
        if (increase) {
          if (month == 12) {
            return { year: prevState.year + 1, month: 1 } as TState;
          }
          return { month: prevState.month + 1 } as TState;
        }

        if (month == 1) {
          return { year: prevState.year - 1, month: 12 } as TState;
        }
        return { month: prevState.month - 1 } as TState;
      });

    let minYear = 0;
    let minMonth = 0;
    let maxYear = 0;
    let maxMonth = 0;

    if (minDate && maxDate && dateSeparator) {
      const minDateArray: string[] = minDate.split(dateSeparator);
      if (minDateArray.length >= 2) {
        minYear = parseInt(minDateArray[0] as string);
        minMonth = parseInt(minDateArray[1] as string);
      }
      const maxDateArray: string[] = maxDate.split(dateSeparator);
      if (minDateArray.length >= 2) {
        maxYear = parseInt(maxDateArray[0] as string);
        maxMonth = parseInt(maxDateArray[1] as string);
      }
    }

    return (
      <Header
        isShowMonthLabel={showMonthLabel}
        containerStyle={headerContainerStyle}
        yearMonthBoxStyle={yearMonthBoxStyle}
        mode={mode}
        changeModeTo={changeModeTo}
        yearMonthTextStyle={yearMonthTextStyle}
        iconContainerStyle={iconContainerStyle}
        backIcon={backIcon}
        backIconStyle={backIconStyle}
        year={year}
        month={month - 1}
        nextIcon={nextIcon}
        nextIconStyle={nextIconStyle}
        increaseYear={changeYear(true)}
        decreaseYear={changeYear(false)}
        increaseMonth={changeMonth(true)}
        decreaseMonth={changeMonth(false)}
        minYear={minYear}
        minMonth={minMonth - 1}
        maxYear={maxYear}
        maxMonth={maxMonth - 1}
      />
    );
  }

  renderCalendar() {
    const { year, month, date } = this.state;
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
        {this.renderHeader()}
        {this.renderContent()}
      </View>
    );
  }
}

export default DatePicker;
