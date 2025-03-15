function calculer() {
    let cc1 =parseFloat(document.getElementById('cc1').value);
    let cc2 =parseFloat(document.getElementById('cc2').value);
    let cc3 =parseFloat(document.getElementById('cc3').value);
    let examen =parseFloat(document.getElementById('exame').value);
    
    let moyenne = ((cc1 + cc2 + cc3)/3 + examen)/3;
    let Red = document.getElementById('nonValide');
    let Green = document.getElementById('Valide');
    
    if (moyenne >= 10) {
        Green.innerHTML = moyenne.toFixed(2);
        document.getElementById('alert-green').style.display = 'block';
        document.getElementById('alert-red').style.display = 'none';
    } else {
        Red.innerHTML = moyenne.toFixed(2);
        document.getElementById('alert-red').style.display = 'block';
        document.getElementById('alert-green').style.display = 'none';
    }
}