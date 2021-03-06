import { allNotes, notes } from './notes'

export function getNote(frequency: number) {
  // find closest frequency
  const pitch = allNotes.reduce(function (prev, curr) {
    return Math.abs(curr - frequency) < Math.abs(prev - frequency) ? curr : prev
  })

  // find note name by closest frequency
  let note: string
  if (pitch === 0) note = '-'
  else {
    const index = allNotes.indexOf(pitch) % 12
    note = notes[index]
  }

  // calc diff
  const indexNote = allNotes.indexOf(pitch)
  let limit
  const isSharp = frequency > pitch
  if (isSharp) {
    limit = allNotes[indexNote + 1] - allNotes[indexNote]
  } else {
    limit = allNotes[indexNote] - allNotes[indexNote - 1]
  }

  const diff = Math.floor(((frequency - pitch) / limit) * 200)

  return { pitch, note, diff }
}
