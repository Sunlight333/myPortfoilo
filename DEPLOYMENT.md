# Deployment Troubleshooting Guide

## Vercel Deployment Issues

### Issue: Rollup Native Binary Error
If you encounter the error: `Cannot find module @rollup/rollup-linux-x64-gnu`

**Solution 1: Use Simple Build**
```bash
npm run build:simple
```

**Solution 2: Clean and Rebuild**
```bash
npm run clean
npm run build
```

**Solution 3: Update Vercel Configuration**
The `vercel.json` file has been configured with:
- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

### Alternative Build Configurations

1. **Full Chunking** (current): `npm run build`
2. **Simple Build**: `npm run build:simple`
3. **Development Build**: `npm run build:dev`

### Vercel Environment Variables

Make sure to set these in Vercel dashboard:
- `NODE_VERSION`: 18.18.0 (or compatible)
- Any Firebase environment variables if using Firebase

### Build Optimization

The current configuration provides:
- Vendor chunking for better caching
- ESBuild minification for faster builds
- Optimized dependencies
- Proper target configuration for modern browsers

### Troubleshooting Steps

1. Check Node.js version compatibility
2. Ensure all dependencies are properly installed
3. Try the simple build configuration
4. Check Vercel build logs for specific errors
5. Verify environment variables are set correctly

### Performance Metrics

Current build output:
- Main bundle: ~120 kB
- React vendor: ~221 kB
- Framer Motion: ~107 kB
- UI vendor: ~21 kB
- Total vendor: ~698 kB

This provides good code splitting while maintaining compatibility with Vercel's build environment.
