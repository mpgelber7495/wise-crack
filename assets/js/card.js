var cards = [
  { text: "Why can't I sleep at night?", pick: 1 },
  { text: "I got 99 problems but _ ain't one.", pick: 1 },
  { text: "What's a girl's best friend?", pick: 1 },
  { text: "What's that smell?", pick: 1 },
  {
    text:
      "This is the way the world ends / This is the way the world ends / Not with a bang but with _.",
    pick: 1
  },
  { text: "What is Batman's guilty pleasure?", pick: 1 },
  { text: "TSA guidelines now prohibit _ on airplanes.", pick: 1 },
  { text: "What ended my last relationship?", pick: 1 },
  {
    text:
      "MTV's new reality show features eight washed-up celebrities living with _.",
    pick: 1
  },
  { text: "I drink to forget _.", pick: 1 },
  {
    text:
      "I'm sorry, Professor, but I couldn't complete my homework because of _.",
    pick: 1
  },
  {
    text: "Alternative medicine is now embracing the curative powers of _.",
    pick: 1
  },
  { text: "What's that sound?", pick: 1 },
  { text: "What's the next Happy Meal&reg; toy?", pick: 1 },
  {
    text: "It's a pity that kids these days are all getting involved with _.",
    pick: 1
  },
  {
    text:
      "In the new Disney Channel Original Movie, Hannah Montana struggles with _ for the first time.",
    pick: 1
  },
  { text: "_. That's how I want to die.", pick: 1 },
  { text: "What does Dick Cheney prefer?", pick: 1 },
  { text: "What's the most emo?", pick: 1 },
  { text: "Instead of coal, Santa now gives the bad children _.", pick: 1 },
  {
    text: "Next from J.K. Rowling: Harry Potter and the Chamber of _.",
    pick: 1
  },
  {
    text: "A romantic, candlelit dinner would be incomplete without _.",
    pick: 1
  },
  { text: "White people like _.", pick: 1 },
  { text: "_. Betcha can't have just one!", pick: 1 },
  { text: "War!<br><br>What is it good for?", pick: 1 },
  { text: "BILLY MAYS HERE FOR _.", pick: 1 },
  { text: "_. High five, bro.", pick: 1 },
  { text: "During sex, I like to think about _.", pick: 1 },
  { text: "What did I bring back from Mexico?", pick: 1 },
  { text: "What are my parents hiding from me?", pick: 1 },
  { text: "What will always get you laid?", pick: 1 },
  {
    text: "What would grandma find disturbing, yet oddly charming?",
    pick: 1
  },
  {
    text: "What did the U.S. airdrop to the children of Afghanistan?",
    pick: 1
  },
  { text: "What helps Obama unwind?", pick: 1 },
  { text: "What's there a ton of in heaven?", pick: 1 },
  {
    text:
      "Major League Baseball has banned _ for giving players an unfair advantage.",
    pick: 1
  },
  {
    text:
      "When I am a billionaire, I shall erect a 50-foot statue to commemorate _.",
    pick: 1
  },
  { text: "What's the new fad diet?", pick: 1 },
  {
    text:
      "When I am the President of the United States, I will create the Department of _.",
    pick: 1
  },
  { text: "_. It's a trap!", pick: 1 },
  { text: "How am I maintaining my relationship status?", pick: 1 },
  {
    text:
      "What will I bring back in time to convince people that I am a powerful wizard?",
    pick: 1
  },
  {
    text:
      "While the United States raced the Soviet Union to the moon, the Mexican government funneled millions of pesos into research on _.",
    pick: 1
  },
  { text: "Coming to Broadway this season, _: The Musical.", pick: 1 },
  { text: "What's my secret power?", pick: 1 },
  { text: "What gives me uncontrollable gas?", pick: 1 },
  { text: "But before I kill you, Mr. Bond, I must show you _.", pick: 1 },
  { text: "What never fails to liven up the party?", pick: 1 },
  { text: "What am I giving up for Lent?", pick: 1 },
  { text: "What do old people smell like? ", pick: 1 },
  { text: "The class field trip was completely ruined by _.", pick: 1 },
  {
    text: "When Pharaoh remained unmoved, Moses called down a plague of _.",
    pick: 1
  },
  {
    text:
      "I do not know with which weapons World War III will be fought, but World War IV will be fought with _.",
    pick: 1
  },
  {
    text:
      "What's Teach for America using to inspire inner city students to succeed?",
    pick: 1
  },
  {
    text: "In Michael Jackson's final moments, he thought about _.",
    pick: 1
  },
  { text: "Why do I hurt all over?", pick: 1 },
  {
    text:
      "Studies show that lab rats navigate mazes 50% faster after being exposed to _.",
    pick: 1
  },
  { text: "Why am I sticky?", pick: 1 },
  { text: "What's my anti-drug?", pick: 1 },
  { text: "And the Academy Award for _ goes to _.", pick: 2 },
  { text: "For my next trick, I will pull _ out of _.", pick: 2 },
  { text: "_: Good to the last drop.", pick: 1 },
  { text: "What did Vin Diesel eat for dinner?", pick: 1 },
  { text: "_: kid-tested, mother-approved.", pick: 1 },
  { text: "What gets better with age?", pick: 1 },
  { text: "I never truly understood _ until I encountered _.", pick: 2 },
  {
    text:
      "Rumor has it that Vladimir Putin's favorite delicacy is _ stuffed with _.",
    pick: 2
  },
  { text: "Lifetime&reg; presents _, the story of _.", pick: 2 },
  { text: "Make a haiku.", pick: 3 },
  {
    text:
      "In M. Night Shyamalan's new movie, Bruce Willis discovers that _ had really been _ all along.",
    pick: 2
  },
  { text: "_ is a slippery slope that leads to _.", pick: 2 },
  { text: "In a world ravaged by _, our only solace is _.", pick: 2 },
  { text: "That's right, I killed _. How, you ask? _.", pick: 2 },
  { text: "When I was tripping on acid, _ turned into _.", pick: 2 },
  { text: "_ + _ = _.", pick: 3 },
  { text: "What's the next superhero/sidekick duo?", pick: 2 },
  {
    text:
      "Dear Abby,<br><br>I'm having some trouble with _ and would like your advice.",
    pick: 1
  },
  {
    text: "After the earthquake, Sean Penn brought _ to the people of Haiti.",
    pick: 1
  },
  {
    text: "In L.A. County Jail, word is you can trade 200 cigarettes for _.",
    pick: 1
  },
  { text: "Maybe she's born with it. Maybe it's _.", pick: 1 },
  {
    text:
      "Life for American Indians was forever changed when the White Man introduced them to _.",
    pick: 1
  },
  { text: "Next on ESPN2, the World Series of _.", pick: 1 },
  { text: "Step 1: _. Step 2: _. Step 3: Profit.", pick: 2 },
  {
    text:
      "Here is the church<br>Here is the steeple<br>Open the doors<br>And there is _.",
    pick: 1
  },
  { text: "How did I lose my virginity?", pick: 1 },
  {
    text:
      "During his childhood, Salvador Dal&iacute; produced hundreds of paintings of _.",
    pick: 1
  },
  {
    text:
      "In 1,000 years, when paper money is a distant memory, how will we pay for goods and services?",
    pick: 1
  },
  { text: "What don't you want to find in your Kung Pao chicken?", pick: 1 },
  {
    text:
      "The Smithsonian Museum of Natural History has just opened an exhibit on _.",
    pick: 1
  },
  { text: "Daddy, why is Mommy crying?", pick: 1 },
  { text: "What brought the orgy to a grinding halt?", pick: 1 },
  { text: "When I pooped, what came out of my butt?", pick: 1 },
  {
    text:
      "In the distant future, historians will agree that _ marked the beginning of America's decline.",
    pick: 1
  },
  { text: "What's the gift that keeps on giving?", pick: 1 },
  {
    text:
      "This season on Man vs. Wild, Bear Grylls must survive in the depths of the Amazon with only _ and his wits.",
    pick: 1
  },
  {
    text: "Michael Bay's new three-hour action epic pits _ against _.",
    pick: 2
  },
  {
    text: "And I would have gotten away with it, too, if it hadn't been for _!",
    pick: 1
  },
  { text: "In a pinch, _ can be a suitable substitute for _.", pick: 2 },
  {
    text: "What has been making life difficult at the nudist colony?",
    pick: 1
  },
  { text: "Science will never explain the origin of _.", pick: 1 },
  {
    text:
      "In Rome, there are whisperings that the Vatican has a secret room devoted to _.",
    pick: 1
  },
  {
    text:
      "I learned the hard way that you can't cheer up a grieving friend with _.",
    pick: 1
  },
  { text: "When all else fails, I can always masturbate to _.", pick: 1 },
  { text: "An international tribunal has found _ guilty of _.", pick: 2 },
  {
    text:
      "In its new tourism campaign, Detroit proudly proclaims that it has finally eliminated _.",
    pick: 1
  },
  {
    text:
      "In his new self-produced album, Kanye West raps over the sounds of _.",
    pick: 1
  },
  {
    text:
      "The socialist governments of Scandinavia have declared that access to _ is a basic human right.",
    pick: 1
  },
  { text: "He who controls _ controls the world.", pick: 1 },
  {
    text:
      "Dear Sir or Madam, We regret to inform you that the Office of _ has denied your request for _.",
    pick: 2
  },
  {
    text:
      "The CIA now interrogates enemy agents by repeatedly subjecting them to _.",
    pick: 1
  },
  { text: "_ would be woefully incomplete without _.", pick: 2 },
  { text: "During his midlife crisis, my dad got really into _.", pick: 1 },
  {
    text:
      "Before I run for president, I must destroy all evidence of my involvement with _.",
    pick: 1
  },
  { text: 'My new favorite porn star is Joey "_" McGee.', pick: 1 },
  {
    text:
      "In his newest and most difficult stunt, David Blaine must escape from _.",
    pick: 1
  },
  {
    text:
      "This is your captain speaking. Fasten your seatbelts and prepare for _.",
    pick: 1
  },
  {
    text:
      "My mom freaked out when she looked at my browser history and found _.com/_.",
    pick: 2
  },
  {
    text: "The Five Stages of Grief: denial, anger, bargaining, _, acceptance.",
    pick: 1
  },
  {
    text:
      "Members of New York's social elite are paying thousands of dollars just to experience _.",
    pick: 1
  },
  { text: "I went from _ to _, all thanks to _.", pick: 3 },
  {
    text: "Little Miss Muffet Sat on a tuffet, Eating her curds and _.",
    pick: 1
  },
  {
    text:
      'This month\'s Cosmo: "Spice up your sex life by bringing _ into the bedroom."',
    pick: 1
  },
  {
    text: "If God didn't want us to enjoy _, he wouldn't have given us _.",
    pick: 2
  },
  { text: "My country, 'tis of thee, sweet land of _.", pick: 1 },
  {
    text:
      'After months of debate, the Occupy Wall Street General Assembly could only agree on "More _!"',
    pick: 1
  },
  {
    text:
      "I spent my whole life working toward _, only to have it ruined by _.",
    pick: 2
  },
  {
    text: "Next time on Dr. Phil: How to talk to your child about _.",
    pick: 1
  },
  { text: "Only two things in life are certain: death and _.", pick: 1 },
  {
    text:
      "Everyone down on the ground! We don't want to hurt anyone. We're just here for _.",
    pick: 1
  },
  {
    text:
      "The healing process began when I joined a support group for victims of _.",
    pick: 1
  },
  { text: "The votes are in, and the new high school mascot is _.", pick: 1 },
  {
    text: "Charades was ruined for me forever when my mom had to act out _.",
    pick: 1
  },
  { text: "Before _, all we had was _.", pick: 2 },
  {
    text: "Tonight on 20/20: What you don't know about _ could kill you.",
    pick: 1
  },
  {
    text:
      "You haven't truly lived until you've experienced _ and _ at the same time.",
    pick: 2
  },
  { text: "Hey baby, come back to my place and I'll show you _.", pick: 1 },
  {
    text: "My gym teacher got fired for adding _ to the obstacle course.",
    pick: 1
  },
  { text: "Finally! A service that delivers _ right to your door.", pick: 1 },
  {
    text:
      "To prepare for his upcoming role, Daniel Day-Lewis immersed himself in the world of _.",
    pick: 1
  },
  { text: "My life is ruled by a vicious cycle of _ and _.", pick: 2 },
  {
    text: "During high school, I never really fit in until I found _ club.",
    pick: 1
  },
  { text: "Money can't buy me love, but it can buy me _.", pick: 1 },
  {
    text:
      "Listen, son. If you want to get involved with _, I won't stop you. Just steer clear of _.",
    pick: 2
  },
  {
    text:
      "A successful job interview begins with a firm handshake and ends with _.",
    pick: 1
  },
  {
    text:
      "Call the law offices of Goldstein &amp; Goldstein, because no one should have to tolerate _ in the workplace.",
    pick: 1
  },
  { text: "Lovin' you is easy 'cause you're _.", pick: 1 },
  {
    text:
      "The blind date was going horribly until we discovered our shared interest in _.",
    pick: 1
  },
  { text: "What left this stain on my couch?", pick: 1 },
  {
    text: "Turns out that _-Man was neither the hero we needed nor wanted.",
    pick: 1
  },
  {
    text: "After months of practice with _, I think I'm finally ready for _.",
    pick: 2
  },
  {
    text:
      "In the seventh circle of Hell, sinners must endure _ for all eternity.",
    pick: 1
  },
  {
    text:
      "As part of his daily regimen, Anderson Cooper sets aside 15 minutes for _.",
    pick: 1
  },
  { text: "When you get right down to it, _ is just _.", pick: 2 },
  { text: "Having problems with _? Try _!", pick: 2 },
  { text: "And what did <i>you</i> bring for show and tell?", pick: 1 },
  {
    text: "I'm not like the rest of you. I'm too rich and busy for _.",
    pick: 1
  },
  { text: "With enough time and pressure, _ will turn into _.", pick: 2 },
  { text: "_: Hours of fun. Easy to use. Perfect for _!", pick: 2 },
  { text: "_. Awesome in theory, kind of a mess in practice.", pick: 1 },
  {
    text:
      "As part of his contract, Prince won't perform without _ in his dressing room.",
    pick: 1
  },
  { text: "Man, this is bullshit. Fuck _.", pick: 1 },
  {
    text:
      "Dear Leader Kim Jong-un,<br>our village praises your infinite wisdom with a humble offering of _.",
    pick: 1
  },
  { text: "_ may pass, but _ will last forever.", pick: 2 },
  {
    text: "She's up all night for good fun.<br>I'm up all night for _.",
    pick: 1
  },
  {
    text:
      "Alright, bros. Our frat house is condemned, and all the hot slampieces are over at Gamma Phi. The time has come to commence Operation _.",
    pick: 1
  },
  {
    text: "The Japanese have developed a smaller, more efficient version of _.",
    pick: 1
  },
  {
    text:
      "In return for my soul, the Devil promised me _, but all I got was _.",
    pick: 2
  },
  {
    text:
      "You guys, I saw this crazy movie last night. It opens on _, and then there's some stuff about _, and then it ends with _.",
    pick: 3
  },
  { text: "_ will never be the same after _.", pick: 2 },
  {
    text:
      "Wes Anderson's new film tells the story of a precocious child coming to terms with _.",
    pick: 1
  },
  {
    text:
      'In the beginning, there was _.<br>And the Lord said, "Let there be _."',
    pick: 2
  },
  { text: "What's fun until it gets weird?", pick: 1 },
  {
    text:
      "We never did find _, but along the way we sure learned a lot about _.",
    pick: 2
  },
  {
    text:
      "You've seen the bearded lady!<br>You've seen the ring of fire!<br>Now, ladies and gentlemen, feast your eyes upon _!",
    pick: 1
  },
  { text: "How am I compensating for my tiny penis?", pick: 1 },
  {
    text: "I'm sorry, sir, but we don't allow _ at the country club.",
    pick: 1
  },
  {
    text:
      "2 AM in the city that never sleeps. The door swings open and <i>she</i> walks in, legs up to here. Something in her eyes tells me she's looking for _.",
    pick: 1
  },
  { text: "As king, how will I keep the peasants in line?", pick: 1 },
  {
    text: 'Oprah\'s book of the month is "_ For _: A Story of Hope."',
    pick: 2
  },
  {
    text: "Do <i>not</i> fuck with me! I am literally _ right now.",
    pick: 1
  },
  {
    text: 'Adventure.<br>Romance.<br>_.<br><br>From Paramount Pictures, "_."',
    pick: 2
  },
  { text: "I am become _, destroyer of _!", pick: 2 },
  {
    text:
      "It lurks in the night. It hungers for flesh. This summer, no one is safe from _.",
    pick: 1
  },
  { text: "If you can't handle _, you'd better stay away from _.", pick: 2 },
  {
    text: "This is the prime of my life. I'm young, hot, and full of _.",
    pick: 1
  },
  {
    text:
      "I'm pretty sure I'm high right now, because I'm absolutely mesmerized by _.",
    pick: 1
  },
  { text: 'This year\'s hottest album is "_" by _.', pick: 2 },
  { text: "Every step towards _ gets me a little closer to _.", pick: 2 },
  {
    text:
      "Forget everything you know about _, because now we've supercharged it with _!",
    pick: 2
  },
  {
    text:
      "Honey, I have a new role-play I want to try tonight! You can be _, and I'll be _.",
    pick: 2
  },
  {
    text:
      "Do the Dew &reg; with our most extreme flavor yet! Get ready for Mountain Dew _!",
    pick: 1
  },
  {
    text:
      "Armani suit: $1,000. Dinner for two at that swanky restaurant: $300. The look on her face when you surprise her with _: priceless.",
    pick: 1
  },
  {
    text:
      "In his new action comedy, Jackie Chan must fend off ninjas while also dealing with _.",
    pick: 1
  },
  {
    text:
      "Well what do you have to say for yourself, Casey? This is the third time you've been sent to the principal's office for _.",
    pick: 1
  },
  {
    text:
      "Here at the Academy for Gifted Children, we allow students to explore _ at their own pace.",
    pick: 1
  },
  {
    text:
      "Heed my voice, mortals! I am the god of _, and I will not tolerate _!",
    pick: 2
  },
  {
    text: "I don't mean to brag, but they call me the Michael Jordan of _.",
    pick: 1
  },
  { text: "Why am I broke?", pick: 1 },
  { text: "Help me doctor, I've got _ in my butt!", pick: 1 },
  {
    text:
      "Hi MTV! My name is Kendra, I live in Malibu, I'm into _, and I love to have a good time.",
    pick: 1
  },
  { text: "Patient presents with _. Likely a result of _.", pick: 2 },
  {
    text:
      "Life's pretty tough in the fast lane. That's why I never leave the house without _.",
    pick: 1
  },
  { text: "What's making things awkward in the sauna?", pick: 1 },
  {
    text:
      "Get ready for the movie of the summer! One cop plays by the book. The other's only interested in one thing: _.",
    pick: 1
  },
  { text: "Having the worst day EVER. #_", pick: 1 },
  {
    text:
      "In his farewell address, George Washington famously warned Americans about the dangers of _.",
    pick: 1
  },
  {
    text:
      'Don\'t forget! Beginning this week, Casual Friday will officially become "_ Friday."',
    pick: 1
  },
  { text: "What killed my boner?", pick: 1 },
  { text: "Yo' mama so fat she _!", pick: 1 },
  {
    text: "Well if _ is good enough for _, it's good enough for me.",
    pick: 2
  },
  {
    text:
      'Hi, this is Jim from accounting. We noticed a $1,200 charge labeled "_". Can you explain?',
    pick: 1
  },
  {
    text:
      "Do you lack energy? Does it sometimes feel like the whole world is _? Zoloft.&reg;",
    pick: 1
  },
  { text: "WHOOO! God damn I love _!", pick: 1 },
  {
    text: 'Now in bookstores: "The Audacity of _", by Barack Obama.',
    pick: 1
  },
  { text: "And today's soup is Cream of _.", pick: 1 },
  {
    text:
      'Siskel and Ebert have panned _ as "poorly conceived" and "sloppily executed."',
    pick: 1
  },
  { text: 'Up next on Nickelodeon: "Clarissa Explains _."', pick: 1 },
  {
    text: "Believe it or not, Jim Carrey can do a dead-on impression of _.",
    pick: 1
  },
  {
    text:
      "It's Morphin' Time! Mastadon! Pterodactyl! Triceratops! Sabertooth Tiger! _!",
    pick: 1
  },
  { text: "I'm a bitch, I'm a lover, I'm a child, I'm _.", pick: 1 },
  { text: "How did Stella get her groove back?", pick: 1 },
  { text: 'Tonight on SNICK: "Are You Afraid of _?"', pick: 1 },
  { text: "Air Canada guidelines now prohibit _ on airplanes.", pick: 1 },
  { text: "O Canada, we stand on guard for _.", pick: 1 },
  { text: "CTV presents _, the story of _.", pick: 2 },
  {
    text:
      "In an attempt to reach a wider audience, the Royal Ontario Museum has opened an interactive exhibit on _.",
    pick: 1
  },
  {
    text:
      "What's the Canadian government using to inspire rural students to succeed?",
    pick: 1
  },
  {
    text: "After blacking out during New Year's Eve, I was awoken by _.",
    pick: 1
  },
  {
    text:
      "This holiday season, Tim Allen must overcome his fear of _ to save Christmas.",
    pick: 1
  },
  { text: "Jesus is _.", pick: 1 },
  {
    text: "Every Christmas, my uncle gets drunk and tells the story about _.",
    pick: 1
  },
  { text: "What keeps me warm during the cold, cold winter?", pick: 1 },
  {
    text:
      "On the third day of Christmas, my true love gave to me: three French hens, two turtle doves, and _.",
    pick: 1
  },
  {
    text:
      "Wake up, America. Christmas is under attack by secular liberals and their _.",
    pick: 1
  },
  {
    text: "Here's what you can expect for the new year.<br>Out: _.<br>In: _.",
    pick: 2
  },
  {
    text:
      "Revealed:<br>Why He Really Resigned!<br>Pope Benedict's Secret Struggle with _!",
    pick: 1
  },
  {
    text: "GREETINGS HUMANS<br><br>I AM _ BOT<br><br>EXECUTING PROGRAM",
    pick: 1
  },
  {
    text:
      "Kids these days with their iPods and their Internet. In my day, all we needed to pass the time was _.",
    pick: 1
  },
  {
    text:
      "Because they are forbidden from masturbating, Mormons channel their repressed sexual energy into _.",
    pick: 1
  },
  {
    text:
      "Blessed are you, Lord our God, creator of the universe, who has granted us _.",
    pick: 1
  },
  {
    text:
      "But wait, there's more! If you order _ in the next 15 minutes, we'll throw in _ absolutely free!",
    pick: 2
  },
  {
    text: "What's the one thing that makes an elf instantly ejaculate?",
    pick: 1
  },
  {
    text: "I really hope my grandmother doesn't ask me to explain _ again.",
    pick: 1
  },
  { text: "You have been waylaid by _ and must defend yourself.", pick: 1 },
  {
    text:
      "I have an idea even better than Kickstarter, and it's called _starter.",
    pick: 1
  },
  {
    text:
      "Action stations! Action stations! Set condition one throughout the fleet and brace for _!",
    pick: 1
  },
  {
    text:
      "In the final round of this year's Omegathon, Omeganauts must face off in a game of _.",
    pick: 1
  },
  { text: "Press &uarr; &darr; &larr; &rarr; B to unleash _.", pick: 1 },
  {
    text:
      "I don't know exactly how I got the PAX plague, but I suspect it had something to do with _.",
    pick: 1
  },
  {
    text:
      "The most controversial game at PAX this year is an 8-bit indie platformer about _.",
    pick: 1
  },
  { text: "What made Spock cry?", pick: 1 },
  {
    text:
      "In the new DLC for Mass Effect, Shepard must save the galaxy from _.",
    pick: 1
  },
  { text: "No Enforcer wants to manage the panel on _.", pick: 1 },
  { text: "_: Achievement unlocked.", pick: 1 },
  {
    text:
      "There was a riot at the Gearbox panel when they gave the attendees _.",
    pick: 1
  },
  {
    text:
      "What's the latest bullshit that's troubling this quaint fantasy town?",
    pick: 1
  },
  { text: "<i>(Heavy breathing)</i><br>Luke, I am _.", pick: 1 },
  {
    text: "You think you have defeated me? Well, let's see how you handle _!",
    pick: 1
  },
  {
    text: "What the hell?! They added a 6/6 with flying, trample, and _.",
    pick: 1
  },
  { text: "_ is way better in _ mode.", pick: 2 },
  {
    text:
      "Unfortunately, Neo, no one can be <i>told</i> what _ is. You have to see it for yourself.",
    pick: 1
  },
  {
    text: "Let me tell you about my new startup. It's basically _, but for _.",
    pick: 2
  },
  { text: "_ was totally worth the trauma.", pick: 1 },
  { pick: 2, text: "Buzzfeed presents: 10 pictures of _ that look like _." },
  {
    pick: 1,
    text: "During my first game of D&amp;D, I accidentally summoned _."
  },
  {
    pick: 1,
    text:
      "Bob Ross's little-known first show was called &quot;The Joy of _.&quot;"
  },
  { pick: 1, text: "Like _, State Farm is there." },
  { pick: 1, text: "The Discovery Channel presents: _ week." },
  {
    text:
      'A wise man said, "Everything is about sex. Except sex. Sex is about _."',
    pick: 1
  },
  {
    text:
      "Our relationship is strictly professional. Let's not complicate things with _.",
    pick: 1
  },
  {
    text: 'Corruption. Betrayal. _. Coming soon to Netflix, "House of _."',
    pick: 2
  },
  { text: "Because you enjoyed _, we thought you'd like _.", pick: 2 },
  {
    text: "I can't believe Netflix is using _ to promote House of Cards.",
    pick: 1
  },
  {
    text:
      "We're not like other news organizations. Here at Slugline, we welcome _ in the office. ",
    pick: 1
  },
  { text: "I'm not going to lie. I despise _. There, I said it.", pick: 1 },
  {
    text:
      "Cancel all my meetings. We've got a situation with _ that requires my immediate attention.",
    pick: 1
  },
  {
    text:
      "If you need him to, Remy Danton can pull some strings and get you _, but it'll cost you.",
    pick: 1
  },
  { text: "_: _ in fiction, _ on the tabletop.", pick: 3 },
  { text: "Next up: Lord Lysander's paints _.", pick: 1 },
  { text: "I proxy _ using a second-hand _.", pick: 2 },
  { text: "I am Angry, Angry about _.", pick: 1 },
  { text: "The citizens of Innsmouth are really _!", pick: 1 },
  { text: "_ falls, everyone dies.", pick: 1 },
  {
    text: "My GM just made his girlfriend a _ character. How fucked are we?",
    pick: 1
  },
  {
    text:
      "If you buy a camel, Crazy Hassan is adding in free _ this week only!",
    pick: 1
  },
  { text: "Around elves, watch _", pick: 1 },
  { text: "The only good _ is a dead _", pick: 2 },
  { text: "...And then he killed the Tarasque with a _", pick: 1 },
  { text: "There is a _ on the roof.", pick: 1 },
  { text: "What are we going to argue about today?", pick: 1 },
  {
    text:
      "In respect to your chapter, the Blood Ravens have dedicated one of their_to _.",
    pick: 2
  },
  { text: "Roll for _.", pick: 1 },
  { text: "I prepared _ this morning.", pick: 1 },
  {
    text: "The bard nearly got us killed when he rolled to seduce _.",
    pick: 1
  },
  { text: "_ causes the Paladin to fall", pick: 1 },
  { text: "The door to the FLGS opens and a _ walks in!", pick: 2 },
  { text: "GW stores no longer stock_", pick: 1 },
  { text: "The price on _ Has doubled!", pick: 1 },
  {
    text: "You fool! you fell victim to one of the classic blunders: _.",
    pick: 1
  },
  {
    text: "...and then the bastard pulled out _ and placed it on the table.",
    pick: 1
  },
  { text: "I cast magic missile at _.", pick: 1 },
  { text: "Wait! I'm a _! Let me tell you about my _!", pick: 2 },
  {
    text:
      "Whenever we run _, it's customary that _ pays for the group's pizza.",
    pick: 2
  },
  {
    text:
      "I kept getting weird looks at FNM when I brought my new _ card sleeves.",
    pick: 1
  },
  { text: "What is better than 3D women?", pick: 1 },
  { text: "Only fags play mono_.", pick: 1 },
  { text: "The enemy's _ is down.", pick: 1 },
  { text: "Ach! Hans run! It's the _!", pick: 1 },
  { text: "What is the BBEG's secret weapon?", pick: 1 },
  { text: "_ is the only way to fix 3.5.", pick: 1 },
  { text: "What's on today's agenda for the mage guild meeting?", pick: 1 },
  { text: "You roll 00 for your magical mishap and turn into _.", pick: 1 },
  { text: "_! what was that?", pick: 1 },
  { text: "What won't the Bard fuck?.", pick: 1 },
  {
    text: "The last straw was the Chaotic Neutral buying a case of _.",
    pick: 1
  },
  { text: "Your BBEG is actually _!", pick: 1 },
  {
    text: "The adventure was going fine until the BBEG put _ in our path.",
    pick: 1
  },
  {
    text: "You've been cursed by the witch! Your _ has turned into a _!",
    pick: 2
  },
  {
    text: "I like to dress up like _ and hit people with foam swords.",
    pick: 1
  },
  { text: "Mountain, Black lotus, sac, to cast _.", pick: 1 },
  {
    text:
      "_ followed by gratuitous _ is how I got kicked out off my last group.",
    pick: 2
  },
  { text: "The _ guides my blade.", pick: 1 },
  { text: "Don't touch me _!", pick: 1 },
  {
    text:
      "The GM has invited his new _ to join the game. They'll be playing _.",
    pick: 2
  },
  { text: "0/10 would not _.", pick: 1 },
  { text: "Behold! White Wolf's newest game: _: the _.", pick: 2 },
  {
    text: "For our upcoming FATAL game, I've assigned _ as your new character.",
    pick: 1
  },
  { text: "I had to kill a party member when wasted 2 hours by _.", pick: 1 },
  { text: "We found _in the Dragon's hoard.", pick: 1 },
  {
    text:
      "We knew the game was off to a good start when the GM didn't veto a player's decision to play as _.",
    pick: 1
  },
  { text: "My Kriegers came in a box of _!", pick: 1 },
  { text: "Elf _ Wat do?", pick: 1 },
  { text: "Magic the Gathering's next set is themed around _.", pick: 1 },
  {
    text:
      "Everybody was surprised when the king's trusted adviser turned out to be _.",
    pick: 1
  },
  { text: "You and _ must stop _ with the ancient artifact _.", pick: 3 },
  {
    text:
      "The guard looks a troubled, uncomfortable glare, like a man who must explain to his _, that's its dreams of becoming _ will never happen.",
    pick: 2
  },
  { text: "_ just fucked us", pick: 1 },
  { text: "My _ are moving on their own", pick: 1 },
  { text: "Dwarf Fortress needs more _", pick: 1 },
  { text: "2e or _", pick: 1 },
  { text: "In the grim darkness of the far future there is only _", pick: 1 },
  { text: "_. we don't need other boards anymore!", pick: 1 },
  { text: "Blood for the blood god! _ for the _!", pick: 2 },
  { text: "Never fire _ at the bulkhead!", pick: 1 },
  { text: "Macha was dismayed to find out that _.", pick: 1 },
  {
    text:
      "I sure hope no one notices that I inserted my _ fetish into the game.",
    pick: 1
  },
  { text: "_ is the only way I can forget about 4e.", pick: 1 },
  { text: "You should never let your bard _.", pick: 1 },
  { text: "Welcome to the _ Quest Thread.", pick: 1 },
  { text: "The lich's phylactery is a _!", pick: 1 },
  {
    text: "That one guy in my group always rolls a chaotic neutral _.",
    pick: 1
  },
  { text: "Then the barbarian drank from the _-filled fountain", pick: 1 },
  { text: "_: That was a thing.", pick: 1 },
  { text: "&gt;preferring 3D women over _", pick: 1 },
  { text: "Where we're going, we won't need _ to see", pick: 1 },
  { text: "I got a box today. What's inside? _", pick: 1 },
  { text: "Roll _ circumference", pick: 1 },
  {
    text: "What I made: _.<br>What the DM saw: _.<br>What I played: _",
    pick: 3
  },
  { text: "_ vs. _: Critical Hit!", pick: 2 },
  { text: "Can _ bloom on the battlefield?", pick: 1 },
  { text: "&gt;mfw _.", pick: 1 },
  { text: "_? That's ULTRA heretical", pick: 1 },
  { text: "So I made my chapter insignia _", pick: 1 },
  { text: "You encounter a Gazebo. You respond with _", pick: 1 },
  { text: "D&amp;D: 6th edition will feature _ as a main race!", pick: 1 },
  { text: "Your Natural 1 summons _.", pick: 1 },
  { text: "It would have taken _ to..... CREEEEEEEEEED!", pick: 1 },
  { text: "Real men watch _.", pick: 1 },
  {
    text: "So wait, _ was actually _? Wow, I didn't see that one coming!",
    pick: 2
  },
  { text: "Whenever I'm splashed with cold water, I turn into _.", pick: 1 },
  {
    text: "No matter how you look at it, ultimately _ is responsible for _.",
    pick: 2
  },
  { text: "_. That is my fetish.", pick: 1 },
  { text: "_ is camping my lane.", pick: 1 },
  { text: "Vegeta, what does the scouter say?", pick: 1 },
  { text: "Who the hell do you think I am?!", pick: 1 },
  {
    text:
      "On the next episode of Dragon Ball Z, Goku has a fierce battle with _.",
    pick: 1
  },
  { text: "Who let the dogs out?", pick: 1 },
  { text: "In his next movie, Will Smith saves the world from _.", pick: 1 },
  { text: "_ and _ are the new hot couple.", pick: 2 },
  {
    text: "When North Korea gets _, it will be the end of the world.",
    pick: 1
  },
  { text: "Plan a three course meal.", pick: 3 },
  { text: "Tastes like _.", pick: 1 },
  { text: "Hey guys, check out my _ montage!", pick: 1 },
  { text: "What will Xyzzy take over the world with?", pick: 1 },
  { text: "Dustin Browder demands more _ in StarCraft&reg;.", pick: 1 },
  { text: "Welcome to my secret lair on _.", pick: 1 },
  {
    text: "Truly and without question, _ is the manliest of all men.",
    pick: 1
  },
  {
    text: "WANTED: $50,000,000,000 reward for the apprehension of_.",
    pick: 1
  },
  { text: "People die when they are _.", pick: 1 },
  { text: "Okay, I'll admit it. I would totally go gay for _.", pick: 1 },
  { text: "_.tumblr.com", pick: 1 },
  { text: "_. Goddammit, Japan.", pick: 1 },
  { text: "All your _ are belong to us", pick: 1 },
  { text: "Digimon! Digivolve to: _-mon!", pick: 1 },
  { text: "What will YouTube add in its next unneeded update?", pick: 1 },
  {
    text:
      "I have never in my life laughed harder than the first time I watched _.",
    pick: 1
  },
  { text: "Who's an asshole?", pick: 1 },
  {
    text: "Ladies and gentlemen, I give you _... COVERED IN BEES!!!",
    pick: 1
  },
  { text: "Sorry Mario, but _ is in another castle.", pick: 1 },
  { text: "There are guilty pleasures. And then there's _.", pick: 1 },
  { text: "_ for president!", pick: 1 },
  { text: "_ is a lie.", pick: 1 },
  { text: "Have fun, don't be _.", pick: 1 },
  { text: "Don't get mad, get _.", pick: 1 },
  {
    text:
      "When it comes to Japanese cuisine, there's simply nothing better than _.",
    pick: 1
  },
  { text: "After I saw _, I needed _.", pick: 2 },
  { text: "I'm an expert on _.", pick: 1 },
  {
    text:
      "Just announced: The brand new anime adaptation of _, starring _ as the voice of _.",
    pick: 3
  },
  { text: "_ is the only thing that matters.", pick: 1 },
  { text: "Cunnilungus and psychiatry brought us to _.", pick: 1 },
  { text: "We'll always have _.", pick: 1 },
  {
    text: "OH MY GOD THIS IS THE GREATEST _ I'VE EVER SEEN IN MY LIFE!",
    pick: 1
  },
  {
    text:
      'And the award for the filthiest scene in an adult film goes to "5 women and _."',
    pick: 1
  },
  { text: "What mildy annoyed you today?", pick: 1 },
  {
    text: "The seldomly mentioned 4th little pig built his house out of _.",
    pick: 1
  },
  { text: "Let's all rock out to the sounds of _.", pick: 1 },
  { text: "No one wants to see your _.", pick: 1 },
  {
    text: '"Why Grandma", said Little Red Riding Hood, "What big _ you have!"',
    pick: 1
  },
  { text: "_ uses _. It is SUPER EFFECTIVE!", pick: 2 },
  {
    text:
      "It's difficult to explain to friends and family why I know so much about _.",
    pick: 1
  },
  { text: "Who knew I'd be able to make a living off of _?", pick: 1 },
  { text: "Take _, it will last longer.", pick: 1 },
  {
    text:
      "I finally realized I hit rock bottom when I started digging through dumpsters for _.",
    pick: 1
  },
  { text: "Long story short, I ended up with _ in my ass.", pick: 1 },
  {
    text: "At first I couldn't understand _, but now it's my biggest kink.",
    pick: 1
  },
  { text: "_ is my worst habit.", pick: 1 },
  { text: "What do I keep hidden in the crawlspace?", pick: 1 },
  { text: "It's the end of _ as we know it.", pick: 1 },
  {
    text: "I watch movies just to see if I can find a Big Lipped _ Moment.",
    pick: 1
  },
  { text: "Go-Go-Gadget, _!", pick: 1 },
  { text: "Everything's better with _.", pick: 1 },
  {
    text:
      "And it is said his ghost still wanders these halls, forever searching for his lost _.",
    pick: 1
  },
  { text: "What have you accomplished today?", pick: 1 },
  { text: "What would you taste like?", pick: 1 },
  { text: "The best part of waking up is _ in your cup.", pick: 1 },
  { text: "Why are you frothing with rage?", pick: 1 },
  { text: "What made you happy today?", pick: 1 },
  { text: "Why are there six _ when there are only four _?", pick: 2 },
  { text: "My _ is too big!", pick: 1 },
  {
    text: "Best drink ever: One part _, three parts _, and a splash of _.",
    pick: 3
  },
  { text: "_ makes me uncomfortable.", pick: 1 },
  {
    text:
      "The primitive villagers were both shocked and amazed when I showed them _.",
    pick: 1
  },
  { text: "Stop, drop, and _.", pick: 1 },
  { text: "_ is the root of all evil.", pick: 1 },
  { text: "Think before you _.", pick: 1 },
  { text: "The road to success is paved with _.", pick: 1 },
  { text: "And on his farm he had _, E-I-E-I-O!", pick: 1 },
  { text: "A wild _ appeared! It used _!", pick: 2 },
  { text: "What is your mating call?", pick: 1 },
  { text: "The Himalayas are filled with many perils, such as _.", pick: 1 },
  { text: "There's _ in my soup.", pick: 1 },
  {
    text: "What is the worst thing anyone could say in front of the police?",
    pick: 1
  },
  {
    text:
      "The sad truth is, that at the edge of the universe, there is nothing but _.",
    pick: 1
  },
  { text: "What is the saddest thing you've ever seen?", pick: 1 },
  { text: "If life gives you _, make _.", pick: 2 },
  { text: "What is your favorite book?", pick: 1 },
  { text: "Who needs a bidet when you have _?", pick: 1 },
  { text: "Kill it with _!", pick: 1 },
  { text: "The Xbox One's DRM policy isn't half as bad as _.", pick: 1 },
  { text: "TotalBiscuit's top hat is actually _. ", pick: 1 },
  { text: "Best game of 2013? _, of course.", pick: 1 },
  { text: "I'M-A FIRIN' MAH _!", pick: 1 },
  { text: "How do you get your dog to stop humping your leg?", pick: 1 },
  { text: "_ sounds like a great alternative rock band.", pick: 1 },
  { text: "_. Everything else is uncivilized.", pick: 1 },
  {
    text: "Of my entire collection, my most prized possession is _.",
    pick: 1
  },
  { text: "_! You know, for kids.", pick: 1 },
  { text: "Mom, I swear! Despite its name, _ is NOT a porno!", pick: 1 },
  {
    text:
      "The government of Japan recently passed a law that effectively forbids all forms of _.",
    pick: 1
  },
  { text: "I can't believe I spent most of my paycheck on _.", pick: 1 },
  { text: "_ is the greatest Canadian.", pick: 1 },
  { text: "I write slash fanfiction pairing _ with _.", pick: 2 },
  { text: "_? It's a DLC item.", pick: 1 },
  { text: "Oh god, I can't believe we ate _ at PAX.", pick: 1 },
  { text: "Only in Korea can you see _.", pick: 1 },
  { text: "Alcoholic games of Clue&reg; lead to _.", pick: 1 },
  { text: "_ is the name of my _ cover band.", pick: 2 },
  { text: "The Holy Trinity: _, _, and _!", pick: 3 },
  { text: "Praise _!", pick: 1 },
  { text: "What doesn't work that way?", pick: 1 },
  {
    text: "What can you always find in between the couch cushions?",
    pick: 1
  },
  { text: "What the fuck is wrong with you?", pick: 1 },
  { text: "What is the next great Kickstarter project?", pick: 1 },
  { text: "What is the meaning of life?", pick: 1 },
  { text: "My life for _!", pick: 1 },
  {
    text: "When I was a kid, all we had in Lunchables were three _ and _.",
    pick: 2
  },
  {
    text:
      "On its last dying breath, _ sent out a cry for help. A bunch of _ heard the cry.",
    pick: 2
  },
  {
    text:
      "With Democrats and Republicans in a dead heat, the election was snatched by _ party.",
    pick: 1
  },
  {
    text:
      "Who would have guessed that the alien invasion would be easily thwarted by _.",
    pick: 1
  },
  {
    text: "If you could fuck anyone in the world, who would you choose?",
    pick: 1
  },
  {
    text: "When it comes to hentai, nothing gets me hotter than _.",
    pick: 1
  },
  {
    text: "Lupin the III's latest caper involves him trying to steal _.",
    pick: 1
  },
  { text: "_. YOU SHOULD BE WATCHING.", pick: 1 },
  { text: "_ vs. _. BEST. FIGHT. EVER.", pick: 2 },
  {
    text: "Fresh from Japan: The new smash hit single by _ titled _.",
    pick: 2
  },
  { text: "Congratulations, _.", pick: 1 },
  {
    text:
      "Hayao Miyazaki's latest family film is about a young boy befriending _.",
    pick: 1
  },
  { text: "One thing you almost never see in anime is _.", pick: 1 },
  {
    text: "By far the best panel at any anime convention is the one for _.",
    pick: 1
  },
  { text: "S-Shut up!! I-It's not like I'm _ or anything.", pick: 1 },
  { text: "What is mo&eacute;?", pick: 1 },
  { text: "The English dub of _ sucks worse than _.", pick: 2 },
  { text: "_. BELIEVE IT!", pick: 1 },
  { text: "Make a contract with me, and become _!", pick: 1 },
  { text: "You guys are so wrong. Obviously, _ is best waifu.", pick: 1 },
  {
    text:
      "In the latest chapter of Toriko, our hero hunts down, kills, and eats a creature made entirely of _.",
    pick: 1
  },
  {
    text:
      "On the next episode of Dragon Ball Z, _ is forced to do the fusion dance with _.",
    pick: 2
  },
  { text: "You are already _.", pick: 1 },
  {
    text:
      "THIS _ HAS BEEN PASSED DOWN THE ARMSTRONG FAMILY LINE FOR GENERATIONS!!!",
    pick: 1
  },
  { text: "My favorite episode of _ is the one with _.", pick: 2 },
  { text: "Make a yaoi shipping.", pick: 2 },
  {
    text: "This doujinshi I just bought has _ and _ getting it on, hardcore.",
    pick: 2
  },
  { text: "Make a love triangle.", pick: 3 },
  {
    text:
      "Dr. Black Jack, please hurry! The patient is suffering from a terminal case of _!",
    pick: 1
  },
  { text: "So just who is this Henry Goto fellow, anyway?", pick: 1 },
  {
    text:
      "When Henry Goto is alone and thinks that no one's looking, he secretly enjoys _.",
    pick: 1
  },
  {
    text: "He might just save the universe, if he only had some _!",
    pick: 1
  },
  {
    text:
      "This _ of mine glows with an awesome power! Its _ tells me to defeat you!",
    pick: 2
  },
  { text: "Cards Against Anime: It's more fun than _!", pick: 1 },
  {
    text:
      "On the mean streets of Tokyo, everyone knows that _ is the leader of the _ Gang.",
    pick: 2
  },
  {
    text: "When I found all 7 Dragon Balls, Shenron granted me my wish for _.",
    pick: 1
  },
  { text: "The best part of my _ costume is _.", pick: 2 },
  {
    text:
      "My _ is the _ that will pierce the heavens!! <i>*same white card used for both blanks*</i>",
    pick: 1
  },
  {
    text:
      "After years of searching, the crew of the Thousand Sunny finally found out that the One Piece is actually _.",
    pick: 1
  },
  {
    text: "The World Line was changed when I sent a D-mail to myself about _.",
    pick: 1
  },
  {
    text: "In this episode of Master Keaton, Keaton builds _ out of _ and _.",
    pick: 3
  },
  { text: "So, what have you learned from all of this?", pick: 1 },
  {
    text: "Someday when I have kids, I want to share with them the joys of _.",
    pick: 1
  },
  {
    text: "Who placed first in the most recent Shonen Jump popularity poll?",
    pick: 1
  },
  {
    text:
      "No matter how many times I see it, _ always brings a tear to my eye.",
    pick: 1
  },
  {
    text: "Coming to Neon Alley: _, completely UNCUT &amp; UNCENSORED.",
    pick: 1
  },
  { text: "This year, I'm totally gonna cosplay as _.", pick: 1 },
  {
    text:
      "My favorite hentai is the one where _ is held down and violated by _.",
    pick: 2
  },
  {
    text:
      "Cooking is so fun! Cooking is so fun! Now it's time to take a break and see what we have done! _. YAY! IT'S READY!!",
    pick: 1
  },
  { text: "The most annoying kind of anime fans are _.", pick: 1 },
  { text: "_. So kawaii!! &lt;3 &lt;3", pick: 1 },
  { text: "Animation studio _ is perhaps best known for _.", pick: 2 },
  {
    text: "This is our final battle. Mark my words, I will defeat you, _!",
    pick: 1
  },
  {
    text: "After a long, arduous battle, _ finally met their end by _.",
    pick: 2
  },
  { text: "The best English dub I've ever heard is the one for _.", pick: 1 },
  { text: "You used _. It's super effective!", pick: 1 },
  { text: "_. HE DEDD.", pick: 1 },
  {
    text:
      "I know of opinions and all that, but I just don't understand how anyone could actually enjoy _.",
    pick: 1
  },
  { text: "You see, I'm simply _.", pick: 1 },
  { text: "She'll thaw out if you try _.", pick: 1 },
  {
    text:
      "Yoko Kanno's latest musical score features a song sung entirely by _.",
    pick: 1
  },
  {
    text: "This year, I totally lucked out and found _ in the dealer's room.",
    pick: 1
  },
  {
    text: "If I was a magical girl, my cute mascot sidekick would be _.",
    pick: 1
  },
  { text: "How did I avoid your attack? Simple. By _.", pick: 1 },
  {
    text:
      "In the future of 199X, the barrier between our world and the demon world is broken, and thousands of monsters invade our realm to feed upon _.",
    pick: 1
  },
  { text: "From the creators of Tiger &amp; Bunny: _ &amp; _!!", pick: 2 },
  {
    text: "In truth, the EVA units are actually powered by the souls of _.",
    pick: 1
  },
  {
    text:
      "Dreaming! Don't give it up _! Dreaming! Don't give it up _! Dreaming! Don't give it up _!",
    pick: 3
  },
  { text: "Yo-Ho-Ho! He took a bite of _.", pick: 1 },
  {
    text:
      "The new Gurren Lagann blurays from Aniplex will literally cost you _.",
    pick: 1
  },
  { text: "The most overused anime cliche is _.", pick: 1 },
  { text: "The inspiration behind the latest hit show is _.", pick: 1 },
  {
    text:
      "While writing Dragon Ball, Akira Toriyama would occasionally take a break from working to enjoy _.",
    pick: 1
  },
  { text: "The show was great, until _ showed up.", pick: 1 },
  { text: "Nothing ruins a good anime faster than _.", pick: 1 },
  {
    text:
      "I want to be the very best, like no one ever was! _ is my real test, _ is my cause!",
    pick: 2
  },
  {
    text: "Who are you callin' _ so short he can't see over his own _?!?!",
    pick: 2
  },
  { text: "If you ask me, there need to be more shows about _.", pick: 1 },
  { text: "_. That is the kind of man I was.", pick: 1 },
  {
    text:
      "I'm sorry! I'm sorry! I didn't mean to accidentally walk in on you while you were _!",
    pick: 1
  },
  {
    text:
      "In the latest episode of Case Closed, Conan deduces that it was _ who killed _ because of _.",
    pick: 3
  },
  {
    text:
      "Welcome home, Master! Is there anything your servant girl can bring you today?",
    pick: 1
  },
  {
    text: "In the latest chapter of Golgo 13, he kills his target with _.",
    pick: 1
  },
  {
    text: "Karaoke night! I'm totally gonna sing my favorite song, _.",
    pick: 1
  },
  { text: "Take this! My love, my anger, and all of my _!", pick: 1 },
  { text: "_. Only on Toonami", pick: 1 },
  {
    text: "From the twisted mind of Nabeshin: An anime about _, _, and _.",
    pick: 3
  },
  { text: "Behold the name of my Zanpakuto, _!", pick: 1 },
  { text: "Now! Face my ultimate attack!", pick: 1 },
  { text: "Sasuke has _ implants.", pick: 1 },
  { text: "To save the world, you must collect all 7 _.", pick: 1 },
  {
    text: "The new manga from _ is about a highschool girl discovering _.",
    pick: 2
  },
  { text: "I am in despair! _ has left me in despair!", pick: 1 },
  {
    text:
      "Mamoru Oshii's latest film is a slow-paced, two hour-long cerebral piece about the horrors of _.",
    pick: 1
  },
  { text: "What do I love most about anime?", pick: 1 },
  { text: "The rarest Pok&eacute;mon in my collection is _.", pick: 1 },
  { text: "What do I hate most about anime?", pick: 1 },
  { text: "Watch it! Or I'll take your _.", pick: 1 },
  {
    text:
      "This morning, hundreds of Japanese otaku lined up outside their favorite store to buy the limited collector's edition of _.",
    pick: 1
  },
  {
    text:
      "Every now and then, I like to participate in the time-honored Japanese tradition of _.",
    pick: 1
  },
  { text: "Chicks. Dig. _. <i>Nice.</i>", pick: 1 },
  { text: "New from Studio GAINAX: _ the Animation.", pick: 1 },
  { text: "Using my power of Geass, I command you to do... THIS!", pick: 1 },
  { text: "Don't worry, he's okay! He survived thanks to _.", pick: 1 },
  { text: 'The next big Tokusatsu show: "Super Sentai _ Ranger!"', pick: 1 },
  { text: "In the name of the moon, I will punish _!", pick: 1 },
  {
    text:
      "The Chocolate Underground stopped the Good For You Party by capturing their _ and exposing their leader as _.",
    pick: 2
  },
  {
    text:
      "Who cares about the printing press, did that medieval peasant girl just invent _?!",
    pick: 1
  },
  {
    text:
      "The court finds the defendant, _, guilty of _, and sentences them to a lifetime of _.",
    pick: 3
  },
  { text: "What does Alucard have nightmares about?", pick: 1 },
  {
    text:
      "I've always wanted to become a voice actor, so I could play the role of _.",
    pick: 1
  },
  { text: "It's no secret. Deep down, everybody wants to fuck _.", pick: 1 },
  { text: "Behold! My trap card, _!", pick: 1 },
  {
    text:
      "As part of a recent promotion, Japanese KFCs are now dressing their Colonel Sanders statues up as _.",
    pick: 1
  },
  {
    text:
      "Fighting _ by moonlight! Winning _ by daylight! Never running from a real fight! She is the one named _!",
    pick: 3
  },
  { text: "Don't stand behind him, if you value your _.", pick: 1 },
  { text: 'What the hell is "Juvijuvibro"?!', pick: 1 },
  {
    text:
      "If the anime industry is dying, what will be the final nail in it's coffin?",
    pick: 1
  },
  {
    text:
      "It has been said... That there are entire forests of _, made from the sweetest _.",
    pick: 2
  },
  { text: "IT'S _ TIME!", pick: 1 },
  { text: "My love for you is like _. BERSERKER!", pick: 1 },
  { text: "They are the prey, and we are the _.", pick: 1 },
  { text: "No matter how I look at it, it's your fault I'm not _!", pick: 1 },
  { text: "My Little Sister Can't Be _!", pick: 1 },
  {
    text:
      "By far, the most mind-bogglingly awesome thing I've ever seen in anime is _.",
    pick: 1
  },
  { text: "After eating a Devil Fruit, I now have the power of _.", pick: 1 },
  { text: "That's not a squid! It's _!", pick: 1 },
  {
    text:
      "The mo&eacute; debate was surprisingly civil until someone mentioned _.",
    pick: 1
  },
  {
    text:
      "Anime has taught me that classic literature can always be improved by adding _.",
    pick: 1
  },
  {
    text: "And from Kyoto Animation, a show about cute girls doing _.",
    pick: 1
  },
  { text: '"_."<br>"What the hell, man?!"<br>"_."<br>"Oh, okay."', pick: 2 },
  {
    text: "Madoka Kyouno's nickname for Muginami's older brother is _.",
    pick: 1
  },
  { text: "What do otaku smell like?", pick: 1 },
  { text: "Attention, duelists: My hair is _.", pick: 1 },
  {
    text:
      "Technology improves every day. One day soon, surfing the web will be replaced by _.",
    pick: 1
  },
  {
    text:
      "Despite our Administration's best efforts, we are still incapable of _.",
    pick: 1
  },
  {
    text:
      "At camp, we'd scare each other by telling stories about _ around the fire.",
    pick: 1
  },
  { text: "Choosy Moms Choose _.", pick: 1 },
  { text: "The reason I go to church is to learn about _.", pick: 1 },
  { text: "Show me on _, where he _.", pick: 2 },
  { text: "I wouldn't _ you with _.", pick: 2 },
  {
    text:
      "All attempts at _, have met with failure and crippling economic sanctions.",
    pick: 1
  },
  { text: "Eating _ gave me _.", pick: 2 },
  {
    text: "When Spike is asleep, Twilight likes to read books about _.",
    pick: 1
  },
  { text: "When Luna got to the moon, she was greeted with _.", pick: 1 },
  {
    text: "Twilight Sparkle owns far more books on _ than she'd like to admit.",
    pick: 1
  },
  {
    text:
      "Twilight got bored with the magic of friendship, and now studies the magic of _.",
    pick: 1
  },
  {
    text:
      "Today, Mayor Mare announced her official campaign position on _ and _. No pony was the least bit surprised.",
    pick: 2
  },
  { text: "To much controversy, Princess Celestia made _ illegal.", pick: 1 },
  {
    text:
      "The worst mishap caused by Princess Cadance was when she made _ and _ fall in love.",
    pick: 2
  },
  { text: "The only way to get Opal in the bath is with _.", pick: 1 },
  { text: "The national anthem of Equestria is _.", pick: 1 },
  { text: "The Everfree forest is full of _.", pick: 1 },
  {
    text: "The Elements of Harmony were originally the Elements of _.",
    pick: 1
  },
  { text: "Surprisingly, Canterlot has a museum of _.", pick: 1 },
  {
    text:
      "Should the Elements of Harmony fail, _ is to be used as a last resort.",
    pick: 1
  },
  { text: "Super Speedy _ Squeezy 5000.", pick: 1 },
  {
    text: "Rarity was supposed to have a song about _, but it was cut.",
    pick: 1
  },
  { text: "Rarity's latest dress design was inspired by _.", pick: 1 },
  {
    text: "Rarity has a long forgotten line of clothing inspired by _.",
    pick: 1
  },
  {
    text: "Rainbow Dash received a concussion after flying into _.",
    pick: 1
  },
  {
    text: "Rainbow Dash is the only pony in all of Equestria who can _.",
    pick: 1
  },
  { text: "_ should _ _.", pick: 3 },
  { text: "_ is best pony.", pick: 1 },
  { text: "_ has won the national Equestrian award for _.", pick: 2 },
  {
    text:
      "Aloe and Lotus have been experimenting with a radical treatment that utilizes the therapeutic properties of _.",
    pick: 1
  },
  {
    text:
      "After living for thousands of years Celestia can only find pleasure in _.",
    pick: 1
  },
  {
    text:
      "After a wild night of partying, Fluttershy awakens to find _ in her bed.",
    pick: 1
  },
  { text: "_? That's future Spike's problem.", pick: 1 },
  {
    text:
      "After a wild night of crusading, Applebloom learned that _ was her super special talent.",
    pick: 1
  },
  { text: "CUTIE MARK CRUSADERS; _! YAY!", pick: 1 },
  { text: "BUY SOME _!", pick: 1 },
  {
    text: "Without any warning, Pinkie Pie burst into a song about _.",
    pick: 1
  },
  {
    text:
      "You're a human transported to Equestria! The first thing you'd look for is _.",
    pick: 1
  },
  { text: "Big Mac sleeps soundly whenever _ is with him.", pick: 1 },
  { text: "Zecora is a well known supplier of _ and _.", pick: 2 },
  { text: "And that's how Equestria was made!", pick: 1 },
  {
    text: "Inexplicably, the only thing the parasprites wouldn't eat was _.",
    pick: 1
  },
  {
    text: "In a world without humans, saddles are actually made for _.",
    pick: 1
  },
  { text: "It's not a boulder! It's _!", pick: 1 },
  { text: "It turns out Hitler's favorite pony was _.", pick: 1 },
  { text: "I'd like to be _.", pick: 1 },
  {
    text: "In a stroke of unparalleled evil, Discord turned _ into _.",
    pick: 2
  },
  {
    text: "In a fit of rage, Princess Celestia sent _ to the _ for _.",
    pick: 3
  },
  {
    text:
      "Everypony was shocked to discover that Scootaloo's cutie mark was _.",
    pick: 1
  },
  { text: "Every Morning, Princess Celestia Rises _.", pick: 1 },
  {
    text: "I never knew what _ could be, until you all shared its _ with me.",
    pick: 2
  },
  { text: "Giggle at _!", pick: 1 },
  { text: "Dear Princess Celestia, Today I learned about _. ", pick: 1 },
  { text: "Daring Do and the quest for _.", pick: 1 },
  {
    text:
      "Equestrian researchers have discovered that _ is The 7th Element of Harmony.",
    pick: 1
  },
  {
    text:
      "Despite everypony's expectations, Sweetie Belle's cutie mark ended up being _.",
    pick: 1
  },
  { text: "Prince Blueblood's cutie mark represents _.", pick: 1 },
  { text: "Rainbow Dash has always wanted _.", pick: 1 },
  { text: "Nothing makes Pinkie smile more than _.", pick: 1 },
  {
    text: "Once upon a time, the land of Equestria was ruled by _ and _.",
    pick: 2
  },
  { text: "Ponyville is widely known for _.", pick: 1 },
  {
    text: "Ponyville was shocked to discover _ in Fluttershy's shed.",
    pick: 1
  },
  { text: "Lauren Faust was shocked to find _ in her mailbox.", pick: 1 },
  {
    text:
      "Luna didn't help in the fight against Chrysalis because she was too busy with _.",
    pick: 1
  },
  { text: "My cutie mark would be _.", pick: 1 },
  {
    text: "Not many people know that Tara Strong is also the voice of _.",
    pick: 1
  },
  { text: "Calliborn wants you to draw pornography of _.", pick: 1 },
  { text: "Whenever I see _ on MSPARP, I disconnect immediately.", pick: 1 },
  { text: "_ totally makes me question my sexuality.", pick: 1 },
  {
    text:
      "When Dave received _ from his Bro for his 9th birthday, be felt a little warm inside.",
    pick: 1
  },
  { text: "When a bucket is unavailable, trolls with use _.", pick: 1 },
  { text: "What's in the box, Jack?", pick: 1 },
  { text: 'What makes your kokoro go "doki doki"?', pick: 1 },
  { text: "_. On the roof. Now.", pick: 1 },
  { text: "Your name is JOHN EGBERT and boy do you love _!", pick: 1 },
  { text: "where doing it man. where MAKING _ HAPEN!", pick: 1 },
  {
    text: "The hole in Kanaya's stomach is so large, she can fit _ in it.",
    pick: 1
  },
  {
    text: "Turns out, pre-entry prototyping with _ was not the best idea.",
    pick: 1
  },
  { text: "Vriska killed Spidermom with _.", pick: 1 },
  { text: "Vriska roleplays _ with Terezi as _.", pick: 2 },
  { text: "Vriska's greatest regret is _.", pick: 1 },
  { text: "Wear _. Be _.", pick: 2 },
  { text: "What did Jake get Dirk for his birthday?", pick: 1 },
  { text: "What is the worst thing that Terezi ever licked?", pick: 1 },
  { text: "What is your OT3?", pick: 3 },
  {
    text:
      "The only way to beat Vriska in an eating contest is to put _ on the table.",
    pick: 1
  },
  { text: "Porrim made Kankri a sweater to cover his _.", pick: 1 },
  { text: "Problem Sleuth had a hard time investigating _.", pick: 1 },
  {
    text: "The real reason Terezi stabbed Vriska was to punish her for _.",
    pick: 1
  },
  {
    text: "Rose was rather disgusted when she started reading about _.",
    pick: 1
  },
  {
    text: "The secret way to achieve God Tier is to die on top of _.",
    pick: 1
  },
  { text: "Terezi can top anyone except _.", pick: 1 },
  {
    text: "The thing that made Kankri break his vow of celibacy was _.",
    pick: 1
  },
  {
    text:
      "Little did they know, the key to defeating Lord English was actually _.",
    pick: 1
  },
  {
    text:
      "Latula and Porrin have decided to teach Kankri about the wonders of _.",
    pick: 1
  },
  { text: "Nanna baked a cake for John to commemorate _.", pick: 1 },
  {
    text: "Little known fact: Kurloz's stitching is actually made out of _.",
    pick: 1
  },
  { text: "Nepeta's secret OTP is _ with _.", pick: 2 },
  { text: "Nepeta only likes Karkat for his _.", pick: 1 },
  {
    text:
      "Nobody was surprised to find _ under Jade's skirt. The surprise was she used it for/on _.",
    pick: 2
  },
  {
    text: "The next thing Hussie will turn into a sex joke will be _.",
    pick: 1
  },
  {
    text: "In the final battle, John distracts Lord English by showing him _.",
    pick: 1
  },
  { text: "I warned you about _, bro! I told you, dog!", pick: 1 },
  { text: "John is a good boy. And he loves _.", pick: 1 },
  { text: "It's hard, being _. It's hard and no one understands.", pick: 1 },
  {
    text: "Kanaya reached into her dead lusus's stomach and retrieved _.",
    pick: 1
  },
  {
    text: "John may not be a homosexual, but he has a serious thing for _.",
    pick: 1
  },
  { text: "Karkat gave our universe _.", pick: 1 },
  { text: "Kanaya tells Karkat about _ to cheer him up.", pick: 1 },
  {
    text: "I finally became Tumblr famous when I released a gifset of _.",
    pick: 1
  },
  {
    text:
      "I just found _ in my closet it is like fucking christmas up in here.",
    pick: 1
  },
  {
    text:
      "Hussie unintentionally revealed that Homestuck will end with _ and _ consummating their relationship at last.",
    pick: 2
  },
  { text: "I am _. It's me.", pick: 1 },
  { text: "How do I live without _?", pick: 1 },
  {
    text: "Hussie died on his quest bed and rose as the fully realized _ of _.",
    pick: 2
  },
  {
    text:
      "Gamzee not only likes using his clubs for juggling and strifing, he also uses them for_.",
    pick: 1
  },
  { text: "Getting a friend to read Homestuck is like _.", pick: 1 },
  { text: "For his birthday, Dave gave John _.", pick: 1 },
  { text: "Fuckin' _. How do they work?", pick: 1 },
  { text: "Feferi secretly hates _.", pick: 1 },
  {
    text:
      "For Betty Crocker's latest ad campaign/brainwashing scheme, she is using _ as inspiration.",
    pick: 1
  },
  { text: "Equius beats up Eridan for _.", pick: 1 },
  {
    text:
      "Everybody out of the god damn way. You've got a heart full of _, a soul full of _, and a body full of _.",
    pick: 3
  },
  { text: "Believe it or not, Kankri's biggest trigger is _.", pick: 1 },
  { text: "Dave Strider likes _, but only ironically.", pick: 1 },
  { text: "Alternia's political system was based upon _.", pick: 1 },
  { text: "All _. All of it!", pick: 1 },
  { text: "AG: Who needs luck when you have _?", pick: 1 },
  {
    text:
      "After throwing _ at Karkat's head, Dave made the intriguing discover that troll horns are very sensitive.",
    pick: 1
  },
  {
    text:
      '"Sacred leggings" was a mistranslation. The Sufferer actually died in Sacred _.',
    pick: 1
  },
  { text: "_. It keeps happening!", pick: 1 },
  { text: "_ stays awake at night, crying over _.", pick: 2 },
  { text: "_ makes the Homestuck fandom uncomfortable.", pick: 1 },
  { text: "What's a paladin?", pick: 1 },
  { text: "One of these days i'm just gonna shit my _.", pick: 1 },
  {
    text: "You need to _ your asshole, it's vital to this operation.",
    pick: 1
  },
  { text: "I'm sorry Timmy, but I must _ you.", pick: 1 },
  {
    text:
      "Knowing Chilled's knowledge with Minecraft, he'll probably use _ on _ in his next video.",
    pick: 2
  },
  {
    text: "In his new Co-op work SSoHPKC will be playing _ with _.",
    pick: 2
  },
  { text: "My name is-a _ and i likea da _.", pick: 2 },
  {
    text:
      "GTA shenanigans would not be GTA shenanigans without Seananners dropping _ on _.",
    pick: 2
  },
  { text: "Two Best Friends Play _.", pick: 1 },
  { text: "On this episode of PKA Woody and Wings talk about _.", pick: 1 },
  { text: "Oh great, _ is doing another _ game LP.", pick: 2 },
  { text: "Bro's Angels. We _ hard.", pick: 1 },
  {
    text: "In today's Driftor in-depth episode we shall look at _.",
    pick: 1
  },
  {
    text: "Only Totalbiscuit would spend an hour long video discussing _.",
    pick: 1
  },
  {
    text:
      "Last Thursday, Riorach was identified in public and she proceeded to _.",
    pick: 1
  },
  { text: "What did Pewdiepie overreact to on his channel today?", pick: 1 },
  { text: "This time on Brutalmoose's Top 10, his guest was _.", pick: 1 },
  {
    text:
      "When Sp00n finally removed his horsemask on the livestream, we saw _.",
    pick: 1
  },
  { text: "I give this game a rating of _.", pick: 1 },
  {
    text: "What did Mitch or Bajan Canadian find in the fridge today?",
    pick: 1
  },
  { text: "In _ We Trust.", pick: 1 },
  { text: "What did Criken do this time to break ARMA III? ", pick: 1 },
  {
    text:
      "What was the big prize this time around at the Thrown Controllers panel?",
    pick: 1
  },
  {
    text:
      "In the next episode of Press Heart to Continue: Dodger talks about _.",
    pick: 1
  },
  { text: "But Beardman! Why do you think that _?", pick: 1 },
  {
    text: "And here we have _. Strike it's weakness for MASSIVE damage!",
    pick: 1
  },
  { text: "Pewdiepie's going to play _!?", pick: 1 },
  { text: "Smarty's darkest fear is _.", pick: 1 },
  {
    text: "GaLmHD is so pro at almost every game he plays yet he can`t play_!",
    pick: 1
  },
  { text: "The comment section was nothing but _ arguing about _.", pick: 2 },
  { text: "_, the one you want to get DDoS'd", pick: 1 },
  { text: "Come on and slam, and welcome to the _.", pick: 1 },
  { text: "The Creatures' next member is _.", pick: 1 },
  { text: "Tehsmarty loves the smell of _ in the morning.", pick: 1 },
  {
    text:
      'ZeRoyalViking\'s up and coming game company, "ZEA" accredits their success to _.',
    pick: 1
  },
  { text: "I AM THE _ CZAR!!!", pick: 1 },
  {
    text: "In this week's gauntlet, ChilledChaos challenges Tehsmarty to _.",
    pick: 1
  },
  {
    text: "In this week's gauntlet, Tehsmarty challenges ChilledChaos to _.",
    pick: 1
  },
  { text: "It took hours to edit _ into the video.", pick: 1 },
  {
    text: "FUN FACT: The Daleks were originally shaped to look like _.",
    pick: 1
  },
  {
    text:
      "At this new Doctor Who themed restaurant, you can get a free _ if you can eat a plate of bangers and mash in under 3 minutes.",
    pick: 1
  },
  { text: "There's a new dance on Gallifrey. It's called the _.", pick: 1 },
  {
    text:
      "They announced a new LEGO Doctor Who game! Rumor has it that _ is an unlockable character.",
    pick: 1
  },
  {
    text:
      "I think the BBC is losing it. They just released a Doctor Who themed _.",
    pick: 1
  },
  {
    text:
      "It's a little known fact that if you send a _ to the BBC, they will send you a picture of The Doctor.",
    pick: 1
  },
  { text: "According to the Daleks, _ is better at _.", pick: 2 },
  { text: "Who is going to be The Doctor's next companion?", pick: 1 },
  {
    text: "In all of space and time you decide that _ is a good choice?!",
    pick: 1
  },
  {
    text:
      "Originally, the 50th special was going to have _ appear, but the BBC decided against it in the end.",
    pick: 1
  },
  {
    text: "Adipose were thought to be made of fat, but are really made of _.",
    pick: 1
  },
  {
    text:
      "After we watch an episode, I've got some _-flavored Jelly Babies to hand out.",
    pick: 1
  },
  {
    text:
      "I was ok with all the BAD WOLF graffiti, until someone wrote it on _.",
    pick: 1
  },
  { text: "Who should be the 13th Doctor?", pick: 1 },
  {
    text:
      "Jack Harkness, I can't leave you alone for a minute! I turn around and you're trying to seduce _.",
    pick: 1
  },
  {
    text:
      "The Chameleon circuit is working again...somewhat. Instead of a phone booth, the TARDIS is now a _.",
    pick: 1
  },
  { text: "Bowties are _.", pick: 1 },
  { text: "Old and busted: EXTERMINATE! New hotness: _.", pick: 1 },
  {
    text:
      "I hear the next thing that will cause The Doctor to regenerate is _.",
    pick: 1
  },
  { text: "Wibbly-wobbly, timey-wimey _.", pick: 1 },
  { text: "What's going to be The Doctor's new catchphrase?", pick: 1 },
  {
    text: "They found some more last episodes! They were found in _.",
    pick: 1
  },
  { text: "The next Doctor Who spin-off is going to be called _.", pick: 1 },
  { text: "I'd give up _ to travel with The Doctor.", pick: 1 },
  { text: "_ was sent to save _.", pick: 2 },
  {
    text: "The Doctor did it! He saved the world again! This time using a _.",
    pick: 1
  },
  {
    text: "Nothing can bring down Ruslana's chippy mood,, not even _.",
    pick: 1
  },
  { text: "The correct procedure for listening to Fairytale is:", pick: 2 },
  {
    text:
      "The BBC have decided to dig up another old relic and send _ to represent the UK.",
    pick: 1
  },
  {
    text:
      "Krista Siegfrids' chronic marrying spree added _ to her victims list.",
    pick: 1
  },
  { text: "_. As guaranteed as Cyprus giving Greece 12 points.", pick: 1 },
  { text: "HELLO EUROPE, _ CALLING! 12 POINTS GO TO _!", pick: 2 },
  {
    text:
      "Lena goes from Eurovision winner, to participant, to score reader. Her next job is _.",
    pick: 1
  },
  {
    text:
      "Women kissing each other on stage, men kissing each other on stage, what next?",
    pick: 1
  },
  {
    text:
      "In an attempt to foster friendly attitudes between ESC entrants, the host country made them _ and _.",
    pick: 2
  },
  {
    text: "I'm in loooooooove with a fairytaaaale, even thouuugh it _.",
    pick: 1
  },
  {
    text:
      "The winning act had _ and _ as the singer belted out lyrics about _.",
    pick: 3
  },
  {
    text: "Johnny Logan is a man of many talents; he wins Eurovisions and _.",
    pick: 1
  },
  { text: "A (few) word(s) synonymous with Eurovision fans: _", pick: 1 },
  { text: "This country has declined to participate due to _.", pick: 1 },
  {
    text:
      "Misheard lyrics of Verjamem resulted in people thinking Eva Boto screeched _.",
    pick: 1
  },
  { text: "This performance contains flashing images, _ and _.", pick: 2 },
  {
    text: "Serbia entered magical girls. How horribly will their contract end?",
    pick: 2
  },
  { text: "There's rumours of a country buying votes with _.", pick: 1 },
  { text: "Your ideal interval act.", pick: 3 },
  { text: "Azerbaijan, Land of _.", pick: 1 },
  { text: "_ _ Divided By _.", pick: 3 },
  { text: "_ <br>~Skeeter The Lurker", pick: 1 },
  {
    text:
      "_ adds a thread in the Anti-_ group, and everybody loses their fucking minds.",
    pick: 2
  },
  { text: "_ is the least autistic _ on Fimfiction.", pick: 2 },
  { text: "_ is Best Pony.", pick: 1 },
  { text: "_ signalled the end of the _ Age of FiMfiction.net.", pick: 2 },
  {
    text: "_ posted that they're not working on fics for a while, because _.",
    pick: 2
  },
  { text: "_ was a strong stallion.", pick: 1 },
  {
    text: "_ signalled the end of the Golden Age of FiMfiction.net.",
    pick: 1
  },
  { text: "A clopfic about _ with _, and _ is a sexy orphan.", pick: 3 },
  { text: "_, _, and _ in a sexy circlejerk.", pick: 3 },
  {
    text: "Fallout Equestria is _ and tends to overdramaticize its _.",
    pick: 2
  },
  { text: "An alternate universe where _ is instead _.", pick: 2 },
  {
    text: "I commissioned a picture of _ violating _ with _'s dick.",
    pick: 3
  },
  { text: "Hey, let's cross over _ and MLP! Why the fuck not?", pick: 1 },
  { text: "I just read a fic where _ was fucking _.", pick: 2 },
  {
    text:
      "I hope someone writes a fic about _ because I am too fucking lazy to do it myself.",
    pick: 1
  },
  { text: "I swear I'm going to quit the fandom if _ happens.", pick: 1 },
  { text: "I just started the _verse.", pick: 1 },
  { text: "The Incredible _ Of A Winning _.", pick: 2 },
  { text: "The cardinal sin of FiMFic noobs: _ without _", pick: 2 },
  { text: "The _ Group of _ Excellence.", pick: 2 },
  { text: "The _ Bureau.", pick: 1 },
  { text: "That fucking idiot _ ragequit the fandom over _.", pick: 2 },
  {
    text:
      "Someone should write a clopfic of _ fucking _, using _ as lubricant.",
    pick: 3
  },
  { text: "Short Skirts and _.", pick: 1 },
  { text: "Remember when _ was on every page?", pick: 1 },
  { text: "RainbowBob's newest clopfic: _ X _", pick: 2 },
  { text: "Oh, look, _ made a fan group for themselves.", pick: 1 },
  { text: "Oh, fuck, someone made a group about _.", pick: 1 },
  { text: "My OTP is _ and _.", pick: 2 },
  { text: "My Little Dashie? How about My Little _?", pick: 1 },
  { text: "My _ Pony", pick: 1 },
  { text: "knighty's new blogpost is about _", pick: 1 },
  { text: "If only people bothered to read Ezn's _ Guide!", pick: 1 },
  { text: "There's a crossover fic about _ and _ in the FB.", pick: 2 },
  { text: "Listen to the _ on this shit.", pick: 1 },
  { text: "Kirby has two iconic abilities: suck and _.", pick: 1 },
  { text: "Jon can't get enough of _.", pick: 1 },
  {
    text: "Jon believes that the most important part of any video game is _.",
    pick: 1
  },
  { text: "Put a hole in that _!", pick: 1 },
  { text: "Pikachu, use your _ attack!", pick: 1 },
  { text: "Jon's mom called him to tell him about _.", pick: 1 },
  { text: "Real talk? _.", pick: 1 },
  { text: "Jon and Arin win! They realize _ is more important.", pick: 1 },
  { text: "Jon and Arin suck at _.", pick: 1 },
  { text: "How many _ does Mega Man get?", pick: 1 },
  {
    text: "If the _ wasn't there, I would do. But it's there, so it's not.",
    pick: 1
  },
  { text: "Jon just wants to touch _.", pick: 1 },
  { text: "Jon can't survive air travel without _.", pick: 1 },
  { text: "It's no use! Take _!", pick: 1 },
  { text: "Is there anything to gain from this?", pick: 1 },
  { text: "I've been _ again!", pick: 1 },
  { text: "Rolling around at the speed of _!", pick: 1 },
  { text: "This time on Guest Grumps, we have _.", pick: 1 },
  { text: "Top five games, go! 1? Mega Man X. 2-5? _.", pick: 1 },
  { text: "Why is Steam Train so controversial?", pick: 1 },
  { text: "WOOP WOOP WOOP I'M A _!", pick: 1 },
  {
    text:
      'You know what fan mail makes me the happiest every time I see it? It\'s the ones where people are like, "_." ',
    pick: 1
  },
  { text: "You're ruining my integrity! _ won't hire me now!", pick: 1 },
  { text: "Nightshade: The Claws of _.", pick: 1 },
  { text: "Number one! With a bullet! Zoom in on the _!", pick: 1 },
  { text: "Oh, it's _!", pick: 1 },
  { text: "One slice of _ please.", pick: 1 },
  { text: "Use your _!", pick: 1 },
  { text: "Look at this guy, he's like _.", pick: 1 },
  { text: "Look, it's _!", pick: 1 },
  { text: "Next time on Game Grumps, _!", pick: 1 },
  {
    text: '"These new _ t-shirts are gonna change some lives, Arin."',
    pick: 1
  },
  { text: "...What the bloody hell are you two talking about?!", pick: 1 },
  { text: "_. This is like one of my Japanese animes!", pick: 1 },
  { text: "_. Put that in, Barry.", pick: 1 },
  { text: "_. MILLIONS ARE DEAD!!!", pick: 1 },
  { text: "_. It's no use!", pick: 1 },
  { text: "_. I AAAAAAIN'T HAVIN' THAT SHIT!", pick: 1 },
  { text: "_? Ten-outta-ten!", pick: 1 },
  { text: "Barry, we need a replay on _.", pick: 1 },
  { text: "Barry, add _ into the video!", pick: 1 },
  {
    text: "Barry entertains himself by watching old episodes of _.",
    pick: 1
  },
  { text: "Arin has an adverse reaction to _.", pick: 1 },
  {
    text: "Arin believes that the most important part of any video game is _.",
    pick: 1
  },
  {
    text: "And there it was...Kirby had finally met the _ of the lost city.",
    pick: 1
  },
  { text: "And then, as a fuckin' goof, I'd put a hole in _.", pick: 1 },
  { text: '"You want cheese pizza?" "No. _."', pick: 1 },
  { text: "Don't throw _! It's expensive to somebody!", pick: 1 },
  { text: "Dude, real talk? _.", pick: 1 },
  { text: "I'm not even SELLING _!", pick: 1 },
  { text: "Do you remember the episode where Ash caught a _?", pick: 1 },
  {
    text: "I tell you once, I tell you twice! _ is good for economy!",
    pick: 1
  },
  { text: "I wanna put my _ in her!", pick: 1 },
  { text: "How many nose hairs does _ have?", pick: 1 },
  {
    text:
      "I certainly can't do it without you, and I know you can't do it without _!",
    pick: 1
  },
  { text: "Game Grumps: sponsored by _.", pick: 1 },
  { text: "Give _ a chance! He'll grow on you!", pick: 1 },
  { text: "For my first attack, I will juggle _ to impress you.", pick: 1 },
  { text: "Fuck, I found a _.", pick: 1 },
  {
    text: "Everybody wants to know about me, but they don't know about my _.",
    pick: 1
  },
  {
    text:
      "Fool me once, I'm mad. Fool me twice? How could you. Fool me three times, you're officially _.",
    pick: 1
  },
  { text: "Eat your _, son.", pick: 1 },
  { text: "Egoraptor's fiancee is actually a _.", pick: 1 },
  { text: "The Grumps' latest silly player names are _ and _.", pick: 2 },
  { text: "If you don't know what _ is, you can't go to _.", pick: 2 },
  {
    text: "In this corner, _; in the other corner, _; it's Game Grumps VS!",
    pick: 2
  },
  { text: "IF I CAN'T BE _, I SURE AS HELL CAN BE _!!", pick: 2 },
  { text: "COME ON AND _, AND WELCOME TO THE _!", pick: 2 },
  {
    text: "If _ evolved from _, why the fuck is there still _, dude?!",
    pick: 3
  },
  {
    text: "_? Pretty smart. _? Pretty fuckin' smart. _? FUCKING GENIUS!!!!",
    pick: 3
  },
  { text: "_ Train!", pick: 1 },
  { text: "_ is not Jon's strong suit.", pick: 1 },
  { text: "_: Better than deer shit!", pick: 1 },
  { text: "_ WINS!", pick: 1 },
  { text: "Real talk? Is that _ _?", pick: 2 },
  { text: "Welcome back to _ _!", pick: 2 },
  { text: "JON'S _, SHOW US YOUR _.", pick: 2 },
  { text: "Look at that _-ass _!", pick: 2 },
  { text: "Barry's sheer skill at _ is unmatched.", pick: 1 },
  { text: "BARRY! SHOW _ AGAIN!", pick: 1 },
  { text: "_ don't even cost this less!", pick: 1 },
  { text: "I don't like the _ flavor.", pick: 1 },
  { text: "_ has aged really well.", pick: 1 },
  { text: "_ Grumps!", pick: 1 },
  { text: "_ is Jon's favorite video game of all time.", pick: 1 },
  { text: "_ is GREAT GREAT GREAT!", pick: 1 },
  { text: "What can be found in Arin's chins?", pick: 1 },
  { text: "What am I willing to put up with today?", pick: 1 },
  { text: "Welcome to Sonic Team! We make _, I think!", pick: 1 },
  { text: "Welcome back to _.", pick: 1 },
  { text: "What's better than Skyward Sword?", pick: 1 },
  { text: "WHAT THE FUCK IS A _?!", pick: 1 },
  { text: "What is the boopinest shit?", pick: 1 },
  { text: "What do Mumbo's magic words mean?", pick: 1 },
  { text: "Who replaced Jon when he left GameGrumps?", pick: 1 },
  { text: "When I look in the mirror I see _.", pick: 1 },
  { text: "What's the real reason Jon left?", pick: 1 },
  { text: "BENCH ALL THE _.", pick: 1 },
  {
    text: "It's DJ Manny in the hizouse, playing _ all night long!",
    pick: 1
  },
  { text: "Tom is good, but he's not _ good.", pick: 1 },
  { text: "Jorgi the Corgi most definitely enjoys _.", pick: 1 },
  {
    text: "Connie the Condor often doesn't talk on skype because of _.",
    pick: 1
  },
  {
    text:
      "Every weekend, Golby enjoys drinking _ before getting into a fight with _ and having sex with _.",
    pick: 3
  },
  {
    text: "Every weekend, Golby likes to _ then _ before finally _.",
    pick: 3
  },
  { text: "What strange Korean delicacy will Mark enjoy today?", pick: 1 },
  { text: "I got a new tattoo, it looks a bit like _.", pick: 1 },
  { text: "When Barta isn't talking he's _.", pick: 1 },
  { text: "Cindi suddenly turned into Steven after _.", pick: 1 },
  { text: "You're so _ I'll have to delete you.", pick: 1 },
  {
    text:
      "On a night out, Golby will traditionally get into a fight with a _ then have sex with a _ before complaining about a hangover from too much _.",
    pick: 3
  },
  { text: "_ + _ = Golby.", pick: 2 },
  { text: "The OGN was fun, but there was far too much _ cosplay.", pick: 1 },
  { text: '"What are you thinking?" "You know, _ and stuff."', pick: 1 },
  { text: "If Ned Stark had _, he never would have _.", pick: 2 },
  { text: "Brace yourselves, _ is coming.", pick: 1 },
  { text: "In exchange for his sister, Viserys was given _.", pick: 1 },
  {
    text: "Despite his best efforts, King Robert filled his reign with _.",
    pick: 1
  },
  { text: "_ was proclaimed the true king of the Seven Kingdoms.", pick: 1 },
  { text: "In _, you win or you lose.", pick: 1 },
  { text: "Because of _, Danerys was called _ by everyone.", pick: 2 },
  { text: "I will take what is mine with _ and _.", pick: 2 },
  { text: "There is no word for _ in Dothraki.", pick: 1 },
  {
    text:
      "In the next Game of Thrones book, George R. R. Martin said _ will _.",
    pick: 2
  },
  { text: "All hail _! King of _!", pick: 2 },
  { text: "A Lannister always pays _.", pick: 1 },
  { text: "First lesson, stick them with _.", pick: 1 },
  { text: "In the name of _, first of his _.", pick: 2 },
  { text: "The things I do for _.", pick: 1 },
  { text: "Hodor only ever says _.", pick: 1 },
  { text: "The next Game of Thrones book will be titled _ of _.", pick: 2 },
  {
    text: "A Dothraki wedding without _ is considered a dull affair.",
    pick: 1
  },
  {
    text: "After I was caught _, I was forced to join the Night's Watch.",
    pick: 1
  },
  { text: "A man without _ is a man without power.", pick: 1 },
  { text: "D&D 4.0 isn't real D&D because of the _.", pick: 1 },
  { text: "It's a D&D retroclone with _ added.", pick: 1 },
  { text: "Storygames aren't RPGs because of the _.", pick: 1 },
  { text: "The Slayer's Guide to _.", pick: 1 },
  { text: "Worst character concept ever: _, but with _.", pick: 2 },
  { text: "Alightment: Chaotic _", pick: 1 },
  { text: "What made the paladin fall? _", pick: 1 },
  { text: "The portal leads to the quasi-elemental plane of _.", pick: 1 },
  { text: "The Temple of Elemental _.", pick: 1 },
  { text: "Pathfinder is basically D&D _ Edition.", pick: 1 },
  { text: "_ : The Storytelling Game.", pick: 1 },
  {
    text: "People are wondering why Steve Jackson published GURPS _.",
    pick: 1
  },
  { text: "Linear Fighter, Quadratic _.", pick: 1 },
  { text: "You start with 1d4 _ points.", pick: 1 },
  {
    text:
      "Back when I was 12 and I was just starting playing D&D, the game had _.",
    pick: 1
  },
  { text: "Big Eyes, Small _.", pick: 1 },
  { text: "In the grim darkness of the future there is only _.", pick: 1 },
  { text: "My innovative new RPG has a stat for _.", pick: 1 },
  { text: "A true gamer has no problem with _.", pick: 1 },
  {
    text: "Elminster cast a potent _ spell and then had sex with _.",
    pick: 2
  },
  { text: "The Deck of Many _.", pick: 1 },
  { text: "You are all at a tavern when _ approach you.", pick: 1 },
  { text: "/r/ _.", pick: 1 },
  { text: "The Ada Initiative is now attacking _.", pick: 1 },
  { text: "Not another _ in the hotel elevator!", pick: 1 },
  {
    text:
      "Closing Ceremonies drinking game: Every time _ is mentioned... DRINK!",
    pick: 1
  },
  {
    text:
      "In a Congressional hearing, US CYBERCOM commander Gen. Alexander claimed the latest data breach was due to _.",
    pick: 1
  },
  { text: "The Maker Faire was unexpectedly interrupted by _.", pick: 1 },
  { text: "Do you even _?", pick: 1 },
  { text: "Come to the dark side, we have _.", pick: 1 },
  { text: "Y U NO _!!!!!", pick: 1 },
  { text: "While alone in the server room I _.", pick: 1 },
  { text: "When I get drunk I am an expert on _", pick: 1 },
  {
    text:
      "Well, guess what? I've got a fever, and the only prescription is more _.",
    pick: 1
  },
  { text: "We should take _ and push it _.", pick: 2 },
  { text: "We decided to _ to raise money for the EFF.", pick: 1 },
  { text: "TSA wouldn't allow me through because of my _.", pick: 1 },
  { text: "Tonight's Final Hacker Jeopardy category will be _!", pick: 1 },
  { text: "Today's PaulDotCom podcast featured _.", pick: 1 },
  { text: "These are not the _ you are looking for.", pick: 1 },
  { text: "The snozberries taste like _.", pick: 1 },
  { text: "The only winning move is to _.", pick: 1 },
  { text: "The next cyber war will feature _.", pick: 1 },
  { text: "The best part of Alexis Park was all the _.", pick: 1 },
  { text: "So long and thanks for all the _.", pick: 1 },
  { text: "Security through obscurity is better than _.", pick: 1 },
  { text: "Rule 34 _.", pick: 1 },
  { text: "Rock, Paper, Scissors, Lizard, _.", pick: 1 },
  {
    text: "Our most powerful weapon for the Zombie Apocalypse will be _.",
    pick: 1
  },
  {
    text: "Only half of programming is coding. The other 90% is _.",
    pick: 1
  },
  { text: "One does not simply _.", pick: 1 },
  { text: "On the Internet, no one can tell you're _.", pick: 1 },
  { text: "Occupy _.", pick: 1 },
  {
    text:
      "Next year's scavenger hunt is rumored to include finding a _ with a _.",
    pick: 2
  },
  { text: "Next time we meet we should _.", pick: 1 },
  { text: "My extremely large _ is what makes me better than you.", pick: 1 },
  { text: "My _ brings all the _ to the yard.", pick: 2 },
  { text: "Most hackers smell like _.", pick: 1 },
  { text: "Las Vegas is best known for _.", pick: 1 },
  { text: "Keep calm and _.", pick: 1 },
  { text: "It's dangerous to go alone. Take _.", pick: 1 },
  { text: "It smells like _ in this room.", pick: 1 },
  {
    text: "In a shocking move Archive.org decided to NOT back up _.",
    pick: 1
  },
  { text: "I'mma let you finish but _ is the best _ of all time.", pick: 2 },
  { text: "I'm fucking tired of hearing about _.", pick: 1 },
  {
    text: "I would be doing more with my life, except for this _ in the way.",
    pick: 1
  },
  { text: "I work 80 hours a week and still can't afford a _.", pick: 1 },
  {
    text: "I used to be a hacker like you, until I took a(n) _ to the knee.",
    pick: 1
  },
  { text: "I use _ to secure all of my personal data.", pick: 1 },
  { text: "I spotted the fed and all I got was _.", pick: 1 },
  {
    text: "I look like a geeky hacker, but I don't know anything about _.",
    pick: 1
  },
  { text: "I have the biggest _, ever!", pick: 1 },
  { text: "I find your lack of _ disturbing.", pick: 1 },
  { text: "I can't believe they rejected my talk on _.", pick: 1 },
  { text: "I can haz _.", pick: 1 },
  { text: "HOLY _ BATMAN!!", pick: 1 },
  { text: "High Tech start-up company combines _ with _.", pick: 2 },
  { text: "Go home _, you're drunk.", pick: 1 },
  { text: "Go Go Gadget _!", pick: 1 },
  { text: "Drink all the _. Hack all the _.", pick: 2 },
  {
    text: "Def Con Kids will now focus on teaching young hackers _.",
    pick: 1
  },
  { text: "Confession Bear Says: _", pick: 1 },
  { text: "But does _ run NetBSD?", pick: 1 },
  { text: "Am I the only one around here who _.", pick: 1 },
  { text: "All I did was _ but someone gave me a red card.", pick: 1 },
  { text: "35% of all hackers have to deal with _.", pick: 1 },
  { text: "_. There's an app for that.", pick: 1 },
  { text: "_. This is why I can't have nice things!", pick: 1 },
  {
    text:
      "_: You keep using that term. I do not think it means what you think it means.",
    pick: 1
  },
  { text: "_ is now outsourced to call centers in India.", pick: 1 },
  { text: "_ shot first.", pick: 1 },
  { text: "_ Killed the barrel roll", pick: 1 },
  { text: "_ A'int Nobody Got Time For Dat!!", pick: 1 },
  { text: "_ Put a bird on it!", pick: 1 },
  { text: "_ makes me puke rainbows.", pick: 1 },
  { text: "_ is also monitored by Prism.", pick: 1 },
  { text: "_ is what keeps us together.", pick: 1 },
  { text: "_ is a better replacement for crypto.", pick: 1 },
  { text: "_ riding a Segway", pick: 1 },
  {
    text:
      "One day, over my fireplace, I'm going to have a massive painting of _. You know, to remind me where I came from.",
    pick: 1
  },
  {
    text: "I just met you and this is crazy, but here's _, so _ maybe",
    pick: 2
  },
  { text: "It's only _ if you get caught!", pick: 1 },
  { text: "_: The Next Generation", pick: 1 },
  { text: "Terminator 4: _", pick: 1 },
  { text: "Disney presents _ on ice!", pick: 1 },
  { text: "_. The other white meat.", pick: 1 },
  { text: "A _ a day keeps the _ away.", pick: 2 },
  { text: "I'm sweating like a _ at a _.", pick: 2 },
  { text: "I love the smell of _ in the morning.", pick: 1 },
  { text: "You're not gonna believe this, but _.", pick: 1 },
  { text: "_. All the cool kids are doing it.", pick: 1 },
  { text: "So I was _ in my cubicle at work, and suddenly _!", pick: 2 },
  { text: "Baskin Robbins just added a 32nd flavor: _!", pick: 1 },
  { text: "I can drive and _ at the same time.", pick: 1 },
  { text: "_ ain't nothin' to fuck wit'!", pick: 1 },
  {
    text:
      "Hey, Susie. I know your job is _ but can you just grab me _? Thanks.",
    pick: 2
  },
  {
    text: "This month in Cosmo: how to give your man _ at the expense of _.",
    pick: 2
  },
  { text: "Are you there, God? It's me, _", pick: 1 },
  { text: "50 Shades of _.", pick: 1 },
  { text: "It's not length, it's _.", pick: 1 },
  {
    text: "Whatever, Peeta. You'll never understand my struggle with _.",
    pick: 1
  },
  { text: "Men are from _, women are from _.", pick: 2 },
  { text: "Why does the Komen Foundation hate Planned Parenthood?", pick: 1 },
  { text: "Math is hard. Let's go _!", pick: 1 },
  {
    text:
      "The latest proposal in the Texas legislature is to take away _ from women.",
    pick: 1
  },
  {
    text: "If you don't mind my asking, how *do* lesbians have sex?",
    pick: 1
  },
  {
    text:
      "In her next romcom, Katherine Heigl plays a woman who falls in love with her boss's _.",
    pick: 1
  },
  { text: "The Pantone color of the year is inspired by _.", pick: 1 },
  {
    text:
      "What is Olivia Pope's secret to removing red wine stains from white clothes?",
    pick: 1
  },
  { text: "Why exactly was Alanis so mad at Uncle Joey?", pick: 1 },
  { text: "Why do men on the Internet send me pictures of _?", pick: 1 },
  { text: 'What\'s my weapon of choice in the "War on Women"?', pick: 1 },
  { text: "What's Seth MacFarlane's problem?", pick: 1 },
  {
    text: "I couldn't help but wonder: was it Mr. Big, or was it _?",
    pick: 1
  },
  { text: "What fell into my bra?", pick: 1 },
  { text: "What's my preferred method of contraception?", pick: 1 },
  {
    text:
      "Sofia Coppola's new film focuses on a wealthy young white woman feeling alienated by _.",
    pick: 1
  },
  { text: "_: the Tori Amos song that changed my life", pick: 1 },
  {
    text: "Something old, something new, something borrowed, and _.",
    pick: 1
  },
  { text: "Why can't we have nice things?", pick: 1 },
  { text: "That was more awkward than _.", pick: 1 },
  { text: "Boardgame Online is more fun than _.", pick: 1 },
  { text: "I hate My Little Pony more than _ hates _.", pick: 2 },
  { text: "I love My Little Pony more than _ loves _.", pick: 2 },
  { text: "Cat gifs are cuter than _. ", pick: 1 },
  { text: "If it fits, I _. ", pick: 1 },
  { text: "_. My moon and my stars. ", pick: 1 },
  { text: "A _ always pays his debts. ", pick: 1 },
  { text: "My ovaries just exploded because of _. ", pick: 1 },
  { text: "Chewie, _ it!", pick: 1 },
  { text: "Steven Moffat has no _. ", pick: 1 },
  { text: "Dobby is _!!", pick: 1 },
  { text: "_ for temperature. ", pick: 1 },
  { text: "I always _ ass - razor1000.", pick: 1 },
  { text: "I got _ to the frontpage ", pick: 1 },
  { text: "Not asking for upvotes but _.", pick: 1 },
  { text: "Not sure if Imgur reference or _.", pick: 1 },
  { text: "ERMAGERD! _.", pick: 1 },
  { text: "Press 0 twice for _.", pick: 1 },
  { text: "Having a bit of fun with the new _.", pick: 1 },
  { text: "I know this is a selfie but _.", pick: 1 },
  { text: "I know this is going to get downvoted to hell but _.", pick: 1 },
  { text: "If you could stop _, that'd be greeeeattt. ", pick: 1 },
  {
    text: "Imgur: where the points don't matter and the _ is made up.",
    pick: 1
  },
  { text: "If _ happens because of _, I will eat my socks.", pick: 2 },
  { text: "Put that _ back where it came from or so help me.", pick: 1 },
  { text: "No, no, you leave _. We no like you.", pick: 1 },
  { text: "FOR _!!!!", pick: 1 },
  { text: "Confession Bear: When I was 6, I _ on my _.", pick: 2 },
  { text: "Actual Advice Mallard: Always _.", pick: 1 },
  { text: "Yer a wizard _", pick: 1 },
  { text: "Am I the only one around here who _?", pick: 1 },
  { text: "_. Forever Alone.", pick: 1 },
  { text: "_. TOO SAD AND TOO TINY!", pick: 1 },
  { text: "For every upvote I will _.", pick: 1 },
  { text: "_. Awkward boner. ", pick: 1 },
  { text: "You know nothing _.", pick: 1 },
  { text: "Most of the time you can only fit one_ in there.", pick: 1 },
  { text: "I've never seen anyone so _ while _.", pick: 2 },
  { text: "OH MY GOD _. ARE YOU FUCKING KIDDING ME!?", pick: 1 },
  { text: "SAY GOODBYE TO_.", pick: 1 },
  { text: "+1 for _.", pick: 1 },
  { text: "I don't always _. But when I do_..", pick: 2 },
  { text: "That _ tasted so bad, I needed a Jolly Rancher. ", pick: 1 },
  { text: "Any love for _?", pick: 1 },
  { text: "The _ for this _ is TOO DAMN HIGH. ", pick: 2 },
  { text: "France is _", pick: 1 },
  { text: "When I found _ in usersubmitted, I was flabbergasted. ", pick: 1 },
  { text: "Justin Bieber is a _.", pick: 1 },
  { text: "A hipster needs a _ as much as a fish needs a _.", pick: 2 },
  { text: "I love bacon as much as _ loves _.", pick: 2 },
  { text: "In Japan, _ is the new sexual trend.", pick: 1 },
  { text: "I am a leaf on the _.", pick: 1 },
  { text: "I have a bad feeling about _.", pick: 1 },
  { text: "Weasley is our _.", pick: 1 },
  { text: "Are you my _?", pick: 1 },
  {
    text: "I used to be an adventurer like you, then I took a/an _ in the _.",
    pick: 2
  },
  { text: "You've got to check out _ Fluxx!", pick: 1 },
  { text: "For the love of GOD, and all that is HOLY, _!!", pick: 1 },
  { text: "The new Operating System will be called _.", pick: 1 },
  {
    text:
      "Yes, Mr. Death... I'll play you a game! But not chess! My game is _.",
    pick: 1
  },
  {
    text: "I cannot preach hate and warfare when I am a disciple of _.",
    pick: 1
  },
  { text: "Call of Duty Modern Warfare 37: War of _!", pick: 1 },
  {
    text: "In brightest day, in blackest night, no _ shall escape my sight.",
    pick: 1
  },
  { text: "My next video turorial covers _.", pick: 1 },
  { text: "We found a map Charlie! A map to _ Mountain!", pick: 1 },
  { text: "Honey badger don't give a _!", pick: 1 },
  { text: "Good. Bad. I'm the guy with the _.", pick: 1 },
  { text: "Hail to the _, baby.", pick: 1 },
  { text: "Shop smart. Shop _.", pick: 1 },
  {
    text:
      "Alright you Primitive Screwheads, listen up! You see this? This... is my _!",
    pick: 1
  },
  { text: "Every sperm is _.", pick: 1 },
  { text: "I see you have the machine that goes _.", pick: 1 },
  { text: "I seek The Holy _.", pick: 1 },
  {
    text: "How will we stop an army of the dead at our castle walls?",
    pick: 1
  },
  { text: "Faster than a speeding _! More powerful than a _!", pick: 2 },
  {
    text:
      "Fighting a never-ending battle for truth, justice, and the American _!",
    pick: 1
  },
  { text: "Don't make me _. You wouldn't like me when I'm _.", pick: 1 },
  { text: "With great power comes great _.", pick: 1 },
  { text: "I'm loyal to nothing, General - except the _.", pick: 1 },
  { text: "Patriotism doesn't automatically equal _.", pick: 1 },
  { text: "Disguised as _, mild-mannered _. ", pick: 2 },
  { text: "Able to leap _ in a single bound! ", pick: 1 },
  { text: "These aren't the _ you're looking for.", pick: 1 },
  { text: "We're gonna need a bigger _.", pick: 1 },
  { text: "Beavis and Butthead Do _.", pick: 1 },
  { text: "I, for one, welcome our new _ overlords.", pick: 1 },
  {
    text:
      "You know, there's a million fine looking women in the world, dude. But they don't all bring you _ at work. Most of 'em just _.",
    pick: 2
  },
  { text: "Teenage Mutant Ninja _.", pick: 1 },
  { text: "Achy Breaky _.", pick: 1 },
  { text: "I'm not a _, but I play one on TV", pick: 1 },
  { text: "An African or European _?", pick: 1 },
  {
    text:
      "Well you can't expect to wield supreme executive power just 'cause some watery tart threw a _ at you!",
    pick: 1
  },
  { text: '"_!" "It\'s only a model."', pick: 1 },
  {
    text: "Good night. Sleep well. I'll most likely _ you in the morning.",
    pick: 1
  },
  { text: "I am The Dread Pirate _.", pick: 1 },
  {
    text: "Do you want me to send you back to where you were, _ in _?",
    pick: 2
  },
  { text: "I see _ people", pick: 1 },
  { text: "_? We don't need no stinking _!", pick: 1 },
  { text: "I am not fat! I'm just _.", pick: 1 },
  { text: "Oh my god! They killed _!", pick: 1 },
  {
    text:
      "The anxiously awaited new season of Firefly is rumoured to kick off with an action packed scene, featuring River Tam's amazing feats of _!",
    pick: 1
  },
  { text: "Two by two, hands of _.", pick: 1 },
  { text: "Wendy's _ & Juicy.", pick: 1 },
  { text: "I swear by my pretty floral _, I will _ you.", pick: 2 },
  { text: "At _, where every day is _ day!", pick: 2 },
  { text: "I HATE it when _(s) crawl(s) up my _!", pick: 2 },
  { text: "_. Like a boss!", pick: 1 },
  { text: "_'s latest music video features a dozen _ on _.", pick: 3 },
  { text: "_. It's not just for breakfast anymore.", pick: 1 },
  { text: "In Soviet _, _ _s you.", pick: 3 },
  { text: "_. Part of this nutritious breakfast.", pick: 1 },
  { text: "_. It's what's for dinner!", pick: 1 },
  { text: "Where's the beef?", pick: 1 },
  { text: "_. Breakfast of champions!", pick: 1 },
  { text: "I _, therefore I _.", pick: 2 },
  {
    text: "Welcome to my secret lair. I call it The Fortress of _.",
    pick: 1
  },
  { text: "My safeword is _.", pick: 1 },
  { text: "I like _, but _ is a hard limit!", pick: 2 },
  { text: "Team _!", pick: 1 },
  { text: "We went to a workshop on tantric _.", pick: 1 },
  { text: "Thou shalt not_.", pick: 1 },
  { text: "I am the King of _!", pick: 1 },
  { text: "The only good _ is a dead _.", pick: 1 },
  { text: "A vote for _ is a vote for _.", pick: 2 },
  { text: "_ is the new _.", pick: 2 },
  { text: "Bitches LOVE _!", pick: 1 },
  { text: "This year's _ guest of honour is _.", pick: 2 },
  { text: "This will be the greatest _con ever!", pick: 1 },
  {
    text: "_ at last! _ at last! Thank God almighty, I'm _ at last! ",
    pick: 1
  },
  {
    text:
      "I have a dream that one day this nation will rise up and live out the true meaning of its creed:",
    pick: 1
  },
  { text: "These are my minions of _!", pick: 1 },
  {
    text: "You have been found guilty of 5 counts of _, and 13 counts of _.",
    pick: 2
  },
  { text: "We just adopted _ from the pound.", pick: 1 },
  {
    text:
      "It was the happiest day of my life when I became the proud parent of _.",
    pick: 1
  },
  {
    text:
      "With a million times the destructive force of all our nuclear weapons combined, no one was able to survive _.",
    pick: 1
  },
  {
    text: "Little Miss. Muffet sat on her tuffet, eating her _ and _.",
    pick: 2
  },
  {
    text:
      "I qualify for this job because I have several years experience in the field of _.",
    pick: 1
  },
  { text: "Disney presents _, on ice!", pick: 1 },
  {
    text:
      "Though Thomas Edison invented the lightbulb, he is also known for giving us _.",
    pick: 1
  },
  { text: "I will not eat them Sam-I-Am. I will not eat _.", pick: 1 },
  { text: "Genius is 10% inspiration and 90% _.", pick: 1 },
  { text: "I work out so I can look good when I'm _.", pick: 1 },
  { text: "What's the time? _ time!", pick: 1 },
  {
    text:
      "If a pot of gold is at one end of the rainbow, what is at the other?",
    pick: 1
  },
  {
    text: "There is a time for peace, a time for war, and a time for _.",
    pick: 1
  },
  {
    text: "A fortune teller told me I will live a life filled with _.",
    pick: 1
  },
  {
    text:
      "It is often argued that our ancestors would have never evolved without the aid of _.",
    pick: 1
  },
  { text: "_ a day keeps _ away.", pick: 2 },
  { text: "The 1930's is often regarded as the golden age of _.", pick: 1 },
  {
    text:
      "Scientists have reverse engineered alien technology that unlocks the secrets of _.",
    pick: 1
  },
  {
    text:
      "Who could have guessed that the alien invasion would be easily thwarted by _.",
    pick: 1
  },
  {
    text:
      "With the Democrats and Republicans in a dead heat, the election was snatched by the _ party.",
    pick: 1
  },
  { text: "Mama always said life was like _.", pick: 1 },
  { text: "Pay no attention to _ behind the curtain!", pick: 1 },
  { text: "We got the third rope, now where's the fourth?", pick: 1 },
  { text: "Tonights main event, _ vs. _.", pick: 2 },
  { text: "Tackle, Dropdown, _.", pick: 1 },
  { text: "Christopher Daniels is late on his _.", pick: 1 },
  { text: "Instead of booking _, they should have booked _.", pick: 2 },
  { text: "Genius is 10% inspiration, 90% _.", pick: 1 },
  { text: "They found _ in the dumpster behind _.", pick: 2 },
  { text: "The best thing I ever got for Christmas was _.", pick: 1 },
  { text: "There's no crying in _.", pick: 1 },
  {
    text: "Mastodon! Pterodactyl! Triceratops! Sabretooth Tiger! _!",
    pick: 1
  },
  { text: "Don't eat the _.", pick: 1 },
  { text: "He did _ with the _!?!", pick: 2 },
  { text: "SOOOOO hot, want to touch the _.", pick: 1 },
  { text: "Stop looking at me _!", pick: 1 },
  { text: "I'm cuckoo for _ puffs.", pick: 1 },
  { text: "Silly rabbit, _ are for kids.", pick: 1 },
  {
    text:
      "When Verity snuck out for her nightly exhibitionistic jaunt, she didn't expect to come face to face with _.",
    pick: 1
  },
  {
    text:
      "Programmable clothes that can turn into any imaginable garment are great, but didn't the designers consider _?",
    pick: 1
  },
  {
    text:
      "Procurator Marcus Amandus set out to explore Lake Ontarius and discovered _.",
    pick: 1
  },
  {
    text:
      "You can satiate any sexual proclivity in Metamor City, if you look hard enough. Even _.",
    pick: 1
  },
  {
    text:
      "The new performers in the Artbodies strip club have raised a few eyebrows. Who'd have thought to combine _ with _?",
    pick: 2
  },
  {
    text:
      "In the next episode of Monster Whisperer, Dale Clearwater helps a _ whose tentacle monster is plagued with _.",
    pick: 2
  },
  {
    text: "The title of the new erotica anthology this month is: 'Like _.'",
    pick: 1
  },
  {
    text:
      "Because of the 'accident' yesterday, the Scout Academy now forbids cadets from having any contact whatsoever with _.",
    pick: 1
  },
  {
    text:
      "When confronted by an excited tentacle monster, it's best to just relax and think of _.",
    pick: 1
  },
  { text: "A Man, A Woman, and a _.", pick: 1 },
  { text: "Between love and madness lies _.", pick: 1 },
  {
    text:
      "Instead of chess, the Grim Reaper now gambles for your soul with a game of _.",
    pick: 1
  },
  { text: "My father gave his life fighting to protect _ from _.", pick: 2 },
  { text: "Why is my throat sore?", pick: 1 },
  { text: "_ sparked a city-wide riot that only ended with _.", pick: 2 },
  {
    text:
      "I'm very sorry Mrs. Smith, but Little Billy has tested positive for _.",
    pick: 1
  },
  {
    text: "Instead of beating them, Chris Brown now does _ to women.",
    pick: 1
  },
  {
    text: "Instead of cutting, trendy young emo girls now engage in _.",
    pick: 1
  },
  { text: "The definition of rock bottom is gambling away _.", pick: 1 },
  {
    text: "The Mayan prophecies really heralded the coming of _ in 2012.",
    pick: 1
  },
  {
    text:
      "The next US election will be fought on the key issues of _ against _.",
    pick: 2
  },
  { text: "When I was 10 I wrote to Santa wishing for _.", pick: 1 },
  { text: "Where or How I met my last signifigant other: _.", pick: 1 },
  { text: "_, Never leave home without it.", pick: 1 },
  { text: "_. This is my fetish.", pick: 1 },
  {
    text: "David Icke's newest conspiracy theory states that _ caused _.",
    pick: 2
  },
  { text: "I did _ so you don't have to!", pick: 1 },
  { text: "I need your clothes, your bike, and _.", pick: 1 },
  {
    text:
      "In a new Cold War retro movie, the red menace tries to conquer the world through the cunning use of _.",
    pick: 1
  },
  {
    text: "In college, our lecturer made us write a report comparing _ to _.",
    pick: 2
  },
  {
    text:
      "In The Hangover part 3, those four guys have to deal with _, _, and _.",
    pick: 3
  },
  { text: "My zombie survival kit includes food, water, and _.", pick: 1 },
  { text: "The way to a man's heart is through _.", pick: 1 },
  { text: "What was the theme of my second wedding?", pick: 1 },
  { text: "What's the newest Japanese craze to head West?", pick: 1 },
  { text: "Everybody loves _.", pick: 1 },
  { text: "I can only express myself through _.", pick: 1 },
  {
    text: "My new porn DVD was completely ruined by the inclusion of _",
    pick: 1
  },
  { text: "My three wishes will be for _, _, and _.", pick: 3 },
  {
    text: "The latest horrifying school shooting was inspired by _.",
    pick: 1
  },
  {
    text: "I got fired because of my not-so-secret obsession over _.",
    pick: 1
  },
  { text: "My new favourite sexual position is _", pick: 1 },
  { text: "_ caused Northernlion to take stupid damage.", pick: 1 },
  { text: "_ Is the best item in The Binding of Isaac.", pick: 1 },
  { text: "Everything's coming up _.", pick: 1 },
  { text: "Even _ is/are better at video games than Northernlion.", pick: 1 },
  { text: "But that _ has sailed.", pick: 1 },
  { text: "Get in my _ zone.", pick: 1 },
  { text: "Fuck the haters, this is _.", pick: 1 },
  { text: "Finding something like _ would turn this run around.", pick: 1 },
  { text: "_: The Northernlion Story.", pick: 1 },
  { text: "_ is/are Northernlion's worst nightmare.", pick: 1 },
  { text: "_ is the worst item in The Binding of Isaac.", pick: 1 },
  { text: "As always, I will _ you next time!", pick: 1 },
  { text: '"Hey everybody and welcome to Let\'s Look At _!"', pick: 1 },
  {
    text: "_? Well, I won't look a gift horse in the mouth on that one.",
    pick: 1
  },
  { text: "More like the Duke of _, right?", pick: 1 },
  { text: "No one man should have all that _.", pick: 1 },
  { text: "Let's Look At: _.", pick: 1 },
  { text: "Northernlion's latest novelty Twitter account is @_.", pick: 1 },
  {
    text: "Northernlion's refusal to Let's Play _ was probably a good call.",
    pick: 1
  },
  {
    text:
      "Of all the things that Ryan and Josh have in common, they bond together through their mutual love of _.",
    pick: 1
  },
  {
    text: "Northernlion has been facing ridicule for calling _ a rogue-like.",
    pick: 1
  },
  { text: "Northernlion always forgets the name of _.", pick: 1 },
  { text: "I'm in the permanent _ state.", pick: 1 },
  { text: "If sloth _ are wrong I don't want to be right.", pick: 1 },
  { text: "I can do _ and die immediately afterward.", pick: 1 },
  {
    text:
      "I don't even see _ anymore; all I see are blondes, brunettes, redheads...",
    pick: 1
  },
  { text: "JSmithOTI: Total _.", pick: 1 },
  { text: "Legend has it, the Thug of Porn was arrested for _.", pick: 1 },
  { text: "Invaded the world of _.", pick: 1 },
  { text: "It's _, ya dangus!", pick: 1 },
  { text: "Whenever I _, take a drink.", pick: 1 },
  { text: "We're rolling in _!", pick: 1 },
  { text: "_ was full of leeches.", pick: 1 },
  { text: "What do you give to the CEO of Youtube as a gift?", pick: 1 },
  { text: "Dang it, _!", pick: 1 },
  { text: "Today's trivia topic is _.", pick: 1 },
  { text: "My apologies to the _ estate.", pick: 1 },
  {
    text:
      "The Youtube chat proved ineffective, so instead we had to communicate via _.",
    pick: 1
  },
  { text: "Pimp your _!", pick: 1 },
  { text: "The stream was going well until _.", pick: 1 },
  { text: "Travel by _.", pick: 1 },
  { text: "This new game is an interesting _-like-like.", pick: 1 },
  { text: "What interrupted the #NLSS?", pick: 1 },
  { text: "Say that to my face one more time and I'll start _.", pick: 1 },
  { text: "Roguelike? How about _-like.", pick: 1 },
  { text: "The stream broke when Ryuka stepped on the _ key.", pick: 1 },
  {
    text: "Recently, Northernlion has felt woefully insecure due to _.",
    pick: 1
  },
  { text: "Krazy Mike lost to _!", pick: 1 },
  { text: "The hero of the stream was _.", pick: 1 },
  { text: "Oh my god, he's using _ magic!", pick: 1 },
  { text: "Sometimes, a man's just gotta _.", pick: 1 },
  { text: "_ has invaded!", pick: 1 },
  { text: "One thing Northernlion was right about was _.", pick: 1 },
  { text: "What would you do if Ohm really did just die?", pick: 1 },
  {
    text: "JSmithOTI is referred to as a Scumlord, but his friends call him _.",
    pick: 1
  },
  { text: "Praise the _!", pick: 1 },
  { text: "We're having technical difficulties due to _.", pick: 1 },
  { text: "I beat Blue Baby with only _ and _!", pick: 2 },
  {
    text: "Northernlion has alienated fans of _ by calling them _.",
    pick: 2
  },
  {
    text:
      "Northernlion was fired from his teaching job and had to flee South Korea after an incident involving _ and _.",
    pick: 2
  },
  {
    text:
      "Northernlion's doctor diagnosed him today with _, an unfortunate condition that would lead to _.",
    pick: 2
  },
  { text: "_ was indicted on account of _.", pick: 2 },
  { text: "_: The _ Story.", pick: 2 },
  { text: "And now we're going to be fighting _ on _.", pick: 2 },
  {
    text: "Hello everybody, welcome to a new episode of _ plays _.",
    pick: 2
  },
  { text: "I'd sacrifice _ at the Altar.", pick: 1 },
  { text: "Fox would still be here if not for _.", pick: 1 },
  { text: "I wasn't even that drunk! I just had some _, _, and _.", pick: 3 },
  {
    text:
      "The only way NL is ever going to make it to Hell in Spelunky is by using _.",
    pick: 1
  },
  {
    text:
      "Welcome back to The Binding of Isaac. Today's challenge run will be based on _.",
    pick: 1
  },
  {
    text:
      "Well there's nothing wrong with _ by any stretch of the imagination.",
    pick: 1
  },
  { text: "This time on _ vs. _, we're playing _.", pick: 3 },
  {
    text: "After winning yet another race, Josh made _ tweet about _.",
    pick: 2
  },
  { text: "Today on Crusader Kings 2, NL plays King _ the _.", pick: 2 },
  {
    text:
      "That's the way _ did it, that's the way _ does it, and it''s worked out pretty well so far.",
    pick: 2
  },
  {
    text: "After Mars, _ is the next furthest planet from the sun.",
    pick: 1
  },
  { text: "What would Ohm do?", pick: 1 },
  {
    text:
      "Ohmwrecker is known for his MLG online play. What people don't know is that he's also MLG at _.",
    pick: 1
  },
  {
    text: "Follow MichaelALFox on Twitter and you can see pictures of _.",
    pick: 1
  },
  {
    text:
      "Green loves the new Paranautical Activity item _, but keeps comparing it to the crossbow.",
    pick: 1
  },
  { text: "_ is really essential to completing the game.", pick: 1 },
  { text: "The next movie reading will be of _.", pick: 1 },
  { text: "How did Northernlion unite Scotland?", pick: 1 },
  { text: "What gave Ohmwrecker his gaming powers?", pick: 1 },
  { text: "Hello anybody, I am _Patrol.", pick: 1 },
  { text: "My channel is youtube.com/_.", pick: 1 },
  {
    text: "Northernlion's cat Ryuka is known for _ while he records.",
    pick: 1
  },
  { text: "My name is _ and today we'll be checking out _.", pick: 2 },
  {
    text:
      "It's true that Green9090 is _, but we must all admit that Ohm is better at _",
    pick: 2
  },
  { text: "I have _, can you _ me?", pick: 2 },
  { text: "_! Get off the _!", pick: 2 },
  {
    text:
      "Mewtwo achieved a utopian society when he eliminated _ once and for all.",
    pick: 1
  },
  {
    text:
      "The only thing that caused more of a shitfit than Mewtwo's new form is _.",
    pick: 1
  },
  {
    text:
      "The idiots in that one room at the Westin finally got kicked out of Anthrocon for _.",
    pick: 1
  },
  { text: "Furaffinity went down for 48 hours because of _.", pick: 1 },
  {
    text: "My most shameful orgasm was the time I masturbated to _.",
    pick: 1
  },
  { text: "I got an STD from _.", pick: 1 },
  { text: "_ is serious business.", pick: 1 },
  {
    text:
      "If you don't pay your Comcast cable bill, they will send _ after you.",
    pick: 1
  },
  { text: "What are the worst 3 cards in your hand right now?", pick: 3 },
  {
    text:
      "Yu-Gi-Oh players were shocked when the win condition of holding 5 Exodia pieces was replaced by _, _, and _. ",
    pick: 3
  },
  {
    text: "In recent tech news, computers are now being ruined by _.",
    pick: 1
  },
  { text: "I was fapping to _, but _ walked in on me.", pick: 2 },
  { text: "_ ruined the _ fandom for all eternity.", pick: 2 },
  {
    text: "You don't want to find _ in your Furnando's Lasagna Wrap.",
    pick: 1
  },
  {
    text: "I unwatched his FurAffinity page because he kept posting _.",
    pick: 1
  },
  { text: "Anthrocon was ruined by _.", pick: 1 },
  {
    text: "In a news conference, Obama pulled out _, to everyone's surprise.",
    pick: 1
  },
  { text: "Nights filled with _.", pick: 1 },
  { text: "_ Game of the Year Edition.", pick: 1 },
  {
    text: "What was going through Osama Bin Laden's head before he died?",
    pick: 1
  },
  { text: "The lion, the witch, and _.", pick: 1 },
  { text: "In the next episode, SpongeBob gets introduced to _. ", pick: 1 },
  { text: "Justin Beiber's new song is all about _.", pick: 1 },
  { text: "Keith Richards enjoys _ on his food.", pick: 1 },
  {
    text: "The new fad diet is all about making people do _ and eat _.",
    pick: 2
  },
  { text: "Grand Theft Auto&trade;: _.", pick: 1 },
  { text: "The victim was found with _.", pick: 1 },
  { text: "I whip my _ back and forth.", pick: 1 },
  { text: "What is love without _?", pick: 1 },
  { text: "_ 2012.", pick: 1 },
  { text: "What is Curious George so curious about?", pick: 1 },
  { text: "What is the next big sideshow attraction?", pick: 1 },
  {
    text: "Lady Gaga has revealed her new dress will be made of _.",
    pick: 1
  },
  { text: "_ ruined many people's childhood.", pick: 1 },
  { text: "Who needs college when you have _.", pick: 1 },
  { text: "When short on money, you can always _.", pick: 1 },
  { text: "What is literally worse than Hitler?", pick: 1 },
  { text: "I wouldn't fuck _ with _'s dick.", pick: 2 },
  { text: "The next Assassin's Creed game will take place in _.", pick: 1 },
  {
    text: "In the next Punch Out!!, _ will be the secret final boss.",
    pick: 1
  },
  { text: "One does not simply walk into _.", pick: 1 },
  { text: "The next pokemon will combine _ and _.", pick: 2 },
  {
    text: "Instead of playing Cards Against Humanity, you could be _.",
    pick: 1
  },
  { text: "Who is GLaDOS's next test subject?", pick: 1 },
  { text: "In his second term, Obama will rid America of _.", pick: 1 },
  { text: "I never thought _ would be so enjoyable.", pick: 1 },
  { text: "In the future, _ will fuel our cars.", pick: 1 },
  { text: "What is Japan's national pastime?", pick: 1 },
  { text: "I've got the whole world in my _.", pick: 1 },
  { text: "What is the answer to life's question?", pick: 1 },
  {
    text: "No one in the office expected the bromance between _ and _.",
    pick: 2
  },
  { text: "Select two cards to create your team name.", pick: 2 },
  { text: "This week on VS, _ challenges _ to a game of _.", pick: 3 },
  {
    text:
      "The war's over. We're holding a parade in _'s honor. _ drives the float, and _ is in charge of confetti.",
    pick: 3
  },
  { text: "_ is the best _ ever. Of all time.", pick: 2 },
  { text: "_ wins! _ is a horse!", pick: 2 },
  {
    text:
      "If you got $1,000,000 per week, would you _, but in the next day, you'd have to _?",
    pick: 2
  },
  { text: "My name is _, and I hate _!", pick: 2 },
  { text: "Why was Michael screaming at Gavin?", pick: 1 },
  { text: "Would you guys still like me if my name was _?", pick: 1 },
  { text: "You threw it against the wall like a _!", pick: 1 },
  { text: "_ is _ as dicks.", pick: 2 },
  { text: "Who has a fake Internet girlfriend?", pick: 1 },
  { text: "Why is Geoff cool?", pick: 1 },
  { text: "Why are we here?", pick: 1 },
  { text: "What's in Gavin's desk?", pick: 1 },
  { text: "What would be your chosen catchphrase?", pick: 1 },
  { text: "Where does Ray belong?", pick: 1 },
  { text: "Where are we going for lunch?", pick: 1 },
  { text: "What makes Caboose angry?", pick: 1 },
  { text: "What mysteries lie beyond Jack's beard? ", pick: 1 },
  { text: "What makes Michael the angriest?", pick: 1 },
  { text: "What is your biggest feature?", pick: 1 },
  { text: "_ is the worst on the Podcast.", pick: 1 },
  { text: "_. That's top.", pick: 1 },
  {
    text: 'After getting wasted at PAX, Burnie announced that "I am _!"',
    pick: 1
  },
  { text: "Barbara sucks _.", pick: 1 },
  { text: "Close up of my _.", pick: 1 },
  { text: "Come to Fort _!", pick: 1 },
  { text: "Describe yourself in one word/phrase.", pick: 1 },
  { text: "_ is probably a Venusaur kind of guy.", pick: 1 },
  { text: "This week on AHWU, _.", pick: 1 },
  { text: "This week on Immersion, we are going to test _.", pick: 1 },
  { text: "The next RvB cameo will be voiced by _.", pick: 1 },
  {
    text: "They questioned Ryan's sanity after finding _ in his house.",
    pick: 1
  },
  { text: "What is Game Night?", pick: 1 },
  { text: "What are fire hydrants called in England?", pick: 1 },
  { text: "What does Ryan's kid listen to?", pick: 1 },
  { text: "People like _.", pick: 1 },
  { text: "RT Recap, featuring _!", pick: 1 },
  { text: "My _ is trying to die.", pick: 1 },
  { text: "On tonight's Let's Play, the AH crew plays _.", pick: 1 },
  {
    text:
      "So, I was just walking along, until suddenly _ came along and attacked me.",
    pick: 1
  },
  { text: "Thanks to _ for this week's theme song.", pick: 1 },
  { text: "Shout out to _!", pick: 1 },
  { text: "Shout out to my mom. Called my Teddy Bear _.", pick: 1 },
  { text: "It's not my fault. Somebody put _ in my way.", pick: 1 },
  { text: "It's a _ out there.", pick: 1 },
  {
    text: "If you were allowed to do one illegal thing, what would it be? ",
    pick: 1
  },
  { text: "If you could have any superpower, what would it be?", pick: 1 },
  { text: "LLLLLLLLLLLLLET'S _!", pick: 1 },
  { text: "Lindsay could fuck up _.", pick: 1 },
  { text: "Let's do _ again! This is fun!", pick: 1 },
  { text: "Joel plays _.", pick: 1 },
  { text: "Fight, fight, fight, _?", pick: 1 },
  { text: "Dude, I got sixteen _!", pick: 1 },
  { text: 'Does our house say "We love _?"', pick: 1 },
  { text: "Detective _ is down!", pick: 1 },
  {
    text: "If Jack was frog and you kissed him, what would he turn into?",
    pick: 1
  },
  { text: "I'ma smother you in my _!", pick: 1 },
  { text: "Fuck it, I mean _, right?", pick: 1 },
  { text: "_ doesn't need to be judged right now.", pick: 1 },
  { text: "_ is a terrible thing to do to the _!", pick: 2 },
  { text: "/_ delicately from the butt.", pick: 1 },
  { text: "/slides hand up your _.", pick: 1 },
  { text: "_ &amp; _: Worst mods ever.", pick: 2 },
  { text: "/_ all over this post.", pick: 1 },
  { text: "_ was better before the anon meme.", pick: 1 },
  { text: "We'd love to have you at _ Island!", pick: 1 },
  { text: "_ is not an island.", pick: 1 },
  { text: "_ runs into the forest, screaming.", pick: 1 },
  { text: "But what are your thoughts on _?", pick: 1 },
  {
    text: "Bad news guys, my parents found that thread involving _.",
    pick: 1
  },
  { text: "Cute, fun and _.", pick: 1 },
  { text: "Chaos ensued when Wankgate banned _.", pick: 1 },
  { text: "Excuse me, but I identify as _.", pick: 1 },
  { text: "Does anyone _? I feel like the only one.", pick: 1 },
  { text: "How can there be a group of people more _ than us?", pick: 1 },
  { text: "Great, another _ event.", pick: 1 },
  { text: "I can only _ if I feel a deep emotional connection.", pick: 1 },
  { text: "How's my driving?", pick: 1 },
  { text: "I have a PHD in _.", pick: 1 },
  {
    text: "I can't believe we just spent a whole page wanking about _.",
    pick: 1
  },
  { text: "I need deets on _, stat.", pick: 1 },
  { text: "I just benchpressed, like, 14 _.", pick: 1 },
  {
    text: "I randomly began to _ and _ came galloping up the stairs.",
    pick: 2
  },
  { text: "I predict _ will close by the end of the year.", pick: 1 },
  { text: "I see Wankgate's bitching about _ again.", pick: 1 },
  { text: "I'm literally shaking and _ right now.", pick: 1 },
  { text: "I'm married to _ on the astral plane.", pick: 1 },
  { text: "I'm really into _, so please don't kinkshame.", pick: 1 },
  { text: "I'm sad we lost _ in the exodus from LJ to DW.", pick: 1 },
  {
    text: "I'm starting a game where the characters are stuck in _.",
    pick: 1
  },
  { text: "I'm taking commissions for _!", pick: 1 },
  {
    text: "How dare you not warn for _! Don't you know how triggering that is?",
    pick: 1
  },
  {
    text:
      "In this world, sexual roles are divided into three categories: the _, the _, and the _",
    pick: 3
  },
  { text: "It's _ o'clock.", pick: 1 },
  { text: "ITT: _.", pick: 1 },
  { text: "Join my new game about _!", pick: 1 },
  { text: "Keep fucking that _.", pick: 1 },
  { text: "Let me tell you about _.", pick: 1 },
  { text: "Log in and _.", pick: 1 },
  {
    text: "My favorite thread is the one where _ has kinky sex with _.",
    pick: 2
  },
  { text: "RPAnons made me _.", pick: 1 },
  { text: "Raising money for _! Please replurk!", pick: 1 },
  { text: "Only _ would play from _.", pick: 2 },
  { text: "OMG you guys I have so many feels about _!", pick: 1 },
  { text: "no actually i don't care at all, i don't even _. :))))", pick: 1 },
  {
    text: "New game idea! You're kidnapped by _ and forced into _.",
    pick: 2
  },
  { text: "My OTP: _ x _.", pick: 2 },
  { text: "My headcanon is that _ is _.", pick: 2 },
  { text: "The perfect username for my next character: _.", pick: 1 },
  { text: "The _ is happy.", pick: 1 },
  { text: "That _. You know, *that* one.", pick: 1 },
  { text: "Someone left a _ out in the rain.", pick: 1 },
  {
    text:
      'Someone just stuck their head out of the window and screamed "_\'s UP!"',
    pick: 1
  },
  { text: "Since _ is on hiatus, fans have migrated to _.", pick: 2 },
  { text: "Signal boosting for _!", pick: 1 },
  { text: "SHUT UP ABOUT YOUR _.", pick: 1 },
  { text: "Why was I banned?", pick: 1 },
  { text: "Who apps _ to a sex game?", pick: 1 },
  { text: "We need a new post. This one smells like _.", pick: 1 },
  { text: "Why was I asked for app revisions?", pick: 1 },
  { text: "There are too many memes about _.", pick: 1 },
  { text: "There is no _ in Holly Heights.", pick: 1 },
  { text: "The thing I hate most about RP is _.", pick: 1 },
  { text: "Their _ are of age.", pick: 1 },
  { text: "You sound _, tbh.", pick: 1 },
  { text: "Who should I play next?", pick: 1 },
  { text: "You can't fist _.", pick: 1 },
  { text: '_ has the "mount" keyword.', pick: 1 },
  { text: "_ probably tastes better than Quiznos.", pick: 1 },
  {
    text: "Nickelodeon's next kids' game show is \"_\", hosted by _.",
    pick: 2
  },
  { text: "_.", pick: 1 },
  { text: 'Next on GSN: "The $100,000 _."', pick: 1 },
  { text: "Who dunnit? _ with _ in _.", pick: 3 },
  { text: "Much _. So _. Wow.", pick: 2 },
  {
    text:
      'At the last PAX, Paul and Storm had _ thrown at them during "Opening Band".',
    pick: 1
  },
  { text: "Don't slow down in East Cleveland or _.", pick: 1 },
  { text: "Drunken games of Pretend You're Xyzzy lead to _ and _.", pick: 2 },
  { text: "_, by Bad Dragon&reg;.", pick: 1 },
  { text: "_ are so goddamn cool.", pick: 1 },
  {
    text: "Once I started roleplaying _, it was all downhill from there.",
    pick: 1
  },
  { text: "Don't knock _ until you've tried it.", pick: 1 },
  {
    text: "_ looks pretty in all the art, but have you seen one in real life?",
    pick: 1
  },
  {
    text:
      "My landlord had a lot of uncomfortable questions for me when when he found _ in my bedroom while I was at work.",
    pick: 1
  },
  {
    text: "Everyone on this site has such strong opinions about _.",
    pick: 1
  },
  { text: "I realized they were a furry when they mentioned _.", pick: 1 },
  {
    text:
      "Whoa, I might fantasize about _, but I'd never actually go that far in real life.",
    pick: 1
  },
  {
    text:
      "Realizing, too late, the implications of your interest in _ as a child.",
    pick: 1
  },
  {
    text:
      "I've been into _ since before I hit puberty, I just didn't know what it meant.",
    pick: 1
  },
  {
    text: "I'm no longer allowed near _ after the incident with _.",
    pick: 2
  },
  { text: "It all started with _.", pick: 1 },
  { text: "I'll roleplay _, you can be _.", pick: 2 },
  {
    text: "Only my internet friends know that I fantasize about _.",
    pick: 1
  },
  { text: "Everyone really just goes to the cons for _.", pick: 1 },
  { text: "My Original Character's name is _.", pick: 1 },
  { text: "My secret tumblr account where I post nothing but _.", pick: 1 },
  {
    text: "The panel I'm looking forward to most at AC this year is...",
    pick: 1
  },
  { text: "If my parents ever found _, I'd probably be disowned.", pick: 1 },
  { text: "It's really hard not to laugh at _.", pick: 1 },
  { text: "The most recent item in my search history.", pick: 1 },
  { text: "_ ruined the fandom.", pick: 1 },
  {
    text: "I didn't believe the rumors about _, until I saw the videos.",
    pick: 1
  },
  { text: "_. Yeah, that's a pretty interesting way to die.", pick: 1 },
  {
    text:
      "After being a furry for so long, I can never see _ without getting a little aroused.",
    pick: 1
  },
  {
    text: "I knew I needed to leave the fandom when I realized I was _.",
    pick: 1
  },
  {
    text:
      "Yeah, I know I have a lot of _ in my favorites, but I'm just here for the art.",
    pick: 1
  },
  {
    text:
      "I never felt more accomplished than when I realized I could fit _ into my ass.",
    pick: 1
  },
  { text: "Okay, _? Pretty much the cutest thing ever.", pick: 1 },
  { text: 'I\'m not a "furry," I prefer to be called _.', pick: 1 },
  { text: "_ is my spirit animal.", pick: 1 },
  { text: "In my past life, I was _.", pick: 1 },
  {
    text: "I'm not even sad that I devote at least six hours of each day to _.",
    pick: 1
  },
  { text: "_. This is what my life has come to.", pick: 1 },
  { text: "Fuck _, get _.", pick: 2 },
  { text: "_? Oh murr.", pick: 1 },
  { text: "I would bend over for _.", pick: 1 },
  { text: "I think having horns would make _ complicated.", pick: 1 },
  { text: "_? Oh, yeah, I could get my mouth around that.", pick: 1 },
  { text: "What wouldn't I fuck?", pick: 1 },
  {
    text:
      "When I thought I couldn't go any lower, I realized I would probably fuck _.",
    pick: 1
  },
  {
    text:
      "I knew my boyfriend was a keeper when he said he'd try _, just for me.",
    pick: 1
  },
  { text: "I've been waiting all year for _.", pick: 1 },
  {
    text: "I can't wait to meet up with my internet friends for _.",
    pick: 1
  },
  {
    text: "Did you hear about the guy that smuggled _ into the hotel?",
    pick: 1
  },
  {
    text:
      "I'm not even aroused by normal porn anymore, I can only get off to _ or _.",
    pick: 2
  },
  { text: "No, look, you don't understand. I REALLY like _.", pick: 1 },
  {
    text: "I don't think my parents will ever accept that the real me is _.",
    pick: 1
  },
  {
    text:
      "You can try to justify _ all you want, but you don't have to be _ to realize it's just plain wrong.",
    pick: 2
  },
  { text: "I remember when _ was just getting started.", pick: 1 },
  { text: "_ are definitely the new huskies.", pick: 1 },
  { text: "The real reason I got into the fandom? _.", pick: 1 },
  {
    text: "_ is no substitute for social skills, but it's a start.",
    pick: 1
  },
  {
    text: "_ is a shining example of what those with autism can really do.",
    pick: 1
  },
  {
    text:
      "I don't know how we got on the subject of dragon cocks, but it probably started with _.",
    pick: 1
  },
  { text: "Actually coming inside _.", pick: 1 },
  {
    text:
      "When no one else is around, sometimes I consider doing things with _.",
    pick: 1
  },
  { text: "_: Horrible tragedy, or sexual opportunity?", pick: 1 },
  { text: "I'm about 50% _.", pick: 1 },
  {
    text: "I knew I had a problem when I had to sell _ to pay for _.",
    pick: 2
  },
  { text: "The most pleasant surprise I've had this year.", pick: 1 },
  {
    text: "It's just that much creepier when 40-year-old men are into _.",
    pick: 1
  },
  { text: "Jizzing all over _.", pick: 1 },
  {
    text: "Hey, you guys wanna come back to my place? I've got _ and _.",
    pick: 2
  },
  {
    text:
      "It's a little worrying that I have to compare the size of _ to beverage containers.",
    pick: 1
  },
  { text: "It's not bestiality, it's _.", pick: 1 },
  {
    text:
      "Everyone thinks that because I'm a furry, I'm into _. Unfortunately, they're right.",
    pick: 1
  },
  {
    text:
      "While everyone else seems to have a deep, instinctual fear of _, it just turns me on.",
    pick: 1
  },
  {
    text: "Lying about having _ to get donations, which you spend on _.",
    pick: 2
  },
  { text: "If you like it, then you should put _ on it.", pick: 1 },
  { text: "My girlfriend won't let me do _.", pick: 1 },
  { text: "I'm only gay for _.", pick: 1 },
  { text: "Excuse you, I'm a were-_.", pick: 1 },
  { text: "My next fursuit will have _.", pick: 1 },
  { text: "I'm writing a porn comic about _ and _. ", pick: 2 },
  { text: "Is it weird that I want to rub my face on _?", pick: 1 },
  {
    text:
      "I never thought I'd be comfortable with _, but now it's pretty much the only thing I masturbate to.",
    pick: 1
  },
  {
    text:
      "Everyone thinks they're so great, but the only thing they're good at drawing is _.",
    pick: 1
  },
  { text: "They're just going to spend all that money on _.", pick: 1 },
  {
    text:
      'I tell everyone that I make my money off "illustration," when really, I just draw _.',
    pick: 1
  },
  { text: "Oh, you're an artist? Could you draw _ for me?", pick: 1 },
  {
    text:
      "I used to avoid talking about _, but now it's just a part of normal conversation with my friends.",
    pick: 1
  },
  {
    text:
      "You sometimes wish you'd encounter _ while all alone, in the woods. With a bottle of lube.",
    pick: 1
  },
  { text: "Most cats are _.", pick: 1 },
  {
    text:
      "Personals ad: Seeking a female who doesn't mind _, might also be willing to try a male if they're _.",
    pick: 2
  },
  { text: "Taking pride in one's collection of _.", pick: 1 },
  {
    text: "I tell everyone I'm not a furry, but I've drawn a lot of _.",
    pick: 1
  },
  { text: "My original species combines _ and _. It's called _.", pick: 3 },
  { text: "_. And now I'm bleeding.", pick: 1 },
  { text: "Suck my _.", pick: 1 },
  { text: "I also take _ as payment for commissions.", pick: 1 },
  { text: "It is my dream to be covered with _.", pick: 1 },
  { text: "_ fucking _. Now that's hot.", pick: 2 },
  { text: "Would you rather suck _, or get dicked by _?", pick: 2 },
  {
    text:
      "It never fails to liven up the workplace when you ask your coworkers if they'd rather have sex with _ or _.",
    pick: 2
  },
  { text: "HELLO FURRIEND, HOWL ARE YOU DOING?", pick: 1 },
  { text: "What are the two worst cards in your hand right now?", pick: 2 },
  {
    text:
      "Nobody believes me when I tell that one story about walking in on _.",
    pick: 1
  },
  { text: "You don't know who _ is? They're the one that draws _.", pick: 2 },
  { text: "What did the commenters bitch about next to Doug?", pick: 1 },
  { text: "The newest fanfic trend is turning _ into _.", pick: 2 },
  {
    text: "The RDA chat knew Nash was trolling them when he played _.",
    pick: 1
  },
  { text: "Why does Linkara have all of those Cybermats?", pick: 1 },
  { text: "We all made a mistake when we ate _ at MAGFest.", pick: 1 },
  { text: "Kyle's next student film will focus on _.", pick: 1 },
  { text: "The next crossover will have _ and _ review _.", pick: 3 },
  { text: "_ and _ are in the worst comic Linkara ever read.", pick: 2 },
  { text: "_ is only on the site because of _.", pick: 2 },
  {
    text: "If you value your life, never mention _ around Oancitizen.",
    pick: 1
  },
  { text: "Arlo P. Arlo's newest weapon combines _ and _!", pick: 2 },
  { text: "WAIT! I have an idea! It involves using _!", pick: 1 },
  { text: "What does Linkara eat with his chicken strips?", pick: 1 },
  {
    text: "_ will be the subject of the next TGWTG panel at MAGFest.",
    pick: 1
  },
  { text: "At his next con appearance, Linkara will cosplay as _.", pick: 1 },
  { text: "Make a WTFIWWY story.", pick: 3 },
  { text: " _ did _ to avoid _.", pick: 3 },
  { text: "At MAGFest, _ will host a panel focusing on _.", pick: 2 },
  { text: '"Greetings, dear listeners. Won\'t you join _ for _?"', pick: 2 },
  { text: "Sad Panda is actually _ and _.", pick: 2 },
  { text: "I'm going to die watching _ review _.", pick: 2 },
  {
    text:
      "In a new latest announcement video, _ has announced an appearance at _.",
    pick: 2
  },
  { text: "After _, Phelous regenerated into _. ", pick: 2 },
  { text: "_ and _ would make awesome siblings.", pick: 2 },
  {
    text: "Some fangirls lay awake all night thinking of _ and _ together.",
    pick: 2
  },
  { text: "In my new show, I review _ while dressed like _.", pick: 2 },
  { text: "Luke's newest character is _, the Inner _.", pick: 2 },
  { text: "Good evening! I am _ of _.", pick: 2 },
  { text: '_ is the reason that _ picked "AIDS."', pick: 2 },
  { text: "Nash's newest made-up curse word is _-_-_! ", pick: 3 },
  { text: "Using alchemy, combine _ and _ to make _! ", pick: 3 },
  { text: "Write Linkara's next storyline as a haiku.", pick: 3 },
  {
    text: "Nash will build his next contraption with just _, _, and _.",
    pick: 3
  },
  {
    text:
      "In the newest Cheap Damage, CR looks at the trading card game version of _.",
    pick: 1
  },
  {
    text:
      "In his most recent Avatar vlog, Doug's favorite thing about the episode was _.",
    pick: 1
  },
  { text: "Of Course! Don't you know anything about _?", pick: 1 },
  {
    text: "How is Bennett going to creep out Ask That Guy this time? ",
    pick: 1
  },
  { text: "Hey Nash, whatcha playin'?", pick: 1 },
  { text: "Next January, the Nostalgia Critic is doing _ Month.", pick: 1 },
  {
    text: "Hey kids, I'm Nash, and I couldn't make _ up if I tried.",
    pick: 1
  },
  { text: "JW confirms, you can play _,", pick: 1 },
  { text: "Here There Be _.", pick: 1 },
  { text: "It was all going well until they found _.", pick: 1 },
  { text: "Hello, I'm a _.", pick: 1 },
  { text: "In his latest review, Phelous was killed by _.", pick: 1 },
  { text: "Florida's new crazy is about _.", pick: 1 },
  {
    text:
      "In her newest review, Diamanda Hagan finds herself in the body of _.",
    pick: 1
  },
  { text: "Even Kyle thinks _ is pretentious.", pick: 1 },
  {
    text: "I'm looking forward to Jesuotaku's playthrough of Fire Emblem: _.",
    pick: 1
  },
  { text: "E Rod has a new dance move called _.", pick: 1 },
  { text: "Birdemic 3: _", pick: 1 },
  {
    text: "I prefer for MY exploitation films to have _, thank you very much.",
    pick: 1
  },
  {
    text: "Being done with My Little Pony, 8-Bit Mickey has moved onto _.",
    pick: 1
  },
  { text: "I AM THE VOICELESS. THE NEVER SHOULD. I AM _.", pick: 1 },
  {
    text:
      "As a way of apologizing for a poorly received episode, E Rod promised to review _.",
    pick: 1
  },
  { text: "I _ so you don't have to.", pick: 1 },
  {
    text:
      "An intervention was staged for Linkara after _ was discovered in his hat.",
    pick: 1
  },
  { text: "What broke Nash this week?", pick: 1 },
  { text: "ALL OF _.", pick: 1 },
  {
    text:
      "High and away on a wing and a prayer, who could it be? Believe it or not, it's just _.",
    pick: 1
  },
  {
    text:
      "After getting snowed in at MAGfest, the reviewers were stuck with _.",
    pick: 1
  },
  {
    text:
      "Enemies of Diamanda Hagan have been known to receive strange packages filled with _.",
    pick: 1
  },
  {
    text: "The controversy over ad-blocking could be easily solved by _.",
    pick: 1
  },
  {
    text:
      "This weekend, the nation of Haganistan will once again commence its annual celebration of _. ",
    pick: 1
  },
  {
    text: "The easiest way to counteract a DMCA takedown notice is with _.",
    pick: 1
  },
  {
    text: "To troll the RDA chat this time, Todd requested a song by _.",
    pick: 1
  },
  {
    text: "On the next WTFIWWY, Nash will give us a brief history of _.",
    pick: 1
  },
  { text: 'The website was almost called "thatguywith_.com".', pick: 1 },
  {
    text:
      "The best Bad Movie Beatdown sketch is where Film Brain ropes Lordhebe into _.",
    pick: 1
  },
  { text: "They even took _! Who does that?!", pick: 1 },
  { text: "Nash's Reviewer Spotlight featured _.", pick: 1 },
  { text: "The only thing Linkara would sell his soul for is _.", pick: 1 },
  {
    text:
      "New rule in the RDA Drinking Game: Every time _ happens, take a shot!",
    pick: 1
  },
  { text: "What is the real reason Demo Reel failed?", pick: 1 },
  { text: "Nash rejected yet another RDA request for _.", pick: 1 },
  {
    text: "The next Renegade Cut is about _ in a beloved children's movie.",
    pick: 1
  },
  { text: "Nash's recent rant about Microsoft led to _.", pick: 1 },
  { text: "The Nostalgia Critic will NEVER review _.", pick: 1 },
  { text: "MikeJ's next sexual conquest is _.", pick: 1 },
  {
    text: "The newest reviewer addition to the site specializes in _.",
    pick: 1
  },
  {
    text: "Nash had a long day at work, so tonight he'll stream _.",
    pick: 1
  },
  {
    text:
      "The next person to leave Channel Awesome will announce their departure via _.",
    pick: 1
  },
  {
    text: "Linkara's Yu-Gi-Oh deck is built up with nothing but _.",
    pick: 1
  },
  { text: "STOP OR I WILL _.", pick: 1 },
  { text: "Luke Mochrie proved he was still part of the site by_.", pick: 1 },
  { text: "The invasion of Molassia was tragically thwarted by _.", pick: 1 },
  { text: "Leon Thomas almost named his show Renegade _.", pick: 1 },
  { text: "Sage has presented JO with the new ecchi series _.", pick: 1 },
  {
    text: "Linkara was shocked when he found out Insano was secretly _.",
    pick: 1
  },
  { text: "Sean got his head stuck in _.", pick: 1 },
  { text: "IT'S NOT _!", pick: 1 },
  {
    text: "On the other side of the Plot Hole, the Nostalgia Critic found _.",
    pick: 1
  },
  { text: "It's not nudity if there's _.", pick: 1 },
  { text: "Reactions were mixed when _ joined TGWTG.", pick: 1 },
  {
    text: "What made Dodger ban someone from the RDA chat this week?",
    pick: 1
  },
  { text: "_ is the reason Linkara doesn't like to swear.", pick: 1 },
  { text: "What killed Harvey Finevoice's son?", pick: 1 },
  { text: "What was the first sign that Linkara was turning evil?", pick: 1 },
  { text: "_ will live!", pick: 1 },
  { text: "What new upgrade did Nash give Laura?", pick: 1 },
  { text: "_ was completely avoidable!", pick: 1 },
  {
    text: "What is literally the only thing tastier than a dragon's soul?",
    pick: 1
  },
  { text: "What is hidden in Linkara's hat?", pick: 1 },
  {
    text: "What is the name of the next new Channel Awesome contributor?",
    pick: 1
  },
  { text: "What is Snowflame's only known weakness?", pick: 1 },
  { text: "What did Doug bring to the set of To Boldly Flee?", pick: 1 },
  { text: "This week, Nash's beer is made with _.", pick: 1 },
  {
    text:
      "What hot, trendy new dance will feature in Paw's next Dance Spectacular?",
    pick: 1
  },
  { text: "What does Ven have to do now?", pick: 1 },
  { text: "The new site that will overtake TGWTG is _.", pick: 1 },
  {
    text:
      "The last time Welshy and Film Brain were in a room together, they ended up _.",
    pick: 1
  },
  { text: "The theme of this week's WTFIWWY is _.", pick: 1 },
  {
    text: 'The newest Rap Libs makes extensive use of the phrase "_."',
    pick: 1
  },
  { text: "Putting _ in _? That doesn't go there!", pick: 2 },
  { text: "At least he didn't fuck _.", pick: 1 },
  { text: "In trying to ban _, Florida accidentally banned _.", pick: 2 },
  {
    text:
      "Blip checks are way smaller in January so I'll spend the month riffing on _ to gain more views.",
    pick: 1
  },
  {
    text:
      "If _ got to direct an Uncanny Valley short, it would have featured _.",
    pick: 2
  },
  { text: "Brad Tries _.", pick: 1 },
  { text: "At ConBravo, _ will be hosting a panel on _.", pick: 2 },
  {
    text:
      "Doug still regrets the day he decided to do a Let's Play video for \"Bart Simpson's _ Adventure\".",
    pick: 1
  },
  {
    text: "Why doesn't Film Brain have an actual reviewer costume?",
    pick: 1
  },
  { text: "_ is the theme of this year's anniversary crossover.", pick: 1 },
  {
    text: "The MAGFest Nerf War took a dark turn when _ was waylaid by _.",
    pick: 2
  },
  { text: "A _ Credit Card!?", pick: 1 },
  {
    text: "For a late night snack, Nash made a sandwich of _ and _.",
    pick: 2
  },
  { text: "A piece of _ is missing.", pick: 1 },
  { text: "The next TGWTG porn spoof? _ with _!", pick: 2 },
  { text: "What do Brad and Floyd like to do after a long day?", pick: 1 },
  {
    text: "Who REALLY called Oancitizen to help him snap out of his ennui?",
    pick: 1
  },
  { text: "Whose ass did Zodann kick this time?", pick: 1 },
  { text: "I love _. It's so bad.", pick: 1 },
  { text: "Why did Nash go to Chicago?", pick: 1 },
  {
    text: "Hello, I'm the Nostalgia Critic. I remember _ so you don't have to!",
    pick: 1
  },
  { text: "Why doesn't Doug ever attend MAGFest?", pick: 1 },
  { text: "_. With onions.", pick: 1 },
  { text: "What will Nash try to kill next with his hammer?", pick: 1 },
  {
    text: "_ is something else Diamanda Hagan has to live with every day.",
    pick: 1
  },
  {
    text: "When Arlo The Orc turns into a werewolf, he likes to snack on _.",
    pick: 1
  },
  { text: "_ should be on TGWTG.", pick: 1 },
  { text: "When interviewing Linkara, be sure to ask him about _!", pick: 1 },
  {
    text: "_ was the first thing to go when Hagan took over the world.",
    pick: 1
  },
  {
    text:
      "When not reviewing or ruling Haganistan with an iron fist, Hagan's hobby is _.",
    pick: 1
  },
  { text: "_! What are you doing here?", pick: 1 },
  {
    text: "I asked Linkara to retweet _, but instead, he retweeted _.",
    pick: 2
  },
  {
    text: "If I wanted to see _, I'll stick with _, thank you very much.",
    pick: 2
  },
  { text: "If a dog and a dolphin can get along, why not _ and _?", pick: 2 },
  {
    text:
      "Todd in the Shadows broke the Not a Rhyme button when the singer tried to rhyme _ with _.",
    pick: 2
  },
  {
    text:
      "Tara taught me that if you're going to engage in _, then _ isn't a good idea.",
    pick: 2
  },
  {
    text: 'Next time on Obscurus Lupa Presents: " _ IV: The Return of _".',
    pick: 2
  },
  { text: "Last time I took bath salts, I ended up _ in _.", pick: 2 },
  { text: "The real reason MAGFest was ruined was _.", pick: 1 },
  {
    text:
      "To top One More Day, future comic writers will use _ to break up a relationship.",
    pick: 1
  },
  { text: "What delayed the next History of Power Rangers?", pick: 1 },
  { text: "What is as low as the standards of the 90's Kid?", pick: 1 },
  {
    text:
      "For the next Anniversary event, the TGWTG producers must battle _ to get _.",
    pick: 2
  },
  { text: "Hello, and welcome to Atop _, where _ burns.", pick: 2 },
  { text: "The secret of Linkara's magic gun is _.", pick: 1 },
  {
    text: "The reason Linkara doesn't like milk in his cereal is _.",
    pick: 1
  },
  { text: "Rock and Roll is nothing but _ and the rage of _!", pick: 2 },
  {
    text: 'If you are able to deflect _ with _, we refer to it as "Frying _".',
    pick: 3
  },
  { text: "Welshy is to _ as Sad Panda is to _.", pick: 2 },
  {
    text:
      "Linkara's next story arc will involve him defeating _ with the power of _.",
    pick: 2
  },
  {
    text:
      "Being fed up with reviewing lamps, what obscure topic did Linkara review next?",
    pick: 1
  },
  {
    text: "What else does Diamanda Hagan have to live with every day?",
    pick: 1
  },
  { text: "What is in Sci Fi Guy's vest?", pick: 1 },
  { text: "What's holding up the site redesign?", pick: 1 },
  { text: "What will Tara name her next hippo?", pick: 1 },
  {
    text:
      "What's the real reason nobody has ever played the TGWTG Panel Drinking Game?",
    pick: 1
  },
  { text: "What's really inside the Plot Hole?", pick: 1 },
  { text: "Turns out, that wasn't tea in MikeJ's cup, it was _.", pick: 1 },
  {
    text:
      "Todd knew he didn't have a chance after trying to seduce Lupa with _.",
    pick: 1
  },
  { text: "WE WERE FIGHTING LIKE _.", pick: 1 },
  {
    text:
      "Viewers were shocked when Paw declared _ the best song of the movie.",
    pick: 1
  },
  { text: "What does Nash like to sing about?", pick: 1 },
  {
    text: "Well, I've read enough fanfic about _ and Lupa to last a lifetime.",
    pick: 1
  },
  { text: "What doesn't go there?", pick: 1 },
  { text: "What does Todd look like under his mask?", pick: 1 },
  { text: 'Linkara now prefers to say _ in lieu of "fuck".', pick: 1 },
  { text: "_ didn't make it onto the first AT4W DVD.", pick: 1 },
  { text: "Of course! Don't you know anything about _?", pick: 1 },
  { text: "_ is part of the WTFIWWY wheelhouse.", pick: 1 },
  { text: "Snowflame feels no _.", pick: 1 },
  { text: "_ is the subject of the Critic's newest review.", pick: 1 },
  {
    text: "Snowflame found a new love besides cocaine. What is it?",
    pick: 1
  },
  {
    text: "_ is the subject of the missing short from The Uncanny Valley.",
    pick: 1
  },
  { text: "So let's dig into _ #1.", pick: 1 },
  { text: "_ needs more gay.", pick: 1 },
  { text: "You may be a robot, but I AM _!", pick: 1 },
  { text: "_ will be Linkara's next cosplay.", pick: 1 },
  { text: "Where'd he purchase that?", pick: 1 },
  { text: "_ wound up in this week's top WTFIWWY story.", pick: 1 },
  { text: "When is the next History of Power Rangers coming out?", pick: 1 },
  { text: "What's up next on WTFIWWY?", pick: 1 },
  {
    text:
      'When the JesuOtaku stream got to the "awful part of the night," the GreatSG video featured _.',
    pick: 1
  },
  { text: "Why can't Film Brain stop extending his final vowels?", pick: 1 },
  { text: "Why was Radio Dead Air shut down this time?", pick: 1 },
  { text: "90's Kid's favorite comic is _.", pick: 1 },
  { text: "Because poor literacy is _.", pick: 1 },
  { text: "He is a glitch. He is missing. He is _.", pick: 1 },
  {
    text:
      "In a surprise twist, the villain of Linkara's next story arc turned out to be _.",
    pick: 1
  },
  { text: "You have my bow. AND MY _.", pick: 1 },
  { text: "_? FRY. EYES.", pick: 1 },
  { text: "VS: Where the _ happens!", pick: 1 },
  { text: "Yaar's mother is _.", pick: 1 },
  { text: "The hills are alive with _ of _.", pick: 2 },
  {
    text: "I thought being a _ was the best thing ever, until I became a _.",
    pick: 2
  },
  { text: "Live long and _.", pick: 1 },
  { text: "I'm under the _.", pick: 1 },
  {
    text:
      "Dogimo would give up _ to type a six sentence paragraph in a thread.",
    pick: 1
  },
  { text: "Simple dog ate and vomited _.", pick: 1 },
  { text: "_ ALL THE _.", pick: 2 },
  { text: "There were ALOT of _ doing _.", pick: 2 },
  { text: "_ Jesus is the Jesus of _.", pick: 2 },
  {
    text: "The forum nearly broke when _ posted _ in The Dead Thread.",
    pick: 2
  },
  { text: "A mod war about _ occurred during _.", pick: 2 },
  { text: "Clean ALL the _.", pick: 1 },
  { text: "The first rule of Jade Club is _.", pick: 1 },
  { text: "_ in my pants.", pick: 1 },
  { text: "We need to talk about your whole gallon of _.", pick: 1 },
  { text: "When I was 25, I won an award for _.", pick: 1 },
  { text: "I'm more awesome than a T-rex because of _.", pick: 1 },
  { text: "Fuck you, I'm a _.", pick: 1 },
  {
    text: "After Blue posted _ in chat, I never trusted his links again.",
    pick: 1
  },
  {
    text: "Roses and her hammer collection defeated an entire squadron of _.",
    pick: 1
  },
  { text: "Domo travelled across _ to win the prize of _.", pick: 2 },
  { text: "I did _, like a fucking adult.", pick: 1 },
  { text: "_ was banned from tinychat because of _.", pick: 2 },
  { text: "No one likes me after I posted _ in the TMI thread.", pick: 1 },
  { text: "I want _ in my mouflon RIGHT MEOW.", pick: 1 },
  { text: "I CAN _ ACROSS THE _.", pick: 2 },
  {
    text: "In Kingdom Hearts, Donald Duck will be replaced with _ .",
    pick: 1
  },
  { text: "we must embrace _ and burn it as fuel for out journey.", pick: 1 },
  {
    text:
      "Because of the lastest school shooting, _ is being blamed for making kids too violent.",
    pick: 1
  },
  { text: "&gt;walk into gamestop<br>&gt;see _<br>&gt;walk out", pick: 1 },
  { text: "WHAT THE FUCK DID YOU SAY ABOUT ME YOU _?", pick: 1 },
  { text: "HEY, GOLLEN PALACE? HOW U SAY _ IN CHINESE?", pick: 1 },
  { text: "appealing to a larger audience", pick: 1 },
  {
    text:
      "This will be the 6th time we've posted _; we've become increasingly efficient at it.",
    pick: 1
  },
  { text: "I have the bigger _.", pick: 1 },
  { text: "The princess is in another _", pick: 1 },
  { text: "When you see it... you don't see _.", pick: 1 },
  { text: "_ TEAM RULES!!", pick: 1 },
  {
    text: "Rev up those _, because I am sure hungry for one- HELP! HELP!",
    pick: 1
  },
  { text: "wooooooow, it took all 3 of you to _", pick: 1 },
  { text: "Only casuals like _.", pick: 1 },
  { text: "_ is 2deep and edgy for you.", pick: 1 },
  { text: "It's like _with _!", pick: 2 },
  { text: "Check your privilege, you _ _.", pick: 2 },
  {
    text:
      "Jill, here's a _. It might come in handy if you, the master of _, take it with you. ",
    pick: 2
  },
  {
    text: "_ is a pretty cool guy, eh _ and doesn't afraid of anything.",
    pick: 2
  },
  { text: "Ironic _ is still _.<br><br>(same in both blanks)", pick: 1 },
  { text: "What is the new mustard paste?", pick: 1 },
  { text: "&gt;_<br>&gt;_<br>&gt;2011<br>&gt;ISHYGDDT", pick: 2 },
  { text: "All you had to do was _ the damn _!", pick: 2 },
  {
    text:
      "The new ititeration in the Call of Duty franchise has players fighting off _ deep in the jungles of _ ",
    pick: 2
  },
  { text: "Here lies _: peperony and chease", pick: 1 },
  {
    text:
      "Throwaway round: Get rid of those shit cards you don't want. Thanks for all the suggestions, /v/",
    pick: 1
  },
  {
    text:
      "The president has been kidnapped by _. Are you a bad enough dude to rescue the president?",
    pick: 1
  },
  { text: "We _ now.", pick: 1 },
  { text: "That's the second biggest _ I've ever seen!", pick: 1 },
  { text: "You were almost a _ sandwich!", pick: 1 },
  { text: "It's dangerous to go alone! Take this:", pick: 1 },
  { text: "I've covered _, you know.", pick: 1 },
  { text: "The newest trope against women in video games: _.", pick: 1 },
  { text: "You have been banned. Reason: _.", pick: 1 },
  { text: "_ has changed. ", pick: 1 },
  { text: "_. _ never changes.", pick: 1 },
  { text: "Objective: _", pick: 1 },
  {
    text: "But you can call me _ the _. Has a nice ring to it dontcha think?",
    pick: 1
  },
  { text: "_ has changed.", pick: 1 },
  { text: "Is a man not entitiled to _?", pick: 1 },
  {
    text: "I'm here to _ and chew bubble gum, and I'm all out of gum.",
    pick: 1
  },
  { text: "_ sappin' my sentry. ", pick: 1 },
  { text: "_ is waiting for your challenge!", pick: 1 },
  { text: "EA Sports! It's _.", pick: 1 },
  { text: "What's in the box, /v/?", pick: 1 },
  { text: "Why is the _ fandom the worst?", pick: 1 },
  { text: "_ is a pretty cool guy", pick: 1 },
  { text: "Ah! Your rival! What was his name again?", pick: 1 },
  { text: "brb guys, _ break", pick: 1 },
  { text: "OH MY GOD JC, A _", pick: 1 },
  { text: "Achievement Unlocked: _ !", pick: 1 },
  { text: "I'm _ under the table right now!", pick: 1 },
  { text: "Viral marketers are trying to push the new _.", pick: 1 },
  { text: "I wouldn't call it a Battlestation, more like a _.", pick: 1 },
  { text: "Fans started a kickstarter for a new _ game. ", pick: 1 },
  { text: "Huh? What was that noise?", pick: 1 },
  { text: "I love the _, it's so bad", pick: 1 },
  { text: "Valve is going to make _ 2 before they release HL3.", pick: 1 },
  { text: "_: Gotta go fast!", pick: 1 },
  { text: "The best final fantasy game was _.", pick: 1 },
  { text: "WHAT IS A MAN?", pick: 1 },
  { text: "Liquid! How can you still be alive?", pick: 1 },
  { text: "&gt;implying you aren't _", pick: 1 },
  { text: "All you had to do was follow the damn _, CJ!", pick: 1 },
  {
    text:
      " Microsoft revealed that the Xbox One's demos had actually been running on _ ",
    pick: 1
  },
  { text: "WE WILL DRAG THIS _ INTO THE 21ST CENTURY.", pick: 1 },
  { text: "What can change the nature of a man?", pick: 1 },
  { text: "What is a _ but a _?", pick: 2 },
  { text: "What did I preorder at gamestop?", pick: 1 },
  { text: "What if _ was a girl?", pick: 1 },
  { text: "Wake up, Mr. Freeman. Wake up and _.", pick: 1 },
  { text: "Based _.", pick: 1 },
  { text: "Pop Quiz: Beatles Song- _ terday.", pick: 1 },
  { text: "_ confirmed for Super Smash Bros!", pick: 1 },
  { text: "I'm in ur base, _", pick: 1 },
  { text: "_ only, no items, Final Destination. ", pick: 1 },
  { text: "The newest IP from Nintendo, Super _ Bros. ", pick: 1 },
  { text: "The future of gaming lies with the _.", pick: 1 },
  { text: "The newest feature of the Xbox One is _.", pick: 1 },
  { text: "Enjoy _ while you play your Xbox one!", pick: 1 },
  {
    text: "Why are you making chocolate pudding at 4 in the morning?",
    pick: 1
  },
  { text: "_ has no games.", pick: 1 },
  { text: "The new TF2 promo items are based on _.", pick: 1 },
  {
    text: "The best way to be comfy when playing video games is with _.",
    pick: 1
  },
  { text: "PS3: It only does _.", pick: 1 },
  { text: "The new Nintendo _ is a big gimmick. ", pick: 1 },
  { text: "&gt;tfw when _.", pick: 1 },
  {
    text: "PC gamers have made a petition to get _ on their platform.",
    pick: 1
  },
  { text: "If Gordon Freeman spoke, what would he talk about?", pick: 1 },
  { text: "Kotaku addresses sexism in _ in their latest article.", pick: 1 },
  { text: "Get double XP for Halo 3 with purchase of _.", pick: 1 },
  { text: "LoL stole their new character design off of _.", pick: 1 },
  { text: "_ is the cancer killing video games.", pick: 1 },
  { text: "Suffer, like _ did.", pick: 1 },
  { text: "It's like _ with guns!", pick: 1 },
  { text: " _ would like to play.", pick: 1 },
  { text: "A mod of doom was made that was based off of _.", pick: 1 },
  {
    text: "I really didn't like what they did with the _ Movie adaption.",
    pick: 1
  },
  { text: '"HEY, GOLLEN PALACE? HOW U SAY _ IN CHINESE?"', pick: 1 },
  { text: "Pumpkin doesn't want this.", pick: 1 },
  { text: "NEXT TIME ON GAME GRUMPS: _.", pick: 1 },
  { text: "I used to be an adventurer like you, until _.", pick: 1 },
  { text: "Yeah, well, my dad works for _.", pick: 1 },
  { text: "Did you know you can just buy _?", pick: 1 },
  { text: "My new favorite game is Strip _.", pick: 1 },
  {
    text:
      "Now I have to live my whole life pretending _ never happened. It's going to be a fun 70 years.",
    pick: 1
  },
  { text: "_'s fetish: _.", pick: 2 },
  { text: "2009 called? Did you warn them about _?", pick: 1 },
  {
    text:
      "Just because I have _ doesn't mean you could milk me now. I'd have to be lactating.",
    pick: 1
  },
  { text: "_. That's right. Shit just got REAL.", pick: 1 },
  {
    text: "Take me down to the _, where the _ is green and the _ are pretty.",
    pick: 3
  },
  { text: "Did you know November is _ Awareness Month?", pick: 1 },
  { text: "Until I see more data, I'm going to assume _ causes _.", pick: 2 },
  {
    text: "3D printers sound great until you receive spam containing actual _.",
    pick: 1
  },
  { text: "I'm going to name my child _.", pick: 1 },
  { text: "_. So it has come to this.", pick: 1 },
  { text: "If you really hate someone, teach them to recognize _.", pick: 1 },
  { text: "It's fun to mentally replace the word _ with _.", pick: 2 },
  { text: "University Researchers create life in lab! _ blamed!", pick: 1 },
  {
    text:
      "Ebay review: Instead of _, package contained _. Would not buy again.",
    pick: 2
  },
  {
    text:
      "Social rule 99.1: If friends spend more than 60 minutes deciding what to do, they must default to _.",
    pick: 1
  },
  {
    text: "The #1 Programmer's excuse for legitimately slacking off: _.",
    pick: 1
  },
  { text: "I like alter songs by replacing _ with _.", pick: 2 },
  { text: "Real Programmers use _.", pick: 1 },
  {
    text: "After finding Higgs-Boson, I can always use the LHC for _.",
    pick: 1
  },
  { text: "_ linked to Acne! 95% confidence.", pick: 1 },
  {
    text: 'How many Google results are there for "Died in a _ accident?"',
    pick: 1
  },
  { text: "What's my favorite unit of measurement?", pick: 1 },
  { text: "In the extended base metaphor, shortstop is _.", pick: 1 },
  {
    text: "My health declined when I realized I could eat _ whenever I wanted.",
    pick: 1
  },
  { text: "_ is just applied _.", pick: 2 },
  {
    text:
      "I set up script to buy things on ebay for $1, but then it bought _, _, and _.",
    pick: 3
  },
  { text: "I can extrude _, but I can't retract it.", pick: 1 },
  { text: "I don't actually care about _, I just like _.", pick: 2 },
  { text: "Why do you have a crossbow in your desk?", pick: 1 },
  { text: "Spoiler Alert! _ kills _ with _!", pick: 3 },
  { text: "I'm like _, except with love.", pick: 1 },
  {
    text: "Do you really expect _? No, Mister Bond. I expect you to die!",
    pick: 1
  },
  {
    text: "I didn't actually want you to be _; I just wanted you to be _.",
    pick: 2
  },
  { text: "I filled my apartment with _.", pick: 1 },
  { text: "What do we miss most from the internet in 1998?", pick: 1 },
  {
    text: "Waking up would be a lot easier if _ didn't look so much like you.",
    pick: 1
  },
  { text: "All of my algorithms were really just disguised _.", pick: 1 },
  {
    text: "I got a lot more interested in _ when I made the connection to _.",
    pick: 2
  },
  { text: "_? No, I'm not really into Pok&eacute;mon.", pick: 1 },
  { text: "When I eat _, I like to pretend I'm a Turing machine.", pick: 1 },
  { text: "Dreaming about _ in Cirque du Soleil.", pick: 1 },
  { text: "It turns out God created the universe using _.", pick: 1 },
  { text: "Freestyle rapping is really just _.", pick: 1 },
  {
    text: "If I could rearrange the alphabet, I'd put _ and _ together.",
    pick: 2
  },
  {
    text: "Human intelligence decreases with increasing proximity to _.",
    pick: 1
  },
  { text: "_ would be a good name for a band.", pick: 1 },
  { text: "_ wouldn't be funny if not for the irony.", pick: 1 },
  { text: "Help, I'm trapped in a _ factory!", pick: 1 },
  { text: "None of the places I floated to had _.", pick: 1 },
  { text: "_. My normal method is useless here.", pick: 1 },
  {
    text: "We had a _ party, but it turned out not to be very much fun.",
    pick: 1
  },
  { text: "My hobby: _.", pick: 1 },
  { text: "_ makes terrible pillow talk.", pick: 1 },
  {
    text: "What is the best way to protect yourself from Velociraptors?",
    pick: 1
  },
  { text: "I'm pretty sure you can't send _ through the mail.", pick: 1 },
  { text: "What did I suggest to the IAU for a new planet name?", pick: 1 },
  { text: "_ is too big for small talk.", pick: 1 },
  { text: "New movie this summer: _ beats up everyone.", pick: 1 },
  { text: "By 2019, _ will be outnumbered by _.", pick: 2 },
  { text: "The past is a foreign country... with _ and _!", pick: 2 },
  { text: "Hey baby, wanna come back to my sex _?", pick: 1 },
  { text: "_. It works in Kerbal Space Program.", pick: 1 },
  {
    text:
      "What role has social media played in _? Well, it's certainly made _ stupider.",
    pick: 2
  },
  { pick: 1, text: "9-1-1, what's your emergency?" },
  { pick: 1, text: "_, just for a second. Just to see how it feels." },
  { pick: 1, text: "_, you da real MVP." },
  { pick: 1, text: "_: Ain't nobody got time for that!" },
  { pick: 1, text: "_: boil 'em, mash 'em, stick 'em in a stew!" },
  { pick: 1, text: "_: I volunteer as tribute!" },
  { pick: 1, text: "_: it's magically delicious." },
  { pick: 1, text: "_: Just another way that God shows us he loves us." },
  { pick: 1, text: "_: Just girly things." },
  { pick: 1, text: "_: Just sayin'." },
  { pick: 1, text: "_: not even once." },
  { pick: 1, text: "_: Provided by the management for your protection." },
  {
    pick: 1,
    text:
      "_: Your ideas are intriguing to me and I wish to subscribe to your newsletter."
  },
  { pick: 1, text: "_? That's what <i>she</i> said." },
  {
    pick: 1,
    text:
      "A new Russian dash-cam video shows _, right there in the middle of the street!"
  },
  { pick: 2, text: "A wild _ appears! You used _! It's super effective!" },
  {
    pick: 1,
    text:
      "According to a new UN treaty, _ now qualifies as a weapon of mass destruction."
  },
  { pick: 2, text: "An ounce of _ is worth a pound of _." },
  { pick: 3, text: "Ancient Chinese proverb say: _ is just _ without _." },
  {
    pick: 1,
    text:
      "Apple&reg; has announced a new device that promises to revolutionize the way we think about _."
  },
  {
    pick: 1,
    text:
      "Audiences at Sundance were traumatized by Lars von Trier's controversial new film, &quot;_.&quot;"
  },
  { pick: 1, text: "Before I got laid off, I never pictured a career in _." },
  {
    pick: 3,
    text:
      "Bentley's&reg; latest ultra-high-end luxury sedan comes complete with _, _ and _."
  },
  {
    pick: 1,
    text:
      "Bowing to years of pressure, the Washington Redskins have officially been renamed the Washington _."
  },
  { pick: 1, text: "Coming soon from Pixar: &quot;_&quot;." },
  {
    pick: 1,
    text:
      "Dear Dan Savage, Please help. I am unable to achieve orgasm without _."
  },
  {
    pick: 2,
    text:
      "Dear, your father and I found _ and _ in your bedroom. I'm shocked, and frankly just a <i>little</i> disappointed."
  },
  {
    pick: 1,
    text:
      "During the lunch meeting, we were shocked to hear the boss reveal her obsession with _."
  },
  {
    pick: 1,
    text:
      "Ever since &quot;the incident,&quot; every time I close my eyes, I still see _."
  },
  {
    pick: 1,
    text:
      "Experts say that without careful management and conservation, _ will disappear within our liefetimes."
  },
  {
    pick: 1,
    text:
      "From the people who brough you <i>Sharktopus</i> and <i>Sharknado</i>, Syfy's&reg; next horror film combines sharks with _."
  },
  {
    pick: 1,
    text: "From the producers of Shark Week... Coming this fall, _ Week."
  },
  {
    pick: 1,
    text: "Fuddruckers&reg; is secretly testing a burger made with _."
  },
  {
    pick: 1,
    text:
      "Gentleman, I'm sure you're wondering why I asked you here this evening. It's a long story, but it all began with _."
  },
  { pick: 1, text: "Go-Go-Gadget _!" },
  {
    pick: 2,
    text:
      "Good news, everyone! I'm giving a TED Talk on the subject of how _ will transform _."
  },
  {
    pick: 1,
    text:
      "Having abandoned his pleas for a return to the gold standard, Ron Paul is now promoting a _-based economy."
  },
  {
    pick: 1,
    text:
      "Hey man, you gonna come check out my shown tonight? My new band is called &quot;_.&quot;"
  },
  { pick: 1, text: "How did I get this restraining order?" },
  { pick: 1, text: "How did I get through college?" },
  { pick: 1, text: "How did I hurt my back?" },
  { pick: 1, text: "How did I spend my inheritance?" },
  {
    pick: 1,
    text: "How did my grandparents make it through the Great Depression?"
  },
  { pick: 2, text: "I am _. I speak for _." },
  { pick: 1, text: "I am become _, the destroyer of worlds." },
  {
    pick: 1,
    text: "I do declare, in times of distress I have always relied on _."
  },
  {
    pick: 1,
    text: "I do wish the newspapers hadn't mentioned _ in grandpa's obituary."
  },
  {
    pick: 1,
    text: "I don't care <i>what</i> people say, _ is <i>not</i> a crime."
  },
  {
    pick: 3,
    text:
      "I got some strange looks in the checkout line when the cashier noticed _, _ and _ in my cart."
  },
  {
    pick: 3,
    text: "I have this recurring dream where I'm _, and I'm giving _ to _."
  },
  {
    pick: 1,
    text:
      "I have to admit... it took me a while to agree to it, but incorporating _ into our wedding ceremony is a decision I will never regret."
  },
  {
    pick: 1,
    text:
      "I quit my job as a bartender the night some jackass left me _ as a tip."
  },
  {
    pick: 1,
    text:
      "I think I need to take Fluffums to puppy training: he has this terrible habit of _."
  },
  {
    pick: 3,
    text:
      "I was once sent to the HR department for an incident involving _, _, and (allegedly) _."
  },
  {
    pick: 1,
    text:
      "I wish it were something simple &mdash; like peanuts or shellfish &mdash; but my doctor tells me I'm actually allergic to _."
  },
  { pick: 2, text: "I'm gonna go build my own theme park! With _! And _!" },
  { pick: 1, text: "I'm so hungry I could eat _." },
  {
    pick: 2,
    text:
      "I've designed a spaceship powered by the energy released when you combine_ and _."
  },
  {
    pick: 2,
    text: "If God didn't want us to enjoy _, he wouldn't have given us _."
  },
  {
    pick: 1,
    text: "If laughter is the best medicine, the second best is _."
  },
  {
    pick: 1,
    text:
      "If people wouldn't be so quick to judge, I would give _ to the person on my left in a heartbeat."
  },
  { pick: 1, text: "If you wanna be my lover, you gotta get with _." },
  {
    pick: 1,
    text:
      "If you want a picture of the future, imagine a boot stamping on _ &mdash; forever."
  },
  {
    pick: 2,
    text: "In a groundbreaking experiment, _ has given birth to _."
  },
  {
    pick: 1,
    text:
      "In a move that has Hollywood insiders baffled, the producers of American Idol have decided to replace host Ryan Seacrest with _."
  },
  {
    pick: 1,
    text:
      "In a new novel by Nicholas Sparks, a young girl tragically falls in love with _."
  },
  {
    pick: 1,
    text:
      "In his final interview, Robin Williams discussed his private battle with _."
  },
  { pick: 1, text: "In my opinion, _ is grounds for justifiable homicide." },
  {
    pick: 1,
    text: "In Valhalla, it is said that all brave warriors are given _."
  },
  {
    pick: 1,
    text:
      "It took seven years in a remote Tibetan monastery, but I finally learned the art of _."
  },
  { pick: 1, text: "Like Midas reborn, everything she touches turns to _." },
  {
    pick: 1,
    text:
      "Michelle Obama outraged conservatives when she implied that _ maybe wasn't such a bad thing."
  },
  { pick: 1, text: "My psychic warns that my future is filled with _." },
  {
    pick: 1,
    text:
      "My tour of the White House radically escalated when Secret Service caught a glimpse of _ in my bag."
  },
  {
    pick: 2,
    text: "Netflix's&reg; new original series is a sitcom based around _ and _."
  },
  {
    pick: 1,
    text:
      "Now that he has retired, Pope Benedict can finally devote time to his true passion: _."
  },
  { pick: 1, text: "Oh my God! They killed _! You bastards!" },
  {
    pick: 1,
    text:
      "Oh, so you think you're too good for us now, little &quot;Miss _!&quot;"
  },
  {
    pick: 1,
    text: "Old Willy used to be just like you or me, before _ got ahold of him."
  },
  { pick: 1, text: "Ooooooohh yeah, baby you know what I like. Gimmie _." },
  {
    pick: 2,
    text: "PornHub.com's single most popular video features _ and _."
  },
  { pick: 1, text: "Rumor is, Kim Jong-un is executing prisoners with _." },
  {
    pick: 1,
    text: "Scientists have discovered the true cause of autism: _."
  },
  {
    pick: 2,
    text:
      "So then he says, &quot;If you want to make this relationship work, you need to give up _ and _.&quot; As. If."
  },
  { pick: 1, text: "Sweet, I just got a Groupon for _." },
  { pick: 1, text: "Thank you Mario! But _ is in another castle!" },
  { pick: 2, text: "Thanks to _, I now have a crippling fear of _." },
  { pick: 1, text: "The best part of waking up is _." },
  { pick: 1, text: "The last three items on my &quot;bucket list&quot;:" },
  {
    pick: 2,
    text: "The night before a blizzard, always stock up on _ and _."
  },
  {
    pick: 1,
    text:
      "The NSA wants to talk to me about an email I sent out containing these key phrases:"
  },
  {
    pick: 1,
    text: "The restaurant was nice, but I was surprised to see _ on the menu."
  },
  { pick: 1, text: "The road to hell is paved with _." },
  {
    pick: 1,
    text:
      "There's a new anime about four magical high school students and their adventures with _."
  },
  {
    pick: 2,
    text: "This bottle of 1961 Ch&acirc;teau Cheval Blanc has notes of _ and _."
  },
  {
    pick: 2,
    text:
      "This film has been rated &quot;NC-17&quot; for graphic depictions of _ and _."
  },
  {
    pick: 3,
    text:
      "Three bullet points from my OKCupid&reg; profile: _, _, and most importantly, _."
  },
  { pick: 1, text: "Today, Amazon.com&reg; received a patent on _." },
  {
    pick: 1,
    text:
      "Tonight on &quot;My Super Sweet 16,&quot; Stephani's parents give her _."
  },
  {
    pick: 2,
    text:
      "Tonight on &quot;Supernatural,&quot; Sam and Dean are forced to confront _ using only _."
  },
  {
    pick: 2,
    text:
      "Topping this week's non-fiction best-sellers: &quot;_ : the art of living with _.&quot;"
  },
  { pick: 2, text: "Ultimate Deathmatch: _ vs. _." },
  { pick: 1, text: "Utah is considering the legalization of _." },
  { pick: 1, text: "WANTED: a clean, well-lit place for _." },
  { pick: 1, text: "What <i>exactly</i> is up my ass?" },
  { pick: 1, text: "What <i>really</i> gave Superman his powers?" },
  { pick: 1, text: "What do I have rotting away in a storage unit?" },
  { pick: 1, text: "What do we want? _!<br><br>When do we want it? Now!" },
  { pick: 1, text: "What made me this way?" },
  { pick: 1, text: "What should I be for Halloween?" },
  {
    pick: 1,
    text:
      "What was one of the rejected flavors for Bertie Bott's Every Flavour Beans&trade;?"
  },
  { pick: 1, text: "What will they carve on my tombstone?" },
  { pick: 1, text: "What's my safe word?" },
  { pick: 1, text: "What's this town's best-kept secret?" },
  {
    pick: 3,
    text:
      "When I'm dating somebody, I can overlook _ and _, but _ is a deal-breaker."
  },
  {
    pick: 1,
    text:
      "When I've serious fucked up and need to make amends, what can I give my significant other to show them I am truly remorseful?"
  },
  { pick: 1, text: "When you play the Game Of _, you win or you die." },
  {
    pick: 1,
    text:
      "While officially still frowned on, _ is now permitted in the U.S. armed forces."
  },
  {
    pick: 1,
    text: "Who will be first against the wall when the revolution comes?"
  },
  { pick: 1, text: "Who's <i>really</i> to blame?" },
  { pick: 2, text: "Who's got _, _, and two thumbs? This guy!" },
  { pick: 1, text: "Why won't anyone sit with me?" },
  {
    pick: 1,
    text: "Why won't they let me in Chuck E. Cheese's&reg; anymore?"
  },
  {
    pick: 1,
    text:
      "William Shatner's shocking new autobiography is titled &quot;_: The Final Frontier.&quot;"
  },
  {
    pick: 2,
    text: "Yea, though I walk through the valley of _, I will fear no _."
  },
  {
    pick: 1,
    text: "Yes, it is I, the world's most dangerous supervillain: Baron Von _!"
  },
  { pick: 2, text: "You got your _ in my _!" },
  {
    pick: 1,
    text:
      "You have my sword. &quot;And you have my bow.&quot; &quot;And <i>my</i> _!&quot;"
  },
  {
    pick: 1,
    text: "You people are sick! There's <i>nothing</i> funny about _."
  },
  {
    pick: 1,
    text:
      "What's the most common obstacle to consummating a marriage on one's wedding night?"
  },
  {
    pick: 1,
    text:
      "What will the groom think of when he first sees the bride on their wedding day?"
  },
  { pick: 1, text: "What was the happiest memory from the honeymoon?" },
  {
    pick: 1,
    text: "What should every couple incorporate into their first dance?"
  },
  {
    pick: 1,
    text: "In a marriage, whatever the question is, the answer is always _."
  },
  { pick: 1, text: "First comes love, then comes marriage, then comes _." },
  { pick: 1, text: "If you like it, then you should put _ on it." },
  { pick: 1, text: "What's a sure sign of a healthy marriage?" },
  { pick: 1, text: "True love means _." },
  { pick: 1, text: "She's not just my wife. She's also _." },
  { pick: 1, text: "Consider including _ in your vows." },
  { pick: 1, text: "What's the #1 cause of wedding day jitters?" },
  { pick: 1, text: "What the fuck is your problem?" },
  {
    pick: 1,
    text:
      "What's the best way to spice up your marriage after years of monotony?"
  },
  { pick: 2, text: "It's not _ that puts strain on a relationship, it's _." },
  { pick: 1, text: "Love is patient, love is kind. Love is _." },
  { pick: 1, text: "Marriage is a lot of work, which mainly consists of _." },
  { pick: 2, text: "Marriage: the end of _ and the beginning of _." },
  { pick: 1, text: "_ doesn't count as cheating." },
  { pick: 1, text: "What was your favorite wedding photo of?" },
  { pick: 1, text: "_: grounds for divorce in all 50 states." },
  {
    pick: 1,
    text:
      "Along with something borrowed and something blue, be sure to take _ with you down the aisle."
  },
  { pick: 2, text: "The only thing worse than _ at a wedding is _." },
  { pick: 1, text: "What's the secret to a long and happy marriage?" },
  { pick: 1, text: "Nothing gets a wedding reception fired up like _." },
  {
    pick: 1,
    text: "What will be the best thing about the couple's married sex life?"
  },
  {
    pick: 1,
    text: "The first five years are the hardest. After that, it's all _."
  },
  {
    pick: 1,
    text: "Make sure you have _ and the rest will take care of itself."
  },
  {
    pick: 1,
    text: "The first issue the couple tackles in marriage counseling will be _."
  },
  { pick: 1, text: 'Nothing says "fulfilling life-long commitment" like _.' },
  { pick: 1, text: "It's trendy to include _ in your wedding these days." },
  {
    pick: 1,
    text: "Every wedding toast should include at least one mention of _."
  },
  { pick: 1, text: "What's the only thing sexier than confidence?" },
  { pick: 1, text: 'The word "husband" comes from the Latin word for _.' },
  {
    pick: 1,
    text: "Between the champagne toast and the cake-cutting, there was _."
  },
  { pick: 1, text: "_. A sure-fire cure for the seven-year itch." },
  { pick: 1, text: "_. A wedding gift you'll cherish forever." },
  { pick: 1, text: "In a committed adult relationship, _ goes a long way." },
  {
    pick: 1,
    text:
      "Studies show that married people are much more likely than single people to have _."
  },
  { pick: 1, text: "What unique detail did the bride's dress include?" },
  { pick: 1, text: "Being married means having the freedom to embrace _." },
  { pick: 1, text: "The wedding cake was shaped like _." },
  { pick: 1, text: "What's the groom hiding in his underwear?" },
  { pick: 1, text: "The ceremony ended with _." },
  {
    pick: 1,
    text: "The couple has a wonderful life filled with _ ahead of them."
  },
  { pick: 1, text: "There's nothing more romantic than _." },
  { pick: 1, text: "A healthy long-term sex life is built on _." },
  { pick: 1, text: "What's the couple's favorite shared hobby?" },
  { pick: 1, text: "Instead of a garter toss, try _." },
  { pick: 1, text: "How did you celebrate your first anniversary?" },
  { pick: 1, text: "What saved your marriage?" },
  { pick: 1, text: "Their first fight as a married couple was about _." },
  { pick: 1, text: "The proposal featured _." },
  {
    pick: 1,
    text: "What's a favorite pastime of the family you're marrying into?"
  },
  { pick: 1, text: "What did the rehearsal dinner taste like?" },
  {
    pick: 1,
    text: "You can't wait forever. It's time to talk to your doctor about _."
  },
  {
    pick: 1,
    text:
      "The Westboro Baptist Church is now picketing soldiers' funerals with signs that read 'GOD HATES _.'"
  },
  {
    pick: 1,
    text: "What are two cards in your hand that you want to get rid of?"
  },
  {
    pick: 1,
    text:
      "The elders of the Ibo tribe of Nigeria recommend _ as a cure for impotence."
  },
  {
    pick: 1,
    text: "My name is Inigo Montoya. You killed my father. Prepare for _."
  },
  {
    pick: 1,
    text:
      "From WBEZ Chicago, it's This American Life. Today on our program, _. Stay with us."
  },
  { pick: 1, text: "What do you see?" },
  {
    pick: 1,
    text:
      "Sir, we found you passed out naked on the side of the road. What's the last thing you remember?"
  },
  {
    pick: 1,
    text: "<b>Absurd</b><br/><small>ridiculous, senseless, foolish</small>"
  },
  {
    pick: 1,
    text:
      "<b>Addictive</b><br/><small>obsessive, consuming, captivating</small>"
  },
  {
    pick: 1,
    text: "<b>Adorable</b><br/><small>lovable, charming, delightful</small>"
  },
  { pick: 1, text: "<b>Aged</b><br/><small>old, ancient, mature</small>" },
  {
    pick: 1,
    text: "<b>American</b><br/><small>U.S. Citizen, Yankee, Apple Pie</small>"
  },
  {
    pick: 1,
    text: "<b>Ancient</b><br/><small>elderly, old, antique</small>"
  },
  {
    pick: 1,
    text: "<b>Animated</b><br/><small>lively, exuberant, spirited</small>"
  },
  {
    pick: 1,
    text: "<b>Annoying</b><br/><small>irritating, bothersome, teasing</small>"
  },
  {
    pick: 1,
    text: "<b>Appetizing</b><br/><small>appealing, tasty, flavorful</small>"
  },
  {
    pick: 1,
    text:
      "<b>Arrogant</b><br/><small>egotistical, overconfident, conceited</small>"
  },
  {
    pick: 1,
    text: "<b>Awesome</b><br/><small>amazing, remarkable, majestic</small>"
  },
  {
    pick: 1,
    text: "<b>Awkward</b><br/><small>clumsy, bumbling, uncoordinated</small>"
  },
  {
    pick: 1,
    text:
      "<b>Believable</b><br/><small>trustworthy, credible, convincing</small>"
  },
  {
    pick: 1,
    text: "<b>Bogus</b><br/><small>fraudulent, phony, insincere</small>"
  },
  {
    pick: 1,
    text: "<b>Boisterous</b><br/><small>loud, rambunctious, rowdy</small>"
  },
  {
    pick: 1,
    text: "<b>Bold</b><br/><small>daring, brave, courageous</small>"
  },
  {
    pick: 1,
    text: "<b>Boring</b><br/><small>dull, tedious, monotonous</small>"
  },
  {
    pick: 1,
    text: "<b>Bright</b><br/><small>brilliant, radiant, shiny</small>"
  },
  {
    pick: 1,
    text: "<b>Brilliant</b><br/><small>dazzling, gleaming, intelligent</small>"
  },
  {
    pick: 1,
    text: "<b>Busy</b><br/><small>occupied, meddlesome, engrossed</small>"
  },
  {
    pick: 1,
    text: "<b>Calm</b><br/><small>peaceful, tranquil, placid</small>"
  },
  {
    pick: 1,
    text: "<b>Casual</b><br/><small>easygoing, blase, nonchalant</small>"
  },
  {
    pick: 1,
    text: "<b>Charismatic</b><br/><small>alluring, magnetic, charming</small>"
  },
  {
    pick: 1,
    text:
      "<b>Charming</b><br/><small>captivating, enchanting, fascinating</small>"
  },
  {
    pick: 1,
    text: "<b>Cheesy</b><br/><small>trashy, tawdry, far-fetched</small>"
  },
  {
    pick: 1,
    text: "<b>Chewy</b><br/><small>gummy, rubbery, stringy</small>"
  },
  { pick: 1, text: "<b>Chunky</b><br/><small>lumpy, chubby, bumpy</small>" },
  {
    pick: 1,
    text: "<b>Classic</b><br/><small>timeless, definitive, vintage</small>"
  },
  { pick: 1, text: "<b>Clean</b><br/><small>washed, pure, tidy</small>" },
  {
    pick: 1,
    text: "<b>Clueless</b><br/><small>unaware, oblivious, ignorant</small>"
  },
  { pick: 1, text: "<b>Cold</b><br/><small>chilly, icy, aloof</small>" },
  {
    pick: 1,
    text: "<b>Colorful</b><br/><small>vivid, brilliant, kaleidoscopic</small>"
  },
  {
    pick: 1,
    text: "<b>Comfortable</b><br/><small>cozy, snug, restful</small>"
  },
  {
    pick: 1,
    text: "<b>Comical</b><br/><small>funny, hilarious, amusing</small>"
  },
  {
    pick: 1,
    text: "<b>Complicated</b><br/><small>difficult, complex, involved</small>"
  },
  {
    pick: 1,
    text: "<b>Confused</b><br/><small>muddled, bewildered, perplexed</small>"
  },
  {
    pick: 1,
    text: "<b>Cool</b><br/><small>chilly, hip, cold-blooded</small>"
  },
  {
    pick: 1,
    text: "<b>Corrupt</b><br/><small>dishonest, underhanded, shady</small>"
  },
  {
    pick: 1,
    text: "<b>Cosmic</b><br/><small>limitless, planetary, far out</small>"
  },
  {
    pick: 1,
    text:
      "<b>Cosmopolitan</b><br/><small>sophisticated, urbane, well-informed</small>"
  },
  {
    pick: 1,
    text: "<b>Courageous</b><br/><small>brave, gallant, dauntless</small>"
  },
  {
    pick: 1,
    text: "<b>Cowardly</b><br/><small>fearful, afraid, spineless</small>"
  },
  {
    pick: 1,
    text: "<b>Cranky</b><br/><small>crabby, cantankerous, grouchy</small>"
  },
  {
    pick: 1,
    text: "<b>Crazed</b><br/><small>insane, wild, deranged</small>"
  },
  { pick: 1, text: "<b>Crazy</b><br/><small>insane, bizarre, wacky</small>" },
  {
    pick: 1,
    text: "<b>Creative</b><br/><small>imaginative, artistic, original</small>"
  },
  {
    pick: 1,
    text: "<b>Creepy</b><br/><small>frightening, slithering, scary</small>"
  },
  { pick: 1, text: "<b>Cruel</b><br/><small>mean, harsh, merciless</small>" },
  {
    pick: 1,
    text: "<b>Cuddly</b><br/><small>loving, tender, huggable</small>"
  },
  {
    pick: 1,
    text: "<b>Cute</b><br/><small>pretty, perky, delightful</small>"
  },
  {
    pick: 1,
    text: "<b>Dainty</b><br/><small>delicate, fragile, thin</small>"
  },
  {
    pick: 1,
    text: "<b>Dangerous</b><br/><small>risky, chancy, hazardous</small>"
  },
  {
    pick: 1,
    text: "<b>Dead</b><br/><small>deceased, expired, unresponsive</small>"
  },
  {
    pick: 1,
    text: "<b>Deadly</b><br/><small>fatal, lethal, murderous</small>"
  },
  {
    pick: 1,
    text: "<b>Delicate</b><br/><small>dainty, tender, elegant</small>"
  },
  {
    pick: 1,
    text: "<b>Delicious</b><br/><small>tasty, pleasing, appetizing</small>"
  },
  {
    pick: 1,
    text: "<b>Delightful</b><br/><small>pleasing, enjoyable, charming</small>"
  },
  {
    pick: 1,
    text: "<b>Demanding</b><br/><small>difficult, exacting, bothersome</small>"
  },
  {
    pick: 1,
    text: "<b>Depressing</b><br/><small>dismal, gloomy, sad</small>"
  },
  {
    pick: 1,
    text: "<b>Desperate</b><br/><small>frantic, headlong, reckless</small>"
  },
  {
    pick: 1,
    text:
      "<b>Dignified</b><br/><small>stately, honorable, distinguished</small>"
  },
  {
    pick: 1,
    text: "<b>Dirty</b><br/><small>unclean, soiled, impure</small>"
  },
  {
    pick: 1,
    text:
      "<b>Distinguished</b><br/><small>dignified, extraordinary, acclaimed</small>"
  },
  {
    pick: 1,
    text:
      "<b>Disturbing</b><br/><small>unsettling, troubling, worrisome</small>"
  },
  {
    pick: 1,
    text: "<b>Dramatic</b><br/><small>exciting, sensational, theatrical</small>"
  },
  {
    pick: 1,
    text: "<b>Dreamy</b><br/><small>fanciful, whimsical, heavenly</small>"
  },
  { pick: 1, text: "<b>Dull</b><br/><small>boring, stupid, blunt</small>" },
  {
    pick: 1,
    text:
      "<b>Dysfunctional</b><br/><small>impaired, damaged, maladjusted</small>"
  },
  {
    pick: 1,
    text: "<b>Earthy</b><br/><small>unrefined, natural, crude</small>"
  },
  {
    pick: 1,
    text: "<b>Easy</b><br/><small>effortless, gentle, promiscuous</small>"
  },
  {
    pick: 1,
    text: "<b>Eccentric</b><br/><small>peculiar, odd, bizarre</small>"
  },
  {
    pick: 1,
    text: "<b>Elitist</b><br/><small>snobbish, arrogant, smug</small>"
  },
  {
    pick: 1,
    text: "<b>Emotional</b><br/><small>passionate, moving, volatile</small>"
  },
  {
    pick: 1,
    text: "<b>Eternal</b><br/><small>timeless, immortal, perpetual</small>"
  },
  {
    pick: 1,
    text:
      "<b>European</b><br/><small>of Europe, from Europe, about Europe</small>"
  },
  {
    pick: 1,
    text: "<b>Exciting</b><br/><small>thrilling, breathtaking, arousing</small>"
  },
  {
    pick: 1,
    text: "<b>Exhausting</b><br/><small>weakening, tiring, draining</small>"
  },
  {
    pick: 1,
    text: "<b>Expensive</b><br/><small>costly, valuable, exorbitant</small>"
  },
  {
    pick: 1,
    text: "<b>Explosive</b><br/><small>bursting, blasting, dangerous</small>"
  },
  {
    pick: 1,
    text: "<b>Exquisite</b><br/><small>excellent, refined, flawless</small>"
  },
  {
    pick: 1,
    text: "<b>Extreme</b><br/><small>exceptional, superlative, radical</small>"
  },
  {
    pick: 1,
    text: "<b>Fabulous</b><br/><small>marvelous, wonderful, incredible</small>"
  },
  {
    pick: 1,
    text: "<b>Fake</b><br/><small>unreal, counterfeit, deceptive</small>"
  },
  {
    pick: 1,
    text: "<b>Fancy</b><br/><small>showy, ornate, decorated</small>"
  },
  {
    pick: 1,
    text: "<b>Fantastic</b><br/><small>awesome, outrageous, imaginary</small>"
  },
  {
    pick: 1,
    text: "<b>Feminine</b><br/><small>womanly, ladylike, unmanly</small>"
  },
  { pick: 1, text: "<b>Filthy</b><br/><small>dirty, foul, unclean</small>" },
  {
    pick: 1,
    text: "<b>Flirtatious</b><br/><small>brazen, saucy, forward</small>"
  },
  {
    pick: 1,
    text: "<b>Foreign</b><br/><small>alien, unfamiliar, exotic</small>"
  },
  {
    pick: 1,
    text: "<b>Fragrant</b><br/><small>aromatic, odorous, perfumed</small>"
  },
  {
    pick: 1,
    text: "<b>Frazzled</b><br/><small>exhausted, frayed, worn</small>"
  },
  { pick: 1, text: "<b>Fresh</b><br/><small>new, original, good</small>" },
  {
    pick: 1,
    text:
      "<b>Friendly</b><br/><small>affectionate, comforting, welcoming</small>"
  },
  {
    pick: 1,
    text: "<b>Frightening</b><br/><small>scary, horrifying, awesome</small>"
  },
  {
    pick: 1,
    text: "<b>Frivolous</b><br/><small>trivial, silly, shallow</small>"
  },
  {
    pick: 1,
    text: "<b>Funky</b><br/><small>groovy, psychedelic, hip</small>"
  },
  { pick: 1, text: "<b>Funny</b><br/><small>amusing, comic, odd</small>" },
  { pick: 1, text: "<b>Furious</b><br/><small>angry, raging, wild</small>" },
  { pick: 1, text: "<b>Fuzzy</b><br/><small>downy, unclear, furry</small>" },
  {
    pick: 1,
    text: "<b>Glamorous</b><br/><small>beautiful, dazzling, stylish</small>"
  },
  { pick: 1, text: "<b>Glitzy</b><br/><small>flashy, showy, gaudy</small>" },
  {
    pick: 1,
    text: "<b>Global</b><br/><small>world-wide, spherical, universal</small>"
  },
  {
    pick: 1,
    text: "<b>Glorious</b><br/><small>magnificent, delightful, splendid</small>"
  },
  {
    pick: 1,
    text: "<b>Goody-Goody</b><br/><small>sweet, well-behaved, virtuous</small>"
  },
  {
    pick: 1,
    text: "<b>Graceful</b><br/><small>elegant, supple, limber</small>"
  },
  {
    pick: 1,
    text: "<b>Handsome</b><br/><small>attractive, elegant, fine</small>"
  },
  {
    pick: 1,
    text: "<b>Hardworking</b><br/><small>industrious, diligent, busy</small>"
  },
  {
    pick: 1,
    text: "<b>Harmful</b><br/><small>hurtful, unhealthy, damaging</small>"
  },
  {
    pick: 1,
    text:
      "<b>Haunting</b><br/><small>unforgettable, bewitching, unearthly</small>"
  },
  {
    pick: 1,
    text: "<b>Healthy</b><br/><small>hearty, robust, wholesome</small>"
  },
  {
    pick: 1,
    text: "<b>Heartless</b><br/><small>insensitive, cruel, uncaring</small>"
  },
  {
    pick: 1,
    text: "<b>Hilarious</b><br/><small>funny, witty, amusing</small>"
  },
  {
    pick: 1,
    text: "<b>Honorable</b><br/><small>honest, just, virtuous</small>"
  },
  {
    pick: 1,
    text:
      "<b>Hopeless</b><br/><small>pessimistic, desperate, downhearted</small>"
  },
  {
    pick: 1,
    text:
      "<b>Horrifying</b><br/><small>offensive, abominable, disgusting</small>"
  },
  {
    pick: 1,
    text: "<b>Hostile</b><br/><small>antagonistic, aggressive, warlike</small>"
  },
  { pick: 1, text: "<b>Hot</b><br/><small>blazing, heated, spicy</small>" },
  {
    pick: 1,
    text: "<b>Idiotic</b><br/><small>foolish, dumb, moronic</small>"
  },
  {
    pick: 1,
    text:
      "<b>Important</b><br/><small>significant, substantial, momentous</small>"
  },
  {
    pick: 1,
    text: "<b>Industrious</b><br/><small>diligent, busy, hard-working</small>"
  },
  {
    pick: 1,
    text: "<b>Influential</b><br/><small>powerful, prominent, important</small>"
  },
  {
    pick: 1,
    text: "<b>Innocent</b><br/><small>guiltless, pure, naive</small>"
  },
  {
    pick: 1,
    text: "<b>Insane</b><br/><small>psychotic, deranged, mad</small>"
  },
  {
    pick: 1,
    text:
      "<b>Inspirational</b><br/><small>exhilarating, inspiring, stimulating</small>"
  },
  {
    pick: 1,
    text: "<b>Insulting</b><br/><small>offending, discourteous, rude</small>"
  },
  {
    pick: 1,
    text: "<b>Intelligent</b><br/><small>bright, smart, brainy</small>"
  },
  {
    pick: 1,
    text: "<b>Intense</b><br/><small>extreme, passionate, strained</small>"
  },
  {
    pick: 1,
    text:
      "<b>Irresistible</b><br/><small>overpowering, overwhelming, compelling</small>"
  },
  {
    pick: 1,
    text:
      "<b>Irritating</b><br/><small>annoying, troublesome, provoking</small>"
  },
  {
    pick: 1,
    text: "<b>Juicy</b><br/><small>drippy, luscious, tantalizing</small>"
  },
  {
    pick: 1,
    text: "<b>Lazy</b><br/><small>lifeless, apathetic, weary</small>"
  },
  {
    pick: 1,
    text: "<b>Legendary</b><br/><small>famous, distinctive, prominent</small>"
  },
  {
    pick: 1,
    text: "<b>Loud</b><br/><small>noisy, boisterous, deafening</small>"
  },
  {
    pick: 1,
    text: "<b>Lovable</b><br/><small>adorable, endearing, cuddly</small>"
  },
  {
    pick: 1,
    text: "<b>Lucky</b><br/><small>fortunate, serendipitous, favored</small>"
  },
  {
    pick: 1,
    text: "<b>Luscious</b><br/><small>delicious, savory, juicy</small>"
  },
  {
    pick: 1,
    text: "<b>Luxurious</b><br/><small>opulent, lavish, sumptuous</small>"
  },
  {
    pick: 1,
    text: "<b>Magical</b><br/><small>enchanting, miraculous, marvelous</small>"
  },
  {
    pick: 1,
    text: "<b>Manly</b><br/><small>masculine, virile, strong</small>"
  },
  {
    pick: 1,
    text: "<b>Masculine</b><br/><small>male, manly, virile</small>"
  },
  { pick: 1, text: "<b>Meek</b><br/><small>shy, mild, timid</small>" },
  {
    pick: 1,
    text:
      "<b>Melodramatic</b><br/><small>theatrical, sensational, showy</small>"
  },
  {
    pick: 1,
    text: "<b>Mischievous</b><br/><small>naughty, prankish, sly</small>"
  },
  {
    pick: 1,
    text: "<b>Miserable</b><br/><small>wretched, pitiful, forlorn</small>"
  },
  {
    pick: 1,
    text:
      "<b>Misunderstood</b><br/><small>not grasped, not learned, not absorbed</small>"
  },
  {
    pick: 1,
    text: "<b>Mysterious</b><br/><small>secretive, puzzling, strange</small>"
  },
  {
    pick: 1,
    text: "<b>Mystical</b><br/><small>spiritual, secretive, esoteric</small>"
  },
  {
    pick: 1,
    text: "<b>Naive</b><br/><small>unsophisticated, childlike, simple</small>"
  },
  {
    pick: 1,
    text: "<b>Nasty</b><br/><small>mean, inclement, offensive</small>"
  },
  {
    pick: 1,
    text: "<b>Natural</b><br/><small>pure, simple, unadorned</small>"
  },
  { pick: 1, text: "<b>Neat</b><br/><small>tidy, orderly, cool</small>" },
  {
    pick: 1,
    text: "<b>Neglected</b><br/><small>ignored, disregarded, rejected</small>"
  },
  { pick: 1, text: "<b>Nerdy</b><br/><small>unhip, uncool, dorky</small>" },
  {
    pick: 1,
    text: "<b>Normal</b><br/><small>usual, common, ordinary</small>"
  },
  {
    pick: 1,
    text: "<b>Obnoxious</b><br/><small>offensive, repulsive, annoying</small>"
  },
  {
    pick: 1,
    text: "<b>Odd</b><br/><small>different, eccentric, bizarre</small>"
  },
  {
    pick: 1,
    text: "<b>Offensive</b><br/><small>insulting, vulgar, attacking</small>"
  },
  {
    pick: 1,
    text: "<b>Ordinary</b><br/><small>usual, common, plain</small>"
  },
  {
    pick: 1,
    text: "<b>Organic</b><br/><small>natural, clean, biological</small>"
  },
  {
    pick: 1,
    text:
      "<b>Outrageous</b><br/><small>shocking, scandalous, disgraceful</small>"
  },
  {
    pick: 1,
    text:
      "<b>Overwhelming</b><br/><small>exhaustive, breathtaking, monumental</small>"
  },
  {
    pick: 1,
    text: "<b>Painful</b><br/><small>hurtful, agonizing, unbearable</small>"
  },
  {
    pick: 1,
    text:
      "<b>Pathetic</b><br/><small>pitiful, distressing, heart-rending</small>"
  },
  {
    pick: 1,
    text:
      "<b>Patriotic</b><br/><small>nationalistic, loyal, public-spirited</small>"
  },
  {
    pick: 1,
    text: "<b>Peaceful</b><br/><small>serene, restful, calm</small>"
  },
  {
    pick: 1,
    text: "<b>Perfect</b><br/><small>faultless, consummate, exact</small>"
  },
  {
    pick: 1,
    text:
      "<b>Philosophical</b><br/><small>thoughtful, contemplative, wise</small>"
  },
  {
    pick: 1,
    text: "<b>Phony</b><br/><small>false, artificial, imitation</small>"
  },
  {
    pick: 1,
    text: "<b>Playful</b><br/><small>fun, frisky, entertaining</small>"
  },
  {
    pick: 1,
    text: "<b>Popular</b><br/><small>well-liked, accepted, preferred</small>"
  },
  {
    pick: 1,
    text: "<b>Powerful</b><br/><small>strong, forceful, robust</small>"
  },
  {
    pick: 1,
    text: "<b>Primitive</b><br/><small>prehistoric, primal, uncivilized</small>"
  },
  {
    pick: 1,
    text:
      "<b>Principled</b><br/><small>conscientious, ethical, scrupulous</small>"
  },
  {
    pick: 1,
    text: "<b>Profound</b><br/><small>deep, wise, thoughtful</small>"
  },
  {
    pick: 1,
    text: "<b>Puffy</b><br/><small>swollen, billowy, bloated</small>"
  },
  {
    pick: 1,
    text: "<b>Pure</b><br/><small>innocent, unadulterated, chaste</small>"
  },
  { pick: 1, text: "<b>Quiet</b><br/><small>peaceful, silent, calm</small>" },
  {
    pick: 1,
    text: "<b>Radiant</b><br/><small>shining, glowing, sparkling</small>"
  },
  {
    pick: 1,
    text:
      "<b>Radical</b><br/><small>unconventional, revolutionary, extreme</small>"
  },
  {
    pick: 1,
    text: "<b>Rare</b><br/><small>scarce, unusual, half-cooked</small>"
  },
  {
    pick: 1,
    text: "<b>Realistic</b><br/><small>authentic, lifelike, reasonable</small>"
  },
  {
    pick: 1,
    text: "<b>Refined</b><br/><small>well-bred, purified, cultivated</small>"
  },
  {
    pick: 1,
    text:
      "<b>Refreshing</b><br/><small>brisk, invigorating, rejuvenating</small>"
  },
  {
    pick: 1,
    text: "<b>Relaxing</b><br/><small>restful, calming, peaceful</small>"
  },
  {
    pick: 1,
    text: "<b>Repulsive</b><br/><small>disgusting, offensive, foul</small>"
  },
  {
    pick: 1,
    text: "<b>Responsible</b><br/><small>accountable, obligated, mature</small>"
  },
  {
    pick: 1,
    text:
      "<b>Revolutionary</b><br/><small>innovative, rebellious, radical</small>"
  },
  {
    pick: 1,
    text: "<b>Rich</b><br/><small>wealthy, affluent, moneyed</small>"
  },
  {
    pick: 1,
    text: "<b>Ridiculous</b><br/><small>preposterous, absurd, ludicrous</small>"
  },
  {
    pick: 1,
    text: "<b>Risky</b><br/><small>hazardous, daring, speculative</small>"
  },
  {
    pick: 1,
    text: "<b>Rough</b><br/><small>scratchy, uneven, jagged</small>"
  },
  {
    pick: 1,
    text: "<b>Saintly</b><br/><small>virtuous, angelic, divine</small>"
  },
  { pick: 1, text: "<b>Sappy</b><br/><small>gooey, mushy, romantic</small>" },
  {
    pick: 1,
    text: "<b>Scary</b><br/><small>frightening, absurd, ugly</small>"
  },
  {
    pick: 1,
    text: "<b>Scenic</b><br/><small>picturesque, dramatic, panoramic</small>"
  },
  {
    pick: 1,
    text: "<b>Selfish</b><br/><small>stingy, greedy, miserly</small>"
  },
  {
    pick: 1,
    text: "<b>Senseless</b><br/><small>meaningless, absurd, foolish</small>"
  },
  {
    pick: 1,
    text: "<b>Sensitive</b><br/><small>susceptible, sympathetic, tender</small>"
  },
  {
    pick: 1,
    text: "<b>Sensual</b><br/><small>tactile, pleasing, sexual</small>"
  },
  {
    pick: 1,
    text: "<b>Sexy</b><br/><small>arousing, appealing, seductive</small>"
  },
  {
    pick: 1,
    text: "<b>Shallow</b><br/><small>superficial, trivial, not deep</small>"
  },
  { pick: 1, text: "<b>Sharp</b><br/><small>pointed, keen, acute</small>" },
  {
    pick: 1,
    text: "<b>Shiny</b><br/><small>reflective, gleaming, polished</small>"
  },
  {
    pick: 1,
    text:
      "<b>Shocking</b><br/><small>frightening, electrifying, startling</small>"
  },
  { pick: 1, text: "<b>Shy</b><br/><small>bashful, timid, cautious</small>" },
  {
    pick: 1,
    text: "<b>Silly</b><br/><small>goofy, absurd, nonsensical</small>"
  },
  {
    pick: 1,
    text: "<b>Smart</b><br/><small>intelligent, stylish, witty</small>"
  },
  { pick: 1, text: "<b>Smelly</b><br/><small>stinky, odorous, rank</small>" },
  { pick: 1, text: "<b>Smooth</b><br/><small>even, level, flat</small>" },
  { pick: 1, text: "<b>Snappy</b><br/><small>stylish, trendy, fast</small>" },
  {
    pick: 1,
    text: "<b>Soft</b><br/><small>malleable, pliable, mushy</small>"
  },
  { pick: 1, text: "<b>Speedy</b><br/><small>quick, rapid, fast</small>" },
  { pick: 1, text: "<b>Spicy</b><br/><small>flavorable, tangy, hot</small>" },
  {
    pick: 1,
    text:
      "<b>Spiritual</b><br/><small>religious, inspired, supernatural</small>"
  },
  { pick: 1, text: "<b>Spooky</b><br/><small>scary, weird, ghostly</small>" },
  {
    pick: 1,
    text: "<b>Spunky</b><br/><small>perky, lively, spirited</small>"
  },
  {
    pick: 1,
    text:
      "<b>Squeaky Clean</b><br/><small>pure, immaculate, unapproachable</small>"
  },
  {
    pick: 1,
    text:
      "<b>Stereotyped</b><br/><small>pigeonholed, caricatured, characterized</small>"
  },
  {
    pick: 1,
    text:
      "<b>Stunning</b><br/><small>astonishing, staggering, astounding</small>"
  },
  {
    pick: 1,
    text: "<b>Sultry</b><br/><small>sweltering, humid, sensual</small>"
  },
  { pick: 1, text: "<b>Sweet</b><br/><small>sugary, caring, good</small>" },
  {
    pick: 1,
    text: "<b>Swift</b><br/><small>quick, speedy, expeditious</small>"
  },
  {
    pick: 1,
    text: "<b>Talented</b><br/><small>gifted, clever, skillful</small>"
  },
  {
    pick: 1,
    text: "<b>Tame</b><br/><small>subdued, gentle, trained</small>"
  },
  {
    pick: 1,
    text:
      "<b>Technological</b><br/><small>scientific, futuristic, mechanical</small>"
  },
  {
    pick: 1,
    text:
      "<b>Temperamental</b><br/><small>moody, irritable, short-tempered</small>"
  },
  {
    pick: 1,
    text:
      "<b>Timeless</b><br/><small>classic, ageless, well-established</small>"
  },
  {
    pick: 1,
    text: "<b>Touchy-Feely</b><br/><small>affectionate, tactile, huggy</small>"
  },
  {
    pick: 1,
    text: "<b>Tough</b><br/><small>strong, firm, difficult</small>"
  },
  {
    pick: 1,
    text: "<b>Trustworthy</b><br/><small>honest, reliable, unfailing</small>"
  },
  {
    pick: 1,
    text: "<b>Twisted</b><br/><small>distorted, warped, perverted</small>"
  },
  {
    pick: 1,
    text:
      "<b>Unbelievable</b><br/><small>incredible, far-fetched, impossible</small>"
  },
  {
    pick: 1,
    text:
      "<b>Unforgettable</b><br/><small>notable, impressive, remarkable</small>"
  },
  {
    pick: 1,
    text: "<b>Unhealthy</b><br/><small>risky, sickly, dangerous</small>"
  },
  {
    pick: 1,
    text: "<b>Unnatural</b><br/><small>abnormal, artificial, bizarre</small>"
  },
  {
    pick: 1,
    text:
      "<b>Unreal</b><br/><small>imaginary, illusionary, unbelievable</small>"
  },
  {
    pick: 1,
    text:
      "<b>Unscrupulous</b><br/><small>unethical, corrupt, unprincipled</small>"
  },
  { pick: 1, text: "<b>Unusual</b><br/><small>rare, odd, uncommon</small>" },
  {
    pick: 1,
    text: "<b>Useless</b><br/><small>worthless, ineffective, unneeded</small>"
  },
  {
    pick: 1,
    text: "<b>Violent</b><br/><small>furious, vicious, destructive</small>"
  },
  {
    pick: 1,
    text: "<b>Virtuous</b><br/><small>worthy, righteous, chaste</small>"
  },
  {
    pick: 1,
    text:
      "<b>Visionary</b><br/><small>idealistic, prophetic, far-seeing</small>"
  },
  {
    pick: 1,
    text: "<b>Weird</b><br/><small>abnormal, peculiar, odd</small>"
  },
  {
    pick: 1,
    text: "<b>Wicked</b><br/><small>evil, corrupt, depraved</small>"
  },
  {
    pick: 1,
    text: "<b>Wild</b><br/><small>untamed, savage, ferocious</small>"
  },
  {
    pick: 1,
    text: "<b>Witty</b><br/><small>clever, humorous, cunning</small>"
  },
  {
    pick: 1,
    text: "<b>Woebegone</b><br/><small>dismal, sorrowful, bummed out</small>"
  },
  {
    pick: 1,
    text:
      "<b>Worldly</b><br/><small>experienced, sophisticated, materialistic</small>"
  },
  { pick: 1, text: "<b>Zany</b><br/><small>crazy, funny, wacky</small>" },
  {
    pick: 2,
    text:
      "In line with our predictions, we find a robust correlation between _ and _ (p&gt;.05)."
  },
  {
    pick: 1,
    text:
      "In what's being hailed as a major breakthrough, scientists have synthesized _ in the lab."
  },
  {
    pick: 1,
    text:
      "A study published in Nature this week found that _ is good for you in small doses."
  },
  {
    pick: 2,
    text:
      "In an attempt to recreate conditions just after the Big Bang, physicists at the LHC are observing collisions between _ and _."
  },
  { pick: 1, text: "What really killed the dinosaurs?" },
  {
    pick: 1,
    text:
      "Hey there, Young Scientists! Put on your labcoats and strap on your safety goggles, because today we're learning about _!"
  },
  {
    pick: 2,
    text: "Today on MythBusters, we found out how long _ can withstand _."
  },
  {
    pick: 1,
    text:
      "I work my ass off all day for this family, and this is what I come home to? _!?"
  },
  {
    pick: 1,
    text:
      "I have a strict policy. First date, dinner. Second date, kiss. Third date, _."
  },
  { pick: 1, text: "When I was a kid, we used to play Cowboys and _." },
  {
    pick: 1,
    text:
      "This is America. If you don't work hard, you don't succeed. I don't care if you're black, white, purple, or _."
  },
  { pick: 1, text: "You Won't Believe These 15 Hilarious _ Bloopers!" },
  {
    pick: 1,
    text:
      "James is a lonely boy. But when he discovers a secret door in his attic, he meets a magical new friend: _."
  },
  {
    pick: 1,
    text:
      "Don't worry kid. It gets better. I've been living with _ for 20 years."
  },
  {
    pick: 1,
    text:
      "My grandfather worked his way up from nothing. When he came to this country, all he had was the shoes on his feet and _."
  },
  { pick: 1, text: "Behind every powerful man is _." },
  {
    pick: 1,
    text: "You are not alone. Millions of Americans struggle with _ every day."
  },
  {
    pick: 1,
    text:
      "Come to Dubai, where you can relax in our world famous spas, experience the nightlife, or simply enjoy _ by the poolside."
  },
  { pick: 1, text: '"This is madness." "No, THIS IS _!"' },
  {
    pick: 1,
    text:
      "Listen Gary, I like you. But if you want that corner office, you're going to have to show me _."
  },
  {
    pick: 1,
    text:
      "I went to the desert and ate of the peyote cactus. Turns out my spirit animal is _."
  },
  {
    pick: 1,
    text: "And would you like those buffalo wings mild, hot, or _?"
  },
  {
    pick: 1,
    text:
      "The six things I could never do without: oxygen, Facebook, chocolate, Netflix, friends, and _ LOL!"
  },
  { pick: 1, text: "Why won't you make love to me anymore? Is it _?" },
  {
    pick: 1,
    text:
      "Puberty is a time of change. You might notice hair growing in new places. You might develop an interest in _. This is normal."
  },
  {
    pick: 1,
    text:
      "I'm sorry, Mrs. Chen, but there was nothing we could do. At 4:15 this morning, your son succumbed to _."
  },
  {
    pick: 1,
    text:
      "I'm Miss Tennessee, and if I could make the world better by changing one thing, I would get rid of _."
  },
  {
    pick: 1,
    text:
      "Tonight we will have sex. And afterwards, If you'd like, a little bit of _."
  },
  {
    pick: 1,
    text:
      "Everybody join hands and close your eyes. Do you sense that? That's the presence of _ in this room."
  },
  {
    pick: 1,
    text:
      "To become a true Yanomamo warrior, you must prove that you can withstand _ without crying out."
  },
  {
    pick: 1,
    text:
      "Y'all ready to get this thing started? I'm Nick Cannon, and this is America's Got _."
  },
  {
    pick: 1,
    text:
      "If you had to describe the Card Czar, using only one of the cards in your hand, which one would it be?"
  },
  {
    pick: 1,
    text:
      "Astronomers have discovered that the universe consists of 5% ordinary matter, 25% dark matter, and 70% _."
  },
  {
    pick: 1,
    text: "BowWOW! is the first pet hotel in LA that offers _ for dogs."
  },
  { pick: 1, text: "Hey, whatever happened to Renee Zellweger?" },
  { pick: 1, text: "Housekeeping! You want _?" },
  {
    pick: 1,
    text:
      "In bourgeois society, capital is independent and has individuality, while the living person is _."
  },
  {
    pick: 1,
    text:
      "Some men aren't looking for anything logical, like money. They can't be bought, bullied, reasoned or negotiated with. Some men just want _."
  },
  { pick: 1, text: "What's wrong with these gorillas?" },
  { pick: 1, text: "Why did the chicken cross the road?" },
  { pick: 1, text: "You say tomato, I say _." },
  { pick: 1, text: "America is hungry. America needs _." },
  {
    pick: 1,
    text: "I'm Bobby Flay, and if you can't stand _, get out of the kitchen!"
  },
  { pick: 1, text: "It's not delivery. It's _." },
  { pick: 1, text: "Aw babe, your burps smell like _!" },
  {
    pick: 1,
    text: "Don't miss Rachel Ray's hit new show, <i>Cooking with _</i>."
  },
  {
    pick: 1,
    text: "Excuse me, waiter. Could take this back? This soup tastes like _."
  },
  { pick: 1, text: "Now on Netflix: <i>Jiro Dreams of _</i>." },
  {
    pick: 1,
    text: "And in the end, the dragon was not evil; he just wanted _."
  },
  {
    pick: 2,
    text:
      'Critics are raving about HBO\'s new <i>Game of Thrones</i> spin-off, "_ of _."'
  },
  {
    pick: 1,
    text:
      "Having tired of poetry and music, the immortal elves now fill their days with _."
  },
  {
    pick: 1,
    text:
      "Legend tells of a princess who has been asleep for a thousand years and can only be awoken by _."
  },
  {
    pick: 1,
    text:
      "Who blasphemes and bubbles at the center of all infinity, whose name no lips dare speak aloud, and who gnaws hungrily in inconceivable, unlighted chambers beyond time?"
  },
  {
    pick: 1,
    text:
      "Your father was a powerful wizard, Harry. Before he died, he left you something very precious: _."
  },
  { pick: 1, text: "Don't worry, Penny! Go Go Gadget _!" },
  { pick: 2, text: "I need you like _ needs _." },
  {
    pick: 1,
    text: "I'm just gonna stay in tonight. You know, Netflix and _."
  },
  { pick: 1, text: 'Nothing says "I love you" like _.' },
  { pick: 2, text: "Such _. Very _. Wow." },
  { pick: 1, text: "This app is basically Tinder, but for _." },
  { pick: 1, text: "TRIGGER WARNING: _." },
  { pick: 1, text: "What did I nickname my genitals?" },
  { pick: 1, text: "You guys, you can buy _ on the dark web." },
  {
    pick: 1,
    text: "I'm Bobby Flay, and if you can't stand _, get out of the kitchen!"
  },
  { pick: 1, text: "\"It's not delivery.<br/>It's _.\"" },
  { pick: 1, text: "Aw babe, your burps smell like _!" },
  { pick: 1, text: "Don't miss Rachel Ray's hit new show, Cooking with _." },
  {
    pick: 1,
    text: "Excuse me, waiter. Could take this back? This soup tastes like _."
  },
  { pick: 1, text: "Now on Netflix: Jiro Dreams of _." },
  {
    pick: 1,
    text:
      "When you go to the polls on Tuesday, remember:  a vote for me is a vote for _."
  },
  {
    pick: 1,
    text: "As reparations for slavery, all African Americans will receive _."
  },
  {
    pick: 1,
    text:
      "Senator, I trust you enjoyed _ last night.  Now, can I count on your vote?"
  },
  { pick: 1, text: "Trump's great!  Trump's got _.  I love that." },
  {
    pick: 1,
    text:
      "According to Arizona's stand-your-ground law, you're allowed to shoot someone if they're _."
  },
  {
    pick: 1,
    text: "It's 3AM.  The red phone rings.  It's _.  Who do you want answering?"
  },
  { pick: 1, text: "Donald Trump has nominated _ for his VP." },
  {
    pick: 1,
    text:
      "In 2019, Donald Trump eliminated our national parks to make room for _."
  },
  { pick: 1, text: "Donald Trump's first act as president was to outlaw _." },
  { pick: 2, text: "_ be all like _." },
  {
    pick: 1,
    text:
      "Art isn't just a painting in a stuffy museum. Art is alive. Art is _."
  },
  {
    pick: 1,
    text: "As reparations for slavery, all African Americans will receive _."
  },
  {
    pick: 1,
    text:
      "As Teddy Roosevelt said, the four manly virtues are honor, temperance, industry, and _."
  },
  {
    pick: 1,
    text:
      "Best you go back where you came from, now. We don't take too kindly to _ in these parts."
  },
  { pick: 1, text: "CNN breaking news! Scientists discover _." },
  { pick: 1, text: "Coming to Red Lobster&reg; this month, _." },
  {
    pick: 1,
    text:
      "Congratulations! You have been selected for our summer internship program. While we are unable to offer a salary, we can offer you _."
  },
  {
    pick: 1,
    text:
      "Dance like there's nobody watching, love like you'll never be hurt, and live like you're _."
  },
  { pick: 1, text: "Errbody in the club _." },
  { pick: 1, text: "Feeling so grateful! #amazing #mylife #_." },
  { pick: 1, text: "Girls just wanna have _." },
  { pick: 1, text: "Google Calendar alert: _ in 10 minutes." },
  { pick: 1, text: "I don't believe in God. I believe in _." },
  {
    pick: 1,
    text:
      "I got rhythm, I've got music, I've got _. Who could ask for anything more?"
  },
  { pick: 1, text: "I may not be much to look at, but I fuck like _." },
  {
    pick: 1,
    text:
      "I tell you, it was a non-stop fuckfest. When it was over, my asshole looked like _."
  },
  {
    pick: 1,
    text:
      "I'll take the BBQ bacon burger with friend egg and fuck it how about _."
  },
  {
    pick: 1,
    text:
      "I'm sorry, sir, but your insurance plan doesn't cover injuries caused by _."
  },
  {
    pick: 1,
    text:
      "I've had a horrible vision, father. I saw mountains crumbling, stars falling from the sky. I saw _."
  },
  { pick: 1, text: "If at first you don't succeed, try _." },
  {
    pick: 1,
    text: "In the 1950s, psychologists prescribed _ as a cure for homosexually."
  },
  { pick: 1, text: "LSD + _ = really bad time." },
  {
    pick: 1,
    text:
      '"Mom\'s to-do list:<br/>- Buy Groceries.<br/>- Clean up _.<br/>- Soccer Practice."'
  },
  {
    pick: 1,
    text: "Most Americans would not vote for a candidate who is openly _."
  },
  {
    pick: 1,
    text: "No, no, no, no, no, no, NO! I will NOT let _ ruin this wedding."
  },
  { pick: 1, text: "Oh no! Siri, how do I fix _?" },
  {
    pick: 1,
    text:
      "One more thing. Watch out for Big Mike. They say he killed a man with _."
  },
  { pick: 1, text: "Ooo, daddy like _." },
  {
    pick: 1,
    text:
      "Poor Brandon, still living in his parent's basement. I heard he never got over _."
  },
  {
    pick: 1,
    text: "Run, run, as fast as you can! You can't catch me, I'm _!"
  },
  { pick: 1, text: "She's a lady in the streets, _ in the sheets." },
  {
    pick: 1,
    text:
      "She's just one of the guys, you know? She likes beer, and football, and _."
  },
  {
    pick: 1,
    text:
      "Son, take it from someone who's been around the block a few times. Nothin' puts her in the mood like _."
  },
  { pick: 1, text: "Summer lovin', had me a blast. _, happened so fast." },
  {
    pick: 1,
    text:
      '"The top Google auto-complete results for "Barack Obama":</br>- Barack Obama Height.</br>- Barack Obama net worth.</br>- Barack Obama _."'
  },
  {
    pick: 1,
    text:
      "Then the princess kissed the frog, and all of a sudden the frog was _!"
  },
  { pick: 1, text: "There is no God. It's just _ and then you die." },
  {
    pick: 1,
    text: "This Friday at the Liquid Lunge, it's _ Night! Ladies drink free."
  },
  {
    pick: 1,
    text:
      "We do not shake with our left hands in this country. That is the hand we use for _."
  },
  { pick: 1, text: "Well if _ is a crime, then lock me up!" },
  {
    pick: 1,
    text:
      "Well, shit. My eyes ain't so good, but I'll eat my own boot if that ain't _!"
  },
  { pick: 1, text: "What are all those whales singing about?" },
  { pick: 1, text: "What sucks balls?" },
  { pick: 1, text: "What totally destroyed my asshole?" },
  { pick: 1, text: "What turned me into a Republican?" },
  { pick: 1, text: "What will end racism once and for all?" },
  { pick: 1, text: "What's a total waste of Hillary Clinton's time?" },
  { pick: 1, text: "What's about to take dance floor to the next level?" },
  { pick: 1, text: "What's the gayest?" },
  { pick: 1, text: "What's the most problematic?" },
  {
    pick: 1,
    text: "Why am I laughing and crying and taking off my clothes?"
  },
  {
    pick: 1,
    text: "With a one-time gift of just $10, you can save this child from _."
  },
  { pick: 1, text: "You know who else liked _? Hitler." },
  { pick: 1, text: "You won't believe what's in my pussy. It's _." }
];
