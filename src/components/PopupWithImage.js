import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popup, popupImageTitle, popupElementImg) {
    super(popup);
    this._popupImageTitle = popupImageTitle;
    this._popupElementImg = popupElementImg;
  }

  open(title, link, alt) {
    super.open()
    this._popupImageTitle.textContent = title;
    this._popupElementImg.src = link;
    this._popupImageTitle.alt = alt;
    
  }

  
setEventListeners () {
  super.setEventListeners()
}
}
