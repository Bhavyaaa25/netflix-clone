// let scrollContainer= document.querySelector(".scrl-wpr");
// let nextBtn= document.getElementById("scrl-lt")
// let backBtn= document.querySelector("scrl-rt")

// nextBtn.addEventListener(click,()=>{
//     scrollContainer.scrollLeft+=500;
// });

// backBtn.addEventListener(click,()=>{
//     scrollContainer.scrollLeft-=500;
// });





function toggleAccordion(header) {
    const item = header.parentElement;
    const isActive = item.classList.contains('active');

    // Close all other open accordions
    document.querySelectorAll('.accordion-item').forEach(i => {
    i.classList.remove('active');
    });

    // Toggle current one
    if (!isActive) {
    item.classList.add('active');
    }
}