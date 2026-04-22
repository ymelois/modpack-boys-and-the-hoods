RecipeViewerEvents.removeEntries("item", (event) => {
    event.remove("solonion:lunchbox");
    event.remove("solonion:golden_lunchbox");
});

RecipeViewerEvents.removeRecipes((event) => {
    event.remove("solonion:lunchbox");
    event.remove("solonion:golden_lunchbox");
});
