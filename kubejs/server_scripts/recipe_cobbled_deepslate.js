ServerEvents.recipes((event) => {
    event.custom({
        type: "create:compacting",
        heat_requirement: "heated",
        ingredients: [
            { item: "minecraft:cobblestone" },
            { item: "minecraft:cobblestone" },
            { item: "minecraft:cobblestone" },
            { item: "minecraft:cobblestone" },
        ],
        results: [{ id: "minecraft:cobbled_deepslate" }],
    });
});
