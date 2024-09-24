document.addEventListener('DOMContentLoaded', () => {
  const jegy = document.getElementById("jegy") as HTMLInputElement;
  const gomb = document.getElementById("gomb");
  const t: Number[] = [];
  const jegyek = document.getElementById("jegyek");

  const kereses = document.getElementById("kereses") as HTMLInputElement;
  const jegyKeres = document.getElementById("jegyKeres");

  
  gomb?.addEventListener("click", () => {
    
    if(parseInt(jegy.value) < 1 || parseInt(jegy.value) > 5){
      alert("Nem megfelelő a megasott szám")
    }else{
      let x = parseInt(jegy.value);
      t.push(x);
      jegyek!.innerHTML += (x + ' ')
      console.log(t);
    }

  })


  kereses.addEventListener('input', () => {
    const q = parseInt(kereses.value);
    const w = t.filter(j => j.toString().includes(q.toString()));
    jegyKeres!.innerHTML = w.toString();
  })
})