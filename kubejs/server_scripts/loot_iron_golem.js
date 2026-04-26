// Iron golems drop nuggets instead of ingots, since iron is the practical
// mid-tier metal in this pack (gold is buffed to diamond tier). Reduces the
// payoff of iron golem farms by 9x.
LootJS.modifiers((event) => {
    event
        .addTableModifier("minecraft:entities/iron_golem")
        .replaceLoot("minecraft:iron_ingot", "minecraft:iron_nugget", true);
});
