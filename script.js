const wyrQuestions = [
    ["Satan","Have wood chips for teeth or have Velcro as finger nails?"],
    ["Pixi","Never be able to eat your hyper fixation food or never be allowed to talk about your special interest?"],
    ["Duckie","Be a cat or be a human with an immortal pet cat companion that you can communicate with?"],
    ["Pixi","Wear a wet pair of skinny jeans all day that you can't take off or dig out the disgusting squishy food from the bottom of the sink and hold it in your hand all day?"],
    ["Arcane","Never see the color orange including any of its hues or shades or everything colored orange from now on taste like orange peels?"],
    ["Pixi","Wear wet socks made of polyester for 8 hours or listen to someone chew loudly with their mouth open for 30 minutes?"],
    ["Shami","Never play video games ever again or never listen to music ever again?"],
    ["Pixi","Wear super comfy clothes every day but they never match your style or wear your favorite outfit but it’s slightly itchy?"],
    ["Artie","Compete in a talent show in another planet or judge an Earth talent show full of aliens?"],
    ["Folivore","Have floppy bones in your arms or have floppy bones in your legs?"],
    ["Van","Have tongues for fingers or a finger for a tongue?"],
    ["Soldier","Participate in the Gumball 3000 with an Opel Astra Coupe with a Koenigsegg TFG V3 engine or participate in an F1 race with a minivan that has a Devel V16 in the back?"],
    ["Shami","Have 3 meter long hair that can't be tied up or 3 meter long nails that can never be cut?"],
    ["Satan","Fight Batman or a very pissed off Spider-man?"],
    ["Pixi","Have a tiny gremlin live in your sock drawer that insults you daily or hear a child giggle from under your bed every night?"],
    ["Folivore","Have to eat everything using only a large straw or have to eat one very chewy straw per day?"],
    ["Pixi","Wake up once a week completely naked in a random public place or have your inner thoughts read aloud 24/7?"],
    ["Poggy","Have unlimited bacon but no more games or games, unlimited games, but no more games?"],
    ["Artie","Have to babysit 50 alien babies for a day or turn into a space llama for a week?"],
    ["Gobblo","Have a roomba that clean flawlessly but scream bloody murder every time it bumps into things or have a roomba that actively makes your house dirtier but constantly giving you sweet talk in the sexiest voice you can imagine?"],
    ["Duckie","Clean up cat vomit with your bare hand once or eat an entire meal of foods you really dislike?"],
    ["Soldier","Get the next gen NVIDIA GPU, but it will only last 3 months or Get an Nvidia 5090, but you can only play Sims 2 with it?"],
    ["Folivore","Bint your photos or print your bogos?"],
    ["Jermy","Be pretty or pretty dumb?"],
    ["Duckie","Spend all day walking around with shoes on and your sock twisted so the seam is under your toes or walk around all day barefoot on a dirty hardwood floor that has crumbs, hair, and occasional sticky spots?"],
    ["Duckie","Eat 5 hotdogs or eat 6 hotdogs?"],
    ["Pixi","Have spaghetti for hair that grows back every night or sweat mayonnaise forever?"],
    ["Pixi","Fall in love with a new inanimate object every week and feel heartbreak every time it’s gone or be emotionally bonded to a Roomba?"],
    ["Soldier","Own a sword cane but a random person will always want a duel or own a bow but you will be unable to string it?"],
    ["Michal","Flap your arms like a chicken for 30 minutes to go on an all expenses covered trip or loudly quack like a duck for an hour to teleport anywhere?"],
    ["Duckie","Spend 30 minutes outside in public during a hot, sunny Texas summer day or have to place 10 stressful phone calls to strangers for things like changing phone plans, arguing with property management, or bank fees?"],
    ["Soldier","Go on a one way trip to the moon and plant a flag with your face on it or change any country's flag to whatever you design, but you cannot set foot in that country anymore?"],
    ["Folivore","Be able to talk to people but never go anywhere you want or never talk to anyone but be able to go anywhere?"]
];

const wyrExtraQuestions = [
    ["The Hivemind", "Live in Minecraft with real life foods or live IRL with Minecraft foods?"],
    ["The Hivemind", "Fight 100 duck-sized horses or one horse-sized duck?"],
    ["The Hivemind", "Live without Discord or without Twitch?"],
    ["The Hivemind", "Have the ability to see 1 minute into the future or 100 years into the future?"],
    ["The Hivemind", "Not use AC for the rest of your life or not use the internet for the rest of your life?"],
    ["The Hivemind", "Have a personal maid or have a personal chef?"],
    ["The Hivemind", "Be the size of an ant or be the size of a giraffe?"],
    ["The Hivemind", "Have to drive in reverse or use your phone upside down?"],
    ["The Hivemind", "Lose the ability to see or lose the ability to speak?"],
    ["The Hivemind", "Be always stuck in traffic but find a perfect parking spot or never hit traffic but always take forever to park?"],
    ["The Hivemind", "Give up cursing forever or give up potatoes for 10 years?"],
    ["The Hivemind", "Have to hunt for food or have to grow your food?"],
    ["The Hivemind", "Go back to kindergarten with everything you know now or know now everything your future self will learn?"],
    ["The Hivemind", "Always feel slightly too hot or always feel slightly too cold?"],
    ["The Hivemind", "Be able to control the weather or talk to animals?"],
    ["The Hivemind", "Live in a haunted house or be stranded on a deserted island?"],
    ["The Hivemind", "Have super strength or super speed?"],
    ["The Hivemind", "Never have to sleep or never have to eat?"],
    ["The Hivemind", "Be able to only speak in movie quotes or only communicate via song lyrics?"],
    ["The Hivemind", "Only play one video game for the rest of your life or never play video games again?"],
    ["The Hivemind", "Have a rewind button for bad decisions or a fast-forward button to skip boring moments?"],
    ["The Hivemind", "Be able to teleport but only to places you’ve been or be able to fly but only at walking speed?"],
    ["The Hivemind", "Always have a perfect comeback or always have the perfect joke?"],
    ["The Hivemind", "Be the smartest person in the room or the funniest person in the room?"],
    ["The Hivemind", "Live without music or live without movies and TV?"],
    ["The Hivemind", "Have a dragon as a pet or a unicorn as a pet?"],
    ["The Hivemind", "Be able to breathe in space or survive underwater indefinitely?"],
    ["The Hivemind", "Only wear your favorite outfit forever or never wear the same thing twice?"],
    ["The Hivemind", "Be famous on Twitch or on YouTube?"],
    ["The Hivemind", "Always win at video games but lose in real life or always win in real life but lose at video games?"],
    ["The Hivemind", "Speak with animals or speak every human language?"],
    ["The Hivemind", "Eat your favorite meal every day or never eat it again?"],
    ["The Hivemind", "Have a pet dinosaur or a pet robot?"],
    ["The Hivemind", "Be able to pause time or rewind time?"],
    ["The Hivemind", "Spend a year traveling the world or settle in a dream city forever?"],
    ["The Hivemind", "Have a private jet or a luxury yacht?"],
    ["The Hivemind", "Be able to shapeshift into any animal or into any person?"],
    ["The Hivemind", "Own a lightsaber or a hoverboard?"],
    ["The Hivemind", "Be in a real-life RPG or in a real-life superhero universe?"],
    ["The Hivemind", "Only watch horror movies or only watch comedies?"],
    ["The Hivemind", "Have a bottomless snack bowl or an infinite game library?"],
    ["The Hivemind", "Be able to visit any fictional world or bring any fictional character to life?"],
    ["The Hivemind", "Speak only in rhymes or speak only in riddles?"],
    ["The Hivemind", "Always have the latest tech or always have the coolest fashion?"],
    ["The Hivemind", "Have all your clothes be one size too big or one size too small?"],
    ["The Hivemind", "Only be able to whisper or only be able to shout?"],
    ["The Hivemind", "Have a personal theme song play whenever you enter a room or a laugh track whenever you speak?"],
    ["The Hivemind", "See the world in black and white or only via animated cartoons?"],
    ["The Hivemind", "Wake up with a random superpower each day or keep one permanent mediocre superpower?"],
    ["The Hivemind", "Have a rewind day option every Monday or a skip day option every Friday?"],
    ["The Hivemind", "Only eat spicy food forever or never taste anything again?"],
    ["The Hivemind", "Have the ability to stop time when sneezing or teleport when yawning?"],
    ["The Hivemind", "Own a spaceship or a time machine?"],
    ["The Hivemind", "Be able to talk to your past self or your future self?"],
    ["The Hivemind", "Get free delivery for life or free streaming subscriptions forever?"],
    ["The Hivemind", "Live inside a video game or have the video game characters come to your world?"],
    ["The Hivemind", "Always know when someone is lying or never be lied to again?"],
    ["The Hivemind", "Lose your sense of taste or your sense of direction?"],
    ["The Hivemind", "Have fingers as long as your arms or arms as short as your fingers?"],
    ["The Hivemind", "Have your dream PC but no internet or an old laptop with blazing-fast internet?"],
    ["The Hivemind", "Be able to sleep instantly or have insomnia but wake up fully refreshed in 4 hours?"],
    ["The Hivemind", "Be a famous meme or invent the next viral trend?"],
    ["The Hivemind", "Be able to walk through walls or never get tired?"],
    ["The Hivemind", "Have random sound effects play when you move or dramatic music follow your emotions?"],
    ["The Hivemind", "Own a floating house or a house underground?"],
    ["The Hivemind", "Wear winter clothes in summer or summer clothes in winter?"],
    ["The Hivemind", "Have eyebrows that sing or eyelashes that blink to the beat of music?"],
    ["The Hivemind", "Have to say everything twice or only speak in third person?"],
    ["The Hivemind", "Turn invisible when embarrassed or float when happy?"],
    ["The Hivemind", "Have a rewind button for dreams or fast-forward through awkward conversations?"],
    ["The Hivemind", "Never get bored or never be embarrassed again?"],
    ["The Hivemind", "Have background music that reflects your mood or a narrator commentating your actions?"],
    ["The Hivemind", "Have free meals forever or free snacks forever?"],
    ["The Hivemind", "Forget your most embarrassing memory or forget your cringiest online post?"],
    ["The Hivemind", "Wake up to the smell of fresh cookies or the sound of ocean waves every day?"],
    ["The Hivemind", "Control fire with your mind or water with your hands?"],
    ["The Hivemind", "Only speak in emojis or only type using memes?"],
    ["The Hivemind", "Always win coin flips or always guess rock-paper-scissors correctly?"]
];

let currentWyrIndex = 0;
let tempWyrQuestion = true;

const TLArray = [
    ["Pixi","Genshin Characters","https://tiermaker.com/create/genshin-impact-characters-ver-40--harbingers-16007762"],
    ["Penguin", "Solar System", "https://tiermaker.com/create/the-solar-systems-planets-dwarfs-and-major-moons-15870678"],
    ["Duckie","Pilk Derivatives","https://tiermaker.com/create/liquids-to-mix-with-milk-1642274"],
    ["Folivore","Alien Emojis","https://tiermaker.com/create/alien-emojis-tier-list-15715935"],
    ["Poggy", "Aliens in Charge", "https://tiermaker.com/create/aliens-in-charge-18378348"],
    ["Duckie","Ironmouse Models","https://tiermaker.com/create/ironmouses-every-single-model-v2-1663714"],
    ["Pixi","90s-00s Animes","https://tiermaker.com/create/90s-00s-anime-16890063"],
    ["Duckie","Scents and Smells","https://tiermaker.com/create/scents-and-smells-705831"],
    ["Pixi","Studio Ghibli Foods","https://tiermaker.com/create/studio-ghibli-food-16211598"],
    ["Duckie","Snacks and Candy","https://tiermaker.com/create/american-snacks-and-candyyy-806672"],
    ["Pixi","Disney Animations","https://tiermaker.com/create/walt-disney-animation-studios-films-through-2021-1413224"],
    ["Duckie","Periodic Table","https://tiermaker.com/create/periodic-table-of-elements-932440"],
    ["Pixi","Studiio Ghibli Animations","https://tiermaker.com/create/all-studio-ghibli-animation-films-tier-list-16181846-3"],
    ["Folivore","Alien Abduction","https://tiermaker.com/create/alien-abduction-tier-16681067"],
    ["Duckie","Frieren Expressions","https://tiermaker.com/create/oops-its-all-frieren-16900351"],
    ["Pixi","Soup","https://tiermaker.com/create/definitive-soup-tier-list-884156"],
    ["Folivore","Cat Memes","https://tiermaker.com/create/cat-memes-1172968"],
    ["Folivore","Potato","https://tiermaker.com/create/extensive-potato-preparation-tier-list-186670"],
    ["Pixi","Cereals","https://tiermaker.com/create/breakfast-cereals-162129"],
    ["Duckie","Frieren Characters","https://tiermaker.com/create/769--okzk-oo-o79867867-1083475 "]
]
const TLExtraArray = [
    ["The Hivemind", "Spongebob Characters", "https://tiermaker.com/create/ultimate-spongebob-character-tier-list-138457"],
    ["The Hivemind", "CS:GO Maps", "https://tiermaker.com/create/csgo-competitive-maps-may-2021-995433"],
    ["The Hivemind", "ATLA Characters", "https://tiermaker.com/create/avatar-the-last-airbender-ultimate-character-rank-617330"],
    ["The Hivemind", "Krabby Patties", "https://tiermaker.com/create/spongebob-krabby-patties-15693516"],
    ["The Hivemind", "Drinks", "https://tiermaker.com/create/types-of-drinks-584882"],
    ["The Hivemind", "Esports Logos", "https://tiermaker.com/create/esports--logos-731003"],
    ["The Hivemind", "Ice Cream Flavors", "https://tiermaker.com/create/ice-cream-flavors-48482"],
    ["The Hivemind", "CS:GO Weapons", "https://tiermaker.com/create/csgo-weapons-15509224"],
    ["The Hivemind", "Minecraft Woods", "https://tiermaker.com/create/minecraft-wood-types-16567643"],
    ["The Hivemind", "Fruits", "https://tiermaker.com/create/fruit-complete-48215"]
]
let currentTLIndex = 0;

function generateRandomString() {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    let length = Math.floor((Math.random()+0.6)*10);
    for (let i = 0; i < length; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
}

function setTitleToRick(state){
    const rick = document.getElementById('title-rick');
    const title = document.getElementById('title');
    if(state){
        rick.classList.remove("hidden");
        title.classList.add("hidden");
    } else {
        rick.classList.add("hidden");
        title.classList.remove("hidden");
    }
}

function setTitleToJoomer(state){
    const joomer = document.getElementById('title-joomer');
    const title = document.getElementById('title');
    if(state){
        joomer.classList.remove("hidden");
        title.classList.add("hidden");
    } else {
        joomer.classList.add("hidden");
        title.classList.remove("hidden");
    }
}

function setTitleToChill(state){
    const chill = document.getElementById('title-chill');
    const title = document.getElementById('title');
    if(state){
        chill.classList.remove("hidden");
        title.classList.add("hidden");
    } else {
        chill.classList.add("hidden");
        title.classList.remove("hidden");
    }
}

function setTitleToFace(state){
    const face = document.getElementById('title-face');
    const title = document.getElementById('title');
    if(state){
        face.classList.remove("hidden");
        title.classList.add("hidden");
    } else {
        face.classList.add("hidden");
        title.classList.remove("hidden");
    }
}

function setTitleToCockroach(state){
    const cockroach = document.getElementById('title-cockroach');
    const title = document.getElementById('title');
    if(state){
        cockroach.classList.remove("hidden");
        title.classList.add("hidden");
    } else {
        cockroach.classList.add("hidden");
        title.classList.remove("hidden");
    }
}

function setWyrNavigation(){
    const wyrCredit = document.getElementById('wyr-credit');
    const blurryCredit = document.getElementById('blurry-wyr-credit');
    const wyrQuestionDisplay = document.getElementById('wyr-question-text');
    const prevWyrBtn = document.getElementById('prev-wyr-btn');
    const nextWyrBtn = document.getElementById('next-wyr-btn');

    if(wyrCredit){
        wyrCredit.addEventListener('click', () => {
            if(tempWyrQuestion){
                blurryCredit.textContent="Your Mom";
                blurryCredit.classList.remove("blur");
                return;
            }
            if(currentWyrIndex < wyrQuestions.length){
                blurryCredit.textContent=wyrQuestions[currentWyrIndex][0];
            } else {
                blurryCredit.textContent=wyrExtraQuestions[currentWyrIndex-wyrQuestions.length][0];
            }
            blurryCredit.classList.remove("blur");
        });
    }

    if (prevWyrBtn) {
        prevWyrBtn.addEventListener('click', () => {
            if(currentWyrIndex <= 0) return;
            currentWyrIndex--;
            updateWyrDisplay();
        });
    }

    if (nextWyrBtn) {
        nextWyrBtn.addEventListener('click', () => {
            if(tempWyrQuestion){
                tempWyrQuestion = false;
                updateWyrDisplay();
                return;
            }
            if(currentWyrIndex >= wyrQuestions.length + wyrExtraQuestions.length) return;
            currentWyrIndex++;
            updateWyrDisplay();
        });
    }

    function updateWyrDisplay() {
        blurryCredit.textContent=generateRandomString();
        blurryCredit.classList.add("blur");
        if (wyrQuestionDisplay) {
            if(tempWyrQuestion){
                if (prevWyrBtn) {
                    prevWyrBtn.classList.remove('!bg-pink-700', '!hover:bg-pink-800', '!dark:bg-pink-600', '!dark:hover:bg-pink-700', '!dark:focus:ring-pink-800');
                    prevWyrBtn.classList.add('!bg-gray-500', '!cursor-not-allowed', '!dark:bg-gray-700');
                }
                wyrQuestionDisplay.textContent = "Would you rather look at this placeholder forever or get started?";
                return;
            }
            if(currentWyrIndex < wyrQuestions.length){
                wyrQuestionDisplay.textContent = wyrQuestions[currentWyrIndex][1];
            } else {
                wyrQuestionDisplay.textContent = wyrExtraQuestions[currentWyrIndex-wyrQuestions.length][1];
            }
        }
        setWryProgress()

        setTitleToRick(false);
        setTitleToJoomer(false);
        setTitleToChill(false);
        setTitleToFace(false);
        setTitleToCockroach(false);

        if(currentWyrIndex === 7 || currentWyrIndex === 8 || currentWyrIndex === 19 || currentWyrIndex === 28 || currentWyrIndex === 67){
            setTitleToRick(true);
        } else if(currentWyrIndex === 15 || currentWyrIndex === 32 || currentWyrIndex === 53 || currentWyrIndex === 45){
            setTitleToJoomer(true);
        } else if(currentWyrIndex === 21 || currentWyrIndex === 42 || currentWyrIndex === 37 || currentWyrIndex === 59 || currentWyrIndex === 77){
            setTitleToChill(true);
        }
        if(currentWyrIndex === 0){
            if (prevWyrBtn) {
                prevWyrBtn.classList.remove('!bg-pink-700', '!hover:bg-pink-800', '!dark:bg-pink-600', '!dark:hover:bg-pink-700', '!dark:focus:ring-pink-800');
                prevWyrBtn.classList.add('!bg-gray-500', '!cursor-not-allowed', '!dark:bg-gray-700');
            }
        } else {
            if (prevWyrBtn) {
                prevWyrBtn.disabled = false;
                prevWyrBtn.classList.add('!bg-pink-700', '!hover:bg-pink-800', '!dark:bg-pink-600', '!dark:hover:bg-pink-700', '!dark:focus:ring-pink-800');
                prevWyrBtn.classList.remove('!bg-gray-500', '!cursor-not-allowed', '!dark:bg-gray-700');
            }
        }

        if (currentWyrIndex === (wyrQuestions.length + wyrExtraQuestions.length) - 1) {
            if (nextWyrBtn) {
                nextWyrBtn.disabled = true;
                nextWyrBtn.classList.remove('!bg-pink-700', '!hover:bg-pink-800', '!dark:bg-pink-600', '!dark:hover:bg-pink-700', '!dark:focus:ring-pink-800');
                nextWyrBtn.classList.add('!bg-gray-500', '!cursor-not-allowed', '!dark:bg-gray-700');
            }
        } else {
            if (nextWyrBtn) {
                nextWyrBtn.disabled = false;
                nextWyrBtn.classList.add('!bg-pink-700', '!hover:bg-pink-800', '!dark:bg-pink-600', '!dark:hover:bg-pink-700', '!dark:focus:ring-pink-800');
                nextWyrBtn.classList.remove('!bg-gray-500', '!cursor-not-allowed', '!dark:bg-gray-700');
            }
        }
    }

    updateWyrDisplay();
}

function setWryProgress() {
    const progressBar = document.getElementById('wyr-progress');
    progressBar.setAttribute('value', String(currentWyrIndex/(wyrQuestions.length-1) * 100));
}


function setTLNavigation(){
    const tlCredit = document.getElementById('tl-credit');
    const blurryTLCredit = document.getElementById('blurry-tl-credit');
    const TLButton = document.getElementById('tl-button');
    const prevTLBtn = document.getElementById('prev-tl-btn');
    const nextTLBtn = document.getElementById('next-tl-btn');

    if(tlCredit){
        tlCredit.addEventListener('click', () => {
            if(currentTLIndex < TLArray.length){
                blurryTLCredit.textContent=TLArray[currentTLIndex][0];
            } else {
                blurryTLCredit.textContent=TLExtraArray[currentTLIndex-TLArray.length][0];
            }
            blurryTLCredit.classList.remove("blur");
        });
    }

    if (prevTLBtn) {
        prevTLBtn.addEventListener('click', () => {
            if(currentTLIndex <= 0) return;
            currentTLIndex--;
            updateTLDisplay();
        });
    }

    if (nextTLBtn) {
        nextTLBtn.addEventListener('click', () => {
            if(currentTLIndex > TLArray.length + TLExtraArray.length) return;
            currentTLIndex++;
            updateTLDisplay();
        });
    }

    function updateTLDisplay(){
        blurryTLCredit.textContent=generateRandomString();
        blurryTLCredit.classList.add("blur");
        if (TLButton) {
            if(currentTLIndex < TLArray.length){
                TLButton.textContent = TLArray[currentTLIndex][1];
                TLButton.setAttribute("href", TLArray[currentTLIndex][2])
            } else {
                TLButton.textContent = TLExtraArray[currentTLIndex-TLArray.length][1];
                TLButton.setAttribute("href", TLExtraArray[currentTLIndex-TLArray.length][2])
            }
        }
        setTLProgress()

        setTitleToRick(false);
        setTitleToJoomer(false);
        setTitleToChill(false);
        setTitleToFace(false);
        setTitleToCockroach(false);

        if(currentTLIndex === 5 || currentTLIndex === 19){
            setTitleToRick(true);
        } else if(currentTLIndex === 11 || currentTLIndex === 25){
            setTitleToChill(true);
        } else if(currentTLIndex === 15 || currentTLIndex === 18 || currentTLIndex === 28){
            setTitleToFace(true);
        } else if(currentTLIndex === 2 || currentTLIndex === 21){
            setTitleToCockroach(true);
        }

        if(currentTLIndex === 0){
            if (prevTLBtn) {
                prevTLBtn.disabled = true;
                prevTLBtn.classList.remove('!bg-pink-700', '!hover:bg-pink-800', '!dark:bg-pink-600', '!dark:hover:bg-pink-700', '!dark:focus:ring-pink-800');
                prevTLBtn.classList.add('!bg-gray-500', '!cursor-not-allowed', '!dark:bg-gray-700');
            }
        } else {
            if (prevTLBtn) {
                prevTLBtn.disabled = false;
                prevTLBtn.classList.add('!bg-pink-700', '!hover:bg-pink-800', '!dark:bg-pink-600', '!dark:hover:bg-pink-700', '!dark:focus:ring-pink-800');
                prevTLBtn.classList.remove('!bg-gray-500', '!cursor-not-allowed', '!dark:bg-gray-700');
            }
        }

        if (currentTLIndex === (TLArray.length + TLExtraArray.length) - 1) {
            if (nextTLBtn) {
                nextTLBtn.disabled = true;
                nextTLBtn.classList.remove('!bg-pink-700', '!hover:bg-pink-800', '!dark:bg-pink-600', '!dark:hover:bg-pink-700', '!dark:focus:ring-pink-800');
                nextTLBtn.classList.add('!bg-gray-500', '!cursor-not-allowed', '!dark:bg-gray-700');
            }
        } else {
            if (nextTLBtn) {
                nextTLBtn.disabled = false;
                nextTLBtn.classList.add('!bg-pink-700', '!hover:bg-pink-800', '!dark:bg-pink-600', '!dark:hover:bg-pink-700', '!dark:focus:ring-pink-800');
                nextTLBtn.classList.remove('!bg-gray-500', '!cursor-not-allowed', '!dark:bg-gray-700');
            }
        }
    }

    updateTLDisplay();
}

function setTLProgress(){
    const progressBar = document.getElementById('tl-progress');
    progressBar.setAttribute('value', String(currentTLIndex/(TLArray.length-1) * 100));
}

document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
    .steps.steps-primary .step::after {
      background-color: #374151 !important;
    }
    .steps.steps-primary .step {
      color: #fff !important;
      background-color: #374151 !important;
    }
  `;
    document.head.appendChild(style);
    setWyrNavigation();
    setTLNavigation();
});

