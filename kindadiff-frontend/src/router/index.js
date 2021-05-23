import Vue from 'vue';
import Router from 'vue-router';
import Landing from '../components/Landing.vue';
import Game from '../components/Game.vue';
import Game_run from '../components/Game_run.vue';


Vue.use(Router);

export default new Router({
    routes: [
        {
            path:"/",
            name: "Landing",
            component: Landing
        },
        {
            path:"/game",
            name: "game",
            component: Game
        },
        {
            path:"/game_run",
            name: "game_run",
            component: Game_run
        }
    ]
})
