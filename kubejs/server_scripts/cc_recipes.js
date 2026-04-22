function upgrade(base) {
    return {
        type: "computercraft:transform_shaped",
        category: "redstone",
        function: [
            {
                type: "computercraft:copy_components",
                from: { item: `computercraft:${base}_normal` },
            },
        ],
        key: {
            A: { item: `computercraft:${base}_normal` },
            B: { item: "create:precision_mechanism" },
        },
        pattern: [" B ", " A ", "   "],
        result: { id: `computercraft:${base}_advanced` },
    };
}

function pocketComputerConversion(variant) {
    return {
        type: "computercraft:transform_shaped",
        category: "redstone",
        function: [
            {
                type: "computercraft:copy_components",
                from: { item: `computercraft:computer_${variant}` },
            },
        ],
        key: {
            A: { item: `computercraft:computer_${variant}` },
            B: [{ item: "simulated:iron_handle" }, { tag: "simulated:handle_variants" }],
        },
        pattern: [" B ", " A ", "   "],
        result: { id: `computercraft:pocket_computer_${variant}` },
    };
}

function turtleConversion(variant) {
    return {
        type: "computercraft:transform_shaped",
        category: "redstone",
        function: [
            {
                type: "computercraft:copy_components",
                from: { item: `computercraft:computer_${variant}` },
            },
        ],
        key: {
            A: { item: `computercraft:computer_${variant}` },
            B: { item: "simulated:engine_assembly" },
        },
        pattern: [" B ", " A ", "   "],
        result: { id: `computercraft:turtle_${variant}` },
    };
}

ServerEvents.recipes((event) => {
    event.remove({ id: "computercraft:turtle_advanced_overlays/rainbow_flag" });
    event.remove({ id: "computercraft:turtle_advanced_overlays/trans_flag" });
    event.remove({ id: "computercraft:turtle_normal_overlays/rainbow_flag" });
    event.remove({ id: "computercraft:turtle_normal_overlays/trans_flag" });

    event.remove({ id: "computercraft:skull_cloudy" });
    event.remove({ id: "computercraft:skull_dan200" });

    event.remove({ id: "computercraft:computer_command" });

    event.remove({ id: "computercraft:computer_normal" });
    event.remove({ id: "computercraft:pocket_computer_normal" });
    event.remove({ id: "computercraft:turtle_normal" });

    event.remove({ id: "computercraft:computer_advanced" });
    event.remove({ id: "computercraft:computer_advanced_upgrade" });
    event.remove({ id: "computercraft:pocket_computer_advanced" });
    event.remove({ id: "computercraft:pocket_computer_advanced_upgrade" });
    event.remove({ id: "computercraft:turtle_advanced" });
    event.remove({ id: "computercraft:turtle_advanced_upgrade" });

    event.remove({ id: "computercraft:wireless_modem_normal" });
    event.remove({ id: "computercraft:wireless_modem_advanced" });

    event.remove({ id: "computercraft:cable" });
    event.remove({ id: "computercraft:wired_modem" });

    event.remove({ id: "computercraft:redstone_relay" });

    event.remove({ id: "computercraft:monitor_normal" });
    event.remove({ id: "computercraft:monitor_advanced" });

    event.remove({ id: "computercraft:speaker" });
    event.remove({ id: "computercraft:printer" });
    event.remove({ id: "computercraft:disk_drive" });

    // new recipe for computer_normal
    event.shaped(Item.of("computercraft:computer_normal", 1), ["AAA", "ABA", "ACA"], {
        A: "create:andesite_alloy",
        B: "create:electron_tube",
        C: "#c:glass_panes",
    });

    // computer_normal -> computer_advanced
    event.custom(upgrade("computer"));

    // pocket_computer_normal -> pocket_computer_advanced
    event.custom(upgrade("pocket_computer"));

    // turtle_normal -> turtle_advanced
    event.custom(upgrade("turtle"));

    // computer_normal -> pocket_computer_normal
    event.custom(pocketComputerConversion("normal"));

    // computer_advanced -> pocket_computer_advanced
    event.custom(pocketComputerConversion("advanced"));

    // computer_normal -> turtle_normal
    event.custom(turtleConversion("normal"));

    // computer_advanced -> turtle_advanced
    event.custom(turtleConversion("advanced"));

    // new recipe for cable
    event.shaped(Item.of("computercraft:cable", 1), [" A ", "ABA", " A "], {
        A: "create:andesite_alloy",
        B: "minecraft:redstone",
    });

    // new recipe for wired_modem_full
    event.shaped(Item.of("computercraft:wired_modem_full", 1), ["AAA", "ABA", "AAA"], {
        A: "create:andesite_alloy",
        B: "minecraft:redstone",
    });

    // new recipe for redstone_relay
    event.shaped(Item.of("computercraft:redstone_relay", 1), ["ABA", "BCB", "ABA"], {
        A: "create:andesite_alloy",
        B: "minecraft:redstone",
        C: ["computercraft:wired_modem", "computercraft:wired_modem_full"],
    });

    // rew recipe for monitor_normal
    event.custom({
        type: "create:deploying",
        ingredients: [{ item: "create:andesite_casing" }, { item: "create:display_board" }],
        results: [{ id: "computercraft:monitor_normal" }],
    });

    // monitor_normal -> monitor_advanced
    event.custom({
        type: "create:deploying",
        ingredients: [{ item: "computercraft:monitor_normal" }, { item: "create:brass_ingot" }],
        results: [{ id: "computercraft:monitor_advanced" }],
    });

    // new recipe for speaker
    event.custom({
        type: "create:deploying",
        ingredients: [{ item: "create:andesite_casing" }, { item: "minecraft:note_block" }],
        results: [{ id: "computercraft:speaker" }],
    });

    // new recipe for printer
    event.custom({
        type: "create:deploying",
        ingredients: [{ item: "create:andesite_casing" }, { item: "computercraft:printed_pages" }],
        results: [{ id: "computercraft:printer" }],
    });

    // new recipe for disk_drive
    event.custom({
        type: "create:deploying",
        ingredients: [{ item: "create:andesite_casing" }, { tag: "computercraft:disks" }],
        results: [{ id: "computercraft:disk_drive" }],
    });

    // new recipe for wireless_modem_normal
    event.shaped(Item.of("computercraft:wireless_modem_normal", 1), [" A ", " B ", " C "], {
        A: "create:transmitter",
        B: "create:andesite_alloy",
        C: "minecraft:ender_pearl",
    });

    // new recipe for wireless_modem_advanced
    event.shaped(Item.of("computercraft:wireless_modem_advanced", 1), [" A ", " B ", " C "], {
        A: "computercraft:wireless_modem_normal",
        B: "create:brass_ingot",
        C: "minecraft:ender_eye",
    });
});
