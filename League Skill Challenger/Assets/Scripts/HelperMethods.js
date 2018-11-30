function GetObjectKey(index) {

    var outputKey = "";
    var counter = 0;

    for(var key in championLevelData.AbilityKeys) {
        if (counter == index) {
            outputKey = key;
            break;
        }
        counter++;
    }
    
    return outputKey;
}