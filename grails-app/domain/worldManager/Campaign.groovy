package worldManager

class Campaign {

    String title;
    String description;

    static hasMany = [gameMasters:GameMaster, players:Player]
    static belongsTo = [GameMaster, World, Player]


    static constraints = {
    }
}
