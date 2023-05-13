let name='';
let selectId=0;
let modalType = '';

let countryList =[
    {id: 1, name:'Uzbekistan'},
    {id: 2, name:'amerika'},
    {id: 3, name:'rossiya'},
    {id: 4, name:'qashqadaryo'}
];
function chizish(davlatlar) {
    let list = [];

    davlatlar.map((item, i) => {
        list.push(
            `<tr>
<td>${item.id}</td>
<td>${item.name}</td>
<td><button class="btn-warning"onclick="edit(${item.id})">Edit</button></td>
<td><button class="btn-danger"onclick="openDeleteModal(${item.id})">Delete</button></td>
</tr>`
        )
    });
    list = list.join('')
    document.getElementById("tbody").innerHTML = list;
}
    chizish(countryList)
function showModal(){
    modalType = 'create';
    document.getElementById("countryModal").style.display='block';
    document.getElementById("modalHeader").innerText='add country';
}
function modalClose(){
    document.getElementById("countryModal").style.display='none';
}
function saveCountry(){
    let formName = document.getElementById("countryName").value;
    let lastId = countryList.length > 0 ? countryList[countryList.length-1].id : '';
    let obj = ' ';
    if (modalType === 'cr' +
        'eate') {
        obj = {id: lastId + 1, name: formName}
        countryList.push(obj);
    }else {
        let index = 0;
        countryList.map((item,i)=>item.id === selectId ? index=i :0);
        obj = {id: selectId, name: formName};
        countryList[index] = obj;
    }

    modalClose();
    document.getElementById("countryName").value = '';
    chizish(countryList);
}
function edit(id){
  modalType = 'update'
  countryList.map(item=>item.id===id ? name=item.name:'');
  document.getElementById("modalHeader").innerText = "Edit Country"
  document.getElementById("countryModal").style.display = 'block'
  document.getElementById("countryName").value = name;
  selectId=id;
}

// function deleteCountry(id){
//     const newList = countryList.filter(item =>item.id !==id)
//     setList(newList)
// }
function openDeleteModal(id){
    selectId=id;
    document.getElementById("deleteModal").style.display = "block"

    countryList.map(item =>item.id===id ? name=item.name:'');
    document.getElementById("deleteModalHeader").innerText=name;
}
function deleteModalClose(){
    document.getElementById("deleteModal").style.display='none';
}
function deleteCountry(){
    let index = 0;
    countryList.map((item,i)=>item.id === selectId ? index=i :0);
    deleteModalClose();
    countryList.splice(index,1);
    chizish(countryList)
}