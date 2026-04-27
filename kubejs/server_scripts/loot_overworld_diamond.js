// Diamond is moved to the Nether in this pack, so overworld chest loot must
// not reward diamond. Anchor on `chests/` so block-mining tables (e.g.
// blocks/diamond_ore) and entity tables are not touched. Any namespace is
// matched, covering Terralith and other modded chests too.
const OVERWORLD_CHESTS = /^[^:]+:chests\/(?!.*(bastion|nether|end)).+$/;

LootJS.modifiers((event) => {
    const m = event.addTableModifier(OVERWORLD_CHESTS);

    m.replaceLoot("minecraft:diamond", "minecraft:gold_ingot", true);
    m.replaceLoot("minecraft:diamond_ore", "minecraft:gold_ore", true);
    m.replaceLoot("minecraft:deepslate_diamond_ore", "minecraft:deepslate_gold_ore", true);
    m.replaceLoot("minecraft:diamond_block", "minecraft:gold_block", true);

    m.replaceLoot("minecraft:diamond_pickaxe", "minecraft:golden_pickaxe", true);
    m.replaceLoot("minecraft:diamond_shovel", "minecraft:golden_shovel", true);
    m.replaceLoot("minecraft:diamond_axe", "minecraft:golden_axe", true);
    m.replaceLoot("minecraft:diamond_sword", "minecraft:golden_sword", true);
    m.replaceLoot("minecraft:diamond_hoe", "minecraft:golden_hoe", true);
    m.replaceLoot("minecraft:diamond_helmet", "minecraft:golden_helmet", true);
    m.replaceLoot("minecraft:diamond_chestplate", "minecraft:golden_chestplate", true);
    m.replaceLoot("minecraft:diamond_leggings", "minecraft:golden_leggings", true);
    m.replaceLoot("minecraft:diamond_boots", "minecraft:golden_boots", true);
    m.replaceLoot("minecraft:diamond_horse_armor", "minecraft:golden_horse_armor", true);
});
