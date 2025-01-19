document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('.nav-right a'); // Tất cả liên kết trong menu điều hướng

  // Lấy đường dẫn của trang hiện tại
  const currentPath = window.location.pathname.split('/').pop(); // Lấy tên file HTML hiện tại

  // Thêm lớp 'active' vào liên kết tương ứng
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href'); // Lấy đường dẫn từ href của liên kết
    if (linkPath === currentPath) {
      link.classList.add('active'); // Thêm lớp 'active' nếu khớp
    } else {
      link.classList.remove('active'); // Loại bỏ lớp 'active' nếu không khớp
    }
  });

  // Xử lý sự kiện nhấn vào các liên kết
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      // Loại bỏ 'active' khỏi tất cả các liên kết
      navLinks.forEach(nav => nav.classList.remove('active'));

      // Thêm 'active' vào liên kết vừa được nhấn
      this.classList.add('active');

      // Lưu tab đang mở vào localStorage
      localStorage.setItem('activeTab', this.getAttribute('href'));
    });
  });
});


  // Mở modal đăng nhập
  document.getElementById('login-btn').addEventListener('click', function () {
    document.getElementById('login-overlay').style.display = 'block';
  });

  // Mở modal đăng ký từ liên kết "No account yet? Sign up"
  document.getElementById('signup-link').addEventListener('click', function () {
    document.getElementById('login-overlay').style.display = 'none'; // Ẩn khung Login
    document.getElementById('signup-overlay').style.display = 'block'; // Hiển thị khung Sign Up
  });

  // Đóng modal đăng nhập
  document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('login-overlay').style.display = 'none';
  });

  // Đóng modal đăng ký
  document.getElementById('close-signup-btn').addEventListener('click', function () {
    document.getElementById('signup-overlay').style.display = 'none';
  });

  // Chuyển từ Sign Up về Login
  document.getElementById('login-link').addEventListener('click', function () {
    document.getElementById('signup-overlay').style.display = 'none'; // Ẩn Sign Up modal
    document.getElementById('login-overlay').style.display = 'block'; // Hiển thị Login modal
  });

  // Mở khung Forgot Password khi click vào "Forgot Password"
  document.getElementById("forgot-password-link").addEventListener("click", function (event) {
    event.preventDefault(); // Ngăn link chuyển hướng
    document.getElementById("login-overlay").style.display = "none"; // Ẩn khung Login
    document.getElementById("forgot-password-overlay").style.display = "flex"; // Hiển thị khung Forgot Password
  });

  // Đóng khung Forgot Password khi nhấn vào dấu "X"
  document.getElementById("close-forgot-password-btn").addEventListener("click", function () {
    document.getElementById("forgot-password-overlay").style.display = "none"; // Ẩn modal khi click vào nút "X"
  });

  // Xử lý form Forgot Password
  document.getElementById("forgot-password-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("forgot-email").value;
    alert(`Password reset instructions will be sent to ${email}.`);
    document.getElementById("forgot-password-overlay").style.display = "none"; // Ẩn modal sau khi gửi
  });

  // Đảm bảo modal ẩn khi tải trang
  window.onload = function () {
    document.getElementById('signup-overlay').style.display = 'none';
    document.getElementById('login-overlay').style.display = 'none';
    document.getElementById('forgot-password-overlay').style.display = 'none';
  };

  // Chuyển từ Forgot Password về Login khi nhấn vào "Log in"
  document.getElementById('forgot-login-link').addEventListener('click', function () {
    document.getElementById('forgot-password-overlay').style.display = 'none'; // Ẩn Forgot Password modal
    document.getElementById('login-overlay').style.display = 'block'; // Hiển thị Login modal
  });

  // Hiển thị modal đăng nhập khi click vào 'Start Now'
  document.querySelector('.btn-start-now').addEventListener('click', function () {
    document.getElementById('login-overlay').style.display = 'block';
  });

  // Mở/Đóng menu hamburger
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  } else {
    console.error('Hamburger button or navigation menu not found!');
  }
