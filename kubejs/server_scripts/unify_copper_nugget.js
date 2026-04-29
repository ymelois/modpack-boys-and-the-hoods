ServerEvents.recipes((event) => {
    event.replaceOutput({}, "#c:nuggets/copper", "create:copper_nugget");
    event.replaceInput({}, "#c:nuggets/copper", "create:copper_nugget");
});
