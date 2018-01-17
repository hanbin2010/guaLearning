
    var GuaGame = function (fps) {
        var g = {
            actions: {},
            keydowns: {},
        }
        var canvas = document.querySelector('#id-canvas')
        var ctx = canvas.getContext('2d')
        g.canvas = canvas
        g.ctx = ctx

        //draw
        g.drawImage = function (guaImage) {
            g.ctx.drawImage(guaImage.image, guaImage.x, guaImage.y)
        }


        //events
        window.addEventListener("keydown", function (event) {
            g.keydowns[event.key] = true

        })

        window.addEventListener("keyup", function (event) {
            g.keydowns[event.key] = false

        })

        g.registerAction = function (key, callback) {
            g.actions[key] = callback
        }
        //time
        setInterval(function () {
            //events
            var actions = Object.keys(g.actions)
            for (var i = 0; i < actions.length; i++) {
                var key = actions[i]
                if (g.keydowns[key]) {
                    // 如果按键被按下
                    // 调用注册好的action
                    g.actions[key]()
                }
            }
            //update
            g.update()
            //draw
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            g.draw()
        }, 1000 / fps);

        return g
    }
