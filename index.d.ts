declare module 'nuxt/schema' {
  // Types for AppConfig. For some reason they are not being inferred.
  interface AppConfig {
    title: string
    description: string
    domain: string
    conference_dates: string
    statistics: {
      'speakers': string
      'people attending': string
      'venue': string
      'location': string
    }
    links: {
      sponsor_us: string
    }

  }
}

// It is always important to ensure you import/export something when augmenting a type
export { }
