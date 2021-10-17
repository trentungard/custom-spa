import { Navbar } from "../shared/Navbar.js";
const setTitle = (title) => document.title = title;
const getHtml = (html) => `
    ${Navbar}
    ${html}
`;

export const CreateView = (title, html) => {
    setTitle(title);
    return getHtml(html);
};