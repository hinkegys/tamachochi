let voeden = 20
let knuffel = 20
let dood = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        voeden += 5
    }
    if (input.buttonIsPressed(Button.B)) {
        knuffel += 5
    }
    if (voeden > 10) {
        basic.showIcon(IconNames.Happy)
    }
    if (voeden > 10) {
        basic.showIcon(IconNames.Happy)
    }
})
basic.forever(function () {
    voeden += 1
    basic.pause(1000)
})
basic.forever(function () {
    knuffel += 1
    basic.pause(1000)
})
