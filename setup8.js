const fs = require("fs");
const path = require("path");

const newArticles = [
  {
    slug: "trimming-natural-hair-for-growth-find-out-all-you-need-to-know-about-trimming-natural-hair",
    title:
      "Trimming Natural Hair for Growth? Find Out All You Need to Know About Trimming Natural Hair",
    date: "March 30, 2022",
    image:
      "https://i0.wp.com/itscoily.com/wp-content/uploads/2022/03/Trimming-natural-hair-scaled.jpg?fit=2560%2C1709&ssl=1",
    excerpt:
      "Wondering if trimming your natural hair actually helps it grow? Let's break down the real benefits of regular trims.",
    category: "hair-care",
    content: `If you're like me, you may have looked up if you need to trim your natural hair and were secretly hoping to hear no. Well, the answer is yes. You have to trim your hair. It's tempting to skip trims, especially when you're growing your hair, so let's look at why trimming helps.

## Does trimming help with hair growth?

The short answer is no. Trimming your natural hair is not going to make your hair grow any faster or longer. So why trim at all? Even though trimming doesn't help hair grow, it helps you retain length.

## Why should we trim our hair?

Your ends are the oldest part of your hair. Hair is also dead once it grows out, so trimming isn't removing "dead" ends in the way people often think, it's about managing damage that has already happened.

## What is hair made of?

The hair shaft is made up of 3 layers:

- The cuticle
- The cortex
- The medulla

### The cuticle

The cuticle layer protects the hair. It's made of overlapping cells, like fish scales, and when healthy it lays smooth and flat. It also keeps moisture from moving in and out of the hair, which matters a lot for our naturally dry hair type.

### The cortex

Found between the cuticle and the medulla, the cortex contains keratin bound together by disulphide and hydrogen bonds, along with the melanin that gives your hair its colour.

### The medulla

Not everyone has this layer. It sits at the centre of the hair shaft and is usually found in thicker hair types, made up of cells and air bubbles.

## Wear and tear of natural hair

Our hair goes through a lot, some in our control, some not. The practices we use on our hair lead to damage of the cuticle over time.

## What causes damage to the protective layer?

- Excessive brushing of hair
- Too much washing of your hair
- Tight hairstyles
- Tight rubber bands and hair ties
- Chemical treatments
- Towel drying hair
- Heat styling
- Overly manipulating hair

## Can you avoid all damage?

No. Some damage naturally occurs from friction, wind, jewellery, clothing, and even UV rays. There's no way to avoid it completely short of leaving your hair untouched 100% of the time.

## Split ends

When the cuticle is damaged, the inner parts of the hair are exposed, resulting in split ends. Our tighter hair type is more prone to knots, and the breakage that happens at those knots usually leads to split ends. Combined with our hair's natural dryness, breakage (and split ends) follow.

## Can you get rid of split ends?

Unfortunately, no. Once hair is split, it can't be glued back together. Products claiming to "repair" split ends can only temporarily reduce their appearance. Trimming is the only real fix.

## The benefits of trimming natural hair

1. Healthier hair
2. Better looking hair
3. A better detangling experience

### Healthy hair

Getting rid of split ends and damage naturally contributes to overall hair health, meaning less breakage and better look and feel.

### Better looking hair

After a good trim, hair appears thicker and fuller because you're removing thinning, rough, damaged ends.

### A better detangling experience

You'll notice a huge difference on the first wash day after a trim, it's much easier to detangle hair without knots and tangles at the ends.

## What about hair growth?

If you're trying to grow your hair, over-trimming defeats the purpose. You retain more length by removing damage and split ends, which improves length retention overall, but a trim itself won't make hair grow faster. Also remember, a trim is not the same as a haircut!

## Conclusion

Trimming your natural hair contributes to a healthy hair journey, healthy and often long hair.`,
  },
  {
    slug: "5-tips-for-natural-hair-growth-on-coily-hair",
    title: "5 Tips for Natural Hair Growth on Coily Hair",
    date: "November 17, 2021",
    image:
      "https://i0.wp.com/itscoily.com/wp-content/uploads/2021/11/shutterstock_1331034788-e1637415454415.jpg?fit=1200%2C800&ssl=1",
    excerpt:
      "Wondering how to grow natural hair? Discover 5 practical tips to help you retain length and grow healthy coily hair.",
    category: "hair-care",
    content: `Are you wondering how to grow natural hair? The first thing to know is that your hair is already growing, there is nothing you can do to make it grow faster. The real question is how to retain the new growth.

## Length retention for natural hair

Although you can't make your hair grow faster, you can help it retain the length it already grows. Some practices help your hair thrive, others keep you stagnant. Here are the practices that support length retention.

- Wear protective hairstyles/low manipulation hairstyles
- Moisturize your hair
- Keep a healthy scalp
- Avoid using too much heat
- Trim your hair

## Wear protective hairstyles/low manipulation hairstyles

Protective hairstyles are a great way to give your hair a break while protecting it. Wear hairstyles that don't require a lot of manipulation, like twists and braids, and keep your ends tucked away since they are the oldest, most fragile part of your hair.

## Moisturize your hair

Moisturizing is crucial for healthy natural hair. Dry, brittle hair breaks more easily, which reduces length retention. Deep condition weekly or every other week, since deep conditioners penetrate the hair shaft more than rinse-out or leave-in conditioners. Follow up with a leave-in conditioner through the week. Just be careful, too much moisture (hygral fatigue) is also a thing, find the balance that works for your hair.

## Keep your scalp clean

The health of your scalp contributes directly to the health of your hair. Wash your hair regularly enough to avoid build-up, without over-washing to the point of dryness. Pay attention to any itchiness, irritation, or dryness and address the cause.

## Avoid using too much heat

Heat itself won't damage your hair, but too much of it will change the keratin bonds in a negative way over time. Use heat in moderation with heat protectants, lower heat settings, and spread out your use of heat tools.

## Trim your hair

How often you trim is up to you, but a common guideline is every 3 to 6 months, more often if your hair shows signs of damage. If your goal is length retention, avoid over-trimming healthy hair since that works against your growth goals.

## Conclusion on how to grow natural hair

Next time you think your hair isn't growing, remember: it is growing, you're just not retaining all of it yet. Look at what you're doing to your hair and figure out what helps and what gets in the way of your growth journey.`,
  },
  {
    slug: "what-are-protective-hairstyles",
    title: "What Are Protective Hairstyles?",
    date: "October 22, 2021",
    image:
      "https://i0.wp.com/itscoily.com/wp-content/uploads/2021/10/shutterstock_1169549047-1-e1637415499409.jpg?fit=1200%2C800&ssl=1",
    excerpt:
      "Everything you need to know about protective hairstyles, why they help your natural hair, and the 5 most popular styles.",
    category: "hair-care",
    content: `Whether you want a break from your hair or just want to switch things up, protective hairstyling opens a lot of possibilities. You can add length, change your hair colour, and more, all while giving your hair a break.

## What are protective hairstyles?

The name gives it away, these styles are meant to protect your hair. Your ends are the oldest, most fragile part of your hair, so tucking them away in braids, twists, locs, wigs, crochet hair, or cornrows limits the wear and tear they'd otherwise face.

Rather than leaving hair exposed to harsh conditions, protective hairstyles limit the damage that happens through daily manipulation. They're also believed to promote hair growth, and it's easy to see why: your hair grows about ½ inch a month, but if it breaks at the same rate, it looks like it isn't growing at all. Protective styles help you retain that length.

## How to take care of protective hairstyles?

Protective styles give your hair a break, but that doesn't mean you get to neglect it. You'll still need to moisturize your hair and take care of your scalp while it's styled.

### Prepping your type 4 hair

Prep your hair by washing and moisturizing it properly before installing a protective style. Make sure the style you're getting won't pull too much on your strands, many women end up with days of scalp pain and visible stress on the hair cuticle from styles that are too tight.

Don't leave a protective style in for too long, it can do more harm than good. Most recommend keeping a protective style in for 1 to 3 months. Just like with your loose natural hair, tie your protective style down at night with a satin scarf to make it last longer.

## The 5 most popular protective hairstyles for natural hair

- Box Braids
- Twists
- Cornrows
- Wigs
- Crochet hair

### Box Braids

A long-time favourite. Hair is sectioned into square or round boxes and braided, usually with extensions added. This style can typically be worn for 6 to 8 weeks depending on maintenance.

### Twists

An all-time favourite among naturals. Hair is sectioned before being twisted with 2 strands, often with just your own natural hair, though braiding hair can be added too.

### Cornrows

Unlike braids, cornrows are braided very close to the scalp and can range from simple to intricate patterns. They can last 4 to 6 weeks depending on maintenance, braid size, and hair growth.

### Wigs

Considered protective because they keep your hair tucked away, usually worn over hair that's been braided down. Depending on your budget you can choose synthetic or human hair, which affects how long the style lasts.

### Crochet hair

A latch hook is used to add synthetic hair to your braided-down natural hair. It's extremely versatile and, if kept well, can last around 8 weeks.

No matter which protective hairstyle you choose, don't neglect your hair while it's styled. Skipping proper care defeats the whole purpose of calling it "protective."`,
  },
  {
    slug: "what-is-coily-hair",
    title: "What Is Type 4 Hair? | Everything You Need to Know",
    date: "September 12, 2021",
    image:
      "https://i0.wp.com/itscoily.com/wp-content/uploads/2021/08/What-is-type-4-hair.jpg?fit=1200%2C900&ssl=1",
    excerpt:
      "Coily hair is tightly coiled hair with an s-shape or zig-zag pattern. Read all you need to know about naturally coily hair.",
    category: "hair-care",
    content: `Taking care of your natural type 4 hair can be hard when you don't know where to start. This guide covers what natural hair is and what factors matter for your hair routine, so you can care for your type 4 hair with confidence.

## What is type 4 hair?

Type 4 hair, also known as coily hair, is tightly curled hair. The unique texture comes from the shape of your hair follicles. In afro hair, the follicle is oval, as opposed to the round shape found in straight hair, and it grows almost parallel to the scalp. This causes the hair to rotate on its own as it grows, which is what creates the curl.

## Who has coily hair?

Coily hair is mostly found in Africa and the African diaspora, but people of other races can have type 4 hair too, though it's less common. Natural hair comes in different textures, shapes, colours, and lengths. It appears voluminous and thick but is actually drier than looser hair types like straight, wavy, and curly hair.

## What does coily hair look like?

Type 4 hair comes in different forms depending on individual characteristics and genetics. Some people have thick, curly hair that jumps in all directions, while others have finer, looser coils with less volume. Hair colour also varies widely, from dark brown to black, with or without highlights, up to blonde.

## Why is coily hair dry?

Coily hair is naturally dry because it's hard for the scalp's natural oil, sebum, to travel all the way down the tightly coiled strand to the ends. Sebum protects and moisturizes hair and scalp, but the tighter the curl pattern, the harder that oil has to work to cover the full strand. That's part of why our hair type, despite looking thick and robust, is actually the most fragile hair type and needs extra help retaining moisture.

## Different hair textures in type 4 hair

There are four major hair type categories: straight, wavy, curly, and coily/kinky. Afro hair has three subcategories, 4A, 4B, and 4C, which indicate your curl pattern and how tight your curls are.

## How do you identify my hair type?

A hair type chart is one way to identify your hair, showing strands ranging from straight to coily. It's not the only or even most important factor though, your hair density, porosity, elasticity, and strand size often matter more for figuring out which products and routines work for you.

### Hair porosity

The hair cuticle, the outer layer of your strand, is responsible for strengthening, protecting, and regulating moisture. This determines your hair's porosity, its ability to take in and hold onto moisture, ranging from low to high.

High porosity hair has cuticles that sit further apart and open, letting moisture enter and escape easily, so hair struggles to retain moisture. Low porosity hair has cuticles that sit close together and closed, making it harder for moisture to enter the hair at all.

### Hair density

Hair density is the number of strands growing from your scalp, ranging from high to low density.

### Strand size or hair thickness

Strand size is how thick or thin a single strand is. Knowing your strand width helps you understand how much manipulation your hair can handle, and it ranges from fine to coarse.

Hair thickness and hair density are not the same thing: thickness is about individual strands, density is about the number of hairs on your head. A person can have thin hair with high density, or thick hair with low density.

### Hair elasticity

Elasticity refers to how far a single strand can stretch before returning to its normal state. It's a good indicator of your hair's overall health and its balance of protein and moisture, ranging from low to high.

Understanding these basics is the starting point for building a hair care routine. It takes some trial and error, what works for someone else with a similar hair type may not work the same for you.`,
  },
  {
    slug: "top-3-essential-natural-hair-tips-for-beginners",
    title: "3 Essential Natural Hair Tips For Beginners",
    date: "July 6, 2021",
    image:
      "https://i0.wp.com/itscoily.com/wp-content/uploads/2021/08/3-tips-for-natural-hair-1.jpg?fit=1200%2C900&ssl=1",
    excerpt:
      "It's always great to have some tips when starting out your natural hair journey. Read our top 3 essential tips for beginners.",
    category: "hair-care",
    content: `Are you looking for natural hair tips for beginners? Whether you're a new natural, transitioning from relaxed or damaged hair, or just want to wear your natural hair out, it's always great to have a few important perspectives to think about when going natural.

## #1 Start with a simple natural hair care routine

Take your time and be patient with yourself. This journey can be very exciting but also overwhelming, especially with so much conflicting advice out there. Remember: your hair is unique, and what works for someone else may not work for you.

This can be frustrating when starting out, because you might blame yourself for "doing something wrong" when that isn't the case. Being patient means giving yourself time to actually learn your hair, what works and what doesn't. You'll have wins and some losses, and that's a completely normal part of the process.

Start simple. Make a list of the key things you need, a shampoo, conditioner, and possibly a deep conditioner, many of which you may already have at home. Type 4 hair is drier than other hair types, so moisture is key, but you don't need to break the bank or build a huge shopping list to go natural. You can start today.

## #2 Be consistent

Once you have a routine, stick to it. It sounds easy, but there will be times you don't want to get up and do your hair. Neglecting your hair for weeks at a time makes it more prone to damage like breakage and knots.

You don't have to overdo it either, an overly complicated routine often leads to frustration and can cause people to abandon the journey altogether. Some naturals have minimalistic, low maintenance routines that don't require days of your time. It may take some getting used to, but stick with it, it's worth it.

## #3 Be realistic

It's easy to get frustrated about hair growth, especially seeing others online promoting "get long hair quick" products. Having realistic expectations is important so you don't get discouraged.

Many people with long natural hair didn't grow it overnight, they've been at it for years. Your hair grows about ½ inch a month, for some it's a bit above average, for others a bit less. You can't expect your hair to reach waist-length in 3 months, that simply isn't realistic. Focus on the health of your hair rather than just its length, patience and consistency matter more than comparing yourself to others.

## Final thoughts

You don't have to schedule your natural hair journey for "someday," you can start today. Keep it simple, stay consistent, and stay realistic, and you'll be well on your way to a healthy hair journey.`,
  },
  {
    slug: "best-skin-care-for-dark-circles-under-eyes",
    title: "Best Skin Care for Dark Circles under Eyes",
    date: "May 7, 2025",
    image:
      "https://i0.wp.com/itscoily.com/wp-content/uploads/2025/03/Woman-using-eye-patches-for-beauty.jpg?fit=1500%2C1000&ssl=1",
    excerpt:
      "Let's look into the best skin care for dark circles under the eyes and get you looking bright-eyed and refreshed.",
    category: "beauty",
    content: `Ever had someone ask if you're tired, even when you've had a full night's sleep? Dark circles under your eyes can make you look exhausted even when you feel fine. The good news is there are ways to minimize them. Let's look into the best skin care for dark circles under the eyes.

## Why do dark circles appear?

Dark circles aren't caused by just one thing. Common triggers include:

- **Genetics** – If your parents have dark circles, you're more likely to have them too.
- **Thin skin** – The skin under your eyes is delicate and gets thinner with age, making blood vessels more visible.
- **Lack of sleep** – Poor sleep can make skin look pale, letting dark blood vessels show through.
- **Allergies and rubbing your eyes** – Constant irritation can lead to hyperpigmentation.
- **Dehydration** – Dehydrated skin looks dull, making dark circles more noticeable.

## Best skin care for dark circles under eyes

**1. Hydrate, hydrate, hydrate.** Use an eye cream with hyaluronic acid to plump the under-eye area, and don't forget to drink plenty of water.

**2. Look for brightening ingredients.** Vitamin C fades pigmentation and boosts collagen, niacinamide lightens discoloration and strengthens the skin barrier, and caffeine reduces puffiness and improves circulation.

**3. Retinol for the win.** Retinol can thicken the skin under your eyes, reducing the visibility of blood vessels. Since the area is sensitive, use a gentle, low-strength retinol only a few times a week.

**4. SPF is non-negotiable.** Sun exposure worsens dark circles by increasing pigmentation. Use a broad-spectrum SPF 30+ sunscreen around your eyes, opting for a mineral-based formula if regular sunscreen irritates them.

**5. Cold therapy to the rescue.** Cold temperatures constrict blood vessels, reducing puffiness and dark circles. Try chilled spoons, cucumber slices, or cold green tea bags.

**6. Colour correcting concealers.** For an instant fix, use a peach or orange-toned concealer to neutralize the bluish-purple hues before applying your regular concealer.

**7. Healthy habits for brighter eyes.** Get 7 to 9 hours of sleep, eat a balanced diet rich in antioxidants like berries, spinach, and nuts, and reduce alcohol and caffeine intake, which can dehydrate your skin.

## Final thoughts

Dark circles can be frustrating, but the right skincare routine makes a real difference. From hydrating eye creams to brightening serums and small lifestyle tweaks, there are plenty of ways to keep your under-eye area looking fresh.`,
  },
  {
    slug: "coily-hair-cant-get-liceright",
    title: "Coily Hair Can't Get Lice…Right?",
    date: "April 28, 2025",
    image:
      "https://i0.wp.com/itscoily.com/wp-content/uploads/2025/03/Young-black-girl-thinking-and-looking-up-contemplating-about-a-question.jpg?fit=2000%2C1333&ssl=1",
    excerpt:
      "Can people with type 4 hair get lice? We explore common misconceptions, signs you have it, and how to prevent it.",
    category: "hot-topics",
    content: `After a long day at work, you pick up your child from school and hear the dreaded news: "Oh, and Skylar gave everyone lice. Will I get lice too?" Can people with type 4 hair actually get lice? Let's explore the misconceptions, what lice actually is, the signs, and how to prevent it.

## What are lice?

Lice are a type of parasitic insect that live and breed on the cooler regions of the skin, feeding on dead skin and the oils your body produces. They are:

- About 2 to 3 millimeters long (sesame seed sized)
- Torpedo shaped and shiny or oily looking
- Black to grey coloured

Lice can't fly or jump, but they crawl and clasp, and they can spread from person to person. They're usually found on the head, but have also been known to live in eyelashes, chest hair, and eyebrows.

## So, can type 4 hair get lice?

Yes, but not often, for two main reasons:

1. **Lice have a hard time clasping onto type 4 hair.** The oval, rather than round, shape of the hair shaft makes it hard for them to get a good grip.
2. **Lice have a hard time staying attached to type 4 hair.** The natural butters, oils, and gels many naturals use create too much slip for lice to hold on.

## How do I know if I have lice?

Common symptoms to look out for:

- The itching is intense
- Feeling constant movement
- Observing eggs near your hairline and neck
- Noticing bite marks, sometimes infected

## How do I prevent it?

The best ways to prevent lice:

- Don't share items like combs, hairbrushes, and clothes with others
- Wash your hair bi-weekly, conditioning with each wash
- Keep your environment clean, and wash clothes and sheets weekly
- Consider protective styles for your natural hair to help prevent lice

If you do get lice, avoid using kerosene, petroleum jelly, or mayonnaise, these have been proven ineffective and even dangerous. Not sharing hair accessories and keeping up good hygiene remain the best ways to prevent lice.`,
  },
  {
    slug: "how-to-detangle-matted-hair-a-step-by-step-guide",
    title: "How to Detangle Matted Hair: A Step-by-Step Guide",
    date: "April 21, 2025",
    image:
      "https://i0.wp.com/itscoily.com/wp-content/uploads/2025/03/Front-view-woman-using-hair-comb-on-type-4-hair.jpg?fit=2000%2C1429&ssl=1",
    excerpt:
      "Matted strands got you frustrated? Here's a step-by-step guide on how to safely detangle matted hair without breakage.",
    category: "hair-care",
    content: `Matted strands or gnarly tangles can be frustrating. One moment your hair is picture-ready, and the next it's a matted mess of tangled tantrums. While the first instinct might be to reach for the scissors, this guide on how to detangle matted hair is all you need.

## What causes matted hair?

Matted hair forms when strands twist together into clumps that are tougher to remove than everyday knots and tangles. Causes usually include product build-up on the hair shaft from styling products, hair masks or conditioners left in too long, improperly shampooed hair, and other related factors. Over time this build-up makes hair dull and coated, which increases friction and tangling.

## Best tools for detangling matted hair

- Wide-tooth combs
- Detangling brushes
- Hair clips
- Fingers
- Detangling spray
- Hair oil
- Moisturizing conditioner or treatment

## Detangling coily hair: step-by-step guide

### Step 1: Use a detangling spray to pre-treat matted hair

Before running a brush or comb through matted hair, apply a detangling spray with your fingers throughout the mass of hair. Let it sit for 3 to 5 minutes before starting to work on the knots.

### Step 2: Divide your hair into sections

Trying to detangle your whole head at once takes longer and is less effective. Divide hair into smaller sections, securing them with hair clips, and work on one section at a time, gently loosening the fibers with your fingers.

### Step 3: Use a wide-tooth comb

Start at the ends rather than the roots, gently pulling a wide-tooth comb through the strands. Slowly work your way up to the root. If you meet resistance, gently pry the knot apart with your fingers. Never start at the root first, it tightens the knots on the way down and increases the risk of breakage.

### Step 4: Spray detangler as needed

Keep spraying detangler as you work through tough knots or dry patches. You can also apply oil for extra lubrication and slip.

### Step 5: Thoroughly comb your hair

Once the tough knots are loosened, work through your whole head, alternating between a wide-tooth comb, detangling brush, and rat-tail comb as needed.

### Step 6: Cleanse and treat

With your hair detangled, cleanse it with shampoo and a deeply nourishing conditioner. Be gentle with the strands, treat with detangling milk, then follow with your usual styling products. Let hair air dry for the next few days to help prevent breakage.

## When to cut extremely matted hair

In extreme cases, cutting may be the only option, if you can't get a comb or even the tail of a comb into the mat, or if detangling would take hours with no guaranteed results, cutting is the more practical choice.

Matted hair can be frustrating, but with the right tools and technique you can work through it and save yourself from a major chop.`,
  },
  {
    slug: "the-perfect-swim-turban-for-coily-hair-a-carefree-summer-with-ygy",
    title:
      "The Perfect Swim Turban for Coily Hair: A Carefree Summer with 'YGY'",
    date: "June 3, 2024",
    image:
      "https://i0.wp.com/itscoily.com/wp-content/uploads/2024/05/A-girl-lying-on-the-beach-relaxes-during-the-summer-holidays.jpg?fit=2000%2C1333&ssl=1",
    excerpt:
      "Wear out your natural hair this summer with the 'You Go Natural' swim turban. Protective against chlorine, salt and sun.",
    category: "beauty",
    content: `Summer means days at the beach, refreshing dips in the pool, snorkeling, surfing, and relaxing in the sun. But for many of us with natural hair, it also means worrying about the effects of chlorine, salt water, and sun on our hair. Fortunately, there's now a solution: the "You Go Natural" swim turban.

## Enjoy summer without worry!

Chlorine, salt water, sun, and activities like snorkeling, surfing, and diving can dry out and damage frizzy hair, making it brittle and fragile. The YGY swim turban provides a protective layer that shields your hair from all of that, so you can enjoy your summer adventures with peace of mind.

## Stylish and versatile

Besides being protective, the swim turban is also stylish and versatile, with a choice of colours and patterns to match your vacation outfits.

## Comfortable and durable

No more worrying about loose scarves slipping off in the water. The YGY swim turban is made of high quality materials, extremely comfortable to wear, and built to last.

## What makes the YGY swim turban special?

Its unique design is inspired by ancient traditions of hair care and styling, combining the functionality of a traditional swim cap with the style and versatility of a headscarf, making it the perfect choice for women with frizzy hair.

So, ready to spend this summer worry-free?`,
  },
  {
    slug: "are-chemical-hair-relaxers-making-a-comeback",
    title: "Are Chemical Hair Relaxers Making a Comeback?",
    date: "August 21, 2024",
    image:
      "https://i0.wp.com/itscoily.com/wp-content/uploads/2024/08/Woman-using-chemical-relaxer-on-hair.jpg?fit=2000%2C1331&ssl=1",
    excerpt:
      "More and more studies link chemical hair relaxers to health issues. So why are more women returning to relaxers?",
    category: "hot-topics",
    content: `Relaxing hair used to be considered very normal, with many women and young ladies choosing to straighten their hair with chemical products. In recent years, more and more studies have shown that chemical hair relaxers are linked to various health issues, and more women have chosen to let go of relaxers and embrace their natural kinky hair. Yet social media seems to suggest relaxers are making a comeback. What exactly is a relaxer, and what are the potential dangers of long-term use?

## What are chemical hair relaxers?

Relaxers are chemical substances often promoted to and used by Black women to straighten curly or kinky hair. They work by breaking the sulfur bonds in the hair, temporarily relaxing the curl pattern and making the hair smoother.

## What are the dangers of chemical hair relaxers?

These products contain harmful ingredients that can disrupt the hormonal system, chemicals known as endocrine disruptors. They can be absorbed through the skin or inhaled and can negatively impact women's health by disrupting hormones that regulate the thyroid, ovaries, pancreas, and adrenal glands.

A study by scientists at Boston University's Black Women's Health Study found that long-term use of chemical hair relaxers by postmenopausal Black women is associated with an increased risk of uterine cancer. Women who used relaxers more than twice a year or for more than five years had over a 50% increased risk of uterine cancer compared to women who never or rarely used them.

That's not the only risk, chemical relaxers often contain harsh ingredients that irritate the scalp and damage hair. Overuse can lead to breakage, thinning hair, and even permanent damage to the hair follicles.

## Why do people still choose chemical hair relaxers?

Despite the dangers, many women still choose relaxers, especially visible on social media. Some find kinky hair difficult to care for, partly due to stigma associated with natural hair, women with tighter curl patterns like type 4C often report spending significant time on hair care. Relaxers make hair easier to comb and style.

Others shared feeling insecure about their natural hair texture. Straight hair is still, unfortunately, more widely accepted than natural kinky hair in our society, with straight-haired people often perceived as neater or more professional. There's still work to be done to overcome these stigmas and embrace the diversity of hair types.

## Conclusion

Chemical relaxers can be a convenient way to manage kinky hair for some, but it's important to understand the potential dangers. Consider natural alternatives, be cautious with chemical products on your hair and scalp, and most importantly, prioritize your health.`,
  },
  {
    slug: "rihanna-expands-her-empire-with-fenty-hair-launching-june-13th",
    title: "Rihanna Expands Her Empire with Fenty Hair – Launching June 13th!",
    date: "June 6, 2024",
    image:
      "https://i0.wp.com/itscoily.com/wp-content/uploads/2024/06/2148261051-1.jpg?fit=1500%2C994&ssl=1",
    excerpt:
      "Rihanna is expanding her beauty empire with the launch of Fenty Hair on June 13th, a line for all hair types and textures.",
    category: "hot-topics",
    content: `In case you haven't heard yet, Rihanna is set to take the beauty world by storm again with the launch of her highly anticipated Fenty Hair line on June 13th. Known for her trailblazing Fenty Beauty and Savage X Fenty brands, Rihanna is now venturing into hair care, promising a collection that caters to all hair types and textures with the same commitment to inclusivity and innovation.

Rihanna has consistently shattered industry norms with inclusive, innovative products. From the groundbreaking success of Fenty Beauty's extensive foundation range to the Savage X Fenty lingerie line, she's proven time and again that she knows exactly what people need. Now she's turning her attention to hair, promising a line that caters to every hair type and texture.

The launch of Fenty Hair isn't just a business expansion, it's a continuation of her mission to provide diverse beauty solutions for everyone. Since its inception, Fenty Beauty has revolutionized the industry with a wide array of foundation shades and innovative skincare products, and Fenty Hair is expected to follow suit.

## What to expect from Fenty Hair

Fenty Hair is set to include a wide array of products designed to meet all hair care needs. According to Harper's Bazaar, Rihanna filed a trademark application for Fenty Hair back in March, and the venture has reportedly been in the works for the last 3 years. The trademark covers everything from styling, straightening, relaxing, and waving products, to hair colour and even hair glitter.

Whether you're looking for styling products, straightening solutions, relaxing and waving products, or hair colour and glitter, Fenty Hair aims to have you covered. Rihanna's commitment to quality and inclusivity means these products should be top-notch and suitable for everyone, no matter your hair type or style.

So, will you be getting new hair products from Fenty Hair on June 13th?`,
  },
];

const articlesPath = path.join(__dirname, "lib/articles.ts");
let content = fs.readFileSync(articlesPath, "utf8");

const marker = "\n];\n\nexport function getArticleBySlug";
const insertion = newArticles
  .map((a) => {
    const contentEscaped = a.content
      .replace(/\\/g, "\\\\")
      .replace(/`/g, "\\`")
      .replace(/\$\{/g, "\\${");
    return `  {
    slug: "${a.slug}",
    title: ${JSON.stringify(a.title)},
    date: "${a.date}",
    image: "${a.image}",
    excerpt: ${JSON.stringify(a.excerpt)},
    category: "${a.category}",
    content: \`${contentEscaped}\`,
  },\n`;
  })
  .join("");

content = content.replace(
  marker,
  `\n${insertion}];\n\nexport function getArticleBySlug`,
);
fs.writeFileSync(articlesPath, content);
console.log("11 nieuwe artikelen toegevoegd aan lib/articles.ts");
console.log(
  "Klaar! Je kan setup8.js nu verwijderen. Alle 35 artikelen staan er nu in.",
);
