const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const member = members.find(
    m => m.id === id
);

if(member){

document.getElementById("profile").innerHTML = `

<div class="profile-card">

    <img
    src="${member.image}"
    class="profile-image">

    <h1>${member.name}</h1>

    <p class="role">
        ${member.role}
    </p>

    <p>
        Team : ${member.team}
    </p>

    <a href="${member.facebook}">
        <button>Facebook</button>
    </a>

    <a href="${member.tiktok}">
        <button>TikTok</button>
    </a>

   <a href="${member.youtube}">
    <button>YouTube</button>
    </a>

    <a href="javascript:history.back()">
    <button>⬅ Back</button>
    </a>

</div>

`;

}
else{

document.getElementById("profile").innerHTML = `
<h1>Member Not Found</h1>
`;

}