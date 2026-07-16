const fs = require("fs");
const path = require("path");

const newArticles = [
  {
    slug: "high-porosity-natural-hair-the-ultimate-guide",
    title: "High Porosity Natural Hair: The Ultimate Guide",
    date: "September 23, 2024",
    image:
      "https://i0.wp.com/itscoily.com/wp-content/uploads/2024/09/pexels-nyaraaquino-3108920.jpg?fit=1920%2C1920&ssl=1",
    excerpt:
      "If you have high-porosity hair, you might find that your hair absorbs moisture quickly but also loses it just as fast.",
    category: "hair-care",
    content: `If you have high-porosity hair, you might find that your hair absorbs moisture quickly but also loses it just as fast. Understanding what high-porosity hair is and how to care for it is essential for maintaining healthy, beautiful hair.

## What is High-Porosity Hair?

Porosity refers to your hair's ability to absorb and retain moisture, determined by the condition of the hair cuticle. High-porosity hair has gaps and holes in the cuticle layer, making it easy for moisture to enter but also escape.

## Characteristics of High-Porosity Hair

1. **Fast Absorption:** Absorbs water and products quickly but also dries rapidly.
2. **Frizz and Tangling:** Prone to frizz and tangles because open cuticles allow moisture to enter and escape easily.
3. **Dryness:** Despite absorbing moisture quickly, high-porosity hair often feels dry because it loses moisture just as fast.
4. **Dull Appearance:** Gaps in the cuticles can cause hair to look dull and lackluster.
5. **Breakage:** Can be fragile and more susceptible to breakage and split ends.

## Causes of High-Porosity Hair

1. **Chemical Treatments:** Frequent use of hair dyes, relaxers, and perms can damage the cuticle.
2. **Heat Styling:** Excessive use of flat irons, curling wands, and blow dryers can weaken the cuticle.
3. **Environmental Damage:** Exposure to harsh weather can cause the cuticle to become raised and damaged.
4. **Mechanical Damage:** Rough handling, aggressive brushing, combing, or towel drying can lead to high porosity.
5. **Improper Hair Care:** Harsh shampoos, skipping conditioning, and not protecting your hair.

## How to Care for High-Porosity Hair

1. **Moisturize Regularly:** Use a leave-in conditioner or moisturizer daily with humectants like glycerin and aloe vera.
2. **Seal in Moisture:** After moisturizing, seal with an oil or butter like castor oil, olive oil, or shea butter.
3. **Deep Condition Weekly:** Use a deep conditioner with protein and moisturizing ingredients once a week.
4. **Use Protein Treatments:** Once a month to strengthen hair and reduce breakage, without overdoing it.
5. **Avoid Heat Styling:** Minimize heat tools; always use a heat protectant when necessary.
6. **Protective Styles:** Braids, twists, and buns help reduce manipulation and protect hair, as long as they aren't too tight.
7. **Rinse with Cool Water:** Helps close the cuticles and seal in moisture, adding shine.
8. **Use pH-Balanced Products:** Look for shampoos and conditioners with a pH range of 4.5 to 5.5.
9. **Avoid Over-Washing:** Wash no more than once or twice a week with a gentle, sulfate-free shampoo.
10. **Nighttime Care:** Use a satin or silk pillowcase, bonnet, or scarf to reduce friction and retain moisture.

## Building a Supportive Hair Care Routine

1. Pre-wash treatment: apply a pre-wash oil for 15-30 minutes before shampooing.
2. Shampoo: gentle, sulfate-free, focused on the scalp.
3. Condition: apply a moisturizing conditioner and detangle.
4. Deep condition weekly for 20-30 minutes under a shower cap.
5. Leave-in conditioner on damp hair after rinsing.
6. Moisturize and seal, focusing on the ends.
7. Protective styling to reduce manipulation.
8. Nighttime care with a satin or silk scarf or bonnet.

High-porosity natural hair requires special care to maintain its health. By understanding its characteristics and causes, you can create a routine that keeps your hair moisturized, strong, and manageable.`,
  },
  {
    slug: "how-often-should-i-trim-natural-hair",
    title: "How often should I trim natural hair?",
    date: "September 16, 2024",
    image:
      "https://i0.wp.com/itscoily.com/wp-content/uploads/2024/08/2150286063-1.jpg?fit=1500%2C1001&ssl=1",
    excerpt:
      "A quick guide on how frequent trimming natural hair can be beneficial and the signs to look for.",
    category: "hair-care",
    content: `Hair growth and length retention are everyone's goal in the natural hair care journey. In this article, we explain how often you should trim your natural hair and why it is important for achieving length goals.

## What is a trim?

A trim is a process that involves cutting off the damaged ends of your natural hair using a pair of hair shears. A hair trim is different from a haircut because the focus is on removing split ends, single strand knots, and other signs of hair damage, without altering the overall length or style.

## Why Do You Need to Trim Your Natural Hair?

Natural type 4 hair is prone to dryness, breakage, and split ends. With regular trims, you can prevent these issues from spreading down the hair shaft, preserving the integrity and length of your hair.

## What are the Benefits of a Trim?

1. **Preventing Breakage:** Regular trims help prevent split ends from progressing and related breakage.
2. **Promoting Hair Growth:** Trims don't directly accelerate growth, but removing damaged areas gives your hair more room to grow and thrive.
3. **Enhancing Hair Appearance:** Trimmed hair looks neater and healthier.
4. **Maintaining Hair Length:** Regular trims help retain length in the long run by preventing excessive breakage.

## How Do You Know When Your Natural Hair Needs a Trim?

- **Presence of Split Ends:** Tiny forks at the end of hair strands, resembling an unravelled rope.
- **Single Strand or Fairy Knots:** Small knots along the length of single hair strands that make combing difficult.
- **Dry and Brittle Ends:** Rough or dry feeling hair, with curly clumps falling excessively when combing.
- **Lack of Definition (Frizzy Hair):** Curls losing their definition and becoming difficult to style.

## How Often Should I Trim Natural Hair?

Trimming every 3 to 5 months is often considered the standard, but constantly trimming may be counterproductive if your goal is length. Many people trim about half an inch every 3 months on average, though if trying to remove damaged hair, monthly trims can be more effective. If your hair is healthy without split ends, frequent trimming may lead to a loss of length.

## Do Frequent Trims Help Hair Grow Faster?

Frequent trims do not directly speed up hair growth. However, removing damaged ends gives your hair more room to thrive and prevents further damage, which creates the illusion of faster growth. It's more important to focus on overall hair health than to rely solely on trims for length goals.`,
  },
  {
    slug: "the-ultimate-guide-to-conditioners-for-natural-hair",
    title: "The Ultimate Guide to Conditioners for Natural Hair",
    date: "September 9, 2024",
    image:
      "https://i0.wp.com/itscoily.com/wp-content/uploads/2024/07/37048.jpg?fit=2000%2C1333&ssl=1",
    excerpt:
      "Let's break down the differences between regular, deep, and leave-in conditioners.",
    category: "hair-care",
    content: `Today, we're diving into the world of conditioners, a crucial part of your hair care routine. Let's break down the differences between regular, deep, and leave-in conditioners, and discover how each one can benefit your coils.

## Regular Conditioners

**Purpose: Daily Moisture and Manageability**

Regular conditioners, also known as rinse-out or instant conditioners, offer immediate hydration and make your hair more manageable after shampooing. Look for ingredients like shea butter, coconut oil, and aloe vera. Apply after every shampoo, leave on for a few minutes, then rinse thoroughly.

## Deep Conditioners

**Purpose: Intensive Moisture and Repair**

Deep conditioners, or hair masks, penetrate deeply into your hair shaft, delivering essential nutrients and intense moisture. They often contain proteins like hydrolyzed keratin and silk proteins, along with nourishing oils and butters. Use once a week or bi-weekly, applying to clean damp hair for 20-30 minutes, with a heat cap for an extra boost.

## Leave-In Conditioners

**Purpose: Long-Lasting Moisture and Protection**

Leave-in conditioners stay in your hair, providing continuous hydration and shielding it from environmental stress and styling damage. Look for lightweight yet nourishing ingredients like argan oil, jojoba oil, and glycerin. Apply to damp hair after washing and conditioning, focusing on the ends.

## Key Differences

### Intensity and Duration of Moisture

- Regular Conditioners: Quick, surface-level moisture, rinsed out after a few minutes.
- Deep Conditioners: Intensive moisture and repair, left on for an extended period.
- Leave-In Conditioners: Ongoing moisture and protection throughout the day.

### Ingredients and Benefits

- Regular Conditioners: Smoothing agents and lightweight moisturizers.
- Deep Conditioners: Proteins, oils, and butters for intensive repair.
- Leave-In Conditioners: Lightweight, nourishing ingredients for continuous hydration.

### Frequency of Use

- Regular Conditioners: After every shampoo.
- Deep Conditioners: Once a week or bi-weekly.
- Leave-In Conditioners: Daily or whenever additional moisture is needed.

## Conclusion

Understanding the differences between regular, deep, and leave-in conditioners can help you tailor your hair care routine to the specific needs of your type 4 hair, ensuring it remains healthy, hydrated, and beautiful.`,
  },
  {
    slug: "how-to-do-a-hot-oil-treatment-on-natural-hair",
    title: "How to Do a Hot Oil Treatment on Natural Hair",
    date: "July 29, 2024",
    image:
      "https://i0.wp.com/itscoily.com/wp-content/uploads/2024/06/bottle-for-oils-with-pipette.jpg?fit=2000%2C1334&ssl=1",
    excerpt:
      "Hot oil treatments are a fantastic way to nourish and strengthen natural hair, particularly type 4 hair.",
    category: "hair-care",
    content: `Hot oil treatments are a fantastic way to nourish and strengthen natural hair, particularly type 4 hair, which often requires extra care and moisture.

## What is a Hot Oil Treatment?

A hot oil treatment involves applying warm oils to the hair and scalp to enhance moisture, strength, and overall health. The heat helps open the hair cuticles and pores on the scalp, allowing the oils to penetrate deeply, conditioning and repairing the hair while stimulating scalp circulation.

## Benefits of Hot Oil Treatments for Natural Hair

### 1. Moisture Retention

Type 4 hair tends to be drier due to its coiled structure. Hot oil treatments help lock in moisture, preventing dryness and brittleness.

### 2. Strengthening Hair

The oils fortify the hair shaft, reducing breakage and split ends.

### 3. Improved Scalp Health

Massaging warm oil into the scalp can help reduce dandruff, dryness, and itchiness.

### 4. Enhanced Shine and Manageability

Hot oil treatments smooth the cuticles, resulting in less frizz and more defined curls.

## Do You Wash Your Hair Before or After a Hot Oil Treatment?

A common and effective approach is to apply the treatment after washing, since clean hair absorbs the nutrients better and the treatment works more efficiently without the barrier of buildup.

## How to Do a Hot Oil Treatment Step-by-Step

### Step 1: Choose Your Oils

- Coconut Oil: Deep conditioning properties.
- Olive Oil: Moisture and strength.
- Jojoba Oil: Similar to the scalp's natural sebum.
- Castor Oil: Promotes hair growth and thickness.
- Avocado Oil: Rich in vitamins and nutrients.

### Step 2: Prepare the Oil

Measure 2-4 tablespoons based on your hair length. Warm it by placing the container in a bowl of hot water, ensuring it's warm, not hot.

### Step 3: Section Your Hair

Divide your hair into manageable sections for even application.

### Step 4: Apply the Oil

Apply warm oil to your scalp with your fingertips, massaging gently, then work down the length of your hair.

### Step 5: Cover Your Hair

Wrap with a warm towel or shower cap for at least 30 minutes. A hooded dryer or heated cap enhances the treatment.

### Step 6: Rinse and Condition

Rinse thoroughly with lukewarm water, follow with a gentle shampoo or co-wash, and finish with your regular conditioner.

### Step 7: Style as Usual

You should notice immediate benefits, such as softer, shinier, more manageable hair.

## Conclusion

Hot oil treatments are a powerful addition to your natural hair care regimen, offering moisture retention, scalp health, and more, making them valuable for maintaining strong, beautiful hair.`,
  },
  {
    slug: "should-you-put-spf-on-your-hair-and-scalp",
    title: "Should You Put SPF on Your Hair and Scalp?",
    date: "July 15, 2024",
    image:
      "https://i0.wp.com/itscoily.com/wp-content/uploads/2024/07/8689.jpg?fit=2000%2C1333&ssl=1",
    excerpt:
      "With so much emphasis on protecting our skin from the sun, it's natural to wonder if our hair and scalp need similar care.",
    category: "beauty",
    content: `Should you put SPF on your hair and scalp? With so much emphasis on protecting our skin from the sun, it's natural to wonder if our hair and scalp need similar care.

## Sun Protection for Hair and Scalp

1. **Preventing Scalp Sunburn:** Your scalp can get sunburned, especially with thinning hair or styles that expose the scalp.
2. **Protecting Hair from UV Damage:** UV rays can weaken the protein structure of your hair, leading to dryness, brittleness, and color fading, particularly concerning for type 4 hair.

## Should You Use SPF Products on Your Hair and Scalp?

### Benefits

- **Protection from UV Rays:** Prevents scalp sunburn and hair damage.
- **Maintains Hair Health:** Helps maintain moisture, strength, and overall health.
- **Preserves Hair Color:** Helps prevent color fading for color-treated hair.

### Drawbacks

- **Product Buildup:** Many SPF products can leave a greasy residue, leading to buildup.
- **Difficult Application:** Hard to apply to the scalp without making natural type 4 hair greasy.
- **Limited Products:** Fewer SPF products are designed specifically for hair and scalp.

## Alternatives to Using SPF on Hair and Scalp

**1. Wear Hats and Scarves:** One of the simplest and most effective ways to protect your hair and scalp from the sun.

**2. Stay in the Shade:** Especially during peak sun hours, typically 10 a.m. to 4 p.m.

**3. Regular Deep Conditioning:** Deep conditioners with shea butter, coconut oil, and aloe vera help protect against environmental damage.

**4. Moisturize and Seal:** A water-based moisturizer followed by a sealing oil creates a barrier against the elements.

## Conclusion

While applying SPF directly to your hair and scalp can offer some protection, it's not always the most practical solution, especially for natural type 4 hair. Consider alternatives like hats, UV-protectant products, and a healthy hair care routine instead.`,
  },
  {
    slug: "7-tips-for-natural-hair-care-during-summer",
    title: "7 Tips for Natural Hair Care During Summer",
    date: "July 8, 2024",
    image:
      "https://i0.wp.com/itscoily.com/wp-content/uploads/2024/06/67414.jpg?fit=2000%2C1121&ssl=1",
    excerpt:
      "The warm temperatures in summer can affect the health and appearance of your hair.",
    category: "hair-care",
    content: `The warm temperatures in summer can affect the health and appearance of your hair. Adjusting your hair care routine during the warmer season is crucial to making sure your natural locks remain healthy and vibrant.

## 1. Trim Split Ends Regularly

Spending more time outside leads to overexposure to UV rays and heat, causing moisture loss and split ends. Cutting off split ends protects the hair from further damage.

## 2. Cover Your Hair When Out in the Sun

Use a hat or scarf to give you extra UV protection and help your scalp retain moisture, while also protecting color-treated hair from wind damage.

## 3. Use a Moisturizing Shampoo and Conditioner

Products with natural ingredients like coconut, shea butter, and marula help hydrate and nourish hair during the summer.

## 4. Clean Your Scalp Properly

Sweating leads to dirt build-up on the scalp. Use a sulfate-free shampoo to clean and moisturize, leaving your scalp fresh and healthy.

## 5. Use a Leave-In Conditioner

Adds and retains moisture, protects from heat damage, and reduces frizz.

## 6. Deep Condition Regularly

Increased heat and humidity make hair more susceptible to breakage. Deep condition at least once a week to keep it nourished and healthy.

## 7. Wear Protective Hairstyles

Twists, braids, buns, and cornrows keep your hair tucked away and protected from environmental aggressors. Remember to moisturize underneath.

## Conclusion

The warm weather during summer can affect your natural hair's health and appearance. By following these tips and using the right products, your hair will stay healthy, hydrated, and vibrant throughout the season.`,
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
console.log("Klaar! Je kan setup6.js nu verwijderen.");
