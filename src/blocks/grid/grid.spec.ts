import * as fs from "fs";
import * as path from "path";
import gridItems from "./grid.json";
const html = fs.readFileSync(path.resolve(__dirname, "./grid.html"));

jest.dontMock("fs");

describe("Grid ->", function () {
    var mainEl = document.getElementById("app");
    beforeEach(function () {
        document.documentElement.innerHTML = html.toString();
        require("./grid");
    });

    afterEach(function () {
        jest.resetModules();
    });

    it("should have access to DOM", function () {
        expect(document.getElementById("app")).toBeTruthy();
    });

    it("grid wrapper should be exist", function () {
        var gridWrapper = document.getElementsByClassName("grid");
        expect(gridWrapper.length).toBe(1);
    });

    it("check grid items count", function () {
        var gridElements = document.getElementsByClassName("grid-item");
        expect(gridElements.length).toBe(gridItems.items.length);
    });

    it("check grid items data", function () {
        var gridElements = document.getElementsByClassName("grid-item");
        Array.from(gridElements).forEach(function (item, index) {
            var title = item.querySelector("h1");
            var body = item.querySelector("p");

            expect(title?.textContent).toBe(gridItems.items[index].title);
            expect(body?.textContent).toBe(gridItems.items[index].body);
            expect((item as HTMLElement).style.backgroundColor).toBe(
                gridItems.items[index].color
            );
        });
    });

    it("check grid item heading and body", function () {
        var titlesCount = document.getElementsByTagName("h1").length;
        var bodyCount = document.getElementsByTagName("p").length;

        expect(titlesCount).toBeGreaterThanOrEqual(1);
        expect(bodyCount).toBeGreaterThanOrEqual(1);
    });
});
