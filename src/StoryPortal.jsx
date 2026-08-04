import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, BookOpen, Edit3, Plus, Trash2, Save, Eye, X, Menu, List, AlignLeft } from 'lucide-react'

// Story data structure - each chapter preserves exact text
const DEFAULT_STORY = {
  title: "Before There Was NUHOUD",
  subtitle: "A journey through time",
  author: "Shahid Ahmed — Bu Nuh",
  coverImage: null,
  chapters: [
    {
      id: 1,
      title: "A Family Shaped by Agarwood",
      content: `Every family has something that quietly defines them.

For some, it is farming.

For others, it is the sea.

Some families have spent generations making watches, building furniture, or working with horses.

My family was shaped by agarwood.

Long before there was a perfume called Tamed Ghalia...

Long before I ever held a distillation flask in my hands...

Long before the name NUHOUD existed...

There was agarwood.

Not as a luxury.

Not as a business.

But as a way of life.

People often ask me how I became interested in oud.

The truth is, I don't remember becoming interested in it.

It was already there before I was old enough to understand what it was.

Some of my earliest memories are filled with the smell of burning agarwood.

I remember my father sitting quietly, smelling one oud oil after another.

Sometimes he would return to the same bottle several times in a single day.

He wasn't smelling it because he couldn't remember it.

He was studying it.

Listening to it.

Trying to understand it.

As a child, I never understood why.

To me, it was simply something my father always did.

Our home was different from most homes, although I didn't realise it at the time.

Collector-grade agarwood was always around us.

Workers came and went throughout the day.

Some carefully cleaned pieces of wood.

Some sorted them.

Some packed them.

Collectors visited regularly.

Hunters arrived with stories from forests that sounded like places from another world.

Conversations around me were rarely about ordinary things.

Instead, I heard names of regions.

Assam.

Cambodia.

Bangladesh.

Laos.

Indonesia.

Malaysia.

As a child, they were simply names.

Today, every one of those places tells a story.

Looking back, I realise I received an education long before anyone intended to teach me.

Nobody sat me down and explained agarwood.

Nobody gave me lessons.

Nobody told me to become a hunter, a distiller or a perfumer.

Instead, I watched.

Quietly.

Every single day.

Children learn far more by watching than by listening.

Without realising it, I was watching my father make decisions that would later shape my own life.

Sometimes he would reject a piece of agarwood that looked extraordinary to everyone else.

Other times he became excited over a piece that nobody else even noticed.

As a child, I couldn't understand those decisions.

Years later, I realised I had been watching experience.

I had been watching thousands upon thousands of hours of knowledge being applied in silence.

Today people sometimes ask me where my eye for agarwood comes from.

I honestly don't know how to answer that question.

Because I don't remember learning it.

It became part of me little by little, over many years, simply by growing up in that environment.

When I think back to my childhood, I don't first remember money.

I don't remember business.

I remember the smell.

The smell of burning agarwood.

Even today, after everything I have smelled throughout my life, I still believe there is nothing more beautiful than placing an exceptional piece of agarwood onto hot charcoal.

That very first moment.

The first wave of aroma that rises into the air.

For me, nothing has ever surpassed it.

Not a flower.

Not another perfume.

Not another natural material.

That smell is still the most beautiful thing I know.

Perhaps that is why I have spent so much of my life trying to preserve it.

But my family's story with agarwood began long before I was born.

My great grandfather was already hunting agarwood.

My grandfather continued that journey.

Then my father dedicated his own life to it.

Each generation inherited knowledge from the one before it.

But something even more important was passed down.

Respect.

None of them ever spoke about agarwood as though it were simply another product.

It was never treated like a commodity.

It was treated almost like a living part of nature.

Something that deserved understanding before it deserved profit.

That idea stayed with me.

The older I became, the more I realised that my family's greatest inheritance was never the agarwood itself.

It was the way they looked at it.

Curiosity was more important than certainty.

Learning was more important than selling.

Respect was more important than profit.

I believe those values are becoming increasingly rare today.

Perhaps that is one of the reasons I felt such a responsibility to create NUHOUD.

Not because the world needed another perfume house.

Because I didn't want those values to disappear.

Knowledge can disappear in a single generation.

Stories disappear even faster.

If nobody tells them, they are eventually forgotten.

That thought stayed with me for many years.

I realised that one day my own son might ask me the same question people ask today.

"How did all of this begin?"

When that day comes, I don't want to hand him only bottles.

I want to hand him stories.

I want him to understand that before there was NUHOUD...

There was a family.

A family that travelled through forests.

A family that spent generations learning from one of nature's greatest creations.

A family that believed the material always deserved more respect than the market gave it.

This book is my way of making sure those stories are never lost.

Because perfumes eventually evaporate.

Bottles eventually become empty.

Even agarwood itself is becoming harder to find.

But stories...

Stories can survive forever, if someone chooses to preserve them.

And that is where the story of NUHOUD truly begins.`,
      isPlaceholder: false
    },
    {
      id: 2,
      title: "The Man I Never Met",
      content: `There is one person who has had a profound influence on my life, even though I never had the opportunity to meet him.

My grandfather.

Everything I know about him came from my father.

Interestingly, whenever my father spoke about his own father, he rarely began by talking about agarwood.

He rarely spoke about business.

He rarely spoke about money.

He rarely spoke about success.

Instead, he always spoke about the kind of man he was.

My father described him as one of the kindest people he had ever known.

He was a simple man.

Not simple because he lacked knowledge.

Simple because he lived without pretending to be something he wasn't.

He trusted people.

Sometimes more than he probably should have.

He believed what people told him.

He saw the good in others before he looked for the bad.

He loved his family deeply.

Whenever I asked my father about his childhood, I expected to hear stories about discipline or strictness.

Instead, I heard stories about kindness.

I don't remember my father ever telling me that his father beat him.

I don't remember stories of fear.

I remember stories that always ended with admiration.

Looking back today, I realise something very important.

The greatest lessons my grandfather left behind had nothing to do with agarwood.

They had everything to do with character.

Knowledge can be learned.

Skills can be practiced.

Experience comes with time.

Character is different.

Character is what determines how knowledge is used.

My grandfather understood agarwood.

He knew forests.

He knew how to recognise extraordinary material.

But what my father admired most was never his knowledge.

It was the way he treated people.

That tells me everything I need to know about the kind of man he was.

Sometimes I wonder what it would have been like to sit beside him.

To travel with him.

To hear his stories directly instead of through someone else.

I wonder what he would think if he could see how far our family's journey has come.

Would he recognise today's world of perfume?

Would he recognise the forests?

Would he recognise the way agarwood is traded today?

I don't know.

But I hope he would recognise something much more important.

The values.

Because I believe those values have survived.

Not perfectly.

No family is perfect.

But they survived.

They travelled from my grandfather...

To my father...

And eventually...

To me.

People often think an inheritance is something you can hold in your hands.

Money.

Land.

Jewellery.

Businesses.

Those things matter.

But I believe the greatest inheritance is something much harder to see.

It is the way one generation teaches the next how to look at the world.

My grandfather passed that way of seeing to my father.

My father passed it to me.

And today, whether I realise it or not, I am preparing to pass it to my own son.

Perhaps that is how legacies truly survive.

Not through what we own.

But through what we choose to preserve.

One story my father told me has stayed with me for my entire life.

It is a story that, in many ways, explains my grandfather better than any description ever could.

It is not a story about finding extraordinary agarwood.

It is not a story about business.

It is not a story about success.

It is simply a story about honesty.

And it began one afternoon, when my grandfather stopped beside a small village pond to perform his prayer.`,
      isPlaceholder: false
    },
    {
      id: 3,
      title: "The Staircase",
      content: `Many years ago, long before Bangladesh became an independent country, my grandfather was travelling on horseback through the countryside.

Life was very different then.

People travelled slowly.

Villages were small.

If the time for prayer arrived while you were travelling, it was perfectly normal to stop at a nearby home and politely ask for water to perform your ablution.

On that particular day, my grandfather approached the home of a Hindu family.

He greeted them respectfully and asked if he could use the water from their pond before praying.

Without hesitation, they welcomed him.

He tied his horse nearby and walked towards the pond.

Like many village ponds, wooden steps had been built leading down into the water.

As he walked down those steps, something immediately caught his attention.

One of the steps wasn't ordinary timber.

It was agarwood.

The family had no idea.

To them, it was simply another piece of wood.

But my grandfather recognised it instantly.

People sometimes ask me how he could possibly know.

The answer is simple.

Agarwood was already part of his life.

He had spent so much time around it that he recognised it immediately, even after it had been cut, weathered and used as part of a staircase.

He completed his ablution.

He stood and performed his prayer.

Only after he had finished did he return to the owner of the house.

He thanked him for his kindness.

Then he asked a question.

"If I build you a new staircase with stronger wood, would you allow me to take these steps?"

The owner happily agreed.

True to his word, my grandfather replaced the entire staircase before taking the agarwood away.

He never took advantage of the family's lack of knowledge.

He never tried to deceive them.

He never allowed his own knowledge to become an excuse for dishonesty.

That story has stayed with me ever since my father first told it to me.

Not because it is about finding agarwood.

But because it reminds me that knowledge only has value when it is guided by character.

Today, whenever I think about my grandfather, this is the story that comes to mind first.

I never met him.

I never heard his voice.

I never travelled beside him.

Yet somehow, through one simple story, I feel as though I know the kind of man he was.

And perhaps that is the greatest gift stories can give us.

They allow us to meet people we were never fortunate enough to know.`,
      isPlaceholder: false
    },
    {
      id: 4,
      title: "An Inheritance Beyond Wood",
      content: `When people hear the words family legacy, they often imagine land, businesses or wealth.

I don't.

When I think about my family's legacy, I think about something much more difficult to preserve.

A way of seeing.

Looking back today, I realise that my family never taught me to chase agarwood.

They taught me to respect it.

There is a very big difference.

Respect changes the way you make decisions.

Respect teaches patience.

Respect teaches honesty.

Respect teaches you that nature is never something to conquer.

It is something to learn from.

As a child, I didn't understand those lessons.

I wasn't sitting beside my father taking notes.

I wasn't following my grandfather through forests.

Most of what I learned happened without anyone trying to teach me.

It happened while I was simply living.

It happened while watching my father spend hours smelling the same oud oil.

It happened while listening to conversations I was far too young to understand.

It happened while walking through rooms filled with pieces of agarwood that today I would feel privileged just to see again.

At the time, none of it seemed unusual.

It was simply my life.

Only years later did I realise that my education had already begun.

People often ask me how I learned to recognise agarwood.

How I learned to judge quality.

How I developed my nose.

The truth is...

I don't remember learning.

I remember living.

That is the greatest difference.

Knowledge passed through books is valuable.

Knowledge passed through generations becomes part of who you are.

Sometimes I ask myself what my father truly inherited from his father.

Was it agarwood?

Perhaps.

Was it knowledge?

Certainly.

But I think he inherited something even greater.

Curiosity.

The curiosity to keep searching.

The curiosity to question accepted ideas.

The curiosity to travel to another forest simply because someone whispered that something extraordinary had been found there.

That same curiosity eventually found its way into me.

It is the reason I still ask questions today.

Why does this origin smell different?

Why does this oil remind me of the wood while another one doesn't?

Why do some materials move us so deeply?

Those questions have shaped my life far more than answers ever have.

If there is one thing I hope to pass on to my own son one day, it is not simply knowledge.

Knowledge can always be learned.

I hope to pass on curiosity.

Because curiosity is what keeps knowledge alive.

Without curiosity, traditions slowly disappear.

Without curiosity, craftsmanship becomes repetition.

Without curiosity, people stop asking whether something can be done better.

When I chose the name NUHOUD, many people assumed it was simply because it sounded beautiful.

It does.

But the reason is much deeper than that.

The name begins with my son, Nuh.

I wanted every bottle carrying the name NUHOUD to remind me why I am doing this.

Not for myself.

Not even for today.

But for the generations that come after me.

One day, Nuh may ask me,

"Why did you dedicate your life to perfume?"

When that day comes, I don't want to answer by showing him awards.

Or sales figures.

Or beautiful bottles.

I want to hand him this book.

I want him to understand that everything began long before I was born.

I want him to know his great-grandfather recognised agarwood where others saw only wood.

I want him to know his grandfather travelled across forests because knowledge mattered more than comfort.

I want him to know that his own grandfather, my father, built a life around curiosity, kindness and an uncompromising respect for agarwood.

And I want him to understand that my role was never to replace their legacy.

Only to continue it.

Perhaps that is the true meaning of inheritance.

Not receiving something.

But becoming responsible for it.

That responsibility eventually became NUHOUD.

It is not simply a perfume house.

It is not simply a collection of bottles.

It is a promise.

A promise to preserve the knowledge that came before me.

A promise to remain honest to nature.

A promise to continue asking questions.

A promise to keep learning.

And above all...

A promise that when my own son one day continues this journey, he will inherit far more than wood.

He will inherit the values that gave that wood meaning.

Because agarwood, extraordinary as it is, was never the greatest treasure my family passed down.

The greatest treasure was the way they chose to live.

And everything that follows in this book is my attempt to honour that gift.`,
      isPlaceholder: false
    },
    {
      id: 5,
      title: "The Boy Who Wore Agarwood",
      content: `Growing Up in a Different World

One of the strange things about childhood is that you never realise how unusual your life is while you are living it.

Whatever surrounds you every day simply becomes normal.

Only years later do you look back and realise that what felt ordinary to you was something most people would never experience in their lifetime.

That is exactly how I think about my childhood.

When I was young, I didn't think I was growing up in a family with a rare relationship to agarwood.

I thought every family had a father who spent hours smelling oud oils.

I thought every family had workers carrying extraordinary pieces of agarwood in and out of warehouses.

I thought every child knew the smell of fresh agarwood burning on charcoal.

To me, that was simply home.

I remember walking through my father's warehouse and seeing pieces of agarwood that today I would consider museum pieces.

At that time, they were simply pieces of wood lying around.

Workers carefully cleaned them.

Sorted them.

Packed them.

Customers came from different places to see them.

Collectors would spend hours sitting with my father discussing quality, origins and the personalities of different woods.

I never understood those conversations.

I was too young.

But I remember listening.

Without realising it, I was absorbing a language that would later become my own.

Sometimes I think that was my real education.

Not in a classroom.

But sitting quietly in the corner while extraordinary people spoke about extraordinary materials.

I remember watching my father hold a piece of agarwood in his hands.

He never rushed.

He would turn it slowly.

Look at it from different angles.

Sometimes he smelled the wood before saying anything.

Other times he remained completely silent.

As a child I wondered why something that looked like an ordinary piece of wood deserved so much attention.

Today I understand.

He wasn't looking at wood.

He was reading its story.

Every piece had travelled through forests.

Every piece carried years, sometimes decades, of nature's work.

Every piece deserved respect.

That lesson stayed with me.

Long before I understood perfume...

I learned to respect the material.

The Pendant

One of my favourite memories from childhood happened when I was around five or six years old.

Like many young boys, I wanted something to wear around my neck.

A pendant.

Most fathers would probably have taken their son to a jewellery shop.

My father did something completely different.

He walked over to a beautiful piece of dark agarwood and selected a small section from it.

Then he asked one of the craftsmen working with him to carve it into a pendant.

I still remember how proud I was to wear it.

At that age, I had absolutely no idea how valuable that little piece of agarwood really was.

To me, it wasn't rare.

It wasn't precious.

It was simply my necklace.

I wore it everywhere.

Sometimes I became so used to wearing it that I forgot it was even there.

More than once, I left it inside my pocket when my mother washed my clothes.

Every time it came out of the washing machine it looked different.

The rich dark colour had faded.

It almost looked white.

I thought I had ruined it.

But something interesting always happened.

After wearing it again for a few days, after carrying it in my pocket and touching it with my hands, the colour slowly returned.

Little by little it became dark again.

Almost black.

At the time I simply found that interesting.

Today, I realise how beautiful that memory really is.

Even that small piece of agarwood seemed alive.

The Photograph

Many years later, while looking through old family photographs, I came across a picture of myself standing beside an enormous piece of agarwood.

When I first looked at that photograph as an adult, I smiled.

Not because of how young I looked.

Because of what the photograph represented.

To anyone else, that piece of agarwood would be extraordinary.

To me...

It was simply another day.

That single photograph says something words cannot fully explain.

It reminds me that my relationship with agarwood did not begin when I became a distiller.

It did not begin when I created my first perfume.

It did not begin when I started travelling through forests.

It began long before I understood any of those things.

It began in childhood.

Sometimes people tell me,

"You were lucky."

Perhaps they are right.

But I don't think luck alone explains it.

I believe I was entrusted with something.

The opportunity to grow up surrounded by one of nature's greatest creations.

With that opportunity came responsibility.

The responsibility to continue learning.

To continue asking questions.

And one day...

To continue preserving it.

The Craftsmen

Some of my earliest memories are not only of agarwood.

They are of the people who dedicated their lives to it.

Most of the craftsmen who worked for my father came from our own village.

To many people, they were simply workers.

To me, they were artists.

They understood agarwood in a way that very few people ever could.

Every piece that entered my father's warehouse was handled with patience and respect.

Cleaning agarwood is not simply about removing unwanted parts.

It is about revealing the beauty that is already inside the wood.

That was something my father understood better than anyone.

He always believed that if a piece of agarwood was truly beautiful, then the way it was presented should reflect that beauty.

He would walk through the warehouse, stopping beside each craftsman, carefully inspecting the work.

Sometimes he would pick up a finished piece, run his hand across it and quietly hand it back.

"No..."

"It can still be better."

The craftsmen would laugh.

Sometimes they would joke among themselves.

"Uncle wants us to clean it even more."

"It already looks perfect."

"It doesn't need any more work."

But my father never accepted "good enough."

For him, every detail mattered.

I still remember one of his favourite jokes.

Whenever he felt a piece had not been finished properly, he would smile and tell the craftsman,

"Keep polishing it."

"When I come back, I'm going to rub it on your face."

"If it scratches your skin, then you haven't finished your job."

Everyone laughed.

It became one of those jokes that people remembered.

But behind the humour was something much deeper.

He wasn't really talking about someone's face.

He was teaching a philosophy.

Luxury should never feel unfinished.

If you are fortunate enough to work with something extraordinary, then your responsibility is to present it in the most beautiful way possible.

That lesson stayed with me.

Today, whenever I prepare a bottle, choose a piece of agarwood or even think about packaging, I often remember those moments.

Not because I hear my father's voice.

But because I understand what he was trying to teach us.

Respect the material.

Never rush the finishing.

Beauty deserves patience.

That philosophy has followed me far beyond agarwood.

It has followed me into perfumery.

People often ask me why I spend so much time perfecting tiny details that many customers may never even notice.

The answer is simple.

Because someone taught me that details matter.

Not because they make something more expensive.

Because they show respect.

Respect for the material.

Respect for the person who will eventually hold it in their hands.

Sometimes I think the craftsmen believed they were simply cleaning agarwood.

Looking back today, I realise they were helping shape the standards I still carry with me.

The Smell of the Warehouse

Every workshop has its own smell.

A bakery has the smell of fresh bread.

A leather workshop has the smell of leather.

A carpenter's workshop carries the scent of fresh timber.

My father's warehouse had a smell unlike anything I have experienced anywhere else.

Even today, if I walk into an old warehouse in Singapore or Indonesia, especially one filled with high-grade Kalimantan or Malaysian agarwood, I stop for a moment.

I close my eyes.

And for a few seconds...

I am a child again.

It is difficult to describe that smell because it is not the smell most people imagine when they think about agarwood.

It was not the smell of freshly cut wood from the jungle.

It was not the smell of wet earth.

It was not even the smell of burning agarwood.

It was something completely different.

It was the smell of dry, mature, high-grade agarwood quietly filling an entire room.

A deep, clean and comforting aroma.

Dry...

Yet incredibly alive.

The kind of smell that only exists when hundreds of exceptional pieces have rested together for years.

That smell became part of my childhood.

It filled the warehouse every day.

Sometimes there would be craftsmen carving large sculptures from agarwood for important clients.

Sometimes they were polishing collector's pieces.

Sometimes they were preparing gifts that would eventually travel to royal families, collectors and people who truly appreciated exceptional agarwood.

There was always work.

Always conversation.

Always laughter.

Always the sound of sandpaper gently moving across wood.

And always...

That smell.

At the time, I thought every warehouse in the world smelled like that.

Today I know how rare that experience really was.

Perhaps that is why scent has never been just scent to me.

Every smell carries a place.

Every smell carries a memory.

And no smell carries me back to childhood more quickly than walking into a warehouse filled with beautiful agarwood.

Looking Back

As a child, I never imagined that my life would revolve around agarwood.

In fact, there was a time when I believed I would never work in this world.

I wanted to find my own path.

Looking back now, I smile when I think about that.

Because perhaps my path had already begun long before I realised it.

Sometimes life prepares us quietly.

Without announcements.

Without plans.

Without us even noticing.

Years later, when people ask me where my journey with agarwood started, they expect me to tell them about my first distillation or my first successful perfume.

I usually smile.

Because the truth is much simpler.

It started with a little boy...

Who thought every family had agarwood lying around the house.

Who thought every father spent hours smelling oud oils.

Who thought every warehouse was filled with extraordinary wood.

Who proudly wore a pendant carved from agarwood without knowing how rare it really was.

Only much later did that little boy realise...

He hadn't just grown up around agarwood.

He had grown up inside a legacy.`,
      isPlaceholder: false
    },
    {
      id: 6,
      title: "The Man Who Taught Me Oud",
      content: `A Boy Who Chose the Forest

There are people who teach by giving answers.

My father taught by making me ask better questions.

When people ask me where my knowledge of agarwood comes from, they often imagine years of formal training.

They imagine someone sitting beside me, explaining different species, different origins, different grades and different distillation techniques.

That never happened.

My education happened quietly.

Without lessons.

Without notebooks.

Without anyone announcing that I was learning.

It happened simply because I was my father's son.

Every day I watched him.

Every day I listened.

Every day I absorbed things that, at the time, I didn't even realise were important.

Looking back today, I realise that my father never tried to make me love agarwood.

He simply lived his life with such passion that it became impossible not to notice.

He wasn't fascinated by agarwood because it was valuable.

He was fascinated because he believed nature still had secrets waiting to be discovered.

That curiosity defined his entire life.

He wasn't born into wealth.

Everything he built came through hard work.

Long before he became known for exceptional agarwood, he was simply a young boy trying to create a better future.

When he was only thirteen years old, he left what is now Bangladesh and crossed into India.

Life was completely different then.

Borders were different.

Travel was different.

The world itself felt different.

Like many young boys at that time, he worked wherever opportunity appeared.

One of those jobs involved transporting tea across the border.

Many people would remember that period simply as work.

My father remembered something else.

The forests.

It was during those journeys that he began discovering the forests of Assam.

While others saw difficult terrain...

He saw possibility.

He became fascinated by agarwood.

Not simply because it was valuable.

Because he couldn't stop wanting to understand it.

That curiosity never left him.

The more he learned...

The more he wanted to know.

The more forests he visited...

The more he realised every forest had its own story.

Every tree had its own character.

Every piece of agarwood had its own personality.

For many people, that would have been enough.

For my father...

It was only the beginning.

He wasn't interested in becoming someone who simply traded agarwood.

He wanted to become someone who truly understood it.

That difference shaped the rest of his life.

People sometimes ask me why I continue travelling today.

Why I continue searching.

Why I continue asking questions.

The answer is very simple.

Because I inherited more than my father's knowledge.

I inherited his curiosity.

Sometimes I think curiosity is the greatest gift one generation can give the next.

Knowledge eventually becomes old.

Markets change.

Forests change.

Even agarwood changes.

But curiosity continues searching.

And as long as curiosity survives...

Discovery never ends.

Curiosity Above Comfort

There are people who travel because they have to.

There are people who travel because they want to see the world.

My father travelled because he could not stop asking questions.

Whenever someone told him about a new forest, a new region or a new type of agarwood, something inside him came alive.

He simply had to see it for himself.

That curiosity became the compass that guided his entire life.

He was never satisfied with buying agarwood from someone else's collection.

He wanted to know where it came from.

He wanted to see the forest.

He wanted to meet the people who found it.

He wanted to understand why one tree smelled different from another.

For him, the journey was just as important as the destination.

Long before travelling became comfortable, he travelled constantly.

He crossed borders.

He spent days in forests.

He stayed in villages where life was completely different from the cities.

There were no maps.

No mobile phones.

No internet.

Knowledge travelled from person to person.

Story to story.

Forest to forest.

That was the world he belonged to.

One of the stories he often shared with me was about the forests of Bangladesh and Assam.

People often imagine that finding agarwood simply meant walking into a forest and cutting down a tree.

The reality was very different.

Every forest had its own people.

These were the families who had lived there for generations.

They knew every path, every river, every mountain and every tree.

If you wanted to enter their forests and harvest agarwood, you first had to earn their trust.

Money alone was often meaningless to them.

Many of these communities lived deep inside the jungle.

They had little use for wealth in the way people in cities understood it.

Instead, they valued things that were rare to them.

Things that came from another forest.

Things they could not easily find themselves.

My father understood something that many outsiders never did.

He understood that respect opens more doors than money ever will.

Before travelling to the forests of Assam, he would often carry unusual things from the forests of Bangladesh.

Not because they were expensive.

Because they were interesting.

When he reached the people living in Assam, he would exchange these gifts, build friendships and spend time with them.

On another journey, he might do the opposite, taking something from Assam back to people living in Bangladesh.

To many people, these may seem like simple exchanges.

To my father, they were something much greater.

They were relationships.

And relationships were the true key to the forest.

He never spoke about the people of the jungle as though they were simply suppliers.

He respected them.

He admired their knowledge.

He understood that they knew things no map could ever teach.

Without them, many of the greatest agarwood trees would never have been found.

Watching my father, I learned something that had nothing to do with agarwood.

The greatest opportunities in life rarely begin with transactions.

They begin with trust.

Even after he became successful, that never changed.

He never travelled believing he knew everything.

He travelled because he believed there was always something new to learn.

Perhaps that is what made him different.

He wasn't chasing agarwood.

He was chasing understanding.

That same curiosity shaped every stage of his life.

From the forests of Assam...

To the markets of Bombay...

To the collectors of Singapore...

He was always learning.

Always asking.

Always searching.

Looking back today, I realise that curiosity was the greatest inheritance my father ever gave me.

It is the reason I still travel.

It is the reason I still distil.

It is the reason I still ask questions that many people no longer ask.

Whenever someone tells me about a new origin, a forgotten material or a different way of understanding perfume, I feel the same excitement I used to see in my father's eyes.

Sometimes I smile when I notice that.

Because in those moments, I realise that I am not only continuing his work.

I am continuing his curiosity.

And perhaps curiosity is the greatest inheritance a father can ever leave his son.

The Eye That Saw What Others Couldn't

One of the greatest lessons my father ever taught me happened without him even trying to teach me.

I was around ten years old when he took me on my first real buying trip.

It was just the two of us.

We travelled to Singapore.

At that age, I didn't fully understand what we were doing there.

I simply knew that my father was looking for agarwood, and I was excited to be travelling with him.

Looking back today, I realise that this was my first real oud hunting trip.

Singapore was one of the great meeting places for agarwood.

Collectors, traders and hunters from different countries gathered there, bringing extraordinary pieces from all over Southeast Asia.

For my father, it wasn't simply a market.

It was another classroom.

Another opportunity to discover something he had never seen before.

I remember walking into one of the warehouses with him.

There were piles of agarwood everywhere.

Some pieces were beautiful.

Some ordinary.

Some looked almost identical to my inexperienced eyes.

To my father, every piece was different.

He asked the owner a simple question.

"How much is this per kilogram?"

The owner replied,

"Four thousand dollars."

I stood quietly beside my father, expecting him to begin negotiating.

Instead, he surprised me.

Without hesitation he said,

"I'll give you six thousand."

I remember looking at him in complete confusion.

Even as a child, I couldn't understand what had just happened.

Why would anyone offer more than the asking price?

Wasn't the whole point of buying to negotiate a lower price?

For a moment, I genuinely thought my father had made a mistake.

But he hadn't.

He smiled and added one condition.

"I will pay six thousand."

"But I will choose every single piece myself."

The owner agreed.

Then I watched something I would only understand many years later.

My father didn't rush.

He walked slowly through the collection.

He picked up one piece after another.

He turned each one over in his hands.

He smelled some.

He rejected most.

Occasionally he placed one aside.

Then he continued searching.

To me, they all looked like agarwood.

To him, they were completely different.

He wasn't buying a pile of wood.

He was searching for the few pieces that everyone else had overlooked.

Hours passed.

He continued selecting.

Patiently.

Confidently.

Without asking anyone's opinion.

Looking back today, I finally understand what happened.

My father wasn't paying an extra two thousand dollars for agarwood.

He was paying for the opportunity to exercise his knowledge.

He knew that if he could choose freely, the pieces he selected would be worth far more than the additional money he had paid.

He wasn't negotiating price.

He was investing in confidence.

At the time, I thought the lesson was about buying.

Years later, I realised it was about something much deeper.

Knowledge changes the way you see value.

Two people can stand in front of exactly the same collection.

One sees a pile of wood.

The other sees masterpieces hidden among it.

Nothing has changed except the eyes that are looking.

That lesson has stayed with me throughout my own journey.

People often ask me why I spend so much time searching for one particular piece of agarwood.

Why I reject so many pieces before choosing one.

Why I sometimes travel so far only to return with very little.

The answer is simple.

Because extraordinary materials have always been rare.

My father taught me that.

He never believed in buying more.

He believed in buying better.

Quality was never measured by quantity.

It was measured by how close a material came to perfection.

Today, whenever I walk through a warehouse filled with agarwood, I sometimes remember that day in Singapore.

I remember standing beside my father, wondering why he would willingly pay more than he had to.

Now, I smile.

Because I finally understand.

The most expensive thing he bought that day wasn't agarwood.

It was the freedom to trust his own eye.

And that eye was something no amount of money could ever buy.

Looking back today, I realise that what made my father different was not simply his knowledge of agarwood.

It was his confidence.

He trusted his own eyes.

He trusted his own nose.

Most people buy what the market already believes is valuable.

My father was the opposite.

He never waited for the market to tell him what was beautiful.

He decided that for himself.

If he discovered a remarkable piece of agarwood from a region that people ignored, he didn't hesitate.

He bought it.

He studied it.

He believed in it.

He never worried whether people would appreciate it immediately.

He believed that if something was truly extraordinary, appreciation would eventually follow.

That was one of the qualities I admired most about him.

He wasn't chasing opinions.

He wasn't chasing trends.

He was chasing truth.

Over the years, that way of thinking allowed him to introduce people to agarwood they had never experienced before.

Some origins that were almost unknown in our part of the world eventually became appreciated because people like my father believed in them long before anyone else did.

He taught me something I have never forgotten.

Never let the market decide your standards.

Let your standards educate the market.

That lesson has stayed with me throughout my own journey.

Sometimes people ask me why I continue creating perfumes that contain materials many people have never experienced before.

Why I insist on using genuine natural ingredients when there are easier and cheaper alternatives.

Why I spend years developing a single perfume.

The answer is very simple.

Because I inherited the same way of thinking.

I don't want to create what people already expect.

I want to introduce them to something they didn't know was possible.

If I truly believe in a material...

If I truly believe in a perfume...

Then I am willing to wait.

Because appreciation takes time.

My father used to say very little about these things.

He simply lived them.

Today, I often find myself making decisions exactly the way he would have.

Not because I am trying to become him.

But because I finally understand the wisdom behind the way he lived.

Perhaps the greatest lesson he ever taught me was this:

Never ask what the market wants.

Ask what is truly beautiful.

If your answer is honest enough, the market will eventually understand.

That Grade No Longer Exists

Some lessons stay with you because someone explains them.

Others stay with you because you witness them.

This is one of the moments I will never forget.

By this time I had already started my own journey in agarwood.

I had travelled to India, purchased my own wood and was beginning to understand the business for myself.

Like any young man starting out, I was excited.

I believed I had found beautiful Indian agarwood.

I couldn't wait to show it to people.

There was one customer in particular I wanted to meet.

He was one of my father's oldest clients.

A man of very high rank in Dubai.

Someone who had spent decades buying only the finest agarwood.

I remember asking my father,

"Why don't we go and show him what I've bought?"

My father smiled.

Then he looked at me and said,

"I don't think he will like it."

I was surprised.

I looked at the wood again.

To me, it was beautiful.

I asked him why.

He simply replied,

"He is used to a different grade."

At the time, I didn't fully understand what he meant.

I kept insisting until finally he agreed.

"Alright," he said.

"Let's go."

When we arrived at the building, I remember being amazed.

Normally, someone in his position required an appointment.

People waited to meet him.

But my father simply walked inside.

No appointment.

No introductions.

Everyone knew him.

The security greeted him.

The staff greeted him.

It was obvious that he wasn't arriving as a customer.

He was arriving as an old friend.

That was something I had never seen before.

When we entered his office, they greeted each other warmly.

Then, almost immediately, the man looked at my father, smile and said,

"You're a liar."

I remember being completely shocked.

For a second I didn't know how to react.

Then he continued laughing.

"I've been looking for you everywhere."

"Even the Prime Minister has been asking about you."

"You keep promising me another bottle of that Hindi oud oil."

"But every time you disappear."

My father smiled.

He wasn't offended.

He knew exactly what his friend meant.

Then he quietly answered with a sentence I have never forgotten.

"I'm sorry."

"That grade of wood no longer exists."

"How can I make the same oil if the wood itself no longer exists?"

The room became quiet.

At that moment, I didn't fully understand the weight of those words.

Today...

I understand them completely.

My father could easily have made another oil.

He could have called it the same thing.

He could have convinced people it was close enough.

Many people would have done exactly that.

He refused.

Because for him, honesty mattered more than business.

If nature had changed...

Then the truth had changed.

And he was never willing to lie about that.

After a while, my father introduced me.

"This is my son."

"He has brought some Indian agarwood."

The gentleman smiled.

He was kind enough to give me his time.

He selected one of my pieces and placed it on the charcoal.

The room slowly filled with its aroma.

He closed his eyes for a moment.

Smelled it carefully.

Then opened his eyes and smiled.

"I like the smell."

For a moment, I felt relieved.

Then he continued.

"But I don't like how it looks."

He reached across his desk and picked up another piece.

It was almost black.

Dense.

Shining.

It looked as though someone had polished it with oil, yet it was completely natural.

He placed it beside mine.

Then he looked at my father and said,

"This..."

"This is the oud I used to buy from you."

I remember looking at that piece in complete silence.

Until that moment, I had never truly understood the level my father had worked at.

The wood I had proudly brought with me suddenly looked ordinary.

Not because it wasn't beautiful.

Because I had just seen something extraordinary.

That meeting changed me.

It taught me that there are moments when you must be honest enough to admit that something cannot be recreated.

Nature moves forward.

Forests change.

Trees disappear.

Some grades belong to a particular time in history.

Once they are gone...

They are gone.

My father never tried to replace those moments.

He chose to honour them.

Looking back today, I think that is one of the greatest lessons he ever gave me.

Never promise what nature cannot deliver.

Respect what existed.

Protect what still remains.

And never lower your standards simply because the world has forgotten what true quality once looked like.

That lesson has guided every decision I have made since.

When people ask me why I release only limited quantities...

Why I refuse to rush a perfume...

Why I sometimes spend years searching for the right material...

The answer often brings me back to that office.

To that conversation.

And to one sentence that has never left me.

"That grade of wood no longer exists."

Those words taught me something that no book ever could.

The rarest ingredient in perfumery is not oud.

It is honesty.

More Than a Businessman

If you asked people who knew my father what he did for a living, most would probably tell you that he was an agarwood hunter.

Some would say he was a trader.

Others would remember him as a perfumer.

All of those answers would be true.

But none of them would describe who he really was.

To me...

He was simply my father.

The older I become, the more I realise that what made him extraordinary had very little to do with agarwood.

It had everything to do with the way he treated people.

He had a very special way of making everyone feel comfortable.

Whether you were one of his oldest clients, one of his workers, or someone he had just met for the first time, he treated you exactly the same.

He never believed business should create distance between people.

He believed business should create friendship.

That is why so many of his customers eventually became his friends.

Even today, years after he is gone, I still meet people who don't begin by talking about the agarwood they bought from him.

They begin by talking about him.

They remember his smile.

His humour.

His honesty.

The way he made them laugh.

The way he welcomed them.

The way he spoke to them.

That tells me something.

People eventually forget what they bought.

They rarely forget how someone made them feel.

My father understood that without ever trying.

He was also one of the funniest people I have ever known.

His humour was never loud.

It was quiet.

Dry.

Sometimes sarcastic.

Even in the warehouse, while everyone was working, he was always making jokes.

He was teaching them to respect it.

He believed that if nature had created something beautiful, then the person preparing it had a responsibility to present it in the most beautiful way possible.

Nothing should leave the workshop unfinished.

Nothing should look careless.

Luxury begins with respect.

That lesson stayed with me.

Even today, whenever I hold a finished bottle in my hands, I often think about those moments.

Perfection is not an accident.

It is the result of caring about details that many people never notice.

One of the things that makes me proudest of my father has nothing to do with agarwood.

It is the lives he changed.

He came from a humble background.

He knew what it meant to struggle.

Perhaps that is why success never changed him.

As his business grew, he never forgot where he came from.

Many of the people from our village built better lives because of him.

He gave them opportunities.

He trusted them.

He taught them.

He helped them build businesses of their own.

Some of them became very successful themselves.

He never spoke about these things.

He never looked for recognition.

Helping people was simply part of who he was.

Looking back now, I realise something beautiful.

The wealth he created wasn't measured only by what he owned.

It was measured by how many other families were able to build a better future because he chose to help them.

That is a very different kind of success.

When I think about my father today, I don't first remember the rarest agarwood he ever found.

I don't first remember the countries he travelled to.

I don't first remember the extraordinary pieces that passed through his hands.

I remember the man.

A man who remained curious until the very end.

A man who believed honesty was worth more than profit.

A man who never lowered his standards simply because the world had changed.

A man who laughed often.

A man who treated workers with dignity.

A man who treated customers as friends.

A man who believed that if something was worth doing, it was worth doing properly.

Sometimes people ask me what I inherited from him.

Of course, I inherited knowledge.

Of course, I inherited experience.

But those things are not what I value most.

The greatest inheritance my father left me was his character.

Because knowledge can be learned.

Experience comes with time.

Character...

Character is something a father teaches without ever needing to say a word.

Today, whenever I find myself making a difficult decision, I often stop and ask myself a simple question.

"What would my father have done?"

More often than not...

I already know the answer.

Because I spent my whole life watching him live it.

If He Could Smell Tamed Ghalia

People sometimes ask me what the greatest compliment I could ever receive would be.

They expect me to say winning an award.

Being recognised by famous perfumers.

Selling every bottle we produce.

Or hearing someone call it the greatest perfume they have ever smelled.

Those things are wonderful.

But none of them would be my greatest compliment.

If I could choose one moment...

Just one...

I wouldn't choose standing on a stage.

I would choose sitting quietly beside my father.

Just the two of us.

Exactly the way we used to sit when he smelled agarwood.

I wouldn't tell him anything about the perfume.

I wouldn't explain the ingredients.

I wouldn't tell him how long it took me to create it.

I wouldn't even tell him its name.

I would simply place the bottle in his hand.

Then I would wait.

He was never someone who rushed when smelling something important.

He would spray it once.

Smell it.

Wait.

Smell it again.

Sometimes he wouldn't say anything for a while.

I learned from him that silence is often part of smelling.

The material deserves time to speak before we do.

As he continued smelling it, I think I already know what he would be looking for.

Not whether it smelled expensive.

Not whether it was fashionable.

He would be searching for honesty.

He would ask himself one question.

"Is this real?"

Does the oud still feel like oud?

Does the rose still feel like rose?

Do the animalic materials still carry their natural soul?

Has the perfumer respected the materials...

Or tried to force them into becoming something they were never meant to be?

Those are the questions I imagine he would quietly ask himself.

If, after all of that, he looked at me and smiled...

And simply said,

"Give me two bottles."

"One for my collection."

"And one to wear every day."

I think I would consider my work complete.

Not because he was my father.

Because there is nobody in this world whose opinion I value more.

Everything I know about agarwood began with him.

Everything I know about respecting materials began with him.

Everything I know about patience, honesty and quality began with him.

If he approved of my work...

I wouldn't need another compliment.

Sometimes I wonder what he would think if he could see where this journey has taken me.

Would he smile knowing that I became a distiller?

Would he laugh and tell me I still have more to learn?

Would he ask me a hundred questions about every ingredient?

I honestly don't know.

But I do know one thing.

He would never judge the perfume by its price.

He would never judge it by its packaging.

He would never judge it by how many bottles it sold.

He would judge it the only way he ever judged anything.

By closing his eyes...

Taking his time...

And listening to what the perfume had to say.

That thought has stayed with me throughout the creation of every perfume I have made.

Whenever I find myself making a decision, adding another material, removing something, or wondering whether a perfume is truly finished, I often imagine that moment.

I imagine handing the bottle to my father.

If I don't feel proud enough to place it in his hands...

Then it isn't ready.

That has become one of my highest standards.

Not because my father is here to judge my work.

But because the standards he taught me are.

In many ways, every perfume I create is still trying to answer one quiet question.

Would my father be proud of this?

Perhaps I will never hear his answer.

But every time I finish a perfume that truly feels honest...

Every time I smell something that reminds me of the forests, the warehouses, the charcoal and the childhood he gave me...

I like to believe that, somewhere, he already knows.

What He Left Me

When people ask me what my father left behind, they often imagine agarwood.

Or knowledge.

Or a business.

Of course, he left me those things.

But the greatest things he left me cannot be held in my hands.

He left me a way of thinking.

He taught me to question everything.

He taught me to trust my own senses.

He taught me that nature always tells the truth, if we are patient enough to listen.

One lesson has stayed with me more than almost any other.

It is something I still practice today.

When my father wanted to judge an oud oil, he didn't begin by asking for documents.

He didn't have laboratory reports.

There were no GC-MS analyses.

No certificates.

No scientific reports.

In those days, there was only experience.

He would place a small amount of the oil on his skin.

Then he would smell it.

Not casually.

He would take a deep breath.

A very deep breath.

He would inhale the aroma as deeply as he possibly could.

Then he would pay attention to something very few people ever think about.

How did his body respond?

He taught me something I have never forgotten.

If the oil was truly natural...

If nothing foreign had been added...

Your body would accept it.

You could inhale it deeply without discomfort.

Without resistance.

Your body welcomed it.

But if something unnatural had been mixed into the oil...

Something synthetic.

Something that didn't belong there...

Your body would quietly reject it.

Perhaps not dramatically.

Perhaps so subtly that most people would never notice.

But he believed the body always knew.

As a young man, I accepted this because my father taught it to me.

Today, I understand it differently.

The more I learn about perfumery...

The more I work with natural materials...

The more I realise there is wisdom inside that simple observation.

We are part of nature.

Our bodies have evolved surrounded by natural materials.

Perhaps that is why truly natural materials often feel so comfortable to breathe.

Perhaps that is why our senses quietly notice when something does not belong.

I still use that lesson today.

Not only with oud oils.

With rose.

With sandalwood.

With jasmine.

With many natural materials I work with.

Of course, modern science has given us extraordinary tools.

Laboratories can answer many questions that previous generations could not.

I respect those tools.

They are valuable.

But I have also learned that experience remains valuable too.

Sometimes, before I look at any report...

Before I study any analysis...

I simply smell.

I breathe.

I listen.

Just as my father taught me.

That lesson has shaped me far beyond perfumery.

It reminds me that knowledge is not only something we read.

Sometimes...

Knowledge is something we learn by paying attention to what our own senses are trying to tell us.

When I think about everything my father left me, I realise something.

He didn't simply teach me about agarwood.

He taught me how to observe.

How to question.

How to trust nature.

And perhaps that is the greatest inheritance a father can leave his son.`,
      isPlaceholder: false
    },
    {
      id: 7,
      title: "The Day Oud Became an Experience",
      content: `I Never Wanted This Life

One of the biggest surprises in my life is that I once believed I would never work with agarwood.

People often assume that because I grew up surrounded by oud, I must have always dreamed of continuing my family's work.

The truth is exactly the opposite.

As a teenager, I wanted to find my own path.

I respected what my father had built.

I admired the life he had created.

But I wanted to become successful in my own way.

Perhaps that is something many sons feel.

You want to build something that belongs to you.

Not because you reject your father's legacy.

But because you want to prove to yourself that you can create one of your own.

At that time, agarwood was simply part of my everyday life.

It was everywhere.

Because it was everywhere, I rarely stopped to appreciate how extraordinary it really was.

Sometimes, the things we grow up with become almost invisible.

We only realise their value when something changes the way we see them.

For me...

That moment came unexpectedly.

The Piece From Lamding

I still remember the day clearly.

I was around seventeen or eighteen years old.

One day my father called me into his office.

He had a piece of Indian agarwood resting beside a charcoal burner.

It was not an ordinary piece.

It came from the Lamding region of Assam.

A place that has produced some of the finest agarwood the world has ever known.

The story behind that piece made it even more special.

My father told me it had been found by a very poor man.

The tree itself was believed to be one of the oldest and rarest ever discovered in that region.

When my father heard about it, he didn't buy it because he wanted to sell it.

He bought around one hundred grams simply because he wanted to experience it.

To study it.

To understand it.

To wear it.

That was the kind of person he was.

Sometimes he bought agarwood not as a businessman...

But as a student of nature.

As I entered his office, he placed a small piece onto the charcoal.

The room slowly filled with smoke.

He looked at me and said,

"Come here."

"Smell this."

I leaned forward.

He didn't ask me to smell the wood.

He asked me to inhale the smoke itself.

So I did.

I took a deep breath.

It smelled beautiful.

Rich.

Deep.

Comforting.

I nodded.

Then I left.

At that moment, I thought nothing more about it.

I had no idea that the next few hours would quietly change my life.

The Ride Home

A little while later, my friends arrived to pick me up.

Like most teenagers, we climbed into the car and immediately started talking.

Everyone was laughing.

Arguing.

Discussing things that felt incredibly important at that age.

Normally, I would have been right in the middle of those conversations.

But that day...

Something was different.

I remember sitting quietly in the back seat.

Listening.

But not really listening.

My mind was somewhere else.

I could still smell the agarwood.

Not faintly.

Clearly.

It felt as though someone was still burning that same piece of agarwood beside me.

Again and again, I found myself wondering,

"What is this?"

"Why can I still smell it?"

The more I thought about it...

The less interested I became in the conversation happening around me.

That smell refused to leave me.

For the first time in my life, I realised that agarwood was doing something I had never experienced before.

It wasn't simply creating a beautiful smell.

It was changing the way I felt.

I wasn't excited.

I wasn't sleepy.

I wasn't distracted.

I was... somewhere else.

Calm.

Present.

Completely absorbed by something I couldn't explain.

That was the moment everything changed.

It was the first time I understood that perfume is not only about smell.

Perfume is about emotion.

It is about memory.

It is about presence.

It is about the quiet space it creates inside us.

Looking back today, I think that drive home was one of the most important journeys of my life.

Not because of where I travelled.

But because of where my mind travelled.

That afternoon, without anyone intending to teach me...

Agarwood stopped being a material.

It became an experience.

A Different Way of Smelling

That afternoon stayed with me for years.

I never forgot it.

Even now, whenever I smell a truly exceptional piece of agarwood burning on charcoal, I remember that car ride.

I remember the silence.

I remember asking myself why one smell could remain with me long after the smoke had disappeared.

Years later, I finally found my own answer.

The greatest perfumes are not the ones that simply smell beautiful.

They are the ones that change something inside us.

They slow us down.

They create memories.

They make us feel present.

That is why, even today, I still believe there is no smell more beautiful than the very first aroma that rises from an exceptional piece of agarwood placed on hot charcoal.

Everything I have created since...

Every oud oil I have distilled...

Every perfume I have composed...

Has been my own attempt to preserve that moment.

Not just the smell.

The feeling.

Because real oud is not a smell.

It is an experience.`,
      isPlaceholder: false
    },
    {
      id: 8,
      title: "The Question That Changed Everything",
      content: `A Friend With an Extraordinary Nose

There are certain moments in life that seem ordinary while they are happening.

You don't realise they will stay with you forever.

Only years later do you look back and realise that your life quietly changed that day.

For me, one of those moments happened in 2012.

At the time, I was already working with agarwood.

I had travelled.

I had bought and sold oud.

I had spent years around collectors and some of the finest materials in the world.

But I still wasn't a distiller.

I wasn't trying to create oud oil.

I wasn't trying to solve any problem.

I was simply continuing my journey of learning.

One afternoon I went to visit one of my clients in Sharjah.

Today, I don't think of him as a client anymore.

He has become one of my closest friends.

He is older than me, and over the years I have come to respect him immensely.

Not only because of his character, but because he has one of the finest noses I have ever encountered.

Growing up in an Arab family where burning agarwood is part of everyday life gave him a deep understanding of scent.

But beyond that, he had something that cannot be taught.

He could recognise quality almost immediately.

He was never interested in ordinary agarwood.

It was almost impossible to impress him with commercial oud oils.

If he liked something, it meant something.

That is one of the reasons I always valued his opinion.

That day, he had just returned from Mumbai.

We sat together, talking as we usually did.

Then, without saying very much, he reached for a small bottle.

He handed it to me and simply asked,

"What do you think?"

He didn't tell me where it came from.

He didn't tell me who distilled it.

He didn't tell me what species it was.

He simply waited.

"This Is Sri Lankan"

I opened the bottle.

The moment the aroma reached me, I answered almost without thinking.

"This is Sri Lankan."

He smiled.

He hadn't told me anything.

There was no label.

No clue.

Just the smell.

People sometimes ask me how I knew.

The truth is...

I didn't recognise it because it smelled like Sri Lankan oud oil.

I recognised it because it smelled like Sri Lankan agarwood.

The moment I smelled that oil, I was reminded of placing a beautiful piece of Sri Lankan agarwood onto hot charcoal.

That first wave of aroma.

That unmistakable identity.

It was there.

For the first time in my life, I had smelled an oud oil that preserved the character of the wood so faithfully that my mind immediately recognised its origin.

I still remember sitting there thinking,

"This is exactly how it should be."

And then, almost immediately...

Another thought appeared.

One Question

That single bottle gave me a question that refused to leave my mind.

If a Sri Lankan oud oil can smell so faithfully like Sri Lankan agarwood...

Why can't every origin do the same?

Why shouldn't Indian oud oil smell exactly like Indian agarwood burning on charcoal?

Why shouldn't Cambodian oud oil preserve the identity of Cambodian agarwood?

Why shouldn't every origin carry the soul of the tree it came from?

The question seemed so simple.

Yet I couldn't answer it.

I wasn't disappointed.

I was fascinated.

The more I thought about it, the more I realised that perhaps we had accepted something we should have questioned.

Why had so many people become comfortable with oud oils that no longer reminded us of the wood itself?

Why had we accepted that this was simply the way oud oil should smell?

I couldn't stop thinking about it.

A Question That Refused to Leave

Life continued.

I went back to work.

I travelled.

I bought agarwood.

I met collectors.

Business continued exactly as before.

But something had changed inside me.

That question followed me everywhere.

Sometimes it would disappear for weeks.

Then I would smell a beautiful piece of agarwood on charcoal...

And it would return.

Sometimes I would smell an oud oil...

And ask myself the same question again.

"Where is the wood?"

The question wasn't about creating a better perfume.

It wasn't even about creating a better oud oil.

It was about honesty.

If nature had already created something so beautiful...

Why were we moving further away from it instead of closer to it?

For years I carried that question without knowing that one day it would completely change the direction of my life.

Nature Had Already Done the Hard Work

As the years passed, something became clearer and clearer to me.

I wasn't trying to invent a new smell.

Nature had already done that.

I wasn't trying to improve agarwood.

That would be impossible.

The smell I loved most had already been created.

The first aroma that rises from exceptional agarwood placed on charcoal...

Nothing has ever surpassed it for me.

The challenge was never creation.

The challenge was preservation.

How do you preserve that feeling?

How do you preserve that identity?

How do you place the soul of a tree into a bottle without losing what makes it extraordinary?

I didn't know the answer yet.

But I knew one thing.

I wanted to spend the rest of my life searching for it.

That question, born from one bottle handed to me by a friend in Sharjah, quietly became the beginning of everything that followed.

It was no longer just curiosity.

It had become a purpose.`,
      isPlaceholder: false
    },
    {
      id: 9,
      title: "The Search for the Perfect Oud Oil",
      content: `It Was Never the Plan

People often assume that becoming a distiller was always my dream.

The truth is, it wasn't.

If you had asked me years earlier whether I would one day be distilling my own oud oils, I probably would have smiled and said no.

It wasn't part of a carefully written business plan.

It wasn't even something I had seriously thought about.

Like many important moments in my life, it began with a journey.

My brother-in-law and I travelled to Thailand.

The purpose of the trip was simple.

We were there to buy agarwood and oud oil, just as we had done many times before.

During that trip, we visited several distilleries.

We met experienced distillers.

We walked through their factories.

For the first time, we saw every stage of the distillation process with our own eyes.

Naturally, we became excited.

Watching agarwood transform into oil was fascinating.

But the more we watched, the more something began to trouble us.

We looked carefully at the raw material being loaded into the distillation pots.

Then we smelled the finished oils.

Something didn't add up.

The oils we were searching for, the oils that truly moved us, simply didn't seem possible from the material we were seeing.

Neither of us said very much at first.

But I think we were both thinking the same thing.

If this is the material… how can this become the oil we are searching for?

By the time we returned home, we had made a decision.

Not because we had a perfect plan.

Not because we believed we already understood distillation.

Quite the opposite.

We decided to buy our own distillation pot because we wanted to learn.

We wanted to understand what really happened between the tree and the bottle.

More importantly, we wanted complete confidence in what we were offering people.

For me, that mattered deeply.

One of the things I have always believed is that if someone is paying to experience real oud, then they deserve complete honesty.

Oud oil is one of the most difficult products in the world to buy with absolute confidence.

Even if you completely trust the person selling it to you, how can they be certain of every hand that touched it before it reached them?

Perhaps they bought it from another trader.

Perhaps that trader bought it from someone else.

Eventually, you realise that trust becomes more difficult with every step.

I wanted to remove as many of those questions as possible.

I wanted to know exactly what entered my distillation pot.

Only then could I truly know what was inside the bottle.

Looking back today, I realise that our decision was driven far more by curiosity than by confidence.

We had no idea how difficult the journey ahead would become.

If We Were Going To Do It…

From the very beginning, I knew one thing.

If I was going to distill oud oil, I didn't want to do what everyone else was already doing.

A little later, I travelled to Indonesia to buy agarwood.

Originally, the trip had nothing to do with distillation.

I was there to buy agarwood for my trading business.

While sitting with one of my suppliers in his factory, I told him that I had decided to begin distilling my own oils.

He smiled.

Then he pointed towards a pile of agarwood.

"Use this," he said.

"It is perfect for distillation."

It was inexpensive material.

The kind that many distillers would normally choose.

From his point of view, it was sensible advice.

After all, I was a beginner.

Why risk expensive wood while learning?

But I couldn't convince myself to do it.

The question that had been following me ever since 2012 was still alive.

I wasn't trying to discover what ordinary wood could produce.

I wanted to know what extraordinary wood could become.

So instead, I chose material that was already considered unusually expensive for distillation.

Many people thought it was unnecessary.

Some probably thought it was foolish.

Looking back today, I smile at that decision.

Not because they were wrong, but because my own standards have continued to evolve.

The material that once seemed exceptional to me would no longer meet the standards I work with today.

Every year I have spent studying agarwood has quietly changed my definition of excellence.

The more I learned, the more demanding I became.

What once felt extraordinary eventually became my starting point.

That, perhaps, is one of the greatest gifts of experience.

The destination keeps moving.

You never stop searching for something better.

Twenty Kilograms

When I returned to Dubai, our small distillery was ready.

It wasn't a large factory.

It wasn't designed for commercial production.

It was simply the beginning of a journey.

We carefully prepared the still.

Loaded the agarwood.

Filled it with twenty kilograms of material.

Then we waited.

I still remember the excitement.

We weren't simply waiting for oil.

We were waiting for answers.

Days later, the distillation finally came to an end.

We collected the oil.

Then we weighed it.

Less than one tola.

Less than twelve grams.

In fact, it was closer to nine or ten grams.

Twenty kilograms of carefully selected agarwood…

Days of work…

Fire…

Water…

Time…

Patience…

Everything had become less than ten grams of oil.

Anyone looking only at the numbers would probably say exactly the same thing.

"This makes no financial sense."

Perhaps they would have been right.

But then I smelled it.

I still remember that moment as clearly as if it happened yesterday.

Even though the yield was incredibly small, the aroma was extraordinary.

That first distillation produced one of the finest oud oils I had ever smelled.

In that moment, I realised something that has stayed with me ever since.

Perhaps the greatest oud oils are never born from efficiency.

Perhaps they are born from refusing to compromise before the distillation even begins.

That first distillation didn't teach me that I knew how to distill.

It taught me how much I still had to learn.

But more importantly…

It gave me hope.

For the first time, I realised that the answer to the question I had been carrying since 2012 might actually exist.

And from that day onwards, my search truly began.`,
      isPlaceholder: false
    },
    {
      id: 10,
      title: "Every Forest Has a Voice",
      content: `A Different Kind of Hunt

There was a time when I hunted agarwood for a very different reason.

Back then, I was a trader.

Like most traders, I looked for wood that was completely dry.

Dry agarwood was easier to buy.

Easier to transport.

Easier to sell.

There were fewer surprises.

You didn't have to worry about losing weight as it dried.

You didn't have to think about how recently it had been harvested.

It was simply good business.

But something slowly changed after I began distilling.

I stopped looking at agarwood as a product.

I started looking at it as a possibility.

Today, when I search for material to distil, I often find myself drawn towards something that many traders try to avoid.

Freshly harvested agarwood.

Wood that still carries a little moisture.

To many people, that moisture is a disadvantage.

To me, it is a conversation.

If the wood is resinous enough, something extraordinary happens.

Before it ever enters the distillation pot, it begins telling me what kind of oil it wants to become.

The aroma rising from freshly cut resin can reveal things that disappear once the wood has completely dried.

It offers a small glimpse into the soul of the tree.

Whenever I find material like that, I become excited.

Not because I know exactly what the oil will smell like.

But because I know nature has just given me a clue.

From that moment onwards, my responsibility is not to change that aroma.

It is to preserve it.

To refine it.

To reveal it as faithfully as I possibly can.

That has become one of the guiding principles behind every distillation I do.

I don't believe a distiller should force the wood to become something it was never meant to be.

Every forest already has its own voice.

Our responsibility is simply to let it speak.

The Philippines

Around 2019, Filipino oud had become one of the most sought after origins in the market.

It was rare.

It was expensive.

Everyone wanted it.

Naturally, I became curious.

I smelled oils from different people.

Some had distilled the oil themselves.

Others had purchased it from well-known distilleries.

But something didn't feel right.

The oils were pleasant.

Some were even very good.

Yet none of them reminded me of the beautiful Filipino agarwood I already knew so well.

Whenever I burned a piece of high grade Filipino agarwood on charcoal, it filled the room with an aroma unlike anything else.

It had its own identity.

Its own personality.

But when I smelled the oils that were being sold as Filipino oud, that identity seemed to have disappeared.

The same question that had followed me throughout my journey appeared once again.

Why doesn't this oil smell like the wood it came from?

I knew there was only one way to answer it.

I had to distil it myself.

At the time, I had been quietly collecting Filipino material whenever I could find it.

High grade shavings.

Fine dust.

Small pieces that I believed deserved to become oil one day.

Because the material was rare, building enough for a distillation took time.

But patience has always been part of this craft.

Eventually, however, I became impatient.

I wanted the answer.

So I made a decision that made very little financial sense.

I placed around six kilograms of beautiful burning grade Filipino agarwood into my distillation pot.

Even then, it was incredibly expensive material.

The kind of wood that most people would rather sell than distil.

Today, that same quality would be worth many times more.

From a business perspective, it was difficult to justify.

But I wasn't thinking like a businessman.

I was thinking like a student.

I simply wanted to know what real Filipino oud oil was supposed to smell like.

The Answer

When the first drops of oil finally appeared, I knew.

The moment I smelled it, I smiled.

For the first time, I wasn't smelling an oil that claimed to be Filipino.

I was smelling the Philippines itself.

It carried the exact character I had experienced countless times when placing beautiful Leyte agarwood onto hot charcoal.

The same opening.

The same identity.

The same beauty.

At that moment, everything made sense.

I realised that I had never been searching for a famous oil.

I had been searching for an honest one.

Even today, I still believe it was the finest Filipino oud oil I have ever smelled.

Perhaps I am biased because I created it myself.

Or perhaps I simply knew exactly what I was searching for before I ever began.

For a brief moment, I felt incredibly proud.

Not because I believed I had become a great distiller.

But because I had finally answered a question that had been living in my mind for years.

Then another thought immediately replaced it.

How on earth am I ever going to afford doing this again?

I laughed.

Because I realised something.

The greatest discoveries are rarely the most practical ones.

But they are the ones that change the way you see the world forever.

That distillation taught me something I still carry with me today.

I am no longer searching for the best oud oil.

I am searching for the truest expression of every forest.

Because no two forests are the same.

No two trees are the same.

And if we listen carefully enough, every one of them has a story waiting to be told.`,
      isPlaceholder: false
    }
  ]
}

export default function StoryPortal() {
  const [story, setStory] = useState(() => {
    const saved = localStorage.getItem('nuhoud-story')
    return saved ? JSON.parse(saved) : DEFAULT_STORY
  })
  const [mode, setMode] = useState('read') // 'read' | 'edit'
  const [currentChapter, setCurrentChapter] = useState(0)
  const [isEditing, setIsEditing] = useState(false)
  const [editingChapter, setEditingChapter] = useState(null)
  const [showChapterList, setShowChapterList] = useState(false)
  const [metaEditing, setMetaEditing] = useState(false)
  const contentRef = useRef(null)

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('nuhoud-story', JSON.stringify(story))
  }, [story])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (isEditing || metaEditing) return
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextChapter()
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevChapter()
      if (e.key === 'Escape') setShowChapterList(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [currentChapter, isEditing, metaEditing])

  const nextChapter = () => {
    if (currentChapter < story.chapters.length - 1) {
      setCurrentChapter(c => c + 1)
    }
  }

  const prevChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(c => c - 1)
    }
  }

  const updateChapter = (index, updates) => {
    const newChapters = [...story.chapters]
    newChapters[index] = { ...newChapters[index], ...updates }
    setStory(s => ({ ...s, chapters: newChapters }))
  }

  const addChapter = () => {
    const newChapter = {
      id: story.chapters.length + 1,
      title: `Chapter ${story.chapters.length + 1}`,
      content: "",
      isPlaceholder: true
    }
    setStory(s => ({
      ...s,
      chapters: [...s.chapters, newChapter]
    }))
    setCurrentChapter(story.chapters.length)
  }

  const deleteChapter = (index) => {
    if (story.chapters.length <= 1) return
    const newChapters = story.chapters.filter((_, i) => i !== index)
    setStory(s => ({ ...s, chapters: newChapters }))
    if (currentChapter >= newChapters.length) {
      setCurrentChapter(newChapters.length - 1)
    }
  }

  const updateMeta = (field, value) => {
    setStory(s => ({ ...s, [field]: value }))
  }

  const chapter = story.chapters[currentChapter]

  // Render mode - beautiful reading experience
  if (mode === 'read') {
    return (
      <div className="min-h-screen" style={{ background: '#FFFDF7', color: '#2A2018' }}>

        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
          style={{ background: 'rgba(255,253,247,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(154,114,53,0.12)' }}>
          <div className="flex items-center gap-4">
            <button onClick={() => setMode('edit')} className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all hover:bg-amber-100" style={{ color: '#9A7235' }}>
              <Edit3 size={14} />
              <span className="hidden sm:inline">Edit Story</span>
            </button>
          </div>
          <div className="font-serif text-lg tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>NUHOUD</div>
          <button onClick={() => setShowChapterList(true)} className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all hover:bg-amber-100" style={{ color: '#9A7235' }}>
            <List size={14} />
            <span className="hidden sm:inline">Chapters</span>
          </button>
        </header>

        {/* Chapter List Sidebar */}
        <AnimatePresence>
          {showChapterList && (
            <>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="fixed inset-0 z-50" style={{ background: 'rgba(0,0,0,0.4)' }}
                onClick={() => setShowChapterList(false)} />
              <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25 }}
                className="fixed right-0 top-0 bottom-0 z-50 w-80 max-w-full overflow-y-auto"
                style={{ background: '#FFFDF7' }}>
                <div className="p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>Chapters</h3>
                    <button onClick={() => setShowChapterList(false)} className="p-2 rounded-lg hover:bg-amber-50">
                      <X size={20} style={{ color: '#9A7235' }} />
                    </button>
                  </div>
                  <div className="space-y-2">
                    {story.chapters.map((ch, i) => (
                      <button key={ch.id} onClick={() => { setCurrentChapter(i); setShowChapterList(false) }}
                        className="w-full text-left p-4 rounded-xl transition-all"
                        style={{
                          background: currentChapter === i ? 'rgba(154,114,53,0.1)' : 'transparent',
                          border: `1px solid ${currentChapter === i ? 'rgba(154,114,53,0.3)' : 'transparent'}`
                        }}>
                        <span className="text-xs block mb-1" style={{ color: '#9A7235' }}>Chapter {i + 1}</span>
                        <span className="font-medium" style={{ color: currentChapter === i ? '#9A7235' : '#2A2018' }}>{ch.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Story Cover / First Chapter */}
        {currentChapter === 0 && !chapter.content && (
          <div className="min-h-screen flex flex-col items-center justify-center text-center px-8 pt-24 pb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
              className="space-y-8 max-w-3xl">
              <p className="text-xs tracking-[0.4em] uppercase" style={{ color: 'rgba(154,114,53,0.5)' }}>
                {story.author}
              </p>
              <div className="space-y-4">
                <h1 className="font-serif leading-none tracking-tight" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(48px,10vw,100px)', letterSpacing: '-0.02em' }}>
                  {story.title}
                </h1>
                <div className="w-20 h-px mx-auto" style={{ background: 'linear-gradient(90deg,transparent,rgba(154,114,53,0.4),transparent)' }} />
              </div>
              <p className="font-display italic text-xl" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#9A7235', fontStyle: 'italic' }}>
                {story.subtitle}
              </p>
              {story.chapters.length > 1 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="pt-8">
                  <button onClick={nextChapter} className="flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
                    <span className="text-xs tracking-widest uppercase" style={{ color: '#9A8A78' }}>Begin Reading</span>
                    <ChevronRight size={20} style={{ color: '#9A7235', transform: 'rotate(90deg)' }} />
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}

        {/* Chapter Content */}
        {(currentChapter > 0 || chapter.content) && (
          <article className="min-h-screen flex flex-col" style={{ paddingTop: '80px' }}>
            <div className="flex-1 flex items-center justify-center px-6 py-16">
              <motion.div key={currentChapter} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                className="max-w-2xl w-full">

                {/* Chapter Header */}
                <header className="text-center mb-12 space-y-4">
                  <span className="text-xs tracking-[0.3em] uppercase block" style={{ color: 'rgba(154,114,53,0.5)' }}>
                    Chapter {currentChapter + 1}
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl" style={{ fontFamily: 'Playfair Display, serif', color: '#2A2018' }}>
                    {chapter.title}
                  </h2>
                  <div className="w-16 h-px mx-auto" style={{ background: 'linear-gradient(90deg,transparent,rgba(154,114,53,0.4),transparent)' }} />
                </header>

                {/* Chapter Content - preserving every line */}
                <div ref={contentRef}
                  className="max-w-none"
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '19px',
                    lineHeight: '1.7',
                    color: '#3A2A18'
                  }}>
                  {chapter.content.split('\n').map((line, i) => (
                    <p key={i} style={{
                      margin: '0',
                      padding: '0',
                      whiteSpace: 'pre-wrap'
                    }}>
                      {line || ' '}
                    </p>
                  ))}
                </div>

                {/* Navigation */}
                <footer className="mt-16 pt-8 flex items-center justify-between">
                  <button onClick={prevChapter} disabled={currentChapter === 0}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all disabled:opacity-30 hover:bg-amber-50"
                    style={{ color: '#9A7235' }}>
                    <ChevronLeft size={18} />
                    <span className="hidden sm:inline">Previous</span>
                  </button>

                  <span className="text-xs" style={{ color: '#9A8A78' }}>
                    {currentChapter + 1} / {story.chapters.length}
                  </span>

                  <button onClick={nextChapter} disabled={currentChapter === story.chapters.length - 1}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all disabled:opacity-30 hover:bg-amber-50"
                    style={{ color: '#9A7235' }}>
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight size={18} />
                  </button>
                </footer>
              </motion.div>
            </div>
          </article>
        )}
      </div>
    )
  }

  // Edit mode
  return (
    <div className="min-h-screen" style={{ background: '#FFFDF7', color: '#2A2018' }}>

      {/* Edit Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ background: 'rgba(255,253,247,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(154,114,53,0.12)' }}>
        <div className="flex items-center gap-4">
          <button onClick={() => setMode('read')} className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all hover:bg-amber-100" style={{ color: '#9A7235' }}>
            <Eye size={14} />
            <span className="hidden sm:inline">Preview</span>
          </button>
        </div>
        <div className="font-serif text-lg tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>Edit Story</div>
        <div className="w-20" />
      </header>

      <main className="pt-24 px-6 pb-12 max-w-4xl mx-auto">

        {/* Story Meta */}
        <section className="mb-12 p-6 rounded-2xl" style={{ background: 'rgba(154,114,53,0.05)', border: '1px solid rgba(154,114,53,0.1)' }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>Story Details</h3>
            <button onClick={() => setMetaEditing(!metaEditing)} className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all hover:bg-amber-100" style={{ color: '#9A7235' }}>
              <Edit3 size={14} />
              {metaEditing ? 'Done' : 'Edit'}
            </button>
          </div>

          {metaEditing ? (
            <div className="space-y-4">
              <div>
                <label className="text-xs uppercase tracking-wider block mb-2" style={{ color: '#9A7235' }}>Title</label>
                <input type="text" value={story.title} onChange={(e) => updateMeta('title', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg text-lg font-serif outline-none transition-all"
                  style={{ background: 'white', border: '1px solid rgba(154,114,53,0.2)', fontFamily: 'Playfair Display, serif' }} />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider block mb-2" style={{ color: '#9A7235' }}>Subtitle</label>
                <input type="text" value={story.subtitle} onChange={(e) => updateMeta('subtitle', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg outline-none transition-all"
                  style={{ background: 'white', border: '1px solid rgba(154,114,53,0.2)', fontFamily: 'Cormorant Garamond, serif', fontSize: '17px' }} />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider block mb-2" style={{ color: '#9A7235' }}>Author</label>
                <input type="text" value={story.author} onChange={(e) => updateMeta('author', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg outline-none transition-all"
                  style={{ background: 'white', border: '1px solid rgba(154,114,53,0.2)', fontFamily: 'Cormorant Garamond, serif' }} />
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <h2 className="font-serif text-3xl" style={{ fontFamily: 'Playfair Display, serif' }}>{story.title}</h2>
              <p className="italic" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#9A7235' }}>{story.subtitle}</p>
              <p className="text-sm" style={{ color: '#9A8A78' }}>{story.author}</p>
            </div>
          )}
        </section>

        {/* Chapters */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>Chapters</h3>
            <button onClick={addChapter} className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all hover:bg-amber-100" style={{ background: '#9A7235', color: '#FFFDF7' }}>
              <Plus size={16} />
              Add Chapter
            </button>
          </div>

          {story.chapters.map((ch, i) => (
            <motion.div key={ch.id} layout className="rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(154,114,53,0.15)', background: 'white' }}>

              {/* Chapter Header */}
              <div className="flex items-center justify-between px-6 py-4" style={{ background: 'rgba(154,114,53,0.05)' }}>
                <div className="flex items-center gap-4">
                  <span className="text-xs px-2 py-1 rounded" style={{ background: '#9A7235', color: '#FFFDF7' }}>
                    Chapter {i + 1}
                  </span>
                  {editingChapter === i ? (
                    <input type="text" value={ch.title} onChange={(e) => updateChapter(i, { title: e.target.value })}
                      className="font-serif text-lg outline-none bg-transparent"
                      style={{ fontFamily: 'Playfair Display, serif' }} />
                  ) : (
                    <h4 className="font-serif text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>{ch.title}</h4>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setEditingChapter(editingChapter === i ? null : i)}
                    className="p-2 rounded-lg transition-all hover:bg-amber-50">
                    <Edit3 size={16} style={{ color: '#9A7235' }} />
                  </button>
                  {story.chapters.length > 1 && (
                    <button onClick={() => deleteChapter(i)}
                      className="p-2 rounded-lg transition-all hover:bg-red-50">
                      <Trash2 size={16} style={{ color: '#C44' }} />
                    </button>
                  )}
                </div>
              </div>

              {/* Chapter Content */}
              <div className="p-6">
                <textarea
                  value={ch.content}
                  onChange={(e) => updateChapter(i, { content: e.target.value, isPlaceholder: false })}
                  placeholder="Start writing your chapter here... Each line you write will be preserved exactly as you type it."
                  className="w-full min-h-[400px] p-4 rounded-lg resize-y outline-none leading-relaxed"
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '17px',
                    lineHeight: '1.9',
                    background: '#FFFDF7',
                    border: '1px solid rgba(154,114,53,0.1)'
                  }}
                />
                <p className="text-xs mt-2" style={{ color: '#9A8A78' }}>
                  {ch.content.length} characters · {ch.content.split('\n').filter(l => l.trim()).length} lines
                </p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Save Indicator */}
        <div className="fixed bottom-6 right-6 flex items-center gap-2 px-4 py-2 rounded-full text-xs"
          style={{ background: 'rgba(154,114,53,0.1)', color: '#9A7235' }}>
          <Save size={14} />
          Auto-saved
        </div>
      </main>
    </div>
  )
}
