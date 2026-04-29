ServerEvents.recipes((event) => {
    event.custom({
        type: "create:compacting",
        heat_requirement: "heated",
        ingredients: [
            { item: "minecraft:clay_ball" },
            { item: "minecraft:clay_ball" },
            { item: "minecraft:clay_ball" },
            { item: "minecraft:flint" },
            { type: "fluid_stack", amount: 1000, fluid: "minecraft:water" },
        ],
        results: [{ id: "create:asurine" }],
    });
});
