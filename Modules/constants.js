import React, { Component } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

// STRING CONSTANTS
export const welcomeHeader = 'Welcome to Trojan Live';
export const getStarted = 'Get Started';

// COLORS
export const buttonBlueColor = '#288cfb';
export const backgroundColor = '#efefef';
export const cardBackgroundColor = '#eaeef2';
export const stopColor = 'red';
export const startColor = '#288cfb';
export const backgroundWhite = '#fff';

// ICONS 
export const RightCircle = () => <AntDesign style={{ padding: 4 }} name="rightcircle" size={20} color="#288cfb" />
export const CameraReverse = () => <Ionicons name="camera-reverse-outline" size={35} color="black" />
export const AlbumIcon = () => <MaterialIcons name="photo-camera-back" size={35} color="black" />

// IMAGE PATHS
export const welcomeImage = require('../assets/usc_trojan.png');

// STYLES
export const borderRadius5 = 5;
export const borderRadius10 = 10;
export const borderRadius25 = 25;
export const borderRadius50 = 50;
export const padding8 = 8;
export const padding16 = 16;
export const padding24 = 24;
export const fontSize32 = 32;
export const fontSize14 = 14;
export const margin8 = 8;
export const margin16 = 16;