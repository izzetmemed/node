class turner{
    constructor(){
    this.xhr=new XMLHttpRequest ();
    this.source=null;
}

sendData(callback,callback1){
        this.xhr.onreadystatechange =function(){
            if(this.readyState==4 && this.status==200){
                const res=this.responseText;
                this.source=Array.from(JSON.parse(res)) ;
                callback();
                callback1();
            }  
        }
  
  this.xhr.open("GET","test.json");
  this.xhr.send();
}
}