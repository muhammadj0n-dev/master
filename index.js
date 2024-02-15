
// import carddd from "./card";
let cardWrapper = $('.section-2_wrapper');
let brandOption = $('#brand');
let renderLetter =$('#letter');
let categoryOption = $('#category');
// RENDER DATA STARTED

let brand =[];
let category =[];
function renderdata(data) {
  data.forEach((el)=>{
      const {thumbnail,name,brand,category,price} = el;

      const card = document.createElement('div');
      card.classList.add('section-2_wrapper-card');
      card.classList.add('w-[250px]');
      card.innerHTML = `
                <img src="${thumbnail}" alt="${name}" class="mx-auto  w-[100%] h-[200px] rounded-t-[16px]">
                    <div class="title bg-[#dcdbdb] p-[15px] border-t-[1px] border-t-[#00000014] rounded-b-[16px]">
                            <h3 class="text-[16px]">${category}</h3>

                        <p class="flex py-[5px] items-center gap-2 pb-[10px] border-b-[1px] text-[16px] border-b-[#00000017]">
                            <b>${price + "$"}</b>
                            <a href="#" class="line-through">${price * 1.5 + "$"}</a>
                        </p>

                        <h2 class="text-[16px] text-[#249B3E] font-bold pt-[1px]">${brand}</h2>
                    </div>
            `;

            cardWrapper.appendChild(card);
    });
}

let result = renderdata(product.products);

// console.log("first");

// RENDER DATA ENDED

function findBrand(data) {

    if (data.length > 0) {

        data.forEach((el) => {

            if (!brand.includes(el.brand)) {
                 brand.push(el.brand)
            }

        })
    }

}

findBrand(product.products)





function renderBrand(data) {


    if (data.length > 0) {

        data.forEach((el) => {

            const option = render('option', '', el)
            brandOption.appendChild(option)

        })

    }

}


renderBrand(brand)



brandOption.addEventListener('change', (e) => {
    console.log(e.target.value)
    sortBrands(e.target.value)
})


function sortBrands(brandNmae) {

    cardWrapper.innerHTML = ""

    const filterBrand = product.products.filter(el => {
        return el.brand.toLowerCase() == brandNmae.toLowerCase()
    })


    renderdata(filterBrand)

}



// RENDER DATA ENDED

function findCategory(data) {

    if (data.length > 0) {

        data.forEach((el) => {

            if (!category.includes(el.category)) {
                 category.push(el.category)
            }

        })
    }

}

findCategory(product.products)





function renderCategory(data) {


    if (data.length > 0) {

        data.forEach((el) => {

            const option = render('option', '', el)
            categoryOption.appendChild(option)

        })

    }

}


renderCategory(category)



categoryOption.addEventListener('change', (e) => {
    console.log(e.target.value)
    sortBrands(e.target.value)
})


function sortBrands(categoryNmae) {

    cardWrapper.innerHTML = ""

    const filterCategory = product.products.filter(el => {
        return el.category.toLowerCase() == category.toLowerCase()
    })


    renderCategory(filterCategory)

}