"use strict";

function DomElement(selector) {
    this.selector = selector;
    this.height = '200';
    this.width = '200';
    this.bg = 'red';
    this.fontSize = '18';

    const div = document.createElement('div');

    this.create = () => {
        if (this.selector.indexOf('.') !== -1) {
            div.setAttribute('class', this.selector.slice(1));
            this.render();

        }
        if (this.selector.indexOf('#') !== -1) {
            div.setAttribute('id', this.selector.slice(1));
            this.render();
        }

    }
    this.render = () => {
        div.textContent = 'Любой текст';
        div.style.cssText = `height: ${this.height}px; width: ${this.width}px; background-color: ${this.bg}; fontSize: ${this.fontSize}px;`;
        document.body.append(div);
    }
}

const el = new DomElement('#test');
el.create();