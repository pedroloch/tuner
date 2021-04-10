# Tuner

A javascript library to create a chromatic tuner that uses the [ml5](https://ml5js.org) pitch detection algorithm.

### Instalation

```
npm install --save @pedroloch/tuner
```

### Usage

```javascript
import createTuner from '@pedroloch/tuner'

// Creating the tuner
const tuner = createTuner()

// Starts to listen to the frequencies captured by the microfone.
tuner.start()

// Turns off the microfone and stops sending data.
tuner.stop()

// Check if the tuner is on or off.
tuner.isOn // return true or false

```

Getting the data:
```javascript
tuner.getData((data) => {
  console.log(data) // => {frequency: 220.47996157982865, pitch: 220, note: "A", diff: 7}
})
```

The data comes in an event format, containing the following information:

| Property      | Description |
| ----------- | ----------- |
| frequency      | The raw frequency captured by the microfone       |
| pitch   | The closest pitch. Ex: (440)        |
| note | The name of the note related to the closest pitch. Ex: (A)|
|diff| How far from the correct pitch is the raw frequency. This is a percentage value and can be negative (flat) or positive (sharp).  |

