/**
 * @typedef {{qLevel: String, wLevel: String, eLevel: String, rLevel: String}} ChampionLevelData.AbilityKeys
 */

/**
 * @description Represents the levels of a champion's abilities.
 * @constructor
 */
var ChampionLevelData = function() {
    /**
     * Enum for the ability keys.
     * @type {ChampionLevelData.AbilityKeys}
     * @public
     * @readonly
     */
    this.AbilityKeys = {qLevel: "q", wLevel: "w", eLevel: "e", rLevel: "r"};

    /**
     * The level of the first ability. (Q)
     * @type {int}
     * @private
     */
    this.qLevel = 0;
    /**
     * The level of the second ability. (W)
     * @type {int}
     * @private
     */
    this.wLevel = 0;
    /**
     * The level of the third ability. (E)
     * @type {int}
     * @private
     */
    this.eLevel = 0;
    /**
     * The level of the fourth ability. (R) (Ultimate)
     * @type {int}
     * @private
     */
    this.rLevel = 0;

    /**
     * The max level of the first ability. (Q)
     * @type {int}
     * @private
     */
    this.qMaxLevel = 5;
    /**
     * The max level of the second ability. (W)
     * @type {int}
     * @private
     */
    this.wMaxLevel = 5;
    /**
     * The max level of the third ability. (E)
     * @type {int}
     * @private
     */
    this.eMaxLevel = 5;
    /**
     * The max level of the fourth ability. (R) (Ultimate)
     * @type {int}
     * @private
     */
    this.rMaxLevel = 3;
    
    /**
     * The level of all abilities in this object together.
     * @private
     * @type {int}
     * @private
     */
    this.totalLevel = 0;

    /**
     * The last leveled ability.
     * @type {ChampionLevelData.AbilityKeys}
     */
    this.lastLeveledAbility = null;

}

/**
 * @description Calculates the total level and assigns it to the calling object's totalLevel field.
 * @private
 * @method
 */
ChampionLevelData.prototype.SetTotalLevel = function() {
    this.totalLevel = this.qLevel + this.wLevel + this.eLevel + this.rLevel;
}

/**
 * @description Checks whether or not the targeted ability is eligible for a level up.
 * @param {ChampionLevelData.AbilityKeys} abilityKey The ability to levelUp (identified by this key).
 * @returns {boolean} Whether the ability is eligible for a levelup.
 * @private
 * @method
 */
ChampionLevelData.prototype.CanLevel = function(abilityKey) {

    this.SetTotalLevel();


    if (abilityKey == this.AbilityKeys.rLevel && this.totalLevel == 0) { return false; }

    if (this.totalLevel == 0) { return true; } else if (this.totalLevel >= 18) { return false; }

    //if (abilityKey == this.AbilityKeys.rLevel) { return false; }
    

    var returnValue = false;

    switch(abilityKey) {
        case "q":
            returnValue = (!((this.qLevel/this.totalLevel) >= 0.5) && !(this.qLevel >= this.qMaxLevel)) ? true : false;
        break;
        case "w":
            returnValue = (!((this.wLevel/this.totalLevel) >= 0.5) && !(this.wLevel >= this.wMaxLevel)) ? true : false;
        break;
        case "e":
            returnValue = (!((this.eLevel/this.totalLevel) >= 0.5) && !(this.eLevel >= this.eMaxLevel)) ? true : false;
        break;
        case "r":
            if ( (this.totalLevel/(1+(this.rLevel+1)*5)) >= 1 && this.rLevel < this.rMaxLevel) {
                returnValue = true;
            } else {
                returnValue = false;
            }
        
        //returnValue = (!((this.rLevel/(1+(this.rLevel+1)*5)) >= 1) && !(this.rLevel >= this.rMaxLevel)) ? true : false; // Something is wrong here.
        break;
        default:
            //Throw error.
        break;
    }

    return returnValue;
    
}

/**
 * @description Attempts to increment the value of the target ability.
 * @param {ChampionLevelData.AbilityKeys} abilityKey The ability to levelUp (identified by this key).
 * @returns {boolean} Whether the ability has been leveled up.
 * @public
 * @method
 */
ChampionLevelData.prototype.LevelUp = function(abilityKey) {

    if(this.CanLevel(abilityKey)) {
        switch(abilityKey) {
            case "q":
                this.qLevel++;
            break;
            case "w":
                this.wLevel++;
            break;
            case "e":
                this.eLevel++;
            break;
            case "r":
                this.rLevel++;
            break;
            default:
                //Throw error.
            break;
        }
    } else {
        return false;
    }
        
    this.lastLeveledAbility = abilityKey;

    return true;

}

/**
 * 
 */

ChampionLevelData.prototype.GetLevel = function(abilityKey) {
    switch(abilityKey) {
        case "q":
            return this.qLevel;
        break;
        case "w":
            return this.wLevel;
        break;
        case "e":
            return this.eLevel;
        break;
        case "r":
            return this.rLevel;
        break;
    }
}