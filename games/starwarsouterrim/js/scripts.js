var _0x48ab=['func-showLayer-game','func-drawStarWarsCard-savedGame','All\x20<a\x20href=\x22https://boardgamegeek.com/filepage/183058/modified-solo-ai-decks-each-character\x22\x20target=\x22_blank\x22>Automa\x20mechanics\x20and\x20information</a>\x20credited\x20to\x20BGG\x20user\x20<a\x20href=\x22https://boardgamegeek.com/user/game%20green\x22\x20target=\x22_blank\x22>game\x20green</a>,\x20and\x20are\x20based\x20off\x20the\x20AI\x20cards\x20from\x20<a\x20href=\x22https://www.fantasyflightgames.com/en/products/star-wars-outer-rim/\x22\x20target=\x22_blank\x22\x20rel=\x22noopener\x22>Star\x20War:\x20Outer\x20Rim</a>,\x20published\x20by\x20<a\x20href=\x22https://www.fantasyflightgames.com/en/products/star-wars-outer-rim/\x22\x20target=\x22_blank\x22\x20rel=\x22noopener\x22>Fantasy\x20Flight\x20Games</a>.This\x20is\x20not\x20an\x20official\x20<a\x20href=\x22https://www.fantasyflightgames.com/en/products/star-wars-outer-rim/\x22\x20target=\x22_blank\x22\x20rel=\x22noopener\x22>Fantasy\x20Flight\x20Games</a>\x20product\x20and\x20has\x20no\x20affiliation\x20with\x20<a\x20href=\x22https://www.fantasyflightgames.com/en/products/star-wars-outer-rim/\x22\x20target=\x22_blank\x22\x20rel=\x22noopener\x22>Fantasy\x20Flight\x20Games</a>.','ready','<div\x20id=\x22aiNumContainer\x22><p\x20id=\x22aiNum\x22>AI\x20Players:</p><select\x20id=\x22aiNumSelect\x22\x20name=\x22aiNumList\x22><option\x20value=\x221\x22>One</option><option\x20value=\x222\x22>Two</option><option\x20value=\x223\x22>Three</option></select><div\x20class=\x22clearDiv\x22></div></div>','appendTo','#characterChoiceLayer','<p\x20id=\x22chooseHumanCharacter\x22>Choose\x20the\x20character\x20you\x20will\x20be\x20playing\x20with\x20to\x20unlock\x20the\x20AI\x20Characters\x20available\x20below.</p>','<div\x20id=\x22humanCharacterContainer\x22>','<select\x20id=\x22humanCharacterSelect\x22\x20name=\x22humanCharacterList\x22>','<option\x20value=\x22\x22\x20disabled\x20selected>Human\x20character</option>','<option\x20value=\x22bobaFett\x22>Boba\x20Fett</option>','<option\x20value=\x22bossk\x22>Bossk</option>','<option\x20value=\x22doctorAphra\x22>Doctor\x20Aphra</option>','<option\x20value=\x22ig88\x22>IG-88</option>','<option\x20value=\x22jynErso\x22>Jyn\x20Erso</option>','<option\x20value=\x22ketsuOnyo\x22>Ketsu\x20Onyo</option>','<option\x20value=\x22landoCalrissian\x22>Lando\x20Calrissian</option>','</select>','<div\x20class=\x22clearDiv\x22></div>','</div>','#aiNumSelect','val','<div\x20id=\x22aiCharacterContainer\x22\x20aiNum=\x22','aiNum','<div\x20id=\x22aiCharacter','Container\x22\x20class=\x22aiCharacterSelectContainer\x22>','<p\x20id=\x22aiCharacter\x22>AI\x20Character\x20','<select\x20class=\x22selectedAICharacter\x22\x20id=\x22aiCharacterSelect','\x22\x20name=\x22aiCharacterList','<option\x20value=\x22\x22\x20disabled\x20selected>Select\x20character</option>','<div\x20id=\x22characterChoiceBtns\x22>','<a\x20href=\x22#\x22\x20id=\x22randomAIBtn\x22\x20class=\x22btn\x20greyBtn\x22>Randomize\x20AI</a>','<a\x20href=\x22#\x22\x20id=\x22setupInstructionsBtn\x22\x20class=\x22btn\x20greyBtn\x22>Next</a>','#container','#setupInstructionsLayer','remove','<div\x20id=\x22setupInstructionsLayer\x22\x20class=\x22layer\x22>','<h2>Character\x20setup</h2>','<p\x20class=\x22characterCardBlurb\x22>Each\x20AI\x20character\x20uses\x20their\x20assigned\x20characters\x20starting\x20card\x20for\x20setup.</p>','<div\x20class=\x22characterSetupContainer\x22\x20aiNum=\x22','<div\x20class=\x22characterSetupBox\x22>','<div\x20class=\x22characterSetupBoxCenter\x22>','.selectedAICharacter','charactersCodes','indexOf','<h3>','characters','<ul>','<li\x20class=\x22italic\x22>(Follow\x20Bounty\x20Setup\x20Instructions\x20below)</li>','<li>','</ul>','<p\x20class=\x22bountyInstructions\x22><span\x20class=\x22bold\x20italic\x22>*\x20Bounty\x20Instructions:</span>\x20Find\x20the\x20starting\x20contact\x20token\x20for\x20this\x20character\x20and\x20place\x20it\x20on\x20the\x20first\x20destination\x20from\x20the\x20market\x20deck\x20that\x20matches\x20the\x20contact\x20color\x20and\x20is\x20not\x20the\x20AIs\x20starting\x20location.\x20Then\x20shuffle\x20the\x20remaining\x20contact\x20tokens\x20and\x20place\x20them\x20as\x20normal.\x20If\x20there\x20is\x20no\x20location\x20that\x20matches\x20during\x20setup,\x20then\x20cycle\x20the\x20top\x20cards\x20till\x20one\x20becomes\x20available\x20(you\x20only\x20do\x20this\x20during\x20setup).','</p><p\x20class=\x22bountyInstructions\x22><span\x20class=\x22bold\x20italic\x22>Since\x20there\x20are\x20multiple\x20bounty\x20hunter\x20AI\x20in\x20play,\x20repeat\x20the\x20same\x20steps,\x20but\x20make\x20sure\x20there&rsquo;s\x20only\x20one\x20bounty\x20on\x20each\x20location\x20(cycle\x20the\x20cards\x20if\x20needed).</span>','</p>','<a\x20href=\x22#\x22\x20id=\x22backToStart\x22\x20class=\x22btn\x20redBtn\x20func-showLayer-characterChoice\x22>Back</a>','<a\x20href=\x22#\x22\x20id=\x22startGame\x22\x20class=\x22btn\x20greenBtn\x20func-startGame\x20func-buildGame\x20func-showLayer-game\x22>Start</a>','#humanCharacterSelect','one','#randomAIBtn','removeClass','greyBtn','addClass','blueBtn\x20func-randomizeAI','change','two','#aiCharacterSelectTwo','#aiCharacterSelectThree','#setupInstructionsBtn','floor','random','slice','splice','#aiCharacterSelectOne','length','html','append','<option\x20value=\x22','</option>','three','<div\x20id=\x22masterCharacterContainer\x22>','<div\x20id=\x22characterLinksAndButtonContainer\x22\x20characters=\x221\x22>','<a\x20href=\x22#\x22\x20id=\x22draw\x22\x20class=\x22btn\x20redBtn\x20func-drawStarWarsCard-game\x22>Next\x20Card</a>','<div\x20class=\x22characterContainer\x20characterContainerInstructions\x22>','<p\x20class=\x22characterTitle\x22>Instructions</p>','<p\x20style=\x22text-align:center!important;\x22\x20class=\x22italic\x22>Either\x20click\x20\x22Next\x20Card\x22\x20to\x20draw\x20a\x20card\x20for\x20the\x20next\x20queued\x20opponent,\x20or\x20click\x20on\x20one\x20of\x20the\x20character\x20names\x20to\x20see\x20the\x20most\x20recent\x20card\x20for\x20that\x20AI.</p>','aiCharactersChosen','-container\x22>','aiCharacters','\x20<span\x20class=\x22currentCardNumber\x22></span></p>','<p\x20class=\x22characterNotes\x22><a\x20id=\x22char-','\x22\x20class=\x22characterNotesLink\x22\x20href=\x22#\x22>Character\x20notes</a></p>','<p\x20style=\x22text-align:center!important;\x22\x20class=\x22italic\x22>No\x20cards\x20chosen\x20yet.</p>','<div\x20id=\x22characterLinksAndButtonContainer\x22\x20characters=\x222\x22>','<div\x20id=\x22characterLinksContainer\x22>','<p\x20id=\x22','\x22\x20class=\x22characterLink\x20inactiveCharacter\x22>','<div\x20id=\x22characterCardContainer\x22>','<p\x20class=\x22characterTitle\x22>','<div\x20class=\x22chosenCardInfo\x22>','<div\x20class=\x22characterContainer\x20characterContainerTwo\x22\x20id=\x22','<div\x20id=\x22characterLinksAndButtonContainer\x22\x20characters=\x223\x22>','<div\x20class=\x22characterContainer\x20characterContainerOne\x22\x20id=\x22','.starwars-card-container','.characterContainerInstructions','show','.characterLink','attr','.characterContainer','hide','-container','push','aiDecks','parse','stringify','.characterContainer.characterContainerInstructions','currentCharacter','card','currentCards','nextCards','game','nextCharacter','firstCharacterTurn','savedGame','moves','.activeCharacter','activeCharacter','inactiveCharacter','<h4>Planning\x20(Do\x20<span\x20class=\x22underline\x22>FIRST</span>\x20that\x20applies)</h4>','<ol>','planning','startsWith','***','<p\x20class=\x22italic\x22>','replace','</li>','</ol>','<h4>Action\x20(Do\x20<span\x20class=\x22underline\x22>ALL</span>\x20that\x20apply)</h4>','action','<h4>Encounter\x20(Do\x20<span\x20class=\x22underline\x22>FIRST</span>\x20that\x20applies)</h4>','encounter','<p><span\x20class=\x22bold\x22>Ship\x20Special:</span>\x20Check\x20Ship\x20Goal.\x20If\x20applicable,\x20complete\x20it\x20and\x20gain\x20reward.\x20Then\x20flip\x20ship\x20card.</p>','special','None.','<p><span\x20class=\x22bold\x22>Special:</span>\x20','<p><span\x20class=\x22bold\x22>Special:</span>\x20<span\x20class=\x22red\x22>','</span></p>','moveHistory','.characterContainer\x20.chosenCardInfo','find','\x20-\x20Card\x20','<div\x20class=\x22confirmationBox\x20alertEl\x20actionTypeAlertBox\x20moveHistoryCard\x22>','<div\x20class=\x22buttons\x22\x20btns=\x221\x22>','<a\x20href=\x22#\x22\x20class=\x22btn\x20redBtn\x22>Close</a>','body','.confirmationBox.moveHistoryCard','fadeIn','noScroll','<p><span\x20class=\x22bold\x20italic\x22>Move\x20','moveNum',':\x20</span>','\x22\x20class=\x22moveHistoryCardLink\x22\x20href=\x22#\x22>Card\x20','</span>\x20deck\x20shuffled</p>','custom','add','.characterNotesLink','split','.moveHistoryCardLink','.confirmationBox.alertEl.actionTypeAlertBox.moveHistoryCard\x20.helpLink','<div\x20id=\x22','\x20Notes</h3>','.confirmationBox.showCharacterNotes','#resetOverlay','Star\x20Wars:\x20Outer\x20Rim','Boba\x20Fett','Bossk','Doctor\x20Aphra','Han\x20Solo','Jyn\x20Erso','Ketsu\x20Onyo','bobaFett','doctorAphra','hanSolo','ig88','jynErso','ketsuOnyo','landoCalrissian','starWars','resetDeck','<p\x20class=\x22imageDisclaimer\x20gameInfoHide\x22>Not\x20an\x20official\x20Fantasy\x20Flight\x20product.</p>','newGame','redBtn','func-setupCharacterChoice','Continue','continue','hidden'];(function(_0xb78336,_0x394409){var _0x4b0669=function(_0x45e411){while(--_0x45e411){_0xb78336['push'](_0xb78336['shift']());}};_0x4b0669(++_0x394409);}(_0x48ab,0x171));var _0x5ddf=function(_0x1b44d7,_0xba6d22){_0x1b44d7=_0x1b44d7-0x0;var _0x4d7958=_0x48ab[_0x1b44d7];return _0x4d7958;};var init={'title':_0x5ddf('0x0'),'code':'swor','characters':[_0x5ddf('0x1'),_0x5ddf('0x2'),_0x5ddf('0x3'),_0x5ddf('0x4'),'IG-88',_0x5ddf('0x5'),_0x5ddf('0x6'),'Lando\x20Calrissian'],'charactersCodes':[_0x5ddf('0x7'),'bossk',_0x5ddf('0x8'),_0x5ddf('0x9'),_0x5ddf('0xa'),_0x5ddf('0xb'),_0x5ddf('0xc'),_0x5ddf('0xd')],'aiNum':0x1,'aiCharacters':[],'aiCharactersChosen':[],'aiDecks':[],'cardDisplay':_0x5ddf('0xe'),'currentCharacter':0x0,'nextCharacter':0x0,'currentCards':[0x0,0x0,0x0],'nextCards':[0x0,0x0,0x0],'firstCharacterTurn':[0x0,0x0,0x0],'previousCards':[[],[],[]],'moveSymbol':'/','onDraw':[],'onShuffle':['hideShuffle'],'onReset':[_0x5ddf('0xf')],'resumeGame':![],'extraCardInfo':_0x5ddf('0x10'),'startButtons':[{'name':'New\x20Game','id':_0x5ddf('0x11'),'classes':[_0x5ddf('0x12'),_0x5ddf('0x13'),'func-showLayer-characterChoice']},{'name':_0x5ddf('0x14'),'id':_0x5ddf('0x15'),'classes':['redBtn',_0x5ddf('0x16'),_0x5ddf('0x17'),_0x5ddf('0x18')]}],'lockBtn':[{'name':'draw','time':0x3e8}],'disclaimer':_0x5ddf('0x19')};$(document)[_0x5ddf('0x1a')](function(){var _0x68649e=_0x5ddf('0x1b');$(_0x68649e)[_0x5ddf('0x1c')]('#setupSummary');});function setupCharacterChoice(){$(_0x5ddf('0x1d'))['remove']();var _0x387c00='<div\x20id=\x22characterChoiceLayer\x22\x20class=\x22layer\x22>';_0x387c00+=_0x5ddf('0x1e');_0x387c00+=_0x5ddf('0x1f');_0x387c00+=_0x5ddf('0x20');_0x387c00+=_0x5ddf('0x21');_0x387c00+=_0x5ddf('0x22');_0x387c00+=_0x5ddf('0x23');_0x387c00+=_0x5ddf('0x24');_0x387c00+='<option\x20value=\x22hanSolo\x22>Han\x20Solo</option>';_0x387c00+=_0x5ddf('0x25');_0x387c00+=_0x5ddf('0x26');_0x387c00+=_0x5ddf('0x27');_0x387c00+=_0x5ddf('0x28');_0x387c00+=_0x5ddf('0x29');_0x387c00+=_0x5ddf('0x2a');_0x387c00+='<a\x20href=\x22#\x22\x20id=\x22randomHumanBtn\x22\x20class=\x22btn\x20blueBtn\x20func-randomizeHuman\x22>Randomize</a>';_0x387c00+=_0x5ddf('0x2b');game['aiNum']=parseInt($(_0x5ddf('0x2c'))[_0x5ddf('0x2d')]());_0x387c00+=_0x5ddf('0x2e')+game['aiNum']+'\x22>';for(let _0x3bf68f=0x0;_0x3bf68f<game[_0x5ddf('0x2f')];_0x3bf68f++){_0x387c00+=_0x5ddf('0x30')+capitalizeFirstLetter(numberIntoText(_0x3bf68f+0x1))+_0x5ddf('0x31');_0x387c00+=_0x5ddf('0x32')+capitalizeFirstLetter(numberIntoText(_0x3bf68f+0x1))+':</p>';_0x387c00+=_0x5ddf('0x33')+capitalizeFirstLetter(numberIntoText(_0x3bf68f+0x1))+_0x5ddf('0x34')+capitalizeFirstLetter(numberIntoText(_0x3bf68f+0x1))+'\x22>';_0x387c00+=_0x5ddf('0x35');_0x387c00+=_0x5ddf('0x29');_0x387c00+=_0x5ddf('0x2a');_0x387c00+='</div>';}_0x387c00+=_0x5ddf('0x2a');_0x387c00+=_0x5ddf('0x2b');_0x387c00+=_0x5ddf('0x36');_0x387c00+='<a\x20href=\x22#\x22\x20id=\x22backToStart\x22\x20class=\x22btn\x20redBtn\x20func-showLayer-start\x22>Back</a>';_0x387c00+=_0x5ddf('0x37');_0x387c00+=_0x5ddf('0x38');_0x387c00+=_0x5ddf('0x2a');_0x387c00+=_0x5ddf('0x2b');_0x387c00+='</div>';$(_0x387c00)[_0x5ddf('0x1c')](_0x5ddf('0x39'));}function setupInstructions(){$(_0x5ddf('0x3a'))[_0x5ddf('0x3b')]();var _0x3193b4=_0x5ddf('0x3c');var _0x5aec02=0x0;_0x3193b4+=_0x5ddf('0x3d');_0x3193b4+=_0x5ddf('0x3e');_0x3193b4+=_0x5ddf('0x3f')+game[_0x5ddf('0x2f')]+'\x22>';for(let _0x2303a6=0x0;_0x2303a6<game[_0x5ddf('0x2f')];_0x2303a6++){_0x3193b4+=_0x5ddf('0x40');_0x3193b4+=_0x5ddf('0x41');let _0x39af5b=$(_0x5ddf('0x42'))['eq'](_0x2303a6)[_0x5ddf('0x2d')]();let _0x2811cb=game[_0x5ddf('0x43')][_0x5ddf('0x44')](_0x39af5b);_0x3193b4+=_0x5ddf('0x45')+game[_0x5ddf('0x46')][_0x2811cb]+'</h3>';_0x3193b4+=_0x5ddf('0x47');for(let _0x2d2b7b=0x0;_0x2d2b7b<characterSetup[game[_0x5ddf('0x43')][_0x2811cb]]['length'];_0x2d2b7b++){if(characterSetup[game[_0x5ddf('0x43')][_0x2811cb]][_0x2d2b7b]=='bounty'){_0x5aec02++;_0x3193b4+=_0x5ddf('0x48');}else{_0x3193b4+=_0x5ddf('0x49')+characterSetup[game['charactersCodes'][_0x2811cb]][_0x2d2b7b]+'</li>';}}_0x3193b4+=_0x5ddf('0x4a');_0x3193b4+=_0x5ddf('0x2b');_0x3193b4+=_0x5ddf('0x2b');}_0x3193b4+=_0x5ddf('0x2a');_0x3193b4+=_0x5ddf('0x2b');if(_0x5aec02>0x0){_0x3193b4+=_0x5ddf('0x4b');if(_0x5aec02>0x1){_0x3193b4+=_0x5ddf('0x4c');}_0x3193b4+=_0x5ddf('0x4d');}_0x3193b4+='<div\x20id=\x22setupInstructionsBtns\x22>';_0x3193b4+=_0x5ddf('0x4e');_0x3193b4+=_0x5ddf('0x4f');_0x3193b4+=_0x5ddf('0x2a');_0x3193b4+=_0x5ddf('0x2b');$(_0x3193b4)[_0x5ddf('0x1c')](_0x5ddf('0x39'));}$(document)['on']('change',_0x5ddf('0x50'),function(){populateAICharacters(_0x5ddf('0x51'));$(_0x5ddf('0x52'))[_0x5ddf('0x53')](_0x5ddf('0x54'))[_0x5ddf('0x55')](_0x5ddf('0x56'));});$(document)['on'](_0x5ddf('0x57'),'#aiCharacterSelectOne',function(){if(game[_0x5ddf('0x2f')]==0x1){activateStartBtn();}else{populateAICharacters(_0x5ddf('0x58'));}});$(document)['on'](_0x5ddf('0x57'),_0x5ddf('0x59'),function(){if(game[_0x5ddf('0x2f')]==0x2){activateStartBtn();}else{populateAICharacters('three');}});$(document)['on'](_0x5ddf('0x57'),_0x5ddf('0x5a'),function(){activateStartBtn();});function activateStartBtn(){$(_0x5ddf('0x5b'))['addClass']('greenBtn\x20func-setupInstructions\x20func-showLayer-setupInstructions')[_0x5ddf('0x53')]('greyBtn');}function deactivateStartBtn(){$('#setupInstructionsBtn')[_0x5ddf('0x55')](_0x5ddf('0x54'))[_0x5ddf('0x53')]('greenBtn\x20func-setupInstructions\x20func-showLayer-setupInstructions');}function randomizeHuman(){let _0x523a17=Math[_0x5ddf('0x5c')](Math[_0x5ddf('0x5d')]()*0x8);$(_0x5ddf('0x50'))[_0x5ddf('0x2d')](game[_0x5ddf('0x43')][_0x523a17]);populateAICharacters(_0x5ddf('0x51'));$('#randomAIBtn')['removeClass'](_0x5ddf('0x54'))[_0x5ddf('0x55')](_0x5ddf('0x56'));}function randomizeAI(){var _0x5cdd4f=game[_0x5ddf('0x43')][_0x5ddf('0x5e')]();var _0x15188c=game['characters']['slice']();var _0x4a4be5=_0x5cdd4f[_0x5ddf('0x44')]($('#humanCharacterSelect')['val']());if(_0x4a4be5!=-0x1){_0x5cdd4f[_0x5ddf('0x5f')](_0x4a4be5,0x1);_0x15188c[_0x5ddf('0x5f')](_0x4a4be5,0x1);}populateAICharacters(_0x5ddf('0x51'));var _0x1552ea=Math[_0x5ddf('0x5c')](Math[_0x5ddf('0x5d')]()*_0x5cdd4f['length']);$(_0x5ddf('0x60'))[_0x5ddf('0x2d')](_0x5cdd4f[_0x1552ea]);if($('#aiCharacterSelectTwo')[_0x5ddf('0x61')]){populateAICharacters('two');_0x4a4be5=_0x5cdd4f[_0x5ddf('0x44')]($(_0x5ddf('0x60'))[_0x5ddf('0x2d')]());if(_0x4a4be5!=-0x1){_0x5cdd4f[_0x5ddf('0x5f')](_0x4a4be5,0x1);_0x15188c[_0x5ddf('0x5f')](_0x4a4be5,0x1);}_0x1552ea=Math['floor'](Math[_0x5ddf('0x5d')]()*_0x5cdd4f[_0x5ddf('0x61')]);$(_0x5ddf('0x59'))[_0x5ddf('0x2d')](_0x5cdd4f[_0x1552ea]);}if($(_0x5ddf('0x5a'))[_0x5ddf('0x61')]){populateAICharacters('three');_0x4a4be5=_0x5cdd4f['indexOf']($(_0x5ddf('0x59'))[_0x5ddf('0x2d')]());if(_0x4a4be5!=-0x1){_0x5cdd4f[_0x5ddf('0x5f')](_0x4a4be5,0x1);_0x15188c[_0x5ddf('0x5f')](_0x4a4be5,0x1);}_0x1552ea=Math['floor'](Math[_0x5ddf('0x5d')]()*_0x5cdd4f[_0x5ddf('0x61')]);$('#aiCharacterSelectThree')['val'](_0x5cdd4f[_0x1552ea]);}activateStartBtn();}function populateAICharacters(_0x4041e6){deactivateStartBtn();var _0x1fb488=game[_0x5ddf('0x43')][_0x5ddf('0x5e')]();var _0x365a14=game[_0x5ddf('0x46')][_0x5ddf('0x5e')]();if(_0x4041e6==_0x5ddf('0x51')){let _0x25ea74=_0x1fb488[_0x5ddf('0x44')]($(_0x5ddf('0x50'))[_0x5ddf('0x2d')]());if(_0x25ea74!=-0x1){_0x1fb488[_0x5ddf('0x5f')](_0x25ea74,0x1);_0x365a14[_0x5ddf('0x5f')](_0x25ea74,0x1);}$(_0x5ddf('0x60'))[_0x5ddf('0x62')](_0x5ddf('0x35'));for(let _0x29a138=0x0;_0x29a138<_0x1fb488[_0x5ddf('0x61')];_0x29a138++){$(_0x5ddf('0x60'))[_0x5ddf('0x63')](_0x5ddf('0x64')+_0x1fb488[_0x29a138]+'\x22>'+_0x365a14[_0x29a138]+_0x5ddf('0x65'));}if($('#aiCharacterSelectTwo')[_0x5ddf('0x61')]){$(_0x5ddf('0x59'))[_0x5ddf('0x62')](_0x5ddf('0x35'));}if($('#aiCharacterSelectThree')[_0x5ddf('0x61')]){$('#aiCharacterSelectThree')[_0x5ddf('0x62')](_0x5ddf('0x35'));}}else if(_0x4041e6=='two'){var _0x1fb488=game[_0x5ddf('0x43')][_0x5ddf('0x5e')]();var _0x365a14=game['characters'][_0x5ddf('0x5e')]();let _0x4429a2=_0x1fb488[_0x5ddf('0x44')]($(_0x5ddf('0x50'))['val']());if(_0x4429a2!=-0x1){_0x1fb488[_0x5ddf('0x5f')](_0x4429a2,0x1);_0x365a14[_0x5ddf('0x5f')](_0x4429a2,0x1);}_0x4429a2=_0x1fb488[_0x5ddf('0x44')]($('#aiCharacterSelectOne')[_0x5ddf('0x2d')]());if(_0x4429a2!=-0x1){_0x1fb488['splice'](_0x4429a2,0x1);_0x365a14[_0x5ddf('0x5f')](_0x4429a2,0x1);}if($(_0x5ddf('0x59'))[_0x5ddf('0x61')]){let _0x4429a2=_0x1fb488[_0x5ddf('0x44')]($(_0x5ddf('0x60'))[_0x5ddf('0x2d')]());if(_0x4429a2!=-0x1){_0x1fb488[_0x5ddf('0x5f')](_0x4429a2,0x1);_0x365a14['splice'](_0x4429a2,0x1);}$(_0x5ddf('0x59'))[_0x5ddf('0x62')](_0x5ddf('0x35'));for(let _0x520755=0x0;_0x520755<_0x1fb488['length'];_0x520755++){$('#aiCharacterSelectTwo')[_0x5ddf('0x63')](_0x5ddf('0x64')+_0x1fb488[_0x520755]+'\x22>'+_0x365a14[_0x520755]+_0x5ddf('0x65'));}}if($('#aiCharacterSelectThree')[_0x5ddf('0x61')]){$(_0x5ddf('0x5a'))[_0x5ddf('0x62')]('<option\x20value=\x22\x22\x20disabled\x20selected>Select\x20character</option>');}}else if(_0x4041e6==_0x5ddf('0x66')){var _0x1fb488=game[_0x5ddf('0x43')][_0x5ddf('0x5e')]();var _0x365a14=game[_0x5ddf('0x46')][_0x5ddf('0x5e')]();let _0x197043=_0x1fb488[_0x5ddf('0x44')]($(_0x5ddf('0x50'))[_0x5ddf('0x2d')]());if(_0x197043!=-0x1){_0x1fb488[_0x5ddf('0x5f')](_0x197043,0x1);_0x365a14[_0x5ddf('0x5f')](_0x197043,0x1);}_0x197043=_0x1fb488[_0x5ddf('0x44')]($(_0x5ddf('0x60'))['val']());if(_0x197043!=-0x1){_0x1fb488[_0x5ddf('0x5f')](_0x197043,0x1);_0x365a14['splice'](_0x197043,0x1);}_0x197043=_0x1fb488[_0x5ddf('0x44')]($(_0x5ddf('0x59'))[_0x5ddf('0x2d')]());if(_0x197043!=-0x1){_0x1fb488[_0x5ddf('0x5f')](_0x197043,0x1);_0x365a14[_0x5ddf('0x5f')](_0x197043,0x1);}if($('#aiCharacterSelectThree')[_0x5ddf('0x61')]){let _0x197043=_0x1fb488['indexOf']($('#aiCharacterSelectTwo')[_0x5ddf('0x2d')]());if(_0x197043!=-0x1){_0x1fb488[_0x5ddf('0x5f')](_0x197043,0x1);_0x365a14[_0x5ddf('0x5f')](_0x197043,0x1);}$('#aiCharacterSelectThree')[_0x5ddf('0x62')]('<option\x20value=\x22\x22\x20disabled\x20selected>Select\x20character</option>');for(let _0x313563=0x0;_0x313563<_0x1fb488[_0x5ddf('0x61')];_0x313563++){$(_0x5ddf('0x5a'))[_0x5ddf('0x63')](_0x5ddf('0x64')+_0x1fb488[_0x313563]+'\x22>'+_0x365a14[_0x313563]+_0x5ddf('0x65'));}}}}function buildGame(){var _0x44d256='';if(game[_0x5ddf('0x2f')]==0x1){_0x44d256+=_0x5ddf('0x67');_0x44d256+=_0x5ddf('0x68');_0x44d256+=_0x5ddf('0x69');_0x44d256+=_0x5ddf('0x2b');_0x44d256+='<div\x20id=\x22characterCardContainer\x22>';_0x44d256+=_0x5ddf('0x6a');_0x44d256+=_0x5ddf('0x6b');_0x44d256+=_0x5ddf('0x6c');_0x44d256+=_0x5ddf('0x2b');_0x44d256+='<div\x20class=\x22characterContainer\x20characterContainerOne\x22\x20id=\x22'+game[_0x5ddf('0x6d')][0x0]+_0x5ddf('0x6e');_0x44d256+='<p\x20class=\x22characterTitle\x22>'+game[_0x5ddf('0x6f')][0x0]+_0x5ddf('0x70');_0x44d256+=_0x5ddf('0x71')+game[_0x5ddf('0x6d')][0x0]+_0x5ddf('0x72');_0x44d256+='<div\x20class=\x22chosenCardInfo\x22>';_0x44d256+=_0x5ddf('0x73');_0x44d256+=_0x5ddf('0x2b');_0x44d256+=_0x5ddf('0x2b');_0x44d256+=_0x5ddf('0x2b');}else if(game[_0x5ddf('0x2f')]==0x2){_0x44d256+=_0x5ddf('0x67');_0x44d256+=_0x5ddf('0x74');_0x44d256+=_0x5ddf('0x69');_0x44d256+=_0x5ddf('0x75');_0x44d256+=_0x5ddf('0x76')+game[_0x5ddf('0x6d')][0x0]+'\x22\x20class=\x22characterLink\x20inactiveCharacter\x22>'+game['aiCharacters'][0x0]+_0x5ddf('0x4d');_0x44d256+=_0x5ddf('0x76')+game[_0x5ddf('0x6d')][0x1]+_0x5ddf('0x77')+game[_0x5ddf('0x6f')][0x1]+_0x5ddf('0x4d');_0x44d256+=_0x5ddf('0x2a');_0x44d256+=_0x5ddf('0x2b');_0x44d256+='</div>';_0x44d256+=_0x5ddf('0x78');_0x44d256+=_0x5ddf('0x6a');_0x44d256+=_0x5ddf('0x6b');_0x44d256+=_0x5ddf('0x6c');_0x44d256+=_0x5ddf('0x2b');_0x44d256+='<div\x20class=\x22characterContainer\x20characterContainerOne\x22\x20id=\x22'+game[_0x5ddf('0x6d')][0x0]+_0x5ddf('0x6e');_0x44d256+=_0x5ddf('0x79')+game[_0x5ddf('0x6f')][0x0]+'\x20<span\x20class=\x22currentCardNumber\x22></span></p>';_0x44d256+=_0x5ddf('0x71')+game[_0x5ddf('0x6d')][0x0]+_0x5ddf('0x72');_0x44d256+=_0x5ddf('0x7a');_0x44d256+=_0x5ddf('0x73');_0x44d256+=_0x5ddf('0x2b');_0x44d256+=_0x5ddf('0x2b');_0x44d256+=_0x5ddf('0x7b')+game[_0x5ddf('0x6d')][0x1]+_0x5ddf('0x6e');_0x44d256+=_0x5ddf('0x79')+game[_0x5ddf('0x6f')][0x1]+_0x5ddf('0x70');_0x44d256+=_0x5ddf('0x71')+game[_0x5ddf('0x6d')][0x1]+_0x5ddf('0x72');_0x44d256+=_0x5ddf('0x7a');_0x44d256+=_0x5ddf('0x73');_0x44d256+=_0x5ddf('0x2b');_0x44d256+=_0x5ddf('0x2b');_0x44d256+='</div>';}else if(game[_0x5ddf('0x2f')]==0x3){_0x44d256+='<div\x20id=\x22masterCharacterContainer\x22>';_0x44d256+=_0x5ddf('0x7c');_0x44d256+=_0x5ddf('0x69');_0x44d256+='<div\x20id=\x22characterLinksContainer\x22>';_0x44d256+=_0x5ddf('0x76')+game[_0x5ddf('0x6d')][0x0]+_0x5ddf('0x77')+game[_0x5ddf('0x6f')][0x0]+_0x5ddf('0x4d');_0x44d256+=_0x5ddf('0x76')+game[_0x5ddf('0x6d')][0x1]+_0x5ddf('0x77')+game[_0x5ddf('0x6f')][0x1]+_0x5ddf('0x4d');_0x44d256+=_0x5ddf('0x76')+game[_0x5ddf('0x6d')][0x2]+_0x5ddf('0x77')+game[_0x5ddf('0x6f')][0x2]+_0x5ddf('0x4d');_0x44d256+=_0x5ddf('0x2a');_0x44d256+=_0x5ddf('0x2b');_0x44d256+=_0x5ddf('0x2b');_0x44d256+=_0x5ddf('0x78');_0x44d256+=_0x5ddf('0x6a');_0x44d256+=_0x5ddf('0x6b');_0x44d256+=_0x5ddf('0x6c');_0x44d256+=_0x5ddf('0x2b');_0x44d256+=_0x5ddf('0x7d')+game[_0x5ddf('0x6d')][0x0]+_0x5ddf('0x6e');_0x44d256+=_0x5ddf('0x79')+game[_0x5ddf('0x6f')][0x0]+_0x5ddf('0x70');_0x44d256+=_0x5ddf('0x71')+game['aiCharactersChosen'][0x0]+_0x5ddf('0x72');_0x44d256+=_0x5ddf('0x7a');_0x44d256+=_0x5ddf('0x73');_0x44d256+=_0x5ddf('0x2b');_0x44d256+=_0x5ddf('0x2b');_0x44d256+='<div\x20class=\x22characterContainer\x20characterContainerTwo\x22\x20id=\x22'+game[_0x5ddf('0x6d')][0x1]+_0x5ddf('0x6e');_0x44d256+=_0x5ddf('0x79')+game['aiCharacters'][0x1]+_0x5ddf('0x70');_0x44d256+=_0x5ddf('0x71')+game[_0x5ddf('0x6d')][0x1]+_0x5ddf('0x72');_0x44d256+='<div\x20class=\x22chosenCardInfo\x22>';_0x44d256+=_0x5ddf('0x73');_0x44d256+=_0x5ddf('0x2b');_0x44d256+=_0x5ddf('0x2b');_0x44d256+='<div\x20class=\x22characterContainer\x20characterContainerThree\x22\x20id=\x22'+game[_0x5ddf('0x6d')][0x2]+_0x5ddf('0x6e');_0x44d256+=_0x5ddf('0x79')+game[_0x5ddf('0x6f')][0x2]+_0x5ddf('0x70');_0x44d256+='<p\x20class=\x22characterNotes\x22><a\x20id=\x22char-'+game[_0x5ddf('0x6d')][0x2]+_0x5ddf('0x72');_0x44d256+=_0x5ddf('0x7a');_0x44d256+=_0x5ddf('0x73');_0x44d256+='</div>';_0x44d256+=_0x5ddf('0x2b');_0x44d256+=_0x5ddf('0x2b');}_0x44d256+=_0x5ddf('0x2b');_0x44d256+=_0x5ddf('0x2a');$(_0x5ddf('0x7e'))[_0x5ddf('0x62')](_0x44d256);$(_0x5ddf('0x7f'))[_0x5ddf('0x80')]();}$(document)['on'](touchEvent,_0x5ddf('0x81'),function(){var _0x58a0c7=$(this)[_0x5ddf('0x82')]('id');$(_0x5ddf('0x83'))[_0x5ddf('0x84')]();$('#'+_0x58a0c7+_0x5ddf('0x85'))['show']();});function startGame(){for(let _0x1ce395=0x0;_0x1ce395<game['aiNum'];_0x1ce395++){let _0x2c9156=$(_0x5ddf('0x42'))['eq'](_0x1ce395)[_0x5ddf('0x2d')]();let _0x434c6e=game[_0x5ddf('0x43')]['indexOf'](_0x2c9156);game[_0x5ddf('0x6f')][_0x5ddf('0x86')](game['characters'][_0x434c6e]);game['aiCharactersChosen'][_0x5ddf('0x86')](game[_0x5ddf('0x43')][_0x434c6e]);game[_0x5ddf('0x87')][_0x5ddf('0x86')](JSON[_0x5ddf('0x88')](JSON[_0x5ddf('0x89')](cards[_0x2c9156])));shuffle(game[_0x5ddf('0x87')][_0x1ce395]);}}function drawStarWarsCard(_0x5d407){$(_0x5ddf('0x8a'))[_0x5ddf('0x3b')]();if(_0x5d407=='game'){game[_0x5ddf('0x8b')]=game['nextCharacter'];if(game[_0x5ddf('0x87')][game[_0x5ddf('0x8b')]][game['currentCards'][game[_0x5ddf('0x8b')]]][_0x5ddf('0x8c')]=='10'){shuffle(game[_0x5ddf('0x87')][game[_0x5ddf('0x8b')]]);game['nextCards'][game[_0x5ddf('0x8b')]]=0x0;}game[_0x5ddf('0x8d')][game['currentCharacter']]=game[_0x5ddf('0x8e')][game['currentCharacter']];var _0x8f74f=game[_0x5ddf('0x87')][game[_0x5ddf('0x8b')]][game[_0x5ddf('0x8d')][game[_0x5ddf('0x8b')]]];generateCurrentCard(_0x8f74f,_0x5ddf('0x8f'),game['currentCharacter']);if(game[_0x5ddf('0x2f')]>0x1){game[_0x5ddf('0x90')]++;if(game['nextCharacter']==game[_0x5ddf('0x2f')]){game[_0x5ddf('0x90')]=0x0;}}updateGame();}else if(_0x5d407=='savedGame'){game=JSON[_0x5ddf('0x88')](localStorage['getItem'](init['code']));buildGame();$(_0x5ddf('0x8a'))[_0x5ddf('0x3b')]();if(game[_0x5ddf('0x2f')]==0x1){if(game[_0x5ddf('0x91')][0x0]!=0x0){var _0x8f74f=game['aiDecks'][0x0][game['currentCards'][0x0]];generateCurrentCard(_0x8f74f,_0x5ddf('0x92'));}}else if(game[_0x5ddf('0x2f')]>0x1){for(let _0x542f89=0x0;_0x542f89<game[_0x5ddf('0x2f')];_0x542f89++){if(game[_0x5ddf('0x91')][_0x542f89]!=0x0){generateCurrentCard(game[_0x5ddf('0x87')][_0x542f89][game['currentCards'][_0x542f89]],_0x5ddf('0x92'),_0x542f89);}}}if(typeof game['moves'][0x0]!=='undefined'){$('#historyTextContainer')[_0x5ddf('0x62')](game[_0x5ddf('0x93')]['join']('\x0a'));}}$(_0x5ddf('0x94'))['removeClass'](_0x5ddf('0x95'))[_0x5ddf('0x55')](_0x5ddf('0x96'));$('.characterLink')['eq'](game[_0x5ddf('0x8b')])[_0x5ddf('0x55')](_0x5ddf('0x95'))[_0x5ddf('0x53')](_0x5ddf('0x96'));$(_0x5ddf('0x83'))['hide']();$(_0x5ddf('0x83'))['eq'](game[_0x5ddf('0x8b')])['show']();}function generateCurrentCard(_0x1d02cc,_0x3c16e2,_0x57de2a){var _0x2115b5='';_0x2115b5+=_0x5ddf('0x97');_0x2115b5+=_0x5ddf('0x98');for(let _0x5a2d46=0x0;_0x5a2d46<_0x1d02cc[_0x5ddf('0x99')][_0x5ddf('0x61')];_0x5a2d46++){if(_0x1d02cc[_0x5ddf('0x99')][_0x5a2d46][_0x5ddf('0x9a')](_0x5ddf('0x9b'))){_0x2115b5+=_0x5ddf('0x9c')+_0x1d02cc[_0x5ddf('0x99')][_0x5a2d46][_0x5ddf('0x9d')](_0x5ddf('0x9b'),'')+'</p>';}else{_0x2115b5+='<li>'+_0x1d02cc['planning'][_0x5a2d46]+_0x5ddf('0x9e');}}_0x2115b5+=_0x5ddf('0x9f');_0x2115b5+=_0x5ddf('0xa0');_0x2115b5+=_0x5ddf('0x47');for(let _0x3f3b84=0x0;_0x3f3b84<_0x1d02cc[_0x5ddf('0xa1')][_0x5ddf('0x61')];_0x3f3b84++){_0x2115b5+=_0x5ddf('0x49')+_0x1d02cc[_0x5ddf('0xa1')][_0x3f3b84]+_0x5ddf('0x9e');}_0x2115b5+=_0x5ddf('0x4a');_0x2115b5+=_0x5ddf('0xa2');_0x2115b5+=_0x5ddf('0x98');for(let _0x3eaeff=0x0;_0x3eaeff<_0x1d02cc[_0x5ddf('0xa3')][_0x5ddf('0x61')];_0x3eaeff++){if(_0x1d02cc[_0x5ddf('0xa3')][_0x3eaeff][_0x5ddf('0x9a')](_0x5ddf('0x9b'))){_0x2115b5+='<p\x20class=\x22italic\x22>'+_0x1d02cc[_0x5ddf('0xa3')][_0x3eaeff]['replace'](_0x5ddf('0x9b'),'')+_0x5ddf('0x4d');}else{_0x2115b5+=_0x5ddf('0x49')+_0x1d02cc[_0x5ddf('0xa3')][_0x3eaeff]+_0x5ddf('0x9e');}}_0x2115b5+='</ol>';_0x2115b5+=_0x5ddf('0xa4');if(_0x1d02cc[_0x5ddf('0xa5')]==_0x5ddf('0xa6')){_0x2115b5+=_0x5ddf('0xa7')+_0x1d02cc[_0x5ddf('0xa5')]+_0x5ddf('0x4d');}else{_0x2115b5+=_0x5ddf('0xa8')+_0x1d02cc[_0x5ddf('0xa5')]+_0x5ddf('0xa9');}if(_0x3c16e2!=_0x5ddf('0xaa')){$(_0x5ddf('0xab'))['eq'](_0x57de2a)['html'](_0x2115b5);$('.characterContainer')['eq'](_0x57de2a)[_0x5ddf('0xac')]('.currentCardNumber')['html'](_0x5ddf('0xad')+_0x1d02cc[_0x5ddf('0x8c')]);}else{var _0x47465d=_0x5ddf('0xae');_0x47465d+='<h3\x20style=\x22text-align:center!important;\x22>'+game[_0x5ddf('0x6f')][_0x57de2a]+_0x5ddf('0xad')+_0x1d02cc[_0x5ddf('0x8c')]+'</h3>';_0x47465d+=_0x2115b5;_0x47465d+=_0x5ddf('0xaf');_0x47465d+=_0x5ddf('0xb0');_0x47465d+=_0x5ddf('0x2b');_0x47465d+=_0x5ddf('0x2b');$(_0x47465d)['appendTo'](_0x5ddf('0xb1'));$(_0x5ddf('0xb2'))[_0x5ddf('0xb3')]();$(_0x5ddf('0xb1'))['addClass'](_0x5ddf('0xb4'));deactivateMenu();}if(_0x3c16e2=='game'){game['moveNum']++;var _0x3e0178=_0x5ddf('0xb5')+game[_0x5ddf('0xb6')]+_0x5ddf('0xb7')+game[_0x5ddf('0x6f')][_0x57de2a]+'\x20-\x20<a\x20id=\x22move'+game[_0x5ddf('0xb6')]+'-'+game[_0x5ddf('0x6d')][game[_0x5ddf('0x8b')]]+'-'+_0x1d02cc['card']+_0x5ddf('0xb8')+_0x1d02cc[_0x5ddf('0x8c')]+'</a></p>';if(_0x1d02cc['card']=='10'){_0x3e0178+='<p\x20class=\x22italic\x22><span>'+game[_0x5ddf('0x6f')][game[_0x5ddf('0x8b')]]+_0x5ddf('0xb9');}recordMove(_0x3e0178,_0x5ddf('0xba'),_0x5ddf('0xbb'));}if(_0x3c16e2!=_0x5ddf('0x92')){if(game['firstCharacterTurn'][game[_0x5ddf('0x8b')]]==0x0){game[_0x5ddf('0x91')][game[_0x5ddf('0x8b')]]=0x1;}game[_0x5ddf('0x8e')][game['currentCharacter']]++;}}$(document)['on'](touchEvent,_0x5ddf('0xbc'),function(){var _0x3d8a5b=$(this)[_0x5ddf('0x82')]('id')[_0x5ddf('0xbd')]('-');showCharacterNotes(_0x3d8a5b[0x1]);});$(document)['on'](touchEvent,_0x5ddf('0xbe'),function(){var _0x2150a4=$(this)[_0x5ddf('0x82')]('id');var _0x30bfe4=_0x2150a4[_0x5ddf('0xbd')]('-');var _0x2af7fa=game['charactersCodes'][_0x5ddf('0x44')](_0x30bfe4[0x1]);var _0x3fe049=cards[_0x30bfe4[0x1]][parseInt(_0x30bfe4[0x2])-0x1];var _0x10997d=game[_0x5ddf('0x6d')][_0x5ddf('0x44')](_0x30bfe4[0x1]);generateCurrentCard(_0x3fe049,_0x5ddf('0xaa'),_0x10997d);});$(document)['on'](touchEvent,_0x5ddf('0xbf'),function(_0x35166f){_0x35166f['preventDefault']();});function showCharacterNotes(_0x526ff8){var _0x4e9530=game[_0x5ddf('0x43')]['indexOf'](_0x526ff8);var _0x24b157=game[_0x5ddf('0x46')][_0x4e9530];var _0x3a15d5=_0x5ddf('0xc0')+_0x526ff8+'CharacterNotes\x22\x20class=\x22confirmationBox\x20alertEl\x20actionTypeAlertBox\x20showCharacterNotes\x22>';_0x3a15d5+=_0x5ddf('0x45')+_0x24b157+_0x5ddf('0xc1');_0x3a15d5+=_0x5ddf('0x98');for(let _0x3498a3=0x0;_0x3498a3<characterNotes[_0x526ff8][_0x5ddf('0x61')];_0x3498a3++){_0x3a15d5+=_0x5ddf('0x49')+characterNotes[_0x526ff8][_0x3498a3]+_0x5ddf('0x9e');}_0x3a15d5+=_0x5ddf('0x9f');_0x3a15d5+=_0x5ddf('0xaf');_0x3a15d5+='<a\x20id=\x22closeMoveHistoryCardBox\x22\x20href=\x22#\x22\x20class=\x22btn\x20redBtn\x22>Close</a>';_0x3a15d5+='</div>';_0x3a15d5+=_0x5ddf('0x2b');$(_0x3a15d5)[_0x5ddf('0x1c')](_0x5ddf('0xb1'));$(_0x5ddf('0xc2'))[_0x5ddf('0xb3')]();$(_0x5ddf('0xc3'))[_0x5ddf('0xb3')]();deactivateMenu();}
