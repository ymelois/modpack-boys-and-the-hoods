const GameRules = Java.loadClass("net.minecraft.world.level.GameRules");

ServerEvents.loaded((event) => {
    const server = event.server;
    const rules = server.overworld().getGameRules();

    rules.getRule(GameRules.RULE_DOFIRETICK).set(false, server);
    rules.getRule(GameRules.RULE_DOINSOMNIA).set(false, server);
    rules.getRule(GameRules.RULE_PLAYERS_SLEEPING_PERCENTAGE).set(0, server);
});
