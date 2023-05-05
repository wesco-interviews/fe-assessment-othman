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
    items.forEach((item)=>{
        const itemContainer = document.createElement("div");
        const itemTitle = document.createElement('h1');
        const itemBody = document.createElement('p');

        itemTitle.textContent = item.title;

        itemBody.textContent = item.body;

        itemContainer.append(itemTitle);
        itemContainer.append(itemBody);
        itemContainer.classList.add('grid-item');
        itemContainer.style.background= item.color;

        parent.append(itemContainer);

    })
    app?.append(parent);
}

decorate(data);