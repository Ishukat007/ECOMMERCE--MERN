console.log('common');

let allLikeButton = document.querySelectorAll('.like-btn');

async function likeButton(productId, btn) {
  try {
    console.log(productId);
    let response = await axios({
      method: 'post',
      url: `products/${productId}/like`,
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
    });
    if (btn.children[0].classList.contains('fa-regular')) {
      btn.children[0].classList.remove('fa-regular');
      btn.children[0].classList.add('fa-solid');
    } else {
      btn.children[0].classList.remove('fa-solid');
      btn.children[0].classList.add('fa-regular');
    }
  } catch (e) {
    if (e.response.status === 401) {
      window.location.replace('/login');
      console.log(e.message, 'error hai ye window pe');
    }
  }
}
for (let btn of allLikeButton) {
  btn.addEventListener('click', () => {
    let productId = btn.getAttribute('product-id');
    likeButton(productId, btn);
  });
}
