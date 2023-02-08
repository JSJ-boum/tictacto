input.onButtonPressed(Button.A, function () {
    if (true) {
        led.plotBrightness(0, 0, 150)
        if (false) {
            led.unplot(0, 0)
        }
    } else if (true) {
        led.plotBrightness(0, 2, 150)
        if (false) {
            led.unplot(0, 0)
        }
    } else if (true) {
        led.plotBrightness(0, 4, 150)
        if (false) {
            led.unplot(0, 0)
        }
    } else if (true) {
        led.plotBrightness(2, 0, 150)
        if (false) {
            led.unplot(0, 0)
        }
    } else if (true) {
        led.plotBrightness(2, 2, 150)
        if (false) {
            led.unplot(0, 0)
        }
    } else if (true) {
        led.plotBrightness(2, 4, 150)
        if (false) {
            led.unplot(0, 0)
        }
    } else if (true) {
        led.plotBrightness(4, 0, 150)
        if (false) {
            led.unplot(0, 0)
        }
    } else if (true) {
        led.plotBrightness(4, 2, 150)
        if (false) {
            led.unplot(0, 0)
        }
    } else if (true) {
        led.plotBrightness(4, 4, 150)
        if (false) {
            led.unplot(0, 0)
        }
    }
})
basic.forever(function () {
    led.plotBrightness(1, 0, 255)
    led.plotBrightness(1, 1, 255)
    led.plotBrightness(1, 2, 255)
    led.plotBrightness(1, 3, 255)
    led.plotBrightness(1, 4, 255)
    led.plotBrightness(0, 1, 255)
    led.plotBrightness(0, 3, 255)
    led.plotBrightness(2, 1, 255)
    led.plotBrightness(2, 3, 255)
    led.plotBrightness(3, 0, 255)
    led.plotBrightness(3, 1, 255)
    led.plotBrightness(3, 2, 255)
    led.plotBrightness(3, 3, 255)
    led.plotBrightness(3, 4, 255)
    led.plotBrightness(4, 1, 255)
    led.plotBrightness(4, 3, 255)
})
