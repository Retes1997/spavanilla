import html from "./Vision.html?raw";
import "./Vision.css";

export default function Vision() {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = html;
  return wrapper;
}
