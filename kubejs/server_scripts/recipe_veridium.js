ServerEvents.recipes((event) => {
    event.remove("create_aquatic_ambitions:smelting/veridium");

    event.custom({
        type: "create:compacting",
        heat_requirement: "heated",
        ingredients: [
            { item: "minecraft:prismarine_shard" },
            { item: "minecraft:prismarine_shard" },
            { item: "minecraft:prismarine_shard" },
            { item: "minecraft:flint" },
            { type: "fluid_stack", amount: 1000, fluid: "minecraft:lava" },
        ],
        results: [{ id: "create:veridium" }],
    });
});
