package worldManager

class Player extends Role {

    static hasMany = [campaigns:Campaign]

    static constraints = {
    }
}
