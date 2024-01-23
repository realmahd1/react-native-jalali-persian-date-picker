
# React Native Jalali Date Picker

A simple, customizable Calendar and Date/Time Picker for React native.
<div align="center">
  <img src="./example/assets/screenshot-1.png" alt="date picker"/>
</div>

## Installation

```bash
npm i react-native-jalali-persian-date-picker

# or if you prefer Yarn:
yarn add react-native-jalali-persian-date-picker

```

## Usage

#### Date Picker
Here is a simple example of how to use the `DatePicker` component:

```jsx
import DatePicker from 'react-native-jalali-persian-date-picker';

export default function Example() {
  const [value, setValue] = useState<string | undefined>();

    return(
        <DatePicker value={value} onChange={(date) => setValue(date)} />
    )
}
```

#### Calendar
Here is a simple example of how to use the `Calendar` component:


```jsx
import {Calendar} from 'react-native-jalali-persian-date-picker';

export default function Example() {
  const [value, setValue] = useState<string | undefined>();

    return(
        <Calendar value={value} onChange={(date) => setValue(date)} />
    )
}
```

#### Time Picker
You can include a time picker by adding the `isShowSelectTime` prop to both the Calendar and DatePicker components.


```jsx
import DatePicker from 'react-native-jalali-persian-date-picker';

export default function Example() {
  const [value, setValue] = useState<string | undefined>();

    return(
        <DatePicker isShowSelectTime={true} value={value} onChange={(date) => setValue(date)} />
    )
}
```


## Example

Take a look at [example](example):

```bash
git clone https://github.com/realmahd1/react-native-jalali-persian-date-picker

cd example

yarn

react-native run-android

# OR

react-native run-ios
```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
