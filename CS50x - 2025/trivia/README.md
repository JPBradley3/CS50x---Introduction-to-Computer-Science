# Trivia Quiz Webpage



## Overview

This project is a simple interactive trivia quiz implemented as a web page using HTML, CSS, and JavaScript. It includes both a multiple-choice section and a free-response question, providing users with immediate feedback on their answers.

## Features

- **Multiple Choice Questions:**

The quiz includes multiple choice questions with clickable answer buttons. Selecting an answer disables all options for that question and provides feedback by changing button colors (green for correct, red for incorrect) and displaying a "Correct!" or "Incorrect" message.

- **Free Response Question:**

Includes a free text input where users can type their answer and click a "Check Answer" button. The input is evaluated case-insensitively and ignores leading/trailing whitespace.

- **Immediate Feedback:**

Both multiple choice and free response questions provide instant visual feedback using colors and text to indicate correctness.

- **Accessibility:**

Buttons are disabled once an answer is selected to prevent changing answers after submission.

## Implementation Details

### Technologies

- HTML5 for page structure

- CSS for styling (linked via `styles.css`)

- JavaScript for interactivity and answer validation

- Google Fonts (Montserrat) for typography

### Key JavaScript Functions

- Event listeners are attached to each answer button and the free response check button upon DOM content loaded.

- Clicking an answer button disables all options for that question, changes the clicked button's background color (green for correct, red for incorrect), and updates the feedback text.

- The free response answer is normalized by trimming whitespace and converting to lowercase before comparison to accommodate various user input forms.

## Usage

1. Open the `index.html` file in a web browser.

2. Select the correct answer from the multiple choice options.

3. For the free response question, enter your answer and click the ``Check Answer'' button.

4. Feedback will appear below each question immediately.

## Customization

- Additional questions can be added by following the existing HTML structure.

- Modify the JavaScript to add new answer validation logic as needed.

- Customize the CSS stylesheet `styles.css` to change the visual style.

