// Each beat pairs a drawing with live lettering. Read each strip left to right.
const strip = (en, zh, panels, choices = []) => ({title:[en,zh],panels,choices});
const stories = {
 start: strip('Midtown junction','中城交流道',[
 ['city4','Karl heads uphill. His armed escorts peel off toward the crowded square.','卡爾往上城去，武裝車隊卻轉向人潮密集的廣場。'],
 ['junction-jacque','Jacque · “Pete and I can take Karl. I’ve got the jetpack.”','賈克：「我跟彼特可以追卡爾。我有噴射背包。」'],
 ['junction-pete','Pete · “And I can keep him in sight. But the signal’s getting worse. Once we split, don’t wait for a perfect report.”','彼特：「我能盯住他的車。可是訊號越來越差。分頭以後，別等我們把話說完才行動。」'],
 ['city5','Misaki · “I’m asking you to come Downtown because you’re the best shot we have.”','美咲：「我想請你跟我去下城。隊裡你的槍法最好。」']
 ],[['bridge','Ride with Jacque. Follow Karl.','和賈克一起追卡爾。'],['crash','Stay with Misaki. Head Downtown.','跟美咲一起去下城。']]),
 bridge:strip('The broken span','斷橋',[
 ['city5','Alex trades seats with Pete. Misaki gives him a small nod before their cars part.','艾力克斯和彼特交換座位。兩輛車分開前，美咲朝他輕輕點了頭。'],
 ['city6','Alex · “The car has the road. I’ve got you.”','艾力克斯：「路交給車子。你交給我。」'],
 ['city7','Jacque · “I’m holding on. Not for long.”','賈克：「我還抓得住。撐不了多久。」']
 ],[['rescue','Pull Jacque up.','拉賈克上來。'],['hangar','Keep Karl in sight.','繼續追卡爾。']]),
 hangar:strip('The hangar','機庫',[
 ['city9','Jacque calls his name once. In the mirror, the edge is empty.','賈克喊了他一聲。後照鏡裡，斷橋邊已經沒有人了。'],
 ['tower1','Pete radios from Downtown. Misaki is hurt. He’ll take her to hospital. Ahead, Karl reaches the hangar.','彼特從下城回報：美咲受傷了，他會送她就醫。前方，卡爾已抵達機庫。']
 ],[['sight','Stop and take aim.','停車瞄準。'],['D','Close the distance by car.','開車追上去。']]),
 sight:strip('Two strangers','兩個陌生人',[
 ['tower1','There is still time. The door is open.','門還開著。還來得及。'],
 ['tower2','Alex · “Move. Please move.”','艾力克斯：「走開。拜託，快走開。」']
 ],[['A','Fire.','開槍。'],['stairs','Wait for them to clear.','等他們走過去。']]),
 stairs:strip('Beyond the door','門的另一端',[
 ['tower2','The two strangers get away. By the time Alex lowers his rifle, Karl is inside.','兩人走遠了。艾力克斯放下槍時，卡爾已進了機庫。'],
 ['echo3','The lifts are dead. Above him, the stairwell climbs into darkness. Outside, rain strikes the tower skin.','電梯停擺。頭頂的樓梯向黑暗延伸，外頭的雨敲打著塔身。']
 ],[['B','Take the stairs.','走樓梯。'],['C','Fly up the outside.','沿塔外飛上去。']]),
 rescue:strip('A hand in the rain','雨中的手',[
 ['city8','The first time, their hands miss. The second time, Alex holds on.','第一次，兩隻手錯過了。第二次，艾力克斯抓住了。'],
 ['echo3','The medics take Jacque Downtown. By the time Alex reaches the tower, Karl is already upstairs.','救護員帶賈克往下城去。艾力克斯趕到塔下時，卡爾已經上樓了。']
 ],[['E','Climb inside.','從塔內上樓。'],['F','Use the jetpack.','用噴射背包升空。']]),
 crash:strip('The square or the ward','廣場與病房',[
 ['city2','Alex stays at the wheel beside Misaki. In the other car, Pete raises a hand and turns uphill with Jacque.','艾力克斯繼續開車，美咲坐在他身旁。另一輛車裡，彼特舉手示意，載著賈克朝上城開去。'],
 ['echo5','Jacque, over the radio · “Alex. Pete’s down. He’s dead.”','無線電裡傳來賈克的聲音：「艾力克斯。彼特倒下了。他死了。」'],
 ['downtown1','Misaki · “Go. They’re almost at the square.”','美咲：「快去。他們就要到廣場了。」']
 ],[['ward','Take Misaki to hospital.','親自送美咲去醫院。'],['I','Call medics and continue to the square.','叫救護車，繼續趕往廣場。']]),
 ward:strip('The empty chair','空椅子',[
 ['ward-radio','Alex · “I might get a better signal on the roof.”','艾力克斯：「屋頂的訊號也許好一點。」'],
 ['downtown3','Misaki · “Do what you think you have to.”','美咲：「你覺得該怎麼做，就去做吧。」']
 ],[['G','Pull up the chair.','把椅子拉過來。'],['H','Try Jacque on the roof.','去屋頂聯絡賈克。']]),
 A:strip('Cost of Victory','勝利的代價',[
 ['tower3','The shot stops Karl. The two people behind him fall too.','那一槍阻止了卡爾。他身後的兩個人也倒下了。'],
 ['echo4','At the ceremony, some applaud. Others call out the names of the two strangers.','典禮上，有人鼓掌，也有人喊著那兩個陌生人的名字。'],
 ['tower4','At dusk he leaves his medal here. “They put your name in the report.”','市長頒給他一枚勳章。黃昏時，他把勳章留在這裡。「他們把你的名字寫進報告了。」']]),
 B:strip('The Stairwell','樓梯間',[
 ['tower7','The white edge takes the handrail first. Alex runs one more step.','白色的邊界先吞去了扶手。艾力克斯又往上跑了一階。'],
 ['echo2','Down here, the roads are still wet. People look up. A piece of the skyline is gone. Alex never comes out.','下城的路還濕著。人們抬頭，天際線缺了一塊。艾力克斯再也沒有走出來。']]),
 C:strip('The Last Ascent','最後的攀升',[
 ['tower8','Karl · “You came all this way to save a city.”  Alex · “People live in that city.”','卡爾：「你大老遠來，就為了救一座城。」艾力克斯：「那座城裡住著人。」'],
 ['echo1','The white boundary passes through them both. There is no rolling blast. Downtown waits for a sound that never comes.','白色邊界越過了兩人。沒有爆風。下城的人等著一聲始終沒有響起的巨響。']]),
 D:strip('Victory Through Sacrifice','犧牲換來的勝利',[
 ['tower5','“Device secure! Suspect alive!”','「裝置安全！嫌犯還活著！」'],
 ['tower6','Uptown stands. Downtown counts its dead. Alex sits beside Jacque until the light goes. “I wish you could’ve seen it.”','上城保住了。下城還在清點罹難者。艾力克斯陪著賈克坐到天黑。「真希望你也看到了。」']]),
 E:strip('The Rescued','被救的人',[
 ['tower7','Halfway up, Alex tries the radio. “Jacque, stay with the medical team.” White light enters the stairwell.','爬到一半，艾力克斯打開無線電。「賈克，跟著醫療隊。」白光湧入樓梯間。'],
 ['tower9','In Downtown, a medic steadies Jacque as he tries to stand. The man who pulled him up is gone.','在下城，救護員扶住想站起來的賈克。把他從橋下拉上來的人，已經不在了。']]),
 F:strip('The Exterior After Rescue','救援之後，塔外',[
 ['tower8','His arms still ache from hauling Jacque up. At the summit Karl’s hand has already moved.','拉起賈克後，他的雙臂還在痛。抵達塔頂時，卡爾的手已先動了。'],
 ['tower9','Jacque searches the empty air above the roofline.','賈克望著屋頂上方空蕩蕩的天空。'],
 ['echo6','Jacque · “Come on. Just answer.”','賈克：「拜託，回我一聲。」']]),
 G:strip('Love Amid the Ruins','廢墟中的愛',[
 ['downtown4','Misaki · “I meant it when I told you to go. I meant something else, too.” Outside, Uptown goes white.','美咲：「我叫你走，是真心的。可我心裡還有別的話。」窗外，上城一片白。'],
 ['downtown5','Later they come up here together. “It looks different every time.” She takes his hand. “Yes. It does.”','後來，他們一起來到屋頂。「每次看起來都不一樣。」她牽起他的手。「嗯。真的。」']]),
 H:strip('Weight of Command','指揮的重量',[
 ['downtown6','Jacque · “Alex. I’m sorry. I couldn’t stop him.” The city falls silent before Alex can answer.','賈克：「艾力克斯，對不起。我沒能阻止他。」艾力克斯還來不及回答，城市就沉寂了。'],
 ['downtown7','After the inquiry, Alex loses his command. Outside the hospital Misaki asks if he’s all right. “I don’t know.” Neither crosses the gap.','調查結束，他被解職。醫院外，美咲問他還好嗎。「我不知道。」兩人都沒有走向對方。']]),
 I:strip('The Unnamed','無名者',[
 ['downtown8','Misaki leaves with the medics. Alex stops the gunmen in the square. He is helping the survivors when the Uptown skyline disappears.','美咲交給救護員。艾力克斯阻止了廣場上的槍手。上城的天際線消失時，他正俯身救人。'],
 ['downtown9','Weeks later he puts his insignia away. A surviving cultist hears footsteps behind him. Alex follows long after the streetlights end.','幾週後，他收起隊徽。一名倖存的教徒聽見身後的腳步聲。過了最後一盞街燈，艾力克斯仍跟著他。']])
};

// These opening pages precede the decision on the following spread.
const leadIns = {
 start: strip('The pursuit','雨夜追擊',[
 ['city1','Karl carries a device that could erase a district. Two squad cars follow him into the rain.','卡爾帶著足以抹去整個城區的裝置。兩輛警車跟著他駛入雨幕。'],
 ['city3','Jacque · “You always pick the difficult lane.”  Pete · “It had someone in it.”','賈克：「你總是挑最難走的車道。」彼特：「那條車道上有人。」'],
 ['city2','Misaki · “Watch the road. I’ve got the exits.”','美咲：「看著路。出口交給我。」']
 ]),
 ward: strip('Emergency entrance','急診入口',[
 ['downtown2','Misaki · “The square. They’re still heading for the square.”  Alex · “I know.”','美咲：「廣場……他們還在往廣場去。」艾力克斯：「我知道。」'],
 ['ward-question','Misaki · “Then why are you here?”','美咲：「那你為什麼還在這裡？」']
 ])
};
