ItemEvents.modification((event) => {
    event.modify("minecraft:golden_pickaxe", (item) => {
        item.setBaseAttackDamage(3.0);
        item.setBaseAttackSpeed(-2.8);
        item.setTier((tier) => {
            tier.speed = 8.0;
            tier.uses = 510;
            tier.incorrectBlocksForDropsTag = "minecraft:incorrect_for_diamond_tool";
        });
    });

    event.modify("minecraft:golden_shovel", (item) => {
        item.setBaseAttackDamage(3.5);
        item.setBaseAttackSpeed(-3.0);
        item.setTier((tier) => {
            tier.speed = 8.0;
            tier.uses = 510;
            tier.incorrectBlocksForDropsTag = "minecraft:incorrect_for_diamond_tool";
        });
    });

    event.modify("minecraft:golden_axe", (item) => {
        item.setBaseAttackDamage(9.0);
        item.setBaseAttackSpeed(-3.1);
        item.setTier((tier) => {
            tier.speed = 8.0;
            tier.uses = 510;
            tier.incorrectBlocksForDropsTag = "minecraft:incorrect_for_diamond_tool";
        });
    });

    event.modify("minecraft:golden_hoe", (item) => {
        item.setBaseAttackDamage(0.0);
        item.setBaseAttackSpeed(-1.0);
        item.setTier((tier) => {
            tier.speed = 8.0;
            tier.uses = 510;
            tier.incorrectBlocksForDropsTag = "minecraft:incorrect_for_diamond_tool";
        });
    });

    event.modify("minecraft:golden_sword", (item) => {
        item.setBaseAttackDamage(6.0);
        item.setBaseAttackSpeed(-2.4);
        item.setTier((tier) => {
            tier.speed = 8.0;
            tier.uses = 510;
        });
    });
});
