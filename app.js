const loadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json()
    const aiTools = data.data.tools;
    // console.log(aiTools.length)
    displayAllDataInfo(aiTools)

}
const displayAllDataInfo = (aiTools) => {
    const toolsContainer = document.getElementById('tools-container');

    // show only 6 card and show more button
    const showAllBtn = document.getElementById('show-all-btn');
    if(aiTools.length > 6){
        aiTools.splice(0,6);
        showAllBtn.classList.remove('hidden')
    }
    else{
        showAllBtn.classList.add('hidden')
    }
    
    for (let tool = 0; tool < 144; tool++) {
        const cardDiv = document.createElement('div');
        cardDiv.innerHTML = `
        <div class="card w-80 lg:w-96 bg-base-100 shadow-xl p-4">
            <figure><img src="${aiTools[tool]?.image || 'https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1nfGVufDB8fDB8fHww&w=1000&q=80'}"/ class="rounded-lg w-72 h-40"></figure>
            <div class="space-y-3 py-3">
                <h2 class="card-title">Features</h2>
                <div class="text-left">
                    <p>${aiTools[tool]?.features[0] || ""}</p>
                    <p>${aiTools[tool]?.features[1] || ""}</p>
                    <p>${aiTools[tool]?.features[2] || ""}</p>
                </div>
                <div>
                    <div><hr></div>
                    <div class="flex flex-row justify-between items-center h-auto pt-3">
                        <div class="space-y-2">
                            <h2 class="card-title">${aiTools[tool]?.name}</h2>
                            <div class="flex gap-2 text-sm"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M4.75 1V3.25M15.25 1V3.25M1 16.75V5.5C1 4.90326 1.23705 4.33097 1.65901 3.90901C2.08097 3.48705 2.65326 3.25 3.25 3.25H16.75C17.3467 3.25 17.919 3.48705 18.341 3.90901C18.7629 4.33097 19 4.90326 19 5.5V16.75M1 16.75C1 17.3467 1.23705 17.919 1.65901 18.341C2.08097 18.7629 2.65326 19 3.25 19H16.75C17.3467 19 17.919 18.7629 18.341 18.341C18.7629 17.919 19 17.3467 19 16.75M1 16.75V9.25C1 8.65326 1.23705 8.08097 1.65901 7.65901C2.08097 7.23705 2.65326 7 3.25 7H16.75C17.3467 7 17.919 7.23705 18.341 7.65901C18.7629 8.08097 19 8.65326 19 9.25V16.75M10 10.75H10.008V10.758H10V10.75ZM10 13H10.008V13.008H10V13ZM10 15.25H10.008V15.258H10V15.25ZM7.75 13H7.758V13.008H7.75V13ZM7.75 15.25H7.758V15.258H7.75V15.25ZM5.5 13H5.508V13.008H5.5V13ZM5.5 15.25H5.508V15.258H5.5V15.25ZM12.25 10.75H12.258V10.758H12.25V10.75ZM12.25 13H12.258V13.008H12.25V13ZM12.25 15.25H12.258V15.258H12.25V15.25ZM14.5 10.75H14.508V10.758H14.5V10.75ZM14.5 13H14.508V13.008H14.5V13Z" stroke="#585858" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg> ${aiTools[tool].published_in}</div>
                           </div>
                        <div class="border-none bg-[#FEF7F7] rounded-full w-8 h-8 flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none class="">
                            <path d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75" stroke="#EB5757" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        toolsContainer.appendChild(cardDiv)
    }
}
loadData()