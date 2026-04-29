ServerEvents.recipes((event) => {
    event.remove("create:crushing/netherrack");

    event.custom({
        type: "create:crushing",
        ingredients: [{ item: "create:scorchia" }],
        processing_time: 250,
        results: [
            { chance: 0.25, id: "create:cinder_flour" },
            { chance: 0.2, id: "minecraft:coal" },
        ],
    });
});
