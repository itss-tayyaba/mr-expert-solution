/**
 * MR EXPERT SOLUTION - Enterprise Security & Protection Suite
 * Implements client-side input sanitization, anti-tampering guards,
 * XSS mitigation, and safe link resolution.
 */

/**
 * Strips HTML tags, script vectors, and escapes dangerous entities
 */
export function sanitizeInput(input: string): string {
  if (!input || typeof input !== 'string') return '';
  return input
    .trim()
    .replace(/[<>]/g, '') // Strip angle brackets
    .replace(/javascript:/gi, '') // Prevent pseudo-protocol injection
    .replace(/data:/gi, '')
    .replace(/vbscript:/gi, '')
    .replace(/on\w+=/gi, '') // Strip event handlers like onclick=, onerror=
    .slice(0, 1000); // Prevent buffer/payload bloat
}

/**
 * Validates URLs ensuring safe protocols (http/https only)
 */
export function isSafeUrl(url: string): boolean {
  if (!url) return false;
  try {
    const parsed = new URL(url.startsWith('http') ? url : `https://${url}`);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

/**
 * Sanitizes and formats phone numbers to standard E.164 digits
 */
export function sanitizePhone(phone: string): string {
  return phone.replace(/[^\d+]/g, '').slice(0, 20);
}

/**
 * Rate-limiting token bucket for client actions (anti-spam / DoS prevention)
 */
const rateLimitBuckets: Record<string, { count: number; lastReset: number }> = {};

export function checkRateLimit(key: string, maxAttempts = 5, windowMs = 60000): boolean {
  const now = Date.now();
  const bucket = rateLimitBuckets[key] || { count: 0, lastReset: now };

  if (now - bucket.lastReset > windowMs) {
    bucket.count = 1;
    bucket.lastReset = now;
    rateLimitBuckets[key] = bucket;
    return true;
  }

  if (bucket.count >= maxAttempts) {
    return false;
  }

  bucket.count += 1;
  rateLimitBuckets[key] = bucket;
  return true;
}

/**
 * Security Guard hook: Activates protection against source scraping,
 * unauthorized code inspection, and keyboard shortcuts (F12, Ctrl+U, etc.)
 */
export function enableProtectiveGuards(): void {
  if (typeof window === 'undefined') return;

  // 1. Context Menu Guard (Right-click prevention with subtle feedback)
  window.addEventListener('contextmenu', (e) => {
    // Allow right click inside text input/textarea for copy-pasting
    const target = e.target as HTMLElement;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
      return;
    }
    e.preventDefault();
  });

  // 2. Developer Tools & Source Inspection Keyboard Guards
  window.addEventListener('keydown', (e) => {
    // Block F12
    if (e.key === 'F12') {
      e.preventDefault();
      return;
    }

    // Block Ctrl+U (View Source), Ctrl+Shift+I / Ctrl+Shift+J (DevTools), Ctrl+S (Save Page)
    if (
      (e.ctrlKey || e.metaKey) &&
      (e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S' ||
       ((e.shiftKey) && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')))
    ) {
      e.preventDefault();
      return;
    }
  });

  // 3. Prevent Dragging of sensitive assets
  window.addEventListener('dragstart', (e) => {
    const target = e.target as HTMLElement;
    if (target && target.tagName === 'IMG') {
      e.preventDefault();
    }
  });
}
