export class Section {
    constructor({massive: items, renderer}, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = containerSelector;
    }
    renderItems() {
        this._renderedItems.forEach(item => this._renderer(item))
    }
    addItem(element) {
        this._container.prepend(element);
    }
}