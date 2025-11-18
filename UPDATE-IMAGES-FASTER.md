# Make Images Load Faster in Development

## Quick Fix: Update Image URLs

Current images are loading at full resolution (1920px). For faster dev loading, update URLs to use smaller sizes.

### Example: Update accommodations.json

**Before:**
```json
"featuredImage": "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800"
```

**After (Faster):**
```json
"featuredImage": "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=600&q=75&auto=format"
```

### Unsplash URL Parameters:

- `w=600` - Width (smaller = faster)
- `q=75` - Quality (75% is good balance)
- `auto=format` - Auto WebP conversion
- `fit=crop` - Crop to fit dimensions

### Recommended Sizes:

```
Hero images:     w=1200&q=80&auto=format
Card images:     w=600&q=75&auto=format
Thumbnails:      w=400&q=75&auto=format
```

### Apply to All JSON Files:

1. **accommodations.json** - Update all image URLs
2. **activities.json** - Update all image URLs
3. **plantation.json** - Update all image URLs
4. **gallery.json** - Update all image URLs

### Example Full URL:

```
https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=600&h=400&q=75&fit=crop&auto=format
```

This will make images load 3-5x faster in development!
