onEvent("entity.check_spawn", event => {
    if (event.entity.isMonster() && event.level.getBlock(event.entity.x, event.entity.y, event.entity.z).blockLight>0) event.cancel()
})