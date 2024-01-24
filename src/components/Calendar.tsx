import React, { PureComponent } from 'react';
import { I18nManager, Platform, UIManager, View } from 'react-native';
import { DEFAULT_PROPS } from '../props';
import type { TCalendarProps } from '../types';
import RootCalendar from './RootCalendar';
import Weekdays from './Weekdays';
import Header from './Header';
import YearSelector from './YearSelector';
import MonthSelector from './MonthSelector';
import SelectTime from './SelectTime';

type TState = {
  year: number;
  month: number;
  date: string;
  mode: string;
  minYear: number;
  minMonth: number;
  maxYear: number;
  maxMonth: number;
  time: string;
  open: boolean;
};

class Calendar extends PureComponent<TCalendarProps, TState> {
  static defaultProps = DEFAULT_PROPS;

  constructor(props: TCalendarProps) {
    super(props);

    let year = 0;
    let month = 0;
    let date = '';
    let time = '';

    if (props.dateSeparator) {
      const selectedDate = props.value?.length === 16 ? props.value.split(' ')[0] as string : props.value as string;
      const dateSeparator = props.dateSeparator as string;

      const dateComponents: string[] = selectedDate.split(dateSeparator);
      if (dateComponents.length >= 2) {
        year = parseInt(dateComponents[0] as string);
        month = parseInt(dateComponents[1] as string);
      }
      date = selectedDate;
    }

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    let minYear = 0;
    let minMonth = 0;
    let maxYear = 0;
    let maxMonth = 0;

    if (props.minDate && props.maxDate && props.dateSeparator) {
      const minDateArray: string[] = props.minDate.split(props.dateSeparator);
      if (minDateArray.length >= 2) {
        minYear = parseInt(minDateArray[0] as string);
        minMonth = parseInt(minDateArray[1] as string);
      }
      const maxDateArray: string[] = props.maxDate.split(props.dateSeparator);
      if (minDateArray.length >= 2) {
        maxYear = parseInt(maxDateArray[0] as string);
        maxMonth = parseInt(maxDateArray[1] as string);
      }
    }
    if (props.value?.length === 16) {
      time = props.value.split(' ')[1] as string;
    }

    this.state = {
      year,
      month,
      date,
      mode: 'calendar',
      minYear,
      minMonth,
      maxYear,
      maxMonth,
      time: time,
    } as TState;
  }

  componentDidMount() {
    if (!I18nManager.isRTL) {
      I18nManager.allowRTL(true);
      I18nManager.forceRTL(true);
    }
  }

  renderMonths() {
    const { year, month } = this.state;
    const { eachMonthStyle, selectedEachMonthTextStyle, selectedEachMonthStyle, eachMonthTextStyle } = this.props;
    const onMonthChange = (month: number) => this.setState({ month, mode: 'calendar' });

    return (
      <MonthSelector
        onMonthChange={onMonthChange}
        eachMonthStyle={eachMonthStyle}
        selectedEachMonthStyle={selectedEachMonthStyle}
        eachMonthTextStyle={eachMonthTextStyle}
        selectedEachMonthTextStyle={selectedEachMonthTextStyle}
        year={year}
        month={month}
        minYear={this.state.minYear}
        minMonth={this.state.minMonth}
        maxYear={this.state.maxYear}
        maxMonth={this.state.maxMonth}
      />
    );
  }

  renderYears() {
    const { eachYearStyle, eachYearTextStyle, selectedEachYearTextStyle, selectedEachYearStyle } = this.props;
    const onYearChange = (year: number) => this.setState({ year, mode: 'month' });

    return (
      <YearSelector
        year={this.state.year}
        onYearChange={onYearChange}
        eachYearStyle={eachYearStyle}
        selectedEachYearTextStyle={selectedEachYearTextStyle}
        eachYearTextStyle={eachYearTextStyle}
        selectedEachYearStyle={selectedEachYearStyle}
        minYear={this.state.minYear}
        maxYear={this.state.maxYear}
      />
    );
  }

  renderContent() {
    const { mode } = this.state;
    const { isShowSelectTime } = this.props;
    switch (mode) {
      case 'calendar':
        return (
          <>
            {this.renderWeekdays()}
            {this.renderCalendar()}
            {isShowSelectTime && this.renderSelectTime()}
          </>
        );
      case 'month':
        return this.renderMonths();

      case 'year':
        return this.renderYears();
      default :
        return (
          <></>
        );

    }
  }

  renderSelectTime() {
    const {
      selectTimeContainerStyle,
      selectTimePickerItemStyle,
      selectTimePickerStyle,
      selectTimePickerMode,
      selectTimeDropdownIconColor,
      onChange,
    } = this.props;
    const { date, time } = this.state as TState;
    const onTimeChange = (time: string) => {
      this.setState({ time });
      onChange(`${date} ${time}`);
    };

    return (
      <SelectTime time={time} dropdownIconColor={selectTimeDropdownIconColor} containerStyle={selectTimeContainerStyle}
                  pickerStyle={selectTimePickerStyle}
                  mode={selectTimePickerMode} pickerItemStyle={selectTimePickerItemStyle} onTimeChange={onTimeChange} />
    );
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
    const { year, month, mode, minYear, maxYear, minMonth, maxMonth } = this.state;
    const {
      showMonthLabel,
      headerContainerStyle,
      yearMonthTextStyle,
      iconContainerStyle,
      backIcon,
      backIconStyle,
      nextIcon,
      nextIconStyle,
      yearMonthBoxStyle,
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
    const { year, month, date, time } = this.state as TState;
    const {
      dateSeparator,
      minDate,
      maxDate,
      onChange,
      dayStyle,
      selectedDayStyle,
      selectedDayColor,
      dayTextStyle,
      selectedDayTextColor,
      dayTextColor,
      disabledTextColor,
    } = this.props;
    const onDateChange = (date: string) => onChange(`${date} ${time}`);

    return (
      <RootCalendar
        year={year}
        month={month}
        selectedDate={date}
        onDateChange={(date: string) => {
          this.setState({ date });
          onDateChange(date);
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
      <View style={[DEFAULT_PROPS.style, style]}>
        {this.renderHeader()}
        {this.renderContent()}
      </View>
    );
  }
}

export default Calendar;
