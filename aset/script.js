
  // Pilih elemen menu toggle dan navigasi
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav ul');

  // Tambahkan event listener untuk toggle menu
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Tutup menu jika pengguna mengklik di luar menu
  document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('active');
    }
  });

