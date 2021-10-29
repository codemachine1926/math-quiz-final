function adduser() {

    name1 = document.getElementById("player1_name_input").value;
    name2 = document.getElementById("player2_name_input").value;
    localStorage.setItem("Name1", name1);
    localStorage.setItem("Name2", name2);
    window.location = "2ndpage.html";
}