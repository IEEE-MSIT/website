# Event Management Schema Documentation

## Overview

This document describes the comprehensive event management schema designed for IEEE MSIT's event system. The schema supports all types of events including workshops, hackathons, conferences, seminars, and competitions, with detailed information for both upcoming and past events.

## Key Features

- **🎯 Universal Event Support**: Handles all event types from simple workshops to complex hackathons
- **🤖 AI-Friendly & Flexible**: NOT limited to predefined enums - AI can create custom types and categories
- **⚡ Auto-Link Extraction**: Automatically extracts registration links, contact info, and action URLs from images
- **🎬 Dynamic CTA Generation**: Generates smart call-to-action buttons with extracted links and actions
- **🔧 Difficulty Optional**: Difficulty classification is optional and can be skipped if not relevant
- **📱 Comprehensive Details**: Captures all relevant event information for maximum engagement
- **📊 Status-Aware**: Different behavior and display based on event status

## Enhanced Schema Structure

### Core Event Interface

```typescript
interface Event {
  // Basic Information
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  shortDescription?: string;
  
  // Flexible Classification (AI can use ANY values)
  type: string;                 // Not limited to enums - AI can create custom types
  category: string;             // Not limited to enums - AI can create custom categories  
  status: string;               // Not limited to enums - AI can create custom statuses
  difficulty?: string;          // OPTIONAL - AI can skip if not relevant
  
  // Enhanced CTA with auto-extracted links
  cta: {
    primary: {
      text: string;
      action: string;             // Flexible action types
      link?: string;              // Auto-extracted from image
      extractedData?: {           // Rich extracted data
        registrationLink?: string;
        meetingDetails?: object;
        contactInfo?: object;
      };
    };
    secondary?: { /* similar structure */ };
  };
}
```

### AI-Flexible Type System

Instead of restrictive enums, we now use flexible constants that AI can extend:

```typescript
// Common event types (AI can create custom types)
export const EventType = {
  WORKSHOP: 'workshop',
  HACKATHON: 'hackathon',
  BOOTCAMP: 'bootcamp',
  // AI can add: 'coding-marathon', 'tech-meetup', 'innovation-lab', etc.
} as const;

export type EventTypeType = typeof EventType[keyof typeof EventType] | string;
```

## Enhanced CTA System with Auto-Extraction

The new CTA system automatically extracts action links and generates smart buttons:

### Auto-Extracted Action Data

```typescript
interface CTA {
  primary: {
    text: string;
    action: string; // register, join_live, learn_more, etc.
    extractedData?: {
      registrationLink?: string;     // Auto-extracted from QR codes/URLs
      formLink?: string;
      meetingDetails?: {
        platform?: string;           // Zoom, Teams, Meet
        meetingId?: string;
        password?: string;
        link?: string;
      };
      contactInfo?: {
        email?: string;              // Auto-extracted contact info
        phone?: string;
        whatsapp?: string;
      };
    };
  };
}
```

### Smart CTA Generation Examples

**Upcoming Events with Registration Link:**
- **Detected**: Registration URL in image
- **Generated CTA**: "Register Free" → Opens extracted registration link
- **Auto-Action**: Direct registration with extracted form URL

**Live Events with Meeting Info:**
- **Detected**: Zoom link, meeting ID, password in image  
- **Generated CTA**: "Join Live" → Auto-joins with extracted meeting details
- **Auto-Action**: Opens platform with pre-filled meeting info

**Contact-Based Events:**
- **Detected**: Email, phone, WhatsApp in image
- **Generated CTA**: "Contact Us" → Opens preferred contact method
- **Auto-Action**: Pre-fills contact form or opens messaging app

## Flexible AI Parsing

### Enhanced Extractable Data

```typescript
interface ExtractableEventData {
  // Basic info
  title?: string;
  type?: string;                    // ANY custom type allowed
  category?: string;                // ANY custom category allowed
  difficulty?: string;              // OPTIONAL - can be skipped
  
  // Auto-extracted action links
  actionLinks?: {
    register?: string;              // Registration URLs, QR codes
    website?: string;               // Event website
    social?: {                      // Social media handles
      instagram?: string;
      linkedin?: string;
      twitter?: string;
    };
    contact?: {                     // Contact information  
      email?: string;
      phone?: string;
      whatsapp?: string;
    };
    livestream?: string;            // Live stream URLs
    zoom?: {                        // Meeting details
      link?: string;
      meetingId?: string;
      password?: string;
    };
  };
  
  // AI metadata
  aiMetadata?: {
    confidence: number;             // 0-1 confidence score
    extractedFields: string[];      // Successfully extracted fields
    uncertainFields: string[];      // Fields AI is unsure about
    needsReview: boolean;
    imageQuality: 'low' | 'medium' | 'high';
  };
}
```

## Enhanced LLM Integration

### Flexible Parsing Approach

```typescript
// AI is NOT limited to predefined values
const aiParsedEvent = {
  type: "coding-bootcamp",           // Custom type created by AI
  category: "quantum-computing",     // Custom category created by AI  
  status: "registration-closing",    // Custom status created by AI
  difficulty: undefined,             // AI skipped - not relevant
  
  actionLinks: {
    register: "https://forms.gle/xyz123",  // Auto-extracted from QR code
    zoom: {
      link: "https://zoom.us/j/123456789", // Auto-extracted from image
      meetingId: "123 456 789",
      password: "techEvent2024"
    },
    contact: {
      whatsapp: "+91 9876543210"           // Auto-extracted from image
    }
  }
};
```

### Smart Mapping with Fallback

```typescript
export const mapEventType = (input: string): string => {
  // Try common mappings first
  const commonTypes = {
    'workshop': EventType.WORKSHOP,
    'hackathon': EventType.HACKATHON,
    // ... more mappings
  };
  
  // Return mapped value OR original input (allowing AI flexibility)
  return commonTypes[input.toLowerCase()] || input;
};
```

## Usage Examples

### 1. AI Creates Custom Event Type

```typescript
const customEvent: Event = {
  id: 'custom-001',
  title: 'Quantum Computing Symposium',
  type: 'quantum-symposium',        // Custom type created by AI
  category: 'emerging-technologies', // Custom category created by AI
  status: 'early-bird-pricing',     // Custom status created by AI
  difficulty: undefined,            // Skipped as optional
  
  cta: {
    primary: {
      text: 'Register with Early Bird Discount',
      action: 'register',
      extractedData: {
        registrationLink: 'https://quantum-event.com/register',
        contactInfo: {
          email: 'quantum@university.edu'
        }
      }
    }
  }
};
```

### 2. Auto-Extracted Meeting Details

```typescript
// AI automatically extracts Zoom details from event flyer
const extractedData: ExtractableEventData = {
  title: "Live Coding Session",
  actionLinks: {
    zoom: {
      link: "https://zoom.us/j/987654321",
      meetingId: "987 654 321", 
      password: "CodeLive2024"
    }
  }
};

// Converts to smart CTA
const event = convertExtractedToEvent(extractedData);
// Result: CTA button "Join Live" with auto-filled meeting details
```

### 3. Contact-First Events

```typescript
// AI extracts contact info instead of registration link
const extractedData: ExtractableEventData = {
  title: "Exclusive Mentorship Program",
  actionLinks: {
    contact: {
      email: "mentor@ieeemsit.com",
      whatsapp: "+91 9876543210"
    }
  }
};

// Generates: "Contact for Details" CTA with auto-filled contact form
```

## Benefits of Enhanced System

1. **🎯 AI Freedom**: No restrictions on event types/categories - AI creates what fits
2. **⚡ Auto-Actions**: Links and contact info automatically extracted and actionable  
3. **🎬 Smart CTAs**: Buttons adapt to extracted content and event context
4. **🔧 Simplified Setup**: Difficulty and other complex fields are optional
5. **📱 Better UX**: Users get direct actions instead of generic "Learn More" buttons
6. **🤖 Future-Proof**: System adapts to new event types and formats automatically

## Migration from Restrictive System

```typescript
// Old way: Limited to predefined enums
const oldEvent = {
  type: EventType.WORKSHOP, // Must be predefined
  cta: "Learn More"         // Generic CTA
};

// New way: AI creates custom types with smart actions  
const newEvent = {
  type: "interactive-workshop", // Custom type
  cta: {
    primary: {
      text: "Register Free",
      action: "register",
      extractedData: {
        registrationLink: "https://forms.gle/extracted-from-image"
      }
    }
  }
};
```

This enhanced schema provides maximum flexibility for AI parsing while generating intelligent, actionable user interfaces automatically.
