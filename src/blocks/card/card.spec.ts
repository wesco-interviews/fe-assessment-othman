import * as fs from "fs";
import * as path from "path";
import cardData from "./card.json";
const html = fs.readFileSync(path.resolve(__dirname, "./card.html"));

jest.dontMock("fs");

describe("Card ->", function () {
    beforeEach(function () {
        document.documentElement.innerHTML = html.toString();
        require("./card");
    });

    afterEach(function () {
        jest.resetModules();
    });

    it("should have access to DOM", function () {
        expect(document.getElementById("app")).toBeTruthy();
    });

    it("card wrapper should be exist", function () {
        var cardWrapper = document.getElementsByClassName("card");
        expect(cardWrapper.length).toBe(1);
    });

    it("image should be exist", function () {
        var cardImage = document.getElementById("card-image") as HTMLImageElement;
        expect(cardImage).toBeTruthy();
        expect(cardImage?.src).toBe(cardData.image.src);
        expect(cardImage?.alt).toBe(cardData.image.alt);
    });

    it("title should be exist", function () {
        var cardTitle = document.getElementById("card-title");
        expect(cardTitle).toBeTruthy();
        expect(cardTitle?.textContent).toBe(cardData.title);
    });

    it("body should be exist", function () {
        var cardBody = document.getElementById("card-body");
        expect(cardBody).toBeTruthy();
        expect(cardBody?.textContent).toBe(cardData.body);
    });

    it("link should be exist", function () {
        var cardLink = document.getElementById("card-link");
        expect(cardLink).toBeTruthy();
        expect(cardLink?.textContent).toBe(cardData.button.label);
        expect(cardLink?.getAttribute("href")).toBe(cardData.button.href);
    });
});
