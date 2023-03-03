import {Card} from '../../types/Card';
import data from '../card/card.json';
import '../card/card.scss';

/**
 * Card decorator function
 *
 * This function accepts props defined in types/Card.ts and
 * marshals in data from the card.json file located in this
 * file's directory.
 *
 * From here, we would look to target the "app" div defined
 * in our "card.html" file where we will now be able to append
 * a parent (wrapper) element and using all the child elements
 * this component comprises to create a re-usable component.
 *
 * @param {string} title Title text (h1)
 * @param {string} body Body text (p)
 * @param {Object} image Image source/alt
 * @param {Object} button Button href/label
 */
function decorate({title, body, image, button}: Card) {
    const app = document.getElementById("app");
    const parent = document.createElement("div");
    const h1 = document.createElement("h1");

    // title example, we want this to read in from the props
    h1.textContent = "Card Title";
    parent.append(h1);

    parent.classList.add("card");

    app?.appendChild(parent);
}

decorate(data);
