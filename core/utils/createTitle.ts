const createTitle = (title: String | undefined) =>
  `Blog@Roboh97${title ? ` - ${title}` : ""}`;

export default createTitle;
