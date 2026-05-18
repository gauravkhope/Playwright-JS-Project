# Playwright JavaScript Automation Framework

<div align="center">

<h3>Enterprise-Level End-to-End Test Automation Framework</h3>

<p>
Modern <b>JavaScript-based</b> automation framework built using <b>Playwright</b> for scalable <b>UI + API Testing</b>, following industry-standard architecture and best practices.
</p>

<p>

![Playwright](https://img.shields.io/badge/Playwright-Automation-green?style=for-the-badge\&logo=playwright)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge\&logo=javascript)
![NodeJS](https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge\&logo=node.js)
![Allure](https://img.shields.io/badge/Allure-Reporting-orange?style=for-the-badge)
![Cross Browser](https://img.shields.io/badge/Cross--Browser-Testing-blue?style=for-the-badge)

</p>

</div>

---

# 📌 Introduction

This repository contains a **professional Playwright Automation Framework** developed using modern JavaScript practices and scalable test automation architecture.

The framework is designed to simulate a **real-world enterprise QA automation environment**, supporting:

* ✅ End-to-End UI Testing
* ✅ API Testing
* ✅ Data-Driven Testing
* ✅ Parallel Execution
* ✅ Cross-Browser Validation
* ✅ Reusable Page Object Model
* ✅ Advanced Reporting & Debugging
* ✅ CI/CD Ready Architecture

The project demonstrates how modern automation frameworks are structured in enterprise-level applications and can be used for:

* Portfolio projects
* Learning advanced Playwright concepts
* Real-time automation practice
* QA/SDET interview preparation
* Scalable testing implementation

---

# 🚀 Tech Stack

| Technology              | Purpose                   |
| ----------------------- | ------------------------- |
| JavaScript (ES6+)       | Core programming language |
| Playwright              | UI & API automation       |
| Node.js                 | Runtime environment       |
| Allure Reports          | Advanced reporting        |
| Playwright HTML Reports | Test execution reporting  |
| JSON                    | Test data management      |
| Git & GitHub            | Version control           |
| VS Code                 | Development environment   |

---

# 🏗️ Framework Architecture

The framework follows a clean and maintainable architecture using the **Page Object Model (POM)** design pattern.

```bash
playwright_project/
│
├── playwright.config.js          # Global Playwright configuration
├── package.json                  # Dependencies & scripts
│
├── pageObjects/                  # POM classes
│   ├── LoginPage.js
│   ├── DashboardPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
│
├── tests/                        # Test suites
│   ├── ui/
│   ├── api/
│   └── e2e/
│
├── testData/                     # JSON test datasets
│   └── loginData.json
│
├── utils/                        # Reusable utility functions
│   ├── apiUtils.js
│   ├── helpers.js
│   └── customFixtures.js
│
├── screenshots/                  # Failure screenshots
├── test-results/                 # Execution artifacts
├── playwright-report/            # HTML reports
├── allure-results/               # Allure raw results
│
└── README.md
```

---

# ✨ Key Features

## ✅ Page Object Model (POM)

The framework uses a modular **Page Object Model** structure to improve:

* Reusability
* Maintainability
* Scalability
* Readability

Each application page contains isolated locators and methods, making tests cleaner and easier to maintain.

---

## ✅ Data-Driven Testing

Supports dynamic test execution using external JSON data files.

Example:

* Multiple login users
* Different checkout scenarios
* Role-based testing
* Parameterized API requests

---

## ✅ UI + API Automation

The framework combines:

* Frontend UI automation
* Backend API testing

This enables:

* Faster setup flows
* Token-based authentication
* API validations
* Hybrid testing approaches

---

## ✅ Parallel Execution

Optimized for faster execution using Playwright workers.

Supports:

* Parallel testing
* Serial execution
* Fully isolated test runs

---

## ✅ Cross-Browser Testing

Run tests across multiple browsers:

* Chromium
* Firefox
* WebKit
* Microsoft Edge

Ensures consistent behavior across environments.

---

## ✅ Advanced Reporting

Integrated with:

### Playwright HTML Reports

Provides:

* Execution summary
* Test duration
* Failure logs
* Screenshots
* Traces

### Allure Reports

Provides:

* Rich dashboards
* Test trends
* Step-level reporting
* Attachments & debugging insights

---

## ✅ Debugging Support

Framework automatically captures:

* Screenshots on failure
* Videos
* Execution traces
* Logs

This helps in faster root-cause analysis.

---

# 🧪 Test Coverage

The framework includes automation scenarios such as:

## UI Test Scenarios

* Login functionality
* Product search
* Add to cart
* Cart validation
* Checkout workflow
* Order confirmation

## API Test Scenarios

* Authentication APIs
* Token generation
* CRUD operations
* Order creation APIs
* Response validations

## End-to-End Scenarios

* Complete user purchase flow
* API + UI combined execution
* Dynamic session handling

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone <your-repository-url>
cd playwright_project
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Install Playwright Browsers

```bash
npx playwright install
```

---

# ▶️ Running Tests

## Run All Tests

```bash
npm test
```

---

## Run Tests in Headed Mode

```bash
npm run test:headed
```

---

## Run Tests in UI Mode

```bash
npm run test:ui
```

---

## Run Specific Test File

```bash
npx playwright test tests/ui/login.spec.js
```

---

## Run Tests on Specific Browser

```bash
npx playwright test --project=chromium
```

---

# 📊 Reports

## Open Playwright HTML Report

```bash
npx playwright show-report
```

---

## Generate Allure Report

```bash
allure serve allure-results
```

> Requires Allure Commandline installation.

---

# 🔥 Example Automation Flow

The framework demonstrates complete automation flows such as:

```text
Login → Search Product → Add to Cart → Checkout → Payment → Order Validation
```

Also includes:

```text
API Authentication → Token Handling → Create Order → UI Validation
```

---

# 🧠 Framework Design Principles

This framework is designed with enterprise automation practices in mind:

* Clean Architecture
* Reusable Components
* Low Maintenance
* Scalable Structure
* Separation of Concerns
* Real-World Automation Standards

---

# 📈 Why This Project Stands Out

Unlike beginner automation repositories, this project focuses on:

✅ Real-world framework structure
✅ Enterprise-level folder organization
✅ Combined UI + API automation
✅ Reporting & debugging strategies
✅ Scalable Page Object architecture
✅ Cross-browser execution
✅ Maintainable automation design

This makes the project highly valuable for:

* SDET portfolios
* QA Automation interviews
* GitHub showcases
* Real-time project demonstrations

---

# 🔄 CI/CD Ready

The framework can be easily integrated with:

* GitHub Actions
* Jenkins
* Azure DevOps
* GitLab CI/CD

Supports automated execution in pipelines for continuous testing workflows.

---

# 🤝 Contribution

Contributions are welcome.

If you'd like to improve the framework:

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Open a pull request

---

# 📚 Learning Resources

* [Playwright Official Documentation](https://playwright.dev/?utm_source=chatgpt.com)
* [Node.js Official Website](https://nodejs.org/?utm_source=chatgpt.com)
* [Allure Reporting Framework](https://allurereport.org/?utm_source=chatgpt.com)
* [GitHub Actions Documentation](https://docs.github.com/en/actions?utm_source=chatgpt.com)

---

# 👨‍💻 Author

## Gaurav Khope

QA Automation Engineer | SDET Enthusiast | Playwright Automation Developer

Focused on building scalable, enterprise-grade automation frameworks using modern testing technologies.

---

# 📄 License

This project is licensed under the MIT License.

---

<div align="center">

### ⭐ If you found this project useful, consider giving it a Star on GitHub!

</div>
