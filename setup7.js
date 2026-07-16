const fs = require("fs");
const path = require("path");

const newArticles = [
  {
    slug: "the-guide-to-choosing-the-right-shampoo-for-coily-hair",
    title: "The Guide to Choosing the Right Shampoo for Coily Hair",
    date: "June 24, 2024",
    image:
      "https://i0.wp.com/itscoily.com/wp-content/uploads/2024/06/66.jpg?fit=2000%2C1294&ssl=1",
    excerpt:
      "Choosing the right shampoo for coily hair is important, as scalp health directly impacts hair health.",
    category: "hair-care",
    content: `Caring for type 4 hair requires selecting the right shampoo, as scalp health directly impacts hair health. Here's a comprehensive guide to help you navigate the different types of shampoos available and choose one that best suits your hair's specific needs.

## Clarifying Shampoo

**Purpose: Deep cleaning.** Removes product buildup, excess oil, and impurities from the scalp and hair. Essential if you regularly use styling products or live in an area with hard water. Limit use to once a month or as needed to avoid stripping natural oils.

## Moisturizing Shampoo

**Purpose: Hydration and nourishment.** A staple for type 4 hair, which tends to be naturally dry. Enriched with ingredients that provide much-needed moisture. Use regularly to keep your hair hydrated and manageable.

## Color-Treated Hair Shampoo

**Purpose: Color protection.** Helps preserve your color while providing essential nutrients. Use every wash to maintain color vibrancy and prevent fading.

## Sulfate-Free Shampoo

**Purpose: Gentle cleansing.** Cleanses without the harsh sulfates that can strip natural oils, perfect for maintaining the natural moisture balance in type 4 hair. Check the ingredient list for natural oils and botanical extracts.

## Strengthening/Fortifying Shampoo

**Purpose: Strength and repair.** Formulated to strengthen and repair damaged or weak hair, reducing breakage and split ends. Look for ingredients like keratin, biotin, and amino acids.

## Medicated Shampoo

**Purpose: Scalp health.** Designed to treat various scalp and hair conditions like dandruff, psoriasis, seborrheic dermatitis, and fungal infections. Follow label instructions and consult a dermatologist for persistent conditions.

## Volumizing Shampoo

**Purpose: Volume enhancement.** Helps add body and fullness to fine or limp hair without weighing it down. Pair with a volumizing conditioner for best results.

## Dry Shampoo

**Purpose: Oil absorption and refreshing hair.** Absorbs excess oil and refreshes hair without water, extending time between washes. Use sparingly and match to your hair color.

## How to Choose the Right Shampoo for Your Hair Needs

1. **Assess Your Hair's Condition:** Is it dry or oily? Color-treated? Experiencing breakage or dandruff?
2. **Read the Labels:** Look for shampoos catering to your hair's specific needs.
3. **Avoid Harsh Ingredients:** Steer clear of sulfates and alcohols, which can be drying and damaging to type 4 hair.
4. **Consider Your Routine:** Frequent washers should choose a gentle, moisturizing shampoo; less frequent washers may need a stronger clarifying shampoo occasionally.
5. **Test and Observe:** Try different shampoos and stick with what works best for your hair's health and appearance.

## Conclusion

By understanding the different types of shampoos available and selecting one that meets your hair's unique needs, you can ensure your type 4 hair stays healthy, hydrated, and beautiful.`,
  },
  {
    slug: "how-to-take-care-of-fine-natural-hair",
    title: "How to Take Care of Fine Natural Hair",
    date: "June 17, 2024",
    image:
      "https://i0.wp.com/itscoily.com/wp-content/uploads/2024/06/Medium-shot-smiley-woman-with-comb.jpg?fit=2000%2C1331&ssl=1",
    excerpt:
      "Natural fine hair breaks off too easily and falls flat. Understanding its unique needs allows you to manage it better.",
    category: "hair-care",
    content: `Fine natural hair care is often difficult to manage and requires extra attention. Understanding and catering to the unique needs of fine natural hair allows you to easily manage it better.

## Understanding Fine Natural Hair

Fine hair refers to the diameter or width of a single strand. It is light, feathery, and often feels invisible. To test: pull a single strand and roll it between your fingers. If you cannot feel it, you have fine hair; if it feels light and feathery, medium hair; if thick and strong, coarse hair.

## Common Challenges and Misconceptions

Type 4 fine hair is prone to breakage due to its many coils and curls, but this doesn't mean it cannot grow. It just needs more tender love and care to reduce friction and tension between strands.

## Daily Care Routine

- **Cleanse:** Use a gentle, sulfate-free clarifying and volumizing shampoo weekly or bi-weekly. Avoid hot water.
- **Condition and Nourish:** Apply conditioner on wet hair, leave for a few minutes before rinsing. Deep condition once a week.
- **Detangle:** Gently comb through with fingertips, a wide tooth comb, or detangling brush.
- **Style:** Achieve desired volume and fullness using styling products.

## Moisturizing and Sealing

Moisturize even when not washing to keep strands healthy. Sealants like coconut, avocado, olive, almond, argan, and castor oil lock in moisture.

## Protective Styling

Bantu knots, twists, braids, buns, and cornrows keep hair tucked away from daily manipulation. Keep coils underneath moisturized, and use heat protectant if using heat tools.

## Choosing the Right Products

1. **Shampoo:** Lightweight, sulfate-free formulas with aloe vera and chamomile; clarifying shampoo occasionally.
2. **Conditioner:** Lightweight conditioner with coconut milk, aloe vera, hydrolyzed proteins; lightweight leave-in.
3. **Styling Products:** Water-soluble silicones, lightweight gel or mousse, light oils like argan or grapeseed.
4. **Deep Conditioner/Mask:** Lightweight protein treatments occasionally; moisturizing masks with honey, avocado, shea butter weekly.
5. **Heat Protectant:** Lightweight spray if using heat tools.

## Healthy Hair Practices

- Maintain a balanced diet with vitamins A, C, D, E, iron, B vitamins, zinc, protein, biotin, and essential fatty acids.
- Stay hydrated to prevent brittle texture and split ends.
- Trim regularly to prevent breakage from traveling up the shaft.
- Don't tie hair too tight.
- Sleep on a silk pillowcase to reduce friction.
- Limit heat styling.

## Conclusion

While fine natural hair is prone to breakage, caring for it is not complicated. With the right care and styling routine, you can easily manage your curls to achieve your hair goals.`,
  },
  {
    slug: "how-to-wash-natural-hair-in-5-easy-steps",
    title: "How to Wash Natural Hair in 5 Easy Steps",
    date: "June 10, 2024",
    image:
      "https://i0.wp.com/itscoily.com/wp-content/uploads/2024/06/2150571363.jpg?fit=2000%2C1333&ssl=1",
    excerpt:
      "Forget outdated myths about washday being a hassle. With the right approach, it can become an enjoyable routine.",
    category: "hair-care",
    content: `Taking care of your natural hair can be a joyful and fulfilling experience. With the right approach, washing, detangling, and moisturizing your type 4 hair can become a relaxing part of your self-care regimen.

## Step 1: Pre-Poo and Detangle

This optional step can help protect your hair from harsh shampoo ingredients like parabens and sulfates.

1. Section your hair into 4 to 6 sections and loosely braid each one.
2. Apply the pre-poo treatment thoroughly through each section, from root to tip.
3. Cover your hair with a shower cap or plastic bag and let it sit for 20 to 30 minutes, then rinse thoroughly.

## Step 2: Shampoo

- Choose a good shampoo based on your specific hair needs.
- Soak your hair with water before applying shampoo.
- Focus on the scalp, using fingertips (not fingernails) to gently massage.
- Rinse with lukewarm water to open pores and encourage clean, healthy growth.

## Step 3: Condition

1. Apply the conditioner through the length of your hair, avoiding the scalp.
2. Let it sit for 5 to 10 minutes, or up to 30 minutes for deep conditioning.
3. Rinse with cool water to close the pores and seal in moisture.
4. Dry with a clean T-shirt or microfiber towel.

## Step 4: Moisturize

1. Moisturize your strands with a hydrating leave-in spray or cream while damp.
2. Seal with oil or cream to lock in the hydration.

## Step 5: Style

Choose a style that suits your mood and rock your beautiful natural hair with confidence. Let your hair air-dry or dry a bit before using a blow dryer.

With these 5 easy steps, wash day can be a breeze, leaving your type 4 hair healthy, vibrant, and thriving.`,
  },
  {
    slug: "what-is-hair-elasticity-everything-you-need-to-know",
    title: "How Does Hair Elasticity Affect Hair Health?",
    date: "May 30, 2024",
    image:
      "https://i0.wp.com/itscoily.com/wp-content/uploads/2024/05/Front-view-woman-with-afro-hairstyle.jpg?fit=2000%2C1333&ssl=1",
    excerpt:
      "Your hair elasticity is the ability of your hair to stretch and return to its normal state.",
    category: "hair-care",
    content: `Are you familiar with the elasticity of your hair? In this article, discover more about what hair elasticity is, why it can be important, and how to test your hair's elasticity.

## What is hair elasticity?

Your hair elasticity is the ability of your hair to stretch and return to its normal state, similar to an elastic band. It shows how healthy your hair is: with healthy hair, your elasticity is balanced. If you stretch your hair and it does not return to its original shape or breaks off, something is wrong.

## How do you know if your hair elasticity is balanced?

An unbalanced elasticity is usually caused by insufficient hydration or lack of protein.

### Low elasticity

Hair breaks very easily, meaning your hair has absorbed too much protein or lacks hydration.

### Medium elasticity

Hair stretches before it breaks off.

### High elasticity

Hair can be stretched for a very long time before it breaks off.

## Why is its elasticity important?

The elasticity of your hair is an indication of its health. Type 4 hair is more prone to dryness because of its shape, with pits and elevations in the hair shaft that can cause the cuticle to rise and expose hair to moisture loss.

## How elastic should your hair be?

Healthy hair generally stretches between 40-50% when dry and 20% when wet.

## How to determine your hair elasticity?

Take a strand of hair, spray it with water, then gently stretch it. If it immediately breaks off, your hair needs hydration (low elasticity). If it stretches and springs back, that's medium or balanced elasticity. If it's overly stretchy, your hair may need protein (high elasticity).

## Tips to maintain the elasticity of your hair

1. Keep your hair moisturized
2. Avoid using too much heat on your hair
3. Limit chemical treatments on your hair

If you notice drastic or consistent changes, it's best to consult a specialized hair stylist for professional advice.`,
  },
  {
    slug: "what-is-hair-thickness-its-not-what-you-think",
    title: "What is Hair Thickness? It's Not What You Think!",
    date: "May 29, 2024",
    image:
      "https://i0.wp.com/itscoily.com/wp-content/uploads/2024/05/Front-view-woman-styling-hair.jpg?fit=2000%2C1331&ssl=1",
    excerpt:
      "Your hair thickness is the width of a single strand of hair, falling into thin, medium, or thick categories.",
    category: "hair-care",
    content: `Hair thickness can play a role in how you handle your hair. But what exactly is hair thickness, and why is it important?

## What is hair thickness?

Your hair thickness is the width of a single strand of hair. There are 3 categories: thin, medium, or thick hair. It's possible to have different thicknesses on your head, and thickness can also vary by ethnicity. People of Asian descent generally have the thickest hair strands, while people of African descent generally have the finest strands, with European descent somewhere in between.

## What are the different thicknesses of hair?

### Thin hair

Has a smaller diameter than average or thick hair. Often more fragile and tends to break easily, with challenges maintaining volume and density.

### Thick hair

Has the largest diameter and is generally the strongest and most resilient, with fewer problems with breakage.

## What determines your hair thickness?

Mainly genetics, a trait you're born with that generally doesn't change. Other factors include:

1. **Ethnicity:** Different ethnic groups have different strand sizes.
2. **Age:** Hair thickness can change as you age.
3. **Hormones:** Changes in hormone levels can affect hair growth and thickness.
4. **Scalp health:** Poor diet, stress, and medical conditions can affect scalp health and thickness.

## How do you know the thickness of your hair?

Look at your hair strands: if fine and hard to see when rubbed between fingers, you likely have thin hair. If clearly visible but not too thin or thick, average hair. If thick and easily visible, thick hair. You can also feel a strand: thicker strands have more texture and a distinct grain.

## Can thin hair become thick?

It's not possible to permanently change your hair thickness since it's determined by genetics. However, volumizing hair products or certain hairstyles can make thinner hair look thicker. Seek professional advice if you notice drastic hair thinning.

## How does hair thickness differ from density?

Hair thickness refers to the diameter of individual hair strands, while hair density refers to how many hair strands grow on your scalp, two different things that are often mixed up.

## Why is hair thickness important for caring for your type 4 hair?

People with fine hair often have more difficulty detangling, since fine hair tends to tangle more easily, which can lead to hair breakage.`,
  },
  {
    slug: "what-is-hair-porosity-why-it-matters",
    title: "What is Hair Porosity? Here's Why It Matters.",
    date: "May 27, 2024",
    image:
      "https://i0.wp.com/itscoily.com/wp-content/uploads/2021/08/Darkskin-Woman-with-medium-lenght-natural-hair.jpg?fit=1200%2C800&ssl=1",
    excerpt:
      "Your hair porosity determines the extent to which your hair absorbs moisture and hair products.",
    category: "hair-care",
    content: `Your hair porosity determines the extent to which your hair absorbs moisture and hair products. It can be affected by genetics, damage to the hair shaft, and the use of certain hair care products.

## Hair structure

### The hair cuticle

The hard outer layer of your hair strands, made of keratin, similar to overlapping roof tiles or fish scales. The thickness and number of layers affect the porosity of your hair. Damaged hair causes cuticles to straighten out, leading to dry, brittle, sensitive hair.

### The cortex

The middle layer, and thickest layer of your hair, containing pigment cells that produce melanin and determine hair color.

### The medulla

The soft, central layer consisting of cells with air spaces. Not present in all hair types; often absent in fine or thin hair.

## The 3 types of hair porosity

### High porosity

Hair cuticles are further apart and open, making it easy for moisture to enter and exit. Characteristics: hair dries quickly, is prone to frizz, and often feels dry.

### Average or "normal" porosity

Cuticles are not too far apart and slightly open, ideal for absorbing and retaining moisture. Characteristics: easy to style, absorbs color well, looks healthy and shiny, doesn't take too long to air dry.

### Low porosity

Cuticles are close together and closed, making it difficult for moisture to enter or leave. Characteristics: hair takes a long time to dry, resistant to coloring and chemical processes, prone to product build-up.

## What determines your hair porosity?

Influenced by genetics, and by external factors like heat, chemicals, over-washing, and aggressive products, which can damage hair over time and increase porosity.

## How to determine if your hair has high, low, or medium porosity?

### The float test

Place a clean strand of hair in a glass of water for 2-4 minutes. If it sinks quickly, high porosity; floats in the middle, medium porosity; floats at the top, low porosity.

### The hair strand test

Feel over a strand of hair. Low porosity feels smooth (flat cuticles); high porosity feels rough and bumpy (open cuticles).

### The spray bottle test

Spray a section with water. Quick absorption means high porosity; sitting for a while before absorbing means medium porosity; droplets not absorbed means low porosity.

## What does hair porosity mean for my hair routine?

### High porosity

Use methods that retain moisture: nourishing products, cold water rinses, and lower pH products like apple cider vinegar rinses to close cuticles.

### Medium porosity

Easy to care for; use nourishing products and cleanse regularly, alternating hydration and protein.

### Low porosity

Use heat and steam to open the cuticle, hair caps while conditioning, and products with humectants. Use heavy products sparingly to avoid buildup.`,
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
console.log("6 nieuwe artikelen toegevoegd aan lib/articles.ts");
console.log("Klaar! Je kan setup7.js nu verwijderen.");
