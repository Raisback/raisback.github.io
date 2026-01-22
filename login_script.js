/**
 * Handle user login selection based on device type
 * @param {string} targetType - 'mobile' or 'desktop'
 */
function handleLogin(targetType) {
    // Check if user is on a mobile device
    const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    // Clear previous states
    document.querySelectorAll('.user-row').forEach(row => {
        row.classList.remove('selected', 'denied');
    });

    const desktopRow = document.getElementById('desktop-user');

    if (targetType === 'mobile') {
        // Mobile User is always allowed (redirects to mobile.html)
        window.location.href = 'error_page.html';
    } else if (targetType === 'desktop') {
        // Desktop User is blocked only if accessed via a mobile device
        if (!isMobileDevice) {
            window.location.href = 'desktop.html';
        } else {
            desktopRow.classList.add('denied');
        }
    }
}
