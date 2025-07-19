import React from 'react';
import { View, ImageBackground, TouchableOpacity } from 'react-native';
import { Players, row } from '../styles/forPlayers';
import Dice from './Dice';

export default function PlayerHome({
  player,
  diceImage,
  onRoll,
  containerStyle = {},
  background,
  startPositions,
  checkPosition,
  styles,
  dicePosition = 'before'
}) {
  return (
    <View style={row.Style}>
      {dicePosition === 'before' && (
        <Dice onRoll={onRoll} image={diceImage} position="before" />
      )}
      <View style={[Players.styles, containerStyle]}>
        <ImageBackground source={background} style={{ width: '100%', height: '100%' }}>
          <View>
            <View style={row.Style}>
              <View style={[styles.places]}>
                <TouchableOpacity>
                  {checkPosition(player, 1, startPositions[0])}
                </TouchableOpacity>
              </View>
              <View style={[styles.places, { marginLeft: 90 }]}>
                <TouchableOpacity>
                  {checkPosition(player, 2, startPositions[1])}
                </TouchableOpacity>
              </View>
            </View>
            <View style={row.Style}>
              <View style={[styles.places, { marginTop: 90 }]}>
                <TouchableOpacity>
                  {checkPosition(player, 3, startPositions[2])}
                </TouchableOpacity>
              </View>
              <View style={[styles.places, { marginTop: 90, marginLeft: 90 }]}>
                <TouchableOpacity>
                  {checkPosition(player, 4, startPositions[3])}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      {dicePosition === 'after' && (
        <Dice onRoll={onRoll} image={diceImage} position="after" />
      )}
    </View>
  );
}
