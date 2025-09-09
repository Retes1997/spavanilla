import html from "./About.html?raw";
import "./About.css";

export default function About() {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = html;

  return wrapper;
}
