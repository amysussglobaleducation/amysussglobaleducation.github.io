export const SITE_CONFIG = {
    NAME: "Amysuss Education Services",
    
  } as const;

  export const SOCIAL_LINKS = {
    FACEBOOK: process.env.NEXT_PUBLIC_FACEBOOK_URL || "#",
    TWITTER: process.env.NEXT_PUBLIC_TWITTER_URL || "#",
    INSTAGRAM: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#",
    LINKEDIN: process.env.NEXT_PUBLIC_LINKEDIN_URL || "#",
    CONTACT: {
        EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@amysuss.com",
        PHONE: "9810241310",
      }
  } as const;