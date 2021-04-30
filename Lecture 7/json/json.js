var tableData = [
    {
        reg_no: "0001",
        first_name: "Adeleke",
        last_name: "Ayinde",
    },
    { reg_no: "0002", first_name: "Igayemi", last_name: "Olayinka" },
    { reg_no: "0003", first_name: "Glory", last_name: "Chikwendu" },
    { reg_no: "0004", first_name: "Olusinbo", last_name: "Aima" },
    { reg_no: "0005", first_name: "Favour", last_name: "Ante" },
    { reg_no: "0006", first_name: "Samuel", last_name: "Ogundaro" },
    { reg_no: "0007", first_name: "Daniel", last_name: "Shoyombo" },
    { reg_no: "0008", first_name: "Sylvester", last_name: "Chikwendu" },
    { reg_no: "0009", first_name: "Enemuwe", last_name: "Funlola" },
    { reg_no: "0010", first_name: "George", last_name: "Isabella" },
    { reg_no: "0011", first_name: "George", last_name: "Eleasha" },
    { reg_no: "0012", first_name: "George", last_name: "Jesulade" },
];


window.onload = function () {
    addTableData();
    initiliazeRmvBtn();
};

function addTableData() {

    document.getElementById("table_data").innerHTML = tableData
        .map((data, i) => {
            return `<tr index=${i}>
          <td>${i + 1}</td>
          <td>${data.first_name}</td>
          <td>${data.last_name}</td>
          <td><button class="btn btn-danger btn-small remove" id="remove" data-id=${
                data.reg_no
                }>
      x
    </button></td>
        </tr>`;
        })
        .join("");
}

document.getElementById("show_form").onclick = function () {
    document.getElementById("form").classList.remove("display--none");
    document.getElementById("table").classList.add("display--none");
    document.getElementById("show_form").classList.add("display--none");

    document.getElementById("first_name").value = "";
    document.getElementById("last_name").value = "";
};

document.getElementById("add").onclick = add;

function add() {

    let first_name = document.getElementById("first_name").value;
    let last_name = document.getElementById("last_name").value;

    console.log(first_name, last_name);
    document.getElementById("table").classList.remove("display--none");
    document.getElementById("show_form").classList.remove("display--none");
    document.getElementById("form").classList.add("display--none");

    tableData = [
        ...tableData,
        {
            first_name: first_name,
            last_name: last_name,
            reg_no: first_name + "001",
        },
    ];

    console.log("dataTable", tableData);
    addTableData();

    initiliazeRmvBtn();
}

function remove() {
    let reg_no = event.target.getAttribute("data-id");
    tableData = tableData.filter((td, i) => td.reg_no != reg_no);
    addTableData();
    let rmvBtns = document.getElementsByClassName("remove");

    initiliazeRmvBtn();
}

function initiliazeRmvBtn() {
    let rmvBtns = document.getElementsByClassName("remove");

    console.log(rmvBtns);
    for (var i = 0; i < rmvBtns.length; i++) {
        rmvBtns[i].onclick = remove;
    }
}
