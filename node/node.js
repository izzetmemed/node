const xhr=new XMLHttpRequest();

xhr.onreadystatechange=function(){
    if(this.readyState==4){
        let res=this.responseText;
       let data=JSON.parse(res);
       let tbl=document.getElementById("table");
       let body=tbl.getElementsByTagName("tbody")[0];
        Array.from(data).forEach(row=>{
            let tr=createRow(row);
            body.appendChild(tr);
        });
        
    }
}
xhr.open("GET","https://jsonplaceholder.typicode.com/posts");
xhr.send();

const createRow=(data)=>{
    let tr=document.createElement("tr");
    let tdId=document.createElement("td");
    let tdTitle=document.createElement("td");
    let tdBody=document.createElement("td");
    tdId.classList="text-center";
    tdTitle.classList="text-center";
    tdBody.classList="text-center";

    tdId.textContent=data.id;
    tdTitle.textContent=data.title;
    tdBody.textContent=data.body;

    tr.appendChild(tdId);
    tr.appendChild(tdTitle);
    tr.appendChild(tdBody);
    return tr;
}
