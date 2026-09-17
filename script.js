// Complete Data for All 6 Indices (15 Questions Each)
const indicesData = [
    {
        id: "chaos",
        title: "1. Spontaneity & Chaos Index",
        subtitle: "Evaluates unhinged impulsive behavior vs. structured sanity",
        tiers: {
            high: { min: 38, max: 45, title: "Unapologetic Threat to Peace", desc: "Pure spontaneous chaos. Life with you is a roller coaster with no brakes." },
            mid: { min: 26, max: 37, title: "Calculated Adventurer", desc: "Sweet spot of fun. Exciting ideas, but you know when to hit the brakes." },
            low: { min: 15, max: 25, title: "Anchor of Stability", desc: "Voice of reason keeping everyone out of jail and on schedule." }
        },
        questions: [
            { q: "It's 11:00 PM on a Tuesday. You suddenly decide to:", opts: [{t:"Rearrange room furniture", p:3}, {t:"Order late night snacks", p:2}, {t:"Go to sleep", p:1}] },
            { q: "A sudden weekend trip suggestion pops up. You:", opts: [{t:"Pack in 5 minutes and leave", p:3}, {t:"Need 1 hour to check budget", p:2}, {t:"Decline; need 3 days warning", p:1}] },
            { q: "Partner shatters a glass on the floor. Response:", opts: [{t:"Yell 'DON'T MOVE!' dramatically", p:3}, {t:"Joke about butterfingers", p:2}, {t:"Quietly grab the broom", p:1}] },
            { q: "Your plan for a free Sunday afternoon:", opts: [{t:"Drive with no destination", p:3}, {t:"Try a new cafe", p:2}, {t:"Stick to routine chores", p:1}] },
            { q: "You see a rainstorm outside. You:", opts: [{t:"Run outside to dance/get soaked", p:3}, {t:"Watch from window with tea", p:2}, {t:"Complain about humidity", p:1}] },
            { q: "Shopping trip for 1 specific item ends up as:", opts: [{t:"Cart full of random impulse buys", p:3}, {t:"2 extra items you liked", p:2}, {t:"Strictly that 1 item", p:1}] },
            { q: "How do you handle a cancelled flight/train?", opts: [{t:"Pivot to a new random city", p:3}, {t:"Rebook calmly after a coffee", p:2}, {t:"Total panic/meltdown", p:1}] },
            { q: "Cooking dinner mood:", opts: [{t:"Throw random ingredients without recipe", p:3}, {t:"Modify an existing recipe slightly", p:2}, {t:"Follow exact measurements", p:1}] },
            { q: "Your camera roll is mostly:", opts: [{t:"Unblurrable chaos and memes", p:3}, {t:"A balanced mix of memories", p:2}, {t:"Neatly organized albums", p:1}] },
            { q: "If someone double-dares you to do a silly dance publicly:", opts: [{t:"Do it immediately with full power", p:3}, {t:"Do a small giggle/shuffle", p:2}, {t:"Refuse firmly", p:1}] },
            { q: "How do you handle micro-spontaneity?", opts: [{t:"Change plans 10 mins before meeting", p:3}, {t:"Open to slight route changes", p:2}, {t:"Hate last-minute changes", p:1}] },
            { q: "You find a mysterious locked box in an attic. You:", opts: [{t:"Try picking lock immediately", p:3}, {t:"Search for the key calmly", p:2}, {t:"Leave it alone", p:1}] },
            { q: "Your sleep schedule is:", opts: [{t:"Completely unpredictable", p:3}, {t:"Varies by 1-2 hours", p:2}, {t:"Identical every single day", p:1}] },
            { q: "When driving/navigating:", opts: [{t:"Take random side streets for fun", p:3}, {t:"Follow GPS mostly", p:2}, {t:"Never deviate from main road", p:1}] },
            { q: "Your wardrobe choices are based on:", opts: [{t:"Wild impulse matching daily mood", p:3}, {t:"Trendy but comfortable mix", p:2}, {t:"Pre-planned capsule outfits", p:1}] }
        ]
    },
    {
        id: "petty",
        title: "2. Argument Style & Petty Revenge Index",
        subtitle: "Conflict resolution, drama levels, and tactical pettiness",
        tiers: {
            high: { min: 38, max: 45, title: "Master of Dramatic Retaliation", desc: "Petty is an art form, and you are Picasso. Cold shoulder, weaponized silence, maximum drama." },
            mid: { min: 26, max: 37, title: "Tactical Banter Strategist", desc: "Balances playful roasts with sweet peace. Knows when to push and when to let go." },
            low: { min: 15, max: 25, title: "Unbothered Saint", desc: "Zero energy wasted on drama. Maximum chill, instant forgiveness." }
        },
        questions: [
            { q: "Partner eats the last slice of cake without asking. You:", opts: [{t:"Declare silent war for 4 hours", p:3}, {t:"Plan snack revenge tomorrow", p:2}, {t:"Let it go instantly", p:1}] },
            { q: "You lose a board game unfairly. Response:", opts: [{t:"Demolish game board / demand rematch", p:3}, {t:"Tease them about cheating", p:2}, {t:"Congratulate gracefully", p:1}] },
            { q: "When annoyed during a debate, your move is:", opts: [{t:"Hit them with cold silence", p:3}, {t:"Sarcastic witty remarks", p:2}, {t:"Direct logic and discussion", p:1}] },
            { q: "They forget an anniversary/milestone detail:", opts: [{t:"Dramatic guilt trip", p:3}, {t:"Gently remind with fake sadness", p:2}, {t:"No big deal, laugh it off", p:1}] },
            { q: "Someone cuts you off in traffic:", opts: [{t:"Long honk & intense side-eye", p:3}, {t:"Mutter a quick insult", p:2}, {t:"Ignore completely", p:1}] },
            { q: "Partner leaves wet towel on bed:", opts: [{t:"Put it on their pillow", p:3}, {t:"Tell them off firmly", p:2}, {t:"Hang it up yourself", p:1}] },
            { q: "How long can you hold a minor grudge?", opts: [{t:"Weeks (recorded in memory bank)", p:3}, {t:"A few hours until food arrives", p:2}, {t:"10 minutes tops", p:1}] },
            { q: "Partner spoils a movie ending by mistake:", opts: [{t:"Refuse to watch movies for a week", p:3}, {t:"Spoil their favorite show back", p:2}, {t:"Sigh and keep watching", p:1}] },
            { q: "During a minor disagreement, you tend to:", opts: [{t:"Bring up mistakes from 2021", p:3}, {t:"Focus on present issue", p:2}, {t:"Apologize just to end it", p:1}] },
            { q: "They take 4 hours to reply to a text while active online:", opts: [{t:"Wait 8 hours to reply back", p:3}, {t:"Send a sarcastic meme", p:2}, {t:"Assume they were busy", p:1}] },
            { q: "Partner criticizes your driving:", opts: [{t:"Pull over and hand them keys", p:3}, {t:"Defend your skills loudly", p:2}, {t:"Adjust speed calmly", p:1}] },
            { q: "When you prove you were right all along:", opts: [{t:"Do a full victory dance", p:3}, {t:"Say 'I told you so' once", p:2}, {t:"Keep it to yourself", p:1}] },
            { q: "Partner steals all the bed blankets at 3 AM:", opts: [{t:"Yank them back violently", p:3}, {t:"Wiggle back under blanket", p:2}, {t:"Grab an extra blanket quietly", p:1}] },
            { q: "If they give you a weak apology:", opts: [{t:"Reject until effort improves", p:3}, {t:"Ask for genuine clarification", p:2}, {t:"Accept immediately", p:1}] },
            { q: "Your go-to weapon in a roast battle:", opts: [{t:"Deep personal facts", p:3}, {t:"Quick lighthearted roasts", p:2}, {t:"Self-deprecating humor", p:1}] }
        ]
    },
    {
        id: "vacation",
        title: "3. Vacation & Travel Style Index",
        subtitle: "Sightseeing military drill vs. poolside sloth energy",
        tiers: {
            high: { min: 38, max: 45, title: "Aggressive Sightseeing General", desc: "Vacation is a sport and you play to win. 20k steps minimum daily." },
            mid: { min: 26, max: 37, title: "Balanced Explorer", desc: "Hits cool local spots with plenty of room to relax." },
            low: { min: 15, max: 25, title: "Professional Poolside Sloth", desc: "Vacation means doing absolutely nothing in luxurious peace." }
        },
        questions: [
            { q: "Day 1 vacation wake-up time:", opts: [{t:"6:00 AM full itinerary", p:3}, {t:"9:00 AM relaxed start", p:2}, {t:"Whenever body decides", p:1}] },
            { q: "Arriving at airport 3 hours early:", opts: [{t:"Anxiously check gate 10 times", p:3}, {t:"Grab a drink at airport lounge", p:2}, {t:"Barely make it to boarding", p:1}] },
            { q: "Packing style for a 3-day trip:", opts: [{t:"3 suitcases (options!)", p:3}, {t:"1 neatly packed carry-on", p:2}, {t:"1 backpack last minute", p:1}] },
            { q: "Sightseeing vs. Chilling ratio:", opts: [{t:"100% Sightseeing, no breaks", p:3}, {t:"50% Tour, 50% Relax", p:2}, {t:"100% Pool / Hotel bed", p:1}] },
            { q: "How do you pick restaurants on trip?", opts: [{t:"Researched 3 months prior", p:3}, {t:"Check Google ratings on spot", p:2}, {t:"Walk into first open place", p:1}] },
            { q: "Handling a ruined tour itinerary due to rain:", opts: [{t:"Panicked immediate rescheduling", p:3}, {t:"Switch to indoor museum", p:2}, {t:"Order room service & sleep", p:1}] },
            { q: "Vacation photography preference:", opts: [{t:"500 photo poses per spot", p:3}, {t:"A few nice scenic snapshots", p:2}, {t:"Zero photos; live in moment", p:1}] },
            { q: "Walking tolerance while exploring:", opts: [{t:"25,000 steps minimum", p:3}, {t:"10,000 steps max", p:2}, {t:"Taxi/Uber everywhere", p:1}] },
            { q: "Souvenir shopping strategy:", opts: [{t:"Gifts for entire extended family", p:3}, {t:"1 small memory magnet", p:2}, {t:"Buy nothing", p:1}] },
            { q: "Hotel choice priority:", opts: [{t:"Central spot close to tours", p:3}, {t:"Cozy boutique hotel", p:2}, {t:"5-star spa resort focus", p:1}] },
            { q: "Trying local street food:", opts: [{t:"Try everything, even weird stuff", p:3}, {t:"Try popular safe spots", p:2}, {t:"Stick to familiar comfort food", p:1}] },
            { q: "Budgeting during trip:", opts: [{t:"Track every cent on spreadsheet", p:3}, {t:"General rough daily budget", p:2}, {t:"YOLO (Look at card later)", p:1}] },
            { q: "Nightlife on trip:", opts: [{t:"Out until 4 AM exploring clubs", p:3}, {t:"Nice dinner and evening stroll", p:2}, {t:"In bed by 10 PM", p:1}] },
            { q: "Travel companion expectation:", opts: [{t:"Must match my speed 100%", p:3}, {t:"Flexible to group consensus", p:2}, {t:"Do your own thing, leave me", p:1}] },
            { q: "Post-vacation feeling:", opts: [{t:"Need another vacation to recover", p:3}, {t:"Refreshed and ready", p:2}, {t:"Sad it ended", p:1}] }
        ]
    },
    {
        id: "flirt",
        title: "4. Flirt & Tactical Menace Index",
        subtitle: "Evaluates charisma, playfulness, and chaotic charm",
        tiers: {
            high: { min: 38, max: 45, title: "Full-Time Flirty Menace", desc: "Weaponized charisma mixed with unhinged playful banter." },
            mid: { min: 26, max: 37, title: "Calculated Charmer", desc: "Smooth, tactical, and naturally engaging without trying too hard." },
            low: { min: 15, max: 25, title: "Subtle Observer", desc: "Low-key, letting others make bold moves while staying calm." }
        },
        questions: [
            { q: "Someone you like enters the room:", opts: [{t:"Wild sarcastic opening remark", p:3}, {t:"Eye contact & slow smile", p:2}, {t:"Wait for them to initiate", p:1}] },
            { q: "Your text messaging flirt style:", opts: [{t:"Constant teasing and memes", p:3}, {t:"Witty, fast replies", p:2}, {t:"Short, direct answers", p:1}] },
            { q: "Complimenting someone:", opts: [{t:"Bold, unexpected hyper-specific line", p:3}, {t:"Warm genuine compliment", p:2}, {t:"Rarely voice compliments", p:1}] },
            { q: "Reaction to getting teased:", opts: [{t:"Roast them back harder immediately", p:3}, {t:"Laugh and play along", p:2}, {t:"Get slightly bashful", p:1}] },
            { q: "Eye contact game strength:", opts: [{t:"Intense hold until they look away", p:3}, {t:"Natural balance", p:2}, {t:"Shy away quickly", p:1}] },
            { q: "First date location choice:", opts: [{t:"Arcade / Axe throwing", p:3}, {t:"Cozy cocktail lounge", p:2}, {t:"Quiet coffee shop", p:1}] },
            { q: "Handling awkward silence:", opts: [{t:"Break it with a weird question", p:3}, {t:"Smoothly change topic", p:2}, {t:"Sit in silence nervously", p:1}] },
            { q: "Playful physical contact (arm touch):", opts: [{t:"Constant natural touch", p:3}, {t:"Occasional tactical touch", p:2}, {t:"Strictly personal space", p:1}] },
            { q: "If your crush looks at you across room:", opts: [{t:"Wink or make funny face", p:3}, {t:"Smile warmly", p:2}, {t:"Look away fast", p:1}] },
            { q: "Nicknames for partners:", opts: [{t:"Unhinged chaotic nicknames", p:3}, {t:"Cute standard pet names", p:2}, {t:"Strictly real name", p:1}] },
            { q: "Banter energy level:", opts: [{t:"Relentless roast battle", p:3}, {t:"Light witty back-and-forth", p:2}, {t:"Polite gentle conversation", p:1}] },
            { q: "Confidence when making first move:", opts: [{t:"100% fearless drop-in", p:3}, {t:"Calculated when signals clear", p:2}, {t:"Hesitant / Wait forever", p:1}] },
            { q: "Using double-meanings / subtext:", opts: [{t:"Heavy use of playful subtext", p:3}, {t:"Occasional flirt hints", p:2}, {t:"Direct explicit language", p:1}] },
            { q: "Your vibe in group settings:", opts: [{t:"Center stage entertainer", p:3}, {t:"Engaging listener/contributor", p:2}, {t:"Quiet observer background", p:1}] },
            { q: "Flirting after years in relationship:", opts: [{t:"Still treat it like day 1 chase", p:3}, {t:"Sweet consistent romance", p:2}, {t:"Comfortable roommate vibes", p:1}] }
        ]
    },
    {
        id: "jealousy",
        title: "5. Protectiveness & Jealousy Index",
        subtitle: "Evaluates territorial instincts and unbothered confidence",
        tiers: {
            high: { min: 38, max: 45, title: "Territorial Guardian", desc: "Playfully protective. What's yours is yours, no exceptions." },
            mid: { min: 26, max: 37, title: "Tactical Protector", desc: "Marks territory smoothly without creating scene." },
            low: { min: 15, max: 25, title: "Unshakable Zen Master", desc: "100% secure, totally relaxed, zero envy." }
        },
        questions: [
            { q: "Partner gets a heavy flirt compliment at party:", opts: [{t:"Step in immediately and claim territory", p:3}, {t:"Put arm around partner gently", p:2}, {t:"Smile proudly; they got good taste", p:1}] },
            { q: "Partner mentions an attractive new coworker:", opts: [{t:"Investigate background thoroughly", p:3}, {t:"Ask a few curious questions", p:2}, {t:"Unbothered, zero concern", p:1}] },
            { q: "Partner locks phone screen quickly when you walk by:", opts: [{t:"Demand to see screen instantly", p:3}, {t:"Wonder quietly for a second", p:2}, {t:"Don't care at all", p:1}] },
            { q: "Partner spends weekend out with friends:", opts: [{t:"Hourly check-in texts requested", p:3}, {t:"'Have fun!' with 1 night text", p:2}, {t:"See you Sunday night!", p:1}] },
            { q: "Partner's ex comments 🔥 on their photo:", opts: [{t:"Delete comment / address partner", p:3}, {t:"Raise an eyebrow", p:2}, {t:"Ignore completely", p:1}] },
            { q: "Sharing favorite personal items/clothes:", opts: [{t:"Hands off my stuff!", p:3}, {t:"Share with permission", p:2}, {t:"Take whatever you want", p:1}] },
            { q: "Partner hugs a close friend for 5 seconds long:", opts: [{t:"Count seconds out loud", p:3}, {t:"Notice but stay chill", p:2}, {t:"Completely normal", p:1}] },
            { q: "Partner takes an hour to reply during night out:", opts: [{t:"Send follow-up question marks", p:3}, {t:"Wait for them to update", p:2}, {t:"Assume they are having fun", p:1}] },
            { q: "How protective are you over food on your plate?", opts: [{t:"'JOEY DOESN'T SHARE FOOD!'", p:3}, {t:"Allow 1 bite max", p:2}, {t:"Take whatever you want", p:1}] },
            { q: "Partner goes to dinner 1-on-1 with new friend:", opts: [{t:"Need full background check", p:3}, {t:"Glad they are making friends", p:2}, {t:"Totally comfortable", p:1}] },
            { q: "If someone flirts with YOU in front of partner:", opts: [{t:"Shut it down dramatically to show loyalty", p:3}, {t:"Politely decline", p:2}, {t:"Enjoy the free compliment", p:1}] },
            { q: "Jealousy level during sports/games:", opts: [{t:"Must win at all costs", p:3}, {t:"Competitive but fun", p:2}, {t:"Just participating", p:1}] },
            { q: "Partner posts a stunning solo selfie:", opts: [{t:"Comment 'MINE' immediately", p:3}, {t:"Like & comment fire emoji", p:2}, {t:"Tell them in person", p:1}] },
            { q: "When partner gets hit on in front of you:", opts: [{t:"Intervene loudly", p:3}, {t:"Walk over calmly with a drink", p:2}, {t:"Watch partner handle it", p:1}] },
            { q: "Root cause of your protectiveness:", opts: [{t:"High passion & boundary holding", p:3}, {t:"Balanced care", p:2}, {t:"Total trust in self & partner", p:1}] }
        ]
    },
    {
        id: "domestic",
        title: "6. Daily Habits & Domestic Sanity Index",
        subtitle: "Evaluates roommate compatibility, cleanliness, and lifestyle friction",
        tiers: {
            high: { min: 38, max: 45, title: "Surgical Order Master", desc: "Perfectionist standards. Dishes cleared instantly, military bed fold." },
            mid: { min: 26, max: 37, title: "Balanced Co-Lover", desc: "Clean enough to be healthy, messy enough to be happy." },
            low: { min: 15, max: 25, title: "Casual Chaos Creature", desc: "Clutter is comfort. Dishes can wait 3 business days." }
        },
        questions: [
            { q: "Dishes in sink status:", opts: [{t:"Washed immediately after eating", p:3}, {t:"Done at end of night", p:2}, {t:"Wait till sink is overflowing", p:1}] },
            { q: "Making the bed in the morning:", opts: [{t:"Every single day without fail", p:3}, {t:"Only on weekends/guests", p:2}, {t:"Never, sleeping in it anyway", p:1}] },
            { q: "Folded laundry management:", opts: [{t:"Put away in drawers right away", p:3}, {t:"Sits in basket for 2 days", p:2}, {t:"The 'Chair' is the wardrobe", p:1}] },
            { q: "Toothpaste squeezing method:", opts: [{t:"Rolled neatly from bottom", p:3}, {t:"Standard middle squeeze", p:2}, {t:"Aggressive chaotic mash", p:1}] },
            { q: "Toilet paper roll direction:", opts: [{t:"Must roll OVER (will fix it)", p:3}, {t:"Prefer over, won't fix", p:2}, {t:"Don't notice/care", p:1}] },
            { q: "Groceries organization in fridge:", opts: [{t:"Categorized & labels facing front", p:3}, {t:"Grouped reasonably", p:2}, {t:"Shoved wherever fits", p:1}] },
            { q: "Handling household chores routine:", opts: [{t:"Strict chore schedule spreadsheet", p:3}, {t:"Split as needed organically", p:2}, {t:"Clean only when filthy", p:1}] },
            { q: "Thermostat temperature control:", opts: [{t:"Locked at exact degree forever", p:3}, {t:"Adjusted per season", p:2}, {t:"Wild constant adjustments", p:1}] },
            { q: "Shoe policy inside home:", opts: [{t:"Strictly OFF at front door", p:3}, {t:"Off in carpeted areas", p:2}, {t:"Walk inside anywhere", p:1}] },
            { q: "Trash bin full status:", opts: [{t:"Take out when 80% full", p:3}, {t:"Take out when full", p:2}, {t:"Play Jenga until it overflows", p:1}] },
            { q: "Unscheduled guest drops by in 15 mins:", opts: [{t:"Panic clean at light speed", p:3}, {t:"Quick 2-minute tidy", p:2}, {t:"They see the house as is", p:1}] },
            { q: "Expired food in fridge:", opts: [{t:"Tossed 1 day past expiration", p:3}, {t:"Smell test first", p:2}, {t:"Keep until visible mold", p:1}] },
            { q: "Nighttime lockdown routine:", opts: [{t:"Check all doors/windows twice", p:3}, {t:"Lock main door", p:2}, {t:"Forget to lock front door", p:1}] },
            { q: "Shower drain hair cleanup:", opts: [{t:"Cleaned after every shower", p:3}, {t:"Cleaned weekly", p:2}, {t:"Wait until water backs up", p:1}] },
            { q: "Shopping list behavior:", opts: [{t:"Sorted by store aisle layout", p:3}, {t:"Basic bullet point list", p:2}, {t:"Shop entirely from memory", p:1}] }
        ]
    }
];

let currentQuiz = null;

// Fisher-Yates Shuffle Algorithm (Ensures random order per load)
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
        btn.innerHTML = `${idx.title}<br><small style="font-weight:normal;opacity:0.8;font-size:0.85rem;">${idx.subtitle}</small>`;
        btn.onclick = () => startQuiz(idx.id);
        list.appendChild(btn);
    });
}

// Start Quiz with Randomly Shuffled Options
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

        // Shuffle options dynamically so scores cannot be guessed
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
    window.scrollTo(0, 0);
    updateProgress();
}

function updateProgress() {
    const total = currentQuiz.questions.length;
    const answered = document.querySelectorAll("#quiz-form input[type='radio']:checked").length;
    document.getElementById("progress-bar").style.width = `${(answered / total) * 100}%`;
}

// Handle Form Submission
document.getElementById("quiz-form").onsubmit = function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    let totalScore = 0;
    for (let value of formData.values()) {
        totalScore += parseInt(value);
    }
    showResults(totalScore);
};

// Show Results & Setup Score Tier Explorer
function showResults(score) {
    document.getElementById("quiz-screen").classList.add("hidden");
    document.getElementById("results-screen").classList.remove("hidden");
    window.scrollTo(0, 0);
    document.getElementById("score-val").innerText = score;

    let currentTier = null;
    const tiers = currentQuiz.tiers;

    if (score >= tiers.high.min) currentTier = tiers.high;
    else if (score >= tiers.mid.min) currentTier = tiers.mid;
    else currentTier = tiers.low;

    document.getElementById("tier-title").innerText = currentTier.title;
    document.getElementById("tier-desc").innerText = currentTier.desc;

    // Build Interactive Tier Explorer
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

// Launch Home View
showHome();
