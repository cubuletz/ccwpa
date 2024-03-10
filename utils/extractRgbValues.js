/*
 ** Extract RGB values from string: 'rgb(0, 0, 0)'
 */
// https://gist.github.com/junaidpv/6119929
export default function extractRgbValues(rgb) {
  if (rgb) {
    let rgbArray = rgb.replace(/[^\d,]/g, '').split(',')
    // Get r, g, b values from rgbArray
    const r = rgbArray[0]
    const g = rgbArray[1]
    const b = rgbArray[2]
    //
    // Return r, g, b values
    return { r, g, b }
  }
}
