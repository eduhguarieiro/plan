function verif(){
    var check = document.getElementById("switch")

    if(check.checked == true){
        console.log("Sim")
        var idpreco1 = document.getElementById("price1")
        var idpreco2 = document.getElementById("price2")
        var idparcela1 = document.getElementById("parcel1")
        var idparcela2 = document.getElementById("parcel2")
        var preco1 = "12xR$ 50,39"
        price1.textContent = ""
        price1.innerHTML = price1.innerHTML + preco1
        parcel1.textContent = ""
        parcel1.innerHTML = parcel1.innerHTML
        var preco2 = "12xR$ 161,19"
        price2.textContent = ""
        price2.innerHTML = price2.innerHTML + preco2
        parcel2.textContent = ""
        parcel2.innerHTML = parcel2.innerHTML
    } 
    else{
        console.log("Não")
        var idpreco1 = document.getElementById("price1")
        var idpreco2 = document.getElementById("price2")
        var idparcela1 = document.getElementById("parcel1")
        var idparcela2 = document.getElementById("parcel2")
        var preco1 = "R$ 55,99"
        price1.textContent = ""
        price1.innerHTML = price1.innerHTML + preco1
        var parcela1 = "/mês"
        parcel1.textContent = ""
        parcel1.innerHTML = parcel1.innerHTML + parcela1
        var preco2 = "R$ 179,10"
        price2.textContent = ""
        price2.innerHTML = price2.innerHTML + preco2
        var parcela2 = "/mês"
        parcel2.textContent = ""
        parcel2.innerHTML = parcel2.innerHTML + parcela2
    }
}