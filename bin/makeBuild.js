function makeBuild() {
  this.builds = [];

  this.title = (parentNode, selector) => {
    let element = parentNode.querySelector(selector);
    element = element.textContent.replace("(Click For More Details)", "");
    return element;
  };
  this.get = () => {
    const buildsElement = document.querySelectorAll(".ind-build-container");
    for (let i = 0; i < buildsElement.length; i++) {
      const element = buildsElement[i];
      const title = this.title(element, ".secondary--text");
      const relics = this.items(element, ".relic-icons");
      const items = this.items(element, ".item-icons");
      this.builds.push({ title, relics, items });
    }
    return builds;
  };
  this.items = (parentNode, selector) => {
    const elementQuery = "div[aria-label].item-icon-mobile[role='button']";
    const items = parentNode
      .querySelector(selector)
      .querySelectorAll(elementQuery);
    const itemsText = [];
    for (let i = 0; i < items.length; i++) {
      let item = `0${i + 1} - ${items[i].ariaLabel}`;
      item = item.replace("Icon", "").trim();
      itemsText.push(item);
    }
    return itemsText;
  };
  this.get();
  return this.builds;
}
module.exports = makeBuild;
