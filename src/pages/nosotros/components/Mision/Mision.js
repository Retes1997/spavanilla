import html from "./Mision.html?raw";
import "./Mision.css";

export default function Mision() {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = html;
  return wrapper;
}
