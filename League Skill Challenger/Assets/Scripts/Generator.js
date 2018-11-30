/*
 *
 * 
 * Use http://ddragonexplorer.com/cdn/ for finding the path to a data file.
 * Then use https://ddragon.leagueoflegends.com/cdn/ with the path of http://ddragonexplorer.com/cdn/ to access the file.
 * 
*/

var outputElement = document.getElementById("output");

var chosenChampionId = "Aatrox";

var championData;
var championLevelData = new ChampionLevelData();
var champions = [];
var championDataRequest = new XMLHttpRequest();

var abilityCards = new Array(18);

var generateButtonAvailable = false; // Gets set to true after data has been loaded.

championDataRequest.onreadystatechange = function() {

    if(this.readyState == 4 && this.status == 200) {
        // this.responseText;
        championData = JSON.parse(this.responseText);
        for (x in championData.data) {
          champions.push(x);
        }
        outputElement.innerHTML = "<img class='championTile' src='http://ddragonexplorer.com/cdn/img/champion/tiles/" + championData.data[chosenChampionId].id + "_0.jpg'/>";
        champions.forEach(function(championId, index) {
          var championOptionDiv = document.createElement('div');
          championOptionDiv.classList.add("championOption");
          championOptionDiv.setAttribute("name", championId);
          championOptionDiv.setAttribute("onclick", 'chosenChampionId = "'+championId+'"; GenerateChallenge(document.getElementById("output"));');
          document.getElementById("ChampionSelectDropdown").appendChild(championOptionDiv);
          championOptionDiv.innerHTML = championId;
        });
        generateButtonAvailable = true;
        // championData.data[champions[0]] - Used this for loading in champions by key.
    }

}

championDataRequest.open('GET', 'https://ddragon.leagueoflegends.com/cdn/8.22.1/data/en_US/championFull.json', true);
championDataRequest.send();


function GenerateChallenge(parentElement) {

  if (!generateButtonAvailable) { return; }
  
  outputElement.innerHTML = "<img class='championTile' src='http://ddragonexplorer.com/cdn/img/champion/tiles/" + championData.data[chosenChampionId].id + "_0.jpg'/>";

  ClearAbilityCards(parentElement);
  ResetChallenge();
  // Set champion tiles
  for(var i=0; i < document.getElementsByClassName("championTile").length; i++) {
    document.getElementsByClassName("championTile").src = 'http://ddragonexplorer.com/cdn/img/champion/tiles/' + championData.data[chosenChampionId].id + '_0.jpg';
  }
  // Set ability cards
  for(var i=0; i < abilityCards.length; i++) {
    
    var abilityNumber = null;
    var leveledUp = false;
    while(!leveledUp) {
      abilityNumber = Math.round((Math.random()*3));
      leveledUp = championLevelData.LevelUp(championLevelData.AbilityKeys[GetObjectKey(abilityNumber)]);
    }

    abilityCards[i] = new AbilityCard(parentElement);
    abilityCards[i].SetAbilityInformation(
      (i + 1),
      "https://ddragon.leagueoflegends.com/cdn/8.22.1/img/spell/" + championData.data[chosenChampionId].spells[abilityNumber].image.full,
      championData.data[chosenChampionId].spells[abilityNumber].name,
      championLevelData.GetLevel(championLevelData.AbilityKeys[GetObjectKey(abilityNumber)])
    );
  
  }
}

function ClearAbilityCards(parentElement) {
  var abilityCardsLength = document.getElementsByClassName("abilityCard").length;
  for(var i = abilityCardsLength; i > 0; i--) {
    document.getElementsByClassName("abilityCard")[i-1].remove();
  }
  abilityCards = new Array(18);
}

function ResetChallenge() {
  championLevelData = new ChampionLevelData();
}