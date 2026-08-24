import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
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
<p class="mb-6">I need to be honest about something.</p>
<p class="mb-6">When I was young. Really young. A teenager. The age when you start forming opinions about who you want to be.</p>
<p class="mb-6">I did not want anything to do with agarwood.</p>
<p class="mb-6">Not because I did not love it. Not because I did not know it. But because I had watched my father, and I had seen what it had taken from him.</p>
<p class="mb-6">The time. The energy. The way it consumed him.</p>
<p class="mb-6">I wanted to be something else. Someone else. I wanted a life that was not defined by resin and wood and the smell of something ancient.</p>
<p class="mb-6">I wanted normalcy. I wanted a job where I could come home and leave it at the office. I wanted evenings and weekends that belonged to me, not to the thing I was trying to escape.</p>
<p class="mb-6">This lasted longer than I would like to admit. Through university. Through my early twenties. Through the years when I was supposed to be figuring out who I was and what I wanted to do with my life.</p>
<p class="mb-6">I kept agarwood at a distance. I knew it. Of course I knew it, I had been raised in it. But I held myself apart from it. I treated it like an obligation rather than an opportunity.</p>
<p class="mb-6">My father never pushed.</p>
<p class="mb-6">That was his gift to me. He let me want something else. He let me struggle with it. He let me figure it out on my own time, in my own way, without pressure or guilt or manipulation.</p>
<p class="mb-6">He understood something that many parents do not: you cannot give someone a relationship with a thing. You can only give them the conditions in which a relationship might grow.</p>

<p class="mb-6"><strong>The Piece From Lamding</strong></p>
<p class="mb-6">There was a piece.</p>
<p class="mb-6">A specific piece of wood that changed everything for me.</p>
<p class="mb-6">It came from Lamding. A place I had heard of but never visited. Lamding is known for producing some of the finest agarwood in the world. The trees there grow in conditions that are almost perfect for the formation of the resin that becomes agarwood.</p>
<p class="mb-6">The wood from Lamding has a depth and complexity that is hard to find anywhere else.</p>
<p class="mb-6">The piece was not particularly large. Maybe the size of a fist.</p>
<p class="mb-6">But when I held it in my hands, something happened.</p>
<p class="mb-6">I do not know how to describe it except to say that I felt it. I felt the history of that piece. The years it had taken to form. The tree it had come from. The forest where that tree had grown. The hands that had found it and harvested it and brought it to market.</p>
<p class="mb-6">And I felt something else. Something I had not expected.</p>
<p class="mb-6">I felt recognised.</p>
<p class="mb-6">By the piece. By the wood itself. As if it had been waiting for someone to understand it.</p>
<p class="mb-6">And I was that someone.</p>
<p class="mb-6">This is not a rational experience. I know that. I cannot prove what I felt. I cannot measure it or document it or explain it in terms that would satisfy a sceptic.</p>
<p class="mb-6">But I felt it nonetheless.</p>
<p class="mb-6">And it was the beginning of everything.</p>

<p class="mb-6"><strong>The Ride Home</strong></p>
<p class="mb-6">After I held that piece from Lamding, I drove home.</p>
<p class="mb-6">It was late. The roads were quiet. And for the entire drive, I kept thinking about what had just happened. I kept returning to that moment in my father's warehouse when I held the piece and felt whatever it was that I felt.</p>
<p class="mb-6">I was forty minutes from home. Forty minutes of empty highway and streetlights and the quiet of the late evening.</p>
<p class="mb-6">And in those forty minutes, something shifted. Not dramatically. Not all at once. But fundamentally.</p>
<p class="mb-6">The thing I had been running from for most of my life. The thing I had kept at arm's length. The thing I had refused to embrace.</p>
<p class="mb-6">I started to see it differently.</p>
<p class="mb-6">I started to see it as mine.</p>
<p class="mb-6">Not an obligation. Not a burden. Not my father's dream or my grandfather's legacy or the weight of family expectation.</p>
<p class="mb-6">Mine.</p>
<p class="mb-6">Something I could claim. Something I could build. Something I could make my own.</p>
<p class="mb-6">By the time I pulled into my driveway, I was different.</p>
<p class="mb-6">I did not know exactly what I was going to do.</p>
<p class="mb-6">But I knew that I was done running.</p>

<p class="mb-6"><strong>When Smell Became Experience</strong></p>
<p class="mb-6">After that night, everything changed.</p>
<p class="mb-6">I started paying attention in a way I never had before. The pieces of wood that I had walked past my whole life. The ones I had ignored or taken for granted. I started seeing them. Really seeing them.</p>
<p class="mb-6">And when I got close enough to smell them, I started understanding them. Not intellectually. Not the way you understand a fact or a figure.</p>
<p class="mb-6">The way you understand a piece of music. The way you understand a work of art.</p>
<p class="mb-6">With your whole self.</p>
<p class="mb-6">Smell is the most direct of the senses. It bypasses the thinking brain and goes straight to the emotional centres.</p>
<p class="mb-6">When you smell something, you do not analyse it first. You feel it.</p>
<p class="mb-6">And the feeling comes before the interpretation. You smell. You react. And only then do you try to understand what you have smelled and why it made you feel what you felt.</p>
<p class="mb-6">This is what I had been missing. This is what agarwood had been waiting to show me.</p>
<p class="mb-6">Not the science of resin formation. Not the economics of the oud market. Not the history of the trade routes.</p>
<p class="mb-6">The experience.</p>
<p class="mb-6">The direct, unfiltered, emotional experience of encountering something extraordinary.</p>

<p class="mb-6"><strong>A Different Way of Smelling</strong></p>
<p class="mb-6">There is a way of smelling agarwood that most people never learn.</p>
<p class="mb-6">You do not just put your nose to it and inhale. You hold it at a distance first. You let the scent reach you in layers. You give it time.</p>
<p class="mb-6">You breathe in slowly, and then you breathe out slowly, and while you are breathing out, you breathe in again.</p>
<p class="mb-6">A secondary inhalation that catches the deeper notes. The ones that do not reveal themselves immediately.</p>
<p class="mb-6">This is how my father taught me to smell. He taught me patience. He taught me presence. He taught me that the first impression is almost never the true impression, and that the real beauty of a piece of agarwood is usually hidden beneath the surface.</p>
<p class="mb-6">I practise this method now every time I encounter a new piece.</p>
<p class="mb-6">It has become a ritual. A meditation.</p>
<p class="mb-6">The world falls away, and there is only the wood and my breath and the slow revelation of everything the wood has to offer.</p>
<p class="mb-6">This is what NUHOUD is built on. This is the foundation. Not the business. Not the brand.</p>
<p class="mb-6">The practice. The presence. The direct experience of something rare and beautiful and alive.</p>`,
      isChapter: true
    },
    {
      id: 'ch5',
      title: 'The Question That Changed Everything',
      content: `<p class="mb-6"><strong>A Friend With an Extraordinary Nose</strong></p>
<p class="mb-6">He had one of the finest noses in the business.</p>
<p class="mb-6">Not an exaggeration. This was widely recognised. In the world of agarwood, where the ability to assess quality through smell is the most valuable skill a person can have, my friend was exceptional even among experts.</p>
<p class="mb-6">People sought his opinion. They would bring him pieces and wait for his verdict. His word was trusted because his palate was true.</p>
<p class="mb-6">We had known each other for years. We had grown up in the same world. Attended the same gatherings. Argued about the same questions.</p>
<p class="mb-6">But it was one evening. One specific conversation. That changed the way I thought about everything.</p>
<p class="mb-6">We were at an event. A gathering of people who cared about agarwood. Collectors. Traders. Enthusiasts. A few craftsmen who had come to share and learn.</p>
<p class="mb-6">The room was full of wood. Pieces of various origins, various grades, various qualities, spread out on tables for examination.</p>
<p class="mb-6">I had been there for an hour, moving from piece to piece, doing what I always did: assessing, comparing, trying to understand.</p>
<p class="mb-6">My friend had been doing the same.</p>
<p class="mb-6">But when we reconvened. When we found each other in a quiet corner of the room. His face was different.</p>
<p class="mb-6">There was something there. A question. A puzzle. The look of a person who had encountered something they did not expect.</p>

<p class="mb-6"><strong>This Is Sri Lankan</strong></p>
<p class="mb-6">"Come here," he said. "I want you to smell this."</p>
<p class="mb-6">He led me to a piece I had actually seen earlier. A piece I had passed over, honestly.</p>
<p class="mb-6">It had looked ordinary. Not unremarkable, exactly, but not exceptional. The kind of piece that does not announce itself. The kind that requires attention to appreciate.</p>
<p class="mb-6">"Smell it," he said.</p>
<p class="mb-6">I leaned in. I gave it time. I used the method my father had taught me. The slow breath. The secondary inhalation. The patience that reveals what speed conceals.</p>
<p class="mb-6">And I smelled it.</p>
<p class="mb-6">What I smelled was extraordinary.</p>
<p class="mb-6">But what I smelled was also, to my nose, Vietnamese. Cambodian. One of the usual suspects. Something from Southeast Asia, certainly. Something from a place where agarwood grows and is harvested and finds its way to market.</p>
<p class="mb-6">"Well?" he said.</p>
<p class="mb-6">"Vietnamese," I said. "Maybe Cambodian. Very good quality. Complex. Worth a lot."</p>
<p class="mb-6">He smiled.</p>
<p class="mb-6">And in that smile was something that made my stomach tighten. A mix of triumph and mischief and genuine surprise.</p>
<p class="mb-6">"No," he said. "This is Sri Lankan."</p>

<p class="mb-6"><strong>One Question</strong></p>
<p class="mb-6">Sri Lankan.</p>
<p class="mb-6">The word landed in my mind and refused to settle.</p>
<p class="mb-6">Sri Lankan agarwood?</p>
<p class="mb-6">Sri Lankan agarwood existed, of course. Sri Lanka had always produced agarwood. It was one of the historical sources, mentioned in ancient texts and trade records.</p>
<p class="mb-6">But Sri Lankan agarwood was not a name that meant anything to anyone I knew. It was not a category. It was not a reputation. The Sri Lankan agarwood I had encountered was typically different. Lighter. Simpler. Not what anyone would call exceptional.</p>
<p class="mb-6">But this piece...</p>
<p class="mb-6">"How?" I said. "How is this Sri Lankan?"</p>
<p class="mb-6">He shrugged. "I know the source. I was there. The tree, the forest, the harvest. All Sri Lankan. I watched it happen."</p>
<p class="mb-6">I looked at the piece again. I smelled it again.</p>
<p class="mb-6">And this time, I tried to unlearn what I knew. I tried to set aside the categories, the assumptions, the mental frameworks I had built over decades of exposure to agarwood from specific, known, established sources.</p>
<p class="mb-6">What if it was Sri Lankan?</p>
<p class="mb-6">What if the piece in front of me was not Vietnamese or Cambodian but Sri Lankan?</p>
<p class="mb-6">What would that mean?</p>

<p class="mb-6"><strong>A Question That Refused to Leave</strong></p>
<p class="mb-6">The question lived with me for a long time.</p>
<p class="mb-6">Longer than I expected. Longer than I wanted.</p>
<p class="mb-6">If Sri Lankan agarwood could smell like this. Could be this complex. This deep. This extraordinary.</p>
<p class="mb-6">Then what did that mean?</p>
<p class="mb-6">What did it mean about every assumption I had ever made about Sri Lankan agarwood?</p>
<p class="mb-6">What did it mean about the other sources I had categorised as less important, less valuable, less worthy of attention?</p>
<p class="mb-6">I started asking questions. I started researching. I started reaching out to people who might know more than I did about Sri Lanka and agarwood and the relationship between place and quality.</p>
<p class="mb-6">What I found was disturbing. What I found was exciting. What I found was the beginning of a completely new way of understanding agarwood.</p>
<p class="mb-6">Sri Lanka had been producing exceptional agarwood for thousands of years. Ancient texts mentioned it. Trade records documented it.</p>
<p class="mb-6">But somewhere along the way. Perhaps during colonial periods when other sources became dominant. Perhaps because of changing trade routes and market preferences.</p>
<p class="mb-6">Sri Lanka had been written off. Dismissed. Forgotten.</p>
<p class="mb-6">No one was looking at Sri Lanka anymore.</p>
<p class="mb-6">No one was paying attention to what Sri Lanka might be producing.</p>
<p class="mb-6">And so Sri Lanka's exceptional agarwood was either being sold under other names or simply not being recognised for what it was.</p>

<p class="mb-6"><strong>Nature Had Already Done the Hard Work</strong></p>
<p class="mb-6">Here is what I understood, finally, after months of questions and research and thinking:</p>
<p class="mb-6">Nature does not care about our categories.</p>
<p class="mb-6">We. The agarwood industry. The collectors. The traders. The experts.</p>
<p class="mb-6">We have built systems of classification based on history, reputation, assumption.</p>
<p class="mb-6">We have decided that Vietnamese is better than Cambodian, that Laotian is better than Vietnamese, that some sources are premium and others are standard and others do not matter at all.</p>
<p class="mb-6">These classifications serve a purpose. They make trading easier. They create shared vocabulary. They allow us to communicate about something that is fundamentally difficult to communicate about.</p>
<p class="mb-6">But nature is not bound by our classifications.</p>
<p class="mb-6">A tree does not know that it is growing in Vietnam or Sri Lanka or Cambodia.</p>
<p class="mb-6">A tree responds to its environment. The soil. The climate. The altitude. The rainfall. The insects and fungi that attack it. The complex cascade of factors that cause a tree to produce resin.</p>
<p class="mb-6">Nature makes agarwood.</p>
<p class="mb-6">We make categories.</p>
<p class="mb-6">And our categories do not always reflect what nature is actually doing.</p>
<p class="mb-6">The piece from that evening. The piece that smelled Vietnamese but was Sri Lankan. Was evidence of this.</p>
<p class="mb-6">Nature had produced something extraordinary.</p>
<p class="mb-6">We had categorised it away.</p>
<p class="mb-6">This is the question that changed everything:</p>
<p class="mb-6">What else have we categorised away?</p>
<p class="mb-6">⸻</p>
<p class="mb-6">The more I thought about it, the more I realised how much of my understanding of agarwood was shaped not by direct experience, but by inherited assumptions.</p>
<p class="mb-6">I had been taught, implicitly, which sources were important and which were not. I had been taught which grades mattered and which did not. I had been taught which origins commanded respect and which were simply... overlooked.</p>
<p class="mb-6">But who had taught me these things?</p>
<p class="mb-6">Not my father. My father had taught me to smell. To observe. To remain curious.</p>
<p class="mb-6">The assumptions had come from elsewhere. From the market. From convention. From the accumulated wisdom of an industry that had, over generations, decided what mattered and what did not.</p>
<p class="mb-6">And conventions, once established, become invisible. They become the water you swim in. The air you breathe. You stop questioning them because everyone around you has stopped questioning them.</p>
<p class="mb-6">Until one evening, someone shows you a piece of Sri Lankan agarwood that smells like the best Vietnamese you have ever encountered.</p>
<p class="mb-6">And then you have to ask yourself: what else have I been wrong about?</p>
<p class="mb-6">⸻</p>
<p class="mb-6">The question was not simply about Sri Lanka. The question was about methodology. About how we know what we think we know. About the difference between genuine expertise and inherited assumption.</p>
<p class="mb-6">My father had given me the tools to smell agarwood. He had given me patience. He had given me presence. But he had not given me a list of approved origins and a ranking system to go with them.</p>
<p class="mb-6">That list had come from somewhere else. And somewhere else is not the same as the forest. Somewhere else is not the same as the tree. Somewhere else is not the same as direct experience.</p>
<p class="mb-6">The question that changed everything was not really about Sri Lankan agarwood.</p>
<p class="mb-6">It was about going back to the source. About trusting the nose rather than the reputation. About understanding that nature is always more creative than our categories.</p>
<p class="mb-6">And once you ask that question, you cannot stop asking it.</p>
<p class="mb-6">You start to wonder: what else have we overlooked? What other origins have we dismissed? What other qualities have we failed to see because we were too busy looking for what we expected to find?</p>
<p class="mb-6">This is where NUHOUD began. Not with a business plan. Not with a brand strategy. With a question.</p>
<p class="mb-6">A question that refused to leave.</p>`,
      isChapter: true
    },
    {
      id: 'ch6',
      title: 'The Search for the Perfect Oud Oil',
      content: `<p class="mb-6"><strong>It Was Never the Plan</strong></p>
<p class="mb-6">NUHOUD was not supposed to happen this way.</p>
<p class="mb-6">The plan. The one I had in my head for years. The one I used to justify my gradual approach to the family business.</p>
<p class="mb-6">Was to build something slow. Something careful. Something that would not require me to make decisions I was not ready to make.</p>
<p class="mb-6">I would work with my father. Learn from him. Eventually take over the family business. Maintain the existing relationships, the existing suppliers, the existing customers. Keep things going the way they had always been going.</p>
<p class="mb-6">This was the plan. This was the safe path. This was the path that did not require me to believe in anything except continuity.</p>
<p class="mb-6">But then the question arrived. The Sri Lankan question. The one that refused to leave.</p>
<p class="mb-6">And once a question like that takes hold, you cannot go back to the person you were before you asked it.</p>

<p class="mb-6"><strong>If We Were Going To Do It…</strong></p>
<p class="mb-6">My father and I had a conversation.</p>
<p class="mb-6">I do not remember exactly where we were. A restaurant, probably. Or his office.</p>
<p class="mb-6">But I remember the feeling of the conversation. The weight of it. The sense that something was shifting.</p>
<p class="mb-6">"If we were going to do this," I said. "If we were going to actually pursue this. Really search for the best. Really try to find what we think is out there."</p>
<p class="mb-6">"Then we need to commit. We cannot do it halfway."</p>
<p class="mb-6">He looked at me.</p>
<p class="mb-6">He had been waiting for this, I think. He had seen the question taking hold of me. He had watched me struggle with it.</p>
<p class="mb-6">And now here I was, finally ready to say out loud what we both knew I was going to say eventually.</p>
<p class="mb-6">"What are you thinking?" he asked.</p>
<p class="mb-6">"I want to find the perfect oud oil. Not the most expensive. Not the most famous. The perfect one. The one that represents what this thing can be at its absolute best."</p>
<p class="mb-6">"And I want to build NUHOUD around that."</p>
<p class="mb-6">He was quiet for a long moment.</p>
<p class="mb-6">And then he nodded.</p>
<p class="mb-6">"Okay," he said. "Let's do it."</p>

<p class="mb-6"><strong>Twenty Kilograms</strong></p>
<p class="mb-6">We started with twenty kilograms of Sri Lankan agarwood.</p>
<p class="mb-6">Twenty kilograms of wood from a specific region, a specific type of tree, harvested at a specific time of year by people we trusted.</p>
<p class="mb-6">Twenty kilograms of potential.</p>
<p class="mb-6">Twenty kilograms is not a lot, in the scheme of things. The agarwood market moves in much larger quantities.</p>
<p class="mb-6">But we were not thinking about quantity. We were thinking about quality. We were thinking about the piece from Lamding. The one that had changed everything for me.</p>
<p class="mb-6">We were thinking about what might be possible if we were willing to search for it.</p>
<p class="mb-6">The wood arrived. We opened the crates. We examined it piece by piece, applying everything we had learned. Everything my father had learned from his father. Everything I had learned from watching my father. Everything we had learned together from years of being in this world.</p>
<p class="mb-6">And we were not disappointed.</p>
<p class="mb-6">The wood was extraordinary. Not all of it. You never get all extraordinary. But enough of it.</p>
<p class="mb-6">Enough of it to know that we had found something.</p>
<p class="mb-6">Something that deserved to be pursued.</p>

<p class="mb-6"><strong>I Wanted More</strong></p>
<p class="mb-6">Twenty kilograms was not enough.</p>
<p class="mb-6">As soon as I smelled what those twenty kilograms could produce, I knew.</p>
<p class="mb-6">I wanted more.</p>
<p class="mb-6">I wanted to find every exceptional piece of Sri Lankan agarwood that we could access.</p>
<p class="mb-6">I wanted to build a collection. A real collection. Not a curated selection. Not a greatest-hits of what the market already knew.</p>
<p class="mb-6">But something deeper. Something more true.</p>
<p class="mb-6">My father understood. He had been waiting for this hunger in me.</p>
<p class="mb-6">Not the hunger of a businessman seeking profit. Though profit would come if the quality was real.</p>
<p class="mb-6">The hunger of a person who has found something they believe in and cannot stop until they have found all of it.</p>
<p class="mb-6">We expanded the search. We reached out to contacts in Sri Lanka. We asked questions. We followed leads. We travelled when we could.</p>
<p class="mb-6">We did not accept what the market offered us. We sought what we believed existed, and we refused to settle until we found it.</p>

<p class="mb-6"><strong>The Wood Has Its Own Composition</strong></p>
<p class="mb-6">Here is something that took me a long time to understand:</p>
<p class="mb-6">The wood has its own composition.</p>
<p class="mb-6">Not just the chemical composition. Though that is part of it.</p>
<p class="mb-6">But the composition of the thing itself. The tree. The forest. The climate. The specific combination of factors that produced this piece of agarwood at this moment in time.</p>
<p class="mb-6">Two pieces of agarwood from the same tree can be entirely different. The part of the tree. The age of the resin. The way it was harvested. The conditions under which it was stored.</p>
<p class="mb-6">All of these factors change what the wood is.</p>
<p class="mb-6">The wood is not a static object. It is a record of everything that has happened to it.</p>
<p class="mb-6">This is what we were searching for. Not just high-quality agarwood. That is available to anyone with enough money and connections.</p>
<p class="mb-6">We were searching for the specific compositions. The specific records. The specific stories that wood can tell if you know how to listen.</p>

<p class="mb-6"><strong>The Search Had Began</strong></p>
<p class="mb-6">This is when it began.</p>
<p class="mb-6">Not the business. The business came later, as a container for what we had found.</p>
<p class="mb-6">But the search itself. The commitment to finding the exceptional. The willingness to look where no one else was looking, to ask questions that had no easy answers, to believe that there was more out there than what the market already knew.</p>
<p class="mb-6">NUHOUD exists because of this search.</p>
<p class="mb-6">Everything we have done. Every piece we have sourced. Every oil we have released. Every relationship we have built. Has been an expression of this commitment.</p>
<p class="mb-6">Not to the business of agarwood.</p>
<p class="mb-6">To the thing itself.</p>
<p class="mb-6">To the possibility that exceptional quality still exists, still can be found, still can be shared with people who are willing to seek it.</p>
<p class="mb-6">The search is not over.</p>
<p class="mb-6">It will never be over.</p>
<p class="mb-6">That is the point.</p>`,
      isChapter: true
    },
    {
      id: 'ch7',
      title: 'Every Forest Has a Voice',
      content: `<p class="mb-6"><strong>A Different Kind of Hunt</strong></p>
<p class="mb-6">Sourcing exceptional agarwood is not like sourcing other luxury goods.</p>
<p class="mb-6">There are no authorised dealers. No official certifications. No brand names that guarantee quality.</p>
<p class="mb-6">You cannot go to a website and order the best agarwood in the world with next-day delivery.</p>
<p class="mb-6">You have to find it.</p>
<p class="mb-6">And finding it requires a different kind of hunt.</p>
<p class="mb-6">This hunt takes many forms.</p>
<p class="mb-6">Sometimes it is a conversation. A casual mention by someone you trust. A reference to a person you have never heard of who lives in a place you have never visited.</p>
<p class="mb-6">Sometimes it is a journey. An actual physical journey to a forest or a village or a warehouse where exceptional material might exist.</p>
<p class="mb-6">Sometimes it is years of building relationships until someone, finally, shows you something they have been saving for the right person.</p>
<p class="mb-6">The hunt is not efficient. It is not scalable. It cannot be systematised or optimised.</p>
<p class="mb-6">It requires presence. Patience. Trust.</p>
<p class="mb-6">The willingness to show up, again and again, until the thing reveals itself.</p>

<p class="mb-6"><strong>The Philippines</strong></p>
<p class="mb-6">The Philippines surprised me.</p>
<p class="mb-6">I had not expected much. Agarwood from the Philippines was not on my radar, not in my mental model of where exceptional material came from.</p>
<p class="mb-6">But my father had been there. He had been to the forests. He had seen what was growing there.</p>
<p class="mb-6">"Go," he said. "See for yourself."</p>
<p class="mb-6">I went. I spent time in the forests. I met the people who were working there. The harvesters. The local traders. The craftsmen who were processing the wood.</p>
<p class="mb-6">I smelled what they had. I tasted it, the way you sometimes need to taste something to truly understand it.</p>
<p class="mb-6">What I found was unexpected.</p>
<p class="mb-6">The Philippines had something. Not the same as Sri Lanka, not the same as Vietnam or Cambodia or Laos. But something.</p>
<p class="mb-6">A character. A voice. Something that was distinctly Filipino in a way I had never encountered before.</p>
<p class="mb-6">We brought some back. We processed it. And it was good.</p>
<p class="mb-6">Not the best we had found. But good. Interesting. Worth pursuing further. Worth understanding.</p>
<p class="mb-6">This is how it works.</p>
<p class="mb-6">You go. You look. You smell. You listen.</p>
<p class="mb-6">And sometimes, in places you did not expect, you find something worth hearing.</p>

<p class="mb-6"><strong>Six Kilograms</strong></p>
<p class="mb-6">There was a collector.</p>
<p class="mb-6">A man who had spent decades building a private collection of exceptional agarwood from all over the world.</p>
<p class="mb-6">He had pieces that I had never seen. Not in my father's warehouse. Not in the finest collections I had encountered.</p>
<p class="mb-6">Rare material. Old material. Material that had been saved, carefully preserved, waiting for the right moment and the right person.</p>
<p class="mb-6">He agreed to meet with me. To show me what he had.</p>
<p class="mb-6">I did not know what to expect.</p>
<p class="mb-6">He showed me six kilograms.</p>
<p class="mb-6">Six kilograms of wood that stopped me in my tracks.</p>
<p class="mb-6">The smell was...</p>
<p class="mb-6">There are no words that do it justice.</p>
<p class="mb-6">Complex. Deep. Ancient.</p>
<p class="mb-6">Each piece had its own character, its own story, its own voice. But they were all speaking the same language. The language of exceptional quality. The language of something truly rare.</p>
<p class="mb-6">"This is what I have," he said. "This is everything I have been saving."</p>
<p class="mb-6">I did not haggle. I did not negotiate. I did not try to get a better price.</p>
<p class="mb-6">I paid what he asked.</p>
<p class="mb-6">Because some things are not about the price.</p>
<p class="mb-6">Some things are about the moment.</p>
<p class="mb-6">About recognising when something is right in front of you and understanding that you may never see it again.</p>

<p class="mb-6"><strong>The Answer</strong></p>
<p class="mb-6">Six kilograms became part of the NUHOUD collection.</p>
<p class="mb-6">Not all of it. Some of it was not exceptional enough for what we were building.</p>
<p class="mb-6">But enough of it. Enough to know that we were on the right path. Enough to validate the hunt.</p>
<p class="mb-6">And this is what I learned from that experience:</p>
<p class="mb-6">The answer is always out there.</p>
<p class="mb-6">It is not a question of whether exceptional agarwood exists. It does.</p>
<p class="mb-6">It is not a question of whether it can be found. It can.</p>
<p class="mb-6">The question is only whether you are willing to do what it takes to find it.</p>
<p class="mb-6">Whether you are willing to travel. To wait. To build relationships. To show up again and again, even when you do not know if the search will pay off.</p>
<p class="mb-6">The answer is always out there.</p>
<p class="mb-6">But it does not come to people who are looking for shortcuts.</p>

<p class="mb-6"><strong>The Wood Comes First</strong></p>
<p class="mb-6">Here is a principle that guides everything we do at NUHOUD:</p>
<p class="mb-6">The wood comes first.</p>
<p class="mb-6">Not the brand. Not the packaging. Not the marketing story. Not the price point or the distribution strategy or the customer experience.</p>
<p class="mb-6">The wood comes first. Everything else is secondary.</p>
<p class="mb-6">This seems obvious, but in practice it is revolutionary.</p>
<p class="mb-6">Most of the agarwood business is built on other foundations. On relationships. On reputation. On the ability to move product.</p>
<p class="mb-6">The quality of the wood is important, of course, but it is rarely the primary consideration. People buy from people they trust, from sources they know, in ways that are comfortable and familiar.</p>
<p class="mb-6">We have chosen a different path.</p>
<p class="mb-6">We start with the wood. We find the best wood we can find.</p>
<p class="mb-6">And then we build everything else around it.</p>
<p class="mb-6">The brand exists to serve the wood. The packaging exists to honour the wood. The customer experience exists to help people access the wood in the way it deserves to be accessed.</p>

<p class="mb-6"><strong>I Went Looking for Malino</strong></p>
<p class="mb-6">Malino is a region in Indonesia.</p>
<p class="mb-6">It is known for many things. The coffee. The climate. The mountains.</p>
<p class="mb-6">But it is not known for agarwood. At least, it was not known for agarwood. Not by anyone I had spoken to. Not in any of the literature I had read or the conversations I had had.</p>
<p class="mb-6">But my father had heard something. A rumour. A whisper. A suggestion that Malino might be producing something worth looking at.</p>
<p class="mb-6">And so I went.</p>
<p class="mb-6">The journey was not easy. Malino is not a simple place to reach. It requires patience, flexibility, the willingness to go where the road takes you even when the road does not take you where you expected.</p>
<p class="mb-6">I spent days there. I met people. I smelled wood. I tasted it, the way I had learned to do in the Philippines.</p>
<p class="mb-6">And I found something.</p>
<p class="mb-6">Not exceptional by the standards we had already established. But real.</p>
<p class="mb-6">A voice that was distinctly Malino. A character that was its own.</p>
<p class="mb-6">Something that had not been seen in the global agarwood market before.</p>
<p class="mb-6">Something that belonged to a place that the world had not thought to look at.</p>
<p class="mb-6">We brought some back. We processed it. We released it as part of the NUHOUD collection.</p>
<p class="mb-6">And it found its audience. People who recognised what it was, who understood that it was something new, something that had not existed in the market before.</p>

<p class="mb-6"><strong>What Others Might Call Leftovers</strong></p>
<p class="mb-6">In the agarwood business, there is a category of material that most people ignore.</p>
<p class="mb-6">It is the material that is left over after the prime pieces have been selected.</p>
<p class="mb-6">The smaller pieces. The less visually impressive pieces. The pieces that do not announce themselves.</p>
<p class="mb-6">The material that most traders would call scraps.</p>
<p class="mb-6">We do not call them leftovers.</p>
<p class="mb-6">We call them opportunity.</p>
<p class="mb-6">Here is what I have learned:</p>
<p class="mb-6">The visual appearance of agarwood is a poor indicator of quality.</p>
<p class="mb-6">The most valuable piece in a collection might be the smallest, the least dramatic, the piece that most people would walk past without stopping.</p>
<p class="mb-6">And the piece that looks most impressive might produce oil that is merely ordinary.</p>
<p class="mb-6">We examine everything. We smell everything. We give every piece a chance to reveal itself.</p>
<p class="mb-6">And sometimes. Not often. But sometimes.</p>
<p class="mb-6">The pieces that others ignored become the finest in our collection.</p>

<p class="mb-6"><strong>Another Forest Speaks</strong></p>
<p class="mb-6">The forests of Papua New Guinea are among the least explored in the world.</p>
<p class="mb-6">Vast. Remote. Full of life that has not yet been documented by science.</p>
<p class="mb-6">Full of agarwood that has not yet been assessed by the market.</p>
<p class="mb-6">We went there.</p>
<p class="mb-6">Of course we went there.</p>
<p class="mb-6">The question is not whether we should explore new forests. The question is always how and when.</p>
<p class="mb-6">Papua New Guinea was next.</p>
<p class="mb-6">What we found was a voice.</p>
<p class="mb-6">A distinct, unmistakable voice.</p>
<p class="mb-6">Different from Sri Lanka. Different from the Philippines. Different from Malino. Different from anywhere we had looked before.</p>
<p class="mb-6">This is the pattern. This is what we have learned to expect.</p>
<p class="mb-6">Every forest has a voice. Every place where agarwood grows has something to say.</p>
<p class="mb-6">The challenge is not whether the voice exists. It always exists.</p>
<p class="mb-6">The challenge is whether you are willing to listen.</p>

<p class="mb-6"><strong>Every Forest Has a Voice</strong></p>
<p class="mb-6">This is what NUHOUD is built on.</p>
<p class="mb-6">Not a single source. Not a single origin. Not a single voice.</p>
<p class="mb-6">Every forest has a voice.</p>
<p class="mb-6">And our commitment. Our real commitment. The one that goes beyond marketing and branding and all the surface-level things that businesses usually care about.</p>
<p class="mb-6">Is to listen.</p>
<p class="mb-6">We have found voices in Sri Lanka. In the Philippines. In Malino. In Papua New Guinea.</p>
<p class="mb-6">In places we have not yet told you about. In forests we have not yet visited. In conversations we have not yet had.</p>
<p class="mb-6">The hunt continues.</p>
<p class="mb-6">It will always continue.</p>
<p class="mb-6">Because there is always another voice. There is always another forest. There is always more to discover, more to understand, more to share with people who are willing to listen.</p>

<p class="mb-6"><strong>Preservation</strong></p>
<p class="mb-6">I want to say something about preservation.</p>
<p class="mb-6">About the responsibility that comes with exceptional resources.</p>
<p class="mb-6">Agarwood is not infinite.</p>
<p class="mb-6">The trees that produce it are not abundant.</p>
<p class="mb-6">The forests where it grows are under pressure.</p>
<p class="mb-6">The knowledge of how to harvest it sustainably. Knowledge that existed in traditional communities before industrialisation and globalisation disrupted everything. Is being lost.</p>
<p class="mb-6">We are not naive about this.</p>
<p class="mb-6">We understand that our business exists within a larger context. A context of ecological fragility, cultural complexity, ethical uncertainty.</p>
<p class="mb-6">We make choices. We ask questions. We try to work with people who share our values, who understand that exceptional quality and sustainable practice are not in conflict.</p>
<p class="mb-6">This is not a perfect system. There is no perfect system.</p>
<p class="mb-6">But we try.</p>
<p class="mb-6">We try to be thoughtful. We try to be responsible. We try to remember that the wood we hold in our hands is not just a product.</p>
<p class="mb-6">It is a gift.</p>
<p class="mb-6">A gift from the forest. A gift from the tree. A gift from everyone who has touched it along the way.</p>
<p class="mb-6">We do not take that gift lightly.</p>
<p class="mb-6">And we will keep listening. To every forest. To every voice.</p>
<p class="mb-6">For as long as there are forests to listen to. For as long as there are voices to hear.</p>
<p class="mb-6">This is NUHOUD.</p>`
    }
  ]
};

// Storage key for localStorage
const STORAGE_KEY = 'nuhoud-story-portal';

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
  const contentRef = useRef(null);
  const isEditingRef = useRef(false);

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

  return (
    <div className="min-h-screen" style={{background:'#FFFDF7'}}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50" style={{background:'rgba(255,253,247,0.92)', backdropFilter:'blur(12px)', borderBottom:'1px solid rgba(154,114,53,0.12)'}}>
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="p-2 rounded-lg transition-colors" style={{color:'#9A8A78'}}>
              <Home size={20} />
            </Link>
            {isMobile && (
              <button
                onClick={() => setShowChapterList(!showChapterList)}
                className="p-2 rounded-lg transition-colors"
                style={{color:'#9A8A78'}}
                aria-label="Toggle chapter list"
              >
                <List size={20} />
              </button>
            )}
            <h1 className="text-2xl font-light tracking-[0.3em]" style={{fontFamily:'Playfair Display,serif', color:'#2A2018'}}>{story.title}</h1>
          </div>
          <div className="flex items-center gap-2">
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
                  style={{color:'#9A8A78'}}
                  aria-label="Edit chapter"
                >
                  <Edit3 size={20} />
                </button>
                <button
                  onClick={handleReset}
                  className="p-2 rounded-lg transition-colors"
                  style={{color:'#9A8A78'}}
                  aria-label="Reset to default"
                >
                  <Trash2 size={20} />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Chapter Title */}
        <div className="max-w-4xl mx-auto px-4 pb-3">
          <h2 className="text-sm font-light tracking-wide" style={{color:'#9A8A78', fontFamily:'Cormorant Garamond,serif'}}>
            {currentChapter?.title}
          </h2>
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
              style={{background:'#FFFDF7', borderBottom:'1px solid rgba(154,114,53,0.12)'}}
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
                  color: index === activeChapter ? '#2A2018' : '#9A8A78',
                  fontFamily:'Cormorant Garamond,serif'
                }}
              >
                <span className="mr-2" style={{color:'rgba(154,114,53,0.3)'}}>{index + 1}.</span>
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
                  background:'rgba(154,114,53,0.04)',
                  border:'1px solid rgba(154,114,53,0.15)',
                  color:'#5A4A38',
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
                  style={{background:'#9A7235', color:'#FFFDF7'}}
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
              <div
                style={{
                  fontFamily:'Cormorant Garamond,serif',
                  color:'#5A4A38',
                  lineHeight:'2',
                  fontSize:'18px'
                }}
                dangerouslySetInnerHTML={{ __html: currentChapter?.content || '' }}
              />
            </motion.div>
          )}
        </div>
      </main>

      {/* Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50" style={{background:'linear-gradient(to top, #FFFDF7 60%, transparent)', paddingTop:'80px', paddingBottom:'20px'}}>
        <div className={`max-w-4xl mx-auto px-4 flex items-center justify-between ${!isMobile ? 'pr-52' : ''}`}>
          <button
            onClick={prevChapter}
            disabled={activeChapter === 0 || isEditingRef.current}
            className="p-3 rounded-full transition-all"
            style={{
              opacity: activeChapter === 0 ? 0.3 : 1,
              color:'#9A7235',
              background: activeChapter === 0 ? 'transparent' : 'rgba(154,114,53,0.05)'
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
                  background: index === activeChapter ? '#9A7235' : index < activeChapter ? 'rgba(154,114,53,0.3)' : 'rgba(154,114,53,0.15)'
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
              color:'#9A7235',
              background: activeChapter === story.chapters.length - 1 ? 'transparent' : 'rgba(154,114,53,0.05)'
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
