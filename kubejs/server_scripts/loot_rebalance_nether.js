LootJS.lootTables((event) => {
    const m = event.modifyLootTables(/^minecraft:chests\/(bastion|nether).*$/);

    m.removeItem("minecraft:netherite_upgrade_smithing_template");

    m.replaceItem("minecraft:netherite_ingot", "minecraft:deepslate_diamond_ore");
    m.replaceItem("minecraft:netherite_scrap", "minecraft:diamond");
    m.replaceItem("minecraft:ancient_debris", "minecraft:diamond_ore");
});
