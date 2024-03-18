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
    foregroundAlpha = null,
    backgroundAlpha = null,
    fontSize = '',
    fontStyle = '',
  } = options

  // Contrast ratio
  const contrastRatio = ref('')
  // AA
  const contrastAA = ref('')
  // AAA
  const contrastAAA = ref('')

  if (
    foreground &&
    background &&
    foregroundAlpha &&
    backgroundAlpha &&
    fontSize &&
    fontStyle
  ) {
    // Foreground
    let rForeground
    let gForeground
    let bForeground
    // Background
    let rBackground
    let gBackground
    let bBackground

    // Extract foreground  r, g, b values
    rForeground = extractValues(foreground, foregroundAlpha).r
    gForeground = extractValues(foreground, foregroundAlpha).g
    bForeground = extractValues(foreground, foregroundAlpha).b

    // Extract foreground  r, g, b values
    rBackground = extractValues(background, backgroundAlpha).r
    gBackground = extractValues(background, backgroundAlpha).g
    bBackground = extractValues(background, backgroundAlpha).b

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
    // const contrastAA = ref('')
    // const contrastAAA = ref('')

    // Large text
    // TODO: font style black?
    if (
      (parseInt(fontSize) >= 18.66 &&
        parseInt(fontSize) < 24 &&
        fontStyle === 'bold') ||
      parseInt(fontSize) >= 24
    ) {
      ratio < 1 / 3
        ? (contrastAA.value = 'AA-Pass')
        : (contrastAA.value = 'AA-Fail')
      ratio < 1 / 4.5
        ? (contrastAAA.value = 'AAA-Pass')
        : (contrastAAA.value = 'AAA-Fail')
    }

    // Small text
    // TODO: font style black?
    if (parseInt(fontSize) <= 24 && fontStyle !== 'bold') {
      ratio < 1 / 4.5
        ? (contrastAA.value = 'AA-Pass')
        : (contrastAA.value = 'AA-Fail')
      ratio < 1 / 7
        ? (contrastAAA.value = 'AAA-Pass')
        : (contrastAAA.value = 'AAA-Fail')
    }

    //

    // Set contrast ratio
    contrastRatio.value = `${(1 / ratio).toFixed(2)} : 1`
  }

  return { contrastRatio, contrastAA, contrastAAA }
}
