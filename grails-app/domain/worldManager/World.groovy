package worldManager

class World {

    Boolean open
    String title

    static hasMany = [gameMasters:GameMaster, campaigns:Campaign]
    static belongsTo = [GameMaster]

    static constraints = {
    }
}
