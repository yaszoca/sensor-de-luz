basic.showIcon(IconNames.Heart)
basic.pause(2000)
basic.clearScreen()
basic.pause(200)
basic.forever(function () {
    basic.showNumber(input.lightLevel())
    basic.pause(2000)
    if (input.lightLevel() < 100) {
        basic.showIcon(IconNames.No)
        basic.pause(2000)
    } else {
        basic.showIcon(IconNames.Yes)
        basic.pause(2000)
    }
})
