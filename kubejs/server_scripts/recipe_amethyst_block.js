ServerEvents.recipes((event) => {
    event.custom({
        type: "create:compacting",
        heat_requirement: "heated",
        ingredients: [
            { item: "create:asurine" },
            { item: "minecraft:amethyst_shard" },
            { item: "minecraft:amethyst_shard" },
            { item: "minecraft:amethyst_shard" },
        ],
        results: [{ id: "minecraft:amethyst_block" }],
    });
});
