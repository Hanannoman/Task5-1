let disArea=document.getElementById('dis');
function appendToArea(value){
  disArea.value+=value;
};
function clearDisplay(){
  disArea.value="";
};
function clearTheLast(){
  disArea.value=disArea.value.slice(0,-1);
};
function calculate(){
  try{
    disArea.value=eval(disArea.value);
  }
  catch(error){
disArea.value="error"
  }
  
};