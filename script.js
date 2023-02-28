"use strict";

function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

    this.create = () => {
        if (this.selector.indexOf('.') !== -1) {
            const div = document.createElement('div');

            div.setAttribute('class', this.selector.slice(1));
            div.textContent = 'Любой текст';
            div.style.cssText = `height: ${this.height}px; width: ${this.width}px; background-color: ${this.bg}; fontSize: ${this.fontSize}px;`;
            document.body.append(div);

        }
        if (this.selector.indexOf('#') !== -1) {
            const div = document.createElement('p');

            div.setAttribute('id', this.selector.slice(1));
            div.textContent = 'Любой текст';
            div.style.cssText = `height: ${this.height}px; width: ${this.width}px; background-color: ${this.bg}; fontSize: ${this.fontSize}px;`;
            document.body.append(div);
        }

    }
}

const el = new DomElement('#test', '200', '200', 'red', '18');
const el2 = new DomElement('.test', '200', '200', 'red', '18');
el.create();
el2.create();