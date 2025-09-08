import html from "./Historia.html?raw";
import "./Historia.css";

export default function Historia() {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = html;
  return wrapper;
}
