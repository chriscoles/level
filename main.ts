let offset = -18
basic.forever(function () {
    if (input.acceleration(Dimension.X) >= -10 + offset && input.acceleration(Dimension.X) <= 10 + offset) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else if (input.acceleration(Dimension.X) < -10 + offset && input.acceleration(Dimension.X) > -60 + offset) {
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            `)
    } else if (input.acceleration(Dimension.X) < -60 + offset) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    } else if (input.acceleration(Dimension.X) > 10 + offset && input.acceleration(Dimension.X) < 60 + offset) {
        basic.showLeds(`
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            `)
    } else if (input.acceleration(Dimension.X) > 60 + offset) {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
    } else {
    	
    }
})
