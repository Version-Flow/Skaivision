import { existsSync, mkdirSync, writeFileSync } from "fs";

const pages = [
  "Roles",
  "Permission",
  "SchoolType",
  "SchoolStatus",
  "Country",
  "Region",
  "District",
  "School",
  "Class",
  "AccreditationBody",
  "Packages",
  "Relationship",
  "Ethnicity",
  "Religion",

];

// Ensure the 'src/pages/bank' directory exists
const dir = "src/pages/admin/settings";
if (!existsSync(dir)) {
  mkdirSync(dir, { recursive: true });
}

pages.forEach((page) => {
  const filePath = `${dir}/${page}.jsx`;

  // Check if the file already exists
  if (!existsSync(filePath)) {
    const content = `

const ${page} = () => {
  return (
    <>
      <h5 className="text-monospace">${page} Which contains Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor mollitia voluptatibus ea cumque explicabo laborum quia maxime voluptatem ex optio beatae minus, deleniti provident </h5>
    </>
  );
};

export default ${page};
`;

    writeFileSync(filePath, content);
    console.log(`${page}.jsx created successfully!`);
  } else {
    console.log(`${page}.jsx already exists, skipping creation.`);
  }
});
