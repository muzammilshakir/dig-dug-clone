/**
 * a HUD container and child items
 */

game.HUD = game.HUD || {};


game.HUD.Container = me.Container.extend({

    init: function() {
        // call the constructor
        this._super(me.Container, 'init');

        // persistent across level change
        this.isPersistent = true;

        // make sure we use screen coordinates
        this.floating = true;

        // give a name
        this.name = "HUD";

        // add our child score object at the top left corner
        this.addChild(new game.HUD.ScoreItem(5, 5));
    }
});


/**
 * a basic HUD item to display score
 */
game.HUD.ScoreItem = me.Renderable.extend({
    /**
     * constructor
     */
    init: function(x, y) {

        // call the parent constructor
        // (size does not matter here)
        this._super(me.Renderable, 'init', [x, y, 10, 10]);

        this.font = new me.BitmapFont(
            me.loader.getBinary("PressStart2P"),
            me.loader.getImage("PressStart2P"),
            0.7,
            "right",
            "bottom"
        );
        // local copy of the global score
        this.score = -1;
    },

    /**
     * update function
     */
    update : function () {
        // we don't do anything fancy here, so just
        // return true if the score has been updated
        if (this.score !== game.data.score) {
            this.score = game.data.score;
            return true;
        }
        return false;
    },

    /**
     * draw the score
     */
    draw : function (renderer) {
        // draw it baby !
        this.font.draw (renderer, game.data.score, 600, 50);
        this.font.draw (renderer, game.data.highScore, 600, 100);
        this.font.draw (renderer, 'Burger', 590, 150);
        this.font.draw (renderer, 'Chips', 580, 200);
        var img = me.loader.getImage("burgerMin");
        var imgChips = me.loader.getImage("chipsMin");
        //this.font.draw (renderer, img, 600, 250);
        renderer.drawImage (img, 600, 130);
        renderer.drawImage (imgChips, 600, 180);
        //this.addChild(me.pool.pull("chips", 600, 250), 3);
    }

});
