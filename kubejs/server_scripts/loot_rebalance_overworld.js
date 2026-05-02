ServerEvents.tags("item", (event) => {
    event.remove("terralith:spire/rare_tools", "minecraft:diamond_hoe");
    event.remove("terralith:spire/rare_tools", "minecraft:diamond_shovel");
    event.add("terralith:spire/rare_tools", "minecraft:golden_hoe");
    event.add("terralith:spire/rare_tools", "minecraft:golden_shovel");

    event.remove("terralith:spire/diamond", "minecraft:diamond");
    event.remove("terralith:spire/diamond", "minecraft:diamond_ore");
    event.remove("terralith:spire/diamond", "minecraft:deepslate_diamond_ore");
    event.add("terralith:spire/diamond", "minecraft:gold_ingot");
    event.add("terralith:spire/diamond", "minecraft:gold_ore");
    event.add("terralith:spire/diamond", "minecraft:deepslate_gold_ore");
});

LootJS.lootTables((event) => {
    event.clearLootTables(/^quark:.*$/);

    const terralith_smith = event.modifyLootTables(/^terralith:village\/.*\/smith.*$/);

    terralith_smith.replaceItem("minecraft:diamond", "minecraft:gold_ingot");
    terralith_smith.replaceItem("minecraft:diamond_ore", "minecraft:gold_ore");
    terralith_smith.replaceItem("minecraft:deepslate_diamond_ore", "minecraft:deepslate_gold_ore");
    terralith_smith.replaceItem("minecraft:diamond_pickaxe", "minecraft:golden_pickaxe");

    const terralith_spire = event.modifyLootTables(/^terralith:spire.*$/);

    terralith_spire.removeItem("minecraft:diamond");

    terralith_spire.replaceItem("minecraft:diamond_pickaxe", "minecraft:golden_pickaxe");
    terralith_spire.replaceItem("minecraft:diamond_shovel", "minecraft:golden_shovel");
    terralith_spire.replaceItem("minecraft:diamond_axe", "minecraft:golden_axe");
    terralith_spire.replaceItem("minecraft:diamond_sword", "minecraft:golden_sword");
    terralith_spire.replaceItem("minecraft:diamond_chestplate", "minecraft:golden_chestplate");
    terralith_spire.replaceItem("minecraft:diamond_leggings", "minecraft:golden_leggings");
    terralith_spire.replaceItem("minecraft:diamond_boots", "minecraft:golden_boots");

    const terralith_junk = event.modifyLootTables(/^terralith:village\/.*\/junk.*$/);

    terralith_junk.replaceItem("minecraft:diamond_hoe", "minecraft:golden_hoe");

    const terralith_treasure = event.modifyLootTables(/^terralith:.*\/treasure.*$/);

    terralith_treasure.replaceItem("minecraft:diamond", "minecraft:gold_ingot");

    const trial_chambers = event.modifyLootTables(
        /^minecraft:chests\/trial_chambers.*$/,
        /^minecraft:pots\/trial_chambers.*$/,
    );

    trial_chambers.replaceItem("minecraft:diamond", "minecraft:gold_ingot");
    trial_chambers.replaceItem("minecraft:diamond_block", "minecraft:gold_block");
    trial_chambers.replaceItem("minecraft:diamond_pickaxe", "minecraft:golden_pickaxe");
    trial_chambers.replaceItem("minecraft:diamond_axe", "minecraft:golden_axe");
    trial_chambers.replaceItem("minecraft:diamond_chestplate", "minecraft:golden_chestplate");

    const ancient_city = event.modifyLootTables(/^minecraft:chests\/ancient_city/);

    ancient_city.replaceItem("minecraft:diamond_hoe", "minecraft:golden_hoe");
    ancient_city.replaceItem("minecraft:diamond_horse_armor", "minecraft:golden_horse_armor");

    const m = event.modifyLootTables(
        /^minecraft:chests\/(?!(bastion|nether|end)).*$/,
        /^minecraft:archaeology\/.*$/,
        /^terralith:.*$/,
        /^kaisyn:.*$/,
    );

    m.removeItem("minecraft:diamond");
    m.removeItem("minecraft:diamond_ore");
    m.removeItem("minecraft:deepslate_diamond_ore");

    m.removeItem("minecraft:diamond_pickaxe");
    m.removeItem("minecraft:diamond_shovel");
    m.removeItem("minecraft:diamond_axe");
    m.removeItem("minecraft:diamond_sword");

    m.removeItem("minecraft:diamond_helmet");
    m.removeItem("minecraft:diamond_chestplate");
    m.removeItem("minecraft:diamond_leggings");
    m.removeItem("minecraft:diamond_boots");

    m.removeItem("minecraft:diamond_horse_armor");
});
