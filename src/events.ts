import { TunerData } from './interfaces'

let events: ((event: TunerData) => any)[] = []

export const on = (callback: (event: TunerData) => any) => {
  if (events) events.push(callback)
  else events = [callback]
}

export const trigger = (rest: TunerData) => {
  if (events) {
    events.forEach((cb) => {
      cb(rest)
    })
  }
}
