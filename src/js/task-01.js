const selectAllCategories = document.querySelectorAll(".item");
const numberOfCategories = selectAllCategories.length;

console.log(`Number of categories: ${numberOfCategories}`);

selectAllCategories.forEach((category) => {
    const nameOfCategories = category.querySelector("h2");
    const numOfLiInCategories = category.querySelectorAll("li");

    console.log(`Category: ${nameOfCategories.textContent}`);
    console.log(`Elements: ${numOfLiInCategories.length}`);
})
