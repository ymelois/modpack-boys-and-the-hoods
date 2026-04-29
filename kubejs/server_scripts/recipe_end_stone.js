ServerEvents.recipes((event) => {
    event.custom({
        type: "create:compacting",
        heat_requirement: "heated",
        ingredients: [
            { item: "minecraft:chorus_fruit" },
            { item: "minecraft:glowstone_dust" },
            { item: "minecraft:glowstone_dust" },
            { item: "minecraft:glowstone_dust" },
            { type: "fluid_stack", amount: 1000, fluid: "minecraft:lava" },
        ],
        results: [{ id: "minecraft:end_stone" }],
    });
});
