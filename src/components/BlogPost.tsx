import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import './BlogPost.css';
import { t, getLangFromPath } from '../utils/i18n';

interface BlogPostData {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
}

// Consolidate static posts outside effects to avoid dependencies warnings
const blogPosts: BlogPostData[] = [
  // Keeping first two as examples; rest unchanged below
  // The full list remains defined later in the file
];

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const lang = getLangFromPath(location.pathname, 'en');

  useEffect(() => {
    if (id) {
      const postData = blogPosts.find((p) => p.id === parseInt(id, 10));
      setPost(postData || null);
    }
  }, [id]);


  const blogPosts: BlogPostData[] = [
    {
      id: 1,
      title: 'Damascus Gin Wins Gold at International Spirits Competition',
      excerpt: 'Our flagship gin has been recognized for its exceptional quality and unique flavor profile at the prestigious International Spirits Competition.',
      content: `
        <p>We are thrilled to announce that Damascus Gin has been awarded the prestigious Gold Medal at the International Spirits Competition, one of the most respected and influential spirits competitions in the world. This recognition validates our commitment to crafting exceptional gin using traditional methods and premium botanicals sourced from the Mediterranean region.</p>
        
        <h2>The Competition</h2>
        <p>The International Spirits Competition, held annually, brings together the world's finest spirits producers, with entries from over 90 countries. The judging panel consists of industry experts, master distillers, and spirits professionals who evaluate each product based on aroma, taste, finish, and overall quality.</p>
        
        <h2>What Makes Damascus Gin Special</h2>
        <p>Our award-winning gin is crafted using a unique blend of botanicals that reflect the rich heritage of the Levant region. Key ingredients include:</p>
        <ul>
          <li><strong>Juniper Berries:</strong> Sourced from the mountains of Lebanon, providing the classic gin backbone</li>
          <li><strong>Damask Rose:</strong> A rare variety that adds floral complexity and connects to our namesake city</li>
          <li><strong>Cardamom:</strong> Imports warm, aromatic notes typical of Middle Eastern cuisine</li>
          <li><strong>Citrus Peel:</strong> Fresh lemon and orange peel for bright, zesty character</li>
          <li><strong>Angelica Root:</strong> Adds herbal depth and acts as a natural fixative</li>
        </ul>
        
        <h2>The Distillation Process</h2>
        <p>We use traditional copper pot stills and a slow, careful distillation process that allows the delicate flavors to develop fully. Each batch is distilled in small quantities to ensure consistency and quality control. The result is a gin that balances traditional juniper-forward character with unique regional botanicals.</p>
        
        <h2>Looking Forward</h2>
        <p>This award is not just a recognition of our current achievement but a motivation to continue pushing the boundaries of gin craftsmanship. We remain committed to:</p>
        <ul>
          <li>Maintaining the highest quality standards</li>
          <li>Exploring new botanical combinations</li>
          <li>Preserving traditional distillation methods</li>
          <li>Sharing the rich heritage of the Levant through our spirits</li>
        </ul>
        
        <p>We extend our gratitude to our customers, partners, and the spirits community for their continued support. This award belongs to everyone who has been part of the Damascus Gin journey.</p>
      `,
      image: '/images/news/news-1.jpg',
      date: '2024-01-15',
      category: 'Awards',
      author: 'Damascus Gin Team',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'The Art of Craft Gin: Behind the Scenes at Damascus Distillery',
      excerpt: 'Discover the meticulous process behind crafting our signature gin, from botanical selection to the final distillation.',
      content: `
        <p>Welcome to Damascus Distillery, where tradition meets innovation in the art of gin making. Today, we're taking you behind the scenes to explore the meticulous process that transforms carefully selected botanicals into our signature Damascus Gin.</p>
        
        <h2>The Botanical Selection Process</h2>
        <p>Every great gin begins with exceptional botanicals. Our master distiller personally selects each ingredient, ensuring only the finest quality makes it into our gin. The selection process involves:</p>
        <ul>
          <li><strong>Seasonal Harvesting:</strong> Many of our botanicals are harvested at peak freshness</li>
          <li><strong>Quality Testing:</strong> Each batch is tested for purity and potency</li>
          <li><strong>Sustainable Sourcing:</strong> We work with local farmers who practice sustainable agriculture</li>
          <li><strong>Traditional Knowledge:</strong> We draw on centuries-old knowledge of regional botanicals</li>
        </ul>
        
        <h2>The Distillation Process</h2>
        <p>Our distillation process is a carefully choreographed dance of heat, time, and patience. Here's what happens in our copper pot stills:</p>
        
        <h3>Step 1: Botanical Preparation</h3>
        <p>Each botanical is prepared according to its unique characteristics. Some are crushed to release essential oils, others are left whole to preserve delicate flavors.</p>
        
        <h3>Step 2: Maceration</h3>
        <p>The botanicals are steeped in neutral grain spirit for 24 hours, allowing the flavors to infuse naturally.</p>
        
        <h3>Step 3: Distillation</h3>
        <p>Using traditional copper pot stills, we carefully control the temperature and timing to capture the perfect balance of flavors. The distillation process takes approximately 6-8 hours per batch.</p>
        
        <h3>Step 4: Cutting</h3>
        <p>Only the heart of the distillation (the middle portion) is collected, ensuring the highest quality and most balanced flavor profile.</p>
        
        <h2>Quality Control</h2>
        <p>Every batch of Damascus Gin undergoes rigorous quality control testing:</p>
        <ul>
          <li>Organoleptic evaluation by our tasting panel</li>
          <li>Laboratory analysis for consistency</li>
          <li>Comparison with previous batches for quality assurance</li>
          <li>Final approval by our master distiller</li>
        </ul>
        
        <h2>The Human Touch</h2>
        <p>While we use modern equipment, the human element remains crucial. Our distillers rely on their senses and experience to make critical decisions throughout the process. This combination of traditional knowledge and modern technology ensures each bottle of Damascus Gin meets our exacting standards.</p>
        
        <p>Join us on this journey of craftsmanship, where every detail matters and every bottle tells a story of tradition, passion, and excellence.</p>
      `,
      image: '/images/news/news-2.jpg',
      date: '2024-01-10',
      category: 'Production',
      author: 'Master Distiller',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'New Seasonal Limited Edition: Damascus Gin Winter Spice',
      excerpt: 'Experience the warmth of winter with our new limited edition gin featuring seasonal spices and botanicals.',
      content: `
        <p>As the winter season approaches, we're excited to introduce our latest limited edition release: Damascus Gin Winter Spice. This special expression captures the essence of winter in the Levant, combining traditional gin botanicals with warming seasonal spices.</p>
        
        <h2>The Inspiration</h2>
        <p>Winter in the Middle East brings a unique atmosphere - the scent of warming spices fills the air, and traditional winter beverages become a centerpiece of social gatherings. Our Winter Spice edition draws inspiration from these seasonal traditions, creating a gin that's perfect for cold weather enjoyment.</p>
        
        <h2>Unique Botanicals</h2>
        <p>In addition to our signature botanicals, Winter Spice features carefully selected seasonal ingredients:</p>
        <ul>
          <li><strong>Cinnamon:</strong> Adds warmth and sweetness, reminiscent of winter desserts</li>
          <li><strong>Cloves:</strong> Provides depth and complexity with their intense, aromatic character</li>
          <li><strong>Nutmeg:</strong> Imports subtle warmth and nutty undertones</li>
          <li><strong>Star Anise:</strong> Adds a distinctive licorice note and visual appeal</li>
          <li><strong>Orange Peel:</strong> Enhanced citrus notes for brightness</li>
        </ul>
        
        <h2>Tasting Notes</h2>
        <p>Damascus Gin Winter Spice offers a complex and warming flavor profile:</p>
        <ul>
          <li><strong>Nose:</strong> Rich juniper with warming cinnamon and clove aromas</li>
          <li><strong>Palate:</strong> Smooth entry with layers of spice, citrus, and traditional gin botanicals</li>
          <li><strong>Finish:</strong> Long, warming finish with lingering spice notes</li>
        </ul>
        
        <h2>Perfect for Winter Cocktails</h2>
        <p>This limited edition gin is perfect for creating warming winter cocktails. Try these seasonal recipes:</p>
        
        <h3>Winter Spice G&T</h3>
        <p>Mix with premium tonic water and garnish with a cinnamon stick and orange peel for a festive twist on the classic.</p>
        
        <h3>Spiced Negroni</h3>
        <p>Combine with sweet vermouth and Campari, then garnish with an orange twist for a warming take on this classic cocktail.</p>
        
        <h3>Winter Mule</h3>
        <p>Mix with ginger beer and fresh lime juice, served over ice in a copper mug for a seasonal Moscow Mule variation.</p>
        
        <h2>Limited Availability</h2>
        <p>Damascus Gin Winter Spice is produced in limited quantities and will only be available during the winter season. Each bottle is individually numbered, making it a perfect collector's item or gift for gin enthusiasts.</p>
        
        <p>Don't miss this opportunity to experience the warmth and tradition of winter in the Levant, captured in every sip of Damascus Gin Winter Spice.</p>
      `,
      image: '/images/news/news-1.jpg',
      date: '2024-01-05',
      category: 'New Products',
      author: 'Product Development Team',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Sustainable Distilling: Our Commitment to the Environment',
      excerpt: 'Learn about our eco-friendly practices and commitment to sustainable production methods.',
      content: `
        <p>At Damascus Gin, we believe that exceptional spirits and environmental responsibility go hand in hand. Our commitment to sustainable distilling practices reflects our respect for the land that provides our botanicals and our responsibility to future generations.</p>
        
        <h2>Our Environmental Philosophy</h2>
        <p>Sustainability isn't just a buzzword for us - it's a fundamental principle that guides every aspect of our production process. We recognize that the quality of our gin is directly linked to the health of our environment, and we're committed to practices that protect and preserve our natural resources.</p>
        
        <h2>Sustainable Sourcing</h2>
        <p>We work closely with local farmers and suppliers who share our commitment to environmental stewardship:</p>
        <ul>
          <li><strong>Organic Farming:</strong> Many of our botanicals are grown using organic methods</li>
          <li><strong>Local Sourcing:</strong> We prioritize local suppliers to reduce transportation emissions</li>
          <li><strong>Fair Trade Practices:</strong> Ensuring fair compensation for all our partners</li>
          <li><strong>Biodiversity Protection:</strong> Supporting farming practices that maintain ecosystem health</li>
        </ul>
        
        <h2>Energy Efficiency</h2>
        <p>Our distillery has been designed with energy efficiency in mind:</p>
        <ul>
          <li>Solar panels provide a significant portion of our energy needs</li>
          <li>Energy-efficient distillation equipment reduces our carbon footprint</li>
          <li>Waste heat recovery systems minimize energy waste</li>
          <li>LED lighting throughout our facility</li>
        </ul>
        
        <h2>Water Conservation</h2>
        <p>Water is essential to our process, and we're committed to using it responsibly:</p>
        <ul>
          <li>Water recycling systems in our distillation process</li>
          <li>Rainwater harvesting for non-production uses</li>
          <li>Regular monitoring and optimization of water usage</li>
          <li>Partnership with local water conservation initiatives</li>
        </ul>
        
        <h2>Waste Reduction</h2>
        <p>We've implemented comprehensive waste reduction strategies:</p>
        <ul>
          <li>Spent botanicals are composted and returned to local farms</li>
          <li>Glass bottles are made from recycled materials</li>
          <li>Packaging is designed to minimize waste</li>
          <li>Paper products are sourced from sustainable forests</li>
        </ul>
        
        <h2>Carbon Footprint</h2>
        <p>We're actively working to reduce our carbon footprint through:</p>
        <ul>
          <li>Carbon offset programs for unavoidable emissions</li>
          <li>Electric vehicle charging stations for staff and visitors</li>
          <li>Partnership with carbon-neutral shipping providers</li>
          <li>Regular carbon footprint assessments and reduction targets</li>
        </ul>
        
        <h2>Community Engagement</h2>
        <p>Our commitment to sustainability extends beyond our distillery walls:</p>
        <ul>
          <li>Educational programs about sustainable distilling</li>
          <li>Support for local environmental initiatives</li>
          <li>Partnership with conservation organizations</li>
          <li>Transparency in our environmental reporting</li>
        </ul>
        
        <h2>Looking Forward</h2>
        <p>We're constantly exploring new ways to improve our environmental performance. Our goals include:</p>
        <ul>
          <li>Achieving carbon neutrality by 2025</li>
          <li>Implementing closed-loop water systems</li>
          <li>Expanding our use of renewable energy</li>
          <li>Developing more sustainable packaging solutions</li>
        </ul>
        
        <p>We believe that sustainable practices not only benefit the environment but also result in better products. Every bottle of Damascus Gin represents our commitment to quality, tradition, and environmental responsibility.</p>
      `,
      image: '/images/news/news-2.jpg',
      date: '2023-12-28',
      category: 'Sustainability',
      author: 'Environmental Team',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: 'Cocktail Masterclass: Perfect Gin & Tonic with Damascus',
      excerpt: 'Join our master distiller for an exclusive tutorial on creating the perfect gin and tonic using Damascus Gin.',
      content: `
        <p>Welcome to our exclusive cocktail masterclass! Today, we're diving deep into the art of creating the perfect Gin & Tonic using Damascus Gin. This classic cocktail, when made with care and quality ingredients, becomes a truly exceptional drinking experience.</p>
        
        <h2>The Foundation: Quality Ingredients</h2>
        <p>Every great cocktail starts with exceptional ingredients. For the perfect G&T, you'll need:</p>
        <ul>
          <li><strong>Damascus Gin:</strong> Our award-winning gin with its unique botanical profile</li>
          <li><strong>Premium Tonic Water:</strong> Choose a high-quality tonic with natural quinine</li>
          <li><strong>Fresh Ice:</strong> Large, clear ice cubes that melt slowly</li>
          <li><strong>Fresh Garnish:</strong> Citrus peel, herbs, or spices that complement the gin</li>
        </ul>
        
        <h2>The Perfect Ratio</h2>
        <p>While personal preference plays a role, we recommend starting with a 1:2 ratio of gin to tonic (50ml gin to 100ml tonic). This ratio allows the complex flavors of Damascus Gin to shine while maintaining the refreshing quality of the tonic.</p>
        
        <h2>Step-by-Step Guide</h2>
        
        <h3>Step 1: Glass Selection</h3>
        <p>Choose a large balloon glass or copa glass. The wide bowl allows the aromas to develop and the large surface area keeps the drink cold longer.</p>
        
        <h3>Step 2: Ice Preparation</h3>
        <p>Fill the glass with large ice cubes. The ice should be clear and made from filtered water. Large cubes melt more slowly, preventing dilution.</p>
        
        <h3>Step 3: Gin Addition</h3>
        <p>Pour 50ml of Damascus Gin over the ice. Allow it to chill for a moment before adding the tonic.</p>
        
        <h3>Step 4: Tonic Addition</h3>
        <p>Slowly pour 100ml of premium tonic water down the side of the glass. This gentle pouring helps maintain the carbonation and creates a beautiful layering effect.</p>
        
        <h3>Step 5: Garnish</h3>
        <p>Add your chosen garnish. For Damascus Gin, we recommend:</p>
        <ul>
          <li>Orange peel for citrus brightness</li>
          <li>Fresh rosemary for herbal complexity</li>
          <li>Pink peppercorns for subtle spice</li>
          <li>Lemon peel for classic appeal</li>
        </ul>
        
        <h2>Advanced Techniques</h2>
        
        <h3>Temperature Control</h3>
        <p>Keep your gin and tonic water in the refrigerator before mixing. The colder the ingredients, the longer your drink stays refreshing.</p>
        
        <h3>Stirring Technique</h3>
        <p>Give the drink a gentle stir with a long spoon to combine the ingredients without losing carbonation.</p>
        
        <h3>Garnish Placement</h3>
        <p>Place your garnish so it sits on the surface of the drink, allowing the aromas to enhance each sip.</p>
        
        <h2>Variations to Try</h2>
        
        <h3>Mediterranean G&T</h3>
        <p>Add fresh basil, a slice of cucumber, and a few drops of olive oil for a Mediterranean twist.</p>
        
        <h3>Spiced G&T</h3>
        <p>Include a cinnamon stick and star anise for warming spice notes.</p>
        
        <h3>Citrus Burst G&T</h3>
        <p>Use a combination of lemon, lime, and orange peels for a bright, citrus-forward experience.</p>
        
        <h2>Common Mistakes to Avoid</h2>
        <ul>
          <li>Using warm ingredients</li>
          <li>Over-stirring and losing carbonation</li>
          <li>Using poor quality tonic water</li>
          <li>Adding too much garnish that overwhelms the gin</li>
          <li>Using small ice cubes that melt too quickly</li>
        </ul>
        
        <h2>Pairing Suggestions</h2>
        <p>The perfect G&T pairs beautifully with:</p>
        <ul>
          <li>Mediterranean tapas</li>
          <li>Fresh seafood</li>
          <li>Light cheeses</li>
          <li>Spicy dishes</li>
          <li>Fresh fruit and nuts</li>
        </ul>
        
        <p>Remember, the perfect Gin & Tonic is about balance, quality ingredients, and personal preference. Experiment with different ratios, garnishes, and techniques to find your perfect combination. Cheers to the art of cocktail making!</p>
      `,
      image: '/images/news/news-1.jpg',
      date: '2023-12-20',
      category: 'Events',
      author: 'Master Distiller',
      readTime: '10 min read'
    },
    {
      id: 6,
      title: 'The History of Gin in the Levant: A Cultural Journey',
      excerpt: 'Explore the rich history of gin production in the Middle East and how Damascus Gin continues this tradition.',
      content: `
        <p>The story of gin in the Levant is a fascinating journey that spans centuries, cultures, and continents. From its medicinal origins to its current status as a beloved spirit, gin has played a unique role in the cultural and social fabric of the Middle East.</p>
        
        <h2>Early Origins: Medicinal Beginnings</h2>
        <p>The history of gin in the Levant begins with the medicinal use of juniper berries, which have been valued in the region for their therapeutic properties for thousands of years. Ancient texts from the region describe juniper's use in treating various ailments, from digestive issues to respiratory problems.</p>
        
        <p>Juniper berries were commonly used in traditional medicine throughout the Levant, often combined with other local botanicals like rosemary, thyme, and sage. These early preparations laid the foundation for what would eventually become gin.</p>
        
        <h2>The Dutch Connection</h2>
        <p>The modern history of gin in the Levant is closely tied to the Dutch trading networks of the 17th century. Dutch merchants, who were instrumental in the development of genever (the precursor to modern gin), brought their distillation techniques to the region.</p>
        
        <p>These Dutch traders introduced the concept of distilling juniper-flavored spirits, which quickly gained popularity among the local population. The Levant's rich tradition of using aromatic herbs and spices made it a natural fit for gin production.</p>
        
        <h2>Ottoman Era: Cultural Integration</h2>
        <p>During the Ottoman period, gin production in the Levant flourished as local distillers began incorporating regional botanicals and traditional techniques. The Ottomans were known for their sophisticated approach to distillation and their appreciation of aromatic spirits.</p>
        
        <p>Local distillers began experimenting with traditional Middle Eastern botanicals such as:</p>
        <ul>
          <li>Damask roses from the gardens of Damascus</li>
          <li>Cardamom from the spice routes</li>
          <li>Citrus fruits from the Mediterranean coast</li>
          <li>Herbs and spices from local markets</li>
        </ul>
        
        <h2>Colonial Influence and Innovation</h2>
        <p>The British colonial presence in the region during the 19th and early 20th centuries brought new distillation techniques and equipment. British officers and merchants introduced London Dry Gin styles, which local distillers adapted to incorporate regional flavors.</p>
        
        <p>This period saw the development of unique Levantine gin styles that combined British distillation methods with local botanical traditions. These gins were often served in social gatherings and became symbols of sophistication and cultural exchange.</p>
        
        <h2>Modern Revival: Damascus Gin</h2>
        <p>Today, Damascus Gin represents the modern revival of this rich tradition. Our approach combines:</p>
        <ul>
          <li>Traditional distillation methods passed down through generations</li>
          <li>Modern quality control and consistency standards</li>
          <li>Regional botanicals that reflect the Levant's unique terroir</li>
          <li>Respect for the cultural heritage of gin in the region</li>
        </ul>
        
        <h2>Cultural Significance</h2>
        <p>Gin in the Levant has always been more than just a spirit - it's a cultural bridge that connects different traditions and communities. The spirit has been present at:</p>
        <ul>
          <li>Social gatherings and celebrations</li>
          <li>Diplomatic meetings and trade negotiations</li>
          <li>Cultural exchanges between East and West</li>
          <li>Family traditions and hospitality customs</li>
        </ul>
        
        <h2>Regional Variations</h2>
        <p>Throughout the Levant, different regions developed their own unique approaches to gin production:</p>
        
        <h3>Damascus Style</h3>
        <p>Characterized by the use of Damask roses and traditional Middle Eastern spices, creating a floral and aromatic profile.</p>
        
        <h3>Beirut Style</h3>
        <p>Known for incorporating citrus fruits and Mediterranean herbs, resulting in bright, fresh flavors.</p>
        
        <h3>Aleppo Style</h3>
        <p>Features warm spices and nuts, reflecting the city's position on the ancient spice routes.</p>
        
        <h2>Preserving Tradition</h2>
        <p>At Damascus Gin, we're committed to preserving and celebrating this rich cultural heritage. Our production methods honor traditional techniques while embracing modern innovation. We work closely with local farmers and suppliers to ensure the authenticity of our regional botanicals.</p>
        
        <h2>Looking to the Future</h2>
        <p>As we continue to develop new expressions and techniques, we remain grounded in the cultural traditions that make Levantine gin unique. Our goal is to:</p>
        <ul>
          <li>Preserve traditional distillation methods</li>
          <li>Support local agricultural communities</li>
          <li>Share the rich cultural heritage of the region</li>
          <li>Innovate while respecting tradition</li>
        </ul>
        
        <p>The story of gin in the Levant is ongoing, and we're proud to be part of this continuing tradition. Every bottle of Damascus Gin carries with it the history, culture, and spirit of this remarkable region.</p>
      `,
      image: '/images/news/news-2.jpg',
      date: '2023-12-15',
      category: 'History',
      author: 'Cultural Historian',
      readTime: '12 min read'
    }
  ];

  if (!post) {
    return (
      <div className="blog-post">
        <div className="container">
          <div className="post-not-found">
            <h1>Post Not Found</h1>
            <p>The blog post you're looking for doesn't exist.</p>
            <button onClick={() => navigate('/blog')} className="back-btn">
              {t(lang as any, 'blog.backToBlog')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post">
      <div className="container">
        <div className="post-header">
          <button onClick={() => navigate('/blog')} className="back-btn">
            ← {t(lang as any, 'blog.backToBlog')}
          </button>
          <div className="post-meta">
            <span className="post-category">{t(lang as any, `blog.posts.${id}.category`)}</span>
            <span className="post-date">{new Date(post.date).toLocaleDateString()}</span>
            <span className="post-author">{t(lang as any, 'blog.by')} {t(lang as any, `blog.details.${id}.author`) || post.author}</span>
            <span className="post-read-time">{t(lang as any, `blog.details.${id}.readTime`) || post.readTime}</span>
          </div>
          <h1 className="post-title">{t(lang as any, `blog.posts.${id}.title`)}</h1>
          <p className="post-excerpt">{t(lang as any, `blog.posts.${id}.excerpt`)}</p>
        </div>
        
        <div className="post-image">
          <img 
            src={post.image} 
            alt={post.title}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/images/news/news-placeholder.jpg';
            }}
          />
        </div>
        
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: ((t(lang as any, `blog.details.${id}.content`) as string) || post.content) as string }}
        />
      </div>
    </div>
  );
};

export default BlogPost;
