ServerEvents.recipes((event) => {
    event.custom({
        type: "create:compacting",
        ingredients: [
            { item: "create:cinder_flour" },
            { item: "create:cinder_flour" },
            { item: "create:cinder_flour" },
            { item: "create:cinder_flour" },
        ],
        results: [{ id: "minecraft:netherrack" }],
    });
});
