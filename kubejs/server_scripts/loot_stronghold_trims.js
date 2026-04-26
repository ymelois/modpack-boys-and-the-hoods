// Stronghold corridors get an extra pool that rolls 3 of the 16 vanilla armor
// trim templates. Vanilla stronghold loot is otherwise intact.
const TRIM_TEMPLATES = [
    "minecraft:sentry_armor_trim_smithing_template",
    "minecraft:vex_armor_trim_smithing_template",
    "minecraft:wild_armor_trim_smithing_template",
    "minecraft:coast_armor_trim_smithing_template",
    "minecraft:dune_armor_trim_smithing_template",
    "minecraft:wayfinder_armor_trim_smithing_template",
    "minecraft:raiser_armor_trim_smithing_template",
    "minecraft:shaper_armor_trim_smithing_template",
    "minecraft:host_armor_trim_smithing_template",
    "minecraft:ward_armor_trim_smithing_template",
    "minecraft:silence_armor_trim_smithing_template",
    "minecraft:tide_armor_trim_smithing_template",
    "minecraft:snout_armor_trim_smithing_template",
    "minecraft:rib_armor_trim_smithing_template",
    "minecraft:eye_armor_trim_smithing_template",
    "minecraft:spire_armor_trim_smithing_template",
];

LootJS.modifiers((event) => {
    event.addTableModifier("minecraft:chests/stronghold_corridor").pool((pool) => {
        pool.rolls(3);
        TRIM_TEMPLATES.forEach((id) => pool.addEntry(LootEntry.of(id)));
    });
});
