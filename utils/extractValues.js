/*
 ** Extract RGB values from string: 'rgba(0, 0, 0, 0)'
 */
// https://gist.github.com/junaidpv/6119929
export default function extractValues(rgb, alpha) {
  if (rgb) {
    let rgbArray = rgb.split(',')
    // Get r, g, b values from rgbaArray
    const r1 = rgbArray[0]
    const g1 = rgbArray[1]
    const b1 = rgbArray[2]

    //
    // Convert RGBA to RGB
    let r = Math.round((1 - alpha) * 255 + alpha * r1)
    let g = Math.round((1 - alpha) * 255 + alpha * g1)
    let b = Math.round((1 - alpha) * 255 + alpha * b1)
    //
    // Return r, g, b values
    return { r, g, b }
  }
}
