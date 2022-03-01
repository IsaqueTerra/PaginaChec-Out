const total = document.getElementById("total");
const amount = document.getElementById("amount");


const valueShirt = 69.90;
total.value = new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(valueShirt)

function calculateTotal() {
    total.value = new Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(valueShirt * amount.value);
}
