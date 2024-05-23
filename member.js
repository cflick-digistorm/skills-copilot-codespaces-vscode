function skillsMember() {
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].value;
    var memberText = member.options[member.selectedIndex].text;
    var skill = document.getElementById("skill");
    var skillValue = skill.options[skill.selectedIndex].value;
    var skillText = skill.options[skill.selectedIndex].text;
    var skillList = document.getElementById("skill-list");
    var skillListText = skillList.innerText;
    var skillListArray = skillListText.split("\n");
    var skillListArrayLength = skillListArray.length;
    var skillListArrayNew = [];
    var skillListArrayNewLength = skillListArrayNew.length;