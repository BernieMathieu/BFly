//Menu burger
function Menu(e) {
    let list = document.querySelector('ul');

    e.name === 'menu' ? (e.name = 'close' , list.classList.add('top-[80px]'), 
    list.classList.add('opacity-100')) : (e.name = 'menu', 
    list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'));
}

//FAQ
// function faq(element) {

//     document.querySelector('cursor-pointer').forEach(item => {
//         item.addEventListener('click', event => {
//             item.nextElementSibling.classList.toggle('hidden');
//         })
//     })
// }