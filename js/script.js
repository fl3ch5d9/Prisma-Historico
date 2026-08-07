const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});


<script>
document.getElementById('hamburger').onclick=function(){document.getElementById('menu').classList.toggle('active')}
</script>