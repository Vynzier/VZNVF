console.log("stats loaded");

document.getElementById("memberCount").innerText =
members.length;

const teams = [...new Set(
    members.map(member => member.team)
)];

document.getElementById("teamCount").innerText =
teams.length;

document.getElementById("partnerCount").innerText =
2;