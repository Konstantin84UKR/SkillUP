import data from "./menu.json";
import template from "./template.hbs";

const menuHTML = document.querySelector(".js-menu");
const menu = template(data);
menuHTML.innerHTML = menu;
