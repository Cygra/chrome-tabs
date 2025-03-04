const title = document.querySelector("#title");

const onClick = (tab, lastId) => {
  chrome.tabs.highlight({ tabs: tab.index });
  chrome.tabs.remove(lastId);
};

const ul = document.createElement("ul");
title.after(ul);

chrome.tabs.query({}, (tabs) => {
  tabs.forEach((t) => {
    const li = document.createElement("li");
    li.className = "item";
    li.appendChild(document.createTextNode(t.title));
    li.appendChild(document.createElement("br"));
    li.appendChild(document.createTextNode(t.url));
    li.onclick = () => onClick(t, tabs[tabs.length - 1].id);
    ul.appendChild(li);
  });
});
