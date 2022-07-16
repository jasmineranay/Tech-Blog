// eslint-disable-next-line no-unused-vars
const appendContent = (obj) => {
    const element = obj;
    const content = document.createElement(obj.tag);
    const attributes = Object.entries(obj.setAttr);
  
    //Looping over all attributes and assigning it to content
    for (const [key, value] of attributes) {
      content.setAttribute(key, value);
    }
  
    if ('textContent' in element) {
      const contentContent = document.createTextNode(element.textContent);
      content.appendChild(contentContent);
    }
    element.appendTo.appendChild(content);
  };