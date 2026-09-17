// Data for all 6 indices
const indicesData = [
    {
        id: "chaos",
        title: "How Chaos-Prone Are You?",
        subtitle: "Spontaneity & Chaos Evaluation",
        tiers: {
            high: { min: 38, max: 45, title: "Unapologetic Threat to Peace", desc: "Pure spontaneous chaos. Life will never be boring." },
            mid: { min: 26, max: 37, title: "Calculated Adventurer", desc: "Sweet spot of fun. Exciting ideas, but knows when to stop." },
            low: { min: 15, max: 25, title: "Anchor of Stability", desc: "Voice of reason keeping everyone out of trouble." }
        },
        questions: [
            { q: "It's 11:00 PM on Tuesday. You suddenly decide:", opts: [{t:"To rearrange furniture", p:3}, {t:"To order late food", p:2}, {t:"Past bedtime", p:1}] },
            { q: "You get a sudden spontaneous impulse. You:", opts: [{t:"Check calendar first", p:2}, {t:"Execute immediately", p:3}, {t:"Talk yourself out of it", p:1}] },
            { q: "Partner shatters a glass. Knee-jerk response:", opts: [{t:"Yell 'DON'T MOVE!'", p:3}, {t:"Grab broom quietly", p:1}, {t:"Joke about butterfingers", p:2}] }
        ]
    },
    {
        id: "petty",
        title: "Argument Style & Petty Revenge",
        subtitle: "Conflict & Petty Energy Evaluation",
        tiers: {
            high: { min: 38, max: 45, title: "Master of Dramatic Retaliation", desc: "Petty is an art form, and you are Picasso." },
            mid: { min: 26, max: 37, title: "Tactical Banter Strategist", desc: "Balances playful roasts with sweet peace." },
            low: { min: 15, max: 25, title: "Unbothered Saint", desc: "Zero energy wasted on drama. Maximum chill." }
        },
        questions: [
            { q: "He eats the last dessert without asking. You:", opts: [{t:"Plan snack revenge tomorrow", p:2}, {t:"Declare total war for 3 hours", p:3}, {t:"Let it go", p:1}] },
            { q: "You lose a board game. Reaction:", opts: [{t:"Demand immediate rematch", p:3}, {t:"Congratulate gracefully", p:1}, {t:"Insist they cheated", p:2}] }
        ]
    },
    {
        id: "vacation",
        title: "Vacation Compatibility",
        subtitle: "Travel Personality & Vibe Evaluation",
        tiers: {
            high: { min: 38, max: 45, title: "Aggressive Sightseeing General", desc: "Vacation is a sport and you play to win." },
            mid: { min: 26, max: 37, title: "The Balanced Explorer", desc: "Hits cool spots with plenty of room to relax." },
            low: { min: 15, max: 25, title: "Professional Poolside Sloth", desc: "Vacation means doing absolutely nothing." }
        },
        questions: [
            { q: "Day 1 wake-up time:", opts: [{t:"6:00 AM full itinerary", p:3}, {t:"9:00 AM relaxed start", p:2}, {t:"Whenever body decides", p:1}] },
            { q: "At airport 3 hours early. You:", opts: [{t:"Head to airport bar", p:2}, {t:"Anxiously check gate", p:3}, {t:"Sample perfumes", p:1}] }
        ]
    },
    {
        id: "flirt",
        title: "Flirt & Menace Level",
        subtitle: "Charisma & Tactical Banter Evaluation",
        tiers: {
            high: { min: 38, max: 45, title: "Full-Time Flirty Menace", desc: "Weaponized charisma mixed with unhinged banter." },
            mid: { min: 26, max: 37, title: "Calculated Charmer", desc: "Smooth, tactical, and naturally engaging." },
            low: { min: 15, max: 25, title: "Subtle Observer", desc: "Low-key, letting others make bold moves." }
        },
        questions: [
            { q: "Someone you like enters room:", opts: [{t:"Eye contact & slow smile", p:2}, {t:"Wildly sarcastic remark", p:3}, {t:"Wait for them to talk", p:1}] }
        ]
    },
    {
        id: "jealousy",
        title: "Jealousy & Control (Lighthearted)",
        subtitle: "Playful Protectiveness Evaluation",
        tiers: {
            high: { min: 38, max: 45, title: "Territorial Boss", desc: "Playfully protective. What's yours is yours." },
            mid: { min: 26, max: 37, title: "Tactical Guardian", desc: "Marks territory with smooth confidence." },
            low: { min: 15, max: 25, title: "Unshakable Confident", desc: "Secure, relaxed, and unbothered." }
        },
        questions: [
            { q: "Partner gets a flattering compliment. You:", opts: [{t:"Agree enthusiastically", p:1}, {t:"Put hand on shoulder", p:2}, {t:"'Hey, eyes over here!'", p:3}] }
        ]
    }
];

let currentQuiz = null;

// Utility: Fisher-Yates Shuffle algorithm
function shuffle(array) {
    let arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Render Home Screen
function showHome() {
    document.getElementById("home-screen").classList.remove("hidden");
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("results-screen").classList.add("hidden");

    const list = document.getElementById("index-list");
    list.innerHTML = "";
    indicesData.forEach(idx => {
        const btn = document.createElement("button");
        btn.className = "index-btn";
        btn.innerHTML = `${idx.title}<br><small style="font-weight:normal;opacity:0.8">${idx.subtitle}</small>`;
        btn.onclick = () => startQuiz(idx.id);
        list.appendChild(btn);
    });
}

// Start Quiz with Shuffled Options
function startQuiz(id) {
    currentQuiz = indicesData.find(i => i.id === id);
    document.getElementById("quiz-title").innerText = currentQuiz.title;
    document.getElementById("quiz-subtitle").innerText = currentQuiz.subtitle;

    const container = document.getElementById("questions-container");
    container.innerHTML = "";

    currentQuiz.questions.forEach((qObj, qIdx) => {
        const qCard = document.createElement("div");
        qCard.className = "question-card";

        const title = document.createElement("div");
        title.className = "question-text";
        title.innerText = `${qIdx + 1}. ${qObj.q}`;
        qCard.appendChild(title);

        // Randomly shuffle options per question
        const shuffledOpts = shuffle(qObj.opts);

        shuffledOpts.forEach(opt => {
            const label = document.createElement("label");
            label.className = "option-label";
            
            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = `q_${qIdx}`;
            radio.value = opt.p;
            radio.required = true;
            radio.onchange = updateProgress;

            label.appendChild(radio);
            label.appendChild(document.createTextNode(opt.t));
            qCard.appendChild(label);
        });

        container.appendChild(qCard);
    });

    document.getElementById("home-screen").classList.add("hidden");
    document.getElementById("quiz-screen").classList.remove("hidden");
    updateProgress();
}

function updateProgress() {
    const total = currentQuiz.questions.length;
    const answered = document.querySelectorAll("#quiz-form input[type='radio']:checked").length;
    document.getElementById("progress-bar").style.width = `${(answered / total) * 100}%`;
}

// Handle Submission
document.getElementById("quiz-form").onsubmit = function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    let totalScore = 0;
    for (let value of formData.values()) {
        totalScore += parseInt(value);
    }
    showResults(totalScore);
};

// Show Results & Setup Score Explorer
function showResults(score) {
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("results-screen").classList.remove("hidden");
    document.getElementById("score-val").innerText = score;

    let currentTier = null;
    const tiers = currentQuiz.tiers;

    if (score >= tiers.high.min) currentTier = tiers.high;
    else if (score >= tiers.mid.min) currentTier = tiers.mid;
    else currentTier = tiers.low;

    document.getElementById("tier-title").innerText = currentTier.title;
    document.getElementById("tier-desc").innerText = currentTier.desc;

    // Build Explorer Buttons for Other Ranges
    const tierBtns = document.getElementById("tier-buttons");
    tierBtns.innerHTML = "";
    document.getElementById("explorer-output").classList.add("hidden");

    Object.keys(tiers).forEach(key => {
        const t = tiers[key];
        const btn = document.createElement("button");
        btn.className = "btn-secondary";
        btn.innerText = `${t.title} (${t.min}-${t.max} pts)`;
        btn.onclick = () => {
            document.getElementById("explorer-output").classList.remove("hidden");
            document.getElementById("explorer-title").innerText = t.title;
            document.getElementById("explorer-desc").innerText = t.desc;
        };
        tierBtns.appendChild(btn);
    });
}

function restartCurrentQuiz() {
    if (currentQuiz) startQuiz(currentQuiz.id);
}

// Initial Launch
showHome();