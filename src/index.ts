import ml5, { Pitch } from 'ml5'
import { on, trigger } from './events'
import { getNote } from './helpers'

const modelUrl =
  'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/'

const createTuner = () => {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)()

  let pitch = 0
  let loaded = false
  let isOn = false

  let pitchDetector: Pitch
  let mic: MediaStream

  async function setup() {
    mic = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: false,
        noiseSuppression: false,
        autoGainControl: false,
      },
    })
    startPitch(mic, audioContext)
  }

  function startPitch(mic: MediaStream, audioContext: AudioContext) {
    audioContext = new AudioContext()
    pitchDetector = ml5.pitchDetection(modelUrl, audioContext, mic, () => {
      loaded = true
      getPitch()
    })
  }

  function getPitch() {
    pitchDetector.getPitch(function (err: Error, frequency: number) {
      if (err) throw new Error(err.message)
      if (isOn) {
        if (frequency) {
          const { pitch, note, diff } = getNote(frequency)
          trigger({
            frequency,
            pitch,
            note,
            diff,
          })
        }
        setTimeout(() => {
          getPitch()
        }, 100)
      }
    })
  }

  async function start() {
    await setup()
    if (pitchDetector) getPitch()
    isOn = true
  }

  function stop() {
    isOn = false
    mic.getTracks().forEach((t) => t.stop())
  }

  return { start, stop, getData: on, isOn }
}

export default createTuner
