# Wesco Frontend Developer Assessment
This assessment will test your understanding of Source Control, JavaScript, TypeScript, HTML, CSS and Unit Tests.  
  
This project utilizes [DOM Manipulation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents) to create HTML elements and [Sass](https://sass-lang.com/guide) for styling. At first we'll focus on fixing an existing block to help familiarize yourself with the pattern. After that is complete we'll move on to creating a component from scratch, where you can use the previous component as a reference.

## Project Structure
- **assets/** - File assets (images, icons, etc) consumed by the blocks
- **blocks/** - Individual block components
  - **[name]/** - Block component
    - **[name].html** HTML page to render our block. This page should be kept minimal as we'll append all designs in the TypeScript file.
    - **[name].json** JSON Data consumed by our block. This data should be imported and marshalled in to a type defined in the `types/` folder.
    - **[name].scss** Stylesheet imported in to our block. This project uses Sass with BEM naming conventions.
    - **[name].ts** TypeScript/JS file used to 'decorate' our block. This script will query the `app` div within our HTML file and append elements as needed.
    - **[name].spec.ts** Unit tests specific to this block
- **types/** - TypeScript type definitions. When creating a new block a type should be created for any JSON data we're looking to marshal in.

## Rules
* Your finished product must be in a branch with the following naming convention: `<your-name>-assessment`. Open a Pull Request when you are ready to submit your finished assessment.
* You must include at least one unit test and `npm run test` must pass
  
## Instructions
### Step 1 - Project Setup
* Clone the repository
* Enter the project directory with `cd frontend-assessment`
* Install node dependencies with `npm install`
* Start the development server with `npm run dev`
  * Navigate to [http://localhost:3000/card.html](http://localhost:3000/card.html) to see the Card block
  * Navigate to [http://localhost:3000/grid.html](http://localhost:3000/grid.html) to see the Grid block
* Create a new branch with the following naming convention: `<your-name>-assessment`

### Step 2 - Fixing the Card Block
<img src="https://user-images.githubusercontent.com/28965487/222769400-6e6db4a7-e98e-4174-a082-bffe7ff25d5e.png" width="500">  

In this assessment the Card block is unfinished. Our goal is to complete the block and write unit tests that pass and cover our code.  
* In the script located at `src/blocks/card/card.ts`, you will find a single `decorate` function. This function is designed to query the `app` div in the HTML file and append changes as a child to this element.
* Append missing elements to the Card block and update styling to match the provided example above.

### Step 3 - Testing the Card Block
In the same directory, open the `card.spec.ts` file. In here we'll want to write unit tests to make sure our block renders correctly to the DOM. Generate a code coverage report with `npm run test:cov` to generate a report you can review. There is one test already included in this file.

### Step 4 - Creating the Grid Block
<img src="https://user-images.githubusercontent.com/28965487/222769912-7c019ada-5a65-4a16-98b1-54afe17c00f9.png" width="500">  

Now that you've had some practice with an existing block, let's try to make one from scratch. In the `src/blocks/grid` directory you'll find a similar file structure to the `card` block, but this block component only has a rough outline of a block component.
* Create a mobile-first grid that renders 5 boxes in a column on views **less than 768px**.
* If the view **exceeds** the mobile breakpoint (768px) render them in a row.
* See the example above for reference, exact styling does not need to match. 
  
### Step 5 - Testing the Grid Block
Similarly to what we did in the Card block, we'll want to generate a code coverage report and write tests that cover the UI changes you've made.  

**Hint: To save yourself time we recommend copying over the test file from the Card block and refactor it to work with the Grid component.**

### Step 6 - Push your changes
* Commit and push your changes to your branch
* When you're ready, open a Pull Request against the `main` branch.
* Notify a member from Wesco that your changes have been submitted and we will begin review.

Thank you for participating in our Frontend Developer Assessment! This assessment is still in it's early stages of development and we value your feedback. Please provide and critiques during our review of your assessment.  

Best of luck!
