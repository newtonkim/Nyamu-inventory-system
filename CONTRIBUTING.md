# Contributing to VROM Inventory System

Thank you for your interest in contributing to the VROM Inventory System! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### 1. Fork the Repository
```bash
# Fork the repo on GitHub, then clone your fork
git clone https://github.com/yourusername/vrom-inventory-system.git
cd vrom-inventory-system
```

### 2. Set Up Development Environment
```bash
# Install dependencies
composer install
npm install

# Set up environment
cp .env.example .env
php artisan key:generate
touch database/database.sqlite
php artisan migrate --seed

# Start development
npm run dev
php artisan serve
```

### 3. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b bugfix/issue-description
```

### 4. Make Your Changes
- Write clean, well-documented code
- Follow the existing code style
- Add tests for new functionality
- Update documentation as needed

### 5. Test Your Changes
```bash
# Run tests
php artisan test

# Check code style
./vendor/bin/phpcs

# Run frontend tests
npm test
```

### 6. Commit Your Changes
```bash
git add .
git commit -m "Add: Brief description of your changes"
```

### 7. Push and Create Pull Request
```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

## 📋 Contribution Guidelines

### Code Style
- Follow PSR-12 coding standards for PHP
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### Commit Messages
Use clear, descriptive commit messages:
```
Add: New feature description
Fix: Bug fix description
Update: Changes to existing functionality
Remove: Removed functionality
Docs: Documentation changes
```

### Pull Request Guidelines
- Provide a clear description of changes
- Reference related issues
- Include screenshots for UI changes
- Ensure all tests pass
- Update documentation if needed

## 🐛 Reporting Bugs

### Before Reporting
1. Check existing issues
2. Verify the bug in the latest version
3. Test with a clean installation

### Bug Report Template
```markdown
**Bug Description**
A clear description of the bug.

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment**
- OS: [e.g., Windows 10]
- PHP Version: [e.g., 8.1.2]
- Laravel Version: [e.g., 10.x]
- Browser: [e.g., Chrome 91]
```

## 💡 Feature Requests

### Before Requesting
1. Check existing feature requests
2. Consider if it fits the project scope
3. Think about implementation complexity

### Feature Request Template
```markdown
**Feature Description**
A clear description of the feature.

**Problem Statement**
What problem does this solve?

**Proposed Solution**
How should this feature work?

**Alternatives Considered**
Other solutions you've considered.

**Additional Context**
Any other context or screenshots.
```

## 🏗 Development Areas

### High Priority
- **Financial Reports** - P&L, Balance Sheet, Cash Flow
- **Advanced Inventory** - Multi-location, barcode scanning
- **API Development** - RESTful API for mobile apps
- **Testing** - Increase test coverage

### Medium Priority
- **Notifications** - Email/SMS alerts
- **Import/Export** - CSV/Excel functionality
- **Advanced Analytics** - Business intelligence
- **Mobile Optimization** - Responsive improvements

### Low Priority
- **Themes** - Multiple UI themes
- **Plugins** - Plugin architecture
- **Integrations** - Third-party service integrations

## 🧪 Testing Guidelines

### Writing Tests
- Write tests for new features
- Include both positive and negative test cases
- Test edge cases and error conditions
- Use descriptive test names

### Test Types
```bash
# Feature tests (HTTP requests)
php artisan make:test FeatureNameTest

# Unit tests (individual methods)
php artisan make:test UnitNameTest --unit
```

### Running Tests
```bash
# All tests
php artisan test

# Specific test file
php artisan test tests/Feature/ProductTest.php

# With coverage
php artisan test --coverage
```

## 📚 Documentation

### Code Documentation
- Use PHPDoc for classes and methods
- Document complex algorithms
- Include usage examples

### User Documentation
- Update README for new features
- Add setup instructions for new requirements
- Include screenshots for UI changes

## 🎯 Development Workflow

### 1. Planning
- Discuss major changes in issues first
- Break down large features into smaller tasks
- Consider backward compatibility

### 2. Implementation
- Start with tests (TDD approach)
- Implement the minimum viable solution
- Refactor and optimize

### 3. Review
- Self-review your code
- Test thoroughly
- Update documentation

### 4. Submission
- Create detailed pull request
- Respond to feedback promptly
- Make requested changes

## 🏷 Release Process

### Version Numbering
We follow [Semantic Versioning](https://semver.org/):
- **MAJOR** version for incompatible API changes
- **MINOR** version for backward-compatible functionality
- **PATCH** version for backward-compatible bug fixes

### Release Checklist
- [ ] All tests pass
- [ ] Documentation updated
- [ ] Changelog updated
- [ ] Version number bumped
- [ ] Security review completed

## 🤔 Questions?

If you have questions about contributing:
1. Check the documentation
2. Search existing issues
3. Create a new issue with the "question" label
4. Join our community discussions

## 📞 Contact

- **GitHub Issues**: For bugs and feature requests
- **Discussions**: For general questions and ideas
- **Email**: contribute@vrom-inventory.com

Thank you for contributing to the VROM Inventory System! 🎉

