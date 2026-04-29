LootJS.lootTables((event) => {
    const farmersdelight = event.modifyLootTables("farmersdelight:chests/fd_end_city_treasure");

    farmersdelight.replaceItem("farmersdelight:diamond_knife", "farmersdelight:netherite_knife");
    farmersdelight.replaceItem("farmersdelight:iron_knife", "farmersdelight:diamond_knife");

    const m = event.modifyLootTables(/^minecraft:chests\/end.*$/);

    m.removeItem("minecraft:beetroot_seeds");
    m.removeItem("minecraft:iron_horse_armor");
    m.removeItem("minecraft:golden_horse_armor");
    m.removeItem("minecraft:emerald");

    m.removeItem("minecraft:iron_ingot");
    m.removeItem("minecraft:gold_ingot");

    m.replaceItem("minecraft:diamond_pickaxe", "minecraft:netherite_pickaxe");
    m.replaceItem("minecraft:diamond_shovel", "minecraft:netherite_shovel");
    m.replaceItem("minecraft:diamond_sword", "minecraft:netherite_sword");

    m.replaceItem("minecraft:diamond_helmet", "minecraft:netherite_helmet");
    m.replaceItem("minecraft:diamond_chestplate", "minecraft:netherite_chestplate");
    m.replaceItem("minecraft:diamond_leggings", "minecraft:netherite_leggings");
    m.replaceItem("minecraft:diamond_boots", "minecraft:netherite_boots");

    m.replaceItem("minecraft:iron_pickaxe", "minecraft:diamond_pickaxe");
    m.replaceItem("minecraft:iron_shovel", "minecraft:diamond_shovel");
    m.replaceItem("minecraft:iron_sword", "minecraft:diamond_sword");

    m.replaceItem("minecraft:iron_helmet", "minecraft:diamond_helmet");
    m.replaceItem("minecraft:iron_chestplate", "minecraft:diamond_chestplate");
    m.replaceItem("minecraft:iron_leggings", "minecraft:diamond_leggings");
    m.replaceItem("minecraft:iron_boots", "minecraft:diamond_boots");

    m.firstPool((pool) => {
        pool.addEntry(LootEntry.of("minecraft:netherite_ingot", [1, 3]).withWeight(4));
    });

    m.createPool((pool) => {
        pool.addEntry(LootEntry.of("minecraft:netherite_upgrade_smithing_template"));
        pool.addEntry(LootEntry.empty().withWeight(14));
    });
});
