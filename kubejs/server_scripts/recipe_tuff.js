ServerEvents.recipes((event) => {
    event.remove("create:crushing/tuff_recycling");
    event.remove("create:crushing/tuff");

    event.custom({
        type: "create:compacting",
        heat_requirement: "heated",
        ingredients: [
            { item: "minecraft:andesite" },
            { item: "minecraft:cobblestone" },
            { type: "fluid_stack", amount: 250, fluid: "minecraft:lava" },
        ],
        results: [{ count: 2, id: "minecraft:tuff" }],
    });
});
