RecipeViewerEvents.removeEntries("item", (event) => {
    event.remove("minecraft:copper_nugget");
});

RecipeViewerEvents.removeRecipes((event) => {
    event.remove("minecraft:copper_nugget");
});
