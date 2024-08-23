let location: tiles.Location = null
tiles.setCurrentTilemap(tilemap`level2`)
let mySprite = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . . . 
    c c c c c d d e e e f c . . . . 
    . f d d d d e e e f f . . . . . 
    . . f f f f f e e e e f . . . . 
    . . . . f f e e e e e e f . f f 
    . . . f e e f e e f e e f . e f 
    . . f e e f e e f e e e f . e f 
    . f b d f d b f b b f e f f e f 
    . f d d f d d f d d b e f f f f 
    . . f f f f f f f f f f f f f . 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    . b b b d 5 5 5 5 5 4 4 4 4 4 b 
    b d d d b b d 5 5 4 4 4 4 4 b . 
    b b d 5 5 5 b 5 5 5 5 5 5 b . . 
    c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
    c b d c d 5 5 b 5 5 5 5 5 5 b . 
    . c d d c c b d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite3 = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
let mySprite4 = sprites.create(img`
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 5 f 5 5 5 5 f 5 e . . . . 
    . . f 5 5 5 4 4 5 5 5 f . . f f 
    . . f 4 5 5 f f 5 5 6 f . f 5 f 
    . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
    . . . f 4 5 5 5 5 5 5 4 4 5 f . 
    . . . f 5 5 5 5 5 4 5 5 f f . . 
    . . . f 5 f f f 5 f f 5 f . . . 
    . . . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
mySprite.setStayInScreen(true)
mySprite2.setStayInScreen(true)
mySprite3.setStayInScreen(true)
mySprite4.setStayInScreen(true)
mySprite.setPosition(5, 5)
mySprite2.setPosition(160, 5)
mySprite3.setPosition(5, 160)
mySprite4.setPosition(160, 160)
info.startCountdown(120)
// This function will update the tile color as the Duck sprite moves
game.onUpdate(function () {
    location = tiles.getTileLocation(Math.floor(mySprite.x / 16), Math.floor(mySprite.y / 16))
    tiles.setTileAt(location, assets.tile`myTile0`)
})
// This function will update the tile color as the Duck sprite moves
game.onUpdate(function () {
    location = tiles.getTileLocation(Math.floor(mySprite2.x / 16), Math.floor(mySprite2.y / 16))
    tiles.setTileAt(location, assets.tile`myTile1`)
})
// This function will update the tile color as the Duck sprite moves
game.onUpdate(function () {
    location = tiles.getTileLocation(Math.floor(mySprite3.x / 16), Math.floor(mySprite3.y / 16))
    tiles.setTileAt(location, assets.tile`myTile2`)
})
// This function will update the tile color as the Duck sprite moves
game.onUpdate(function () {
    location = tiles.getTileLocation(Math.floor(mySprite4.x / 16), Math.floor(mySprite4.y / 16))
    tiles.setTileAt(location, assets.tile`myTile3`)
})
forever(function () {
    controller.player1.moveSprite(mySprite)
    controller.player2.moveSprite(mySprite2)
    controller.player3.moveSprite(mySprite3)
    controller.player4.moveSprite(mySprite4)
})
