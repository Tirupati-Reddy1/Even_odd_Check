function Check_Even_odd(){
    let num=document.getElementById("ip").value
    let display_div=document.getElementById("display")
    if (num===""){
        display_div.textContent="Please Enter a Number...!"
        display_div.style.color="red";
        return;
    };
    num=Number(num)
    if(num%2==0){
    display_div.textContent="Its Even Number";
    display_div.style.color="green"
}
else{
    display_div.textContent="its Odd Number"
    display_div.style.color="green"
}
}