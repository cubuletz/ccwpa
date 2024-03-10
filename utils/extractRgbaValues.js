/*
 ** Extract RGB values from string: 'rgba(0, 0, 0, 0)'
 */
// https://gist.github.com/junaidpv/6119929
export default function extractRgbaValues(rgba) {
  if (rgba) {
    let rgbaArray = rgba.replace(/[^\d,]/g, '').split(',')
    // Get r, g, b values from rgbaArray
    const r1 = rgbaArray[0]
    const g1 = rgbaArray[1]
    const b1 = rgbaArray[2]
    const a = rgbaArray[3]
    //
    // Convert RGBA to RGB
    // TODO: set real background value (not 255, 255, 255)
    let r = Math.round((1 - a) * 255 + a * r1)
    let g = Math.round((1 - a) * 255 + a * g1)
    let b = Math.round((1 - a) * 255 + a * b1)
    //
    // Return r, g, b values
    return { r, g, b }
  }
}
