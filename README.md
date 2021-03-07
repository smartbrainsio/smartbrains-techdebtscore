# Smart Brains
## Tech Debt Score

### Overview 

Tech Debt Score is a simple and subjective model used to measure and visualize your organization's holistic technical debt.  Based on the user's input, the model will produce a score in the range of 0-800.  0 indicates low technical debt management maturity.  Conversely, 800 indicates high technical debt management maturity.

Each of the 8 featureis in the model has a weight.  Not all features are weighted equally.

### Visualization

Tech Debt Score uses a radar plot to visualize the model the calculated score.

### Dimensions

#### Coding practices, style & formatting

This model dimension is a score of 0-100 that measures the coding policies, standards and procedures for your application and organization.

#### Modularity & coupling

This model dimension is a score of 0-100 that measures the strategy & methods for coupling and decoupling applications & services within your organization.

#### Test coverage & automated testing

This model dimension is a score of 0-100 that measures the test coverage and automated testing policies, standards and procedures for your application and organization.

#### Continuous integration & delivery

This model dimension is a score of 0-100 that measures the level of CI/CD deployed for your application and organization.

#### Lifecycle

This model dimension is a score of 0-100 that measures the end of service life management and lifecyle management policies, standards and procedures for your application and organization.

#### Documentation

This model dimension is a score of 0-100 that measures the documentation & asset management policies, standards and procedures for your application and organization.

#### Homogeneity of tech stack

This model dimension is a score of 0-100 that measures the homogeneity of the technical stack policies, standards and procedures for your application and organization.

#### Complexity

This model dimension is a score of 0-100 that measures the cyclomatic complexity & architectural policies, standards and procedures for your application and organization.

## License

MIT License

Copyright (c) 2020 Jimmy Hurff

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
