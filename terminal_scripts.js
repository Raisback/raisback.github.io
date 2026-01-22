/**
 * PROJECT DATABASE
 */
const PROJECT_DATA = [
    {
        title: "LO-BUDDY | OFFLINE LLM ASSISTANT",
        status: "ONGOING",
        description: "On-device Flutter application powered by Gemma 270M model for secure, zero-latency AI.",
        stack: "FLUTTER, DART, LLAMA.CPP, GEMMA 270M, LOCAL STORAGE",
        highlight: false
    },
    {
        title: "PIXEL2BYTES | GRAPHICS_OPTIMIZER",
        status: "STABLE",
        description: "Dedicated online tool for creating sprite sheets and pixel graphics tailored for low-memory microcontrollers (OLED/LCD).",
        stack: "WEB_CORE, TAILWIND_CSS, EMBEDDED_ASSET_ENCODING",
        highlight: true
    },
    {
        title: "SPRINTMASTER | AGILE SUITE",
        status: "STABLE",
        description: "Management suite for sprint tracking, task prioritization, and team velocity analytics.",
        stack: "REACT.JS, NODE.JS, MONGODB, TAILWIND CSS, CHART.JS",
        highlight: false
    },
    {
        title: "SEC_RESEARCH_MULTI-TOOL",
        status: "ONGOING",
        description: "ESP32-S3 based hardware for vulnerability assessment and low-level network testing.",
        stack: "C, C++, ESP-IDF, LVGL, FREE RTOS, SPI/I2C",
        highlight: false
    },
    {
        title: "CONSTRUCTION_TASKFLOW",
        status: "STABLE",
        description: "ERP for real-time construction scheduling, budgeting, and resource allocation.",
        stack: "MERN (MONGODB, EXPRESS, REACT, NODE), FIREBASE AUTH",
        highlight: false
    },
    {
        title: "TECH PRESS",
        status: "STABLE",
        description: "Native Android news application with offline support and real-time updates.",
        stack: "JAVA (NATIVE), ANDROID SDK, RETROFIT, SQLITE",
        highlight: false
    }
];

function renderProjects() {
    const container = document.getElementById('project-container');
    if (!container) return;
    container.innerHTML = PROJECT_DATA.map(proj => `
        <div class="border border-[var(--phosphor-color)]/50 p-3 bg-black/40 ${proj.highlight ? 'border-l-4 border-l-[var(--phosphor-color)]' : ''}">
            <div class="flex justify-between items-start">
                <h4 class="font-bold text-md text-[var(--phosphor-color)]">${proj.title}</h4>
                <span class="text-[9px] bg-[var(--phosphor-color)] text-black px-1 font-bold">${proj.status}</span>
            </div>
            <p class="text-[12px] opacity-80 mt-1">${proj.description}</p>
            <div class="mt-2 text-[10px] text-[var(--phosphor-color)] font-bold">
                STACK: ${proj.stack}
            </div>
        </div>
    `).join('');
}

// --- Formspree AJAX Logic ---
const contactForm = document.getElementById('contact-form');
const packetStatus = document.getElementById('packet-status');

if (contactForm) {
    contactForm.addEventListener("submit", async function(event) {
        event.preventDefault();
        packetStatus.innerText = "ENCRYPTING_AND_ROUTING_PACKET...";
        triggerGlitch();

        const data = new FormData(event.target);
        
        try {
            const response = await fetch(event.target.action, {
                method: contactForm.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                packetStatus.innerText = "PACKET_SENT_SUCCESSFULLY. UPLINK_SECURE.";
                contactForm.reset();
                setTimeout(() => { packetStatus.innerText = ""; }, 5000);
            } else {
                const result = await response.json();
                packetStatus.innerText = "ERROR: " + (result.errors?.[0]?.message || "SIGNAL_LOST");
            }
        } catch (error) {
            packetStatus.innerText = "CRITICAL_ERROR: UPLINK_FAILURE";
        }
    });
}

function triggerGlitch() {
    document.body.classList.add('signal-glitch');
    setTimeout(() => {
        document.body.classList.remove('signal-glitch');
    }, 250);
}

// Random full-screen glitch effect
setInterval(() => {
    if (Math.random() > 0.94) {
        document.body.style.filter = 'contrast(5) brightness(3) saturate(0) invert(1)';
        setTimeout(() => {
            document.body.style.filter = 'none';
            triggerGlitch();
        }, 80);
    }
}, 3000);

function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById('system-time');
    if (timeElement) timeElement.innerText = 'SYS_TIME: ' + now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();


function downloadCV() {
    triggerGlitch();
    
    
    const cvFilePath = 'my_cv.pdf'; 
    
    const link = document.createElement('a');
    link.href = cvFilePath;
    link.download = 'my_cv_2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const bootLog = document.getElementById('boot-log');
const bootScreen = document.getElementById('boot-screen');
const mainUI = document.getElementById('main-ui');

const logs = [
    "CRITICAL_ERROR: SYNC_LOST",
    "REATTEMPTING_SIGNAL_LOCK...",
    "AUTHENTICATING: MOHAMED_RAISARY...",
    "SYSTEM_REBRAND_DETECTED: PORTFOLIO_XP_V1.3",
    "INDEXING_ACADEMIC_RECORDS...",
    "DECRYPTING_FULL_SKILL_MATRIX...",
    "EMERGENCY_UI_LOADED."
];

let logIndex = 0;
function typeBootLog() {
    if (logIndex < logs.length) {
        const line = document.createElement('div');
        line.className = 'mb-1 ' + (logs[logIndex].includes('ERROR') ? 'text-red-500' : '');
        line.innerText = '!! ' + logs[logIndex];
        bootLog.appendChild(line);
        logIndex++;
        setTimeout(typeBootLog, 100 + Math.random() * 150);
    } else {
        setTimeout(() => {
            renderProjects();
            triggerGlitch();
            bootScreen.style.display = 'none';
            mainUI.classList.remove('hidden');
            setTimeout(() => mainUI.classList.add('opacity-100'), 50);
        }, 800);
    }
}

window.onload = typeBootLog;

function showSection(sectionId, btn) {
    triggerGlitch();
    document.querySelectorAll('.section-content').forEach(s => s.classList.add('hidden-section'));
    document.getElementById(sectionId).classList.remove('hidden-section');
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('content-area').scrollTop = 0;
}
