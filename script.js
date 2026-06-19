function searchMember(){

    let input =
    document.getElementById("search")
    .value.toLowerCase();

    let members =
    document.getElementsByClassName("member");

    for(let i=0;i<members.length;i++){

        let name =
        members[i]
        .querySelector("h3")
        .innerText
        .toLowerCase();

        if(name.includes(input)){
            members[i].style.display="";
        }
        else{
            members[i].style.display="none";
        }

    }

}
