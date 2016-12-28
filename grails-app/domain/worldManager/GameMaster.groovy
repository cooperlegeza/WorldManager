package worldManager

class GameMaster extends Role {

    static hasMany = [campaigns:Campaign, worlds:World]

    static constraints = {
    }
}
