import {Grid, GridItem} from "../../types/Grid";
import data from '../grid/grid.json';
import '../grid/grid.scss';

/**
 * Grid Decorator
 *
 * @param {Grid} items GridItem array
 */
function decorate({items}: Grid) {
    const app = document.getElementById("app");
    const parent = document.createElement("div");
    parent.classList.add('grid');
    app?.append(parent);
}

decorate(data);