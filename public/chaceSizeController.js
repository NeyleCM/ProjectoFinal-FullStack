console.log("Usa el script")
const category = document.getElementById("category")
const changeSizeType = () => {
    console.log("Entra en la funcion")
    const catSelected = category.options[category.selectedIndex].value
    console.log(catSelected)
    if(catSelected != "zapatos"){
        console.log("Categoria no zapatos")
        return `  
        <input type="checkbox" class="checkbox" id="xs" name="xs">
        <label for="xs">XS</label>

        <input type="checkbox" class="checkbox" id="s" name="s">
        <label for="s">S</label>

        <input type="checkbox" class="checkbox" id="m" name="m">
        <label for="m">M</label>

        <input type="checkbox" class="checkbox" id="l" name="l">
        <label for="l">L</label>

        <input type="checkbox" class="checkbox" id="xl" name="xl">
        <label for="xl">XL</label>

        <input type="checkbox" class="checkbox" id="xxl" name="xxl">
        <label for="xxl">XXL</label>
        `
    }
    else{
        console.log("Categoria zapatos")

        return `  
        <input type="checkbox" class="checkbox" id="39" name="39">
        <label for="39">39</label>
        
        <input type="checkbox" class="checkbox" id="40" name="40">
        <label for="40">40</label>

        <input type="checkbox" class="checkbox" id="41" name="41">
        <label for="41">41</label>

        <input type="checkbox" class="checkbox" id="42" name="42">
        <label for="42">42</label>

        <input type="checkbox" class="checkbox" id="43" name="43">
        <label for="43">43</label>
        
        <input type="checkbox" class="checkbox" id="44" name="44">
        <label for="44">44</label>
        `
    }
}

const divSize = document.getElementById("sizeController")
divSize.innerHTML = changeSizeType()

category.addEventListener("change", () => {
    divSize.innerHTML = changeSizeType()
})