var startContent = [
    {
        name: 'Setup',
        id: 'setup',
        content: '<p>Bevor du dir Bonuskarten nimmst, ziehe zun&auml;chst eine Bonuskarte f&uuml;r den Automa. Wenn die Bonuskarte &ldquo;Brutverwalter&rdquo; oder &ldquo;Laienornithologe&rdquo; gezogen wird oder sie unten nicht &ldquo;X% der Karten&rdquo; anzeigt, lege diese Bonuskarte zur&uuml;ck und ziehe eine andere. (Wiederhole dies bei Bedarf.) Mische anschlie&szlig;end alle Bonuskarten zusammen in einen Stapel, bevor du mit dem Spielaufbau fortf&auml;hrst. Du bist immer Startspieler.</p>'
    },
    {
        name: 'Gameplay',
        id: 'gameplay',
        content: '<p>Wenn der Automa an der Reihe ist, ziehe 1 Karte aus dem Automa-Stapel und lege sie offen auf alle zuvor aufgedeckten Automa-Karten. Folgende Automa Aktionen werden von dieser App automatisiert durchgef&uuml;hrt: Eier legen, Rundenziel-Aktionsw&uuml;rfel legen, Rundenziel-Aktionsw&uuml;rfel entfernen. Du musst weiterhin folgende Automa Aktionen ausf&uuml;hren: Karten ziehen, Einen Vogel spielen, Rosa F&auml;higkeiten aktivieren, Futter erhalten. L&ouml;st du w&auml;hrend deines Zuges eine braune F&auml;higkeit aus, nimmt der Automa nicht daran teil.</p>'
    }

    // Add any more starting information in the same syntax
    
]

var helpContent = [
    {
        name: 'Game Setup',
        id: 'gameSetup',
        classes: ['gameSetup'],
        content: '<p>Bevor du dir Bonuskarten nimmst, ziehe zun&auml;chst eine Bonuskarte f&uuml;r den Automa. Wenn die Bonuskarte &ldquo;Brutverwalter&rdquo; oder &ldquo;Laienornithologe&rdquo; gezogen wird oder sie unten nicht &ldquo;X% der Karten&rdquo; anzeigt, lege diese Bonuskarte zur&uuml;ck und ziehe eine andere. (Wiederhole dies bei Bedarf.) Mische anschlie&szlig;end alle Bonuskarten zusammen in einen Stapel, bevor du mit dem Spielaufbau fortf&auml;hrst. Du bist immer Startspieler.</p>'
    },
    {
        name: 'Gameplay',
        id: 'gameplay',
        classes: ['gameplay'],
        content: '<p>Wenn der Automa an der Reihe ist, ziehe 1 Karte aus dem Automa-Stapel und lege sie offen auf alle zuvor aufgedeckten Automa-Karten. Folgende Automa Aktionen werden von dieser App automatisiert durchgef&uuml;hrt: Eier legen, Rundenziel-Aktionsw&uuml;rfel legen, Rundenziel-Aktionsw&uuml;rfel entfernen. Du musst weiterhin folgende Automa Aktionen ausf&uuml;hren: Karten ziehen, Einen Vogel spielen, Rosa F&auml;higkeiten aktivieren, Futter erhalten. L&ouml;st du w&auml;hrend deines Zuges eine braune F&auml;higkeit aus, nimmt der Automa nicht daran teil.</p>'
    },
    {
        name: 'Automa Actions',
        id: 'automaActions',
        subsections: [
            {
                name: 'Draw Cards',
                id: 'drawCards',
                classes: ['drawCards'],
                content: '<p>Discard ALL 3 face-up cards from the bird tray. One face down card is automatically attributed to the Automa for end of game scoring purposes. Face-down birds are worth 3, 4, or 5 points at the end of the game based on the difficulty level you chose.</p><p class="italic">Note: It\'s entirely up to you if you physically want to discard the top face down card to mimic the Automa taking that card. However it\'s not necessary since the app records the Automa receiving the face down card for end of game scoring.</p>'
            },
            {
                name: 'Play a Bird',
                id: 'playBird',
                classes: ['playBird'],
                content: '<p>From the 3 face-up cards on the bird tray, pick up ALL that meet the requirement of the Automa\'s bonus card.</p><p>Of these cards, the Automa will take a note of the card(s) with the highest point value. Input this value into the app and then discard ALL cards that matched the Automa\'s bonus card criteria. Face-up birds are worth their stated point value at the end of the game.</p><p class="italic">For example, if the Automa\'s bonus card is Cartographer, which awards points for birds with geography terms in their names, it would check the face up bird cards for any that meets this criteria. Then it would gain the highest value of on offer (which would be inputted into the app), then all matched cards are discarded with new cards being drawn to replenish the discarded cards.</p><p>If there are no face up cards that meet the criteria of the Automas bonus card, then the Automa automatically gains a face down card.</p><p>Face-down birds are worth 3, 4, or 5 points at the end of the game based on the difficulty level you chose.</p><p class="italic">Note: It\'s entirely up to you if you physically want to discard the top face down card to mimic the Automa taking that card. However it\'s not necessary since the app records the Automa receiving the face down card for end of game scoring.</p>'
            },
            {
                name: 'Lay Eggs',
                id: 'layEggs',
                classes: ['layEggs'],
                content: '<p>An egg is added to the Automa\'s scoring record for each egg icon in the section for the current round.</p><p>This is handled automatically by the app so there is no need to physically give the Automa any eggs.</p>'
            },
            {
                name: 'Gain Food',
                id: 'gainFood',
                classes: ['gainFood'],
                content: '<p>If all dice in the birdfeeder show the same face, remove the remaining dice and toss all 5 dice into the top of the birdfeeder to refill it.</p><p>Using the key <img class="largeIcon" src="img/icons/dice-action-example.png" /> in the section for the current round, start from the left-most die face icon and select the first die face available in the birdfeeder. Remove <span class="bold">ALL</span> dice with that face from the birdfeeder (remember that the Automa does not actually take food from the supply).</p>'
            },
            {
                name: 'End-of-Round Cube',
                id: 'endOfRoundCube',
                classes: ['endOfRoundCube'],
                content: '<p>An end-of-round cube is either automatically added or removed from the Automa\'s scoring tally.</p>'
            },
            {
                name: 'Activate Pink Powers',
                id: 'activatePinkPowers',
                classes: ['activatePinkPowers'],
                content: '<p>Activate <span class="bold">ALL</span> pink powers of bird cards on your player mat (the Automa does nothing).</p>'
            }
        ]
    },
    {
        name: 'Brown Powers',
        id: 'brownPowers',
        content: '<p>The Automa does not participate in any brown powers you trigger during your turn. Therefore, any brown powers that require you to compare yourself to the Automa, the Automa loses. If other players are supposed to gain something, the Automa does not gain anything.</p>'
    },
    {
        name: 'End of Round Options',
        id: 'endOfRoundOptions',
        classes: ['endOfRoundOptions'],
        content: '<p>When playing against the Automa it is recommended that you use the green side of the goal board because it emphasizes a core interaction between you and the Automa.</p><p>However, the blue side can be played using the same rules.</p>'
    },
    {
        name: 'End of Round Goals',
        id: 'endOfRoundGoals',
        classes: ['endOfRoundGoals'],
        content: '<p>The Automa\'s quantity of the targeted item for end-of-round goal scoring is calculated using a base value (shown on the End-of-round Goal Scoring card) plus any cubes on the current round\'s goal tile.</p><p>The app will automatically work out the total items required for scoring and check to see if the Automa won, lost, or tied during the current round.</p><p class="italic">Note: The Automa cannot exceed 5 birds for the "birds in a specific habitat row" goal.</p>'
    },
    {
        name: 'Game-end Scoring',
        id: 'gameEndScoring',
        content: '<p>To calculate its final score, the Automa gets:</p><ul><li>Points from the end-of-round goals as shown on the goal board.</li><li>Points printed on each of its face-up bird cards.</li><li>3, 4, or 5 points for each of its face-down bird cards, depending on the difficulty level you chose.</li><li>1 point for each egg it collected.</li></ul><p>The app keeps a running score for the Automa, so you don\'t need to manually calculate it\'s score.</p><p class="italic">Note: The Automa doesn\'t gain points from its bonus card.</p><p>In the event of a tie, the Automa has 2 leftover food tokens for the tie-breaker.</p>'
    },
    {
        name: 'Difficulty Levels',
        id: 'difficultyLevels',
        content: '<p>You can adjust the Automa\'s difficulty to suit your play style by changing the points the Automa receives for each face-down bird card.</p><p><span class="bold">Eaglet:</span> 3 points<br /><span class="bold">Eagle:</span> 4 points (Normal)<br /><span class="bold">Eagle-eyed Eagle:</span> 5 points</p><p>Additionally, you may add the Automubon Society card to the Automa deck</p>'
    },
    {
        name: 'Bonus Cards',
        id: 'bonusCards',
        subsections: [
            {
                name: 'Anatomist',
                id: 'anatomist',
                classes: ['anatomistBonus'],
                content: '<p>Birds with body parts in their names.</p><p>Different versions of these words (such as &ldquo;bellied&rdquo; ) all count.</p><p>Body parts include:</p><p class="bold italic">beak, belly, bill, breast, cap, chin, collar, crest, crown, eye, face, head, neck, rump, shoulder, tail, throat, wing</p>'
                
            },
    
            {
                name: 'Bird Counter',
                id: 'birdCounter',
                classes: ['birdCounterBonus'],
                content: '<p>Birds with a <img class="largeIcon" src="img/icons/flock.png" /> power.</p><p>The <img class="largeIcon" src="img/icons/flock.png" /> symbol should be on the left-hand side of the bird&rsquo;s brown power.</p>'
                
            },
            {
                name: 'Bird Feeder',
                id: 'birdFeeder',
                classes: ['birdFeederBonus'],
                content: '<p>Birds that eat <img class="largeIcon" src="img/icons/food-seed.png" />. Any bird with a <img class="largeIcon" src="img/icons/food-seed.png" /> symbol. The bird may also eat other kinds of food.</p>'
                
            },
            {
                name: 'Cartographer',
                id: 'cartographer',
                classes: ['cartographerBonus'],
                content: '<p>Birds with geography terms in their names.</p><p>Terms include:</p><p class="bold italic">American, Atlantic, Baltimore, California, Canada, Carolina, Chihuahua, Eastern, Inca, Kentucky, Mississippi, Mountain, Northern, Sandhill, Savannah, Western</p>'
                
            },
            {
                name: 'Enclosure Builder',
                id: 'enclosureBuilder',
                classes: ['enclosureBuilderBonus'],
                content: '<p>Birds with <img class="largeIcon" src="img/icons/nest-ground.png" /> nests. Birds must have a <img class="largeIcon" src="img/icons/nest-ground.png" /> or <img class="largeIcon" src="img/icons/wild-nest.png" /> nest symbol.</p>'
                
            },
            {
                name: 'Falconer',
                id: 'falconer',
                classes: ['falconerBonus'],
                content: '<p>Birds with a <img class="largeIcon" src="img/icons/predator.png" /> power.</p><p>The <img class="largeIcon" src="img/icons/predator.png" /> symbol should be on the left-hand side of the bird&rsquo;s brown power.</p>'
                
            },
            {
                name: 'Fishery Manager',
                id: 'fisheryManager',
                classes: ['fisheryManagerBonus'],
                content: '<p>Birds that eat <img class="icon" src="img/icons/food-fish.png" />. Any bird with a <img class="icon" src="img/icons/food-fish.png" /> symbol. The bird may also eat other kinds of food.</p>'
                
            },
            {
                name: 'Food Web Expert',
                id: 'foodWebExpert',
                classes: ['foodWebExpertBonus'],
                content: '<p>Birds that eat only <img class="largeIcon" src="img/icons/food-invertebrate.png" />. Any bird that has only <img class="largeIcon" src="img/icons/food-invertebrate.png" /> and no other food symbols.</p>'
                
            },
            {
                name: 'Forester',
                id: 'forester',
                classes: ['foresterBonus'],
                content: '<p>Birds that can only live in <img class="largeIcon" src="img/icons/habitat-forest.png" />.</p><p>If a bird has the option to live in more than one type of habitat, it cannot count toward this bonus.</p>'
                
            },
            {
                name: 'Historian',
                id: 'historian',
                classes: ['historianBonus'],
                content: '<p>Birds named after a person. Any bird with an \'s in its name.</p><p>Names include:</p><p class="bold italic">Anna&rsquo;s, Baird&rsquo;s, Barrow&rsquo;s, Bell&rsquo;s, Bewick&rsquo;s, Brewer&rsquo;s, Cassin&rsquo;s, Clark&rsquo;s, Cooper&rsquo;s, Forster&rsquo;s, Franklin&rsquo;s, Lincoln&rsquo;s, Say&rsquo;s, Sprague&rsquo;s, Steller&rsquo;s, Swainson&rsquo;s, Wilson&rsquo;s</p>'
                
            },
            {
                name: 'Large Bird Specialist',
                id: 'largeBirdSpecialist',
                classes: ['largeBirdSpecialistBonus'],
                content: '<p>Birds with wingspans over 65cm.</p><p>Wingspans of exactly 65cm do not count toward this bonus.</p>'
                
            },
            {
                name: 'Nest Box Builder',
                id: 'nestBoxBuilder',
                classes: ['nestBoxBuilderBonus'],
                content: '<p>Birds with <img class="largeIcon" src="img/icons/nest-cavity.png" /> nests. Birds must have a <img class="largeIcon" src="img/icons/nest-cavity.png" /> or <img class="largeIcon" src="img/icons/wild-nest.png" /> nest symbol.</p>'
                
            },
            {
                name: 'Omnivore Expert',
                id: 'omnivoreExpert',
                classes: ['omnivoreExpertBonus'],
                content: '<p>Birds that eat <img class="largeIcon" src="img/icons/food-wild.png" />. Any bird that specifically has a <img class="largeIcon" src="img/icons/food-wild.png" /> symbol as part of its food cost.</p>'
                
            },
            {
                name: 'Passerine Specialist',
                id: 'passerineSpecialist',
                classes: ['passerineSpecialistBonus'],
                content: '<p>Birds with wingspans 30cm or less.</p><p>Wingspans of exactly 30cm count toward this bonus.</p>'
                
            },
            {
                name: 'Photographer',
                id: 'photographer',
                classes: ['photographerBonus'],
                content: '<p>Birds with colors in their names.</p><p>Colors include:</p><p class="bold italic">Ash, black, blue, bronze, brown, cerulean, chestnut, ferruginous, gold, gray, green, indigo, lazuli, purple, red, rose, roseate, ruby, ruddy, rufous, snowy, white, yellow</p>'
            },
            {
                name: 'Platform Builder',
                id: 'platformBuilder',
                classes: ['platformBuilderBonus'],
                content: '<p>Birds with <img class="largeIcon" src="img/icons/nest-platform.png" /> nests. Birds must have a <img class="largeIcon" src="img/icons/nest-platform.png" /> or <img class="largeIcon" src="img/icons/wild-nest.png" /> nest symbol.</p>'
                
            },
            {
                name: 'Prairie Manager',
                id: 'prairieManager',
                classes: ['prairieManagerBonus'],
                content: '<p>Birds that can only live in <img class="largeIcon" src="img/icons/habitat-grassland.png" /></p><p>If a bird has the option to live in more than one type of habitat, it cannot count toward this bonus.</p>'
                
            },
            {
                name: 'Rodentologist',
                id: 'rodentologist',
                classes: ['rodentologistBonus'],
                content: '<p>Birds that eat <img class="largeIcon" src="img/icons/food-rodent.png" />. Any bird with a <img class="largeIcon" src="img/icons/food-rodent.png" /> symbol. The bird may also eat other kinds of food.</p>'
                
            },
            {
                name: 'Viticulturalist',
                id: 'viticulturalist',
                classes: ['viticulturalistBonus'],
                content: '<p>Birds that eat <img class="largeIcon" src="img/icons/food-fruit.png" />. Any bird with a <img class="largeIcon" src="img/icons/food-fruit.png" /> symbol. The bird may also eat other kinds of food.</p>'
                
            },
            {
                name: 'Wetland Scientist',
                id: 'wetlandScientist',
                classes: ['wetlandScientistBonus'],
                content: '<p>Birds that can only live in <img class="largeIcon" src="img/icons/habitat-wetland.png" /></p><p>If a bird has the option to live in more than one type of habitat, it cannot count toward this bonus.</p>'
                
            },
            {
                name: 'Wildlife Gardener',
                id: 'wildlifeGardener',
                classes: ['wildlifeGardenerBonus'],
                content: '<p>Birds with <img class="largeIcon" src="img/icons/nest-bowl.png" /> nests. Birds must have a <img class="largeIcon" src="img/icons/nest-bowl.png" /> or <img class="largeIcon" src="img/icons/wild-nest.png" /> nest symbol.</p>'
            }
        ]
    },
    {
        name: 'Credit',
        id: 'credit',
        content: '<p>This is not an official <a href="https://stonemaiergames.com/games/wingspan/" target="_blank" rel="noopener">Stonemaier Games</a> product and has no affiliation with <a href="https://stonemaiergames.com/games/wingspan/" target="_blank" rel="noopener">Stonemaier Games</a>.</p><p>Wingspan was designed by <a href="https://boardgamegeek.com/user/elizharg" target="_blank" rel="noopener">Elizabeth Hargrave</a>, with art by <a href="https://www.facebook.com/NataliaRojasArt/" target="_blank" rel="noopener">Natalia Rojas</a>, <a href="https://www.anammartinez.com/" target="_blank" rel="noopener">Ana Maria Martinez Jaramillo</a>, and <a href="https://twitter.com/beth_sobel" target="_blank" rel="noopener">Beth Sobel</a>.</p><p>All art in this app is from <a href="https://stonemaiergames.com/games/wingspan/" target="_blank" rel="noopener">Wingspan</a>.</p><p>The Automa for Wingspan was designed by <a href="https://boardgamegeek.com/user/DJStudley" target="_blank" rel="noopener">David Studley</a> and <a href="http://www.automafactory.com/" target="_blank" rel="noopener">Automa Factory</a>.</p>'
    },
    {
        name: 'Contact',
        id: 'contact',
        content: '<p>Feel free to <a href="mailto:gavin.mcgruddy@gmail.com?subject=Wingspan%20Online%20Automa" target="_blank" rel="noopener">email me</a>, or send a BGG message to <a href="https://boardgamegeek.com/geekmail/compose?touser=Gavmastaphlex" target="_blank" rel="noopener">Gavmastaphlex</a> with any feedbacks / suggestions.</p>'
    }
]

