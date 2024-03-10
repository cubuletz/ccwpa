// import extractRgbValues from '~/utils/extractRgbValues'
// import extractRgbaValues from '~/utils/extractRgbaValues'

//

// Calculate luminance
// https://medium.com/tamman-inc/create-your-own-color-contrast-checker-11d8b95dff5b
function luminance(r, g, b) {
  let a = [r, g, b].map(function (v) {
    v /= 255
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  })
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722
}

//

// Contrast checker
export default function useContrastChecker(options) {
  // Options
  const {
    foreground = '', // rgb, rgba
    background = '', // rgb, rgba
    fontSize = '',
    fontStyle = '',
  } = options

  // Result
  const result = ref('')

  if (foreground && background && fontSize && fontStyle) {
    // Check if foreground / background color format is RGB or RGBA
    const foregroundHasRgba = foreground.includes('rgba')
    const backgroundHasRgba = background.includes('rgba')

    // Foreground
    let rForeground
    let gForeground
    let bForeground
    // Background
    let rBackground
    let gBackground
    let bBackground

    // Extract foreground  r, g, b values
    if (!foregroundHasRgba) {
      rForeground = extractRgbValues(foreground).r
      gForeground = extractRgbValues(foreground).g
      bForeground = extractRgbValues(foreground).b
    }
    if (foregroundHasRgba) {
      rForeground = extractRgbaValues(foreground).r
      gForeground = extractRgbaValues(foreground).g
      bForeground = extractRgbaValues(foreground).b
    }

    // Extract background  r, g, b values
    if (!backgroundHasRgba) {
      rBackground = extractRgbValues(background).r
      gBackground = extractRgbValues(background).g
      bBackground = extractRgbValues(background).b
    }
    if (backgroundHasRgba) {
      rBackground = extractRgbaValues(background).r
      gBackground = extractRgbaValues(background).g
      bBackground = extractRgbaValues(background).b
    }

    //

    // Calculate the foreground and background luminance
    const foregroundLuminance = luminance(rForeground, gForeground, bForeground)
    const backgroundLuminance = luminance(rBackground, gBackground, bBackground)

    // Calculate the color contrast ratio between foreground and background
    const ratio =
      foregroundLuminance > backgroundLuminance
        ? (backgroundLuminance + 0.05) / (foregroundLuminance + 0.05)
        : (foregroundLuminance + 0.05) / (backgroundLuminance + 0.05)

    //

    // Compare resulted contrast ratio to WCAG standards
    // https://webaim.org/resources/contrastchecker/
    let contrastAA
    let contrastAAA

    // Large text
    // TODO: font style black?
    if (
      (parseInt(fontSize) >= 18.66 &&
        parseInt(fontSize) < 24 &&
        fontStyle === 'bold') ||
      parseInt(fontSize) >= 24
    ) {
      ratio < 1 / 3 ? (contrastAA = 'AA-Pass') : (contrastAA = 'AA-Fail')
      ratio < 1 / 4.5 ? (contrastAAA = 'AAA-Pass') : (contrastAAA = 'AAA-Fail')
    }

    // Small text
    // TODO: font style black?
    if (parseInt(fontSize) <= 24 && fontStyle !== 'bold') {
      ratio < 1 / 4.5 ? (contrastAA = 'AA-Pass') : (contrastAA = 'AA-Fail')
      ratio < 1 / 7 ? (contrastAAA = 'AAA-Pass') : (contrastAAA = 'AAA-Fail')
    }

    //

    // Set result
    result.value = `${(1 / ratio).toFixed(
      2
    )}:1  (${contrastAA},  ${contrastAAA})`
  }

  return { result }
}
