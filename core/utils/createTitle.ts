/**
 * Creates the page title by inserting a text in the given placeholder.
 *
 * @param title the text to insert in the placeholder.
 * @returns the created title.
 */
const createTitle = (title: String | undefined) =>
  `Robin Ohs${title ? ` - ${title}` : ""}`;

export default createTitle;
