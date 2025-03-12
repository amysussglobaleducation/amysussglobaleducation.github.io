export const SITE_CONFIG = {
    NAME: "Amysuss Education Services",
    LINK: "https://amysussglobaleducation.com"
    
  } as const;

  export const SOCIAL_LINKS = {
    FACEBOOK: "https://www.facebook.com/profile.php?id=61573581322845",
    TWITTER: process.env.NEXT_PUBLIC_TWITTER_URL || "#",
    INSTAGRAM: "https://www.instagram.com/admissionwithamysuss/",
    LINKEDIN: process.env.NEXT_PUBLIC_LINKEDIN_URL || "#",
    CONTACT: {
        EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "ashutosh@amysussglobaleducation.com",
        PHONE: "9810241310",
      }
  } as const;