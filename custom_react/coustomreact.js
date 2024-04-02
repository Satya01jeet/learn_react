const elem = {
    type: "a",
    attributes: {
        href: "http://google.com",
        target: "_blank"
    },
    children: "Click me to open google"
};
const mainContainer = document.querySelector('#root');
function customRender(elem, mainContainer){
    const domElem = document.createElement(elem.type);
    domElem.innerHTML = elem.children;
    for(const prop in elem.attributes){
        if(prop === 'children') continue;
        domElem.setAttribute(prop, elem.attributes[prop]);
    }
    mainContainer.appendChild(domElem);
}
customRender(elem, mainContainer);