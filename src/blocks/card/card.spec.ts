import * as fs from "fs";
import * as path from "path";
const html = fs.readFileSync(path.resolve(__dirname, './card.html'));

jest.dontMock('fs');

describe('Card ->', function () {
    beforeEach(function() {
        document.documentElement.innerHTML = html.toString();
        require('./card');
    });

    afterEach(function() {
        jest.resetModules();
    });

    it('should have access to DOM', function() {
        expect(document.getElementById('app')).toBeTruthy();
    });
});