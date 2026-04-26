// Netherite is now end-tier in this pack, so nether structures should not
// drop netherite items. Replace netherite gear with diamond equivalents and
// netherite raw materials with diamond raw items across every loot table
// whose path mentions bastion or nether. The smithing template (used to
// upgrade diamond -> netherite) stays out of nether loot.
const NETHER = /^(?=.*(bastion|nether)).+$/;

LootJS.modifiers((event) => {
    const m = event.addTableModifier(NETHER);

    m.replaceLoot("minecraft:netherite_ingot", "minecraft:diamond", true);
    m.replaceLoot("minecraft:netherite_scrap", "minecraft:diamond", true);
    m.replaceLoot("minecraft:ancient_debris", "minecraft:diamond", true);

    m.replaceLoot("minecraft:netherite_pickaxe", "minecraft:diamond_pickaxe", true);
    m.replaceLoot("minecraft:netherite_shovel", "minecraft:diamond_shovel", true);
    m.replaceLoot("minecraft:netherite_axe", "minecraft:diamond_axe", true);
    m.replaceLoot("minecraft:netherite_sword", "minecraft:diamond_sword", true);
    m.replaceLoot("minecraft:netherite_hoe", "minecraft:diamond_hoe", true);
    m.replaceLoot("minecraft:netherite_helmet", "minecraft:diamond_helmet", true);
    m.replaceLoot("minecraft:netherite_chestplate", "minecraft:diamond_chestplate", true);
    m.replaceLoot("minecraft:netherite_leggings", "minecraft:diamond_leggings", true);
    m.replaceLoot("minecraft:netherite_boots", "minecraft:diamond_boots", true);

    m.removeLoot("minecraft:netherite_upgrade_smithing_template");
});
