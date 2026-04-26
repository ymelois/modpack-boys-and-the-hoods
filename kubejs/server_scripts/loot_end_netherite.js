// End city treasures get a small chance at netherite gear, sitting at roughly
// half the rate of the vanilla diamond loot in the same chest. Vanilla diamond
// drops are untouched.
LootJS.modifiers((event) => {
    event.addTableModifier("minecraft:chests/end_city_treasure").pool((pool) => {
        pool.rolls(1);
        pool.addEntry(LootEntry.of("minecraft:netherite_ingot").setCount([1, 2]).withWeight(2));
        pool.addEntry(LootEntry.of("minecraft:netherite_sword").withWeight(1));
        pool.addEntry(LootEntry.of("minecraft:netherite_axe").withWeight(1));
        pool.addEntry(LootEntry.of("minecraft:netherite_pickaxe").withWeight(1));
        pool.addEntry(LootEntry.of("minecraft:netherite_shovel").withWeight(1));
        pool.addEntry(LootEntry.of("minecraft:netherite_helmet").withWeight(1));
        pool.addEntry(LootEntry.of("minecraft:netherite_chestplate").withWeight(1));
        pool.addEntry(LootEntry.of("minecraft:netherite_leggings").withWeight(1));
        pool.addEntry(LootEntry.of("minecraft:netherite_boots").withWeight(1));
        pool.addEntry(LootEntry.empty().withWeight(20));
    });
});
