function calculategst(){
    let quantity=document.getElementById('quantity').value;
    let prize=document.getElementById('prize').value;
    let multiplygst=quantity*prize;
    let cgst=12/100*multiplygst;
    let sgst=18/100*multiplygst;
    let tgst= (12/100*multiplygst)+(18/100*multiplygst);
    document.getElementById('cgst').innerHTML = cgst;
    document.getElementById('sgst').innerHTML = sgst;
    document.getElementById('tgst').innerHTML =tgst;
    document.getElementById('amount').innerHTML=cgst+sgst+multiplygst;
}