// Netherite is end-tier in this pack. Nether chests must not drop netherite,
// but they get a small chance at diamond items, capped well below the vanilla
// gold drops. One uniform extra pool is added to all bastion and nether tables.
const NETHER = /^(?=.*(bastion|nether)).+$/;

LootJS.modifiers((event) => {
    const m = event.addTableModifier(NETHER);

    m.removeLoot("minecraft:netherite_ingot");
    m.removeLoot("minecraft:netherite_scrap");
    m.removeLoot("minecraft:ancient_debris");
    m.removeLoot("minecraft:netherite_pickaxe");
    m.removeLoot("minecraft:netherite_shovel");
    m.removeLoot("minecraft:netherite_axe");
    m.removeLoot("minecraft:netherite_sword");
    m.removeLoot("minecraft:netherite_hoe");
    m.removeLoot("minecraft:netherite_helmet");
    m.removeLoot("minecraft:netherite_chestplate");
    m.removeLoot("minecraft:netherite_leggings");
    m.removeLoot("minecraft:netherite_boots");
    m.removeLoot("minecraft:netherite_upgrade_smithing_template");

    m.pool((pool) => {
        pool.rolls(1);
        pool.addEntry(LootEntry.of("minecraft:diamond").setCount([1, 2]).withWeight(4));
        pool.addEntry(LootEntry.of("minecraft:diamond_sword").withWeight(1));
        pool.addEntry(LootEntry.of("minecraft:diamond_axe").withWeight(1));
        pool.addEntry(LootEntry.of("minecraft:diamond_pickaxe").withWeight(1));
        pool.addEntry(LootEntry.of("minecraft:diamond_helmet").withWeight(1));
        pool.addEntry(LootEntry.of("minecraft:diamond_chestplate").withWeight(1));
        pool.addEntry(LootEntry.of("minecraft:diamond_leggings").withWeight(1));
        pool.addEntry(LootEntry.of("minecraft:diamond_boots").withWeight(1));
        pool.addEntry(LootEntry.empty().withWeight(20));
    });
});
