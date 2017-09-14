# react-native-card-carousel

infinite card style carousel for react-native project 

<br>Demo
------
<br>![](https://github.com/yjy5264/react-native-card-carousel/raw/master/image/card.gif)
<br>Install
------
```javascript
npm install react-native-card-carousel --save
```
<br>Usage
------
```javascript
import CarouselCard from 'react-native-card-carousel'

<CarouselCard
    height={250}
    autoplay
    interval={4000}
    data={itemArr}
    onPress={item => {}}
    contentRender={item => <CustomView item = {item} />}
/>
```
