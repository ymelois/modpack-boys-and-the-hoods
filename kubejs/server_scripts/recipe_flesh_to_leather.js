ServerEvents.recipes((event) => {
    event.smelting("minecraft:leather", "minecraft:rotten_flesh");
    event.smoking("minecraft:leather", "minecraft:rotten_flesh");
    event.campfireCooking("minecraft:leather", "minecraft:rotten_flesh");
});
