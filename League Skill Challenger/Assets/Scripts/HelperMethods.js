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

function SwitchElementClass(element, className) {

    var isClassInElement = false;

    for(var i=0; i < element.classList.length; i++) {
        if (element.classList[i] == className) {
            isClassInElement = true;
            break;
        }
    }

    if (isClassInElement) {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }
}