//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"


// Check Current User Page.
const title = document.querySelector('#title');
if (title && title.querySelector('div div h1')?.textContent === 'Contact Us') {
    // Auto fill out the forms based on package selected.
    const urlParams = new URLSearchParams(window.location.search);
    const selectedPackage = Number(urlParams.get('package'));

    let reason;
    let message;
    let setMessage = true;

    switch (selectedPackage) {
        case 1:
            // Newborn Basic
            reason = 1;
            message = "I'd like to know more about the Newbie Basic plan.";
            break;
        case 2:
            // Maternity + Newbie
            reason = 1;
            message = "I'd like to know more about the Maternity + Newbie plan.";
            break;
        case 3:
            // Birth Story + Newbie
            reason = 1;
            message = "I'd like to know more about the Birth Story + Newbie plan.";
            break;
        case 4:
            // Maternity + Birth Story + Newbie
            reason = 1;
            message = "I'd like to know more about the Maternity + Birth Story + Newbie plan.";
            break;
        case 5:
            // My Milestones
            reason = 1;
            message = "I'd like to know more about the My Milestones plan.";
            break;
        case 6:
            // My First Year
            reason = 1;
            message = "I'd like to know more about the My First Year plan.";
            break;
        case 7:
            // Two Color Photography With Amber
            reason = 2;
            message = "I'd like to know more about the Two Color Photography With Amber plan.";
            break;
        case 8:
            // Premier Photographer Sessions
            reason = 2;
            message = "I'd like to know more about the Premier Photographer Sessions plan.";
            break;
        case 9:
            // Creative Team Photographers
            reason = 2;
            message = "I'd like to know more about the Creative Team Photographers plan.";
            break;
        case 10:
            // Extended Family Portraits
            reason = 2;
            message = "I'd like to know more about the Extended Family Portraits plan.";
            break;
        case 11:
            // Half Pint Family Sessions With Cris and Mandi
            reason = 2;
            message = "I'd like to know more about the Half Pint Family Sessions With Cris and Mandi plan.";
            break;
        case 12:
            // Half Pint Family Sessions With Ashlee
            reason = 2;
            message = "I'd like to know more about the Half Pint Family Sessions With Ashlee plan.";
            break;
        default:
            setMessage = false;
            console.log(`Unexpected (or Non-Existant) URL Param: ${selectedPackage}`);
    }

    if (setMessage) {
        const reasonField = document.getElementById('userReason');
        reasonField.value = reason;
        const messageField = document.getElementById('userMessage');
        messageField.value = message;
    }
} else if (title && title.querySelector('div div h1')?.textContent === 'Blog Title') {
    // Fill Entry Page
    const urlParams = new URLSearchParams(window.location.search);
    let selectedPost = Number(urlParams.get('post'));

    if (selectedPost == 0) {
        selectedPost = 1;
    }

    let title;
    let image;
    let quote;
    let body;

    switch (selectedPost) {
        case 1:
            // Post One
            title = "Introducing Tate";
            image = "images/baby5.jpg";
            quote = "I feel privileged to be able to capture these precious moments and create memories that families can cherish for a lifetime.";
            body = `<p>As a photographer, one of the greatest joys of my job is meeting incredible people and capturing their most precious moments. I was lucky enough to first meet Tate's parents on their wedding day, which I believe was in December or January. I recall that they got married at the Logan Temple, which had just been covered in a fresh blanket of snow, creating the perfect winter wonderland setting for their wedding photos.</p>
            
            <p>Fast forward a few years later, and I was absolutely thrilled when Tate's parents contacted me to do a newborn photoshoot for their second child, Tate. It was heartwarming to see how much their family had grown and changed over the years, and I felt honored to be able to capture another special moment for them.</p>
            
            <p>Timari, Tate's mother, requested that we do some pictures for Tate that were similar to the ones we took of his big brother, Rees. I was happy to oblige and set up the same colors and props that we used for Rees' photoshoot. It was a beautiful and emotional experience to see how the two brothers looked side by side in the same poses, and how much they had both grown and changed over time.</p>
            
            <p>One of the most striking things about the photoshoot was the size difference between the two brothers - Rees definitely didn't have as many rolls as his little brother Tate! It was heartwarming to see how much love and happiness there was between the family, and how much joy they had in welcoming a new addition to their family.</p>
            
            <p>As a photographer, I feel privileged to be able to capture these precious moments and create memories that families can cherish for a lifetime. Seeing families grow and change over time is one of the most rewarding aspects of my job, and I feel so grateful to be a part of these special moments.</p>`;
            break;
        case 2:
            // Post Two
            title = "Cousins Newborn Session";
            image = "images/baby9.jpg";
            quote = "As a photographer, being able to combine what I do with the love I have for my family is always a dream come true.";
            body = `<p>As a photographer and aunt to 36 nieces and nephews, I have had the pleasure of capturing many special moments for my family. When I met my husband, I was welcomed into an incredible family with five brothers and one sister. Each of his siblings had at least five kids, so there are a lot of cousins in the Rust family!</p>

            <p>One of my most cherished memories is of my nieces Aubrey and Lindsey, who are twins. I remember watching them play ring-around-the-rosies as young girls and being struck by their special bond. Since their birth, they have remained each other's best friends.</p>
            
            <p>So, when I learned that Aubrey and Lindsey were both expecting babies at the same time, I was thrilled. Aubrey was due about six weeks before Lindsey, and we started planning an incredible cousin newborn session to capture the special moment. We had some worries about Aubrey's baby being too old for newborn poses, but that didn't mean we wouldn't give it a try!</p>
            
            <p>The day of the photoshoot arrived, and we had a blast loving on my great nieces and my great nephew! Our worries that Brooklyn, Aubrey's baby, wouldn't want to be sleepy and curl up into newborn poses turned out to be unnecessary. Instead, it was Liam, Lindsey's baby, who decided to be awake through most of the session! Emma, Brooklyn's big sister, also did an amazing job for her picture with her new sister. All in all, the cousin newborn session turned out to be incredible, and we captured some truly beautiful moments.</p>
            
            <p>As a photographer, being able to combine what I do with the love I have for my family is always a dream come true. Watching my nieces and nephews grow up and being an aunt to them all has been an incredible experience. It's quite amazing to be able to see them grow up and to be able to capture moments like this that they will be able to cherish for the rest of their lives.</p>
            
            <p>Introducing Brooklyn and Liam was an unforgettable experience for me. As a photographer, there is nothing more fulfilling than being able to capture these special moments for families. It's a privilege to be a part of these memories and to be able to create something that will be treasured for years to come.</p>`;
            break;
        case 3:
            // Post Three
            title = "Jaylee’s Milestones Sessions";
            image = "images/baby10.jpg";
            quote = "It was amazing to see how this little fighter had made it into the world against all odds. I felt privileged to be able to capture her first moments in the world and document her growth throughout the year.";
            body = `<p>Yesterday, I had a special photo session with Jaylee, who was celebrating her birthday. Her mom chose the "My Milestones" package to document Jaylee's growth throughout the year. It's one of the most popular packages that Two Color Photography offers for newborns and babies. I've known Jaylee's mom for 15 years, and I was thrilled to capture important moments in her life, including her engagement to Tristan.</p>

            <p>Ashley's pregnancy brought excitement to her family, and everyone was eagerly waiting for Jaylee's arrival. We discussed what types of pictures we wanted for Jaylee, including a birth story, fresh 48, or the Milestones package. Ashley's due date was approaching, and she thought she had plenty of time to breathe through some contractions before heading to the hospital. Little did she know, Jaylee was eager to make her grand entrance into the world.</p>
            
            <p>Ashley and Tristan hit the road when the contractions became painful. But little Jaylee couldn't wait any longer, and Tristan had to deliver her in the car with instructions from dispatch. The ambulance found them just in time to help deliver Jaylee safely. Ashley was relieved to hear her new baby's cry and feel her on her chest, and fortunately, everything turned out well.</p>
            
            <p>The day after Jaylee's dramatic birth, I met her for her first photo session in the hospital. It was amazing to see how this little fighter had made it into the world against all odds. I felt privileged to be able to capture her first moments in the world and document her growth throughout the year.</p>
            
            <p>As a photographer, it's not just about taking pictures but also about forming meaningful connections with my clients. Jaylee's mom is not just a client, but also a dear friend whom I've known for years. Capturing Jaylee's birth and her first moments in the world was an incredibly special moment for me, and I'm honored to have been part of their journey.</p>
            
            <p>In the end, the journey of photographing newborns and babies is not just about taking beautiful pictures, but also about telling their stories. Every baby has a unique journey, and it's an honor to be able to document it and help families remember those special moments for years to come.</p>`;
            break;
    }

    const entryTitle = document.getElementById('entryTitle');
    entryTitle.innerText = title;
    const entryImage = document.getElementById('entryImage');
    entryImage.src = image;
    const entryQuote = document.getElementById('entryQuote');
    entryQuote.innerText = quote;
    const entryText = document.getElementById('entryText');
    entryText.innerHTML = body;
}