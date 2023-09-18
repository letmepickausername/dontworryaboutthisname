basic.showNumber(1)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . . . .
    . . # . .
    `)
basic.showNumber(2)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . . . .
    . . # . .
    `)
basic.showNumber(3)
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . . . .
    . . # . .
    `)
basic.forever(function () {
    music.play(music.createSoundExpression(WaveShape.Triangle, 404, 5000, 18, 255, 5000, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
})
