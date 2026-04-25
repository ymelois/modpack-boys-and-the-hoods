ServerEvents.recipes((event) => {
    event.remove({ id: "minersdelight:copper_carrot" });

    event.shaped(
        Item.of("minersdelight:copper_carrot", 1),
        ["XXX", "XYX", "XXX"],
        {
            X: "#c:nuggets/copper",
            Y: "minersdelight:cave_carrot",
        }
    );
});
