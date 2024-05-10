const loadPHTubeCategory = async () => {
    const res = await fetch(' https://openapi.programming-hero.com/api/videos/categories');

    const data = await res.json();

    const tabContainer = document.getElementById('tab-container')

    data.data.forEach((category) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <button onclick='categoryLoadID("${category.category_id}")' class="btn btn-tab text-[#252525] hover:bg-[#FF1F3D] hover:text-white bg-[#25252515]">${category.category}</button>
        `;
        tabContainer.appendChild(div);
    });
    const cardCategory = data.data;


};


const categoryLoadID = async (category_id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${category_id}`);

    const data = await res.json();
    const cardContainer = document.getElementById('card-container')
    const noDataContainer = document.getElementById("no-data-container")

    cardContainer.innerHTML = "";
    
    if(data.data.length===0){
        noDataContainer.classList.remove("hidden")
    }
    else{
        noDataContainer.classList.add("hidden")
    };


    data.data.forEach((card) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="lg:w-96 mx-auto w-80 md:w-80 rounded-lg">
                <img class="w-[312px] h-[200px] rounded-lg" src="${card?.thumbnail}" alt="image not found">
                <div class="flex gap-4 mt-5">
                    <img class="w-[40px] h-[40px] rounded-full" src="${card?.authors[0]?.profile_picture}" alt="image">
                    <div class="">
                        <h2 class="text-[#171717] text-base font-bold mb-2">${card?.title}</h2>
                        <div class="flex gap-2 mb-3">
                            <p class="text-sm font-normal text-[#17171771]">${card?.authors[0]?.profile_name}</p>

                        </div>
                        <div class="flex gap-2">
                        <p class="text-sm font-normal text-[#17171771]">${card?.others?.views} views</p>
                        <p> ${card.authors[0].verified?"<img src='./images/verified.svg'>" : ""}</p>
                        </div >
                    </div >
                </div >
    `;

        cardContainer.appendChild(div);


    });

};

const loadPHTubeDrawingCategory = async () => {
    const response = await fetch(' https://openapi.programming-hero.com/api/videos/categories');

    const data = await response.json();

    const noDataContainer = document.getElementById('no-data-container');
    const noCardCategory = data.data[3];

    data?.noCardCategory?.forEach((noData) => {
        const div = createElement('div')
        noDataContainer.innerHTML = `
        <figure onclick='noData("${noData?.category_id[3]}")' class="">
                <img id="img-no-data" class="mx-auto" src="./images/Icon.png" alt="" />
                <figcaption>
                    <h1 class="text-3xl mt-8 text-center font-bold">Oops!! Sorry, There is no <br> content here</h1>
                </figcaption>
            </figure>
        `;
        
        noDataContainer.appendChild(div);
    });


}



loadPHTubeCategory()
categoryLoadID("1000")
loadPHTubeDrawingCategory()