ItemEvents.modification((event) => {
    const tools = {
        pickaxe: { baseAttackDamage: 3.0, baseAttackSpeed: -2.8 },
        shovel: { baseAttackDamage: 3.5, baseAttackSpeed: -3.0 },
        axe: { baseAttackDamage: 9.0, baseAttackSpeed: -3.1 },
        hoe: { baseAttackDamage: 0.0, baseAttackSpeed: -1.0 },
        sword: { baseAttackDamage: 6.0, baseAttackSpeed: -2.4 },
    };

    Object.entries(tools).forEach(([piece, config]) => {
        event.modify(`minecraft:golden_${piece}`, (item) => {
            item.setBaseAttackDamage(config.baseAttackDamage);
            item.setBaseAttackSpeed(config.baseAttackSpeed);
            item.setTier((tier) => {
                tier.speed = 8.0;
                tier.uses = 510;
                tier.incorrectBlocksForDropsTag = "minecraft:incorrect_for_diamond_tool";
            });
        });
    });

    const armor = {
        helmet: { durability: 245, slot: "head", armor: 2.0 },
        chestplate: { durability: 350, slot: "chest", armor: 7.0 },
        leggings: { durability: 335, slot: "legs", armor: 6.0 },
        boots: { durability: 275, slot: "feet", armor: 2.0 },
    };

    Object.entries(armor).forEach(([piece, config]) => {
        event.modify(`minecraft:golden_${piece}`, (item) => {
            item.setMaxDamage(config.durability);
            item.set("minecraft:attribute_modifiers", {
                modifiers: [
                    {
                        attribute: "minecraft:generic.armor",
                        modifier: {
                            id: `kubejs:gold_${piece}_armor`,
                            amount: config.armor,
                            operation: "add_value",
                        },
                        slot: config.slot,
                    },
                ],
                showInTooltip: true,
            });
        });
    });
});
