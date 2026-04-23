ServerEvents.recipes((event) => {
    event.remove({ id: "create:crushing/diamond_ore" });
    event.remove({ id: "create:crushing/deepslate_diamond_ore" });

    event.custom({
        type: "create:crushing",
        ingredients: [{ item: "minecraft:diamond_ore" }],
        processing_time: 350,
        results: [
            { id: "minecraft:diamond" },
            { chance: 0.75, id: "minecraft:diamond" },
            { chance: 0.75, id: "create:experience_nugget" },
            { chance: 0.125, id: "minecraft:netherrack" },
        ],
    });

    event.custom({
        type: "create:crushing",
        ingredients: [{ item: "minecraft:deepslate_diamond_ore" }],
        processing_time: 450,
        results: [
            { count: 2, id: "minecraft:diamond" },
            { chance: 0.25, id: "minecraft:diamond" },
            { chance: 0.75, id: "create:experience_nugget" },
            { chance: 0.125, id: "minecraft:blackstone" },
        ],
    });
});
