//  ReactNativeControlVolume
//
//  Created by winplaybox on 03/03/2021
//  Copyright © 2021. All rights reserved.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RNControlVolume : RCTEventEmitter <RCTBridgeModule>

- (void)initVolumeView;
- (void)setVolume:(float)volumeValue;
@end
