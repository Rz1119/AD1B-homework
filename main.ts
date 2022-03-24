// When your Player (grey heart) overlaps with a Cupid (red heart), the Cupid disappears and your Player heart grows
sprites.onOverlap(SpriteKind.Player, SpriteKind.Valentine, function (sprite, otherSprite) {
    otherSprite.destroy()
    scaling.scaleByPixels(sprite, 15, ScaleDirection.Uniformly, ScaleAnchor.Middle)
})
// When your Player (grey heart) overlaps with an Arrow, the Arrow disappears and your Player heart shrinks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Arrow, function (sprite, otherSprite) {
    otherSprite.destroy()
    scaling.scaleByPixels(sprite, -7, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    info.changeLifeBy(-1)
})
info.setLife(3)
// Every 1.8 seconds a red heart appears on the screen shooting this number of arrows
game.onUpdateInterval(randint(1200, 2000), function () {
    valentine.send_valentine(assets.image`cupid hearts`, 3, assets.image`arrow`)
})
