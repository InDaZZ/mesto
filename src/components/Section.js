export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._renderer = renderer;//Отрисовка каждого отдельного элемента должна осуществляться функцией renderer.
    this._container = document.querySelector(containerSelector);
  }


  //публичный метод addItem, который принимает DOM-элемент и добавляет его в контейнер.
  additem(element) {
    this._container.append(element);
  }

  renderItems() {
    this._renderedItems.forEach(item => {
      this._renderer(item);
    });
  }
}