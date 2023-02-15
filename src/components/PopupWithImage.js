import Popup from "./Popup.js";
import { popupImageTitle, popupElementImg } from '../pages/index.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(title, link, alt) {
    super.open()
    popupImageTitle.textContent = title;
    popupElementImg.src = link;
    popupElementImg.alt = alt;
  }

  cloose() {
    super.cloose()
  }
}
