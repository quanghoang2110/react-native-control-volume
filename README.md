# react-native-control-volume

Control device volume for iOS and Android.

## First installation step (applied for both iOS & Android)

`$ npm install react-native-control-volume --save`

#### 2. Automatic installation

`$ react-native link react-native-control-volume`

#### 3. Manual installation

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-control-volume` => `ios`
   - add `ReactNativeControlVolume.xcodeproj` to the Libraries folder in your XCode project
3. In XCode, in the project navigator, select your project. Add `libReactNativeControlVolume.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)

### Android

#### Manual installation

1. In Android Studio open `Module Settings` and add a Gradle Project.
2. Look for `react-native-control-volume` android folder and link with a Gradle.
3. Open MyApplication.java from main app and put the ReactNativeControlVolumePackage

```java
 @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new RNControlVolumePackage()
      );
    }
```

## Usage

This component only exposes an api to update device volume and listens for `VolumeChanged` events via hardware buttons. There is no UI component included.

```javascript
// Other imports
...

import ControlVolume, {
  ControlVolumeEvents
} from "react-native-control-volume";
import Slider from '@react-native-community/slider';

class App extends React.Component {
  state = {
    volume: 0
  }

  async componentDidMount() {
    this.setState({
      volume: await ControlVolume.getVolume()
    });

    // Add and store event listener
    this.volEvent = ControlVolumeEvents.addListener(
      "VolumeChanged",
      this.volumeEvent
    );
  }

  // Updates Slider UI when hardware buttons change volume
  volumeEvent = event => {
    this.setState({ volume: event.volume });
  };

  // Updates device volume
  sliderChange(value) {
    ControlVolume.change(value);
  }

  componentWillUnmount() {
    // remove event listener
    this.volEvent.remove();
  }

  render() {
    return (
      <Slider
        value={this.state.volume}
        onValueChange={this.sliderChange}
        // Other props
      />
    )
  }
}
```
