ServerEvents.recipes((event) => {
    event.replaceOutput({}, "minecraft:copper_nugget", "create:copper_nugget");
    event.replaceInput({}, "minecraft:copper_nugget", "create:copper_nugget");
});
