import { NativeModules, NativeEventEmitter } from "react-native";

const ControlVolume = NativeModules.ControlVolume;
export const ControlVolumeEvents = new NativeEventEmitter(
  NativeModules.ControlVolume
);

export default ControlVolume;
