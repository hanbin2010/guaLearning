var aInb = function (a, b) {
    var o = a
    log("b.y > o.y", b.y > o.y, b.y, o.y)
    log("b.y < o.y + o.image.height", b.y < o.y + o.image.height, b.y, b.y + o.image.height)

    if (b.y > o.y && b.y < o.y + o.image.height ) {
        log("b.x > o.x", b.x > o.x, b.x, o.x)
        log("b.x < o.x + o.image.width", b.x < o.x + o.image.width, b.x, o.x + o.image.width)
        if (b.x > o.x && b.x < o.x + o.image.width ) {
            log("collide")
            return true
        }
    }
    return false
}

//position 是【0，0】格式
var Block = function (position) {
    var p = position
    var image = imageFromPath('block.png')
    var o = {
        image: image,
        x: p[0],
        y: p[1],
        w: 50,
        h: 20,
        alive: true,
    }

    o.kill = function () {
        o.alive = false
    }

    o.collide = function (b) {
        return o.alive && (aInb(o, b) || aInb(b, o))
    }

    return o
}
