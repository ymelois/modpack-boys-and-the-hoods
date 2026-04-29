ServerEvents.recipes((event) => {
    event.custom({
        type: "create:compacting",
        heat_requirement: "heated",
        ingredients: [
            { item: "minecraft:quartz" },
            { item: "minecraft:quartz" },
            { item: "minecraft:quartz" },
            { item: "minecraft:flint" },
            { type: "fluid_stack", amount: 1000, fluid: "minecraft:lava" },
        ],
        results: [{ id: "create:ochrum" }],
    });
});
