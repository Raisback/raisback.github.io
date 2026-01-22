const projects = [
    { 
        name: "Lo-Buddy AI", 
        icon: "project_file.png", 
        url: "project_pages/lo_buddy.html",
        status: "Ongoing"
    },
    { 
        name: "SprintMaster", 
        icon: "project_file.png", 
        url: "project_pages/sprint_master.html",
        status: "Stable"
    },
    { 
        name: "Security Multi-Tool", 
        icon: "project_file.png", 
        url: "project_pages/sec_tool.html",
        status: "Ongoing"
    },
    { 
        name: "Cons. TaskFlow", 
        icon: "project_file.png", 
        url: "project_pages/cons_task.html",
        status: "Finished"
    },
    { 
        name: "Pixel2Bytes", 
        icon: "project_file.png", 
        url: "project_pages/p2b.html",
        status: "Finished"
    },
    { 
        name: "Xeno Space", 
        icon: "project_file.png", 
        url: "project_pages/xeno_spc.html",
        status: "Stable"
    },
    { 
        name: "Tech Press App", 
        icon: "project_file.png", 
        url: "project_pages/tech_press.html",
        status: "Finished"
    },
    { 
        name: "Display Drivers", 
        icon: "projects.png", 
        url: "project_pages/display_driver.html",
        status: "Finished"
    },
    { 
        name: "Remote Controller", 
        icon: "projects.png", 
        url: "project_pages/mobile_remote.html",
        status: "Finished"
    }
];

const skillGroups = [
    {
        category: "Frontend & Web",
        skills: [
            { name: "MongoDB.bson", icon: "skills/mongodb.png", desc: "Designing flexible NoSQL schemas and high-performance aggregation pipelines.", level: "95%" },
            { name: "Express.js", icon: "skills/express.png", desc: "Architecting scalable RESTful APIs and middleware for high-traffic applications.", level: "93%" },
            { name: "React.js", icon: "skills/react.png", desc: "Expertise in full-stack web applications and scalable MERN architectures.", level: "92%" },
            { name: "Node.js", icon: "skills/node3.png", desc: "Building robust server-side logic and integrated cloud-based interfaces.", level: "92%" },
            { name: "Tailwind.CSS", icon: "skills/tailwind.png", desc: "Crafting responsive user interfaces for modern web platforms.", level: "95%" },
            { name: "JavaScript", icon: "skills/javascript.png", desc: "Proficiency in JS frameworks and relational/NoSQL database management.", level: "95%" },
            { name: "PHP", icon: "skills/php.png", desc: "Developing dynamic server-side scripts and managing backend logic for web applications.", level: "88%" },
            { name: "Laravel", icon: "skills/Laravel.png", desc: "Experience in enterprise-level PHP frameworks for web development.", level: "85%" }
        ]
    },
    {
        category: "Mobile & AI",
        skills: [
            { name: "Flutter_Dart.apk", icon: "skills/flutter.png", desc: "Cross-platform development including on-device LLM integration (Gemma).", level: "94%" },
            { name: "Android_Native.java", icon: "skills/android.png", desc: "Native mobile development with Java and real-time Firebase integration.", level: "88%" },
            { name: "Firebase", icon: "skills/firebase.png", desc: "Implementing Auth, Firestore, and Realtime DB for seamless data delivery.", level: "90%" }
        ]
    },
    {
        category: "Embedded & Systems",
        skills: [
            { name: "ESP_IDF", icon: "skills/esp_idf.png", desc: "Deep proficiency in firmware development for ESP32-S3 and local drivers.", level: "95%" },
            { name: "Display_Drivers", icon: "skills/driver2.png", desc: "Optimizing I2C/SPI display drivers (SSD1306/Nokia 5110) for efficiency.", level: "92%" },
            { name: "IoT Engineering", icon: "skills/iot.jpg", desc: "Designing custom TCP/IP protocols for client-server hardware control.", level: "88%" },
            { name: "C/C++", icon: "skills/cpp.png", desc: "Low-level system programming, memory management, and hardware abstraction.", level: "93%" },
            { name: "Python_PyQt.py", icon: "skills/python.png", desc: "Developing professional desktop GUIs and hardware automation scripts.", level: "85%" }
        ]
    },
    {
        category: "Security & Research",
        skills: [
            { name: "Hardware_Hacking.vlt", icon: "skills/hack1.png", desc: "Building portable tools for offline vulnerability assessment and auditing.", level: "85%" },
            { name: "Linux_Mastery.sh", icon: "skills/linux1.png", desc: "3+ years of experience in Linux environments, Bash, and shell scripting.", level: "90%" },
            { name: "Threat_Intelligence.cert", icon: "skills/shield.png", desc: "Certified in IBM Cybersecurity fundamentals and threat hunting logic.", level: "80%" },
            { name: "OWASP_Security.cfg", icon: "skills/owasp.png", desc: "Applying security fundamentals to web and embedded system architectures.", level: "82%" }
        ]
    },
    {
        category: "Core Engineering",
        skills: [
            { name: "DSA_Logic", icon: "skills/dsa.png", desc: "Strong analytical problem-solving skills via competitive programming.", level: "94%" },
            { name: "Agile_Scrum", icon: "skills/agile2.png", desc: "Sprint planning and task prioritization using Jira and GitHub workflows.", level: "90%" },
            { name: "Git", icon: "skills/git.png", desc: "Professional collaborative development and technical documentation.", level: "92%" },
            { name: "System_Architecture", icon: "skills/system.png", desc: "Designing end-to-end solutions from local firmware to cloud UIs.", level: "88%" }
        ]
    }
];


const games = [
    
    { name: "Space Invaders", icon: "icons/invaders.png", url: "https://funhtml5games.com?embed=spaceinvaders" },   
    { name: "Angry Birds", icon: "icons/angry_bird.png", url: "https://funhtml5games.com?embed=angrybirds" },
    { name: "Pinball", icon: "icons/pinball.png", url: "https://funhtml5games.com?embed=spacecadetpinball" },
    { name: "Snake II", icon: "icons/snake.png", url: "https://funhtml5games.com?embed=snake2" }


];

// Populating Games container
const gamesContainer = document.getElementById('games-container');
games.forEach((game) => {
    const div = document.createElement('div');
    div.className = 'project-item flex flex-col items-center cursor-pointer p-2 hover:bg-blue-100 hover:outline hover:outline-1 hover:outline-blue-400';
    
    // Check if the icon is a path (contains .) or an emoji
    const iconHtml = game.icon.includes('.') 
        ? `<img src="${game.icon}" alt="${game.name}" class="w-8 h-8 mb-1">`
        : `<div class="text-2xl mb-1">${game.icon}</div>`;

    div.innerHTML = `
        ${iconHtml}
        <div class="text-[10px] text-gray-800 font-bold text-center">${game.name}</div>
    `;
    div.onclick = () => openGameViewer(game);
    gamesContainer.appendChild(div);
});


function openGameViewer(game) {
    const iframe = document.getElementById('project-iframe');
    const navBar = document.querySelector('#viewer-win .nav-bar-blank'); // Find the path bar
    
    // Hide the path section for games
    if (navBar) navBar.style.display = 'none';
    
    document.getElementById('viewer-title').textContent = game.name;
    iframe.src = game.url; 
    
    // Use the game's actual icon path
    openWindow('viewer-win', game.name, game.icon); 
}


// Track opened windows for taskbar
const openWindowsSet = new Map();

// Populating Project container
const projectsContainer = document.getElementById('projects-container');
projects.forEach((proj) => {
    const div = document.createElement('div');
    div.className = 'project-item flex flex-col items-center cursor-pointer p-2 hover:bg-blue-100 hover:outline hover:outline-1 hover:outline-blue-400';
    div.innerHTML = `
        <img src="${proj.icon}" alt="${proj.name}" class="w-8 h-8 mb-1">
        <div class="text-[10px] text-gray-800 font-bold text-center">${proj.name}</div>
    `;
    div.onclick = () => openProjectViewer(proj);
    projectsContainer.appendChild(div);
});

// Populating Skills container with categories
const skillsContainer = document.getElementById('skills-container');
const detailPanel = document.getElementById('skill-detail-panel');

// Populating Skills container in script.js
skillGroups.forEach((group) => {
    const header = document.createElement('div');
    header.className = 'skill-category-title';
    header.innerHTML = `<span>📂</span> ${group.category}`;
    skillsContainer.appendChild(header);

    group.skills.forEach((skill) => {
        const div = document.createElement('div');
        div.className = 'skill-item flex flex-col items-center cursor-pointer p-2 hover:bg-blue-100 hover:outline hover:outline-1 hover:outline-blue-400 rounded';
        
        // NEW LOGIC: Check if the icon is a path or an emoji
        const iconHtml = (skill.icon.includes('.') || skill.icon.includes('/'))
            ? `<img src="${skill.icon}" alt="${skill.name}" class="w-8 h-8 mb-1 object-contain">`
            : `<div class="text-2xl mb-1">${skill.icon}</div>`;

        div.innerHTML = `
            ${iconHtml}
            <div class="text-[10px] text-gray-800 font-bold text-center leading-tight">${skill.name}</div>
        `;

        div.onclick = () => {
            document.querySelectorAll('.skill-item').forEach(el => el.classList.remove('item-selected'));
            div.classList.add('item-selected');
            detailPanel.innerHTML = `
                <div class="flex items-center gap-2 mb-1">
                    ${iconHtml.replace('w-8 h-8', 'w-5 h-5')} 
                    <div class="text-[11px] font-bold text-blue-900">${skill.name}</div>
                </div>
                <div class="text-[10px] text-gray-700 leading-snug mb-2">${skill.desc}</div>
                <div class="text-[10px] font-bold text-blue-800">Proficiency: ${skill.level}</div>
                <div class="skill-progress-bg">
                    <div class="skill-progress-fill" style="width: ${skill.level}"></div>
                </div>
            `;
        };
        skillsContainer.appendChild(div);
    });
});

// Window & UI Logic
let zIndex = 1000;
let currentDrag = null;
let offset = { x: 0, y: 0 };

function toggleStartMenu() {
    const menu = document.getElementById('start-menu');
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
}

function openWindow(id, title = "Window", iconPath = "projects.png") {
    const win = document.getElementById(id);
    win.style.display = 'flex';
    bringToFront(win);
    
    // Find the title bar container
    const titleBar = win.querySelector('.window-title');
    
    // Check if we are in the 'viewer-win' (which has specific IDs) 
    // or a standard window (which just has a span)
    if (id === 'viewer-win') {
        document.getElementById('viewer-title').textContent = title;
        document.getElementById('viewer-icon').innerHTML = `<img src="${iconPath}" style="width:16px; height:16px; display:inline-block;">`;
    } else if (titleBar) {
        // For other windows, we update the existing icon/span structure
        // without destroying the container
        titleBar.innerHTML = `<img src="${iconPath}" style="width:16px; height:16px; display:inline-block; margin-right:5px;"> <span>${title}</span>`;
    }
    
    if (!openWindowsSet.has(id)) {
        openWindowsSet.set(id, { title, icon: iconPath });
        updateTaskbar();
    }
}

function closeWindow(id) { 
    document.getElementById(id).style.display = 'none'; 
    openWindowsSet.delete(id);
    updateTaskbar();
}

function bringToFront(win) {
    zIndex++;
    win.style.zIndex = zIndex;
    
    // Set active class in taskbar
    document.querySelectorAll('.taskbar-item').forEach(item => {
        item.classList.toggle('active', item.dataset.winId === win.id);
    });
}

function updateTaskbar() {
    const tray = document.getElementById('taskbar-apps');
    tray.innerHTML = '';
    
    openWindowsSet.forEach((data, id) => {
        const btn = document.createElement('div');
        btn.className = 'taskbar-item';
        btn.innerHTML = `<img src="${data.icon}" style="width:16px; height:16px;"> <span>${data.title}</span>`;
        btn.onclick = () => bringToFront(document.getElementById(id));
        tray.appendChild(btn);
    });
}

function openProjectViewer(proj) {
    const iframe = document.getElementById('project-iframe');
    const navBar = document.querySelector('#viewer-win .nav-bar-blank');
    
    // Show the path section for projects
    if (navBar) navBar.style.display = 'flex';
    
    document.getElementById('viewer-title').textContent = proj.name;
    document.getElementById('viewer-address').textContent = `/projects/${proj.name.toLowerCase().replace(/\s+/g, '_')}`;
    
    iframe.src = proj.url; 
    openWindow('viewer-win', proj.name, proj.icon);
}

function showError() {
    toggleStartMenu();
    const modal = document.getElementById('error-modal');
    modal.style.display = 'flex';
    modal.style.zIndex = 30000;
}

function closeError() {
    document.getElementById('error-modal').style.display = 'none';
}

function dragStart(e, id) {
    currentDrag = document.getElementById(id);
    bringToFront(currentDrag);
    offset.x = e.clientX - currentDrag.offsetLeft;
    offset.y = e.clientY - currentDrag.offsetTop;
    document.addEventListener('mousemove', dragMove);
    document.addEventListener('mouseup', dragEnd);
}

function dragMove(e) {
    if (!currentDrag) return;
    currentDrag.style.left = (e.clientX - offset.x) + 'px';
    currentDrag.style.top = (e.clientY - offset.y) + 'px';
}

function dragEnd() {
    currentDrag = null;
    document.removeEventListener('mousemove', dragMove);
    document.removeEventListener('mouseup', dragEnd);
}

function downloadCV() {
    const cvUrl = 'my_cv.pdf'; 
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Raisary_Mowsook_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function updateClock() {
    const now = new Date();
    document.getElementById('clock').textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
setInterval(updateClock, 1000);
updateClock();

// Start with about window open
openWindow('about-win', 'My_Info.txt', 'resume.png');
