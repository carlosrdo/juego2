class Boss extends Opponent {
    constructor(game) {
        super(game, Math.floor(Math.random() * (game.width - 200)), 10, 200, 200, 2, BOSS_PICTURE, BOSS_PICTURE_DEAD);
        this.lives = 10; // El jefe tiene 10 vidas
        this.speed = 1;

    }

    /**
     * Dispara al jugador
     */
    shoot() {
        // El jefe dispara tres veces seguidas
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                super.shoot();
            }, i * 200);
        }
    }

    /**
     * Reduce las vidas del jefe
     */
    collide() {
        this.lives--;
        if (this.lives === 0) {
            super.collide();
        }
    }
}