ServerEvents.recipes((event) => {
    event.remove({ output: "minecraft:bundle" });

    event.shaped(Item.of("minecraft:bundle", 1), ["S", "L"], {
        S: "minecraft:string",
        L: "minecraft:leather",
    });
});
