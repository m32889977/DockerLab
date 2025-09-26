// Fetch container information
async function getContainerInfo() {
    try {
        // Get current time
        document.getElementById('current-time').textContent = 
            new Date().toLocaleString();
        
        // Get container ID from hostname (in Docker, hostname = container ID)
        const response = await fetch('/api/info');
        if (response.ok) {
            const data = await response.json();
            document.getElementById('container-id').textContent = 
                data.hostname || 'Not in container';
            document.getElementById('nginx-version').textContent = 
                data.nginx_version || 'Unknown';
        }
    } catch (error) {
        console.error('Error fetching container info:', error);
        document.getElementById('container-id').textContent = 'Error';
    }
}

// Update every second
setInterval(getContainerInfo, 1000);
getContainerInfo();