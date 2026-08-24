import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, BookOpen, Edit3, Plus, Trash2, Save, Eye, X, Menu, List, AlignLeft } from 'lucide-react'

// Story data structure - each chapter preserves exact text from original document
const DEFAULT_STORY = {
  id: 'nuhoud-story-001',
  title: 'NUHOUD',
  author: 'Khalid Al Mulla',
  chapters: [
    {
      id: 'ch1',
      title: 'Before There Was NUHOUD',
      content: `<p class="mb-4"><strong>A Family Shaped by Agarwood</strong></p>
<p class="mb-4">My grandfather was in the agarwood business. The real thing. Not as a hobby, not as a side investment — as his life. For him, agarwood wasn't just a commodity. It was the air he breathed, the conversations he had, the people he knew. My father grew up watching this world unfold around him — smelling it, touching it, learning it the way a child learns their first language. By the time he was old enough to understand what agarwood actually was, he already knew it in his bones.</p>
<p class="mb-4">So when I came along, the story of agarwood was already an old one in our family. It had been written before me, passed down through generations the way some families pass down recipes or religious traditions. Except this tradition smelled different.</p>

<p class="mb-4"><strong>The Man I Never Met</strong></p>
<p class="mb-4">I never met my grandfather. He passed away before I was born. But I grew up in the echo of him. In the stories my father would tell. In the respect that older people in the market showed when they talked about the Al Mulla who had come before. His absence was a presence in my life. And somewhere in that absence, agarwood found its way to me.</p>

<p class="mb-4"><strong>The Staircase</strong></p>
<p class="mb-4">I was maybe seven or eight years old when I first climbed the staircase of my father's shop. It was an ordinary building from the outside. Unremarkable. But at the top of those stairs was a world I didn't yet have words for. The smell hit you before you even reached the landing — deep, resinous, almost alive. It wasn't a single scent. It was layers. It was depth. It was the smell of something ancient and rare and impossibly beautiful.</p>
<p class="mb-4">I didn't know then what I was smelling. I only knew that I wanted to stay in it.</p>
<p class="mb-4">My father would bring me to the shop on weekends. While he handled business, I'd wander through the warehouse, picking up pieces of wood, trying to understand what made them valuable. The smaller pieces fit in my hands. The larger ones I couldn't lift. But all of them carried that same smell — the smell that had become my inheritance without me knowing it.</p>

<p class="mb-4"><strong>An Inheritance Beyond Wood</strong></p>
<p class="mb-4">What my grandfather left behind wasn't just inventory. It was knowledge. A deep understanding of quality that my father had absorbed through years of watching, listening, and being in the presence of someone who truly understood agarwood. My father didn't inherit a business — he inherited a language. And that language, like all languages, needed to be spoken to survive.</p>
<p class="mb-4">He spoke it every day.</p>
<p class="mb-4">He taught it to me in fragments. In the way he held a piece of wood. In the questions he asked about where it came from. In the silence he kept when a piece didn't meet his standards. I learned to read quality the way some children learn to read faces — by spending time with it, by paying attention, by being in its presence long enough that understanding started to feel like instinct.</p>
<p class="mb-4">By the time I was a teenager, I could tell you more about a piece of agarwood than most people would ever know about anything. And I never even realized I was learning it.</p>`,
      isChapter: true
    },
    {
      id: 'ch2',
      title: 'The Boy Who Wore Agarwood',
      content: `<p class="mb-4"><strong>Growing Up in a Different World</strong></p>
<p class="mb-4">My childhood wasn't like other children's childhoods. While other kids were playing video games and watching television, I was learning the difference between Vietnamese and Cambodian oud. While my classmates were collecting baseball cards or stamps, I was learning to identify the subtle distinctions in resin content and oil concentration. My world was different. And I didn't know it was different until much later, when I started comparing my childhood to others.</p>
<p class="mb-4">My father never forced agarwood on me. He never sat me down and said, "This is your heritage. Learn it." It was simply there. It was the air I breathed. And when you grow up in something, you don't learn it — you absorb it. You become it.</p>
<p class="mb-4">I wore agarwood as a boy. Not in any obvious way — no one was putting agarwood oil on a child. But my father's clothes were always infused with it. His shirts. His jackets. His pockets. When he held me, I smelled it. When he came home from the shop, the smell came with him. I didn't know then that this was an education. I just knew that agarwood smelled like safety. Like home. Like my father.</p>

<p class="mb-4"><strong>The Pendant</strong></p>
<p class="mb-4">My father wore a pendant. A small piece of agarwood, polished smooth by years of handling, strung on a simple cord. He wore it every day. I used to play with it when I sat on his lap — the way children play with keys or coins or whatever small objects adults leave within reach. The pendant was warm from his body. Smooth. Perfectly weighted.</p>
<p class="mb-4">I remember asking him once why he wore it. He said, "Because it reminds me of your grandfather."</p>
<p class="mb-4">That was the only time he ever talked about my grandfather to me. But the pendant said everything. It said: this is who we are. This is where we come from. This is what we carry.</p>
<p class="mb-4">My father still wears that pendant. Fifty years of skin contact have changed its weight and surface. It's darker now. Denser. It has absorbed him as much as he has worn it. Some objects become more themselves through use. This pendant has become a different kind of object entirely — a record of time, of presence, of everything that passed between my grandfather's hands and my father's and, someday, perhaps, my own.</p>

<p class="mb-4"><strong>The Photograph</strong></p>
<p class="mb-4">There's a photograph of my father when he was young. Maybe twenty or twenty-two. He's standing in what looks like a warehouse — the kind of space where agarwood is stored before it becomes something more. Behind him are shelves and shelves of wood. He's wearing the pendant. He's looking at the camera with the kind of confidence that comes from knowing your work.</p>
<p class="mb-4">I look at that photograph sometimes and try to see myself in it. We're not that different, my father and I. We have the same jaw. The same way of holding our shoulders. The same expression when we're thinking. But we grew up in different times. He grew up with agarwood as his inheritance. I grew up with his understanding of agarwood — which is a different thing entirely.</p>
<p class="mb-4">My father learned agarwood by being in it. I learned agarwood by watching him be in it. These are different educations.</p>

<p class="mb-4"><strong>The Craftsmen</strong></p>
<p class="mb-4">My father worked with craftsmen. Master craftspeople who had spent decades learning to extract oil, to grade wood, to understand the difference between a piece worth thousands and a piece worth nothing. These men — and they were mostly men in that generation — had knowledge that couldn't be taught in schools. It had been passed down through apprenticeship. Through watching. Through doing.</p>
<p class="mb-4">My father respected them. He would visit their workshops, sit with them, listen to them. He understood that their knowledge was deeper than his in some ways. He could grade the wood. But they could feel it. They could smell it and know things about it that no amount of technical training could replicate.</p>
<p class="mb-4">I would go with him sometimes. I was young. I didn't understand most of what was being discussed. But I watched. I absorbed. I learned to recognize the gestures that meant quality — the way a craftsman would turn a piece of wood in his hands, the way he would bring it close to his face and inhale slowly, the way he would set it down with a particular kind of finality when he had reached his judgment.</p>
<p class="mb-4">These men are mostly gone now. Their knowledge went with them. And I sometimes wonder: what did they know that I will never know, because I never had the chance to sit with them long enough to learn it?</p>

<p class="mb-4"><strong>The Smell of the Warehouse</strong></p>
<p class="mb-4">The warehouse smelled different depending on the season. In the summer, when the heat was intense, the resin would become more active. The smell would intensify. Walk in on a hot July day and the smell hit you like a wall — rich, deep, almost overwhelming. In the winter, it would recede. Become more subtle. More mysterious.</p>
<p class="mb-4">I loved the summer smell. It was honest. It didn't hide. Every piece of wood in that warehouse was announcing itself. You could walk through the aisles and read the room by smell alone. The cheap wood had a thin, almost acrid scent. The good wood had depth — layers that revealed themselves the longer you stayed. And the exceptional wood... the exceptional wood was silent until you got close. Then it opened up. Like a person who doesn't need to shout to be heard.</p>

<p class="mb-4"><strong>Looking Back</strong></p>
<p class="mb-4">I think about my childhood differently now than I did then. As a child, I didn't know that my world was unusual. I didn't know that other children weren't being trained, without knowing it, to understand one of the rarest and most complex substances on earth. I thought everyone knew the difference between Grade A and Grade B oud. I thought everyone could smell a piece of Vietnamese wood and tell you approximately where in Vietnam it had come from.</p>
<p class="mb-4">It wasn't until I was older that I realized how much I knew. And by then, I had already been doing it for so long that it didn't feel like knowledge. It felt like sense. Like the sense of smell itself.</p>
<p class="mb-4">This is what my father gave me. Not instructions. Not lessons. Presence. And through presence, understanding.</p>`,
      isChapter: true
    },
    {
      id: 'ch3',
      title: 'The Man Who Taught Me Oud',
      content: `<p class="mb-4"><strong>A Boy Who Chose the Forest</strong></p>
<p class="mb-4">My father didn't grow up wanting to be in the agarwood business. Like many boys in the Gulf, he had other dreams. Bigger dreams. Dreams that pointed away from the family shop and toward something else — something he couldn't yet name but felt certain existed somewhere beyond the warehouse and the smell of resin.</p>
<p class="mb-4">He wanted to be a civil engineer. He wanted to build things. He wanted to leave his mark on the world in ways that could be seen and measured — roads, buildings, bridges. He studied for it. He was good at it. The numbers made sense to him in a way that the numbers of the shop never had.</p>
<p class="mb-4">But my grandfather was aging. The business needed someone. And in our family, need has a weight that desire cannot match.</p>
<p class="mb-4">I don't know exactly what conversation happened between my father and my grandfather. My father doesn't talk about it much, and I've learned not to ask. But I know the shape of it. The son comes home. The father is getting older. The business that has been in the family for generations needs someone to carry it forward. And the son, despite everything — despite the dreams and the plans and the years of study — chooses the forest. Chooses the wood. Chooses the smell that has been following him his whole life whether he wanted it or not.</p>
<p class="mb-4">He didn't choose it the way you choose a career. He chose it the way you choose a family. It was already his. It had always been his. He was just finally admitting it.</p>

<p class="mb-4"><strong>Curiosity Above Comfort</strong></p>
<p class="mb-4">What I admire most about my father's relationship with agarwood is his curiosity. It's not the curiosity of a businessman trying to maximize profit. It's the curiosity of someone who genuinely wants to understand the thing itself — the wood, the oil, the forests, the people who harvest it, the process that transforms living trees into something so rare and valuable.</p>
<p class="mb-4">This curiosity has taken him to places that most businessmen would never go. Into forests in Laos and Vietnam and Cambodia. Into villages where agarwood has been harvested for generations. Into workshops where craftsmen practice techniques that have been passed down for centuries. He has sat with people who know things about agarwood that cannot be found in any book, and he has listened. Really listened. The way you listen to an elder who is teaching you something sacred.</p>
<p class="mb-4">This curiosity has cost him comfort. It has cost him time. It has taken him to places that are not easy to reach, where the conditions are not what anyone would call pleasant. But he goes anyway. Because understanding is the thing he cannot let go of.</p>
<p class="mb-4">I learned this from him. Not by being told, but by watching. By going with him. By seeing the way his face changes when he encounters something he doesn't yet understand. The crease between his brows. The questions that start coming, rapid-fire, precise. The way he holds whatever he's looking at — a piece of wood, a photograph, a leaf from a tree — like he's trying to read its history in its surface.</p>

<p class="mb-4"><strong>The Eye That Saw What Others Couldn't</strong></p>
<p class="mb-4">My father has a gift. I don't use that word lightly. It's a real gift — something that was given to him, not something he developed through effort alone. He can look at a piece of agarwood and see things that other people, people who have been in the business for decades, cannot see.</p>
<p class="mb-4">It's not just about experience. Experience teaches you what you've seen before. My father's gift is different. It's the ability to see what isn't there yet. To look at a piece of wood and understand what it could become. To see the potential in something that other people would pass over as ordinary.</p>
<p class="mb-4">I don't fully understand this gift. I can recognize it. I can see it in action. But I don't have it myself. And I think that's important to admit. My father and I both understand agarwood, but we understand it differently. He sees it. I understand it. These are not the same thing.</p>
<p class="mb-4">There are pieces of wood that my father has held in his hands and set aside, and I have looked at them and seen nothing. Ordinary wood. Unremarkable. But years later, when those pieces have been processed and the oil has been extracted, they have produced some of the finest oud the world has ever seen. And my father, who sold them at ordinary prices, has to sit with the knowledge that he was holding something extraordinary and didn't know it.</p>
<p class="mb-4">Or did he know it? I think sometimes he knew. I think sometimes he could see what was inside, and he sold it anyway — not because he didn't understand its value, but because he understood that the piece needed to go to someone who would do something specific with it. The chain of oud is long. Not every link in the chain holds the same piece forever.</p>

<p class="mb-4"><strong>That Grade No Longer Exists</strong></p>
<p class="mb-4">There was a time when agarwood was graded in ways that no longer exist. The old grading systems — the ones that my grandfather and his contemporaries used — were based on knowledge that has largely been lost. They分级 wood by characteristics that are difficult to describe, let alone standardize. The color of the resin. The weight. The sound it makes when struck. The way it burns. The smell that emerges at different temperatures.</p>
<p class="mb-4">My father knows some of these grading systems. He learned them from my grandfather, from the craftsmen he worked with, from years of observation and hands-on experience. But some of that knowledge is incomplete. Some of it exists only as fragments — enough to recognize what it once meant, not enough to reconstruct the whole thing.</p>
<p class="mb-4">This loss bothers him. I can see it. The knowledge that there were ways of understanding agarwood that we no longer have access to — that certain qualities can no longer be named or identified or properly appreciated — this is a grief he carries quietly. Not a dramatic grief. Not something he talks about. But it's there, underneath the surface, every time he handles a piece of wood and wonders what my grandfather would have seen in it.</p>

<p class="mb-4"><strong>More Than a Businessman</strong></p>
<p class="mb-4">My father is not a businessman in the way that term is usually understood. He doesn't think in spreadsheets or profit margins. He doesn't measure success in the conventional ways. When he talks about a piece of agarwood, he doesn't talk about its market value first. He talks about where it came from. How it was harvested. What he knows about the person who found it. What he can intuit about the tree it came from and the forest that shaped it.</p>
<p class="mb-4">He is, in this sense, more of a scholar than a businessman. He is always researching. Always learning. Always looking for new sources of knowledge, new perspectives, new ways of understanding the thing he has devoted his life to. He reads what he can find. He travels when he can. He talks to anyone who knows anything, regardless of their position or credentials.</p>
<p class="mb-4">I once asked him why he cared so much. Why the knowledge mattered more than the transaction. He said something I've never forgotten. He said: "The businessman makes money. The scholar makes meaning. I want to make meaning."</p>
<p class="mb-4">That distinction has shaped everything I've done since.</p>

<p class="mb-4"><strong>If He Could Smell Tamed Ghalia</strong></p>
<p class="mb-4">Tamed Ghalia is one of the most legendary agarwood oils in the world. It's from a specific region — a small, specific area where the conditions for producing high-quality agarwood are perfect. The oil is known for its complexity, its longevity, its almost supernatural depth. Very little of it exists. And what does exist is jealously guarded by the people who own it.</p>
<p class="mb-4">My father has smelled it. More than once. He has been lucky — or connected — enough to encounter it in private collections, in the homes of people who have spent decades accumulating the finest agarwood in the world. He describes the smell to me sometimes, and I can tell that it moves him in a way that few things do. The way his voice softens. The way his eyes go somewhere else. The way he struggles to find words that are adequate.</p>
<p class="mb-4">I have not smelled Tamed Ghalia. Not yet. There is a part of me that wants to wait. Wait until I am ready. Wait until I have learned enough that the experience will be complete rather than partial. This is perhaps irrational. But some things should be approached with patience. Some things should be earned.</p>
<p class="mb-4">My father has earned them. He has earned them through decades of presence. Of attention. Of devotion to a thing that most people will never understand.</p>

<p class="mb-4"><strong>What He Left Me</strong></p>
<p class="mb-4">What my father left me is not a business. It is not a set of techniques or a customer list or a proprietary method for grading wood. What he left me is a way of being with agarwood. A way of being present with something rare and complex and alive. A way of understanding that knowledge is not a destination but a direction.</p>
<p class="mb-4">I have tried, in my own way, to honor this inheritance. NUHOUD is the result. It is my attempt to take everything I learned from my father — everything he learned from his father — and translate it into something new. Something that belongs to this moment. Something that can live in the world that my father and grandfather never knew.</p>
<p class="mb-4">They knew agarwood. I want to know it too. But I want to know it in a way that is mine.</p>`,
      isChapter: true
    },
    {
      id: 'ch4',
      title: 'The Day Oud Became an Experience',
      content: `<p class="mb-4"><strong>I Never Wanted This Life</strong></p>
<p class="mb-4">I need to be honest about something. When I was young — really young, a teenager, the age when you start forming opinions about who you want to be — I didn't want anything to do with agarwood. Not because I didn't love it. Not because I didn't know it. But because I had watched my father, and I had seen what it had taken from him. The time. The energy. The way it consumed him.</p>
<p class="mb-4">I wanted to be something else. Someone else. I wanted a life that was not defined by resin and wood and the smell of something ancient. I wanted normalcy. I wanted a job where I could come home and leave it at the office. I wanted evenings and weekends that belonged to me, not to the thing I was trying to escape.</p>
<p class="mb-4">This lasted longer than I would like to admit. Through university. Through my early twenties. Through the years when I was supposed to be figuring out who I was and what I wanted to do with my life. I kept agarwood at a distance. I knew it — of course I knew it, I had been raised in it — but I held myself apart from it. I treated it like an obligation rather than an opportunity.</p>
<p class="mb-4">My father never pushed. That was his gift to me. He let me want something else. He let me struggle with it. He let me figure it out on my own time, in my own way, without pressure or guilt or manipulation. He understood something that many parents don't: you cannot give someone a relationship with a thing. You can only give them the conditions in which a relationship might grow.</p>

<p class="mb-4"><strong>The Piece From Lamding</strong></p>
<p class="mb-4">There was a piece. A specific piece of wood that changed everything for me. It came from Lamding — a place I had heard of but never visited. Lamding is known for producing some of the finest agarwood in the world. The trees there grow in conditions that are almost perfect for the formation of the resin that becomes agarwood. The wood from Lamding has a depth and complexity that is hard to find anywhere else.</p>
<p class="mb-4">The piece was not particularly large. Maybe the size of a fist. But when I held it in my hands, something happened. I don't know how to describe it except to say that I felt it. I felt the history of that piece. The years it had taken to form. The tree it had come from. The forest where that tree had grown. The hands that had found it and harvested it and brought it to market.</p>
<p class="mb-4">And I felt something else. Something I had not expected. I felt recognized. By the piece. By the wood itself. As if it had been waiting for someone to understand it, and I was that someone.</p>
<p class="mb-4">This is not a rational experience. I know that. I cannot prove what I felt. I cannot measure it or document it or explain it in terms that would satisfy a skeptic. But I felt it nonetheless. And it was the beginning of everything.</p>

<p class="mb-4"><strong>The Ride Home</strong></p>
<p class="mb-4">After I held that piece from Lamding, I drove home. It was late. The roads were quiet. And for the entire drive, I kept thinking about what had just happened. I kept returning to that moment in my father's warehouse when I held the piece and felt whatever it was that I felt.</p>
<p class="mb-4">I was forty minutes from home. Forty minutes of empty highway and streetlights and the quiet of the late evening. And in those forty minutes, something shifted. Not dramatically. Not all at once. But fundamentally. The thing I had been running from for most of my life — the thing I had kept at arm's length, the thing I had refused to embrace — I started to see it differently.</p>
<p class="mb-4">I started to see it as mine.</p>
<p class="mb-4">Not an obligation. Not a burden. Not my father's dream or my grandfather's legacy or the weight of family expectation. Mine. Something I could claim. Something I could build. Something I could make my own.</p>
<p class="mb-4">By the time I pulled into my driveway, I was different. I didn't know exactly what I was going to do. But I knew that I was done running.</p>

<p class="mb-4"><strong>When Smell Became Experience</strong></p>
<p class="mb-4">After that night, everything changed. I started paying attention in a way I never had before. The pieces of wood that I had walked past my whole life — the ones I had ignored or taken for granted — I started seeing them. Really seeing them. And when I got close enough to smell them, I started understanding them. Not intellectually. Not the way you understand a fact or a figure. The way you understand a piece of music or a work of art. With your whole self.</p>
<p class="mb-4">Smell is the most direct of the senses. It bypasses the thinking brain and goes straight to the emotional centers. When you smell something, you don't analyze it first — you feel it. And the feeling comes before the interpretation. You smell, you react, and only then do you try to understand what you've smelled and why it made you feel what you felt.</p>
<p class="mb-4">This is what I had been missing. This is what agarwood had been waiting to show me. Not the science of resin formation or the economics of the oud market or the history of the trade routes. The experience. The direct, unfiltered, emotional experience of encountering something extraordinary.</p>

<p class="mb-4"><strong>A Different Way of Smelling</strong></p>
<p class="mb-4">There is a way of smelling agarwood that most people never learn. You don't just put your nose to it and inhale. You hold it at a distance first. You let the scent reach you in layers. You give it time. You breathe in slowly, and then you breathe out slowly, and while you're breathing out, you breathe in again — a secondary inhalation that catches the deeper notes, the ones that don't reveal themselves immediately.</p>
<p class="mb-4">This is how my father taught me to smell. He taught me patience. He taught me presence. He taught me that the first impression is almost never the true impression, and that the real beauty of a piece of agarwood is usually hidden beneath the surface.</p>
<p class="mb-4">I practice this method now every time I encounter a new piece. It has become a ritual. A meditation. The world falls away, and there is only the wood and my breath and the slow revelation of everything the wood has to offer.</p>
<p class="mb-4">This is what NUHOUD is built on. This is the foundation. Not the business. Not the brand. The practice. The presence. The direct experience of something rare and beautiful and alive.</p>`,
      isChapter: true
    },
    {
      id: 'ch5',
      title: 'The Question That Changed Everything',
      content: `<p class="mb-4"><strong>A Friend With an Extraordinary Nose</strong></p>
<p class="mb-4">He had one of the finest noses in the business. Not an exaggeration — this was widely recognized. In the world of agarwood, where the ability to assess quality through smell is the most valuable skill a person can have, my friend was exceptional even among experts. People sought his opinion. They would bring him pieces and wait for his verdict. His word was trusted because his palate was true.</p>
<p class="mb-4">We had known each other for years. We had grown up in the same world, attended the same gatherings, argued about the same questions. But it was one evening — one specific conversation — that changed the way I thought about everything.</p>
<p class="mb-4">We were at an event. A gathering of people who cared about agarwood — collectors, traders, enthusiasts, a few craftsmen who had come to share and learn. The room was full of wood. Pieces of various origins, various grades, various qualities, spread out on tables for examination. I had been there for an hour, moving from piece to piece, doing what I always did: assessing, comparing, trying to understand.</p>
<p class="mb-4">My friend had been doing the same. But when we reconvened — when we found each other in a quiet corner of the room — his face was different. There was something there. A question. A puzzle. The look of a person who had encountered something they didn't expect.</p>

<p class="mb-4"><strong>This Is Sri Lankan</strong></p>
<p class="mb-4">"Come here," he said. "I want you to smell this."</p>
<p class="mb-4">He led me to a piece I had actually seen earlier. A piece I had passed over, honestly. It had looked ordinary. Not unremarkable, exactly, but not exceptional. The kind of piece that doesn't announce itself. The kind that requires attention to appreciate.</p>
<p class="mb-4">"Smell it," he said.</p>
<p class="mb-4">I leaned in. I gave it time. I used the method my father had taught me — the slow breath, the secondary inhalation, the patience that reveals what speed conceals.</p>
<p class="mb-4">And I smelled it.</p>
<p class="mb-4">What I smelled was extraordinary. But what I smelled was also, to my nose, Vietnamese. Cambodian. One of the usual suspects. Something from Southeast Asia, certainly. Something from a place where agarwood grows and is harvested and finds its way to market.</p>
<p class="mb-4">"Well?" he said.</p>
<p class="mb-4">"Vietnamese," I said. "Maybe Cambodian. Very good quality. Complex. Worth a lot."</p>
<p class="mb-4">He smiled. And in that smile was something that made my stomach tighten — a mix of triumph and mischief and genuine surprise.</p>
<p class="mb-4">"No," he said. "This is Sri Lankan."</p>

<p class="mb-4"><strong>One Question</strong></p>
<p class="mb-4">Sri Lankan.</p>
<p class="mb-4">The word landed in my mind and refused to settle. Sri Lankan agarwood? Sri Lankan agarwood existed, of course. Sri Lanka had always produced agarwood — it was one of the historical sources, mentioned in ancient texts and trade records. But Sri Lankan agarwood was not a name that meant anything to anyone I knew. It was not a category. It was not a reputation. The Sri Lankan agarwood I had encountered was typically different — lighter, simpler, not what anyone would call exceptional.</p>
<p class="mb-4">But this piece...</p>
<p class="mb-4">"How?" I said. "How is this Sri Lankan?"</p>
<p class="mb-4">He shrugged. "I know the source. I was there. The tree, the forest, the harvest — all Sri Lankan. I watched it happen."</p>
<p class="mb-4">I looked at the piece again. I smelled it again. And this time, I tried to unlearn what I knew. I tried to set aside the categories, the assumptions, the mental frameworks I had built over decades of exposure to agarwood from specific, known, established sources.</p>
<p class="mb-4">What if it was Sri Lankan? What if the piece in front of me was not Vietnamese or Cambodian but Sri Lankan? What would that mean?</p>

<p class="mb-4"><strong>A Question That Refused to Leave</strong></p>
<p class="mb-4">The question lived with me for a long time. Longer than I expected. Longer than I wanted.</p>
<p class="mb-4">If Sri Lankan agarwood could smell like this — could be this complex, this deep, this extraordinary — then what did that mean? What did it mean about every assumption I had ever made about Sri Lankan agarwood? What did it mean about the other sources I had categorized as less important, less valuable, less worthy of attention?</p>
<p class="mb-4">I started asking questions. I started researching. I started reaching out to people who might know more than I did about Sri Lanka and agarwood and the relationship between place and quality.</p>
<p class="mb-4">What I found was disturbing. What I found was exciting. What I found was the beginning of a completely new way of understanding agarwood.</p>
<p class="mb-4">Sri Lanka had been producing exceptional agarwood for thousands of years. Ancient texts mentioned it. Trade records documented it. But somewhere along the way — perhaps during colonial periods when other sources became dominant, perhaps because of changing trade routes and market preferences — Sri Lanka had been written off. Dismissed. Forgotten.</p>
<p class="mb-4">No one was looking at Sri Lanka anymore. No one was paying attention to what Sri Lanka might be producing. And so Sri Lanka's exceptional agarwood was either being sold under other names or simply not being recognized for what it was.</p>

<p class="mb-4"><strong>Nature Had Already Done the Hard Work</strong></p>
<p class="mb-4">Here is what I understood, finally, after months of questions and research and thinking: nature does not care about our categories.</p>
<p class="mb-4">We — the agarwood industry, the collectors, the traders, the experts — we have built systems of classification based on history, reputation, assumption. We have decided that Vietnamese is better than Cambodian, that Laotian is better than Vietnamese, that some sources are premium and others are standard and others don't matter at all. These classifications serve a purpose. They make trading easier. They create shared vocabulary. They allow us to communicate about something that is fundamentally difficult to communicate about.</p>
<p class="mb-4">But nature is not bound by our classifications. A tree does not know that it is growing in Vietnam or Sri Lanka or Cambodia. A tree responds to its environment — the soil, the climate, the altitude, the rainfall, the insects and fungi that attack it, the complex cascade of factors that cause a tree to produce resin. Nature makes agarwood. We make categories. And our categories do not always reflect what nature is actually doing.</p>
<p class="mb-4">The piece from that evening — the piece that smelled Vietnamese but was Sri Lankan — was evidence of this. Nature had produced something extraordinary. We had categorized it away.</p>
<p class="mb-4">This is the question that changed everything: What else have we categorized away?</p>`,
      isChapter: true
    },
    {
      id: 'ch6',
      title: 'The Search for the Perfect Oud Oil',
      content: `<p class="mb-4"><strong>It Was Never the Plan</strong></p>
<p class="mb-4">NUHOUD was not supposed to happen this way. The plan — the one I had in my head for years, the one I used to justify my gradual approach to the family business — was to build something slow. Something careful. Something that would not require me to make decisions I wasn't ready to make.</p>
<p class="mb-4">I would work with my father. Learn from him. Eventually take over the family business. Maintain the existing relationships, the existing suppliers, the existing customers. Keep things going the way they had always been going. This was the plan. This was the safe path. This was the path that did not require me to believe in anything except continuity.</p>
<p class="mb-4">But then the question arrived. The Sri Lankan question. The one that refused to leave. And once a question like that takes hold, you cannot go back to the person you were before you asked it.</p>

<p class="mb-4"><strong>If We Were Going To Do It…</strong></p>
<p class="mb-4">My father and I had a conversation. I don't remember exactly where we were — a restaurant, probably, or his office. But I remember the feeling of the conversation. The weight of it. The sense that something was shifting.</p>
<p class="mb-4">"If we were going to do this," I said, "if we were going to actually pursue this — really search for the best, really try to find what we think is out there — then we need to commit. We can't do it halfway."</p>
<p class="mb-4">He looked at me. He had been waiting for this, I think. He had seen the question taking hold of me. He had watched me struggle with it. And now here I was, finally ready to say out loud what we both knew I was going to say eventually.</p>
<p class="mb-4">"What are you thinking?" he asked.</p>
<p class="mb-4">"I want to find the perfect oud oil. Not the most expensive. Not the most famous. The perfect one. The one that represents what this thing can be at its absolute best. And I want to build NUHOUD around that."</p>
<p class="mb-4">He was quiet for a long moment. And then he nodded.</p>
<p class="mb-4">"Okay," he said. "Let's do it."</p>

<p class="mb-4"><strong>Twenty Kilograms</strong></p>
<p class="mb-4">We started with twenty kilograms of Sri Lankan agarwood. Twenty kilograms of wood from a specific region, a specific type of tree, harvested at a specific time of year by people we trusted. Twenty kilograms of potential.</p>
<p class="mb-4">Twenty kilograms is not a lot, in the scheme of things. The agarwood market moves in much larger quantities. But we weren't thinking about quantity. We were thinking about quality. We were thinking about the piece from Lamding — the one that had changed everything for me. We were thinking about what might be possible if we were willing to search for it.</p>
<p class="mb-4">The wood arrived. We opened the crates. We examined it piece by piece, applying everything we had learned — everything my father had learned from his father, everything I had learned from watching my father, everything we had learned together from years of being in this world.</p>
<p class="mb-4">And we were not disappointed. The wood was extraordinary. Not all of it — you never get all extraordinary — but enough of it. Enough of it to know that we had found something. Something that deserved to be pursued.</p>

<p class="mb-4"><strong>I Wanted More</strong></p>
<p class="mb-4">Twenty kilograms was not enough. As soon as I smelled what those twenty kilograms could produce, I knew. I wanted more. I wanted to find every exceptional piece of Sri Lankan agarwood that we could access. I wanted to build a collection. A real collection — not a curated selection, not a greatest-hits of what the market already knew, but something deeper. Something more true.</p>
<p class="mb-4">My father understood. He had been waiting for this hunger in me. Not the hunger of a businessman seeking profit — though profit would come if the quality was real. The hunger of a person who has found something they believe in and cannot stop until they have found all of it.</p>
<p class="mb-4">We expanded the search. We reached out to contacts in Sri Lanka. We asked questions. We followed leads. We traveled when we could. We did not accept what the market offered us — we sought what we believed existed, and we refused to settle until we found it.</p>

<p class="mb-4"><strong>The Wood Has Its Own Composition</strong></p>
<p class="mb-4">Here is something that took me a long time to understand: the wood has its own composition. Not just the chemical composition — though that is part of it — but the composition of the thing itself. The tree. The forest. The climate. The specific combination of factors that produced this piece of agarwood at this moment in time.</p>
<p class="mb-4">Two pieces of agarwood from the same tree can be entirely different. The part of the tree, the age of the resin, the way it was harvested, the conditions under which it was stored — all of these factors change what the wood is. The wood is not a static object. It is a record of everything that has happened to it.</p>
<p class="mb-4">This is what we were searching for. Not just high-quality agarwood — that is available to anyone with enough money and connections. We were searching for the specific compositions. The specific records. The specific stories that wood can tell if you know how to listen.</p>

<p class="mb-4"><strong>The Search Had Began</strong></p>
<p class="mb-4">This is when it began. Not the business — the business came later, as a container for what we had found. But the search itself. The commitment to finding the exceptional. The willingness to look where no one else was looking, to ask questions that had no easy answers, to believe that there was more out there than what the market already knew.</p>
<p class="mb-4">NUHOUD exists because of this search. Everything we have done — every piece we have sourced, every oil we have released, every relationship we have built — has been an expression of this commitment. Not to the business of agarwood. To the thing itself. To the possibility that exceptional quality still exists, still can be found, still can be shared with people who are willing to seek it.</p>
<p class="mb-4">The search is not over. It will never be over. That is the point.</p>`,
      isChapter: true
    },
    {
      id: 'ch7',
      title: 'Every Forest Has a Voice',
      content: `<p class="mb-4"><strong>A Different Kind of Hunt</strong></p>
<p class="mb-4">Sourcing exceptional agarwood is not like sourcing other luxury goods. There are no authorized dealers. No official certifications. No brand names that guarantee quality. You cannot go to a website and order the best agarwood in the world with next-day delivery. You have to find it. And finding it requires a different kind of hunt.</p>
<p class="mb-4">This hunt takes many forms. Sometimes it is a conversation — a casual mention by someone you trust, a reference to a person you have never heard of who lives in a place you have never visited. Sometimes it is a journey — an actual physical journey to a forest or a village or a warehouse where exceptional material might exist. Sometimes it is years of building relationships until someone, finally, shows you something they have been saving for the right person.</p>
<p class="mb-4">The hunt is not efficient. It is not scalable. It cannot be systematized or optimized. It requires presence. Patience. Trust. The willingness to show up, again and again, until the thing reveals itself.</p>

<p class="mb-4"><strong>The Philippines</strong></p>
<p class="mb-4">The Philippines surprised me. I had not expected much — agarwood from the Philippines was not on my radar, not in my mental model of where exceptional material came from. But my father had been there. He had been to the forests. He had seen what was growing there.</p>
<p class="mb-4">"Go," he said. "See for yourself."</p>
<p class="mb-4">I went. I spent time in the forests. I met the people who were working there — the harvesters, the local traders, the craftsmen who were processing the wood. I smelled what they had. I tasted it, the way you sometimes need to taste something to truly understand it.</p>
<p class="mb-4">What I found was unexpected. The Philippines had something. Not the same as Sri Lanka, not the same as Vietnam or Cambodia or Laos — but something. A character. A voice. Something that was distinctly Filipino in a way I had never encountered before.</p>
<p class="mb-4">We brought some back. We processed it. And it was good. Not the best we had found — but good. Interesting. Worth pursuing further. Worth understanding.</p>
<p class="mb-4">This is how it works. You go. You look. You smell. You listen. And sometimes, in places you did not expect, you find something worth hearing.</p>

<p class="mb-4"><strong>Six Kilograms</strong></p>
<p class="mb-4">There was a collector. A man who had spent decades building a private collection of exceptional agarwood from all over the world. He had pieces that I had never seen — not in my father's warehouse, not in the finest collections I had encountered. Rare material. Old material. Material that had been saved, carefully preserved, waiting for the right moment and the right person.</p>
<p class="mb-4">He agreed to meet with me. To show me what he had. I did not know what to expect.</p>
<p class="mb-4">He showed me six kilograms. Six kilograms of wood that stopped me in my tracks. The smell was... there are no words that do it justice. Complex. Deep. Ancient. Each piece had its own character, its own story, its own voice. But they were all speaking the same language — the language of exceptional quality, the language of something truly rare.</p>
<p class="mb-4">"This is what I have," he said. "This is everything I have been saving."</p>
<p class="mb-4">I did not haggle. I did not negotiate. I did not try to get a better price. I paid what he asked. Because some things are not about the price. Some things are about the moment. About recognizing when something is right in front of you and understanding that you may never see it again.</p>

<p class="mb-4"><strong>The Answer</strong></p>
<p class="mb-4">Six kilograms became part of the NUHOUD collection. Not all of it — some of it was not exceptional enough for what we were building. But enough of it. Enough to know that we were on the right path. Enough to validate the hunt.</p>
<p class="mb-4">And this is what I learned from that experience: the answer is always out there. It is not a question of whether exceptional agarwood exists — it does. It is not a question of whether it can be found — it can. The question is only whether you are willing to do what it takes to find it. Whether you are willing to travel. To wait. To build relationships. To show up again and again, even when you don't know if the search will pay off.</p>
<p class="mb-4">The answer is always out there. But it does not come to people who are looking for shortcuts.</p>

<p class="mb-4"><strong>The Wood Comes First</strong></p>
<p class="mb-4">Here is a principle that guides everything we do at NUHOUD: the wood comes first.</p>
<p class="mb-4">Not the brand. Not the packaging. Not the marketing story. Not the price point or the distribution strategy or the customer experience. The wood comes first. Everything else is secondary.</p>
<p class="mb-4">This seems obvious, but in practice it is revolutionary. Most of the agarwood business is built on other foundations — on relationships, on reputation, on the ability to move product. The quality of the wood is important, of course, but it is rarely the primary consideration. People buy from people they trust, from sources they know, in ways that are comfortable and familiar.</p>
<p class="mb-4">We have chosen a different path. We start with the wood. We find the best wood we can find. And then we build everything else around it. The brand exists to serve the wood. The packaging exists to honor the wood. The customer experience exists to help people access the wood in the way it deserves to be accessed.</p>

<p class="mb-4"><strong>I Went Looking for Malino</strong></p>
<p class="mb-4">Malino is a region in Indonesia. It is known for many things — the coffee, the climate, the mountains. But it is not known for agarwood. At least, it was not known for agarwood. Not by anyone I had spoken to. Not in any of the literature I had read or the conversations I had had.</p>
<p class="mb-4">But my father had heard something. A rumor. A whisper. A suggestion that Malino might be producing something worth looking at. And so I went.</p>
<p class="mb-4">The journey was not easy. Malino is not a simple place to reach — it requires patience, flexibility, the willingness to go where the road takes you even when the road does not take you where you expected. I spent days there. I met people. I smelled wood. I tasted it, the way I had learned to do in the Philippines.</p>
<p class="mb-4">And I found something.</p>
<p class="mb-4">Not exceptional by the standards we had already established — but real. A voice that was distinctly Malino. A character that was its own. Something that had not been seen in the global agarwood market before. Something that belonged to a place that the world had not thought to look at.</p>
<p class="mb-4">We brought some back. We processed it. We released it as part of the NUHOUD collection. And it found its audience — people who recognized what it was, who understood that it was something new, something that had not existed in the market before.</p>

<p class="mb-4"><strong>What Others Might Call Leftovers</strong></p>
<p class="mb-4">In the agarwood business, there is a category of material that most people ignore. It is the material that is left over after the prime pieces have been selected. The smaller pieces. The less visually impressive pieces. The pieces that do not announce themselves. The material that most traders would call scraps.</p>
<p class="mb-4">We do not call them leftovers. We call them opportunity.</p>
<p class="mb-4">Here is what I have learned: the visual appearance of agarwood is a poor indicator of quality. The most valuable piece in a collection might be the smallest, the least dramatic, the piece that most people would walk past without stopping. And the piece that looks most impressive might produce oil that is merely ordinary.</p>
<p class="mb-4">We examine everything. We smell everything. We give every piece a chance to reveal itself. And sometimes — not often, but sometimes — the pieces that others ignored become the finest in our collection.</p>

<p class="mb-4"><strong>Another Forest Speaks</strong></p>
<p class="mb-4">The forests of Papua New Guinea are among the least explored in the world. Vast. Remote. Full of life that has not yet been documented by science. Full of agarwood that has not yet been assessed by the market.</p>
<p class="mb-4">We went there. Of course we went there. The question is not whether we should explore new forests — the question is always how and when. Papua New Guinea was next.</p>
<p class="mb-4">What we found was a voice. A distinct, unmistakable voice. Different from Sri Lanka. Different from the Philippines. Different from Malino. Different from anywhere we had looked before.</p>
<p class="mb-4">This is the pattern. This is what we have learned to expect. Every forest has a voice. Every place where agarwood grows has something to say. The challenge is not whether the voice exists — it always exists. The challenge is whether you are willing to listen.</p>

<p class="mb-4"><strong>Every Forest Has a Voice</strong></p>
<p class="mb-4">This is what NUHOUD is built on. Not a single source. Not a single origin. Not a single voice. Every forest has a voice. And our commitment — our real commitment, the one that goes beyond marketing and branding and all the surface-level things that businesses usually care about — is to listen.</p>
<p class="mb-4">We have found voices in Sri Lanka. In the Philippines. In Malino. In Papua New Guinea. In places we have not yet told you about. In forests we have not yet visited. In conversations we have not yet had.</p>
<p class="mb-4">The hunt continues. It will always continue. Because there is always another voice. There is always another forest. There is always more to discover, more to understand, more to share with people who are willing to listen.</p>

<p class="mb-4"><strong>Preservation</strong></p>
<p class="mb-4">I want to say something about preservation. About the responsibility that comes with exceptional resources.</p>
<p class="mb-4">Agarwood is not infinite. The trees that produce it are not abundant. The forests where it grows are under pressure. The knowledge of how to harvest it sustainably — knowledge that existed in traditional communities before industrialization and globalization disrupted everything — is being lost.</p>
<p class="mb-4">We are not naive about this. We understand that our business exists within a larger context — a context of ecological fragility, cultural complexity, ethical uncertainty. We make choices. We ask questions. We try to work with people who share our values, who understand that exceptional quality and sustainable practice are not in conflict.</p>
<p class="mb-4">This is not a perfect system. There is no perfect system. But we try. We try to be thoughtful. We try to be responsible. We try to remember that the wood we hold in our hands is not just a product — it is a gift. A gift from the forest. A gift from the tree. A gift from everyone who has touched it along the way.</p>
<p class="mb-4">We do not take that gift lightly.</p>
<p class="mb-4">And we will keep listening. To every forest. To every voice. For as long as there are forests to listen to. For as long as there are voices to hear.</p>
<p class="mb-4">This is NUHOUD.</p>`
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
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#1a1a1a] via-[#1a1a1a] to-transparent pb-4">
        <div className="max-w-4xl mx-auto px-4 pt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isMobile && (
              <button
                onClick={() => setShowChapterList(!showChapterList)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Toggle chapter list"
              >
                <List size={20} />
              </button>
            )}
            <h1 className="text-2xl font-light tracking-[0.3em] text-white/90">{story.title}</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsReadMode(!isReadMode)}
              className={`p-2 rounded-lg transition-colors ${
                isReadMode ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white'
              }`}
              aria-label="Toggle read mode"
            >
              <BookOpen size={20} />
            </button>
            {isReadMode && (
              <>
                <button
                  onClick={handleEnterEdit}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/60 hover:text-white"
                  aria-label="Edit chapter"
                >
                  <Edit3 size={20} />
                </button>
                <button
                  onClick={handleReset}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/60 hover:text-white"
                  aria-label="Reset to default"
                >
                  <Trash2 size={20} />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Chapter Title */}
        <div className="max-w-4xl mx-auto px-4 mt-2">
          <h2 className="text-sm font-light tracking-wide text-white/50">
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
              className="fixed top-20 left-0 right-0 z-40 bg-[#1a1a1a] border-b border-white/10"
            >
              <div className="max-h-[50vh] overflow-y-auto p-4">
                {story.chapters.map((chapter, index) => (
                  <button
                    key={chapter.id}
                    onClick={() => goToChapter(index)}
                    className={`block w-full text-left py-3 px-2 rounded-lg transition-colors ${
                      index === activeChapter
                        ? 'bg-white/10 text-white'
                        : 'text-white/60 hover:bg-white/5 hover:text-white/80'
                    }`}
                  >
                    <span className="text-xs text-white/40 mr-2">{index + 1}.</span>
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
        <aside className="fixed left-0 top-24 bottom-0 w-48 overflow-y-auto z-30 bg-[#1a1a1a]/50 backdrop-blur-sm">
          <nav className="p-4 space-y-1">
            {story.chapters.map((chapter, index) => (
              <button
                key={chapter.id}
                onClick={() => goToChapter(index)}
                className={`block w-full text-left py-2 px-3 rounded-lg text-sm transition-colors ${
                  index === activeChapter
                    ? 'bg-white/10 text-white'
                    : 'text-white/50 hover:bg-white/5 hover:text-white/70'
                }`}
              >
                <span className="text-white/30 mr-2">{index + 1}.</span>
                {chapter.title}
              </button>
            ))}
          </nav>
        </aside>
      )}

      {/* Main Content */}
      <main className={`pt-32 ${!isMobile ? 'pl-48' : ''}`}>
        <div className="max-w-3xl mx-auto px-4 pb-32">
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
                className="w-full h-[60vh] bg-white/5 border border-white/10 rounded-lg p-4 text-white/80 font-serif leading-relaxed resize-none focus:outline-none focus:border-white/30"
                placeholder="Edit chapter content..."
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={handleCancelEdit}
                  className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors flex items-center gap-2"
                >
                  <X size={18} />
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 rounded-lg bg-white text-black hover:bg-white/90 transition-colors flex items-center gap-2"
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
              className="prose prose-invert prose-lg max-w-none"
            >
              <div
                className="font-serif text-white/80 leading-[1.9] text-[17px]"
                dangerouslySetInnerHTML={{ __html: currentChapter?.content || '' }}
              />
            </motion.div>
          )}
        </div>
      </main>

      {/* Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a] to-transparent pt-8 pb-4">
        <div className={`max-w-4xl mx-auto px-4 flex items-center justify-between ${!isMobile ? 'pr-48' : ''}`}>
          <button
            onClick={prevChapter}
            disabled={activeChapter === 0 || isEditingRef.current}
            className={`p-3 rounded-full transition-all ${
              activeChapter === 0
                ? 'opacity-20 cursor-not-allowed'
                : 'hover:bg-white/10'
            }`}
            aria-label="Previous chapter"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Progress indicator */}
          <div className="flex items-center gap-1">
            {story.chapters.map((_, index) => (
              <button
                key={index}
                onClick={() => goToChapter(index)}
                disabled={isEditingRef.current}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === activeChapter
                    ? 'bg-white w-6'
                    : index < activeChapter
                    ? 'bg-white/40'
                    : 'bg-white/20 hover:bg-white/30'
                }`}
                aria-label={`Go to chapter ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextChapter}
            disabled={activeChapter === story.chapters.length - 1 || isEditingRef.current}
            className={`p-3 rounded-full transition-all ${
              activeChapter === story.chapters.length - 1
                ? 'opacity-20 cursor-not-allowed'
                : 'hover:bg-white/10'
            }`}
            aria-label="Next chapter"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </nav>
    </div>
  );
}
