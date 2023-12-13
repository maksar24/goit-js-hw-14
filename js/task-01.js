const qtyCategories = document.getElementById("categories").children;
console.log(`Number of categories: ${qtyCategories.length}`);

[...qtyCategories].forEach(el => {
    const title = el.firstElementChild.textContent;
    const qtyEl = el.lastElementChild.children.length;
    console.log(`
    Category: ${title}
    Elements: ${qtyEl}
    `);
});