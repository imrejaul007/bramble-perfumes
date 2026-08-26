import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, BookOpen, Edit3, Trash2, Save, Eye, X, Menu, List, AlignLeft, Home } from 'lucide-react'

// Story data structure - each chapter preserves exact text from original document
const DEFAULT_STORY = {
  id: 'nuhoud-story-001',
  title: 'NUHOUD',
  author: 'Khalid Al Mulla',
  chapters: [
    {
      id: 'ch1',
      title: 'Before There Was NUHOUD',
      content: `<p class="mb-6"><strong>A Family Shaped by Agarwood</strong></p>
<p class="mb-6">Every family has something that quietly defines them. For some, it is farming. For others, it is the sea. Some families have spent generations making watches, building furniture, or working with horses.</p>
<p class="mb-6">My family was shaped by agarwood.</p>
<p class="mb-6">Long before there was a perfume called Tamed Ghalia, long before I ever held a distillation flask in my hands, and long before the name NUHOUD existed, there was agarwood.</p>
<p class="mb-6">Not as a luxury. Not as a business. But as a way of life.</p>
<p class="mb-6">People often ask me how I became interested in oud. The truth is, I don't remember becoming interested in it. It was already there before I was old enough to understand what it was.</p>
<p class="mb-6">Some of my earliest memories are filled with the smell of burning agarwood. I remember my father sitting quietly, smelling one oud oil after another. Sometimes he would return to the same bottle several times in a single day.</p>
<p class="mb-6">He wasn't smelling it because he couldn't remember it. He was studying it. Listening to it. Trying to understand it.</p>
<p class="mb-6">As a child, I never understood why. To me, it was simply something my father always did.</p>
<p class="mb-6">Our home was different from most homes, although I didn't realise it at the time. Collector-grade agarwood was always around us. Workers came and went throughout the day. Some carefully cleaned pieces of wood. Some sorted them. Some packed them. Collectors visited regularly. Hunters arrived with stories from forests that sounded like places from another world.</p>
<p class="mb-6">Conversations around me were rarely about ordinary things. Instead, I heard names of regions.</p>
<p class="mb-6">Assam. Cambodia. Bangladesh. Laos. Indonesia. Malaysia.</p>
<p class="mb-6">As a child, they were simply names. Today, every one of those places tells a story.</p>
<p class="mb-6">Looking back, I realise I received an education long before anyone intended to teach me. Nobody sat me down and explained agarwood. Nobody gave me lessons. Nobody told me to become a hunter, a distiller, or a perfumer.</p>
<p class="mb-6">Instead, I watched.</p>
<p class="mb-6">Quietly.</p>
<p class="mb-6">Every single day.</p>
<p class="mb-6">Children learn far more by watching than by listening. Without realising it, I was watching my father make decisions that would later shape my own life. Sometimes he would reject a piece of agarwood that looked extraordinary to everyone else. Other times he became excited over a piece that nobody else even noticed.</p>
<p class="mb-6">As a child, I couldn't understand those decisions. Years later, I realised I had been watching experience. I had been watching thousands upon thousands of hours of knowledge being applied in silence.</p>
<p class="mb-6">Today, people sometimes ask me where my eye for agarwood comes from. I honestly don't know how to answer that question because I don't remember learning it. It became part of me little by little, over many years, simply by growing up in that environment.</p>
<p class="mb-6">When I think back to my childhood, I don't first remember money. I don't remember business.</p>
<p class="mb-6">I remember the smell.</p>
<p class="mb-6">The smell of burning agarwood.</p>
<p class="mb-6">Even today, after everything I have smelled throughout my life, I still believe there is nothing more beautiful than placing an exceptional piece of agarwood onto hot charcoal.</p>
<p class="mb-6">That very first moment. The first wave of aroma that rises into the air.</p>
<p class="mb-6">For me, nothing has ever surpassed it.</p>
<p class="mb-6">Not a flower. Not another perfume. Not another natural material.</p>
<p class="mb-6">That smell is still the most beautiful thing I know.</p>
<p class="mb-6">Perhaps that is why I have spent so much of my life trying to preserve it.</p>
<p class="mb-6">But my family's story with agarwood began long before I was born. My great-grandfather was already hunting agarwood. My grandfather continued that journey. Then my father dedicated his own life to it.</p>
<p class="mb-6">Each generation inherited knowledge from the one before it. But something even more important was passed down.</p>
<p class="mb-6">Respect.</p>
<p class="mb-6">None of them ever spoke about agarwood as though it were simply another product. It was never treated like a commodity. It was treated almost like a living part of nature, something that deserved understanding before it deserved profit.</p>
<p class="mb-6">That idea stayed with me.</p>
<p class="mb-6">The older I became, the more I realised that my family's greatest inheritance was never the agarwood itself. It was the way they looked at it.</p>
<p class="mb-6">Curiosity was more important than certainty. Learning was more important than selling. Respect was more important than profit.</p>
<p class="mb-6">I believe those values are becoming increasingly rare today. Perhaps that is one of the reasons I felt such a responsibility to create NUHOUD.</p>
<p class="mb-6">Not because the world needed another perfume house.</p>
<p class="mb-6">Because I didn't want those values to disappear.</p>
<p class="mb-6">Knowledge can disappear in a single generation. Stories disappear even faster. If nobody tells them, they are eventually forgotten.</p>
<p class="mb-6">That thought stayed with me for many years. I realised that one day my own son might ask me the same question people ask today:</p>
<p class="mb-6">"How did all of this begin?"</p>
<p class="mb-6">When that day comes, I don't want to hand him only bottles.</p>
<p class="mb-6">I want to hand him stories.</p>
<p class="mb-6">I want him to understand that before there was NUHOUD, there was a family. A family that travelled through forests. A family that spent generations learning from one of nature's greatest creations. A family that believed the material always deserved more respect than the market gave it.</p>
<p class="mb-6">This book is my way of making sure those stories are never lost.</p>
<p class="mb-6">Because perfumes eventually evaporate. Bottles eventually become empty. Even agarwood itself is becoming harder to find.</p>
<p class="mb-6">But stories…</p>
<p class="mb-6">Stories can survive forever, if someone chooses to preserve them.</p>
<p class="mb-6">And that is where the story of NUHOUD truly begins.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>The Man I Never Met</strong></p>
<p class="mb-6">There is one person who has had a profound influence on my life, even though I never had the opportunity to meet him.</p>
<p class="mb-6">My grandfather.</p>
<p class="mb-6">Everything I know about him came from my father. Interestingly, whenever my father spoke about his own father, he rarely began by talking about agarwood. He rarely spoke about business, money, or success.</p>
<p class="mb-6">Instead, he always spoke about the kind of man he was.</p>
<p class="mb-6">My father described him as one of the kindest people he had ever known. He was a simple man, not because he lacked knowledge, but because he lived without pretending to be something he wasn't.</p>
<p class="mb-6">He trusted people, sometimes more than he probably should have. He believed what people told him. He saw the good in others before he looked for the bad. He loved his family deeply.</p>
<p class="mb-6">Whenever I asked my father about his childhood, I expected to hear stories about discipline or strictness. Instead, I heard stories about kindness. I don't remember my father ever telling me that his father beat him. I don't remember stories of fear. I remember stories that always ended with admiration.</p>
<p class="mb-6">Looking back today, I realise something very important.</p>
<p class="mb-6">The greatest lessons my grandfather left behind had nothing to do with agarwood. They had everything to do with character.</p>
<p class="mb-6">Knowledge can be learned. Skills can be practised. Experience comes with time.</p>
<p class="mb-6">Character is different.</p>
<p class="mb-6">Character is what determines how knowledge is used.</p>
<p class="mb-6">My grandfather understood agarwood. He knew forests. He knew how to recognise extraordinary material. But what my father admired most was never his knowledge.</p>
<p class="mb-6">It was the way he treated people.</p>
<p class="mb-6">That tells me everything I need to know about the kind of man he was.</p>
<p class="mb-6">Sometimes I wonder what it would have been like to sit beside him. To travel with him. To hear his stories directly instead of through someone else.</p>
<p class="mb-6">I wonder what he would think if he could see how far our family's journey has come. Would he recognise today's world of perfume? Would he recognise the forests? Would he recognise the way agarwood is traded today?</p>
<p class="mb-6">I don't know.</p>
<p class="mb-6">But I hope he would recognise something much more important.</p>
<p class="mb-6">The values.</p>
<p class="mb-6">Because I believe those values have survived. Not perfectly. No family is perfect. But they survived.</p>
<p class="mb-6">They travelled from my grandfather, to my father, and eventually, to me.</p>
<p class="mb-6">People often think an inheritance is something you can hold in your hands. Money. Land. Jewellery. Businesses.</p>
<p class="mb-6">Those things matter.</p>
<p class="mb-6">But I believe the greatest inheritance is something much harder to see. It is the way one generation teaches the next how to look at the world.</p>
<p class="mb-6">My grandfather passed that way of seeing to my father. My father passed it to me. And today, whether I realise it or not, I am preparing to pass it to my own son.</p>
<p class="mb-6">Perhaps that is how legacies truly survive.</p>
<p class="mb-6">Not through what we own.</p>
<p class="mb-6">But through what we choose to preserve.</p>
<p class="mb-6">One story my father told me has stayed with me for my entire life. It is a story that, in many ways, explains my grandfather better than any description ever could.</p>
<p class="mb-6">It is not a story about finding extraordinary agarwood. It is not a story about business. It is not a story about success.</p>
<p class="mb-6">It is simply a story about honesty.</p>
<p class="mb-6">And it began one afternoon, when my grandfather stopped beside a small village pond to perform his prayer.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>The Staircase</strong></p>
<p class="mb-6">Many years ago, long before Bangladesh became an independent country, my grandfather was travelling on horseback through the countryside.</p>
<p class="mb-6">Life was very different then. People travelled slowly. Villages were small. If the time for prayer arrived while you were travelling, it was perfectly normal to stop at a nearby home and politely ask for water to perform your ablution.</p>
<p class="mb-6">On that particular day, my grandfather approached the home of a Hindu family. He greeted them respectfully and asked if he could use the water from their pond before praying.</p>
<p class="mb-6">Without hesitation, they welcomed him.</p>
<p class="mb-6">He tied his horse nearby and walked towards the pond. Like many village ponds, wooden steps had been built leading down into the water.</p>
<p class="mb-6">As he walked down those steps, something immediately caught his attention.</p>
<p class="mb-6">One of the steps wasn't ordinary timber.</p>
<p class="mb-6">It was agarwood.</p>
<p class="mb-6">The family had no idea. To them, it was simply another piece of wood.</p>
<p class="mb-6">But my grandfather recognised it instantly.</p>
<p class="mb-6">People sometimes ask me how he could possibly know. The answer is simple. Agarwood was already part of his life. He had spent so much time around it that he recognised it immediately, even after it had been cut, weathered, and used as part of a staircase.</p>
<p class="mb-6">He completed his ablution. He stood and performed his prayer.</p>
<p class="mb-6">Only after he had finished did he return to the owner of the house. He thanked him for his kindness.</p>
<p class="mb-6">Then he asked a question.</p>
<p class="mb-6">"If I build you a new staircase with stronger wood, would you allow me to take these steps?"</p>
<p class="mb-6">The owner happily agreed.</p>
<p class="mb-6">True to his word, my grandfather replaced the entire staircase before taking the agarwood away. He never took advantage of the family's lack of knowledge. He never tried to deceive them. He never allowed his own knowledge to become an excuse for dishonesty.</p>
<p class="mb-6">That story has stayed with me ever since my father first told it to me.</p>
<p class="mb-6">Not because it is about finding agarwood.</p>
<p class="mb-6">But because it reminds me that knowledge only has value when it is guided by character.</p>
<p class="mb-6">Today, whenever I think about my grandfather, this is the story that comes to mind first. I never met him. I never heard his voice. I never travelled beside him.</p>
<p class="mb-6">Yet somehow, through one simple story, I feel as though I know the kind of man he was.</p>
<p class="mb-6">And perhaps that is the greatest gift stories can give us.</p>
<p class="mb-6">They allow us to meet people we were never fortunate enough to know.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>An Inheritance Beyond Wood</strong></p>
<p class="mb-6">When people hear the words "family legacy," they often imagine land, businesses, or wealth.</p>
<p class="mb-6">I don't.</p>
<p class="mb-6">When I think about my family's legacy, I think about something much more difficult to preserve.</p>
<p class="mb-6">A way of seeing.</p>
<p class="mb-6">Looking back today, I realise that my family never taught me to chase agarwood.</p>
<p class="mb-6">They taught me to respect it.</p>
<p class="mb-6">There is a very big difference.</p>
<p class="mb-6">Respect changes the way you make decisions. Respect teaches patience. Respect teaches honesty. Respect teaches you that nature is never something to conquer.</p>
<p class="mb-6">It is something to learn from.</p>
<p class="mb-6">As a child, I didn't understand those lessons. I wasn't sitting beside my father taking notes. I wasn't following my grandfather through forests.</p>
<p class="mb-6">Most of what I learned happened without anyone trying to teach me.</p>
<p class="mb-6">It happened while I was simply living.</p>
<p class="mb-6">It happened while watching my father spend hours smelling the same oud oil. It happened while listening to conversations I was far too young to understand. It happened while walking through rooms filled with pieces of agarwood that today I would feel privileged just to see again.</p>
<p class="mb-6">At the time, none of it seemed unusual.</p>
<p class="mb-6">It was simply my life.</p>
<p class="mb-6">Only years later did I realise that my education had already begun.</p>
<p class="mb-6">People often ask me how I learned to recognise agarwood. How I learned to judge quality. How I developed my nose.</p>
<p class="mb-6">The truth is…</p>
<p class="mb-6">I don't remember learning.</p>
<p class="mb-6">I remember living.</p>
<p class="mb-6">That is the greatest difference.</p>
<p class="mb-6">Knowledge passed through books is valuable. Knowledge passed through generations becomes part of who you are.</p>
<p class="mb-6">Sometimes I ask myself what my father truly inherited from his father. Was it agarwood? Perhaps. Was it knowledge? Certainly.</p>
<p class="mb-6">But I think he inherited something even greater.</p>
<p class="mb-6">Curiosity.</p>
<p class="mb-6">The curiosity to keep searching. The curiosity to question accepted ideas. The curiosity to travel to another forest simply because someone whispered that something extraordinary had been found there.</p>
<p class="mb-6">That same curiosity eventually found its way into me.</p>
<p class="mb-6">It is the reason I still ask questions today.</p>
<p class="mb-6">Why does this origin smell different?</p>
<p class="mb-6">Why does this oil remind me of the wood while another one doesn't?</p>
<p class="mb-6">Why do some materials move us so deeply?</p>
<p class="mb-6">Those questions have shaped my life far more than answers ever have.</p>
<p class="mb-6">If there is one thing I hope to pass on to my own son one day, it is not simply knowledge. Knowledge can always be learned.</p>
<p class="mb-6">I hope to pass on curiosity.</p>
<p class="mb-6">Because curiosity is what keeps knowledge alive.</p>
<p class="mb-6">Without curiosity, traditions slowly disappear. Without curiosity, craftsmanship becomes repetition. Without curiosity, people stop asking whether something can be done better.</p>
<p class="mb-6">When I chose the name NUHOUD, many people assumed it was simply because it sounded beautiful.</p>
<p class="mb-6">It does.</p>
<p class="mb-6">But the reason is much deeper than that.</p>
<p class="mb-6">The name begins with my son, Nuh.</p>
<p class="mb-6">I wanted every bottle carrying the name NUHOUD to remind me why I am doing this. Not for myself. Not even for today.</p>
<p class="mb-6">But for the generations that come after me.</p>
<p class="mb-6">One day, Nuh may ask me:</p>
<p class="mb-6">"Why did you dedicate your life to perfume?"</p>
<p class="mb-6">When that day comes, I don't want to answer by showing him awards, sales figures, or beautiful bottles.</p>
<p class="mb-6">I want to hand him this book.</p>
<p class="mb-6">I want him to understand that everything began long before I was born. I want him to know his great-grandfather recognised agarwood where others saw only wood. I want him to know his grandfather travelled across forests because knowledge mattered more than comfort. I want him to know that his own grandfather, my father, built a life around curiosity, kindness, and an uncompromising respect for agarwood.</p>
<p class="mb-6">And I want him to understand that my role was never to replace their legacy.</p>
<p class="mb-6">Only to continue it.</p>
<p class="mb-6">Perhaps that is the true meaning of inheritance.</p>
<p class="mb-6">Not receiving something.</p>
<p class="mb-6">But becoming responsible for it.</p>
<p class="mb-6">That responsibility eventually became NUHOUD.</p>
<p class="mb-6">It is not simply a perfume house. It is not simply a collection of bottles.</p>
<p class="mb-6">It is a promise.</p>
<p class="mb-6">A promise to preserve the knowledge that came before me. A promise to remain honest to nature. A promise to continue asking questions. A promise to keep learning.</p>
<p class="mb-6">And above all…</p>
<p class="mb-6">A promise that when my own son one day continues this journey, he will inherit far more than wood.</p>
<p class="mb-6">He will inherit the values that gave that wood meaning.</p>
<p class="mb-6">Because agarwood, extraordinary as it is, was never the greatest treasure my family passed down.</p>
<p class="mb-6">The greatest treasure was the way they chose to live.</p>
<p class="mb-6">And everything that follows in this book is my attempt to honour that gift.</p>`,
      isChapter: true
    },
    {
      id: 'ch2',
      title: 'The Boy Who Wore Agarwood',
      content: `<p class="mb-6"><strong>Growing Up in a Different World</strong></p>
<p class="mb-6">One of the strange things about childhood is that you never realise how unusual your life is while you are living it. Whatever surrounds you every day simply becomes normal.</p>
<p class="mb-6">Only years later do you look back and realise that what felt ordinary to you was something most people would never experience in their lifetime.</p>
<p class="mb-6">That is exactly how I think about my childhood.</p>
<p class="mb-6">When I was young, I didn't think I was growing up in a family with a rare relationship to agarwood. I thought every family had a father who spent hours smelling oud oils. I thought every family had workers carrying extraordinary pieces of agarwood in and out of warehouses. I thought every child knew the smell of fresh agarwood burning on charcoal.</p>
<p class="mb-6">To me, that was simply home.</p>
<p class="mb-6">I remember walking through my father's warehouse and seeing pieces of agarwood that today I would consider museum pieces. At that time, they were simply pieces of wood lying around.</p>
<p class="mb-6">Workers carefully cleaned them, sorted them, and packed them. Customers came from different places to see them. Collectors would spend hours sitting with my father discussing quality, origins, and the personalities of different woods.</p>
<p class="mb-6">I never understood those conversations.</p>
<p class="mb-6">I was too young.</p>
<p class="mb-6">But I remember listening.</p>
<p class="mb-6">Without realising it, I was absorbing a language that would later become my own.</p>
<p class="mb-6">Sometimes I think that was my real education. Not in a classroom, but sitting quietly in the corner while extraordinary people spoke about extraordinary materials.</p>
<p class="mb-6">I remember watching my father hold a piece of agarwood in his hands. He never rushed. He would turn it slowly, look at it from different angles, and sometimes smell the wood before saying anything.</p>
<p class="mb-6">Other times, he remained completely silent.</p>
<p class="mb-6">As a child, I wondered why something that looked like an ordinary piece of wood deserved so much attention.</p>
<p class="mb-6">Today I understand.</p>
<p class="mb-6">He wasn't looking at wood.</p>
<p class="mb-6">He was reading its story.</p>
<p class="mb-6">Every piece had travelled through forests. Every piece carried years, sometimes decades, of nature's work. Every piece deserved respect.</p>
<p class="mb-6">That lesson stayed with me.</p>
<p class="mb-6">Long before I understood perfume…</p>
<p class="mb-6">I learned to respect the material.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>The Pendant</strong></p>
<p class="mb-6">One of my favourite memories from childhood happened when I was around five or six years old.</p>
<p class="mb-6">Like many young boys, I wanted something to wear around my neck. A pendant.</p>
<p class="mb-6">Most fathers would probably have taken their son to a jewellery shop. My father did something completely different.</p>
<p class="mb-6">He walked over to a beautiful piece of dark agarwood and selected a small section from it. Then he asked one of the craftsmen working with him to carve it into a pendant.</p>
<p class="mb-6">I still remember how proud I was to wear it.</p>
<p class="mb-6">At that age, I had absolutely no idea how valuable that little piece of agarwood really was. To me, it wasn't rare. It wasn't precious.</p>
<p class="mb-6">It was simply my necklace.</p>
<p class="mb-6">I wore it everywhere. Sometimes I became so used to wearing it that I forgot it was even there.</p>
<p class="mb-6">More than once, I left it inside my pocket when my mother washed my clothes.</p>
<p class="mb-6">Every time it came out of the washing machine, it looked different. The rich dark colour had faded. It almost looked white.</p>
<p class="mb-6">I thought I had ruined it.</p>
<p class="mb-6">But something interesting always happened.</p>
<p class="mb-6">After wearing it again for a few days, after carrying it in my pocket and touching it with my hands, the colour slowly returned. Little by little, it became dark again. Almost black.</p>
<p class="mb-6">At the time, I simply found that interesting.</p>
<p class="mb-6">Today, I realise how beautiful that memory really is.</p>
<p class="mb-6">Even that small piece of agarwood seemed alive.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>The Photograph</strong></p>
<p class="mb-6">Many years later, while looking through old family photographs, I came across a picture of myself standing beside an enormous piece of agarwood.</p>
<p class="mb-6">When I first looked at that photograph as an adult, I smiled.</p>
<p class="mb-6">Not because of how young I looked.</p>
<p class="mb-6">Because of what the photograph represented.</p>
<p class="mb-6">To anyone else, that piece of agarwood would be extraordinary.</p>
<p class="mb-6">To me…</p>
<p class="mb-6">It was simply another day.</p>
<p class="mb-6">That single photograph says something words cannot fully explain. It reminds me that my relationship with agarwood did not begin when I became a distiller. It did not begin when I created my first perfume. It did not begin when I started travelling through forests.</p>
<p class="mb-6">It began long before I understood any of those things.</p>
<p class="mb-6">It began in childhood.</p>
<p class="mb-6">Sometimes people tell me, "You were lucky."</p>
<p class="mb-6">Perhaps they are right.</p>
<p class="mb-6">But I don't think luck alone explains it.</p>
<p class="mb-6">I believe I was entrusted with something.</p>
<p class="mb-6">The opportunity to grow up surrounded by one of nature's greatest creations.</p>
<p class="mb-6">With that opportunity came responsibility.</p>
<p class="mb-6">The responsibility to continue learning. To continue asking questions. And one day…</p>
<p class="mb-6">To continue preserving it.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>The Craftsmen</strong></p>
<p class="mb-6">Some of my earliest memories are not only of agarwood. They are of the people who dedicated their lives to it.</p>
<p class="mb-6">Most of the craftsmen who worked for my father came from our own village. To many people, they were simply workers. To me, they were artists.</p>
<p class="mb-6">They understood agarwood in a way that very few people ever could. Every piece that entered my father's warehouse was handled with patience and respect.</p>
<p class="mb-6">Cleaning agarwood is not simply about removing unwanted parts. It is about revealing the beauty that is already inside the wood.</p>
<p class="mb-6">That was something my father understood better than anyone.</p>
<p class="mb-6">He always believed that if a piece of agarwood was truly beautiful, then the way it was presented should reflect that beauty.</p>
<p class="mb-6">He would walk through the warehouse, stopping beside each craftsman and carefully inspecting the work. Sometimes he would pick up a finished piece, run his hand across it, and quietly hand it back.</p>
<p class="mb-6">"No…"</p>
<p class="mb-6">"It can still be better."</p>
<p class="mb-6">The craftsmen would laugh. Sometimes they would joke among themselves.</p>
<p class="mb-6">"Uncle wants us to clean it even more."</p>
<p class="mb-6">"It already looks perfect."</p>
<p class="mb-6">"It doesn't need any more work."</p>
<p class="mb-6">But my father never accepted "good enough."</p>
<p class="mb-6">For him, every detail mattered.</p>
<p class="mb-6">I still remember one of his favourite jokes. Whenever he felt a piece had not been finished properly, he would smile and tell the craftsman:</p>
<p class="mb-6">"Keep polishing it."</p>
<p class="mb-6">"When I come back, I'm going to rub it on your face."</p>
<p class="mb-6">"If it scratches your skin, then you haven't finished your job."</p>
<p class="mb-6">Everyone laughed. It became one of those jokes that people remembered.</p>
<p class="mb-6">But behind the humour was something much deeper.</p>
<p class="mb-6">He wasn't really talking about someone's face. He was teaching a philosophy.</p>
<p class="mb-6">Luxury should never feel unfinished.</p>
<p class="mb-6">If you are fortunate enough to work with something extraordinary, then your responsibility is to present it in the most beautiful way possible.</p>
<p class="mb-6">That lesson stayed with me.</p>
<p class="mb-6">Today, whenever I prepare a bottle, choose a piece of agarwood, or even think about packaging, I often remember those moments.</p>
<p class="mb-6">Not because I hear my father's voice. But because I understand what he was trying to teach us.</p>
<p class="mb-6">Respect the material. Never rush the finishing. Beauty deserves patience.</p>
<p class="mb-6">That philosophy has followed me far beyond agarwood. It has followed me into perfumery.</p>
<p class="mb-6">People often ask me why I spend so much time perfecting tiny details that many customers may never even notice.</p>
<p class="mb-6">The answer is simple. Because someone taught me that details matter. Not because they make something more expensive. Because they show respect. Respect for the material. Respect for the person who will eventually hold it in their hands.</p>
<p class="mb-6">Sometimes I think the craftsmen believed they were simply cleaning agarwood.</p>
<p class="mb-6">Looking back today, I realise they were helping shape the standards I still carry with me.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>The Smell of the Warehouse</strong></p>
<p class="mb-6">Every workshop has its own smell.</p>
<p class="mb-6">A bakery has the smell of fresh bread. A leather workshop has the smell of leather. A carpenter's workshop carries the scent of fresh timber.</p>
<p class="mb-6">My father's warehouse had a smell unlike anything I have experienced anywhere else.</p>
<p class="mb-6">Even today, if I walk into an old warehouse in Singapore or Indonesia, especially one filled with high-grade Kalimantan or Malaysian agarwood, I stop for a moment. I close my eyes. And for a few seconds…</p>
<p class="mb-6">I am a child again.</p>
<p class="mb-6">It is difficult to describe that smell because it is not the smell most people imagine when they think about agarwood.</p>
<p class="mb-6">It was not the smell of freshly cut wood from the jungle. It was not the smell of wet earth. It was not even the smell of burning agarwood.</p>
<p class="mb-6">It was something completely different.</p>
<p class="mb-6">It was the smell of dry, mature, high-grade agarwood quietly filling an entire room.</p>
<p class="mb-6">A deep, clean, and comforting aroma.</p>
<p class="mb-6">Dry… Yet incredibly alive.</p>
<p class="mb-6">The kind of smell that only exists when hundreds of exceptional pieces have rested together for years.</p>
<p class="mb-6">That smell became part of my childhood. It filled the warehouse every day.</p>
<p class="mb-6">Sometimes there would be craftsmen carving large sculptures from agarwood for important clients. Sometimes they were polishing collector's pieces. Sometimes they were preparing gifts that would eventually travel to royal families, collectors, and people who truly appreciated exceptional agarwood.</p>
<p class="mb-6">There was always work. Always conversation. Always laughter. Always the sound of sandpaper gently moving across wood.</p>
<p class="mb-6">And always… That smell.</p>
<p class="mb-6">At the time, I thought every warehouse in the world smelled like that.</p>
<p class="mb-6">Today I know how rare that experience really was.</p>
<p class="mb-6">Perhaps that is why scent has never been just scent to me.</p>
<p class="mb-6">Every smell carries a place. Every smell carries a memory.</p>
<p class="mb-6">And no smell carries me back to childhood more quickly than walking into a warehouse filled with beautiful agarwood.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>Looking Back</strong></p>
<p class="mb-6">As a child, I never imagined that my life would revolve around agarwood.</p>
<p class="mb-6">In fact, there was a time when I believed I would never work in this world. I wanted to find my own path.</p>
<p class="mb-6">Looking back now, I smile when I think about that.</p>
<p class="mb-6">Because perhaps my path had already begun long before I realised it.</p>
<p class="mb-6">Sometimes life prepares us quietly. Without announcements. Without plans. Without us even noticing.</p>
<p class="mb-6">Years later, when people ask me where my journey with agarwood started, they expect me to tell them about my first distillation or my first successful perfume.</p>
<p class="mb-6">I usually smile.</p>
<p class="mb-6">Because the truth is much simpler.</p>
<p class="mb-6">It started with a little boy…</p>
<p class="mb-6">Who thought every family had agarwood lying around the house.</p>
<p class="mb-6">Who thought every father spent hours smelling oud oils.</p>
<p class="mb-6">Who thought every warehouse was filled with extraordinary wood.</p>
<p class="mb-6">Who proudly wore a pendant carved from agarwood without knowing how rare it really was.</p>
<p class="mb-6">Only much later did that little boy realise…</p>
<p class="mb-6">He hadn't just grown up around agarwood.</p>
<p class="mb-6">He had grown up inside a legacy.</p>`,
      isChapter: true
    },
    {
      id: 'ch3',
      title: 'The Man Who Taught Me Oud',
      content: `<p class="mb-6"><strong>A Boy Who Chose the Forest</strong></p>
<p class="mb-6">There are people who teach by giving answers.</p>
<p class="mb-6">My father taught by making me ask better questions.</p>
<p class="mb-6">When people ask me where my knowledge of agarwood comes from, they often imagine years of formal training. They imagine someone sitting beside me, explaining different species, different origins, different grades, and different distillation techniques.</p>
<p class="mb-6">That never happened.</p>
<p class="mb-6">My education happened quietly.</p>
<p class="mb-6">Without lessons. Without notebooks. Without anyone announcing that I was learning.</p>
<p class="mb-6">It happened simply because I was my father's son.</p>
<p class="mb-6">Every day I watched him. Every day I listened. Every day I absorbed things that, at the time, I didn't even realise were important.</p>
<p class="mb-6">Looking back today, I realise that my father never tried to make me love agarwood. He simply lived his life with such passion that it became impossible not to notice.</p>
<p class="mb-6">He wasn't fascinated by agarwood because it was valuable. He was fascinated because he believed nature still had secrets waiting to be discovered.</p>
<p class="mb-6">That curiosity defined his entire life.</p>
<p class="mb-6">He wasn't born into wealth. Everything he built came through hard work. Long before he became known for exceptional agarwood, he was simply a young boy trying to create a better future.</p>
<p class="mb-6">When he was only thirteen years old, he left what is now Bangladesh and crossed into India.</p>
<p class="mb-6">Life was completely different then. Borders were different. Travel was different. The world itself felt different.</p>
<p class="mb-6">Like many young boys at that time, he worked wherever opportunity appeared. One of those jobs involved transporting tea across the border.</p>
<p class="mb-6">Many people would remember that period simply as work.</p>
<p class="mb-6">My father remembered something else.</p>
<p class="mb-6">The forests.</p>
<p class="mb-6">It was during those journeys that he began discovering the forests of Assam. While others saw difficult terrain, he saw possibility.</p>
<p class="mb-6">He became fascinated by agarwood. Not simply because it was valuable, but because he couldn't stop wanting to understand it.</p>
<p class="mb-6">That curiosity never left him.</p>
<p class="mb-6">The more he learned, the more he wanted to know. The more forests he visited, the more he realised every forest had its own story. Every tree had its own character. Every piece of agarwood had its own personality.</p>
<p class="mb-6">For many people, that would have been enough.</p>
<p class="mb-6">For my father, it was only the beginning.</p>
<p class="mb-6">He wasn't interested in becoming someone who simply traded agarwood.</p>
<p class="mb-6">He wanted to become someone who truly understood it.</p>
<p class="mb-6">That difference shaped the rest of his life.</p>
<p class="mb-6">People sometimes ask me why I continue travelling today. Why I continue searching. Why I continue asking questions.</p>
<p class="mb-6">The answer is very simple.</p>
<p class="mb-6">Because I inherited more than my father's knowledge.</p>
<p class="mb-6">I inherited his curiosity.</p>
<p class="mb-6">Knowledge eventually becomes old. Markets change. Forests change. Even agarwood changes.</p>
<p class="mb-6">But curiosity continues searching.</p>
<p class="mb-6">And as long as curiosity survives…</p>
<p class="mb-6">Discovery never ends.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>Curiosity Above Comfort</strong></p>
<p class="mb-6">There are people who travel because they have to. There are people who travel because they want to see the world.</p>
<p class="mb-6">My father travelled because he could not stop asking questions.</p>
<p class="mb-6">Whenever someone told him about a new forest, a new region, or a new type of agarwood, something inside him came alive.</p>
<p class="mb-6">He simply had to see it for himself.</p>
<p class="mb-6">That curiosity became the compass that guided his entire life. He was never satisfied with buying agarwood from someone else's collection. He wanted to know where it came from. He wanted to see the forest. He wanted to meet the people who found it. He wanted to understand why one tree smelled different from another.</p>
<p class="mb-6">For him, the journey was just as important as the destination.</p>
<p class="mb-6">Long before travelling became comfortable, he travelled constantly. He crossed borders. He spent days in forests. He stayed in villages where life was completely different from the cities.</p>
<p class="mb-6">There were no maps. No mobile phones. No internet.</p>
<p class="mb-6">Knowledge travelled from person to person.</p>
<p class="mb-6">Story to story.</p>
<p class="mb-6">Forest to forest.</p>
<p class="mb-6">That was the world he belonged to.</p>
<p class="mb-6">One of the things he often told me about was the relationship between the forests of Bangladesh and Assam.</p>
<p class="mb-6">People sometimes imagine that finding agarwood simply meant walking into a forest and cutting down a tree.</p>
<p class="mb-6">The reality was very different.</p>
<p class="mb-6">Every forest had its own people. These were families who had lived there for generations. They knew every path, every river, every mountain, and every tree.</p>
<p class="mb-6">If you wanted to enter their forests and harvest agarwood, you first had to earn their trust.</p>
<p class="mb-6">Money alone was often meaningless to them. Many of these communities lived deep inside the jungle and had little use for wealth in the way people in cities understood it.</p>
<p class="mb-6">Instead, they valued things that were rare to them. Things that came from another forest. Things they could not easily find themselves.</p>
<p class="mb-6">My father understood something that many outsiders never did.</p>
<p class="mb-6">He understood that respect opens more doors than money ever will.</p>
<p class="mb-6">Before travelling to the forests of Assam, he would sometimes carry unusual things from the forests of Bangladesh. Not because they were expensive, but because they were interesting.</p>
<p class="mb-6">When he reached the people living in Assam, he would exchange these gifts, build friendships, and spend time with them. On another journey, he might do the opposite, taking something from Assam back to people living in Bangladesh.</p>
<p class="mb-6">To many people, these may seem like simple exchanges.</p>
<p class="mb-6">To my father, they were something much greater.</p>
<p class="mb-6">They were relationships.</p>
<p class="mb-6">And relationships were the true key to the forest.</p>
<p class="mb-6">He never spoke about the people of the jungle as though they were simply suppliers. He respected them. He admired their knowledge. He understood that they knew things no map could ever teach.</p>
<p class="mb-6">Without them, many of the greatest agarwood trees would never have been found.</p>
<p class="mb-6">Watching my father, I learned something that had nothing to do with agarwood.</p>
<p class="mb-6">The greatest opportunities in life rarely begin with transactions.</p>
<p class="mb-6">They begin with trust.</p>
<p class="mb-6">Even after he became successful, that never changed. He never travelled believing he knew everything. He travelled because he believed there was always something new to learn.</p>
<p class="mb-6">Perhaps that is what made him different.</p>
<p class="mb-6">He wasn't chasing agarwood.</p>
<p class="mb-6">He was chasing understanding.</p>
<p class="mb-6">From the forests of Assam, to the markets of Bombay, to the collectors of Singapore, he was always learning.</p>
<p class="mb-6">Always asking.</p>
<p class="mb-6">Always searching.</p>
<p class="mb-6">And today, whenever someone tells me about a new origin, a forgotten material, or a different way of understanding perfume, I sometimes feel the same excitement I used to see in my father's eyes.</p>
<p class="mb-6">In those moments, I realise that I am not only continuing his work.</p>
<p class="mb-6">I am continuing his curiosity.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>The Eye That Saw What Others Couldn't</strong></p>
<p class="mb-6">One of the greatest lessons my father ever taught me happened without him even trying to teach me.</p>
<p class="mb-6">I was around ten years old when he took me on my first real buying trip.</p>
<p class="mb-6">It was just the two of us.</p>
<p class="mb-6">We travelled to Singapore.</p>
<p class="mb-6">At that age, I didn't fully understand what we were doing there. I simply knew that my father was looking for agarwood, and I was excited to be travelling with him.</p>
<p class="mb-6">Looking back today, I realise that this was my first real oud hunting trip.</p>
<p class="mb-6">Singapore was one of the great meeting places for agarwood. Collectors, traders, and hunters from different countries gathered there, bringing extraordinary pieces from all over Southeast Asia.</p>
<p class="mb-6">For my father, it wasn't simply a market.</p>
<p class="mb-6">It was another classroom.</p>
<p class="mb-6">Another opportunity to discover something he had never seen before.</p>
<p class="mb-6">I remember walking into one of the warehouses with him. There were piles of agarwood everywhere. Some pieces were beautiful. Some ordinary. Some looked almost identical to my inexperienced eyes.</p>
<p class="mb-6">To my father, every piece was different.</p>
<p class="mb-6">He asked the owner a simple question.</p>
<p class="mb-6">"How much is this per kilogram?"</p>
<p class="mb-6">The owner replied:</p>
<p class="mb-6">"Four thousand dollars."</p>
<p class="mb-6">I stood quietly beside my father, expecting him to begin negotiating.</p>
<p class="mb-6">Instead, he surprised me.</p>
<p class="mb-6">Without hesitation, he said:</p>
<p class="mb-6">"I'll give you six thousand."</p>
<p class="mb-6">I remember looking at him in complete confusion.</p>
<p class="mb-6">Even as a child, I couldn't understand what had just happened. Why would anyone offer more than the asking price? Wasn't the whole point of buying to negotiate a lower price?</p>
<p class="mb-6">For a moment, I genuinely thought my father had made a mistake.</p>
<p class="mb-6">But he hadn't.</p>
<p class="mb-6">He smiled and added one condition.</p>
<p class="mb-6">"I will pay six thousand. But I will choose every single piece myself."</p>
<p class="mb-6">The owner agreed.</p>
<p class="mb-6">Then I watched something I would only understand many years later.</p>
<p class="mb-6">My father didn't rush.</p>
<p class="mb-6">He walked slowly through the collection. He picked up one piece after another. He turned each one over in his hands. He smelled some. He rejected most.</p>
<p class="mb-6">Occasionally, he placed one aside.</p>
<p class="mb-6">Then he continued searching.</p>
<p class="mb-6">To me, they all looked like agarwood.</p>
<p class="mb-6">To him, they were completely different.</p>
<p class="mb-6">He wasn't buying a pile of wood. He was searching for the few pieces that everyone else had overlooked.</p>
<p class="mb-6">Hours passed.</p>
<p class="mb-6">He continued selecting.</p>
<p class="mb-6">Patiently. Confidently. Without asking anyone's opinion.</p>
<p class="mb-6">Looking back today, I finally understand what happened.</p>
<p class="mb-6">My father wasn't paying an extra two thousand dollars for agarwood.</p>
<p class="mb-6">He was paying for the opportunity to exercise his knowledge.</p>
<p class="mb-6">He knew that if he could choose freely, the pieces he selected would be worth far more than the additional money he had paid.</p>
<p class="mb-6">He wasn't negotiating price.</p>
<p class="mb-6">He was investing in confidence.</p>
<p class="mb-6">At the time, I thought the lesson was about buying.</p>
<p class="mb-6">Years later, I realised it was about something much deeper.</p>
<p class="mb-6">Knowledge changes the way you see value.</p>
<p class="mb-6">Two people can stand in front of exactly the same collection. One sees a pile of wood. The other sees masterpieces hidden among it.</p>
<p class="mb-6">Nothing has changed except the eyes that are looking.</p>
<p class="mb-6">That lesson has stayed with me throughout my own journey.</p>
<p class="mb-6">People often ask me why I spend so much time searching for one particular piece of agarwood. Why I reject so many pieces before choosing one. Why I sometimes travel so far only to return with very little.</p>
<p class="mb-6">The answer is simple.</p>
<p class="mb-6">Because extraordinary materials have always been rare.</p>
<p class="mb-6">My father taught me that.</p>
<p class="mb-6">He never believed in buying more.</p>
<p class="mb-6">He believed in buying better.</p>
<p class="mb-6">Quality was never measured by quantity. It was measured by how close a material came to perfection.</p>
<p class="mb-6">Today, whenever I walk through a warehouse filled with agarwood, I sometimes remember that day in Singapore. I remember standing beside my father, wondering why he would willingly pay more than he had to.</p>
<p class="mb-6">Now, I smile.</p>
<p class="mb-6">Because I finally understand.</p>
<p class="mb-6">The most expensive thing he bought that day wasn't agarwood.</p>
<p class="mb-6">It was the freedom to trust his own eye.</p>
<p class="mb-6">And that eye was something no amount of money could ever buy.</p>
<p class="mb-6">My father never waited for the market to tell him what was beautiful. He decided that for himself.</p>
<p class="mb-6">If he discovered a remarkable piece of agarwood from a region that people ignored, he didn't hesitate. He bought it. He studied it. He believed in it.</p>
<p class="mb-6">He never worried whether people would appreciate it immediately. He believed that if something was truly extraordinary, appreciation would eventually follow.</p>
<p class="mb-6">He wasn't chasing opinions.</p>
<p class="mb-6">He wasn't chasing trends.</p>
<p class="mb-6">He was chasing truth.</p>
<p class="mb-6">Over the years, that way of thinking allowed him to introduce people to agarwood they had never experienced before. Some origins that were almost unknown in our part of the world eventually became appreciated because people like my father believed in them long before anyone else did.</p>
<p class="mb-6">He taught me something I have never forgotten:</p>
<p class="mb-6">Never let the market decide your standards.</p>
<p class="mb-6">Let your standards educate the market.</p>
<p class="mb-6">That lesson has followed me into perfumery.</p>
<p class="mb-6">I don't want to create what people already expect. I want to introduce them to something they didn't know was possible.</p>
<p class="mb-6">If I truly believe in a material, if I truly believe in a perfume, then I am willing to wait.</p>
<p class="mb-6">Because appreciation takes time.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>That Grade No Longer Exists</strong></p>
<p class="mb-6">Some lessons stay with you because someone explains them.</p>
<p class="mb-6">Others stay with you because you witness them.</p>
<p class="mb-6">This is one of the moments I will never forget.</p>
<p class="mb-6">By this time, I had already started my own journey in agarwood. I had travelled to India, purchased my own wood, and was beginning to understand the business for myself.</p>
<p class="mb-6">Like any young man starting out, I was excited. I believed I had found beautiful Indian agarwood, and I couldn't wait to show it to people.</p>
<p class="mb-6">There was one customer in particular I wanted to meet.</p>
<p class="mb-6">He was one of my father's oldest clients, a man of very high rank in Dubai who had spent decades buying only the finest agarwood.</p>
<p class="mb-6">I remember asking my father:</p>
<p class="mb-6">"Why don't we go and show him what I've bought?"</p>
<p class="mb-6">My father smiled.</p>
<p class="mb-6">Then he looked at me and said:</p>
<p class="mb-6">"I don't think he will like it."</p>
<p class="mb-6">I was surprised.</p>
<p class="mb-6">I looked at the wood again.</p>
<p class="mb-6">To me, it was beautiful.</p>
<p class="mb-6">I asked him why.</p>
<p class="mb-6">He simply replied:</p>
<p class="mb-6">"He is used to a different grade."</p>
<p class="mb-6">At the time, I didn't fully understand what he meant. I kept insisting until finally he agreed.</p>
<p class="mb-6">"Alright. Let's go."</p>
<p class="mb-6">When we arrived at the building, I remember being amazed. Normally, someone in his position required an appointment. People waited to meet him.</p>
<p class="mb-6">But my father simply walked inside.</p>
<p class="mb-6">No appointment. No introductions.</p>
<p class="mb-6">Everyone knew him.</p>
<p class="mb-6">The security greeted him. The staff greeted him. It was obvious that he wasn't arriving as a customer.</p>
<p class="mb-6">He was arriving as an old friend.</p>
<p class="mb-6">That was something I had never seen before.</p>
<p class="mb-6">When we entered his office, they greeted each other warmly.</p>
<p class="mb-6">Then, almost immediately, the man looked at my father, smiled, and said:</p>
<p class="mb-6">"You're a liar."</p>
<p class="mb-6">I remember being completely shocked.</p>
<p class="mb-6">For a second, I didn't know how to react.</p>
<p class="mb-6">Then he continued laughing.</p>
<p class="mb-6">"I've been looking for you everywhere. Even the Prime Minister has been asking about you. You keep promising me another bottle of that Hindi oud oil, but every time you disappear."</p>
<p class="mb-6">My father smiled. He wasn't offended. He knew exactly what his friend meant.</p>
<p class="mb-6">Then he quietly answered with a sentence I have never forgotten.</p>
<p class="mb-6">"I'm sorry."</p>
<p class="mb-6">"That grade of wood no longer exists."</p>
<p class="mb-6">"How can I make the same oil if the wood itself no longer exists?"</p>
<p class="mb-6">The room became quiet.</p>
<p class="mb-6">At that moment, I didn't fully understand the weight of those words.</p>
<p class="mb-6">Today…</p>
<p class="mb-6">I understand them completely.</p>
<p class="mb-6">My father could easily have made another oil. He could have called it the same thing. He could have convinced people it was close enough.</p>
<p class="mb-6">Many people would have done exactly that.</p>
<p class="mb-6">He refused.</p>
<p class="mb-6">Because for him, honesty mattered more than business.</p>
<p class="mb-6">If nature had changed, then the truth had changed.</p>
<p class="mb-6">And he was never willing to lie about that.</p>
<p class="mb-6">After a while, my father introduced me.</p>
<p class="mb-6">"This is my son. He has brought some Indian agarwood."</p>
<p class="mb-6">The gentleman smiled. He was kind enough to give me his time.</p>
<p class="mb-6">He selected one of my pieces and placed it on the charcoal.</p>
<p class="mb-6">The room slowly filled with its aroma.</p>
<p class="mb-6">He closed his eyes for a moment.</p>
<p class="mb-6">Smelled it carefully.</p>
<p class="mb-6">Then opened his eyes and smiled.</p>
<p class="mb-6">"I like the smell."</p>
<p class="mb-6">For a moment, I felt relieved.</p>
<p class="mb-6">Then he continued.</p>
<p class="mb-6">"But I don't like how it looks."</p>
<p class="mb-6">He reached across his desk and picked up another piece.</p>
<p class="mb-6">It was almost black. Dense. Shining.</p>
<p class="mb-6">It looked as though someone had polished it with oil, yet it was completely natural.</p>
<p class="mb-6">He placed it beside mine.</p>
<p class="mb-6">Then he looked at my father and said:</p>
<p class="mb-6">"This…"</p>
<p class="mb-6">"This is the oud I used to buy from you."</p>
<p class="mb-6">I remember looking at that piece in complete silence.</p>
<p class="mb-6">Until that moment, I had never truly understood the level my father had worked at.</p>
<p class="mb-6">The wood I had proudly brought with me suddenly looked ordinary.</p>
<p class="mb-6">Not because it wasn't beautiful.</p>
<p class="mb-6">Because I had just seen something extraordinary.</p>
<p class="mb-6">That meeting changed me.</p>
<p class="mb-6">It taught me that there are moments when you must be honest enough to admit that something cannot be recreated.</p>
<p class="mb-6">Nature moves forward. Forests change. Trees disappear.</p>
<p class="mb-6">Some grades belong to a particular time in history.</p>
<p class="mb-6">Once they are gone…</p>
<p class="mb-6">They are gone.</p>
<p class="mb-6">My father never tried to replace those moments.</p>
<p class="mb-6">He chose to honour them.</p>
<p class="mb-6">Looking back today, I think that is one of the greatest lessons he ever gave me.</p>
<p class="mb-6">Never promise what nature cannot deliver.</p>
<p class="mb-6">Respect what existed.</p>
<p class="mb-6">Protect what still remains.</p>
<p class="mb-6">And never lower your standards simply because the world has forgotten what true quality once looked like.</p>
<p class="mb-6">When people ask me why I release only limited quantities, why I refuse to rush a perfume, or why I sometimes spend years searching for the right material, the answer often brings me back to that office.</p>
<p class="mb-6">To that conversation.</p>
<p class="mb-6">And to one sentence that has never left me:</p>
<p class="mb-6">"That grade of wood no longer exists."</p>
<p class="mb-6">Those words taught me something that no book ever could.</p>
<p class="mb-6">The rarest ingredient in perfumery is not oud.</p>
<p class="mb-6">It is honesty.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>More Than a Businessman</strong></p>
<p class="mb-6">If you asked people who knew my father what he did for a living, most would probably tell you that he was an agarwood hunter.</p>
<p class="mb-6">Some would say he was a trader.</p>
<p class="mb-6">Others would remember him as a perfumer.</p>
<p class="mb-6">All of those answers would be true.</p>
<p class="mb-6">But none of them would describe who he really was.</p>
<p class="mb-6">To me…</p>
<p class="mb-6">He was simply my father.</p>
<p class="mb-6">The older I become, the more I realise that what made him extraordinary had very little to do with agarwood.</p>
<p class="mb-6">It had everything to do with the way he treated people.</p>
<p class="mb-6">He had a special way of making everyone feel comfortable. Whether you were one of his oldest clients, one of his workers, or someone he had just met for the first time, he treated you exactly the same.</p>
<p class="mb-6">He never believed business should create distance between people.</p>
<p class="mb-6">He believed business should create friendship.</p>
<p class="mb-6">That is why so many of his customers eventually became his friends.</p>
<p class="mb-6">Even today, years after he is gone, I still meet people who don't begin by talking about the agarwood they bought from him.</p>
<p class="mb-6">They begin by talking about him.</p>
<p class="mb-6">They remember his smile. His humour. His honesty. The way he made them laugh. The way he welcomed them. The way he spoke to them.</p>
<p class="mb-6">That tells me something.</p>
<p class="mb-6">People eventually forget what they bought.</p>
<p class="mb-6">They rarely forget how someone made them feel.</p>
<p class="mb-6">My father understood that without ever trying.</p>
<p class="mb-6">He was also one of the funniest people I have ever known. His humour was never loud. It was quiet, dry, and sometimes sarcastic.</p>
<p class="mb-6">Even in the warehouse, while everyone was working, he was always making jokes.</p>
<p class="mb-6">But beneath that humour was someone who cared deeply about people.</p>
<p class="mb-6">One of the things that makes me proudest of my father has nothing to do with agarwood.</p>
<p class="mb-6">It is the lives he changed.</p>
<p class="mb-6">He came from a humble background. He knew what it meant to struggle. Perhaps that is why success never changed him.</p>
<p class="mb-6">As his business grew, he never forgot where he came from. Many people from our village built better lives because of him. He gave them opportunities. He trusted them. He taught them.</p>
<p class="mb-6">Some eventually built businesses of their own.</p>
<p class="mb-6">One of the clearest examples was within my own family.</p>
<p class="mb-6">My mother's family had no connection to agarwood. My maternal grandfather was a tailor, and this world was completely unfamiliar to them.</p>
<p class="mb-6">But my father brought my mother's brother, my uncle, into the agarwood business. He gave him an opportunity, taught him, and helped him find his own place in this world.</p>
<p class="mb-6">My uncle did not become extraordinarily wealthy, and that is not really the point of the story.</p>
<p class="mb-6">What matters to me is what that opportunity allowed him to build.</p>
<p class="mb-6">He was able to take care of his family. He bought land. He created stability.</p>
<p class="mb-6">And eventually, something happened that I find beautiful when I look at it today.</p>
<p class="mb-6">His sons entered the wood business too.</p>
<p class="mb-6">My cousins.</p>
<p class="mb-6">One of them now works with me.</p>
<p class="mb-6">Another has built a business of his own.</p>
<p class="mb-6">A family that once had no connection to agarwood became part of this world because, many years ago, my father opened a door for someone.</p>
<p class="mb-6">And they were not the only ones.</p>
<p class="mb-6">There were many people whose lives crossed my father's in this way. Some worked beside him. Some learned from him. Some eventually went on to build businesses and lives of their own.</p>
<p class="mb-6">He never kept a record of these things.</p>
<p class="mb-6">He never spoke about how many people he had helped.</p>
<p class="mb-6">Perhaps that is why many of these stories will never be written down.</p>
<p class="mb-6">But I remember enough of them to understand something.</p>
<p class="mb-6">Sometimes the greatest thing a businessman builds is not his own business.</p>
<p class="mb-6">It is the opportunities that continue growing in other people's lives long after he is gone.</p>
<p class="mb-6">When I think about my father today, I don't first remember the rarest agarwood he ever found. I don't first remember the countries he travelled to. I don't first remember the extraordinary pieces that passed through his hands.</p>
<p class="mb-6">I remember the man.</p>
<p class="mb-6">A man who remained curious until the very end.</p>
<p class="mb-6">A man who believed honesty was worth more than profit.</p>
<p class="mb-6">A man who never lowered his standards simply because the world had changed.</p>
<p class="mb-6">A man who laughed often.</p>
<p class="mb-6">A man who treated workers with dignity.</p>
<p class="mb-6">A man who treated customers as friends.</p>
<p class="mb-6">A man who believed that if something was worth doing, it was worth doing properly.</p>
<p class="mb-6">Sometimes people ask me what I inherited from him.</p>
<p class="mb-6">Of course, I inherited knowledge.</p>
<p class="mb-6">Of course, I inherited experience.</p>
<p class="mb-6">But those things are not what I value most.</p>
<p class="mb-6">The greatest inheritance my father left me was his character.</p>
<p class="mb-6">Because knowledge can be learned.</p>
<p class="mb-6">Experience comes with time.</p>
<p class="mb-6">Character…</p>
<p class="mb-6">Character is something a father teaches without ever needing to say a word.</p>
<p class="mb-6">Today, whenever I find myself making a difficult decision, I often stop and ask myself a simple question:</p>
<p class="mb-6">"What would my father have done?"</p>
<p class="mb-6">More often than not…</p>
<p class="mb-6">I already know the answer.</p>
<p class="mb-6">Because I spent my whole life watching him live it.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>If He Could Smell Tamed Ghalia</strong></p>
<p class="mb-6">People sometimes ask me what the greatest compliment I could ever receive would be.</p>
<p class="mb-6">They expect me to say winning an award. Being recognised by famous perfumers. Selling every bottle we produce. Or hearing someone call it the greatest perfume they have ever smelled.</p>
<p class="mb-6">Those things are wonderful.</p>
<p class="mb-6">But none of them would be my greatest compliment.</p>
<p class="mb-6">If I could choose one moment…</p>
<p class="mb-6">Just one…</p>
<p class="mb-6">I wouldn't choose standing on a stage.</p>
<p class="mb-6">I would choose sitting quietly beside my father.</p>
<p class="mb-6">Just the two of us.</p>
<p class="mb-6">Exactly the way we used to sit when he smelled agarwood.</p>
<p class="mb-6">I wouldn't tell him anything about the perfume. I wouldn't explain the ingredients. I wouldn't tell him how long it took me to create it. I wouldn't even tell him its name.</p>
<p class="mb-6">I would simply place the bottle in his hand.</p>
<p class="mb-6">Then I would wait.</p>
<p class="mb-6">He was never someone who rushed when smelling something important. He would spray it once. Smell it. Wait. Smell it again.</p>
<p class="mb-6">Sometimes he wouldn't say anything for a while.</p>
<p class="mb-6">I learned from him that silence is often part of smelling.</p>
<p class="mb-6">The material deserves time to speak before we do.</p>
<p class="mb-6">As he continued smelling it, I think I already know what he would be looking for.</p>
<p class="mb-6">Not whether it smelled expensive.</p>
<p class="mb-6">Not whether it was fashionable.</p>
<p class="mb-6">He would be searching for honesty.</p>
<p class="mb-6">He would ask himself one question:</p>
<p class="mb-6">"Is this real?"</p>
<p class="mb-6">Does the oud still feel like oud?</p>
<p class="mb-6">Does the rose still feel like rose?</p>
<p class="mb-6">Do the animalic materials still carry their natural soul?</p>
<p class="mb-6">Has the perfumer respected the materials, or tried to force them into becoming something they were never meant to be?</p>
<p class="mb-6">Those are the questions I imagine he would quietly ask himself.</p>
<p class="mb-6">If, after all of that, he looked at me and smiled…</p>
<p class="mb-6">And simply said:</p>
<p class="mb-6">"Give me two bottles."</p>
<p class="mb-6">"One for my collection."</p>
<p class="mb-6">"And one to wear every day."</p>
<p class="mb-6">I think I would consider my work complete.</p>
<p class="mb-6">Not because he was my father.</p>
<p class="mb-6">Because there is nobody in this world whose opinion I value more.</p>
<p class="mb-6">Everything I know about agarwood began with him. Everything I know about respecting materials began with him. Everything I know about patience, honesty, and quality began with him.</p>
<p class="mb-6">If he approved of my work…</p>
<p class="mb-6">I wouldn't need another compliment.</p>
<p class="mb-6">Sometimes I wonder what he would think if he could see where this journey has taken me.</p>
<p class="mb-6">Would he smile knowing that I became a distiller?</p>
<p class="mb-6">Would he laugh and tell me I still have more to learn?</p>
<p class="mb-6">Would he ask me a hundred questions about every ingredient?</p>
<p class="mb-6">I honestly don't know.</p>
<p class="mb-6">But I do know one thing.</p>
<p class="mb-6">He would never judge the perfume by its price. He would never judge it by its packaging. He would never judge it by how many bottles it sold.</p>
<p class="mb-6">He would judge it the only way he ever judged anything.</p>
<p class="mb-6">By closing his eyes…</p>
<p class="mb-6">Taking his time…</p>
<p class="mb-6">And listening to what the perfume had to say.</p>
<p class="mb-6">That thought has stayed with me throughout the creation of every perfume I have made.</p>
<p class="mb-6">Whenever I find myself making a decision, adding another material, removing something, or wondering whether a perfume is truly finished, I often imagine that moment.</p>
<p class="mb-6">I imagine handing the bottle to my father.</p>
<p class="mb-6">If I don't feel proud enough to place it in his hands…</p>
<p class="mb-6">Then it isn't ready.</p>
<p class="mb-6">That has become one of my highest standards.</p>
<p class="mb-6">Not because my father is here to judge my work.</p>
<p class="mb-6">But because the standards he taught me are.</p>
<p class="mb-6">In many ways, every perfume I create is still trying to answer one quiet question:</p>
<p class="mb-6">Would my father be proud of this?</p>
<p class="mb-6">Perhaps I will never hear his answer.</p>
<p class="mb-6">But every time I finish a perfume that truly feels honest, every time I smell something that reminds me of the forests, the warehouses, the charcoal, and the childhood he gave me…</p>
<p class="mb-6">I like to believe that, somewhere, he already knows.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>What He Left Me</strong></p>
<p class="mb-6">When people ask me what my father left behind, they often imagine agarwood.</p>
<p class="mb-6">Or knowledge.</p>
<p class="mb-6">Or a business.</p>
<p class="mb-6">Of course, he left me those things.</p>
<p class="mb-6">But the greatest things he left me cannot be held in my hands.</p>
<p class="mb-6">He left me a way of thinking.</p>
<p class="mb-6">He taught me to question everything. He taught me to trust my own senses. He taught me that nature always tells the truth, if we are patient enough to listen.</p>
<p class="mb-6">One lesson has stayed with me more than almost any other.</p>
<p class="mb-6">It is something I still practise today.</p>
<p class="mb-6">When my father wanted to judge an oud oil, he would place a small amount on his skin.</p>
<p class="mb-6">Then he would smell it.</p>
<p class="mb-6">But he didn't smell it the way someone casually smells a perfume.</p>
<p class="mb-6">I remember him teaching me to breathe out first.</p>
<p class="mb-6">Empty your breath.</p>
<p class="mb-6">Then bring the oil close.</p>
<p class="mb-6">And inhale.</p>
<p class="mb-6">Deeply.</p>
<p class="mb-6">As deeply as you comfortably can.</p>
<p class="mb-6">Don't just ask your nose what it smells like.</p>
<p class="mb-6">Pay attention to how it feels.</p>
<p class="mb-6">Then wait.</p>
<p class="mb-6">Smell it again.</p>
<p class="mb-6">He wanted me to experience the oil, not simply identify its notes.</p>
<p class="mb-6">My father believed that when an oil was truly natural and pure, there was a certain harmony to the way it felt when you breathed it in. And when something foreign had been added, he believed an experienced person could sometimes sense that something was not right.</p>
<p class="mb-6">That was how he understood oud.</p>
<p class="mb-6">Not through a machine.</p>
<p class="mb-6">Through years of smelling.</p>
<p class="mb-6">Through repetition.</p>
<p class="mb-6">Through experience.</p>
<p class="mb-6">Through knowing the material so intimately that even a small difference could make him stop and question it.</p>
<p class="mb-6">At the time, there were no GC-MS reports sitting beside us. There were no laboratory analyses for every bottle we smelled.</p>
<p class="mb-6">There was experience.</p>
<p class="mb-6">Today, we have extraordinary scientific tools that previous generations did not have, and I respect them deeply. A laboratory can answer questions that even the greatest nose cannot answer with certainty.</p>
<p class="mb-6">But I also believe that science does not make experience meaningless.</p>
<p class="mb-6">The two can exist together.</p>
<p class="mb-6">Even today, before I look at a report, before I study an analysis, I still do what my father taught me.</p>
<p class="mb-6">I put the material on my skin.</p>
<p class="mb-6">I breathe out.</p>
<p class="mb-6">I bring it close.</p>
<p class="mb-6">And I inhale.</p>
<p class="mb-6">Slowly.</p>
<p class="mb-6">Deeply.</p>
<p class="mb-6">I pay attention.</p>
<p class="mb-6">I do it with oud. With rose. With sandalwood. With jasmine. With many of the natural materials I work with.</p>
<p class="mb-6">Not because I believe my nose can replace a laboratory.</p>
<p class="mb-6">It cannot.</p>
<p class="mb-6">I do it because my father taught me that smelling is not a passive act.</p>
<p class="mb-6">You have to listen.</p>
<p class="mb-6">You have to give the material time.</p>
<p class="mb-6">You have to notice what changes after five minutes, after an hour, and sometimes after an entire day.</p>
<p class="mb-6">The more I work with natural materials, the more I understand the wisdom inside that lesson.</p>
<p class="mb-6">Knowledge is not only something we read.</p>
<p class="mb-6">Sometimes, knowledge is built through thousands of small experiences that slowly teach our senses what to notice.</p>
<p class="mb-6">That is what my father gave me.</p>
<p class="mb-6">He didn't simply teach me about agarwood.</p>
<p class="mb-6">He taught me how to observe.</p>
<p class="mb-6">How to question.</p>
<p class="mb-6">How to smell.</p>
<p class="mb-6">How to remain curious even after I thought I knew the answer.</p>
<p class="mb-6">And perhaps that is the greatest inheritance a father can leave his son.</p>`,
      isChapter: true
    },
    {
      id: 'ch4',
      title: 'The Day Oud Became an Experience',
      content: `<p class="mb-6"><strong>I Never Wanted This Life</strong></p>
<p class="mb-6">One of the biggest surprises in my life is that I once believed I would never work with agarwood.</p>
<p class="mb-6">People often assume that because I grew up surrounded by oud, I must have always dreamed of continuing my family's work.</p>
<p class="mb-6">The truth is exactly the opposite.</p>
<p class="mb-6">As a teenager, I wanted to find my own path. I respected what my father had built. I admired the life he had created. But I wanted to become successful in my own way.</p>
<p class="mb-6">Perhaps that is something many sons feel. You want to build something that belongs to you, not because you reject your father's legacy, but because you want to prove to yourself that you can create one of your own.</p>
<p class="mb-6">At that time, agarwood was simply part of my everyday life.</p>
<p class="mb-6">It was everywhere.</p>
<p class="mb-6">And because it was everywhere, I rarely stopped to appreciate how extraordinary it really was.</p>
<p class="mb-6">Sometimes, the things we grow up with become almost invisible.</p>
<p class="mb-6">We only realise their value when something changes the way we see them.</p>
<p class="mb-6">For me, that moment came unexpectedly.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>The Piece From Lamding</strong></p>
<p class="mb-6">I still remember the day clearly.</p>
<p class="mb-6">I was around seventeen or eighteen years old when my father called me into his office.</p>
<p class="mb-6">He had a piece of Indian agarwood resting beside a charcoal burner. It was not an ordinary piece.</p>
<p class="mb-6">It came from the Lamding region of Assam, a place that has produced some of the finest agarwood I have ever experienced.</p>
<p class="mb-6">The story behind that particular piece made it even more special.</p>
<p class="mb-6">My father told me it had been found by a very poor man. The tree itself was believed to be one of the oldest and rarest ever discovered in that region.</p>
<p class="mb-6">When my father heard about it, he didn't buy it because he wanted to sell it.</p>
<p class="mb-6">He bought around one hundred grams simply because he wanted to experience it.</p>
<p class="mb-6">To study it.</p>
<p class="mb-6">To understand it.</p>
<p class="mb-6">To wear it.</p>
<p class="mb-6">That was the kind of person he was.</p>
<p class="mb-6">Sometimes he bought agarwood not as a businessman, but as a student of nature.</p>
<p class="mb-6">As I entered his office, he placed a small piece onto the charcoal. The room slowly began to fill with smoke.</p>
<p class="mb-6">He looked at me and said:</p>
<p class="mb-6">"Come here. Smell this."</p>
<p class="mb-6">I leaned forward.</p>
<p class="mb-6">He didn't ask me simply to smell the piece of wood. He wanted me to inhale the smoke itself.</p>
<p class="mb-6">So I did.</p>
<p class="mb-6">I took a deep breath.</p>
<p class="mb-6">It had the character I knew from beautiful Hindi agarwood, but there was something exceptional about it.</p>
<p class="mb-6">There was fruitiness.</p>
<p class="mb-6">There was spice.</p>
<p class="mb-6">There was that almost saffron-like character I associate with certain extraordinary Hindi oud.</p>
<p class="mb-6">But what I remember most was how close the aroma felt.</p>
<p class="mb-6">It wasn't a smell that seemed to be floating somewhere in the room.</p>
<p class="mb-6">It felt as though it had entered me.</p>
<p class="mb-6">As though the aroma was sitting inside my nose.</p>
<p class="mb-6">I remember thinking it was beautiful.</p>
<p class="mb-6">Then I left.</p>
<p class="mb-6">At that moment, I thought nothing more about it.</p>
<p class="mb-6">I had no idea that the next few hours would quietly change the way I understood scent.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>The Ride Home</strong></p>
<p class="mb-6">A little while later, my friends arrived to pick me up.</p>
<p class="mb-6">Like most teenagers, we climbed into the car and immediately started talking. Everyone was laughing, arguing and discussing things that felt incredibly important at that age.</p>
<p class="mb-6">Normally, I would have been right in the middle of those conversations.</p>
<p class="mb-6">But that day, something was different.</p>
<p class="mb-6">I remember sitting quietly in the back seat. I could hear my friends talking around me, but I wasn't really listening.</p>
<p class="mb-6">My mind was somewhere else.</p>
<p class="mb-6">I could still smell the agarwood.</p>
<p class="mb-6">Not the usual trace that remains on your clothes after sitting around burning oud.</p>
<p class="mb-6">I knew that smell.</p>
<p class="mb-6">This was different.</p>
<p class="mb-6">What I was smelling in the car felt like the same aroma I had smelled while the wood was still burning in my father's office.</p>
<p class="mb-6">The fruitiness.</p>
<p class="mb-6">The spice.</p>
<p class="mb-6">That saffron-like Hindi character.</p>
<p class="mb-6">It was still there.</p>
<p class="mb-6">Inside my nose.</p>
<p class="mb-6">Around me.</p>
<p class="mb-6">Alive.</p>
<p class="mb-6">Again and again, I found myself wondering:</p>
<p class="mb-6">Is someone still burning it somewhere?</p>
<p class="mb-6">Of course, nobody was.</p>
<p class="mb-6">I was sitting in a car, away from my father's office, surrounded by my friends.</p>
<p class="mb-6">But the experience had followed me.</p>
<p class="mb-6">That confused me.</p>
<p class="mb-6">I had grown up around agarwood. I knew the after-effect of burning oud. I knew how the aroma could remain on clothing, in a room or around you after the charcoal had gone out.</p>
<p class="mb-6">But this didn't feel like an after-effect.</p>
<p class="mb-6">It felt present.</p>
<p class="mb-6">As though someone had placed another piece of that same Lamding agarwood onto charcoal somewhere beside me.</p>
<p class="mb-6">The more I noticed it, the quieter I became.</p>
<p class="mb-6">For the first time in my life, I realised that agarwood was doing something to me that I had never consciously experienced before.</p>
<p class="mb-6">It wasn't simply creating a beautiful smell.</p>
<p class="mb-6">It was changing the way I felt.</p>
<p class="mb-6">I wasn't excited.</p>
<p class="mb-6">I wasn't sleepy.</p>
<p class="mb-6">I wasn't distracted.</p>
<p class="mb-6">I was somewhere else.</p>
<p class="mb-6">Calm.</p>
<p class="mb-6">Present.</p>
<p class="mb-6">Completely absorbed by something I couldn't explain.</p>
<p class="mb-6">That was the moment everything changed.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>When Smell Became Experience</strong></p>
<p class="mb-6">Until that day, agarwood had always been around me.</p>
<p class="mb-6">I had grown up inside warehouses filled with it. I had watched my father smell oud oils for hours. I had worn agarwood around my neck as a child. I had seen pieces that today I would consider almost impossible to replace.</p>
<p class="mb-6">But perhaps because it had always been there, I had never stopped to ask what scent was actually capable of doing.</p>
<p class="mb-6">That piece from Lamding forced me to notice.</p>
<p class="mb-6">For the first time, I understood that perfume is not only about whether something smells beautiful.</p>
<p class="mb-6">Scent can change your state of mind.</p>
<p class="mb-6">It can interrupt a conversation without making a sound.</p>
<p class="mb-6">It can take your attention away from everything happening around you.</p>
<p class="mb-6">It can remain somewhere inside you long after the material itself has disappeared.</p>
<p class="mb-6">It can create a place that exists only between the smell and the person experiencing it.</p>
<p class="mb-6">Looking back today, I think that drive home was one of the most important journeys of my life.</p>
<p class="mb-6">Not because of where I travelled.</p>
<p class="mb-6">Because of where my mind travelled.</p>
<p class="mb-6">That afternoon, without anyone intending to teach me, agarwood stopped being simply a material.</p>
<p class="mb-6">It became an experience.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>A Different Way of Smelling</strong></p>
<p class="mb-6">That afternoon stayed with me for years.</p>
<p class="mb-6">I never forgot it.</p>
<p class="mb-6">Even now, whenever I smell a truly exceptional piece of agarwood burning on charcoal, I remember that car ride.</p>
<p class="mb-6">I remember the silence.</p>
<p class="mb-6">I remember wondering why I could still smell something that was no longer burning anywhere near me.</p>
<p class="mb-6">And over the years, I began to understand what that moment had taught me.</p>
<p class="mb-6">The greatest perfumes are not necessarily the ones that simply smell beautiful.</p>
<p class="mb-6">They are the ones that change something inside us.</p>
<p class="mb-6">They slow us down.</p>
<p class="mb-6">They create memories.</p>
<p class="mb-6">They make us feel present.</p>
<p class="mb-6">They follow us.</p>
<p class="mb-6">That is why, even today, I still believe there is no smell more beautiful than the very first aroma that rises from an exceptional piece of agarwood placed on hot charcoal.</p>
<p class="mb-6">Everything I have created since, every oud oil I have distilled and every perfume I have composed, has somehow been my own attempt to preserve a part of that experience.</p>
<p class="mb-6">Not simply the smell.</p>
<p class="mb-6">The feeling.</p>
<p class="mb-6">Because that day taught me something I would spend years trying to understand.</p>
<p class="mb-6">Real oud is not simply a smell.</p>
<p class="mb-6">It is an experience.</p>`,
      isChapter: true
    },
    {
      id: 'ch5',
      title: 'A Friend With an Extraordinary Nose',
      content: `<p class="mb-6">There are certain moments in life that seem ordinary while they are happening. You don't realise they will stay with you forever. Only years later do you look back and realise that your life quietly changed that day.</p>
<p class="mb-6">For me, one of those moments happened in 2012.</p>
<p class="mb-6">At the time, I was already working with agarwood. I had travelled. I had bought and sold oud. I had spent years around collectors and some of the finest materials in the world.</p>
<p class="mb-6">But I still wasn't a distiller.</p>
<p class="mb-6">I wasn't trying to create oud oil or solve any problem. I was simply continuing my journey of learning.</p>
<p class="mb-6">One afternoon, I went to visit one of my clients in Sharjah. Today, I don't think of him as a client anymore. He has become one of my closest friends.</p>
<p class="mb-6">He is older than me, and over the years I have come to respect him immensely. Not only because of his character, but because he has one of the finest noses I have ever encountered.</p>
<p class="mb-6">Growing up in an Arab family where burning agarwood is part of everyday life gave him a deep understanding of scent. But beyond that, he had something that cannot be taught.</p>
<p class="mb-6">He could recognise quality almost immediately.</p>
<p class="mb-6">He was never interested in ordinary agarwood. It was almost impossible to impress him with commercial oud oils. If he liked something, it meant something.</p>
<p class="mb-6">That is one of the reasons I always valued his opinion.</p>
<p class="mb-6">That day, he had just returned from Mumbai. We sat together, talking as we usually did.</p>
<p class="mb-6">Then, without saying very much, he reached for a small bottle. He handed it to me and simply asked:</p>
<p class="mb-6">"What do you think?"</p>
<p class="mb-6">He didn't tell me where it came from. He didn't tell me who distilled it. He didn't tell me what species it was.</p>
<p class="mb-6">He simply waited.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>"This Is Sri Lankan"</strong></p>
<p class="mb-6">I opened the bottle.</p>
<p class="mb-6">The moment the aroma reached me, I answered almost without thinking.</p>
<p class="mb-6">"This is Sri Lankan."</p>
<p class="mb-6">He smiled.</p>
<p class="mb-6">He hadn't told me anything. There was no label. No clue. Just the smell.</p>
<p class="mb-6">At that time, around 2012, Sri Lankan agarwood was still relatively new to the market compared with many of the origins we had known for generations.</p>
<p class="mb-6">And it was extraordinary.</p>
<p class="mb-6">Sri Lankan agarwood had an identity of its own. There was a greenness to it, together with an earthy, powdery character that was difficult to confuse with anything else.</p>
<p class="mb-6">Malino agarwood could sometimes remind me of certain aspects of it, but Sri Lankan oud still had a personality that belonged entirely to itself.</p>
<p class="mb-6">I already knew that smell from the wood.</p>
<p class="mb-6">That was why the answer came to me so quickly.</p>
<p class="mb-6">The oil my friend handed me carried that same identity. I wasn't recognising it because it smelled like another Sri Lankan oud oil I had experienced before.</p>
<p class="mb-6">I recognised it because it reminded me of Sri Lankan agarwood itself.</p>
<p class="mb-6">That distinction became incredibly important to me.</p>
<p class="mb-6">When I smelled the oil, my mind immediately returned to placing a beautiful piece of Sri Lankan agarwood onto hot charcoal. The greenness, the earthiness, that soft, powdery character.</p>
<p class="mb-6">It was somehow still there.</p>
<p class="mb-6">The material being distilled at that time was also exceptional. This was 2012, when extremely high-grade Sri Lankan agarwood could still be found in a way that became increasingly difficult in the years that followed.</p>
<p class="mb-6">Perhaps that was part of the answer.</p>
<p class="mb-6">Perhaps what I was smelling was simply what happens when extraordinary material is allowed to remain recognisable after distillation.</p>
<p class="mb-6">Whatever the reason, I remember sitting there thinking:</p>
<p class="mb-6">This is exactly how it should be.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>One Question</strong></p>
<p class="mb-6">That single bottle gave me a question that refused to leave my mind.</p>
<p class="mb-6">If a Sri Lankan oud oil can smell so faithfully like Sri Lankan agarwood, why can't every origin do the same?</p>
<p class="mb-6">Why shouldn't Indian oud oil smell like Indian agarwood burning on charcoal?</p>
<p class="mb-6">Why shouldn't Cambodian oud oil preserve the identity of Cambodian agarwood?</p>
<p class="mb-6">Why shouldn't every origin carry the soul of the tree it came from?</p>
<p class="mb-6">The question seemed so simple.</p>
<p class="mb-6">Yet I couldn't answer it.</p>
<p class="mb-6">I wasn't disappointed. I was fascinated.</p>
<p class="mb-6">The more I thought about it, the more I realised that perhaps we had accepted something we should have questioned.</p>
<p class="mb-6">Why had so many people become comfortable with oud oils that no longer reminded us of the wood itself?</p>
<p class="mb-6">Why had we accepted that this was simply the way oud oil should smell?</p>
<p class="mb-6">I couldn't stop thinking about it.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>A Question That Refused to Leave</strong></p>
<p class="mb-6">Life continued. I went back to work. I travelled. I bought agarwood. I met collectors. I traded whatever the market was asking for.</p>
<p class="mb-6">At that stage of my life, I wasn't sitting somewhere thinking about becoming a distiller.</p>
<p class="mb-6">I was busy.</p>
<p class="mb-6">I was hunting.</p>
<p class="mb-6">I was trying to build my business.</p>
<p class="mb-6">And when it came to oud oil, Malaysian was actually one of my favourites at the time.</p>
<p class="mb-6">I loved the bitterness of a beautiful Malaysian oil. There was something aged about it, something mature, that I found incredibly attractive.</p>
<p class="mb-6">Then I smelled that Sri Lankan.</p>
<p class="mb-6">And suddenly, I had another favourite.</p>
<p class="mb-6">But more importantly, I had another way of judging oil.</p>
<p class="mb-6">After that experience, whenever I smelled an oud oil, somewhere in the back of my mind there was a question:</p>
<p class="mb-6">Where is the wood?</p>
<p class="mb-6">I tried other Sri Lankan oils after that. Some were beautiful, but they didn't give me the same feeling.</p>
<p class="mb-6">That taught me something too.</p>
<p class="mb-6">It wasn't enough for a bottle to say Sri Lankan. The origin alone could not explain what I had experienced that day.</p>
<p class="mb-6">The material mattered.</p>
<p class="mb-6">The quality mattered.</p>
<p class="mb-6">And somehow, whatever happened between the wood and the finished oil mattered too.</p>
<p class="mb-6">I didn't yet understand distillation well enough to know what that "somehow" was.</p>
<p class="mb-6">I only knew that I had smelled proof that it was possible.</p>
<p class="mb-6">The same thing happened when I smelled oils from other origins. I could smell sweetness. I could smell bitterness. I could smell beautiful oils.</p>
<p class="mb-6">But often, something was missing.</p>
<p class="mb-6">I knew these woods. I knew what happened when exceptional agarwood touched hot charcoal.</p>
<p class="mb-6">And increasingly, I found myself searching for that identity inside the bottle.</p>
<p class="mb-6">Sometimes the oil was beautiful in its own right. But beauty was no longer the only question.</p>
<p class="mb-6">I wanted recognition.</p>
<p class="mb-6">I wanted to smell the oil and somehow meet the wood again.</p>
<p class="mb-6">Still, life was moving quickly. I wasn't pursuing this as a project. I wasn't keeping notes or conducting experiments.</p>
<p class="mb-6">I was trading agarwood. I was travelling. I was hunting.</p>
<p class="mb-6">The question simply travelled with me.</p>
<p class="mb-6">Sometimes it disappeared into the background for weeks or months. Then I would burn an extraordinary piece of agarwood, or open another bottle of oud oil, and there it was again.</p>
<p class="mb-6">Where is the wood?</p>
<p class="mb-6">I didn't know it then, but that question was slowly changing the standard by which I would eventually judge every oud oil I encountered.</p>
<p class="mb-6">And years later, it would become the question that pushed me toward the distillation pot.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>Nature Had Already Done the Hard Work</strong></p>
<p class="mb-6">As the years passed, something became clearer and clearer to me.</p>
<p class="mb-6">I wasn't trying to invent a new smell.</p>
<p class="mb-6">Nature had already done that.</p>
<p class="mb-6">I wasn't trying to improve agarwood.</p>
<p class="mb-6">That would be impossible.</p>
<p class="mb-6">The smell I loved most had already been created.</p>
<p class="mb-6">The first aroma that rises from exceptional agarwood placed on hot charcoal, nothing has ever surpassed it for me.</p>
<p class="mb-6">The challenge was never creation.</p>
<p class="mb-6">The challenge was preservation.</p>
<p class="mb-6">How do you preserve that feeling? How do you preserve that identity?</p>
<p class="mb-6">How do you place the soul of a tree into a bottle without losing what makes it extraordinary?</p>
<p class="mb-6">I didn't know the answer yet.</p>
<p class="mb-6">But I knew I wanted to find it.</p>
<p class="mb-6">That question, born from one bottle handed to me by a friend in Sharjah, quietly became the beginning of everything that followed.</p>
<p class="mb-6">It would take years before I understood where that question was leading me.</p>
<p class="mb-6">I still had forests to visit, wood to hunt, oils to smell, mistakes to make, and eventually, a distillation pot to buy.</p>
<p class="mb-6">But the search had already begun.</p>
<p class="mb-6">It was no longer just curiosity.</p>
<p class="mb-6">It had become a purpose.</p>`,
      isChapter: true
    },
    {
      id: 'ch6',
      title: 'The Search for the Perfect Oud Oil',
      content: `<p class="mb-6"><strong>It Was Never the Plan</strong></p>
<p class="mb-6">People often assume that becoming a distiller was always my dream.</p>
<p class="mb-6">The truth is, it wasn't.</p>
<p class="mb-6">If you had asked me years earlier whether I would one day be distilling my own oud oils, I probably would have smiled and said no. It wasn't part of a carefully written business plan. It wasn't even something I had seriously thought about.</p>
<p class="mb-6">Like many important moments in my life, it began with a journey.</p>
<p class="mb-6">My brother-in-law and I travelled to Thailand. The purpose of the trip was simple. We were there to buy agarwood and oud oil, just as we had done many times before.</p>
<p class="mb-6">During that trip, we visited several distilleries. We met experienced distillers and walked through their factories. For the first time, we saw every stage of the distillation process with our own eyes.</p>
<p class="mb-6">Naturally, we became excited. Watching agarwood transform into oil was fascinating.</p>
<p class="mb-6">But the more we watched, the more something began to trouble us.</p>
<p class="mb-6">We looked carefully at the raw material being loaded into the distillation pots. Then we smelled the finished oils.</p>
<p class="mb-6">Something didn't add up.</p>
<p class="mb-6">The oils we were searching for, the oils that truly moved us, simply didn't seem possible from the material we were seeing.</p>
<p class="mb-6">Neither of us said very much at first, but I think we were both thinking the same thing.</p>
<p class="mb-6">If this is the material, how can this become the oil we are searching for?</p>
<p class="mb-6">By the time we returned home, we had made a decision.</p>
<p class="mb-6">Not because we had a perfect plan or because we believed we already understood distillation. Quite the opposite.</p>
<p class="mb-6">We decided to buy our own distillation pot because we wanted to learn. We wanted to understand what really happened between the tree and the bottle.</p>
<p class="mb-6">More importantly, I wanted complete confidence in what I was offering people.</p>
<p class="mb-6">For me, that mattered deeply.</p>
<p class="mb-6">One of the things I have always believed is that if someone is paying to experience real oud, then they deserve complete honesty.</p>
<p class="mb-6">Oud oil is one of the most difficult products in the world to buy with absolute confidence. Even if you completely trust the person selling it to you, how can they be certain of every hand that touched it before it reached them?</p>
<p class="mb-6">Perhaps they bought it from another trader. Perhaps that trader bought it from someone else.</p>
<p class="mb-6">Eventually, you realise that trust becomes more difficult with every step.</p>
<p class="mb-6">I wanted to remove as many of those questions as possible. I wanted to know exactly what entered my distillation pot.</p>
<p class="mb-6">Only then could I truly know what was inside the bottle.</p>
<p class="mb-6">Looking back today, I realise that our decision was driven far more by curiosity than by confidence.</p>
<p class="mb-6">We had no idea how difficult the journey ahead would become.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>If We Were Going to Do It…</strong></p>
<p class="mb-6">From the very beginning, I knew one thing.</p>
<p class="mb-6">If I was going to distill oud oil, I didn't want to do what everyone else was already doing.</p>
<p class="mb-6">A little later, I travelled to Indonesia to buy agarwood. Originally, the trip had nothing to do with distillation. I was there to buy agarwood for my trading business.</p>
<p class="mb-6">While sitting with one of my suppliers in his factory, I told him that I had decided to begin distilling my own oils.</p>
<p class="mb-6">He smiled, then pointed towards a pile of agarwood.</p>
<p class="mb-6">"Use this," he said. "It is perfect for distillation."</p>
<p class="mb-6">It was inexpensive material, the kind that many distillers would normally choose. From his point of view, it was sensible advice.</p>
<p class="mb-6">After all, I was a beginner.</p>
<p class="mb-6">Why risk expensive wood while learning?</p>
<p class="mb-6">But I couldn't convince myself to do it.</p>
<p class="mb-6">The question that had been following me ever since 2012 was still alive.</p>
<p class="mb-6">Where is the wood?</p>
<p class="mb-6">I wasn't trying to discover what ordinary wood could produce. I wanted to know what extraordinary wood could become.</p>
<p class="mb-6">If the idea was to preserve the beauty I knew from burning exceptional agarwood, then surely I had to begin with exceptional agarwood.</p>
<p class="mb-6">So instead, I chose material that was already considered unusually expensive for distillation.</p>
<p class="mb-6">Many people thought it was unnecessary. Some probably thought it was foolish.</p>
<p class="mb-6">Looking back today, I smile at that decision. Not because they were wrong, but because my own standards have continued to evolve.</p>
<p class="mb-6">The material that once seemed exceptional to me would no longer meet the standards I work with today.</p>
<p class="mb-6">Every year I have spent studying agarwood has quietly changed my definition of excellence. The more I learned, the more demanding I became.</p>
<p class="mb-6">What once felt extraordinary eventually became my starting point.</p>
<p class="mb-6">That, perhaps, is one of the greatest gifts of experience.</p>
<p class="mb-6">The destination keeps moving.</p>
<p class="mb-6">You never stop searching for something better.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>Twenty Kilograms</strong></p>
<p class="mb-6">When I returned to Dubai, our small distillery was ready. It wasn't a large factory. It wasn't designed for commercial production.</p>
<p class="mb-6">It was simply the beginning of a journey.</p>
<p class="mb-6">We carefully prepared the still, loaded the agarwood, and filled it with twenty kilograms of material.</p>
<p class="mb-6">Then we waited.</p>
<p class="mb-6">I still remember the excitement.</p>
<p class="mb-6">We weren't simply waiting for oil.</p>
<p class="mb-6">We were waiting for answers.</p>
<p class="mb-6">Days later, the distillation finally came to an end. We collected the oil and weighed it.</p>
<p class="mb-6">Less than one tola.</p>
<p class="mb-6">Less than twelve grams.</p>
<p class="mb-6">In fact, it was closer to nine or ten grams.</p>
<p class="mb-6">Twenty kilograms of carefully selected agarwood had gone through days of work, fire, water, time and patience, and everything had become less than ten grams of oil.</p>
<p class="mb-6">Anyone looking only at the numbers would probably have said the same thing:</p>
<p class="mb-6">"This makes no financial sense."</p>
<p class="mb-6">Perhaps they would have been right.</p>
<p class="mb-6">But then I smelled it.</p>
<p class="mb-6">I still remember that moment as clearly as if it happened yesterday.</p>
<p class="mb-6">It was beautiful.</p>
<p class="mb-6">Not simply good for a first distillation.</p>
<p class="mb-6">Beautiful.</p>
<p class="mb-6">It was unlike any oud oil I had smelled before. For me, it felt complete, almost like a perfume in itself.</p>
<p class="mb-6">I didn't smell it and think about what I could add to it. I didn't think it needed rose, musk, ambergris or another oud oil to balance it.</p>
<p class="mb-6">It didn't feel like an ingredient waiting to become something else.</p>
<p class="mb-6">It felt whole.</p>
<p class="mb-6">That experience changed something in the way I understood oud oil.</p>
<p class="mb-6">Until then, I had experienced oud oil as a material. Something you wore, something you collected, something that could become part of a perfume.</p>
<p class="mb-6">But this was different.</p>
<p class="mb-6">This oil didn't need a perfume around it.</p>
<p class="mb-6">It was the perfume.</p>
<p class="mb-6">Even today, I believe that when an oud oil truly captures the beauty of exceptional agarwood, it should be capable of standing completely on its own.</p>
<p class="mb-6">You should be able to wear a drop exactly as it is. Or, if you wanted to experience it as a spray perfume, allow that same oil to express itself through alcohol.</p>
<p class="mb-6">It shouldn't need another material to explain it.</p>
<p class="mb-6">Nature had already created the balance.</p>
<p class="mb-6">Standing there with the result of my first distillation, I began to understand something I had been searching for since that bottle of Sri Lankan oud was handed to me years earlier.</p>
<p class="mb-6">Perhaps my job was not to make agarwood smell better.</p>
<p class="mb-6">Perhaps my job was simply not to get in its way.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>I Wanted More</strong></p>
<p class="mb-6">I wasn't standing there thinking about how to make the next oil better.</p>
<p class="mb-6">At that moment, I didn't think it needed to be better.</p>
<p class="mb-6">For me, it was already extraordinary.</p>
<p class="mb-6">My first thought was much simpler.</p>
<p class="mb-6">I wanted more of it.</p>
<p class="mb-6">Twenty kilograms of agarwood had given me less than ten grams of this beautiful oil, and suddenly that tiny yield became the only problem I could see.</p>
<p class="mb-6">If I could make something this beautiful, how could I make more of it?</p>
<p class="mb-6">That question sent me back to the distillation pot.</p>
<p class="mb-6">I began experimenting with different preparations, different soaking periods and different ways of handling the material and the distillation itself.</p>
<p class="mb-6">At first, like any beginner, I was trying to understand which part of the process controlled what I was seeing, smelling and collecting.</p>
<p class="mb-6">But over time, I began to realise that yield was only one small part of the equation.</p>
<p class="mb-6">Soaking longer, for example, did not simply mean getting more oil. I eventually stopped thinking about the process in such simple terms.</p>
<p class="mb-6">There was something much more important I needed to understand.</p>
<p class="mb-6">Depth.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>The Wood Has Its Own Composition</strong></p>
<p class="mb-6">Agarwood already contains an extraordinary complexity within itself.</p>
<p class="mb-6">There is an opening. There is a heart. There is a depth that reveals itself much later.</p>
<p class="mb-6">In many ways, the wood already contains its own composition.</p>
<p class="mb-6">That became one of the most important things distillation would eventually teach me.</p>
<p class="mb-6">Distilling beautiful agarwood does not automatically mean that all of those dimensions will survive beautifully in the finished oil.</p>
<p class="mb-6">I have smelled oils made from incredible raw materials where I could recognise the beauty of the opening, but something deeper was missing.</p>
<p class="mb-6">The wood had more to say.</p>
<p class="mb-6">The distillation simply hadn't allowed me to hear all of it.</p>
<p class="mb-6">There are top notes within agarwood. There is a heart. There is a base.</p>
<p class="mb-6">For me, a successful distillation is not simply about extracting as much of them as possible. It is about allowing them to exist together.</p>
<p class="mb-6">The opening should not disappear in the search for depth. The depth should not overwhelm the heart. The heart should not bury the beauty that first rises from the wood.</p>
<p class="mb-6">Finding that balance would take me years.</p>
<p class="mb-6">I had to learn how to preserve brightness without losing depth, how to reach the heart of the material without burying its opening, and how to reveal its deepest character without allowing that depth to dominate everything above it.</p>
<p class="mb-6">I will not pretend I understood any of this when I began.</p>
<p class="mb-6">I didn't.</p>
<p class="mb-6">Those lessons came from the pot.</p>
<p class="mb-6">From mistakes, from beautiful surprises, from oils that made me smile, and from others that made me wonder what I had done wrong.</p>
<p class="mb-6">From distillations that taught me what to repeat, and others that taught me what never to do again.</p>
<p class="mb-6">Little by little, I stopped thinking of distillation as simply extracting oil from wood.</p>
<p class="mb-6">I began thinking of it as listening.</p>
<p class="mb-6">The wood was already telling me what it wanted to become.</p>
<p class="mb-6">My responsibility was to learn how to hear it.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>The Search Had Begun</strong></p>
<p class="mb-6">That first distillation didn't teach me that I knew how to distill.</p>
<p class="mb-6">Quite the opposite.</p>
<p class="mb-6">It taught me how much I still had to learn.</p>
<p class="mb-6">But more importantly, it gave me hope.</p>
<p class="mb-6">For the first time, I knew that the answer to the question I had been carrying since 2012 might actually exist.</p>
<p class="mb-6">An oud oil could remind me of the wood. An oud oil could carry its own balance. An oud oil could stand alone.</p>
<p class="mb-6">And perhaps, with enough patience, I could learn how to preserve more and more of what made the original material extraordinary.</p>
<p class="mb-6">I had started because I wanted certainty.</p>
<p class="mb-6">Then I wanted more oil.</p>
<p class="mb-6">Soon, I would want understanding.</p>
<p class="mb-6">And that would become something much bigger than I expected.</p>
<p class="mb-6">One distillation became another, then another. I experimented. I made mistakes. I changed things.</p>
<p class="mb-6">Sometimes I chased the wrong things. Sometimes a distillation taught me more through failure than another taught me through success.</p>
<p class="mb-6">Eventually, the number of distillations would pass fifty.</p>
<p class="mb-6">But somewhere along the way, the search itself began to change.</p>
<p class="mb-6">In the beginning, I thought I was learning how to control agarwood.</p>
<p class="mb-6">Years later, I would understand almost the opposite.</p>
<p class="mb-6">The greatest lesson was learning when not to control it.</p>
<p class="mb-6">Learning when to stop chasing yield. Learning when to stop trying to force a particular character from the wood. Learning to respect what was already there.</p>
<p class="mb-6">But those lessons came later.</p>
<p class="mb-6">Standing beside that first distillation, holding less than ten grams of oil from twenty kilograms of agarwood, I knew none of that.</p>
<p class="mb-6">I only knew one thing.</p>
<p class="mb-6">I wanted to do it again.</p>
<p class="mb-6">The question that began with a bottle in Sharjah had finally brought me to the distillation pot.</p>
<p class="mb-6">And from that day onwards, my search truly began.</p>`,
      isChapter: true
    },
    {
      id: 'ch7',
      title: 'Every Forest Has a Voice',
      content: `<p class="mb-6"><strong>A Different Kind of Hunt</strong></p>
<p class="mb-6">There was a time when I hunted agarwood for a very different reason. Back then, I was a trader.</p>
<p class="mb-6">Like most traders, I looked for wood that was completely dry. Dry agarwood was easier to buy, easier to transport and easier to sell. There were fewer surprises. You didn't have to worry about losing weight as it dried or think about how recently it had been harvested. It was simply good business.</p>
<p class="mb-6">But something slowly changed after I began distilling. I stopped looking at agarwood only as a product. I started looking at it as a possibility.</p>
<p class="mb-6">Today, when I search for material to distill, I often find myself drawn towards something that many traders try to avoid: freshly harvested agarwood, wood that still carries a little moisture.</p>
<p class="mb-6">To many people, that moisture is a disadvantage. To me, it is a conversation.</p>
<p class="mb-6">When freshly harvested agarwood is resinous enough, it can reveal something extraordinary. You can smell the resin while the wood is still moist. There is a freshness to that aroma that can tell me something about what might be waiting inside the material. Before the wood ever enters my distillation pot, it begins giving me clues about the oil it might become.</p>
<p class="mb-6">That has completely changed the way I hunt.</p>
<p class="mb-6">Years ago, I might have looked at moisture and thought about how much weight I could lose as the wood dried. Today, sometimes I smell that same moisture and think about what I might lose if I allow that aroma to disappear.</p>
<p class="mb-6">I want to preserve it. Not exactly as it is, because distillation will always transform a material, but I want to understand what nature has placed there and carry as much of its identity as possible into the finished oil.</p>
<p class="mb-6">That has become one of the guiding principles behind the way I distill. I don't believe a distiller should force the wood to become something it was never meant to be.</p>
<p class="mb-6">Every forest already has its own voice.</p>
<p class="mb-6">Our responsibility is to learn how to listen.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>The Philippines</strong></p>
<p class="mb-6">Around 2019, Filipino oud had become one of the most sought-after origins in the market. It was rare, expensive, and everyone wanted it. And I understood why. Filipino agarwood could be extraordinarily beautiful.</p>
<p class="mb-6">At the time, I was already collecting it whenever I had the opportunity. I wasn't trading heavily in Filipino oud, so gathering enough material for distillation wasn't easy. Whenever I found high-grade shavings, dust or smaller pieces that I believed were worthy of distillation, I kept them. Little by little, I was building a collection.</p>
<p class="mb-6">At the same time, I was smelling Filipino oud oils. I remember smelling oils from around three different sources. Some people told me they had distilled the oils themselves. Others said theirs had come from highly respected distilleries.</p>
<p class="mb-6">Some of the oils were pleasant. Some were good. But none of them satisfied me.</p>
<p class="mb-6">There was one problem I couldn't ignore.</p>
<p class="mb-6">They didn't remind me of Filipino agarwood.</p>
<p class="mb-6">And by then, I knew that wood very well. When you place a beautiful piece of high-grade Leyte agarwood onto charcoal, it has an unmistakable identity. There is a moment when the heat reaches the resin and that first aroma rises.</p>
<p class="mb-6">That was the smell I knew.</p>
<p class="mb-6">That was the smell I was searching for.</p>
<p class="mb-6">But I couldn't find it in the oils.</p>
<p class="mb-6">It bothered me. Here was an origin considered one of the finest agarwoods in the market, yet the oils I was smelling didn't seem to do justice to the wood.</p>
<p class="mb-6">It was almost as if you had taken one of the greatest materials in the world and produced an oil that wouldn't even make your list of the greatest oils.</p>
<p class="mb-6">The same question that had followed me since that bottle of Sri Lankan oud in 2012 appeared once again.</p>
<p class="mb-6">Where is the wood?</p>
<p class="mb-6">Eventually, I became impatient. I didn't want to keep smelling other people's answers.</p>
<p class="mb-6">I wanted my own.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>Six Kilograms</strong></p>
<p class="mb-6">By then, I had collected around seven or eight kilograms of Filipino shavings, dust and other material intended for distillation. I could have waited. That would have been the sensible thing to do.</p>
<p class="mb-6">But sitting in my collection was something else.</p>
<p class="mb-6">Around six kilograms of extremely high-grade Filipino burning wood.</p>
<p class="mb-6">Beautiful material.</p>
<p class="mb-6">At the time, wood of that quality was already worth around six or seven thousand dirhams per kilogram. Today, the same quality could be worth around thirty or thirty-five thousand dirhams per kilogram, close to ten thousand dollars.</p>
<p class="mb-6">It was not distillation material. It was the kind of agarwood you put on charcoal and enjoy exactly as nature created it.</p>
<p class="mb-6">From a business perspective, putting six kilograms of it into a distillation pot made very little sense.</p>
<p class="mb-6">But I wanted an answer more than I wanted the wood.</p>
<p class="mb-6">I wanted to know what Filipino oud oil was truly capable of becoming. And I knew there was only one way I would completely trust the answer.</p>
<p class="mb-6">I had to know exactly what went into the pot.</p>
<p class="mb-6">So I took six kilograms of beautiful burning-grade Filipino agarwood and distilled it.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>The Answer</strong></p>
<p class="mb-6">When the oil finally appeared, I knew.</p>
<p class="mb-6">I smelled it, and I smiled.</p>
<p class="mb-6">I remember being genuinely happy. For the first time, I wasn't smelling an oil that someone had told me was Filipino. I was smelling something I recognised.</p>
<p class="mb-6">It carried the character I knew from beautiful Leyte agarwood on charcoal. That opening, that identity, that unmistakable feeling of the wood itself.</p>
<p class="mb-6">I finally thought:</p>
<p class="mb-6">This is Filipino oud oil.</p>
<p class="mb-6">At that moment, I was incredibly proud of what I had made. Perhaps I was biased. It was my own distillation, after all. But standing there at that time, I genuinely believed it was the finest Filipino oud oil I had ever smelled.</p>
<p class="mb-6">Perhaps even the finest expression of Filipino oud oil I could imagine.</p>
<p class="mb-6">Not because I believed I had suddenly become a great distiller, but because I knew the wood. I knew what I had put into the pot. And now I could recognise that same identity inside the oil.</p>
<p class="mb-6">The question I had been asking for years had received another answer.</p>
<p class="mb-6">It was possible. The wood could survive. Its identity could survive. Its origin could survive.</p>
<p class="mb-6">For a moment, I was simply happy.</p>
<p class="mb-6">Then another thought entered my mind.</p>
<p class="mb-6">How on earth am I ever going to afford to do this again?</p>
<p class="mb-6">That was the problem.</p>
<p class="mb-6">I had proved something to myself, but I had proved it using six kilograms of agarwood that most people would never dream of putting into a distillation pot.</p>
<p class="mb-6">I couldn't help but laugh. Sometimes the experiments that teach you the most are the ones that make the least financial sense.</p>
<p class="mb-6">That Filipino distillation stayed with me, not only because of how beautiful the oil was, but because it changed the way I thought about raw material forever.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>The Wood Comes First</strong></p>
<p class="mb-6">Over the years, I experimented with many aspects of distillation. I tried different methods, different preparations, different soaking periods and different approaches to the process.</p>
<p class="mb-6">I wanted to understand what changed an oil. What gave it depth. What preserved its brightness. What allowed the heart of the material to emerge. And what destroyed it.</p>
<p class="mb-6">Eventually, one lesson became more important than almost everything else.</p>
<p class="mb-6">You have to be true to the wood.</p>
<p class="mb-6">There is a temptation in distillation to chase things: more yield, more depth, a particular character, a particular style.</p>
<p class="mb-6">But the more I distilled, the more I realised how dangerous that thinking could become. If you spend all your time trying to force an oil to become what you want, eventually you stop listening to what the material actually is.</p>
<p class="mb-6">Agarwood already has its own composition, its own opening, its own heart and its own depth.</p>
<p class="mb-6">The job of the distiller is not simply to extract the loudest part of it.</p>
<p class="mb-6">Sometimes incredible material can be distilled and only its most obvious notes are captured. The oil may still be beautiful, but something is missing.</p>
<p class="mb-6">The heart of the wood never fully appears.</p>
<p class="mb-6">I wanted more than that.</p>
<p class="mb-6">I wanted the brightness. I wanted the heart. I wanted the depth.</p>
<p class="mb-6">But I wanted them to live together.</p>
<p class="mb-6">Not for the base to destroy the heart. Not for the heart to bury the opening. Not for one part of the wood to become so dominant that everything else disappeared.</p>
<p class="mb-6">It took years of distillation before I began to understand how to approach that balance.</p>
<p class="mb-6">And even today, I am still learning.</p>
<p class="mb-6">Because the moment you believe you have completely understood agarwood, another piece proves you wrong.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>I Went Looking for Malino</strong></p>
<p class="mb-6">One of my more recent discoveries happened almost by accident.</p>
<p class="mb-6">I wasn't searching for material to distill. I was looking for agarwood to trade.</p>
<p class="mb-6">More specifically, I was looking for Malino.</p>
<p class="mb-6">I have always loved beautiful Malino agarwood, and many of my customers love it too. But within Malino, I have my own preferences. Whenever possible, I look for material from Mentarang. That is the character I personally search for.</p>
<p class="mb-6">One of my suppliers had just returned from Indonesia to Dubai with a large quantity of agarwood. He was a major supplier, and I knew the way he worked. He would buy large lots in Indonesia, bring them to Dubai, then segregate the material into different grades before selling it.</p>
<p class="mb-6">He showed me some Malino.</p>
<p class="mb-6">It was good, but it wasn't exactly what I wanted. The batch was mixed. Some of it carried the Mentarang character I was looking for, but other pieces leaned in another direction. To my nose, parts of it almost reminded me more of Malaysian agarwood.</p>
<p class="mb-6">So I kept looking.</p>
<p class="mb-6">Then he showed me something else.</p>
<p class="mb-6">Pontianak.</p>
<p class="mb-6">Immediately, I became interested.</p>
<p class="mb-6">This was not ordinary Pontianak. It was extremely high-grade material. And more importantly, there was a consistency to it. Every piece carried that genuine Pontianak identity.</p>
<p class="mb-6">I already had Pontianak in my collection for trading, so the origin itself wasn't new to me. But this particular lot was exceptional.</p>
<p class="mb-6">I asked my supplier:</p>
<p class="mb-6">"What other qualities do you have from this same material?"</p>
<p class="mb-6">Because I knew there would be more.</p>
<p class="mb-6">He began showing me the different grades.</p>
<p class="mb-6">And suddenly I was no longer thinking only like a trader.</p>
<p class="mb-6">The distiller inside me had appeared again.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>What Others Might Call Leftovers</strong></p>
<p class="mb-6">I bought around four kilograms of the highest-grade Pontianak he had. There were beautiful sinking-grade pieces among it.</p>
<p class="mb-6">This was serious agarwood, the kind of material I wanted to preserve as burning wood.</p>
<p class="mb-6">But I also bought the smaller broken pieces from the same batch. Then we began cleaning the highest-grade material.</p>
<p class="mb-6">I have always been extremely particular about cleaning agarwood. That comes from my father. If a beautiful piece is going to leave my hands, I want it prepared properly.</p>
<p class="mb-6">From approximately 4.6 kilograms of material, I ended up with less than two kilograms of shavings from the cleaning process.</p>
<p class="mb-6">To many people, those shavings might simply be what remained after preparing the valuable wood.</p>
<p class="mb-6">To me, they were something completely different.</p>
<p class="mb-6">They came from the highest-grade Pontianak I had just bought. I knew exactly where they came from.</p>
<p class="mb-6">More importantly, I knew exactly what the original wood smelled like.</p>
<p class="mb-6">I had the reference sitting in front of me.</p>
<p class="mb-6">So I combined those shavings with the smaller broken pieces from the same origin.</p>
<p class="mb-6">And I distilled them.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>Another Forest Speaks</strong></p>
<p class="mb-6">When I smelled the oil, my reaction was immediate.</p>
<p class="mb-6">Wow. I didn't know Pontianak could do that.</p>
<p class="mb-6">It was beautiful.</p>
<p class="mb-6">But what excited me most was not simply that it smelled good. It reminded me of the highest-grade Pontianak wood itself.</p>
<p class="mb-6">I didn't have to imagine what exceptional Pontianak was supposed to smell like. I had it. I had sinking-grade pieces from the same material. I knew their aroma.</p>
<p class="mb-6">And now I could find that character again inside the oil.</p>
<p class="mb-6">That was the moment that excited me.</p>
<p class="mb-6">There was something else that surprised me too.</p>
<p class="mb-6">The oil somehow reminded me of Filipino oud.</p>
<p class="mb-6">I hadn't expected that at all.</p>
<p class="mb-6">And that is one of the reasons I love this material so much. Just when you think you understand the boundaries between origins, nature shows you another connection.</p>
<p class="mb-6">Pontianak had surprised me.</p>
<p class="mb-6">And instead of satisfying my curiosity, it created another obsession.</p>
<p class="mb-6">Now I want to go back. I want to hunt specifically for exceptional Pontianak.</p>
<p class="mb-6">Not simply shavings. Not simply broken pieces.</p>
<p class="mb-6">I want to find the kind of Pontianak that would normally be considered too beautiful and too valuable to distill. The kind of wood that makes me stop when I smell it.</p>
<p class="mb-6">And then I want to make that difficult decision again.</p>
<p class="mb-6">Put it into the pot.</p>
<p class="mb-6">Because I want to know what else that forest is capable of saying.</p>
<p class="mb-6">⸻</p>

<p class="mb-6"><strong>Every Forest Has a Voice</strong></p>
<p class="mb-6">Today, I feel as though I have returned to hunting.</p>
<p class="mb-6">But I am hunting differently.</p>
<p class="mb-6">Years ago, I searched for extraordinary agarwood because I wanted to sell extraordinary agarwood. Today, I sometimes search for extraordinary agarwood because I want to know what it can become.</p>
<p class="mb-6">Even the way I think about origins has changed.</p>
<p class="mb-6">Saying "Indonesian oud" is no longer enough for me. Even saying "Kalimantan" can feel too broad.</p>
<p class="mb-6">I want to go deeper.</p>
<p class="mb-6">Malino. Mentarang. Pontianak. Pekanbaru.</p>
<p class="mb-6">Different regions, different forests, different identities.</p>
<p class="mb-6">I want to separate them. Distill them independently. Study them. Smell the wood beside the oil. Understand what survived. Understand what changed.</p>
<p class="mb-6">And then move to the next one.</p>
<p class="mb-6">That is what excites me today.</p>
<p class="mb-6">I am not trying to create one oud oil and call it perfect. I don't think I am searching for the perfect oud oil anymore.</p>
<p class="mb-6">I am searching for the truest expression of each material.</p>
<p class="mb-6">I want to create oils that can become references.</p>
<p class="mb-6">An oil that someone can smell and understand:</p>
<p class="mb-6">This is what exceptional Pontianak can become.</p>
<p class="mb-6">This is what beautiful Leyte agarwood can become.</p>
<p class="mb-6">This is what this forest, from this place, at this moment in time, was capable of producing.</p>
<p class="mb-6">Because there is something my father once said that I understand more deeply with every passing year:</p>
<p class="mb-6">"That grade of wood no longer exists."</p>
<p class="mb-6">When I first heard those words, I understood them as a businessman.</p>
<p class="mb-6">Today, I understand them as a distiller.</p>
<p class="mb-6">Forests change. Materials disappear. Certain grades become almost impossible to find. And sometimes, by the time the world understands how extraordinary something was, it is already gone.</p>
<p class="mb-6">Perhaps that gives distillation another purpose.</p>
<p class="mb-6">Preservation.</p>
<p class="mb-6">Not preservation in the literal sense. An oil can never replace the wood.</p>
<p class="mb-6">But it can preserve an expression of it.</p>
<p class="mb-6">A moment. A character. A voice that belonged to a particular material from a particular place at a particular time.</p>
<p class="mb-6">That is why I still hunt.</p>
<p class="mb-6">Only now, the hunt feels different.</p>
<p class="mb-6">I am no longer looking only for what I can sell. Sometimes I am looking for a piece of agarwood that makes me curious enough to sacrifice it.</p>
<p class="mb-6">To take something already extraordinary and place it into the pot simply because I need to know what is hiding inside.</p>
<p class="mb-6">That curiosity has cost me a great deal of beautiful agarwood over the years. But it has also given me some of the greatest oils I have ever smelled.</p>
<p class="mb-6">And after all these years, agarwood can still surprise me.</p>
<p class="mb-6">I hope it always does.</p>
<p class="mb-6">Because the day I believe I know exactly what a forest will give me is probably the day I should stop distilling.</p>
<p class="mb-6">Every forest has its own voice.</p>
<p class="mb-6">Every extraordinary piece has something to say.</p>
<p class="mb-6">My job is not to give it a voice.</p>
<p class="mb-6">My job is to listen carefully enough, and distill honestly enough, that when someone eventually opens the bottle…</p>
<p class="mb-6">They can hear it too.</p>`
    }
  ]
};

// Storage keys for localStorage
const STORAGE_KEY = 'nuhoud-story-portal';
const TEXT_SIZE_KEY = 'nuhoud-text-size';
const DARK_MODE_KEY = 'nuhoud-dark-mode';

// Text size options
const TEXT_SIZES = [
  { label: 'Small', value: 'small', fontSize: '16px', lineHeight: '1.9' },
  { label: 'Default', value: 'default', fontSize: '18px', lineHeight: '2' },
  { label: 'Large', value: 'large', fontSize: '20px', lineHeight: '2.1' },
  { label: 'X-Large', value: 'xlarge', fontSize: '22px', lineHeight: '2.2' },
];

// Load text size from localStorage
const loadTextSize = () => {
  try {
    const stored = localStorage.getItem(TEXT_SIZE_KEY);
    if (stored && TEXT_SIZES.find(s => s.value === stored)) {
      return stored;
    }
  } catch (e) {}
  return 'default';
};

// Save text size to localStorage
const saveTextSize = (size) => {
  try {
    localStorage.setItem(TEXT_SIZE_KEY, size);
  } catch (e) {}
};

// Load dark mode from localStorage
const loadDarkMode = () => {
  try {
    const stored = localStorage.getItem(DARK_MODE_KEY);
    return stored === 'true';
  } catch (e) {}
  return false;
};

// Save dark mode to localStorage
const saveDarkMode = (isDark) => {
  try {
    localStorage.setItem(DARK_MODE_KEY, isDark.toString());
  } catch (e) {}
};

// Load story from localStorage or use default
const loadStory = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Ensure we have chapters
      if (parsed.chapters && Array.isArray(parsed.chapters)) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Failed to load story from localStorage:', e);
  }
  return DEFAULT_STORY;
};

// Save story to localStorage
const saveStory = (story) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(story));
  } catch (e) {
    console.warn('Failed to save story to localStorage:', e);
  }
};

// Reset story to default
const resetStory = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.warn('Failed to reset localStorage:', e);
  }
  return DEFAULT_STORY;
};

export default function StoryPortal() {
  const [story, setStory] = useState(() => loadStory());
  const [activeChapter, setActiveChapter] = useState(0);
  const [isReadMode, setIsReadMode] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingContent, setEditingContent] = useState('');
  const [showChapterNav, setShowChapterNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showChapterList, setShowChapterList] = useState(false);
  const [textSize, setTextSize] = useState(() => loadTextSize());
  const [isDarkMode, setIsDarkMode] = useState(() => loadDarkMode());
  const contentRef = useRef(null);
  const isEditingRef = useRef(false);

  // Get current text size settings
  const currentTextSize = TEXT_SIZES.find(s => s.value === textSize) || TEXT_SIZES[1];

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setShowChapterNav(false);
        setShowChapterList(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Save story whenever it changes
  useEffect(() => {
    saveStory(story);
  }, [story]);

  // Scroll to top when chapter changes
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [activeChapter]);

  // Replace history so back button goes to nuhoud.com
  useEffect(() => {
    window.history.replaceState(null, '', window.location.href);
  }, []);

  // Enter edit mode
  const handleEnterEdit = () => {
    isEditingRef.current = true;
    setEditingContent(story.chapters[activeChapter]?.content || '');
    setIsEditMode(true);
  };

  // Cancel editing
  const handleCancelEdit = () => {
    isEditingRef.current = false;
    setEditingContent('');
    setIsEditMode(false);
  };

  // Save content
  const handleSave = () => {
    const updatedChapters = [...story.chapters];
    updatedChapters[activeChapter] = {
      ...updatedChapters[activeChapter],
      content: editingContent
    };
    setStory({ ...story, chapters: updatedChapters });
    isEditingRef.current = false;
    setIsEditMode(false);
  };

  // Navigate chapters
  const goToChapter = (index) => {
    if (isEditingRef.current) return;
    setActiveChapter(index);
    setShowChapterNav(false);
    setShowChapterList(false);
  };

  const nextChapter = () => {
    if (isEditingRef.current) return;
    if (activeChapter < story.chapters.length - 1) {
      setActiveChapter(activeChapter + 1);
    }
  };

  const prevChapter = () => {
    if (isEditingRef.current) return;
    if (activeChapter > 0) {
      setActiveChapter(activeChapter - 1);
    }
  };

  // Reset to default
  const handleReset = () => {
    if (window.confirm('Reset all content to default? This will erase all your changes.')) {
      setStory(resetStory());
      setActiveChapter(0);
      setIsEditMode(false);
    }
  };

  const currentChapter = story.chapters[activeChapter];

  // Dark mode styles
  const bgColor = isDarkMode ? '#1A1A1A' : '#FFFFFF';
  const textColor = isDarkMode ? '#E8E0D5' : '#5A4A38';
  const headingColor = isDarkMode ? '#F5F0E8' : '#2A2018';
  const mutedColor = isDarkMode ? '#8A8078' : '#9A8A78';
  const borderColor = isDarkMode ? 'rgba(154,114,53,0.2)' : 'rgba(154,114,53,0.08)';
  const headerBg = isDarkMode ? 'rgba(26,26,26,0.98)' : 'rgba(255,255,255,0.98)';
  const navGradient = isDarkMode
    ? 'linear-gradient(to top, #1A1A1A 60%, transparent)'
    : 'linear-gradient(to top, #FFFFFF 60%, transparent)';

  return (
    <div className="min-h-screen" style={{background: bgColor}}>
      {/* Reading Progress Bar */}
      <div style={{position:'fixed', top:0, left:0, right:0, height:'3px', zIndex:100, background:'transparent'}}>
        <div style={{
          height:'100%',
          width:`${((activeChapter + 1) / story.chapters.length) * 100}%`,
          background:'linear-gradient(to right, #9A7235, #C9A96E)',
          transition:'width 0.5s ease'
        }}/>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50" style={{background: bgColor, borderBottom:`1px solid ${borderColor}`}}>
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="https://nuhoud.com/" className="text-sm tracking-widest uppercase" style={{fontFamily:'DM Sans, sans-serif', color: mutedColor, fontWeight:500}}>
              ← Back
            </a>
            <h1 className="font-light tracking-[0.25em]" style={{fontFamily:'Cormorant Garamond, serif', fontWeight:'600', color: headingColor, fontSize:'26px'}}>{story.title}</h1>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => {
                const idx = TEXT_SIZES.findIndex(s => s.value === textSize);
                if (idx > 0) {
                  const newSize = TEXT_SIZES[idx - 1].value;
                  setTextSize(newSize);
                  saveTextSize(newSize);
                }
              }}
              disabled={textSize === 'small'}
              className="w-7 h-7 flex items-center justify-center rounded transition-colors"
              style={{color: mutedColor, opacity: textSize === 'small' ? 0.3 : 1}}
              aria-label="Decrease text size"
            >
              <span style={{fontSize:'12px', fontWeight:'bold'}}>A−</span>
            </button>
            <button
              onClick={() => {
                const idx = TEXT_SIZES.findIndex(s => s.value === textSize);
                if (idx < TEXT_SIZES.length - 1) {
                  const newSize = TEXT_SIZES[idx + 1].value;
                  setTextSize(newSize);
                  saveTextSize(newSize);
                }
              }}
              disabled={textSize === 'xlarge'}
              className="w-7 h-7 flex items-center justify-center rounded transition-colors"
              style={{color: mutedColor, opacity: textSize === 'xlarge' ? 0.3 : 1}}
              aria-label="Increase text size"
            >
              <span style={{fontSize:'16px', fontWeight:'bold'}}>A+</span>
            </button>
            <button
              onClick={() => {
                const newMode = !isDarkMode;
                setIsDarkMode(newMode);
                saveDarkMode(newMode);
              }}
              className="w-8 h-7 flex items-center justify-center rounded transition-colors"
              style={{color: mutedColor, background: isDarkMode ? 'rgba(154,114,53,0.15)' : 'transparent'}}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <span style={{fontSize:'16px'}}>☀</span> : <span style={{fontSize:'14px'}}>◐</span>}
            </button>
          </div>
          <div className="flex items-center gap-2">
            {/* Reading Controls */}
            <div className="hidden sm:flex items-center gap-1 mr-2" style={{borderRight:`1px solid ${borderColor}`, paddingRight:'12px'}}>
              {/* Text Size Controls */}
              <div className="flex items-center gap-0.5">
                <button
                  onClick={() => {
                    const idx = TEXT_SIZES.findIndex(s => s.value === textSize);
                    if (idx > 0) {
                      const newSize = TEXT_SIZES[idx - 1].value;
                      setTextSize(newSize);
                      saveTextSize(newSize);
                    }
                  }}
                  disabled={textSize === 'small'}
                  className="w-7 h-7 flex items-center justify-center rounded transition-colors"
                  style={{
                    color: mutedColor,
                    opacity: textSize === 'small' ? 0.3 : 1
                  }}
                  aria-label="Decrease text size"
                >
                  <span style={{fontSize:'12px', fontWeight:'bold'}}>A−</span>
                </button>
                <button
                  onClick={() => {
                    const idx = TEXT_SIZES.findIndex(s => s.value === textSize);
                    if (idx < TEXT_SIZES.length - 1) {
                      const newSize = TEXT_SIZES[idx + 1].value;
                      setTextSize(newSize);
                      saveTextSize(newSize);
                    }
                  }}
                  disabled={textSize === 'xlarge'}
                  className="w-7 h-7 flex items-center justify-center rounded transition-colors"
                  style={{
                    color: mutedColor,
                    opacity: textSize === 'xlarge' ? 0.3 : 1
                  }}
                  aria-label="Increase text size"
                >
                  <span style={{fontSize:'16px', fontWeight:'bold'}}>A+</span>
                </button>
              </div>
              {/* Divider */}
              <div className="w-px h-5 mx-2" style={{background:borderColor}} />
              {/* Dark Mode Toggle */}
              <button
                onClick={() => {
                  const newMode = !isDarkMode;
                  setIsDarkMode(newMode);
                  saveDarkMode(newMode);
                }}
                className="w-8 h-7 flex items-center justify-center rounded transition-colors"
                style={{color: mutedColor, background: isDarkMode ? 'rgba(154,114,53,0.15)' : 'transparent'}}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? (
                  <span style={{fontSize:'16px'}}>☀</span>
                ) : (
                  <span style={{fontSize:'14px'}}>◐</span>
                )}
              </button>
            </div>
            <button
              onClick={() => setIsReadMode(!isReadMode)}
              className="p-2 rounded-lg transition-colors"
              style={{
                background: isReadMode ? 'rgba(154,114,53,0.1)' : 'transparent',
                color: isReadMode ? '#9A7235' : '#9A8A78'
              }}
              aria-label="Toggle read mode"
            >
              <BookOpen size={20} />
            </button>
            {isReadMode && (
              <>
                <button
                  onClick={handleEnterEdit}
                  className="p-2 rounded-lg transition-colors"
                  style={{color: mutedColor}}
                  aria-label="Edit chapter"
                >
                  <Edit3 size={20} />
                </button>
                <button
                  onClick={handleReset}
                  className="p-2 rounded-lg transition-colors"
                  style={{color: mutedColor}}
                  aria-label="Reset to default"
                >
                  <Trash2 size={20} />
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Chapter List */}
      {isMobile && (
        <AnimatePresence>
          {showChapterList && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="fixed top-24 left-0 right-0 z-40"
              style={{background:bgColor, borderBottom:`1px solid ${borderColor}`}}
            >
              <div className="max-h-[50vh] overflow-y-auto p-4">
                {story.chapters.map((chapter, index) => (
                  <button
                    key={chapter.id}
                    onClick={() => goToChapter(index)}
                    className="block w-full text-left py-3 px-2 rounded-lg transition-colors"
                    style={{
                      background: index === activeChapter ? 'rgba(154,114,53,0.1)' : 'transparent',
                      color: index === activeChapter ? '#2A2018' : '#9A8A78'
                    }}
                  >
                    <span className="text-xs mr-2" style={{color:'rgba(154,114,53,0.4)'}}>{index + 1}.</span>
                    {chapter.title}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Desktop Sidebar */}
      {!isMobile && (
        <aside className="fixed left-0 top-28 bottom-0 w-52 overflow-y-auto z-30" style={{background:'rgba(255,253,247,0.5)', backdropFilter:'blur(8px)'}}>
          <nav className="p-4 space-y-1">
            {story.chapters.map((chapter, index) => (
              <button
                key={chapter.id}
                onClick={() => goToChapter(index)}
                className="block w-full text-left py-2.5 px-3 rounded-lg text-sm transition-colors"
                style={{
                  background: index === activeChapter ? 'rgba(154,114,53,0.1)' : 'transparent',
                  color: index === activeChapter ? headingColor : mutedColor,
                  fontFamily:'Cormorant Garamond,serif'
                }}
              >
                <span className="mr-2" style={{color: index === activeChapter ? 'rgba(154,114,53,0.5)' : mutedColor}}>{index + 1}.</span>
                {chapter.title}
              </button>
            ))}
          </nav>
        </aside>
      )}

      {/* Main Content */}
      <main className={`pt-32 ${!isMobile ? 'pl-52' : ''}`}>
        <div className="max-w-3xl mx-auto px-6 pb-32">
          {/* Edit Mode */}
          {isEditMode ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              <textarea
                value={editingContent}
                onChange={(e) => setEditingContent(e.target.value)}
                className="w-full h-[60vh] rounded-lg p-4 leading-relaxed resize-none focus:outline-none"
                style={{
                  background: isDarkMode ? 'rgba(30,30,30,0.9)' : 'rgba(154,114,53,0.04)',
                  border: `1px solid ${borderColor}`,
                  color: textColor,
                  fontFamily:'Cormorant Garamond,serif',
                  fontSize:'17px'
                }}
                placeholder="Edit chapter content..."
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={handleCancelEdit}
                  className="px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                  style={{background:'rgba(154,114,53,0.08)', color:'#5A4A38'}}
                >
                  <X size={18} />
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                  style={{background:'#9A7235', color:'#FFFFFF'}}
                >
                  <Save size={18} />
                  Save
                </button>
              </div>
            </motion.div>
          ) : (
            /* Read Mode */
            <motion.div
              key={activeChapter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              ref={contentRef}
              className="prose prose-lg max-w-none"
            >
              {/* Chapter Header */}
              <div style={{marginBottom: '2rem', textAlign: 'center'}}>
                <div style={{fontFamily:'Cormorant Garamond, serif', fontWeight:'600', color:'#9A7235', fontSize:'13px', letterSpacing:'0.25em', textTransform:'uppercase', marginBottom:'0.75rem'}}>
                  Chapter {activeChapter + 1}
                </div>
                <h2 style={{fontFamily:'Cormorant Garamond, serif', fontWeight:'600', fontSize:'clamp(28px, 5vw, 40px)', color: headingColor, letterSpacing:'0.02em', lineHeight:1.2}}>
                  {currentChapter?.title}
                </h2>
                <div style={{width:'40px', height:'1px', background:'#9A7235', margin:'1.25rem auto 0', opacity:0.6}}></div>
              </div>

              <div
                className="chapter-content"
                style={{
                  fontFamily:'DM Sans, sans-serif',
                  color: textColor,
                  lineHeight: currentTextSize.lineHeight,
                  fontSize: currentTextSize.fontSize,
                  fontWeight: '400',
                  letterSpacing: '0.01em'
                }}
                dangerouslySetInnerHTML={{ __html: currentChapter?.content || '' }}
              />
              <style>{`
                .chapter-content p strong {
                  font-family: 'Cormorant Garamond', serif;
                  font-weight: 600;
                  font-size: 1.5em;
                  display: block;
                  margin-top: 2.5rem;
                  margin-bottom: 1rem;
                  line-height: 1.3;
                  letter-spacing: 0.01em;
                }
                .chapter-content p:first-of-type::first-letter {
                  font-family: 'Cormorant Garamond', serif;
                  font-size: 4em;
                  font-weight: 600;
                  float: left;
                  line-height: 0.8;
                  margin-right: 0.1em;
                  margin-top: 0.1em;
                  color: #9A7235;
                }
                .chapter-content p:has(strong:first-child) {
                  margin-top: 0;
                }
                .chapter-content p:has(strong:first-child)::first-letter {
                  font-size: 1em;
                  float: none;
                  margin: 0;
                  color: inherit;
                }
                .chapter-content p:has(+ p strong) {
                  margin-bottom: 0;
                }
                .chapter-content p:empty:has(+ p strong) {
                  display: none;
                }
                .chapter-content p:empty {
                  text-align: center;
                  margin: 2rem 0;
                }
                .chapter-content p:empty::before {
                  content: '— ✦ —';
                  color: #9A7235;
                  opacity: 0.5;
                  font-size: 14px;
                  letter-spacing: 0.3em;
                }
              `}</style>
            </motion.div>
          )}
        </div>
      </main>

      {/* Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50" style={{background: navGradient, paddingTop:'80px', paddingBottom:'20px'}}>
        <div className={`max-w-4xl mx-auto px-4 flex items-center justify-between ${!isMobile ? 'pr-52' : ''}`}>
          <button
            onClick={prevChapter}
            disabled={activeChapter === 0 || isEditingRef.current}
            className="p-3 rounded-full transition-all"
            style={{
              opacity: activeChapter === 0 ? 0.3 : 1,
              color: isDarkMode ? '#C9A96E' : '#9A7235',
              background: activeChapter === 0 ? 'transparent' : isDarkMode ? 'rgba(201,169,110,0.1)' : 'rgba(154,114,53,0.05)'
            }}
            aria-label="Previous chapter"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Progress indicator */}
          <div className="flex items-center gap-1.5">
            {story.chapters.map((_, index) => (
              <button
                key={index}
                onClick={() => goToChapter(index)}
                disabled={isEditingRef.current}
                className="rounded-full transition-all"
                style={{
                  width: index === activeChapter ? '24px' : '8px',
                  height: '8px',
                  background: index === activeChapter ? '#9A7235' : index < activeChapter ? isDarkMode ? 'rgba(201,169,110,0.4)' : 'rgba(154,114,53,0.3)' : 'rgba(154,114,53,0.15)'
                }}
                aria-label={`Go to chapter ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextChapter}
            disabled={activeChapter === story.chapters.length - 1 || isEditingRef.current}
            className="p-3 rounded-full transition-all"
            style={{
              opacity: activeChapter === story.chapters.length - 1 ? 0.3 : 1,
              color: isDarkMode ? '#C9A96E' : '#9A7235',
              background: activeChapter === story.chapters.length - 1 ? 'transparent' : isDarkMode ? 'rgba(201,169,110,0.1)' : 'rgba(154,114,53,0.05)'
            }}
            aria-label="Next chapter"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </nav>
    </div>
  );
}
