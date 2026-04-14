document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebarContainer');
    const username = localStorage.getItem('username') || 'Admin';

    const path = window.location.pathname;

    
    let profileSection = '';
    if (path.includes('beranda.html')) {
        profileSection = `
            <div class="sidebar-profile">
                <div class="profile-card">
                    <i class="fas fa-user-circle"></i>
                    <div class="profile-info">
                        <span class="profile-name">${username}</span>
                        <span class="profile-role">kelompok ilham</span>
                    </div>
                </div>
                <button onclick="logout()" class="nav-item logout-btn">
                    <i class="fas fa-sign-out-alt"></i> Keluar
                </button>
            </div>
        `;
    }

    // SIDEBAR
    sidebar.innerHTML = `
        <div class="logo-area">
            <i class="fas fa-recycle"></i>
            <h2>EcoDigital</h2>
        </div>

        <div class="nav-menu">
            <a href="beranda.html" class="nav-item" id="nav-beranda"><i class="fas fa-home"></i> Beranda</a>
            <a href="kalkulator.html" class="nav-item" id="nav-kalkulator"><i class="fas fa-calculator"></i> Kalkulator</a>
            <a href="dashboard.html" class="nav-item" id="nav-dashboard"><i class="fas fa-chart-pie"></i> Dashboard</a>
            <a href="tips.html" class="nav-item" id="nav-tips"><i class="fas fa-lightbulb"></i> Tips</a>
            <a href="riwayat.html" class="nav-item" id="nav-riwayat"><i class="fas fa-history"></i> Riwayat</a>
        </div>

        ${profileSection}
    `;

    // Set active menu
    const currentPage = window.location.pathname.split('/').pop();
    const activeId = 'nav-' + currentPage.replace('.html', '');
    const activeEl = document.getElementById(activeId);
    if (activeEl) activeEl.classList.add('active');
});