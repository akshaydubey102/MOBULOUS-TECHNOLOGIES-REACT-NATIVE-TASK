# React Native Assignment

A production-ready React Native application built using React Native CLI that demonstrates two key mobile UI patterns:

1. Instagram-style Profile Screen with Collapsible Header and Sticky Tabs
2. YouTube-style Video Feed with Auto-Play Functionality

---

## Features

### Task 1: Instagram Profile Screen

* Instagram-inspired profile layout
* Collapsible profile header
* Sticky tab navigation
* Four content tabs:

  * Posts
  * Videos
  * Tagged
  * About
* Responsive grid layout
* Smooth scrolling experience
* Optimized rendering for better performance

### Task 2: YouTube Feed Screen

* Dynamic video feed using FlatList
* Auto-play videos based on visibility
* Pause inactive videos automatically
* Only one video plays at a time
* Loading indicators
* Mute/Unmute functionality
* Network-aware fallback using NetInfo
* Optimized scrolling performance

---

## Tech Stack

* React Native CLI
* React Navigation v7
* React Native Video
* React Native Collapsible Tab View
* React Native Reanimated
* React Native Gesture Handler
* React Native Pager View
* React Native Fast Image
* React Native NetInfo

---

## Project Structure

```text
src/
├── assets/
│
├── components/
│   ├── ProfileHeader/
│   ├── VideoCard/
│   ├── TaskCard/
│   └── Common/
│
├── constants/
│   ├── colors.js
│   ├── fonts.js
│   └── dimensions.js
│
├── hooks/
│   ├── useAutoPlayVideo.js
│   └── useNetworkStatus.js
│
├── navigation/
│   └── AppNavigator.js
│
├── screens/
│   ├── HomeScreen.js
│   ├── InstagramProfileScreen.js
│   └── YoutubeFeedScreen.js
│
├── services/
│
├── utils/
│
└── data/
    ├── profileData.js
    └── feedData.js
```

---

## Installation

### Clone Repository

```bash
git clone <repository-url>
cd project-name
```

### Install Dependencies

```bash
npm install
```

---

## Android Setup

### Clean Android Build

```bash
cd android
./gradlew clean
cd ..
```

### Start Metro

```bash
npx react-native start
```

### Run Android Application

```bash
npx react-native run-android
```

---

## Required Packages

### Navigation

```bash
npm install @react-navigation/native
npm install @react-navigation/native-stack
```

### React Native Gesture Handler

```bash
npm install react-native-gesture-handler
```

### React Native Reanimated

```bash
npm install react-native-reanimated
npm install react-native-worklets
```

### Pager View

```bash
npm install react-native-pager-view
```

### Collapsible Tabs

```bash
npm install react-native-collapsible-tab-view
```

### Video Player

```bash
npm install react-native-video
```

### Fast Image

```bash
npm install react-native-fast-image
```

### Network Monitoring

```bash
npm install @react-native-community/netinfo
```

---

## Babel Configuration

```javascript
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: ['react-native-reanimated/plugin'],
};
```

---

## Auto Play Video Logic

The YouTube Feed screen uses:

* FlatList
* onViewableItemsChanged
* itemVisiblePercentThreshold = 30

Videos automatically:

* Play when 30% visible
* Pause when off-screen
* Maintain smooth scrolling performance

---

## Performance Optimizations

### FlatList

```javascript
windowSize={5}
initialNumToRender={3}
maxToRenderPerBatch={5}
removeClippedSubviews
```

### React Optimizations

* React.memo
* useCallback
* useMemo

### Media Optimizations

* Fast Image Caching
* Video Pause/Resume Control
* Lazy Rendering

---

## Navigation Flow

```text
Home Screen
│
├── Instagram Profile Task
│      │
│      └── Instagram Profile Screen
│
└── YouTube Feed Task
       │
       └── YouTube Feed Screen
```

---

## Screens

### Home Screen

Provides navigation to:

* Instagram Profile Task
* YouTube Feed Task

### Instagram Profile Screen

Contains:

* Profile Header
* Posts Tab
* Videos Tab
* Tagged Tab
* About Tab

### YouTube Feed Screen

Contains:

* Video Feed
* Auto-Play Videos
* Description
* Network-Aware Playback

---

## Compatibility

Tested for:

* Android Emulator
* Android Physical Device
* React Native CLI Environment

---

## Future Improvements

* API Integration
* Pull To Refresh
* Infinite Pagination
* Offline Caching
* Dark Mode Support
* Video Quality Selection

---

## Author

Akshay Dubey

React Native Developer
