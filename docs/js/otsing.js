/*
Tauno Erik
27.10.2025
*/
document.addEventListener("DOMContentLoaded", () => {
  // Load search results template (otsingud.html)
  fetch("html/otsingud.html")
    .then(res => res.text())
    .then(html => document.querySelector("#otsingutulemused").innerHTML = html)
    .catch(console.error);

  // Search input event
  const searchInput = document.querySelector("#search");
  searchInput.addEventListener("keyup", async () => {
    const searchTerm = searchInput.value.trim();
    const myExp = new RegExp(searchTerm, "i");

    // Toggle visibility
    document.querySelectorAll(".item, .avaleht")
      .forEach(el => el.style.display = "none");
    document.querySelector("#otsingutulemused").style.display = "block";

    // Load and filter JSON files dynamically
    for (let i = 1; i <= 40; i++) {
      const updateEl = document.querySelector(`#update${i}`);
      if (!updateEl) continue;
      try {
        const res = await fetch(`json/index${i}.json`);
        if (!res.ok) continue;
        const data = await res.json();

        const listItems = data
          .filter(val => val.name && val.name.search(myExp) !== -1)
          .map(val => `<li class="${i}"><a href="#!${val.i}">${val.name}</a></li>`)
          .join("");

        updateEl.innerHTML = listItems;
      } catch (err) {
        console.error(`Error loading json/index${i}.json`, err);
      }
    }
  });

  // Hash-based navigation and caching
  const cache = {
    "": {
      title: "Puiduterminoloogia",
      elem: document.querySelector(".avaleht")
    }
  };

  async function handleHashChange() {
    const hash = location.hash.replace(/^#!/, ""); // remove "#!"
    document.querySelectorAll("a.current").forEach(a => a.classList.remove("current"));
    document.querySelectorAll(".content > *").forEach(el => el.style.display = "none");

    if (hash) {
      const currentLink = document.querySelector(`a[href="#!${hash}"]`);
      if (currentLink) currentLink.classList.add("current");
    }

    if (cache[hash]) {
      cache[hash].elem.style.display = "block";
      document.title = cache[hash].title;
      return;
    }

    // Show loading message
    document.querySelector(".loading")?.style.setProperty("display", "block");

    try {
      const res = await fetch(`json/${hash}.json`);
      if (!res.ok) throw new Error("Not found");
      const data = await res.json();

      const item = document.createElement("div");
      item.classList.add("item");
      item.innerHTML = `
        <h1>${data.eesti}</h1>
        <div id="tolked">
          <ul>
            <li>Inglise keeles: ${data.inglise}</li>
            <li>Saksa keeles: ${data.saksa}</li>
            <li>Vene keeles: ${data.vene}</li>
            <li>Soome keeles: ${data.soome}</li>
          </ul>
        </div>
        <p>${data.seletuseesti}</p>
        <div id="kirjeldus"><p>${data.kirjeldus}</p></div>
      `;

      document.querySelector(".content").appendChild(item);
      cache[hash] = { title: data.eesti, elem: item };
      document.title = data.eesti; // Veebilehe title

      document.querySelector('meta[property="og:title"]').setAttribute(
        "content", data.eesti
      );

      document.querySelector('meta[property="og:description"]').setAttribute(
        "content", data.seletuseesti
      );

      document.querySelector("#otsingutulemused").style.display = "none";
    } catch (err) {
      console.error("Error loading JSON for hash:", hash, err);
    } finally {
      document.querySelector(".loading")?.style.setProperty("display", "none");
    }
  }

  window.addEventListener("hashchange", handleHashChange);
  handleHashChange(); // run once on load

});
