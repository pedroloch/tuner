# Tuner

A javascript library to create a chromatic tuner that uses the [ml5](https://ml5js.org) pitch detection algorithm.

### Instalation

```
npm install @pedroloch/tuner
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


## The MIT License (MIT)
Copyright © 2021 Pedro Loch

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


