var AbilityCard = function(parentElement) {

    this.parentElement = parentElement;
    
    this.wrapper = document.createElement('div'); this.parentElement.appendChild(this.wrapper); this.wrapper.classList.add("abilityCard");

    this.championLevel = document.createElement('h3'); this.wrapper.appendChild(this.championLevel);
    this.abilityImage = document.createElement('img'); this.wrapper.appendChild(this.abilityImage);
    this.abilityName = document.createElement('h3'); this.wrapper.appendChild(this.abilityName);
    this.abilityLevel = document.createElement('h3'); this.wrapper.appendChild(this.abilityLevel);

}

AbilityCard.prototype.SetAbilityInformation = function (championLevel, abilityImageSrc, abilityName, abilityLevel) {
    this.championLevel.innerHTML = "Level - " + championLevel;
    this.abilityImage.src = abilityImageSrc;
    this.abilityName.innerHTML = abilityName;
    this.abilityLevel.innerHTML = "[Level: " + abilityLevel + "]";
}