import { NativeEventEmitter } from "react-native";

export = RNControlVolume;
export as namespace RNControlVolume;

declare namespace RNControlVolume {
  export function change(value: number): void;
  export function getVolume(): number;

  export type VolumeEventType = {
    volume: number;
  };

  export class ControlVolumeEvents extends NativeEventEmitter {}
}
