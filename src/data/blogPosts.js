/**
 * Shared blog posts data – used by home Blog section, BlogPage, and BlogDetailPage.
 * Theme: healing, Reiki, mindfulness, TCK, self-empowerment.
 */

export const BLOG_POSTS = [
  {
    slug: "power-of-mindful-healing",
    title: "The Power of Mindful Healing",
    excerpt: "Discover how mindfulness and energy healing can work together to restore balance and bring peace to your daily life.",
    image: "/slide1.JPG",
    date: "March 15, 2026",
    author: "Layla",
    category: "Mindfulness",
    body: [
      "Mindfulness and energy healing are not separate paths—they are two strands of the same thread. When we bring mindful awareness to our body and breath, we create space for the subtle energies that Reiki and other practices work with to flow more freely.",
      "In my practice, I have seen again and again how a few minutes of simple grounding—feet on the earth, breath in the belly—can soften resistance and allow a session to go deeper. The mind stops chasing the past or future and begins to rest in the present. From that place, healing is not something we \"do\" so much as something we allow.",
      "I invite you to experiment: before your next moment of intentional rest or healing, pause. Feel the weight of your body. Notice the air moving in and out. Then let the practice unfold from there. You may find that the quality of presence you bring matters as much as any technique.",
    ],
  },
  {
    slug: "finding-home-within-tck-journey",
    title: "Finding Home Within: A TCK Journey",
    excerpt: "Exploring identity, belonging, and the unique path of third culture individuals toward self-acceptance and growth.",
    image: "/slide2.JPG",
    date: "March 8, 2026",
    author: "Layla",
    category: "Third Culture",
    body: [
      "Third culture kids—those who grow up between worlds—often carry a deep question: Where do I belong? The answer, I have come to believe, is not a single place or culture, but a capacity to feel at home within yourself.",
      "Healing work with TCKs often touches on themes of rootlessness, loyalty to multiple cultures, and the grief of never fully \"fitting\" anywhere. These are not problems to be fixed; they are doorways. When we honor the complexity of your story instead of forcing it into one box, something shifts. You begin to carry home inside you.",
      "My own journey as someone who bridges cultures has taught me that belonging is not about geography. It is about being seen, and learning to see yourself with compassion. However scattered or mixed your roots feel, there is a place in you that is already whole.",
    ],
  },
  {
    slug: "reiki-and-emotional-release",
    title: "Reiki and Emotional Release",
    excerpt: "Understanding how Reiki supports the release of stored emotions and supports your journey to emotional freedom.",
    image: "/slide3.JPG",
    date: "March 1, 2026",
    author: "Layla",
    category: "Reiki",
    body: [
      "Emotions are energy. When we experience trauma, loss, or prolonged stress, that energy can become stuck in the body. Reiki works with the subtle energy field to gently encourage flow—and where energy moves again, old feelings often surface to be acknowledged and released.",
      "This does not mean that Reiki \"makes\" you emotional. It means it creates a safe container in which whatever is ready to surface can do so. Tears, sighs, memories, or simply a sense of lightness are all part of the same process: the body and spirit letting go of what no longer serves.",
      "If you have been carrying something for a long time, know that release can be gentle. You set the pace. Reiki meets you where you are and supports your system to do what it already knows how to do—heal.",
    ],
  },
  {
    slug: "cultivating-joy-through-practice",
    title: "Cultivating Joy Through Practice",
    excerpt: "Simple rituals and practices to invite more joy, presence, and alignment into your mind, body, and spirit.",
    image: "/slide4.JPG",
    date: "February 22, 2026",
    author: "Layla",
    category: "Practice",
    body: [
      "Joy is not something we wait for—it is something we cultivate. Small, daily practices can create a foundation of well-being that makes it easier to feel alive, present, and open to life.",
      "Morning gratitude, a few minutes of breathwork, or simply placing your hand on your heart and naming one thing you appreciate about yourself can shift the tone of your day. These are not grand gestures; they are gentle invitations to your nervous system that it is safe to soften.",
      "Over time, these practices build a kind of inner sanctuary. When difficulty comes—and it will—you have a place to return to. Joy then becomes less about peak moments and more about a steady, quiet sense that life is worth living.",
    ],
  },
  {
    slug: "bridging-cultures-with-compassion",
    title: "Bridging Cultures with Compassion",
    excerpt: "How holistic coaching can help you honor multiple cultures and create a life that feels authentically yours.",
    image: "/about.JPG",
    date: "February 15, 2026",
    author: "Layla",
    category: "Coaching",
    body: [
      "Living between cultures can feel like a constant negotiation. You may have learned to code-switch, to fit in here and there—but at some point, the question arises: Who am I when I am not performing? What do I actually want?",
      "Holistic coaching in this context is not about choosing one identity over another. It is about creating space to explore all the parts of you—the languages, the values, the loyalties—and finding a way of life that honors your whole story.",
      "Compassion is the key. So often we judge ourselves for not being \"enough\" of one thing or another. When we replace that judgment with curiosity and kindness, we can begin to design a life that feels true, not just acceptable.",
    ],
  },
  {
    slug: "sound-and-silence-in-healing",
    title: "Sound and Silence in Healing",
    excerpt: "The role of healing music, guided journeys, and quiet reflection in deepening your connection to yourself.",
    image: "/layla3.JPG",
    date: "February 8, 2026",
    author: "Layla",
    category: "Healing",
    body: [
      "Sound can carry us into states of deep relaxation and openness. Whether it is the resonance of a singing bowl, the rhythm of a drum, or the stillness between notes, our nervous system responds. In my sessions, I often weave in sound as a way to support the body to let go and the mind to settle.",
      "Equally important is silence. After sound, after words, there is often a space where something deeper can be heard—the inner voice, the breath, the subtle shift of energy. Learning to rest in that silence is itself a practice.",
      "Together, sound and silence mirror the rhythm of life: expression and rest, movement and stillness. When we allow both, we create conditions for healing that go beyond any single technique.",
    ],
  },
];

export function getPostBySlug(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug) ?? null;
}

export function getAllSlugs() {
  return BLOG_POSTS.map((p) => p.slug);
}

/** Get up to `limit` posts excluding the one with `excludeSlug` */
export function getRelatedPosts(excludeSlug, limit = 3) {
  return BLOG_POSTS.filter((p) => p.slug !== excludeSlug).slice(0, limit);
}

/** Unique categories for filters or pills */
export const BLOG_CATEGORIES = [...new Set(BLOG_POSTS.map((p) => p.category))];
