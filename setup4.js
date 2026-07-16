const fs = require('fs');
const path = require('path');

const files = {
  'components/ArticleContent.tsx': `type ArticleContentProps = {
  content: string;
};

export default function ArticleContent({ content }: ArticleContentProps) {
  const blocks = content.trim().split(/\n\n+/);

  function renderInline(text: string) {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  }

  return (
    <div className="max-w-none">
      {blocks.map((block, i) => {
        const trimmed = block.trim();
        if (trimmed.startsWith("### ")) {
          return (
            <h3 key={i} className="text-lg font-bold text-indigo-950 mt-6 mb-2">
              {renderInline(trimmed.slice(4))}
            </h3>
          );
        }
        if (trimmed.startsWith("## ")) {
          return (
            <h2 key={i} className="text-xl font-bold text-indigo-950 mt-8 mb-3">
              {renderInline(trimmed.slice(3))}
            </h2>
          );
        }
        if (trimmed.startsWith("- ")) {
          const items = trimmed.split("\n").map((line) => line.replace(/^- /, ""));
          return (
            <ul key={i} className="list-disc pl-6 my-3 space-y-1 text-gray-700">
              {items.map((item, j) => (
                <li key={j}>{renderInline(item)}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-gray-700 my-3 leading-relaxed">
            {renderInline(trimmed)}
          </p>
        );
      })}
    </div>
  );
}
`,
  'lib/articles.ts': `export type Article = {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  category: "hair-care" | "beauty" | "hot-topics";
  content: string;
};

export const articles: Article[] = [
  {
    slug: "how-to-stretch-4c-hair-without-heat",
    title: "How to Stretch 4C Hair Without Heat?",
    date: "April 7, 2025",
    image:
      "https://i0.wp.com/itscoily.com/wp-content/uploads/2025/03/2148999429.jpg?fit=2000%2C1335&ssl=1",
    excerpt:
      "Learn how to stretch your 4C hair without heat damage. Find out effective, heatless methods for achieving longer natural hair.",
    category: "hair-care",
    content: `Stretching 4C hair without heat may sound impossible, but there are many ways to do it. In this article, we are going to share the most effective heat-free stretching methods for type 4C hair and essential tips to prevent shrinking.

## Why Stretch Your 4C Hair

Type 4C hair is characterized by tight coils and curls, and is also prone to dryness and breakage. Stretching your 4C hair can help to improve its appearance and health in several ways:

- Reduces shrinkage
- Reduces tangles and knots
- Improves moisture retention
- Reduces breakage
- Makes hair easier to manage

## Heat-Free Stretching Methods

Since 4C hair is prone to dryness and breakages, heat-free stretching methods are more beneficial. The most effective ones include:

### 1. Banding

Banding offers a simple method to stretch your 4C hair. Start with damp hair and divide it into sections. Then place a hair tie at the root of the section as you continue to wrap the hair tie down the length of the hair. Space the hair ties evenly apart and leave it overnight or until the hair is completely dry. Once the hair is dry, remove the hair ties carefully and style your hair as usual.

### 2. African Threading

African threading is a traditional heat-free stretching method that originated in Africa. It involves wrapping threads around sections of your hair to stretch it out. Divide your damp hair into small sections and then take a piece of thread and wrap it around the base of one section of hair. Wrap the thread tightly down the length of the hair and tie the thread off at the end of the hair. Repeat for all sections and leave the thread overnight or until the hair is completely dry. Carefully remove the thread and style the hair as usual.

### 3. Bantu Knots

Since bantu knots are easy and can be done within a short time, they are a quick way to stretch 4C hair well and give luscious bouncy curls. Take a section of your hair and twist it, then turn it on its base. Secure the ends with a rubber band or pin on small sections. Leave the knots overnight or until the hair dries completely. Make sure you apply a leave-in, moisturizing oil, or curl cream to keep the hair moisturized.

### 4. Twist and Re-twist

For the best outcome for 4C hair, section and twist your hair as you wash. Take large sections of your hair and twist as you prep to wash. After applying shampoo and conditioner, and rinsing the hair, take out one twist at a time. Then retwist the open hair every 2-3 hours until the hair is completely dry to get perfectly stretched hair.

### 5. Tie in a Bun

You can tie up your 4C hair into a bun if you want to stretch your hair quickly. However, this method may not give as much stretch as twisting or braiding. Once you wash your hair, twist it in big sections and let it air dry. Then open your twists and tie the hair in a bun. Repeat this every 2-3 days to achieve the desired stretch.

### 6. Pineapple Updo

Loosely tie your hair up in a pineapple shape to prevent frizz, knots, or flattened curls. The pineapple method is great for nighttime because it gathers all the hair at the top of the head. Tie it loosely with a satin scrunchie to protect it from friction while you sleep.

### 7. Curlformers

Curlformers are effective heat-free stretching tools for all hair types, from straight to kinky. On freshly washed 4C hair, apply a good leave-in conditioner and moisturizing oil, then put the curlformers in place once the hair is dry. Leave for a few hours and remove for lovely, bouncy, stretched curls.

### 8. Jumbo Braids

With jumbo braids, take large sections of your hair and braid them. Leave for about 15 minutes and then open it up. This gives a stretchy look, though not as refined as banding or threading, and is a great wash-and-go option.

## Tips On Preventing Shrinkage and Maintaining Stretched Styles

- Keep your hair moisturized using the LOC (leave-in, oil, and cream) method
- Pre-stretch the hair while it is still damp, especially with banding, twisting, braiding, or rollers
- Wear protective styles like twists and buns to prevent your hair from shrinking back up
- Sleep in a pineapple or loose bun at night, wearing a satin bonnet or scarf

Stretching your natural hair helps reduce tangles and friction. It also increases moisture retention, making your hair healthy and vibrant. Use a method that works for you and is sustainable in the long term.`,
  },
  {
    slug: "is-coily-hair-considered-curly",
    title: "Is Coily Hair Considered Curly?",
    date: "March 24, 2025",
    image:
      "https://i0.wp.com/itscoily.com/wp-content/uploads/2025/03/Two-curly-haired-women-pose-side-by-side-against-a-white-wall-radiating-joy-and-friendship.jpg?fit=2000%2C1334&ssl=1",
    excerpt:
      "Terms like curly and coily are often used interchangeably, but are these terms two sides of the same coin, or do they refer to completely different things?",
    category: "hair-care",
    content: `Understanding different hair types can sometimes feel like decoding a puzzle, especially when it comes to textured hair. Terms like "curly" and "coily" are often used interchangeably, which can lead to confusion. Are these terms two sides of the same coin, or do they refer to completely different things?

## What Defines Curly Hair?

To understand where coily hair fits, we first need to define curly hair. Generally, curly hair is known for its loops or spirals that form naturally due to the shape of the hair follicle. It ranges from loose waves to bouncy ringlets, depending on a person's unique curl pattern.

### The General Characteristics of Curly Hair

Many people use the widely-known hair typing chart to describe their curl pattern. On this chart, curly hair spans categories 2A to 3C:

- Type 2A, 2B, 2C: Wavy hair with an "S" shape, varying from loose to defined waves.
- Type 3A, 3B, 3C: True curly hair, ranging from loose curls to tight corkscrews.

### How Hair Typing Systems Work

The Andre Walker Hair Typing System is one of the most recognized ways to classify hair textures. It divides hair into four categories: straight (Type 1), wavy (Type 2), curly (Type 3), and coily (Type 4). Within these categories, subtypes (like 3B or 4A) account for variations in curl tightness and texture.

## What Sets Coily Hair Apart?

Coily hair, also known as kinky hair, is the tightest texture in the hair typing system. People with coily hair often fall into the Type 4 range.

### The Unique Features of Coily Hair

- Type 4A: Defined, tight curls that resemble small corkscrews.
- Type 4B: Z-shaped curls with sharp angles.
- Type 4C: The tightest coil pattern, with little to no visible curl definition.

One striking feature of coily hair is shrinkage. It can appear much shorter than it actually is because of its tight curl pattern. Coily hair also tends to be drier, as natural oils struggle to travel down the twists and turns of the strands.

### Coily Hair's Relationship to Curl Patterns

Coily hair is technically included within the broader "curly" category. However, its unique structure sets it apart. While all coily hair has curls, not all curls can be classified as coily.

## Is Coily Hair Actually Curly?

### Differences in Terminology

Culturally and within the beauty industry, terminology can vary. Some group all textured hair into one category called "curly." Others prefer a more specific classification to highlight the unique needs of coily hair.

### Scientific and Technical Perspectives

The shape of the hair follicle determines whether your hair is straight, wavy, curly, or coily. Oval-shaped follicles create curls, while round follicles produce straight hair. Coily hair is simply an extreme version of curly hair caused by a very flat, ribbon-like follicle.

## Why the Distinction Matters

### Implications for Hair Care Routines

Coily hair is naturally more fragile and needs products that provide intense moisture and protection. Curly hair may need ingredients that help define looser curls without weighing them down.

### Cultural and Personal Identity

For many people with coily hair, labeling their texture specifically helps celebrate its uniqueness and ensures better representation in media, beauty standards, and product development.

## Conclusion

So, is coily hair considered curly? Technically, yes, coily hair is an ultra-tight variation of curls. But its unique characteristics set it apart, and many people prefer to acknowledge it as its own category. Whatever the terminology, the most important takeaway is to celebrate your hair and find what works for you.`,
  },
  {
    slug: "how-to-diffuse-natural-hair-tips-for-perfectly-defined-coils",
    title: "How to Diffuse Natural Hair: Tips for Perfectly Defined Coils",
    date: "January 13, 2025",
    image:
      "https://i0.wp.com/itscoily.com/wp-content/uploads/2024/10/2149659562.jpg?fit=1500%2C1072&ssl=1",
    excerpt:
      "Diffusing natural hair is a game-changer for achieving defined, bouncy coils while reducing drying time.",
    category: "hair-care",
    content: `Diffusing natural hair is a game-changer for achieving defined, bouncy coils while reducing drying time. It's all about working with your natural texture and protecting your hair from unnecessary damage.

## What is Diffusing and Why Do It?

Diffusing is a technique that uses a hairdryer attachment (a diffuser) to evenly distribute airflow, gently drying your curls without disrupting their shape. It's a go-to method for those who want to enhance curl definition, minimize frizz, and cut down air-drying time, especially on wash day.

## How to Diffuse Natural Hair: Step-by-Step

### 1. Start with Damp, Prepped Hair

- Begin with freshly washed and conditioned hair.
- Apply your styling products (leave-in conditioner, curl cream, gel, or mousse) while your hair is still damp.
- Focus on evenly distributing your products using the "praying hands" method or raking them through your curls.

### 2. Use a Microfiber Towel or T-Shirt to Remove Excess Water

Avoid traditional towels, which can roughen your hair cuticle and cause frizz. Use a microfiber towel or a soft T-shirt to gently blot your hair.

### 3. Attach the Diffuser and Set the Dryer to Low or Medium Heat

High heat can lead to damage and dryness, so keep the settings low to medium.

### 4. Flip Your Head Upside Down (Optional)

Flipping your head upside down while diffusing can create more volume at the roots.

### 5. Dry in Sections Without Touching Your Hair Too Much

Place a section of your hair into the diffuser bowl and gently press it towards your scalp. Hold in place for a few seconds before moving to the next section.

### 6. Finish With a Cool Shot

Once your hair is about 80-90% dry, switch to the cool setting and do a final pass to set your coils and enhance shine.

## What NOT to Do When Diffusing

- Don't Use High Heat: High temperatures can damage your curls and lead to dryness.
- Don't Over-Dry: Stopping at 80-90% dryness helps maintain moisture and reduces frizz.
- Don't Touch Your Hair Excessively: Handling your hair while diffusing can disrupt curl formation.

## Extra Tips for Success

- Use a heat protectant spray before diffusing to shield your hair from heat damage.
- For extra curl definition, consider scrunching your hair with a gel or mousse before drying.
- If volume is your goal, diffuse your roots while flipping your head upside down.

Diffusing natural hair is all about enhancing your hair texture while keeping it healthy and frizz-free. Try it out and let us know how it goes!`,
  },
  {
    slug: "5-best-steps-to-build-an-effective-hair-care-routine",
    title: "5 Best Steps to Build an Effective Hair Care Routine",
    date: "January 6, 2025",
    image:
      "https://i0.wp.com/itscoily.com/wp-content/uploads/2025/01/2149634997.jpg?fit=2000%2C1331&ssl=1",
    excerpt:
      "Hair care is a must-have. Having a good hair care routine goes a long way in keeping your hair vibrant and healthy.",
    category: "hair-care",
    content: `Hair care is a must-have. Having a good hair care routine goes a long way in keeping your hair vibrant and averting hair and scalp conditions that improper hair practices could cause.

Here are the 5 best steps to act as your guide to building a natural hair care routine:

1. Scalp cleansing
2. Conditioning
3. Moisturizing
4. Styling
5. Maintenance and protection

## Scalp cleansing

Scalp cleansing removes dirt, build-up, and debris accumulated on the scalp and hair over time. A good shampoo should contain mild cleansers and gentle ingredients that soothe the scalp without stripping it of its natural oils.

Steps to correct shampooing:

- Ensure the hair is open before washing, not braided or with extensions.
- Detangle the hair with a wide-toothed comb before it is wet, to prevent breakage.
- Wash your hair in the shower or at the sink, with the hair falling backward.
- Wet the hair with lukewarm water.
- Apply the shampoo on the scalp and massage gently with your fingers, avoiding circular scrunching motions.
- Rinse off the hair with lukewarm water.
- Use a microfiber towel to blot off excess water from the hair.

For natural coily hair, shampoo once or at most twice a week. It takes long for sebum to travel along coily hair to moisturize it, so shampooing too often strips this natural oil and causes dryness.

## Conditioning

Deep conditioning your hair imparts moisture and strength. Deep conditioners come in two types: moisture-rich (containing light oils, emollients, and humectants) and protein-rich (containing hydrolyzed proteins, amino acids like oat protein, silk protein, rice protein, collagen, keratin).

Steps to deep condition your hair:

- After shampooing, blot off excess water so the conditioner does not run.
- Using a comb, part the hair into small sections and apply a generous amount of deep conditioner from roots to tips.
- Cover your hair with a plastic cap or sit under a hood dryer for 15-30 minutes.
- Rinse with lukewarm water.
- Dry the hair with a microfiber towel.

Conditioning once a week or twice a month is good practice, alternating protein and moisture treatments for maximum benefit.

## Moisturizing

Once you have shampooed and deep conditioned your hair, add hydration with a water-based moisturizer that also contains sealants (light oils and humectants) to lock moisture in.

Steps in moisturizing your hair:

- When the hair is damp, divide it into small sections and apply the moisturizing product.
- Apply from the roots to the tip, ensuring adequate coverage.
- Massage the product into the hair.
- Style the hair as desired.

Curly hair requires constant moisturizing to keep away dryness. Repeat every 3-7 days.

## Styling

Adopt styles that do not cause manipulation or tension on the hair, help retain moisture, and sit on your hair for about 2-3 weeks only. Styles that stay too long cause tangles, breakage, and excessive build-up.

## Maintain and protect

- Sleep in a satin bonnet or on satin pillowcases.
- Use moderate heat to prevent heat damage.
- Use heat protectant sprays.
- Use gentle styling products, avoiding harsh ingredients like alcohol and mineral oils.
- Protect your hair from excessive sun exposure.
- Trim your hair every three weeks or so.

An effective hair care routine is the best way, if not the only way, to keep your hair healthy and maintain your coils.`,
  },
  {
    slug: "how-to-tame-frizz-on-natural-hair",
    title: "How to Tame Frizz on Natural Hair",
    date: "December 16, 2024",
    image:
      "https://i0.wp.com/itscoily.com/wp-content/uploads/2024/11/Feature-image-Itscoily-3.png?fit=1200%2C628&ssl=1",
    excerpt:
      "Are you struggling with frizzy hair? Here is a simplified guide to tame and prevent frizz using simple products and techniques.",
    category: "hair-care",
    content: `Frizz is a natural occurrence in textured hair and can bring a unique charm by adding volume and personality to your look. While it might soften definition after styling, it's also a sign that your hair may be craving a little extra care.

## What is Frizz

In natural hair, frizz occurs when the hair strands are not aligned smoothly and appear raised, creating a fluffy or textured look. It is most common in curly, coily, and wavy hair types, typically from type 3A to 4C.

## Why Frizz is Common in Natural Hair

Natural hair has a unique structure that creates beautiful curls and coils. However, it tends to get drier and more porous, which makes frizz a common problem.

## Types of Frizz

- Surface Frizz: Flyaways affecting only the outside of the hair, mainly caused by overwashing, lack of moisture, and harsh products.
- Halo Frizz: Fluffiness only at the crown, due to aggressive brushing or sleeping on a rough surface.
- In-the-Curl Frizz: Occurs in the curls due to dryness, making them look unruly and fuzzy.

## Causes of Frizz on Natural Hair

- Humidity and Moisture Absorption: Curly and coily hair is porous and absorbs extra water from humid air, causing strands to swell and frizz.
- Hair Structure: Cuticles in natural curls are more raised than in straight hair, making it easier for moisture to enter.
- Lack of Moisture: Dry strands try to draw moisture from the air, leading to frizz.
- Damage and Breakage: Heat styling, harsh chemicals, or over-manipulation weaken hair and roughen the cuticle.
- Friction: Rubbing hair against rough surfaces like cotton pillowcases or towels roughens the cuticle layer.

## How to Control Frizz on Natural Hair

### 1. Moisturize Frizzy Hair

Start in the shower with a hydrating, frizz-free shampoo, detangle thoroughly with a wide-tooth comb, and apply a friendly conditioner for extra moisture.

### 2. Deep Condition Your Natural Hair

Massage conditioner into freshly washed hair, leave for 10-15 minutes, then rinse. Boost with a hair mask and plastic shower cap for 30 minutes.

### 3. Dry Your Natural Hair with a Microfiber Towel

A microfiber towel or cotton t-shirt absorbs moisture better and more gently than a regular towel.

### 4. LOC in the Moisture

Use the LOC method: leave-in, then oil, then cream, to lock in moisture and smooth frayed edges.

### 5. Use Anti-Frizz Styling Products

Products with coconut oil, apple cider vinegar, argan oil, and mango butter are effective. Avoid harsh chemicals like alcohol, sulfates, petroleum, and parabens.

### 6. Avoid Brushing

Brushing dry natural hair can disrupt curl patterns and add frizz. Detangle with a wide-tooth comb on wet or damp hair instead.

### 7. Let Styles Fully Set

Leave bantu knots or twists in for at least 8 hours or until completely dry for smooth, defined results.

### 8. Protect Your Natural Hair at Night

Wear a bonnet or silk scarf, or use satin/silk pillowcases to reduce friction while you sleep.

### 9. Trim Split Ends Regularly

Trimming every six weeks helps make the hair fuller and prevents frayed ends from traveling up the shaft.

## Final Thoughts on Controlling Frizzy Natural Hair

Many people embrace frizz as part of the texture that adds volume and dimension. Simple tips such as moisturizing and the LOC method are effective if you want to reduce it.`,
  },
  {
    slug: "best-butters-for-natural-hair-nourish-and-protect-your-strands",
    title: "Best Butters for Natural Hair: Nourish and Protect Your Strands",
    date: "November 18, 2024",
    image:
      "https://i0.wp.com/itscoily.com/wp-content/uploads/2024/11/2148963332.jpg?fit=1500%2C1000&ssl=1",
    excerpt:
      "One of the most effective ways to nourish and hydrate natural hair is using hair butter.",
    category: "hair-care",
    content: `Natural hair usually requires extra care and attention to keep it healthy. One of the effective ways to nourish and hydrate it is using hair butter. The thick, creamy product provides moisture and protection to your hair, allowing it to thrive.

## What is Hair Butter?

Hair butter is a blend of natural plant butter and oil. You can use hair butter as a sealant, moisturizer, sheen, nourishment, and shine. These moisturizing sealants are best suited for sealing in moisture from water and products such as moisturizers and leave-in conditioners.

## Why Use Hair Butter?

Hair butter helps revitalize brittle or dry hair. Since it is heavier and creamier than oil, it acts as a sealant, helping to define curls and coils. Use just the right amount, usually a dab, since too much can lead to product buildup and weigh hair down.

## How to Use Hair Butter

Butter produces the best results when applied after a leave-in conditioner, usually as the last step before styling.

- Wash your hair to remove dirt and any product buildup before applying butter
- Always apply as the last hair product before styling
- Can be applied on damp or dry hair
- Apply on dry, split ends to prevent breakage
- Apply butter in sections and use a wide-tooth comb to distribute it evenly
- Acts as a sealant to protect the hair from heat and styling
- Works great for styles like braid out, twist out, and a sleek bun

## Top 4 Butters for Natural Hair

### 1. Shea Butter

Best for: Moisturizing, protecting, and promoting hair growth. One of the most commonly used butters for natural hair. It helps protect, hydrate, smooth, and soften the hair, locking in moisture when applied to damp hair.

### 2. Mango Butter

Best for: Softening dry and brittle hair and reducing scalp inflammation. Packed with minerals and vitamins that moisturize and soften the hair while adding shine, with anti-inflammatory properties that soothe the scalp.

### 3. Cupuacu Butter

Best for: Intense hydration and softening the hair. Lighter than shea and cocoa butter, making it easier to absorb. Softens hair while adding shine, sheen, and manageability.

### 4. Avocado Butter

Best for: Intense hydration and detangling. Rich in fatty acids and vitamins, great for dry and damaged natural hair. Helps moisturize, soften, and protect the hair strands, reducing breakage and split ends.

## Conclusion

Incorporating butter into your hair care routine can help nourish, hydrate, and protect it. Consider the needs of your hair to make the right choice, some butters are great for softening brittle hair while others offer intense hydration or styling benefits.`,
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: Article["category"]) {
  return articles.filter((article) => article.category === category);
}
`,
  'app/blog/[slug]/page.tsx': `import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleContent from "@/components/ArticleContent";
import { articles, getArticleBySlug } from "@/lib/articles";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main>
      <Navbar />
      <article className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-sm text-gray-500 mb-2">{article.date}</p>
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-6">
          {article.title}
        </h1>
        <img
          src={article.image}
          alt={article.title}
          className="rounded-xl w-full object-cover mb-8"
        />
        <ArticleContent content={article.content} />
      </article>
      <Footer />
    </main>
  );
}
`,
  'components/PostCard.tsx': `import Link from "next/link";

type PostCardProps = {
  title: string;
  excerpt?: string;
  image?: string;
  slug?: string;
};

export default function PostCard({ title, excerpt, image, slug }: PostCardProps) {
  const content = (
    <div className="flex flex-col">
      {image ? (
        <img
          src={image}
          alt={title}
          className="rounded-lg aspect-[4/3] mb-3 w-full object-cover"
        />
      ) : (
        <div className="bg-gray-200 rounded-lg aspect-[4/3] mb-3" />
      )}
      <h3 className="font-semibold text-gray-900">{title}</h3>
      {excerpt && <p className="text-sm text-gray-600 mt-1">{excerpt}</p>}
    </div>
  );

  if (slug) {
    return (
      <Link href={`/blog/${slug}`} className="hover:opacity-90 transition-opacity">
        {content}
      </Link>
    );
  }

  return content;
}
`,
};

for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.join(__dirname, filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content);
  console.log('Aangemaakt/bijgewerkt:', filePath);
}

console.log('Klaar! Je kan setup4.js nu verwijderen.');