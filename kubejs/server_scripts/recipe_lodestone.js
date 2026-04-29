ServerEvents.recipes((event) => {
    event.remove({ id: "minecraft:lodestone" });

    event.shaped(Item.of("minecraft:lodestone", 1), ["XXX", "XYX", "XXX"], {
        X: "minecraft:chiseled_stone_bricks",
        Y: "minecraft:iron_ingot",
    });
});
