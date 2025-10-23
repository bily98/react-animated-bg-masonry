# Publishing Guide for react-animated-bg-masonry

This guide will help you publish the package to npm.

## Prerequisites

1. **NPM Account**: Create an account at [npmjs.com](https://www.npmjs.com/signup)
2. **NPM CLI**: Ensure you have npm installed (comes with Node.js)

## Publishing Steps

### 1. Login to NPM

```bash
npm login
```

Enter your npm username, password, and email when prompted.

### 2. Update Package Information

Before publishing, update these fields in `package.json`:

```json
{
  "name": "react-animated-bg-masonry", // Choose a unique name (check npm)
  "version": "1.0.0", // Start with 1.0.0
  "author": "Your Name <your.email@example.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/react-animated-bg-masonry"
  }
}
```

### 3. Check Package Name Availability

```bash
npm view react-animated-bg-masonry
```

If you get an error, the name is available! If not, choose a different name like:

- `@yourusername/react-animated-bg-masonry`
- `react-masonry-animated-bg`
- `animated-masonry-background`

### 4. Test Package Locally (Optional)

```bash
# Build the package
yarn build

# Test in another project
npm link

# In your test project
npm link react-animated-bg-masonry
```

### 5. Publish to NPM

```bash
# Make sure you're in the package directory
cd /home/ubuntu/react-animated-bg-masonry

# Build the package
yarn build

# Publish (first time)
npm publish

# Or if using scoped package (@yourusername/package-name)
npm publish --access public
```

### 6. Verify Publication

```bash
npm view react-animated-bg-masonry
```

Visit your package page:

```
https://www.npmjs.com/package/react-animated-bg-masonry
```

## Updating the Package

When you make changes and want to publish updates:

### 1. Update Version Number

Follow [Semantic Versioning](https://semver.org/):

- **Patch** (bug fixes): `1.0.0` → `1.0.1`

  ```bash
  npm version patch
  ```

- **Minor** (new features): `1.0.0` → `1.1.0`

  ```bash
  npm version minor
  ```

- **Major** (breaking changes): `1.0.0` → `2.0.0`
  ```bash
  npm version major
  ```

### 2. Rebuild and Publish

```bash
yarn build
npm publish
```

## Package Files Included

The following files will be published (as specified in `package.json` "files" field):

- `dist/` - Built JavaScript and TypeScript definitions
- `README.md` - Documentation
- `LICENSE` - MIT License
- `package.json` - Package metadata

Files excluded (via `.npmignore`):

- `src/` - Source TypeScript files
- `examples/` - Example files
- `node_modules/` - Dependencies
- Build configuration files

## Best Practices

1. **Test Before Publishing**

   - Run `yarn build` to ensure no errors
   - Test in a real project if possible
   - Check all examples work

2. **Version Appropriately**

   - Follow semantic versioning
   - Update CHANGELOG.md with changes
   - Tag releases in Git

3. **Documentation**

   - Keep README.md up to date
   - Add examples for new features
   - Document breaking changes

4. **GitHub Integration**
   - Create a GitHub repository
   - Add repository URL to package.json
   - Set up CI/CD (optional)

## NPM Package Page

After publishing, enhance your package page:

1. **Add Keywords** (already in package.json)
2. **Badge Links** in README:

   ```markdown
   ![npm version](https://img.shields.io/npm/v/react-animated-bg-masonry)
   ![downloads](https://img.shields.io/npm/dm/react-animated-bg-masonry)
   ![license](https://img.shields.io/npm/l/react-animated-bg-masonry)
   ```

3. **GitHub Repository**: Link it in package.json
4. **Demo Site**: Deploy examples to Vercel/Netlify

## Unpublishing (Emergency Only)

If you need to unpublish within 72 hours:

```bash
npm unpublish react-animated-bg-masonry@1.0.0
```

⚠️ **Warning**: Unpublishing is permanent and discouraged. Instead, publish a new version with fixes.

## Support

- NPM Documentation: https://docs.npmjs.com/
- Support: https://www.npmjs.com/support
- Package Naming: https://docs.npmjs.com/cli/v8/configuring-npm/package-json#name

## Checklist Before Publishing

- [ ] Package builds without errors (`yarn build`)
- [ ] All dependencies are listed correctly
- [ ] README.md is complete and accurate
- [ ] LICENSE file is present
- [ ] package.json has correct metadata
- [ ] Examples are working
- [ ] Version number is appropriate
- [ ] Logged into npm (`npm login`)
- [ ] Package name is available on npm
- [ ] Git repository is clean (if using)

## After Publishing

1. **Announce**: Share on social media, Reddit, etc.
2. **Monitor**: Watch for issues and feedback
3. **Maintain**: Respond to issues and PRs
4. **Update**: Keep dependencies current
5. **Document**: Add examples and use cases

---

Ready to publish? Run:

```bash
cd /home/ubuntu/react-animated-bg-masonry
yarn build
npm publish
```

Good luck! 🚀
